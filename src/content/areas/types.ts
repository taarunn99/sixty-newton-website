/**
 * Area = a Tier-1 geographic locality we target for local-SEO.
 * One Area per /disciplines/[slug]/[area] URL.
 */
export interface Area {
  /** Lowercase, hyphen-separated. Becomes the URL segment. */
  slug: string;
  /** Display short — used in headings and intros. */
  name: string;
  /** Long-form name used in <title>, breadcrumbs, "in ..." constructions. */
  searchName: string;
  /** Which Emirate the area belongs to. */
  emirate: "Dubai" | "Abu Dhabi" | "Sharjah";
  /** Up to 5 landmark / address references for area-specific copy. */
  landmarks: readonly string[];
  /** A short noun-phrase describing what makes the area distinct. */
  vibe: string;
  /** 80–120 word paragraph unique to the area — drives SEO body. */
  context: string;
}
