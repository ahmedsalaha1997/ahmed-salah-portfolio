import { createServer } from "node:http";
import { createHash, randomBytes, timingSafeEqual } from "node:crypto";
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const contentPath = path.join(root, "server", "content.json");
const uploadsPath = path.join(root, "public", "uploads");
const envPath = path.join(root, ".env");

function readEnvFile(source) {
  return Object.fromEntries(source.split(/\r?\n/).flatMap((line) => {
    const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    return match ? [[match[1], match[2].replace(/^['"]|['"]$/g, "")]] : [];
  }));
}

let localEnv = {};
try { localEnv = readEnvFile(await readFile(envPath, "utf8")); } catch { /* .env is optional */ }
const env = { ...localEnv, ...process.env };
const port = Number(env.CONTENT_API_PORT || 8787);
const password = env.ADMIN_PASSWORD;
const allowedOrigins = new Set((env.ALLOWED_ORIGIN || "http://127.0.0.1:5174,http://localhost:5174").split(",").map((value) => value.trim()));
const sessions = new Map();
const loginAttempts = new Map();

await mkdir(uploadsPath, { recursive: true });

function send(response, status, body, origin) {
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  };
  if (origin && allowedOrigins.has(origin)) headers["Access-Control-Allow-Origin"] = origin;
  if (origin && allowedOrigins.has(origin)) headers["Vary"] = "Origin";
  response.writeHead(status, headers);
  response.end(JSON.stringify(body));
}

function getIp(request) {
  return request.socket.remoteAddress || "unknown";
}

async function readBody(request, limit = 6 * 1024 * 1024) {
  let body = "";
  for await (const chunk of request) {
    body += chunk;
    if (body.length > limit) throw new Error("Payload is too large.");
  }
  try { return JSON.parse(body || "{}"); } catch { throw new Error("Invalid JSON payload."); }
}

function isAuthenticated(request) {
  const token = request.headers.authorization?.replace(/^Bearer\s+/i, "");
  if (!token) return false;
  const expiry = sessions.get(token);
  if (!expiry || expiry < Date.now()) {
    sessions.delete(token);
    return false;
  }
  return true;
}

async function readContent() {
  return JSON.parse(await readFile(contentPath, "utf8"));
}

async function saveContent(content) {
  if (!content || typeof content !== "object" || Array.isArray(content)) throw new Error("Content must be an object.");
  const tempPath = `${contentPath}.tmp`;
  await writeFile(tempPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
  await rename(tempPath, contentPath);
}

function safeEqual(value, expected) {
  const valueHash = createHash("sha256").update(value).digest();
  const expectedHash = createHash("sha256").update(expected).digest();
  return timingSafeEqual(valueHash, expectedHash);
}

function makeId() {
  return `${Date.now().toString(36)}-${randomBytes(6).toString("hex")}`;
}

const imageTypes = new Map([
  ["image/png", "png"], ["image/jpeg", "jpg"], ["image/webp", "webp"], ["image/gif", "gif"],
]);

const api = createServer(async (request, response) => {
  const origin = request.headers.origin;
  if (request.method === "OPTIONS") {
    if (origin && allowedOrigins.has(origin)) {
      response.writeHead(204, { "Access-Control-Allow-Origin": origin, "Access-Control-Allow-Headers": "Content-Type, Authorization", "Access-Control-Allow-Methods": "GET,POST,PUT,OPTIONS", "Vary": "Origin" });
      response.end();
      return;
    }
    send(response, 403, { error: "Origin is not allowed." }, origin);
    return;
  }

  try {
    if (request.method === "GET" && request.url === "/api/content") {
      send(response, 200, await readContent(), origin);
      return;
    }

    if (request.method === "POST" && request.url === "/api/auth/login") {
      if (!password) return send(response, 503, { error: "ADMIN_PASSWORD is not configured on the server." }, origin);
      const ip = getIp(request);
      const attempts = loginAttempts.get(ip) || { count: 0, resetAt: Date.now() + 60_000 };
      if (attempts.resetAt < Date.now()) { attempts.count = 0; attempts.resetAt = Date.now() + 60_000; }
      if (attempts.count >= 8) return send(response, 429, { error: "Too many login attempts. Please try again shortly." }, origin);
      const body = await readBody(request, 16_384);
      if (typeof body.password !== "string" || !safeEqual(body.password, password)) {
        attempts.count += 1;
        loginAttempts.set(ip, attempts);
        return send(response, 401, { error: "Invalid password." }, origin);
      }
      loginAttempts.delete(ip);
      const token = randomBytes(32).toString("base64url");
      sessions.set(token, Date.now() + 8 * 60 * 60 * 1000);
      send(response, 200, { token, expiresIn: 8 * 60 * 60 }, origin);
      return;
    }

    if (request.method === "POST" && request.url === "/api/auth/logout") {
      const token = request.headers.authorization?.replace(/^Bearer\s+/i, "");
      if (token) sessions.delete(token);
      send(response, 200, { ok: true }, origin);
      return;
    }

    if (!request.url?.startsWith("/api/admin/")) return send(response, 404, { error: "Not found." }, origin);
    if (!isAuthenticated(request)) return send(response, 401, { error: "Your admin session has expired." }, origin);

    if (request.method === "GET" && request.url === "/api/admin/content") {
      send(response, 200, await readContent(), origin);
      return;
    }

    if (request.method === "PUT" && request.url === "/api/admin/content") {
      const body = await readBody(request, 2 * 1024 * 1024);
      await saveContent(body);
      send(response, 200, { ok: true, content: body }, origin);
      return;
    }

    if (request.method === "POST" && request.url === "/api/admin/upload") {
      const body = await readBody(request, 7 * 1024 * 1024);
      const match = typeof body.dataUrl === "string" && body.dataUrl.match(/^data:(image\/(?:png|jpeg|webp|gif));base64,([a-zA-Z0-9+/=]+)$/);
      if (!match) return send(response, 400, { error: "Upload a PNG, JPEG, WebP, or GIF image." }, origin);
      const bytes = Buffer.from(match[2], "base64");
      if (!bytes.length || bytes.length > 5 * 1024 * 1024) return send(response, 400, { error: "Images must be smaller than 5 MB." }, origin);
      const extension = imageTypes.get(match[1]);
      const fileName = `${makeId()}.${extension}`;
      await writeFile(path.join(uploadsPath, fileName), bytes);
      send(response, 201, { url: `/uploads/${fileName}` }, origin);
      return;
    }

    send(response, 404, { error: "Not found." }, origin);
  } catch (error) {
    send(response, 400, { error: error instanceof Error ? error.message : "Request failed." }, origin);
  }
});

api.listen(port, "127.0.0.1", () => {
  console.log(`Portfolio content API listening on http://127.0.0.1:${port}`);
});
