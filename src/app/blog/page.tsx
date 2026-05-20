import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { DualCTA } from "@/components/services/dual-cta";
import { getAllPostSummaries } from "@/lib/blog";

export const metadata: Metadata = buildMetadata({
  title: "Insights — Applicator Notes & Technical Guides",
  description:
    "Sixty Newton insights — field notes on waterproofing, microtopping, epoxy, large-format finishes and concrete repair. Written by the team delivering the work, in plain language consultants and developers can act on.",
  path: "/blog",
  keywords: [
    "Sixty Newton blog",
    "applicator field notes UAE",
    "waterproofing guide Dubai",
    "microcement vs epoxy",
    "podium deck spec UAE",
  ],
});

function formatDate(iso: string): string {
  // ISO YYYY-MM-DD → "12 May 2026"
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][m - 1];
  return `${d} ${month} ${y}`;
}

export default async function BlogPage() {
  const posts = await getAllPostSummaries();

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Field notes from the applicators."
        subtitle="Plain-language technical writing on the specifications, materials and project disciplines that decide whether a finish lasts a year or fifteen. Written by the team delivering the work."
      />

      <section className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 py-16 md:py-24">
        <ul className="divide-y divide-border border-t border-b border-border">
          {posts.map(p => (
            <li key={p.slug}>
              <Link
                href={`/blog/${p.slug}`}
                className="group block py-10 md:py-12 transition-colors duration-200 hover:bg-bg-elevated/40"
              >
                <div className="grid gap-6 md:grid-cols-[1fr_minmax(0,2.2fr)_auto] md:gap-12 items-start">
                  {/* Date + meta */}
                  <div>
                    <p className="eyebrow text-gold">{formatDate(p.publishedAt)}</p>
                    <p className="mt-3 eyebrow text-fg-subtle">{p.readTime}</p>
                    <p className="mt-2 text-xs text-fg-subtle">{p.author}</p>
                  </div>

                  {/* Title + lede */}
                  <div>
                    <h2 className="font-serif font-extralight text-fg text-3xl md:text-4xl lg:text-5xl leading-[1.02] tracking-[-0.02em] group-hover:text-gold transition-colors duration-200">
                      {p.title}
                    </h2>
                    <p className="mt-5 font-serif font-light text-fg-muted text-lg leading-relaxed">
                      {p.lede}
                    </p>
                    {p.tags.length > 0 && (
                      <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
                        {p.tags.map(t => (
                          <li
                            key={t}
                            className="text-xs font-mono text-fg-subtle border border-border-hairline rounded-full px-3 py-1"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:block">
                    <ArrowRight
                      size={28}
                      aria-hidden
                      className="text-gold transition-transform duration-300 group-hover:translate-x-2"
                    />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {posts.length === 0 && (
          <p className="text-fg-muted text-center py-16">
            New posts coming soon.
          </p>
        )}
      </section>

      <section className="border-t border-border bg-bg-inset">
        <div className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 py-20 md:py-28 text-center">
          <h2 className="font-serif font-extralight text-fg text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] tracking-[-0.02em]">
            Got a brief to discuss?
          </h2>
          <p className="mt-6 max-w-2xl mx-auto font-serif font-light text-fg-muted text-lg md:text-xl leading-relaxed">
            We answer questions in writing before we send a quotation. Free site survey across the UAE.
          </p>
          <DualCTA className="mt-10" align="center" />
        </div>
      </section>
    </>
  );
}
