"use client";

import { useRef, type ReactNode } from "react";
import { useScroll } from "framer-motion";
import { AboutScrollLine } from "./about-scroll-line";

/**
 * Client wrapper for the /about page that drives the AboutScrollLine
 * from page scroll. Reads scroll position relative to its own bounding
 * box so the line "draws itself" as the user moves down the page.
 *
 * The SVG layer is absolutely-positioned, full-width × full-height of
 * the wrapper, behind all page content (z-0). Visible across all
 * viewport sizes — preserveAspectRatio in the SVG keeps the curls
 * gracefully framed.
 */
export function AboutScrollWrapper({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={ref} className="relative overflow-x-clip">
      {/* Scroll-tracking gold path layer.
          z-0 so page content sits above it.
          pointer-events: none so it never intercepts clicks. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
      >
        <AboutScrollLine
          scrollYProgress={scrollYProgress}
          className="absolute inset-0 h-full w-full"
        />
      </div>

      {/* Content stays above the line */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
