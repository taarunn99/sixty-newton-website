import type { ServicePage } from "@/content/services/types";

/**
 * Lazy-load the content module for a given /disciplines/[slug] route.
 * Returns null if the slug doesn't have a content module yet (Phase-2
 * disciplines). Caller can then call notFound() upstream.
 */
export async function getServicePage(slug: string): Promise<ServicePage | null> {
  try {
    const mod = (await import(`@/content/services/${slug}`)) as { default: ServicePage };
    return mod.default;
  } catch {
    return null;
  }
}

/**
 * The slugs that have full content modules and should be statically generated.
 * Keep in sync with DISCIPLINES[].published — but kept as an explicit list so
 * Next.js's static-import analyser can resolve the dynamic import above.
 */
export const PUBLISHED_SERVICE_SLUGS = [
  "waterproofing",
  "epoxy-flooring",
  "microtopping",
] as const;
