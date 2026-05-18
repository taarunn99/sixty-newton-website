import type { MetadataRoute } from "next";
import { DISCIPLINES, SITE } from "@/constants/site";

/**
 * Dynamic sitemap. Add blog/portfolio routes here as they come online.
 * Served at /sitemap.xml — submit this URL to Search Console + Bing Webmaster on day 0.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "/",
    "/disciplines",
    "/approach",
    "/portfolio",
    "/about",
    "/blog",
    "/faq",
    "/request-a-quote",
    "/legal/privacy",
    "/legal/terms",
  ];

  return [
    ...staticRoutes.map(path => ({
      url: new URL(path, SITE.url).toString(),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.7,
    })),
    ...DISCIPLINES.map(d => ({
      url: new URL(`/disciplines/${d.slug}`, SITE.url).toString(),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
