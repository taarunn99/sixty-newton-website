"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

export interface SlideshowImage {
  src: string;
  alt: string;
}

interface PhotoSlideshowProps {
  images: SlideshowImage[];
  /** Main-image aspect ratio. Default 16/10 matches the case-study layout. */
  aspect?: string;
  /** Auto-advance interval in ms. Default 5000. */
  interval?: number;
  /** Optional className for the outer wrapper. */
  className?: string;
  /** Mark the first image as priority for LCP. Default true. */
  priorityFirst?: boolean;
}

/**
 * Editorial gallery — one big main image, a row of small thumbnails
 * underneath. Auto-advances every `interval` ms; tapping a thumbnail
 * jumps to that frame; hovering the gallery (or a recent tap) pauses
 * the rotation so the user can read the image they chose. Arrow keys
 * also work when the gallery has keyboard focus.
 *
 * All images are layered on top of each other inside the main figure
 * and cross-faded via opacity — no DOM thrash, no flash of empty
 * space. Thumbnails sit in a horizontally-scrolling row underneath
 * with a gold ring on the active one.
 */
export function PhotoSlideshow({
  images,
  aspect = "aspect-[16/10]",
  interval = 5000,
  className,
  priorityFirst = true,
}: PhotoSlideshowProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const pauseTimer = useRef<number | undefined>(undefined);
  const trackRef = useRef<HTMLUListElement | null>(null);

  // Empty / single-image fallback — render the only image, no UI chrome.
  const count = images.length;

  // Pause for 8s after a manual selection, then resume auto-advance.
  const handleUserSelect = useCallback((i: number) => {
    setActive(i);
    setPaused(true);
    if (pauseTimer.current !== undefined) window.clearTimeout(pauseTimer.current);
    pauseTimer.current = window.setTimeout(() => setPaused(false), 8000);
  }, []);

  // Auto-advance loop — runs whenever not paused and there's more than one frame.
  useEffect(() => {
    if (paused || count <= 1) return;
    const t = window.setTimeout(
      () => setActive(i => (i + 1) % count),
      interval,
    );
    return () => window.clearTimeout(t);
  }, [active, paused, interval, count]);

  // Keep the active thumbnail visible inside its horizontally-scrolling row.
  useEffect(() => {
    const list = trackRef.current;
    if (!list) return;
    const node = list.children[active] as HTMLElement | undefined;
    node?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [active]);

  // Cleanup the manual-pause timer on unmount.
  useEffect(() => () => {
    if (pauseTimer.current !== undefined) window.clearTimeout(pauseTimer.current);
  }, []);

  if (count === 0) return null;

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        // Resume only if there's no manual-pause timer still running.
        if (pauseTimer.current === undefined) setPaused(false);
      }}
      onKeyDown={e => {
        if (count <= 1) return;
        if (e.key === "ArrowRight") {
          e.preventDefault();
          handleUserSelect((active + 1) % count);
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          handleUserSelect((active - 1 + count) % count);
        }
      }}
      tabIndex={count > 1 ? 0 : -1}
      role={count > 1 ? "region" : undefined}
      aria-roledescription={count > 1 ? "carousel" : undefined}
      aria-label={count > 1 ? "Project photography" : undefined}
    >
      {/* Main figure — all images layered, cross-fade between them */}
      <figure
        className={cn(
          "relative w-full overflow-hidden rounded-md border border-border bg-bg-inset",
          aspect,
        )}
      >
        {images.map((img, i) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            fill
            sizes="(min-width: 1200px) 1200px, 100vw"
            className={cn(
              "object-cover transition-opacity duration-700 ease-out",
              active === i ? "opacity-100 z-10" : "opacity-0 z-0",
            )}
            priority={priorityFirst && i === 0}
            loading={priorityFirst && i === 0 ? undefined : "lazy"}
            aria-hidden={active === i ? undefined : true}
          />
        ))}

        {/* Step indicator — bottom-right corner, gold dots */}
        {count > 1 && (
          <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 rounded-full bg-black/30 px-2.5 py-1.5 backdrop-blur">
            {images.map((_, i) => (
              <span
                key={i}
                aria-hidden
                className={cn(
                  "block h-1.5 rounded-full transition-all duration-300",
                  active === i ? "w-4 bg-gold" : "w-1.5 bg-fg/40",
                )}
              />
            ))}
          </div>
        )}
      </figure>

      {/* Thumbnail row — horizontally-scrolling queue */}
      {count > 1 && (
        <ul
          ref={trackRef}
          className="mt-3 flex gap-2 overflow-x-auto scrollbar-hide pb-1"
          aria-label="Photo gallery"
        >
          {images.map((img, i) => (
            <li key={img.src} className="shrink-0">
              <button
                type="button"
                onClick={() => handleUserSelect(i)}
                aria-label={`Show photo ${i + 1} of ${count}`}
                aria-current={active === i ? "true" : undefined}
                className={cn(
                  "group relative block aspect-[4/3] w-20 md:w-24 overflow-hidden rounded-sm border transition-all duration-200",
                  active === i
                    ? "border-gold opacity-100"
                    : "border-border-hairline opacity-55 hover:opacity-100 hover:border-gold/60",
                )}
              >
                <Image
                  src={img.src}
                  alt=""
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
