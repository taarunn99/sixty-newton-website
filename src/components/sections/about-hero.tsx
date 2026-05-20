"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * About-page hero — replaces the standard PageHero on /about.
 *
 * Layout:
 *   Left: enormous "About" wordmark in display serif (clamp-sized to
 *         match the largest hero rhythm on the site)
 *   Right: the Sixty Newton logo SVG at large scale (mark + wordmark
 *         stack)
 *   Below: a single editorial subtitle line
 *
 * The hero deliberately omits the eyebrow line ("Sixty Newton") —
 * the logo IS the brand attribution, the giant "About" is the page label.
 * Section is positioned `relative` so the AboutScrollLine can layer
 * over its right side without escaping the page bounds.
 */
export function AboutHero() {
  return (
    <section
      aria-labelledby="about-hero-heading"
      className="relative w-full overflow-hidden border-b border-border pt-32 md:pt-40 pb-20 md:pb-28"
    >
      {/* Warm gold halo behind the layout */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_70%_30%,rgba(184,146,79,0.08),transparent_60%)]"
      />

      <div className="mx-auto max-w-[1600px] px-5 md:px-12 lg:px-16">
        <div className="grid items-center gap-10 md:gap-16 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
          {/* Left — giant "About" */}
          <motion.h1
            id="about-hero-heading"
            className="font-serif font-extralight italic text-fg leading-[0.86] tracking-[-0.04em] text-[clamp(6rem,22vw,18rem)] -mb-3 md:mb-0"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            About<span className="text-gold">.</span>
          </motion.h1>

          {/* Right — large Sixty Newton logo lockup */}
          <motion.div
            className="relative flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-full max-w-[420px] md:max-w-[520px] aspect-square">
              <Image
                src="/brand/logo.svg"
                alt="Sixty Newton — Technical Services"
                fill
                priority
                sizes="(min-width: 1024px) 520px, (min-width: 768px) 420px, 80vw"
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>

        {/* Sub-line */}
        <motion.p
          className="mt-12 max-w-3xl font-serif font-light text-fg-muted text-lg md:text-xl lg:text-2xl leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          A specialist contracting and applicator company powering some of the UAE&rsquo;s most demanding projects.
        </motion.p>
      </div>
    </section>
  );
}
