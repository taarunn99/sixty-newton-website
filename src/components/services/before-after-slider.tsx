"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Before/After image comparison slider.
 * Drag (or arrow-keys when handle is focused) to reveal the "after" image.
 * Falls back to side-by-side on prefers-reduced-motion not applicable —
 * the slider is the static state; no animation is implied.
 */
export function BeforeAfterSlider({
  beforeImageUrl,
  afterImageUrl,
  caption,
  aspectRatio = "16/10",
  className,
}: {
  beforeImageUrl: string;
  afterImageUrl: string;
  caption?: string;
  aspectRatio?: string;
  className?: string;
}) {
  const [position, setPosition] = React.useState(50);   // %
  const containerRef = React.useRef<HTMLDivElement>(null);
  const draggingRef = React.useRef(false);

  const update = React.useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, pct)));
  }, []);

  React.useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      update(e.clientX);
    };
    const onUp = () => { draggingRef.current = false; };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [update]);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft")  setPosition(p => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPosition(p => Math.min(100, p + 4));
    if (e.key === "Home")       setPosition(0);
    if (e.key === "End")        setPosition(100);
  };

  return (
    <figure className={cn("w-full", className)}>
      <div
        ref={containerRef}
        className="relative w-full select-none overflow-hidden rounded-md border border-border bg-bg-inset"
        style={{ aspectRatio }}
        onPointerDown={e => {
          draggingRef.current = true;
          update(e.clientX);
        }}
      >
        {/* After (full) */}
        <Image
          src={afterImageUrl}
          alt="After application"
          fill
          sizes="(min-width: 1024px) 900px, 100vw"
          className="object-cover"
        />
        {/* Before (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={beforeImageUrl}
            alt="Before application"
            fill
            sizes="(min-width: 1024px) 900px, 100vw"
            className="object-cover"
          />
        </div>

        {/* Divider + handle */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        >
          <div className="h-full w-px bg-gold/80" />
        </div>
        <button
          type="button"
          role="slider"
          aria-label="Drag to compare before and after"
          aria-valuenow={Math.round(position)}
          aria-valuemin={0}
          aria-valuemax={100}
          tabIndex={0}
          onKeyDown={onKey}
          className="absolute top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold bg-bg-elevated text-gold shadow-[0_8px_24px_-6px_rgba(0,0,0,0.6)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          style={{ left: `${position}%` }}
        >
          <svg viewBox="0 0 16 16" aria-hidden className="h-4 w-4" fill="currentColor">
            <path d="M6 3L2 8l4 5 1.4-1.4L4.8 8l2.6-2.6L6 3zm4 0L8.6 4.4 11.2 8 8.6 11.6 10 13l4-5-4-5z" />
          </svg>
        </button>

        {/* Eyebrow labels in corners */}
        <span className="absolute left-3 top-3 eyebrow rounded-sm bg-bg/60 px-2 py-1 text-fg">
          Before
        </span>
        <span className="absolute right-3 top-3 eyebrow rounded-sm bg-bg/60 px-2 py-1 text-fg">
          After
        </span>
      </div>

      {caption && (
        <figcaption className="mt-4 text-fg-muted text-sm leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
