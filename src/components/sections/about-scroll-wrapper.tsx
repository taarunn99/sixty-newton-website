"use client";

import { useRef, type ReactNode } from "react";
import { useScroll } from "framer-motion";
import { AboutScrollLine } from "./about-scroll-line";

/**
 * /about wrapper.
 *
 * Layout:
 *   - Outer ref-bearing div tracks scroll progress through the WHOLE
 *     wrapper height (from hero top to just-before Company Profile).
 *   - The scroll-line layer is absolutely positioned and spans the
 *     wrapper's FULL height (inset-0). The line therefore lives in
 *     page flow — it scrolls with the content, drawing progressively
 *     as the user moves down.
 *   - SVG inside uses preserveAspectRatio="none" so the path's vertical
 *     coordinates stretch with the wrapper height; bows land in the
 *     section gutters of the /about layout, dodging content blocks.
 *
 * Hidden below lg (1024 px) — desktop decoration only.
 */
export function AboutScrollWrapper({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={ref} className="relative overflow-x-clip">
      {/* Scroll-line layer — spans the wrapper's full height. NOT sticky:
          line lives in page flow and scrolls with content. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 hidden lg:block"
      >
        <AboutScrollLine
          scrollYProgress={scrollYProgress}
          className="absolute inset-0 h-full w-full"
        />
      </div>

      {/* Content stays above */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
