"use client";

import { useRef, type ReactNode } from "react";
import { useScroll } from "framer-motion";
import { AboutScrollLine } from "./about-scroll-line";

/**
 * /about page wrapper that drives the AboutScrollLine from page scroll.
 *
 * Layout strategy:
 *   1. Outer ref-bearing div tracks scroll progress through the WHOLE
 *      about page (from hero to just-before Company Profile).
 *   2. An absolutely-positioned layer covers the wrapper. Inside it,
 *      a `position: sticky` viewport-height container holds the SVG —
 *      this keeps the curl visible at the top-right of the viewport
 *      as the user scrolls down, instead of letting it scroll off
 *      after the first 2 viewports (which is what was happening before).
 *   3. The SVG's pathLength animates from 0 → 1 based on scrollYProgress,
 *      so the line "draws itself" continuously as the user scrolls
 *      through the entire wrapper range.
 *
 * Mobile: hidden (lg+ only) — the 1278 px native SVG would dominate
 * a narrow viewport.
 */
export function AboutScrollWrapper({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={ref} className="relative overflow-x-clip">
      {/* Sticky-positioned scroll-line layer.
          The outer absolute div spans the wrapper's full height; the
          inner sticky element keeps the SVG at viewport top throughout
          the scroll, so the curl is always visible while pathLength
          animates from 0 → 1.
          Inner positioning div pushes the SVG -40% to the right so the
          tight coordinate-curl sits OFF-SCREEN past the viewport's
          right edge — only the smooth sweeping tail bleeds into the
          right gutter, well away from the centred body content. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 hidden lg:block"
      >
        <div className="sticky top-0 h-screen w-full overflow-visible">
          <div
            className="absolute top-0"
            style={{
              right: "-40%",
              width: "1278px",
            }}
          >
            <AboutScrollLine scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </div>

      {/* Content stays above */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
