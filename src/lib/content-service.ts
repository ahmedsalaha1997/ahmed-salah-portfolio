import { mergePortfolioContent, type PortfolioContent } from "./portfolio-content";
import { supabase, supabaseAnonKey, supabaseEnabled, supabaseUrl } from "./supabase";

const api = import.meta.env.VITE_CONTENT_API_URL
  || (window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost"
    ? "http://127.0.0.1:8787/api"
    : "/api");

async function request<T>(path: string, init: RequestInit = {}, token?: string): Promise<T> {
  const response = await fetch(`${api}${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...(token ? { Authorization: `Bearer ${token}` } : {}), ...init.headers },
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.error || "Request failed.");
  return body as T;
}

export const contentService = {
  usingSupabase: supabaseEnabled,

  getPublic: async () => {
    if (!supabase) return mergePortfolioContent(await request<Partial<PortfolioContent>>("/content"));

    // A same-origin endpoint prevents browser-side caching or cross-origin policies
    // from delaying public updates saved through the admin dashboard.
    try {
      const response = await fetch("/api/content", { cache: "no-store" });
      const rows = await response.json().catch(() => []);
      if (response.ok && Array.isArray(rows)) {
        return mergePortfolioContent((rows[0]?.content || {}) as Partial<PortfolioContent>);
      }
    } catch {
      // Continue with the direct public Supabase request as a graceful fallback.
    }

    const response = await fetch(`${supabaseUrl}/rest/v1/portfolio_content?id=eq.primary&select=content`, {
      headers: { apikey: supabaseAnonKey!, Authorization: `Bearer ${supabaseAnonKey!}`, Accept: "application/json" },
      cache: "no-store",
    });
    const rows = await response.json().catch(() => []);
    if (!response.ok) throw new Error("Unable to load the latest portfolio content.");
    return mergePortfolioContent(((rows as Array<{ content?: Partial<PortfolioContent> }>)[0]?.content || {}));
  },

  login: async (password: string, email?: string) => {
    if (!supabase) return request<{ token: string; expiresIn: number }>("/auth/login", { method: "POST", body: JSON.stringify({ password }) });
    if (!email) throw new Error("Enter your admin email address.");
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error || !data.session) throw error || new Error("Unable to start an admin session.");
    return { token: data.session.access_token, expiresIn: data.session.expires_in || 3600 };
  },

  getAdmin: async (token: string) => {
    if (!supabase) return mergePortfolioContent(await request<Partial<PortfolioContent>>("/admin/content", {}, token));
    const { data: session } = await supabase.auth.getSession();
    if (!session.session) throw new Error("Your admin session has expired.");
    const { data, error } = await supabase.from("portfolio_content").select("content").eq("id", "primary").maybeSingle();
    if (error) throw error;
    return mergePortfolioContent((data?.content || {}) as Partial<PortfolioContent>);
  },

  save: async (content: PortfolioContent, token: string) => {
    if (!supabase) return request<{ ok: true; content: PortfolioContent }>("/admin/content", { method: "PUT", body: JSON.stringify(content) }, token);
    const { error } = await supabase.from("portfolio_content").upsert({ id: "primary", content, updated_at: new Date().toISOString() });
    if (error) throw error;
    return { ok: true as const, content };
  },

  logout: async (token: string) => {
    if (!supabase) return request<{ ok: true }>("/auth/logout", { method: "POST" }, token);
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return { ok: true };
  },

  upload: async (dataUrl: string, token: string) => {
    if (!supabase) return request<{ url: string }>("/admin/upload", { method: "POST", body: JSON.stringify({ dataUrl }) }, token);
    const match = dataUrl.match(/^data:(image\/(?:png|jpeg|webp|gif));base64,(.+)$/);
    if (!match) throw new Error("Upload a PNG, JPEG, WebP, or GIF image.");
    const bytes = Uint8Array.from(atob(match[2]), (character) => character.charCodeAt(0));
    const extension = match[1].split("/")[1] === "jpeg" ? "jpg" : match[1].split("/")[1];
    const path = `portfolio/${crypto.randomUUID()}.${extension}`;
    const { error } = await supabase.storage.from("portfolio-images").upload(path, bytes, { contentType: match[1], upsert: false });
    if (error) throw error;
    const { data } = supabase.storage.from("portfolio-images").getPublicUrl(path);
    return { url: data.publicUrl };
  },
};
