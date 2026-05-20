"use client";

import { useRef, type ReactNode } from "react";
import { useScroll } from "framer-motion";
import { AboutScrollLine } from "./about-scroll-line";

/**
 * Client wrapper for the /about page that drives the AboutScrollLine
 * from page scroll. Reads the scroll position relative to its own
 * bounding box so the line "draws itself" as the user moves down the
 * page from hero to footer.
 *
 * The line sits in an absolutely-positioned, overflow-hidden layer
 * BEHIND the page content (z-0). All child sections render at z-10+
 * via their default z-stacking.
 */
export function AboutScrollWrapper({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={ref} className="relative">
      {/* Scroll-tracking gold path — overlays the top-right area, slowly
          unspools as the user scrolls. Pointer-events: none so it never
          intercepts clicks. */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 z-0 hidden md:block"
        style={{
          // Push the SVG to the right and partly off-screen so only the
          // curling stroke is visible, mirroring the Skiper19 placement.
          right: "-30%",
          width: "120%",
          maxWidth: "1400px",
        }}
      >
        <AboutScrollLine scrollYProgress={scrollYProgress} />
      </div>

      {/* Content stays above the line */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
