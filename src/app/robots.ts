import type { MetadataRoute } from "next";
import { SITE } from "@/constants/site";

/**
 * Robots policy — env-aware.
 * Staging / preview environments disallow ALL crawlers (DIP-REDUCER: never let staging get indexed).
 * Production allows all crawlers + points to the sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  const isProduction =
    process.env.VERCEL_ENV === "production" ||
    (process.env.NODE_ENV === "production" && !process.env.VERCEL_ENV);

  if (!isProduction) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/_next/"] },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
