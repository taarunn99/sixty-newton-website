"use client";

import { useRef, type ReactNode } from "react";
import { useScroll } from "framer-motion";
import { AboutScrollLine } from "./about-scroll-line";

/**
 * /about page wrapper that drives the AboutScrollLine from page scroll.
 *
 * Positioning mirrors the original Skiper19 reference:
 *   - SVG is anchored TOP-RIGHT of the wrapper
 *   - Pushed right by -40% of its width so the tight coordinate-curl
 *     sits OFF-SCREEN past the viewport's right edge — only the sweeping
 *     tail and the outer edges of the loops bleed into view through the
 *     right gutter, well away from the centred content (max-w-3xl)
 *   - z-0 behind page content; pointer-events: none
 *   - hidden on mobile (the SVG's intrinsic 1278×2319 dimensions would
 *     dominate a narrow viewport; the curl is desktop decoration)
 */
export function AboutScrollWrapper({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={ref} className="relative overflow-x-clip">
      {/* Decorative curl — top-right, pushed off-screen so only the sweep
          is visible through the right gutter */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 z-0 hidden lg:block"
        style={{
          right: "-40%",
          width: "1278px",
        }}
      >
        <AboutScrollLine scrollYProgress={scrollYProgress} />
      </div>

      {/* Content stays above */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
