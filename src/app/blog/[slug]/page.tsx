import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";

import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/jsonld";
import { getBlogPost, PUBLISHED_BLOG_SLUGS } from "@/lib/blog";
import { BlogSectionRenderer } from "@/components/services/blog-section-renderer";
import { DualCTA } from "@/components/services/dual-cta";
import { RelatedServices } from "@/components/services/related-services";
import { SITE, DISCIPLINES } from "@/constants/site";

export function generateStaticParams() {
  return PUBLISHED_BLOG_SLUGS.map(slug => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return { title: "Not found" };
  return buildMetadata({
    title: post.meta.title,
    description: post.meta.description,
    keywords: post.meta.keywords ? [...post.meta.keywords] : undefined,
    path: `/blog/${post.slug}`,
  });
}

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][m - 1];
  return `${d} ${month} ${y}`;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  // Article + BreadcrumbList JSON-LD
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home",     href: "/" },
    { name: "Insights", href: "/blog" },
    { name: post.title,  href: `/blog/${post.slug}` },
  ]);
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.meta.description,
    datePublished: post.publishedAt,
    author: { "@type": "Person", name: post.author },
    publisher: { "@id": `${SITE.url}#organization` },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
  };

  // Related discipline cross-links
  const related = post.relatedDisciplines
    .map(slug => DISCIPLINES.find(d => d.slug === slug))
    .filter((d): d is NonNullable<typeof d> => Boolean(d))
    .map(d => ({
      slug: d.slug,
      title: d.title,
      note: d.description,
    }));

  return (
    <>
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-[820px] px-5 md:px-12 lg:px-16 pt-28 md:pt-32 pb-2 text-xs"
      >
        <ol className="flex flex-wrap items-center gap-2 text-fg-subtle">
          <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
          <ChevronRight size={12} aria-hidden />
          <li><Link href="/blog" className="hover:text-gold transition-colors">Insights</Link></li>
          <ChevronRight size={12} aria-hidden />
          <li aria-current="page" className="text-gold truncate max-w-[60vw]">{post.title}</li>
        </ol>
      </nav>

      <header className="mx-auto max-w-[820px] px-5 md:px-12 lg:px-16 pt-8 md:pt-12 pb-12 md:pb-16">
        {post.tags.length > 0 && (
          <ul className="flex flex-wrap gap-x-3 gap-y-2 mb-6">
            {post.tags.map(t => (
              <li
                key={t}
                className="text-xs font-mono text-gold border border-gold/40 rounded-full px-3 py-1"
              >
                {t}
              </li>
            ))}
          </ul>
        )}
        <h1 className="font-serif font-extralight text-fg text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.02] tracking-[-0.02em]">
          {post.title}
        </h1>
        <p className="mt-6 font-serif font-light text-fg-muted text-xl md:text-2xl leading-relaxed">
          {post.lede}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-fg-subtle border-t border-border-hairline pt-6">
          <span className="eyebrow text-fg-muted">{post.author}</span>
          <span aria-hidden>·</span>
          <span>{post.authorRole}</span>
          <span aria-hidden>·</span>
          <span>{formatDate(post.publishedAt)}</span>
          <span aria-hidden>·</span>
          <span>{post.readTime}</span>
        </div>
      </header>

      {/* Body */}
      <article className="mx-auto max-w-[820px] px-5 md:px-12 lg:px-16 pb-20 md:pb-28">
        <div className="space-y-7">
          {post.sections.map((section, idx) => (
            <BlogSectionRenderer key={idx} section={section} />
          ))}
        </div>
      </article>

      {/* Related disciplines */}
      {related.length > 0 && (
        <section className="border-t border-border bg-bg-inset">
          <div className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 py-20 md:py-24">
            <p className="eyebrow text-gold flex items-center gap-3">
              <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-gold" />
              <span>Related disciplines</span>
            </p>
            <h2 className="font-serif font-extralight text-fg mt-5 text-[clamp(1.75rem,4.2vw,3rem)] leading-[1.04] tracking-[-0.02em] max-w-3xl">
              What the field notes connect to.
            </h2>
            <RelatedServices items={related} className="mt-10" />
          </div>
        </section>
      )}

      {/* Closing CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 py-20 md:py-28 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 eyebrow text-gold hover:text-gold-hover transition-colors"
          >
            <ArrowLeft size={14} aria-hidden />
            <span>All insights</span>
          </Link>
          <h2 className="mt-8 font-serif font-extralight text-fg text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] tracking-[-0.02em]">
            Got a brief to discuss?
          </h2>
          <p className="mt-6 max-w-2xl mx-auto font-serif font-light text-fg-muted text-lg md:text-xl leading-relaxed">
            We answer questions in writing before we send a quotation. Free site survey across the UAE.
          </p>
          <DualCTA className="mt-10" align="center" />
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbs)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(article)} />
    </>
  );
}
