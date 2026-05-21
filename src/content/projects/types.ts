/**
 * Case-study content schema.
 * Each /portfolio/[slug] route renders generically from a content module.
 */

export interface ProjectMeta {
  title: string;
  description: string;
  keywords?: string[];
}

export interface ProgrammeFact {
  label: string;
  value: string;
}

export interface SystemApplied {
  discipline: string;        // e.g. "Waterproofing"
  disciplineSlug?: string;   // optional link to /disciplines/{slug}
  brand: string;             // e.g. "MAPEI"
  products: string[];        // e.g. ["Mapelastic Smart", "Mapenet 150"]
}

export interface ProjectImages {
  /** Hero image path under /public — usually /images/projects/{slug}/hero.webp */
  hero?: string;
  /** Alt text for the hero image. Falls back to "<project name> — Sixty Newton" if absent. */
  heroAlt?: string;
  /** Gallery image paths, in display order. */
  gallery?: string[];
}

export interface ProjectPage {
  slug: string;
  meta: ProjectMeta;
  hero: {
    eyebrow: string;        // "Reference project · Hospitality"
    h1: string;             // project name
    sub: string;            // 1-sentence summary
  };
  programme: {
    location: string;
    year: string;
    scope: string;          // short scope summary
    facts: ProgrammeFact[]; // size, duration, team, etc.
  };
  story: {
    challenge: string;      // body paragraph(s)
    approach: string;
    outcome: string;
  };
  systemsApplied: SystemApplied[];
  /** Photo bundle for the case-study page renderer + thumbnails. */
  images?: ProjectImages;
  relatedDisciplines: { slug: string; title: string; note: string }[];
  relatedProjects: { slug: string; name: string; location: string }[];
}
