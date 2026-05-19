"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ColourSwatchData {
  slug: string;
  label: string;
  hex: string;
}

/**
 * Colour swatch picker — visitor clicks a swatch, the preview tile
 * adopts the colour. Used on /disciplines/microtopping.
 * Pure CSS for the preview; no fetch / no library.
 */
export function ColourSwatchPicker({
  swatches,
  body,
  className,
}: {
  swatches: ColourSwatchData[];
  body?: string;
  className?: string;
}) {
  const [active, setActive] = React.useState(swatches[0]?.slug);
  const current = swatches.find(s => s.slug === active) ?? swatches[0];

  return (
    <div className={cn("grid gap-8 md:grid-cols-[1fr_1.2fr] md:gap-12 items-center", className)}>
      {/* Preview tile */}
      <div className="order-2 md:order-1">
        <div
          className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-border transition-colors duration-500 ease-out"
          style={{ backgroundColor: current?.hex ?? "#1c1916" }}
          aria-live="polite"
        >
          {/* Subtle texture hint */}
          <div
            aria-hidden
            className="absolute inset-0 mix-blend-overlay opacity-30 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.18),transparent_60%)]"
          />
          <div className="absolute bottom-4 left-4">
            <p className="eyebrow text-white/80">{current?.label}</p>
            <p className="mt-1 font-mono text-xs text-white/70">{current?.hex.toUpperCase()}</p>
          </div>
        </div>
        {body && (
          <p className="mt-5 text-fg-muted text-sm leading-relaxed">
            {body}
          </p>
        )}
      </div>

      {/* Swatch grid */}
      <ul
        className="order-1 md:order-2 grid grid-cols-3 gap-3 sm:grid-cols-4"
        aria-label="Choose a microtopping colour"
      >
        {swatches.map(sw => {
          const isActive = sw.slug === active;
          return (
            <li key={sw.slug}>
              <button
                type="button"
                onClick={() => setActive(sw.slug)}
                aria-pressed={isActive}
                aria-label={`${sw.label} — ${sw.hex}`}
                className={cn(
                  "group block w-full overflow-hidden rounded-sm transition-all duration-200",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
                  isActive ? "ring-2 ring-gold ring-offset-2 ring-offset-bg" : "ring-0 hover:opacity-90",
                )}
              >
                <span
                  className="block aspect-square w-full"
                  style={{ backgroundColor: sw.hex }}
                />
                <span className="block bg-bg-elevated px-2 py-2 text-left">
                  <span className="block text-[11px] uppercase tracking-[0.18em] text-fg-muted">
                    {sw.label}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
