"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Download, ArrowUpRight } from "lucide-react";
import { SITE } from "@/constants/site";

/**
 * Company Profile download section — mirrors the lapizblue.com/brands
 * "Company Profile" pattern, re-skinned to the dark/gold atelier brand.
 *
 * - Scroll-reveal: a gold band slides up from the bottom of the section
 *   as the viewport intersects it (Framer Motion useScroll + useTransform)
 * - The PDF cover is rendered as a 3D-tilted book card on hover
 * - The CTA is the standard gold pill, opens the PDF in a new tab
 */
export function CompanyProfileDownload() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Gold band slides up from bottom as the user scrolls into the section
  const bandY = useTransform(scrollYProgress, [0, 0.5], ["100%", "0%"]);

  return (
    <section
      ref={ref}
      aria-label="Download company profile"
      className="relative w-full min-h-[80vh] lg:min-h-screen overflow-hidden bg-bg border-t border-border flex items-center justify-center"
    >
      {/* Scroll-reveal gold band — sits behind the content */}
      <motion.div
        aria-hidden
        className="absolute inset-0 z-0"
        style={
          mounted
            ? { y: bandY, backgroundColor: "var(--gold-soft)" }
            : { y: "100%", backgroundColor: "var(--gold-soft)" }
        }
      />

      {/* Subtle texture overlay over the band */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_30%_20%,rgba(184,146,79,0.25),transparent_60%)] mix-blend-overlay"
      />

      {/* Content */}
      <div className="relative z-10 w-full mx-auto max-w-[1400px] px-5 md:px-12 lg:px-16 py-20 md:py-28">
        <div className="grid items-center gap-12 lg:gap-20 lg:grid-cols-2">
          {/* Left — book / cover preview with 3D hover tilt */}
          <motion.div
            className="flex justify-center lg:justify-start"
            style={{ perspective: "1200px" }}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="relative w-full max-w-[380px] aspect-[3/4] rounded-md overflow-hidden cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
              whileHover={{
                rotateY: -12,
                rotateX: 4,
                scale: 1.04,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Faux PDF cover — dashed atelier frame in brand palette
                  (real PDF-page preview can drop in later via Sharp + pdftoppm) */}
              <div className="absolute inset-0 bg-bg" />
              <div className="absolute inset-3 border border-dashed border-gold/50 rounded-sm" />
              <div className="absolute inset-0 flex flex-col items-center justify-between px-8 py-12 text-center">
                <p className="eyebrow text-gold">{SITE.parentGroup}</p>

                <div>
                  <p className="font-serif font-extralight italic text-fg text-3xl md:text-4xl leading-[1.02] tracking-[-0.02em]">
                    Your trusted partner
                  </p>
                  <p className="mt-3 font-serif font-extralight text-fg text-3xl md:text-4xl leading-[1.02] tracking-[-0.02em]">
                    in technical services
                  </p>
                  <p className="mt-3 font-serif font-extralight italic text-gold text-3xl md:text-4xl leading-[1.02] tracking-[-0.02em]">
                    and contracting.
                  </p>
                  <div aria-hidden className="mx-auto mt-8 h-px w-12 bg-gold/70" />
                  <p className="mt-4 font-mono text-xs text-fg-muted">
                    {SITE.name}
                  </p>
                </div>

                <p className="eyebrow text-fg-subtle">Company Profile · 2025</p>
              </div>

              {/* Shine effect on hover */}
              <motion.div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-fg/10 to-transparent opacity-0 pointer-events-none"
                whileHover={{ opacity: 1, x: "100%" }}
                transition={{ duration: 0.7 }}
              />
            </motion.div>
          </motion.div>

          {/* Right — heading + copy + download CTA */}
          <motion.div
            className="flex flex-col items-start text-left space-y-7 lg:space-y-9"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <h2 className="font-serif font-extralight text-fg text-[clamp(2.5rem,7vw,5rem)] leading-[1.02] tracking-[-0.02em]">
                Company Profile
              </h2>
              <div aria-hidden className="mt-4 h-px w-24 bg-gold/70" />
            </div>

            <p className="font-serif font-light text-fg-muted text-lg md:text-xl lg:text-2xl leading-relaxed max-w-xl">
              The full story in one document — disciplines, brand-certified applicator status, reference projects, organisation chart, trade licence and contact channels.
            </p>

            <p className="font-serif font-light text-fg-muted text-base md:text-lg leading-relaxed max-w-xl">
              Send it to a consultant, brief a designer, attach it to a tender. Open in your browser or download for offline use.
            </p>

            <motion.a
              href="/docs/sixty-newton-company-profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-gold text-bg px-7 py-4 eyebrow tracking-[0.22em] hover:bg-gold-hover transition-colors duration-200"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Download size={16} aria-hidden />
              <span>View / Download Profile</span>
              <ArrowUpRight
                size={14}
                aria-hidden
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>

            <p className="text-xs text-fg-subtle">
              PDF · opens in a new tab
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
