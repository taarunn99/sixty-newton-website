import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { ClientReel } from "@/components/sections/client-reel";
import { buttonVariants } from "@/components/ui/button";
import { REFERENCE_PROJECTS, SITE } from "@/constants/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio",
  description: `Landmark UAE projects delivered by ${SITE.name} — Atlantis The Royal, Al Wathba Desert Resort & Spa, St. Regis developments, Address Boulevard, Jumeirah Golf Villas and more.`,
  path: "/portfolio",
});

export default function PortfolioPage() {
  const publishedCount = REFERENCE_PROJECTS.filter(p => p.published).length;

  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title="Portfolio"
        subtitle="The hotels, resorts, residences and infrastructure works we&rsquo;ve helped build."
        className="border-b-0 pb-6 md:pb-10"
      />

      {/* Auto-scrolling reel of client / project-owner logos */}
      <ClientReel />

      <section className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 py-16 md:py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
          <p className="eyebrow text-gold flex items-center gap-3">
            <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-gold" />
            <span>{REFERENCE_PROJECTS.length} reference projects · {publishedCount} with full case studies</span>
          </p>
          <p className="eyebrow text-fg-subtle">Tap any gold tile to read</p>
        </div>

        <ul className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3 border border-border-hairline">
          {REFERENCE_PROJECTS.map(p => {
            const tileContent = (
              <>
                <p className={cn(
                  "eyebrow",
                  p.published ? "text-gold" : "text-fg-subtle",
                )}>
                  Reference project
                </p>
                <h2 className="font-serif text-2xl md:text-3xl text-fg mt-4 leading-tight font-light">
                  {p.name}
                </h2>
                <p className="mt-3 text-sm text-fg-muted">{p.location}</p>

                {p.published ? (
                  <span className={cn(
                    buttonVariants({ variant: "primary", size: "md" }),
                    "mt-7 inline-flex pointer-events-none",
                  )}>
                    Read case study
                    <ArrowRight
                      size={14}
                      aria-hidden
                      className="ml-1 transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                ) : (
                  <p className="mt-7 eyebrow text-fg-subtle">Case study in build</p>
                )}
              </>
            );

            return (
              <li key={p.slug}>
                {p.published ? (
                  <Link
                    href={`/portfolio/${p.slug}`}
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
