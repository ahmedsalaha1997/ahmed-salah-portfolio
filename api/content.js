export default async function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    response.status(405).json({ error: "Method not allowed." });
    return;
  }

  const supabaseUrl = process.env.VITE_SUPABASE_URL?.replace(/\/$/, "");
  const publicKey = process.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !publicKey) {
    response.status(500).json({ error: "Portfolio content is not configured." });
    return;
  }

  try {
    const upstream = await fetch(`${supabaseUrl}/rest/v1/portfolio_content?id=eq.primary&select=content`, {
      headers: {
        apikey: publicKey,
        Authorization: `Bearer ${publicKey}`,
        Accept: "application/json",
      },
    });
    const rows = await upstream.json().catch(() => []);

    response.setHeader("Cache-Control", "no-store, max-age=0");
    response.status(upstream.ok ? 200 : upstream.status).json(rows);
  } catch {
    response.status(502).json({ error: "Unable to load portfolio content." });
  }
}
