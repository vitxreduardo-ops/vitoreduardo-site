import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

const bots = ["*", "Googlebot", "Bingbot", "GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: bots.map((userAgent) => ({ userAgent, allow: "/" })),
    sitemap: `${site.url}/sitemap.xml`,
  };
}
