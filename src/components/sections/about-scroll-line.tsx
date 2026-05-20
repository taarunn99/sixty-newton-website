"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";

/**
 * Continuous gold scroll-line for /about — single unbroken stroke that
 * dodges page content.
 *
 *   Top-right → swings down-left through the body-section gutter →
 *   stays left through mission / applicators / parent → swings back
 *   right through the leadership cards → drifts down-right past
 *   sustainability → ends centred at the bottom (just before Company
 *   Profile).
 *
 * viewBox 0 0 100 100 with preserveAspectRatio="none" — the path stretches
 * vertically to span the full wrapper height. vectorEffect="non-scaling-
 * stroke" keeps the line a consistent visual thickness regardless of
 * the viewBox stretch.
 *
 * Path "draws" via Framer Motion `pathLength` (0 → 1 across the scroll
 * range) — manual strokeDashoffset removed since it was conflicting
 * with Framer's built-in handling.
 */
export function AboutScrollLine({
  scrollYProgress,
  className = "",
}: {
  scrollYProgress: MotionValue<number>;
  className?: string;
}) {
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* Single continuous cubic-Bezier snake. Each bow centres on a
          section gutter to dodge content. Coordinates as % of viewBox:

            Start top-right (off-screen-right at x=105)
            Bow 1: hero       — stays in right gutter (y 2-18)
            Bow 2: body       — swings to left gutter (y 18-40)
            Bow 3: leadership — swings back to right (y 40-72)
            Bow 4: sustain.   — drifts back to left (y 72-90)
            End: centre bottom (x 50, y 100)                            */}
      <motion.path
        d="
          M 105 2
          C 108 8  92 14  100 20
          C 88 28  8  32  -3 42
          C  -5 50  10 56  -2 64
          C  6  70  90 70  103 76
          C 108 82  94 88  102 92
          C  94 96  60 98  50 100
        "
        stroke="var(--gold)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        style={{
          pathLength,
          opacity: 0.55,
        }}
      />
    </svg>
  );
}
