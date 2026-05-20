"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, ArrowUpRight } from "lucide-react";

/**
 * Company Profile download section.
 *
 *   - Real PDF page-1 cover image rendered as a book card with perspective
 *   - Background is a solid gold-soft band — NO scroll animation
 *   - All text on the right is hard-coded to dark colours for high contrast
 *   - Download CTA is dark-brown (near-black) with cream text — clean
 *     contrast on the gold band, no gold-on-gold fade
 *   - Opens the PDF in a new tab via /docs/sixty-newton-company-profile.pdf
 */
export function CompanyProfileDownload() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      aria-label="Download company profile"
      className="relative w-full min-h-[80vh] lg:min-h-screen overflow-hidden border-t border-border"
      style={{ backgroundColor: "var(--gold-soft)" }}
    >
      {/* Subtle texture overlay — adds depth to the flat gold-soft fill */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_30%_20%,rgba(184,146,79,0.30),transparent_55%)] mix-blend-overlay"
      />

      {/* Content */}
      <div className="relative z-10 w-full mx-auto max-w-[1400px] px-5 md:px-12 lg:px-16 py-20 md:py-28">
        <div className="grid items-center gap-12 lg:gap-20 lg:grid-cols-2">
          {/* ── Left — book-style PDF cover (real image) ── */}
          <motion.div
            className="flex justify-center lg:justify-start"
            style={{ perspective: "1400px" }}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="relative w-full max-w-[380px] aspect-[9/16] cursor-pointer"
              style={{
                transformStyle: "preserve-3d",
                transform: "rotateY(-6deg) rotateX(2deg)",
              }}
              whileHover={{
                rotateY: -12,
                rotateX: 4,
                scale: 1.04,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* The cover image itself with book-like depth */}
              <div
                className="relative w-full h-full overflow-hidden rounded-sm"
                style={{
                  boxShadow:
                    "0 30px 80px -20px rgba(0,0,0,0.6), 8px 8px 0 0 rgba(0,0,0,0.35), inset 8px 0 16px -8px rgba(0,0,0,0.5)",
                }}
              >
                <Image
                  src="/images/about/company-profile-cover.webp"
                  alt="Sixty Newton — Company Profile · 2025 cover"
                  fill
                  sizes="(min-width: 1024px) 380px, 80vw"
                  className="object-cover"
                  quality={92}
                  priority
                />

                {/* Binding shadow — gradient down the left edge */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/45 to-transparent"
                />

                {/* Top highlight — page edge catching light */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-b from-white/15 to-transparent"
                />

                {/* Shine effect on hover */}
                <motion.div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent opacity-0 pointer-events-none"
                  whileHover={{ opacity: 1, x: "100%" }}
                  transition={{ duration: 0.7 }}
                />
              </div>

              {/* Thin gold strip on the right — pages sticking out */}
              <div
                aria-hidden
                className="pointer-events-none absolute top-1 bottom-1 right-[-3px] w-[3px] rounded-r-[1px]"
                style={{
                  backgroundColor: "var(--gold)",
                  opacity: 0.7,
                  transform: "translateZ(-1px)",
                }}
              />
            </motion.div>
          </motion.div>

          {/* ── Right — heading + copy + download CTA (hard-dark text) ── */}
          <motion.div
            className="flex flex-col items-start text-left space-y-7 lg:space-y-9"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <h2
                className="font-serif font-extralight text-[clamp(2.5rem,7vw,5rem)] leading-[1.02] tracking-[-0.02em]"
                style={{ color: "#0a0807" }}
              >
                Company Profile
              </h2>
              <div
                aria-hidden
                className="mt-4 h-px w-24"
                style={{ backgroundColor: "rgba(10,8,7,0.7)" }}
              />
            </div>

            <p
              className="font-serif font-light text-lg md:text-xl lg:text-2xl leading-relaxed max-w-xl"
              style={{ color: "#0a0807" }}
            >
              The full story in one document — disciplines, brand-certified
              applicator status, reference projects, organisation chart, trade
              licence and contact channels.
            </p>

            <p
              className="font-serif font-light text-base md:text-lg leading-relaxed max-w-xl"
              style={{ color: "#1a1410" }}
            >
              Send it to a consultant, brief a designer, attach it to a tender.
              Opens in a new tab so your place on the page is preserved.
            </p>

            <motion.a
              href="/docs/sixty-newton-company-profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full px-7 py-4 text-[11px] md:text-xs font-medium uppercase tracking-[0.22em] transition-shadow duration-200 hover:shadow-[0_10px_28px_-6px_rgba(0,0,0,0.5)]"
              style={{
                backgroundColor: "#0a0807",
                color: "#efe8d5",
              }}
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

            <p className="text-xs" style={{ color: "#1a1410" }}>
              PDF · opens in a new tab
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
