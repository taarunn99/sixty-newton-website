"use client";
import { useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * DocButton — full-width client-island anchor that opens a PDF in a new tab.
 *
 * - Mouse-tracking radial gradient (gold spotlight that follows the cursor on
 *   hover) — adapted from the user-provided snippet, recoloured to the brand
 *   palette. No effect on touch devices (opacity stays at 0).
 * - Optional logo chip on the left. Brand logos stay in their native colours
 *   inside a neutral chip so the variety doesn't fight the dark background.
 * - Right-aligned "View" + ArrowUpRight signals "opens externally / in a new tab".
 */
type DocButtonProps = {
  href: string;
  title: string;
  subtitle?: string;
  logoSrc?: string;
  logoAlt?: string;
  logoAspect?: "square" | "wide";
  /** When true, omit the logo chip even if logoSrc is provided. */
  hideLogo?: boolean;
};

export function DocButton({
  href,
  title,
  subtitle,
  logoSrc,
  logoAlt,
  logoAspect = "square",
  hideLogo = false,
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
        "group relative flex w-full items-center gap-4 overflow-hidden rounded-md",
        "h-16 md:h-[68px] px-4 md:px-5",
        "border border-gold/40 bg-gradient-to-r from-bg-elevated to-bg-inset",
        "text-fg transition-colors duration-300",
        "hover:border-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
      )}
    >
      {/* Mouse-tracking gold spotlight */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(140px circle at ${pos.x}px ${pos.y}px, rgba(184,146,79,0.30), rgba(0,0,0,0))`,
        }}
      />

      {/* Logo chip — keeps brand logos in their native colours */}
      {showLogo && logoSrc && (
        <span
          aria-hidden
          className={cn(
            "relative z-10 inline-flex h-10 shrink-0 items-center justify-center rounded border border-border-hairline bg-fg/[0.04] p-1.5",
            logoAspect === "wide" ? "w-16" : "w-10",
          )}
        >
          <Image
            src={logoSrc}
            alt={logoAlt ?? ""}
            width={64}
            height={40}
            className="h-full w-full object-contain"
          />
        </span>
      )}

      {/* Title + subtitle */}
      <span className="relative z-10 flex min-w-0 flex-1 flex-col text-left">
        <span className="font-serif font-light text-base md:text-lg tracking-[-0.01em] leading-tight truncate">
          {title}
        </span>
        {subtitle && (
          <span className="eyebrow text-fg-subtle mt-1 truncate normal-case tracking-[0.18em]">
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
