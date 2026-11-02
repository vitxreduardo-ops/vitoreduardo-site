import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { indexableRoutes } from "@/lib/routes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return indexableRoutes.map((path) => ({ url: `${site.url}${path}`, lastModified }));
}
