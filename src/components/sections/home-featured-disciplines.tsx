import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { DISCIPLINES } from "@/constants/site";
import { cn } from "@/lib/utils";

/**
 * Home-page featured disciplines section.
 *
 * Surfaces the 6 highest-intent disciplines as gold-card tiles linking
 * straight to each /disciplines/{slug} page. The remaining 8 are accessed
 * via the hub CTA at the bottom of this block.
 */
const FEATURED_SLUGS = [
  "waterproofing",
  "microtopping",
  "epoxy-flooring",
  "marble-installation",
  "large-format-tiling",
  "bitumen-waterproofing",
];

export function HomeFeaturedDisciplines() {
  const featured = FEATURED_SLUGS
    .map(slug => DISCIPLINES.find(d => d.slug === slug))
    .filter((d): d is NonNullable<typeof d> => Boolean(d));

  return (
    <section
      aria-label="Featured disciplines"
      className="relative w-full bg-bg border-t border-border"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-12 lg:px-16 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="eyebrow text-gold flex items-center gap-3">
            <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-gold" />
            <span>What we do</span>
          </p>
          <h2 className="font-serif font-extralight text-fg mt-5 text-[clamp(2rem,5vw,3.75rem)] leading-[1.02] tracking-[-0.02em]">
            Fourteen disciplines.{" "}
            <span className="italic text-gold">Six we lead with.</span>
          </h2>
          <p className="mt-5 font-serif font-light text-fg-muted text-lg md:text-xl leading-relaxed max-w-2xl">
            Brand-certified applicator scope across waterproofing, decorative concrete, resin floors and tile-and-stone. Tap any tile to explore the system stack and reference projects.
          </p>
        </div>

        <ul className="mt-14 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3 border border-border-hairline">
          {featured.map(d => (
            <li key={d.slug}>
              <Link
                href={`/disciplines/${d.slug}`}
                className="group relative block h-full bg-bg p-8 md:p-10 transition-colors duration-200 hover:bg-bg-elevated focus-visible:bg-bg-elevated"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 ring-1 ring-inset ring-transparent transition-[box-shadow,border-color] duration-200 group-hover:ring-gold/40 group-focus-visible:ring-gold"
                />
                <p className="eyebrow text-gold">{d.bucket}</p>
                <h3 className="font-serif font-light text-3xl text-fg mt-4 leading-tight tracking-[-0.01em]">
                  {d.title}
                </h3>
                <p className="mt-4 text-fg-muted text-sm leading-relaxed">
                  {d.description}
                </p>
                <p className="mt-7 inline-flex items-center gap-2 eyebrow text-gold group-hover:text-gold-hover transition-colors">
                  Explore
                  <ArrowUpRight
                    size={12}
                    aria-hidden
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-end">
          <Link
            href="/disciplines"
            className={cn(buttonVariants({ variant: "outlineFill", size: "md" }), "group")}
          >
            View all 14 disciplines
            <ArrowRight size={14} className="ml-1 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
