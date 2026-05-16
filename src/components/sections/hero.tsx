import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Hero — pixel-match the brand reference (dark / atelier).
 * STRICTLY STATIC — no GSAP / no Framer Motion here.
 * Scroll-driven animations begin in the section *after* the hero (phase 2).
 */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate w-full min-h-[100dvh] overflow-hidden bg-bg pt-16 md:pt-20"
    >
      {/* Soft warm vignette behind the type — pure CSS, no JS */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_55%,rgba(201,162,99,0.08),transparent_55%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-1/2 -z-10 h-px bg-[linear-gradient(90deg,transparent,rgba(201,162,99,0.18),transparent)]"
      />

      <div className="mx-auto flex min-h-[calc(100dvh-5rem)] max-w-[1600px] items-center px-5 py-10 md:px-10 md:py-14">
        {/* Dashed atelier frame */}
        <div className="relative w-full border border-dashed border-[var(--border-dashed)]">
          <div className="flex flex-col items-center px-6 py-16 text-center md:px-16 md:py-24 lg:py-28">

            {/* Eyebrow tag with bullet separators */}
            <p className="eyebrow flex items-center gap-3 text-fg-muted">
              <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-gold" />
              <span className="lowercase tracking-[0.28em]">
                mep <span className="text-fg-subtle mx-1">·</span> fit-out <span className="text-fg-subtle mx-1">·</span> pools & specialist systems
              </span>
              <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-gold" />
            </p>

            {/* Editorial headline */}
            <h1
              id="hero-heading"
              className="font-serif mt-10 text-fg leading-[0.95] tracking-[-0.01em] text-[clamp(3rem,9vw,8.5rem)] font-light"
            >
              <span className="block">Precision</span>
              <span className="block">
                Engineered,{" "}
                <em className="italic font-light">at Scale.</em>
              </span>
            </h1>

            {/* Sub-paragraph (italic serif) */}
            <p className="font-serif italic mt-10 max-w-[34rem] text-balance text-lg md:text-xl text-fg-muted leading-relaxed">
              A single-source fit-out contractor for mechanical, electrical, plumbing,
              swimming pool and joinery scopes — delivered with the discipline of an
              atelier and the throughput of a tier-one builder.
            </p>

            {/* CTAs */}
            <div className="mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0">
              <Button asChild size="lg" className="sm:rounded-none">
                <Link href="/contact">
                  Request a Site Visit
                  <ArrowRight size={14} className="ml-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="sm:rounded-none sm:border-l-0">
                <Link href="/approach">View Capability Statement</Link>
              </Button>
            </div>
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
