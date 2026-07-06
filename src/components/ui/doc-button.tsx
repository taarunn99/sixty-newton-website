"use client";
import { useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * DocButton — client-island anchor that opens a PDF in a new tab.
 *
 * - Mouse-tracking gold radial spotlight on hover (adapted from the
 *   user-provided snippet, recoloured to brand palette).
 * - Logo renders NAKED (no chip / no border around it) per design feedback.
 *   Brand logos stay in their native colours; the dark button background
 *   provides enough contrast.
 * - Fills its parent cell — height is controlled by the grid cell, not by
 *   the button itself. Lets callers compose puzzle / bento layouts freely.
 */
type DocButtonProps = {
  href: string;
  title: string;
  subtitle?: string;
  logoSrc?: string;
  logoAlt?: string;
  logoAspect?: "square" | "wide";
  /** When true, omit the logo entirely (used for legal docs row). */
  hideLogo?: boolean;
  /** True when the brand mark is dark/black and needs a small white pad
   *  behind it to stay legible on the dark card background. */
  logoNeedsLightBg?: boolean;
  /** Optional extra className to override layout in puzzle/bento cells. */
  className?: string;
};

export function DocButton({
  href,
  title,
  subtitle,
  logoSrc,
  logoAlt,
  logoAspect = "square",
  hideLogo = false,
  logoNeedsLightBg = false,
  className,
}: DocButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const showLogo = Boolean(logoSrc) && !hideLogo;

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={onMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      onFocus={() => setOpacity(1)}
      onBlur={() => setOpacity(0)}
      className={cn(
        "group relative flex h-full min-h-[72px] w-full items-center gap-4 overflow-hidden rounded-md px-5 md:px-6 py-4",
        "border border-gold/40 bg-gradient-to-br from-bg-elevated to-bg-inset",
        "text-fg transition-colors duration-300",
        "hover:border-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
        className,
      )}
    >
      {/* Mouse-tracking gold spotlight */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(180px circle at ${pos.x}px ${pos.y}px, rgba(184,146,79,0.32), rgba(0,0,0,0))`,
        }}
      />

      {/* Logo — naked by default; a small white pad wraps dark marks
          (Weber, Kerakoll) so they stay visible on the dark card. */}
      {showLogo && logoSrc && (
        <span
          aria-hidden
          className={cn(
            "relative z-10 inline-flex shrink-0 items-center justify-center",
            logoAspect === "wide" ? "h-7 w-20" : "h-10 w-10",
            logoNeedsLightBg && "rounded-[4px] bg-white p-1",
          )}
        >
          <Image
            src={logoSrc}
            alt={logoAlt ?? ""}
            width={logoAspect === "wide" ? 160 : 80}
            height={logoAspect === "wide" ? 40 : 80}
            className="h-full w-full object-contain"
          />
        </span>
      )}

      {/* Title + subtitle */}
      <span className="relative z-10 flex min-w-0 flex-1 flex-col text-left">
        <span className="font-serif font-light text-lg md:text-xl tracking-[-0.01em] leading-tight truncate">
          {title}
        </span>
        {subtitle && (
          <span className="eyebrow text-fg-subtle mt-1.5 truncate normal-case tracking-[0.18em]">
            {subtitle}
          </span>
        )}
      </span>

      {/* View affordance */}
      <span className="relative z-10 inline-flex shrink-0 items-center gap-1.5 eyebrow text-gold group-hover:text-gold-hover transition-colors">
        <span className="hidden sm:inline">View</span>
        <ArrowUpRight size={16} aria-hidden />
      </span>
    </a>
  );
}
