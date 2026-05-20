import { BrandStrip } from "@/components/services/brand-strip";
import { DualCTA } from "@/components/services/dual-cta";
import { cn } from "@/lib/utils";

/**
 * Service-page hero — editorial atelier (matches PageHero rhythm).
 * No full-bleed photo. Dashed frame, gold eyebrow with bullet,
 * Cormorant headline, lede, dual CTA, and the approved-applicator
 * brand strip at the bottom edge.
 */
export function ServiceHero({
  eyebrow,
  h1,
  sub,
  className,
  serviceContext,
}: {
  eyebrow: string;
  h1: string;
  sub: string;
  className?: string;
  serviceContext?: { title: string };
}) {
  return (
    <section
      aria-labelledby="service-hero-heading"
      className={cn(
        "relative isolate w-full overflow-hidden bg-bg pt-32 md:pt-40 pb-20 md:pb-28 border-b border-border",
        className,
      )}
    >
      {/* Warm gold halo behind the headline */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_30%,rgba(184,146,79,0.06),transparent_60%)]"
      />

      <div className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16">
        <div className="relative border border-dashed border-[var(--border-dashed)] px-6 py-14 md:px-14 md:py-20">

          <p className="eyebrow text-gold flex items-center gap-3">
            <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-gold" />
            <span>{eyebrow}</span>
          </p>

          <h1
            id="service-hero-heading"
            className="mt-6 font-serif font-extralight text-fg leading-[0.98] tracking-[-0.02em] text-[clamp(2.25rem,6vw,4.5rem)] max-w-3xl"
          >
            {h1}
          </h1>

          <p className="mt-6 font-serif font-light text-fg-muted text-lg md:text-xl leading-relaxed max-w-2xl">
            {sub}
          </p>

          <DualCTA className="mt-10" serviceContext={serviceContext} />

          {/* Hairline rule + brand strip */}
          <div aria-hidden className="mt-12 h-px w-full bg-border-hairline" />
          <div className="mt-8 flex items-end justify-between gap-6 flex-wrap">
            <BrandStrip className="!grid-cols-4 !gap-x-8 max-w-md sm:max-w-lg" />
            <p className="eyebrow text-fg-subtle whitespace-nowrap">
              Approved applicator · brand-certified
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
