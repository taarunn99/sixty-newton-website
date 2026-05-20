import type { BlogPost } from "@/content/blog/types";

/**
 * Lazy-load a blog post content module by slug. Returns null if no module
 * exists at that slug.
 */
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const mod = (await import(`@/content/blog/${slug}`)) as { default: BlogPost };
    return mod.default;
  } catch {
    return null;
  }
}

/** Slugs of published blog posts — drives the index page + generateStaticParams. */
export const PUBLISHED_BLOG_SLUGS = [
  "podium-waterproofing-uae",
  "microcement-vs-epoxy-villa",
] as const;

export type BlogSlug = (typeof PUBLISHED_BLOG_SLUGS)[number];

/** Lightweight list of post summaries for the /blog index page. */
export async function getAllPostSummaries() {
  const posts = await Promise.all(
    PUBLISHED_BLOG_SLUGS.map(async slug => {
      const p = await getBlogPost(slug);
      if (!p) return null;
      return {
        slug: p.slug,
        title: p.title,
        lede: p.lede,
        publishedAt: p.publishedAt,
        readTime: p.readTime,
        tags: p.tags,
        author: p.author,
      };
    }),
  );
  return posts.filter((p): p is NonNullable<typeof p> => p !== null)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}
