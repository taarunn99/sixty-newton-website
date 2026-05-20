import type { ProjectPage } from "@/content/projects/types";

/**
 * Lazy-load the case-study content module for a /portfolio/[slug] route.
 * Returns null if no module exists yet — caller can notFound().
 */
export async function getProjectPage(slug: string): Promise<ProjectPage | null> {
  try {
    const mod = (await import(`@/content/projects/${slug}`)) as { default: ProjectPage };
    return mod.default;
  } catch {
    return null;
  }
}

/**
 * Slugs with full case-study modules — drives generateStaticParams + the
 * "Read the case study" CTA on /portfolio hub tiles. Keep in sync with
 * REFERENCE_PROJECTS[].published.
 */
export const PUBLISHED_PROJECT_SLUGS = [
  "atlantis-the-royal",
  "al-wathba-desert-resort",
  "st-regis-developments",
  "ahlatci-gold-refinery",
  "address-boulevard-hotel",
  "jumeirah-golf-villas",
  "dubai-hills-villas",
  "le-meridien-hotels",
  "mashaallah-building",
  "delhi-metro",
  "patna-metro-station",
  "omaxe-mall",
] as const;
