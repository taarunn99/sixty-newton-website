import type { MetadataRoute } from "next";
import { DISCIPLINES, REFERENCE_PROJECTS, SITE } from "@/constants/site";
import { AREAS } from "@/content/areas/_data";
import { PUBLISHED_BLOG_SLUGS } from "@/lib/blog";

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
    // Only published service pages enter the sitemap — others 404.
    ...DISCIPLINES.filter(d => d.published).map(d => ({
      url: new URL(`/disciplines/${d.slug}`, SITE.url).toString(),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    // Published case studies.
    ...REFERENCE_PROJECTS.filter(p => p.published).map(p => ({
      url: new URL(`/portfolio/${p.slug}`, SITE.url).toString(),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    // Local-SEO area landing pages — 14 disciplines × 13 areas = 182 entries.
    // Priority 0.85 sits between disciplines (0.9) and case studies (0.8).
    ...DISCIPLINES.filter(d => d.published).flatMap(d =>
      AREAS.map(a => ({
        url: new URL(`/disciplines/${d.slug}/${a.slug}`, SITE.url).toString(),
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.85,
      })),
    ),
    // Blog posts.
    ...PUBLISHED_BLOG_SLUGS.map(slug => ({
      url: new URL(`/blog/${slug}`, SITE.url).toString(),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
