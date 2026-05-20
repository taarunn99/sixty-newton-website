/**
 * Blog post schema. Each post is a typed TS module under
 * src/content/blog/ — keeps content tight, no MDX parser overhead.
 */
export interface BlogPostMeta {
  title: string;
  description: string;
  keywords?: string[];
}

export interface BlogPost {
  slug: string;
  meta: BlogPostMeta;
  /** Display title (often shorter than meta title — appears as the H1). */
  title: string;
  /** ISO date string YYYY-MM-DD. */
  publishedAt: string;
  /** Author display name. */
  author: string;
  /** Author role / signature line. */
  authorRole: string;
  /** 1-sentence lede shown on listing + at top of post. */
  lede: string;
  /** Related discipline slugs — used for cross-linking back to /disciplines/{slug}. */
  relatedDisciplines: string[];
  /** Tag labels for filtering / display. */
  tags: string[];
  /** Estimated read time, e.g. "8 min read". */
  readTime: string;
  /** Markdown-like body. Section blocks rendered in declared order. */
  sections: BlogSection[];
}

export type BlogSection =
  | { type: "paragraph"; body: string }
  | { type: "heading";   body: string; level?: 2 | 3 }
  | { type: "list";      items: string[] }
  | { type: "callout";   eyebrow: string; body: string }
  | { type: "pullquote"; body: string; attribution?: string };
