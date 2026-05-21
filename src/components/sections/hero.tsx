import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Hero — STRICTLY STATIC. No GSAP / no Framer Motion here.
 * Scroll-driven animation begins in the ScrollSequence directly below.
 *
 * Identity-anchored headline lifted from the Sixty Newton company
 * profile PDF — "Your trusted partner in technical services and
 * contracting." — replacing the casual "Your go-to applicators" line.
 *
 * Layout:
 *   1. Sixty Newton logo lockup at the top of the dashed atelier frame
 *      (the user explicitly asked for the logo to be visible on this
 *      page so the hero reads as "Sixty Newton's hero", not generic)
 *   2. Eyebrow tag with bullets — keyword-rich for SEO
 *   3. Display-serif H1 in three lines, "and contracting." gold-italic
 *      to mirror the company-profile cover typography
 *   4. Lede paragraph naming the four approved-applicator brands
 *      and the tier-1 sector mix — both SEO-relevant signals
 *   5. Dual CTAs: Request a Quote (primary) + Download Company Profile
 *      (secondary, opens the PDF in a new tab)
 *   6. Approved-applicator strip in muted cream
 *   7. Scroll cue
 */
export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate w-full min-h-[100dvh] overflow-hidden bg-bg pt-16 md:pt-[72px]"
    >
      {/* Soft warm vignette behind the type */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_55%,rgba(184,146,79,0.08),transparent_55%)]"
      />

      <div className="mx-auto flex min-h-[calc(100dvh-5rem)] max-w-[1600px] items-center px-5 py-8 md:px-12 lg:px-16 md:py-12">
        {/* Dashed atelier frame */}
        <div className="relative w-full border border-dashed border-[var(--border-dashed)]">
          <div className="flex flex-col items-center px-6 py-10 text-center md:px-16 md:py-14 lg:py-16">

            {/* Sixty Newton logo — visible at the top of the hero */}
            <div className="relative h-20 w-auto md:h-28 lg:h-32 aspect-[5/3]">
              <Image
                src="/brand/logo.svg"
                alt="Sixty Newton — Technical Services"
                fill
                priority
                sizes="(min-width: 1024px) 280px, (min-width: 768px) 240px, 200px"
                className="object-contain"
              />
            </div>

            {/* Eyebrow — SEO keyword strip */}
            <p className="eyebrow mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-fg-muted">
              <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-gold" />
              <span>Technical services</span>
              <span className="text-fg-subtle">·</span>
              <span>Contracting</span>
              <span className="text-fg-subtle">·</span>
              <span>Brand-certified applicators</span>
              <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-gold" />
            </p>

            {/* Editorial headline — three lines, italic gold accent on the
                closing phrase to mirror the company-profile cover */}
            <h1
              id="hero-heading"
              className="font-serif mt-8 md:mt-10 text-fg leading-[0.96] tracking-[-0.02em] text-[clamp(2.5rem,7vw,6.5rem)] font-extralight"
            >
              <span className="block">Your trusted partner</span>
              <span className="block">in technical services</span>
              <span className="block italic font-extralight text-gold">and contracting.</span>
            </h1>

            {/* Lede — brand-certified positioning + sector mix */}
            <p className="font-serif mt-8 md:mt-10 max-w-[42rem] text-balance text-base md:text-lg lg:text-xl text-fg-muted font-light leading-relaxed">
              Sixty Newton turns demanding designs into lasting results.
              Brand-certified applicators for{" "}
              <span className="text-fg">Mapei</span>,{" "}
              <span className="text-fg">Laticrete</span>,{" "}
              <span className="text-fg">AkzoNobel</span> and{" "}
              <span className="text-fg">X-Calibur</span> — tier-1 hospitality,
              residential and industrial projects across the UAE.
            </p>

            {/* Dual CTAs */}
            <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0">
              <Button asChild size="lg" className="sm:rounded-none">
                <Link href="/request-a-quote">
                  Request a Quote
                  <ArrowRight size={14} className="ml-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="sm:rounded-none sm:border-l-0">
                <a
                  href="/docs/sixty-newton-company-profile.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={14} className="mr-1" aria-hidden />
                  Company Profile
                </a>
              </Button>
            </div>

            {/* Approved-applicator strip — quiet attribution */}
            <p className="mt-10 md:mt-12 pt-6 border-t border-[var(--border-hairline)] eyebrow text-fg-subtle text-[10px] md:text-[11px]">
              Approved applicator · Mapei · Laticrete · AkzoNobel · X-Calibur
            </p>

          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-6 flex flex-col items-center gap-2"
      >
        <span className="eyebrow text-fg-subtle">scroll</span>
        <span className="block h-8 w-px bg-fg/40 animate-scroll-pulse" />
      </div>
    </section>
  );
}
