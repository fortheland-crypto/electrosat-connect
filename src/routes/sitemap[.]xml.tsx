import { createFileRoute } from "@tanstack/react-router";

const routes = [
  "/",
  "/satellite-tv",
  "/cctv",
  "/shop",
  "/works",
  "/about",
  "/contacts",
];

export const Route = createFileRoute("/sitemap[.]xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = new URL(request.url).origin;
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (path) =>
      `  <url><loc>${origin}${path}</loc><changefreq>monthly</changefreq><priority>${path === "/" ? "1.0" : "0.8"}</priority></url>`,
  )
  .join("\n")}
</urlset>`;
        return new Response(body, {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
