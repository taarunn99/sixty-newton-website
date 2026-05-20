"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getDisciplinesByBucket } from "@/constants/site";
import { cn } from "@/lib/utils";

/**
 * Mega-menu dropdown under the "Disciplines" nav item.
 *
 * Desktop-only (md+): the mobile drawer continues to handle small viewports.
 * Renders a 3 × 2 grid of bucket columns (6 buckets total), each listing its
 * disciplines as clickable items. Published disciplines get a gold arrow;
 * unpublished render as static labels with "in build" annotation.
 *
 * Hover behaviour lives in the parent navbar — we just receive `open` +
 * pointer-handlers. Closes on:
 *   • Pointer leaves the panel
 *   • Escape key (parent listens)
 *   • Any link click (Next router push closes the menu implicitly via
 *     route-change effect in parent)
 */
export function DisciplinesMegaMenu({
  open,
  onPointerEnter,
  onPointerLeave,
}: {
  open: boolean;
  onPointerEnter: () => void;
  onPointerLeave: () => void;
}) {
  const buckets = getDisciplinesByBucket();

  return (
    <div
      role="menu"
      aria-label="Disciplines"
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      className={cn(
        "absolute left-1/2 top-full -translate-x-1/2 w-[min(1280px,calc(100vw-2.5rem))]",
        "hidden md:block",
        "transition-[opacity,transform] duration-200 ease-out",
        open
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none",
      )}
    >
      <div className="mt-2 rounded-md border border-border bg-bg-elevated shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)]">
        <div className="grid gap-px bg-border md:grid-cols-3 border-b border-border rounded-t-md overflow-hidden">
          {buckets.map(bucket => (
            <section key={bucket.slug} className="bg-bg-elevated p-6">
              <Link
                href={`/disciplines#${bucket.slug}`}
                className="group block"
              >
                <p className="eyebrow text-gold flex items-center gap-2 group-hover:text-gold-hover transition-colors">
                  {bucket.name}
                  <ArrowUpRight size={12} aria-hidden className="opacity-70" />
                </p>
              </Link>
              <ul className="mt-4 space-y-2">
                {bucket.disciplines.map(d => (
                  <li key={d.slug}>
                    {d.published ? (
                      <Link
                        href={`/disciplines/${d.slug}`}
                        className="group inline-flex items-center gap-2 text-fg hover:text-gold transition-colors duration-200"
                        role="menuitem"
                      >
                        <ArrowRight
                          size={12}
                          aria-hidden
                          className="text-gold transition-transform duration-200 group-hover:translate-x-0.5 shrink-0"
                        />
                        <span className="font-serif text-base leading-tight">{d.title}</span>
                      </Link>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-fg-subtle">
                        <span aria-hidden className="inline-block h-px w-3 bg-fg-subtle shrink-0" />
                        <span className="font-serif text-base leading-tight">{d.title}</span>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* Foot — wayfinder + secondary CTAs */}
        <div className="flex items-center justify-between gap-4 px-6 py-4 text-xs">
          <Link
            href="/disciplines"
            className="eyebrow text-gold hover:text-gold-hover transition-colors inline-flex items-center gap-1"
          >
            All 14 disciplines <ArrowRight size={12} aria-hidden />
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/approach#applicators"
              className="eyebrow text-fg-muted hover:text-gold transition-colors"
            >
              Applicator certificates
            </Link>
            <Link
              href="/portfolio"
              className="eyebrow text-fg-muted hover:text-gold transition-colors"
            >
              Reference projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
