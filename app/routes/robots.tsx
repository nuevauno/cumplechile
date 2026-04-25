/**
 * /robots.txt — politica de crawlers. Permite Googlebot, Bingbot, los
 * crawlers de IA mas comunes (GPTBot, ClaudeBot, PerplexityBot, etc.) y
 * apunta al sitemap.
 */
export async function loader({ request }: { request: Request }) {
  const origin = new URL(request.url).origin;
  const body = `# chilecumple.com — Observatorio civico del gobierno de Jose Antonio Kast
# Licencia editorial CC BY-SA 4.0. Citas con atribucion bienvenidas.

User-agent: *
Allow: /
Disallow: /__sitemap.xml

# Crawlers IA — explicitamente permitidos para indexacion y citacion
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: CCBot
Allow: /

# Sitemap
Sitemap: ${origin}/sitemap.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
