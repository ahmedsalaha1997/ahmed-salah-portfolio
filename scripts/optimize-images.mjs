import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import { dirname, extname, join, relative, resolve } from "node:path";
import sharp from "sharp";

const root = resolve("src");
const maxDimension = 1800;
const supportedSource = new Set([".png"]);

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  }));
  return files.flat();
}

const allFiles = await walk(root);
const sourceImages = allFiles.filter((file) => supportedSource.has(extname(file).toLowerCase()));

for (const source of sourceImages) {
  const output = source.replace(/\.png$/i, ".webp");
  const metadata = await sharp(source).metadata();
  const largestEdge = Math.max(metadata.width ?? 0, metadata.height ?? 0);
  const resize = largestEdge > maxDimension
    ? { width: maxDimension, height: maxDimension, fit: "inside", withoutEnlargement: true }
    : undefined;

  await sharp(source)
    .resize(resize)
    .webp({ quality: 82, alphaQuality: 85, smartSubsample: true })
    .toFile(output);

  const sourceSize = (await stat(source)).size;
  const outputSize = (await stat(output)).size;
  console.log(`${relative(process.cwd(), source)} → ${relative(process.cwd(), output)} (${Math.round(sourceSize / 1024)} KB → ${Math.round(outputSize / 1024)} KB)`);
}

const codeFiles = allFiles.filter((file) => /\.(?:tsx?|css)$/i.test(file));
for (const file of codeFiles) {
  const initial = await readFile(file, "utf8");
  const updated = initial.replace(/\.png(?=(["'`)\s]))/g, ".webp");
  if (updated !== initial) await writeFile(file, updated, "utf8");
}

