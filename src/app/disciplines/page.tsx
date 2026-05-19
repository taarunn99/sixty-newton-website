import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { DisciplineReel } from "@/components/sections/discipline-reel";
import { buttonVariants } from "@/components/ui/button";
import { DISCIPLINES } from "@/constants/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Disciplines",
  description:
    "Specialist contracting disciplines — waterproofing, microtopping, epoxy, marble installation, large-format tiling, painting and maintenance. Delivered across the UAE.",
  path: "/disciplines",
});

export default function DisciplinesPage() {
  const publishedCount = DISCIPLINES.filter(d => d.published).length;

  return (
    <>
      {/* PageHero — bottom border + bottom padding cut so the reel sits
          seamlessly under the subtitle on this route. */}
      <PageHero
        eyebrow="What we do"
        title="Disciplines"
        subtitle="Specialist services delivered under one contract — coordinated from substrate to finish."
        className="border-b-0 pb-6 md:pb-10"
      />

      {/* Auto-scrolling reel of discipline icons — seamless under the subtitle */}
      <DisciplineReel />

      <section className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 py-20 md:py-28">
        {/* Wayfinder strip — tells visitors which disciplines have deep dives */}
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
          <p className="eyebrow text-gold flex items-center gap-3">
            <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-gold" />
            <span>14 disciplines · {publishedCount} with full deep-dive pages</span>
          </p>
          <p className="eyebrow text-fg-subtle">Tap any gold tile to explore</p>
        </div>

        <ul className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3 border border-border-hairline">
          {DISCIPLINES.map(d => {
            const tileContent = (
              <>
                <p className={cn(
                  "eyebrow",
                  d.published ? "text-gold" : "text-fg-subtle",
                )}>
                  {d.short}
                </p>
                <h2 className="font-serif font-light text-3xl text-fg mt-4 leading-tight tracking-[-0.01em]">
                  {d.title}
                </h2>
                <p className="mt-4 text-fg-muted text-sm leading-relaxed">{d.description}</p>

                {d.published ? (
                  // Visual-only gold button — the tile-wide <Link> handles the
                  // click. Using a styled <span> avoids nesting <button> in <a>.
                  <span className={cn(buttonVariants({ variant: "primary", size: "md" }), "mt-7 inline-flex pointer-events-none")}>
                    Explore
                    <ArrowRight
                      size={14}
                      aria-hidden
                      className="ml-1 transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                ) : (
                  <p className="mt-7 eyebrow text-fg-subtle">Page in build</p>
                )}
              </>
            );

            return (
              <li key={d.slug}>
                {d.published ? (
                  <Link
                    href={`/disciplines/${d.slug}`}
                    className="group relative block h-full bg-bg p-8 md:p-10 transition-colors duration-200 hover:bg-bg-elevated focus-visible:bg-bg-elevated"
                  >
                    <span
                      aria-hidden
                      className="absolute inset-0 ring-1 ring-inset ring-transparent transition-[box-shadow,border-color] duration-200 group-hover:ring-gold/40 group-focus-visible:ring-gold"
                    />
                    {tileContent}
                  </Link>
                ) : (
                  <div className="h-full bg-bg p-8 md:p-10 opacity-80">
                    {tileContent}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
