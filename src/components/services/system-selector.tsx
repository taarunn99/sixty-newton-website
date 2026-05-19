"use client";

import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SystemSelectorOption {
  slug: string;
  label: string;
  recommended: boolean;
  system: { brand: string; name: string; applicationMethod: string };
  spec: string[];
  tdsHref?: string;
}

/**
 * SystemSelector — the brief's hero viz.
 * Left column: radiogroup of applications. Right two columns: recommended
 * system + indicative spec for the active selection. Cross-fades on change.
 */
export function SystemSelector({
  options,
  className,
}: {
  options: SystemSelectorOption[];
  className?: string;
}) {
  const defaultSlug =
    options.find(o => o.recommended)?.slug ?? options[0]?.slug ?? "";
  const [active, setActive] = React.useState(defaultSlug);
  const current = options.find(o => o.slug === active) ?? options[0];

  return (
    <div
      className={cn(
        "rounded-md border border-border bg-bg-elevated",
        "grid md:grid-cols-[minmax(220px,260px)_1fr_1fr]",
        className,
      )}
    >
      {/* Column 1 — radiogroup */}
      <div
        role="radiogroup"
        aria-label="Select an application"
        className="border-b border-border md:border-b-0 md:border-r p-4 md:p-6"
      >
        <p className="eyebrow text-fg-subtle">Select application</p>
        <ul className="mt-4 space-y-1">
          {options.map(opt => {
            const checked = opt.slug === active;
            return (
              <li key={opt.slug}>
                <button
                  type="button"
                  role="radio"
                  aria-checked={checked}
                  onClick={() => setActive(opt.slug)}
                  className={cn(
                    "group flex w-full items-center gap-3 rounded-sm px-3 py-2 text-left transition-colors duration-200",
                    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
                    checked ? "bg-gold/10 text-fg" : "text-fg-muted hover:bg-bg-inset hover:text-fg",
                  )}
                >
                  <span
                    aria-hidden
                    className={cn(
                      "grid h-4 w-4 shrink-0 place-items-center rounded-full border transition-colors",
                      checked ? "border-gold" : "border-fg-subtle",
                    )}
                  >
                    {checked && <span className="h-2 w-2 rounded-full bg-gold" />}
                  </span>
                  <span className="flex-1 text-sm md:text-base font-sans tracking-tight">
                    {opt.label}
                  </span>
                  {opt.recommended && (
                    <span className="eyebrow text-gold ml-auto">★</span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Column 2 — recommended system */}
      <div className="border-b border-border md:border-b-0 md:border-r p-4 md:p-6">
        <p className="eyebrow text-fg-subtle">Recommended system</p>
        <div
          key={`sys-${current?.slug}`}
          className="mt-4 animate-[fadeIn_240ms_var(--ease-out-quint)]"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-gold">
            {current?.system.brand}
          </p>
          <p className="mt-2 font-serif text-xl text-fg leading-tight tracking-[-0.01em]">
            {current?.system.name}
          </p>
          <p className="mt-2 text-fg-muted text-sm">{current?.system.applicationMethod}</p>
          {current?.tdsHref && (
            <a
              href={current.tdsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-gold text-sm hover:text-gold-hover transition-colors"
            >
              View TDS
              <ArrowUpRight size={14} aria-hidden />
            </a>
          )}
        </div>
      </div>

      {/* Column 3 — spec */}
      <div className="p-4 md:p-6">
        <p className="eyebrow text-fg-subtle">Indicative spec</p>
        <ul
          key={`spec-${current?.slug}`}
          className="mt-4 space-y-2 animate-[fadeIn_240ms_var(--ease-out-quint)]"
        >
          {current?.spec.map(s => (
            <li key={s} className="flex gap-2 font-mono text-xs md:text-sm text-fg">
              <span aria-hidden className="text-gold">·</span>
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Embedded keyframes — kept local since used only here */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(2px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
