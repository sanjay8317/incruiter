/**
 * SEO Implementation:
 * - Robots.txt for search engine crawling
 * - Points to sitemap for discovery
 * - Allows all crawlers
 */
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://incruiter-liard.vercel.app/sitemap.xml",
  };
}