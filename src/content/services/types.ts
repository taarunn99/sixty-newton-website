/**
 * Service-page content schema.
 * Each /disciplines/[slug]/page.tsx route renders generically from a content
 * module that conforms to ServicePage. Authoring lives in plain TS files so
 * editors get type-safety, and the generic renderer stays dumb.
 */

import type { ApplicatorCertificate } from "@/constants/site";

export type ServiceBucket =
  | "Waterproofing Systems"
  | "Flooring Systems"
  | "Tile & Stone Works"
  | "Decorative Concrete"
  | "Coatings & Protection"
  | "Building Repair & Insulation";

export type ApplicatorBrand = ApplicatorCertificate["slug"];

/** One application option in the interactive SystemSelector. */
export interface SystemMatrixOption {
  slug: string;
  label: string;
  recommended: boolean;
  system: { brand: string; name: string; applicationMethod: string };
  spec: string[];               // bullet points
  tdsHref?: string;             // manufacturer TDS link
}

export interface SystemMatrix {
  intro: string;
  options: SystemMatrixOption[];
  closingNote?: string;
}

/** One layer of a cross-section build-up. */
export interface CrossSectionLayer {
  index: number;                // top-to-bottom display order (1 = top)
  title: string;
  detail: string;               // e.g. "Mapei Primer SN — 100–150 g/m²"
}

export interface CrossSection {
  intro?: string;
  layers: CrossSectionLayer[];
  notes?: string[];
}

export interface ProcessStep {
  index: number;
  title: string;
  body: string;
  duration: string;
}

export interface ApplicationFit {
  label: string;
  icon: string;       // lucide icon name (free-string; renderer maps to component)
}

export interface SpecBlock {
  title: string;
  rows: { label: string; value: string }[];
}

export interface FAQItem {
  q: string;
  a: string;          // plain text — also used in FAQPage JSON-LD
}

export interface ReferenceProject {
  name: string;
  location: string;
  year: string;
  scope: string;        // 1-line description
  imageUrl?: string;    // optional; falls back to a placeholder pattern
  href?: string;        // optional future case-study link
}

export interface RelatedService {
  slug: string;
  title: string;
  note: string;         // why it's related
}

export interface BeforeAfterPair {
  beforeImageUrl: string;
  afterImageUrl: string;
  caption?: string;
}

export interface ColourSwatch {
  slug: string;
  label: string;
  hex: string;
  previewImageUrl?: string;
}

/** Page-level meta — feeds buildMetadata(). */
export interface ServiceMeta {
  title: string;          // <title>
  description: string;    // meta description
  keywords?: string[];
  ogImage?: string;
}

export interface ComparisonTable {
  /** Column headers — first column is the row-label column (no header text required). */
  columns: string[];
  /** Each row: first cell is the row label, remaining cells map 1:1 to `columns`. */
  rows: { label: string; cells: string[] }[];
  /** Optional caption shown below the table. */
  caption?: string;
}

/** What renders on the page, in declared order. */
export type ServiceSection =
  | { type: "intro";          eyebrow: string; heading: string; body: string }
  | { type: "system-matrix";  eyebrow: string; heading: string; matrix: SystemMatrix }
  | { type: "cross-section";  eyebrow: string; heading: string; crossSection: CrossSection }
  | { type: "process";        eyebrow: string; heading: string; steps: ProcessStep[] }
  | { type: "applications";   eyebrow: string; heading: string; items: ApplicationFit[] }
  | { type: "brands";         eyebrow: string; heading: string; lines: { brand: string; systems: string }[] }
  | { type: "projects";       eyebrow: string; heading: string; projects: ReferenceProject[] }
  | { type: "warranty";       eyebrow: string; heading: string; specs: SpecBlock[]; body: string }
  | { type: "before-after";   eyebrow: string; heading: string; pairs: BeforeAfterPair[] }
  | { type: "swatch-picker";  eyebrow: string; heading: string; swatches: ColourSwatch[]; body?: string }
  | { type: "comparison";     eyebrow: string; heading: string; table: ComparisonTable; body?: string }
  | { type: "faq";            eyebrow: string; heading: string; items: FAQItem[] }
  | { type: "related";        eyebrow: string; heading: string; items: RelatedService[] }
  | { type: "cta";            heading: string; body: string };

export interface ServicePage {
  slug: string;
  bucket: ServiceBucket;
  meta: ServiceMeta;
  hero: {
    eyebrow: string;        // "BUCKET · BRAND-CERTIFIED APPLICATOR"
    h1: string;
    sub: string;
    imageHint?: string;     // editorial: optional small framed image below CTAs
  };
  primaryBrands: ApplicatorBrand[];  // subset of approved applicators
  sections: ServiceSection[];
}
