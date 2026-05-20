"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";

/**
 * Hand-curving gold stroke that "draws itself" as the user scrolls the
 * /about page. Adapted from the Skiper19 21st.dev pattern; recoloured to
 * brand gold and tuned to actually be visible across all viewports.
 *
 * Framer's built-in `pathLength` MotionValue style on motion.path
 * automatically handles strokeDasharray / strokeDashoffset for us — no
 * need to set them manually.
 */
export function AboutScrollLine({
  scrollYProgress,
  className = "",
}: {
  scrollYProgress: MotionValue<number>;
  className?: string;
}) {
  // Path "draws" from 0 → 1 as the user scrolls the entire wrapper range.
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
      <motion.path
        // Six bows alternating right ↔ left ↔ right ↔ left ↔ right ↔ left,
        // ending centred at the bottom. Coordinates are viewBox percentages;
        // preserveAspectRatio="none" stretches them across the full
        // wrapper width × height.
        d="M 8 3 Q 92 10 50 18 T 92 34 T 8 50 T 92 66 T 8 82 T 50 97"
        stroke="var(--gold)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        style={{
          pathLength,
          opacity: 0.45,
        }}
      />
    </svg>
  );
}
