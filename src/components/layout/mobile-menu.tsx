"use client";
import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { HAMBURGER_GROUPS, NAV_ITEMS } from "@/constants/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Drawer overlay/panel — controlled component, no internal open state.
 * Hamburger trigger lives in Navbar (parent). This component renders only
 * the backdrop + the panel itself.
 *
 * Mobile (<md): full-screen overlay. Contents (top → bottom):
 *   1. Primary nav (Home, Disciplines, Approach, Portfolio, About) —
 *      LARGE editorial serif. Visually dominant — these are the main routes.
 *   2. Hairline divider
 *   3. Overflow groups (Disciplines sub-pages, Applicators, Reference,
 *      Legal) — small tracked sans with eyebrow headings.
 *
 * Desktop (md+): right-side 460px panel. Contents:
 *   - ONLY the overflow groups (primary nav already lives in the centre nav).
 *
 * Page scroll is locked while open; scrollbar inside the drawer is hidden
 * via .scrollbar-hide; wheel/touch scroll still works.
 */
type DrawerProps = {
  open: boolean;
  onClose: () => void;
};

export function Drawer({ open, onClose }: DrawerProps) {
  const pathname = usePathname();

  // Body scroll lock while open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Esc to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <>
      {/* Backdrop (md+ only — mobile drawer is full-screen already) */}
      <div
        className={cn(
          "fixed inset-0 z-[55] hidden md:block bg-bg/70 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        onClick={onClose}
        aria-hidden
      />

      {/* Drawer panel */}
      <aside
        id="sn-drawer"
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        // `inert` when closed — removes children from focus order to
        // satisfy WCAG aria-hidden-focus rule.
        inert={!open}
        className={cn(
          // Mobile: full-screen overlay
          "fixed inset-0 z-[60] bg-bg/95 backdrop-blur-md transition-all duration-300",
          // Desktop: right-side panel
          "md:left-auto md:right-0 md:top-0 md:h-dvh md:w-[460px] md:bg-bg-elevated md:border-l md:border-border md:backdrop-blur-none",
          open
            ? "opacity-100 pointer-events-auto translate-x-0"
            : "opacity-0 pointer-events-none md:translate-x-8",
        )}
      >
        {/* Close X — top-right of panel */}
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="absolute top-5 right-5 md:top-6 md:right-6 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-fg hover:text-gold hover:border-gold transition-colors duration-200"
        >
          <X size={18} />
        </button>

        <div className="h-full overflow-y-auto scrollbar-hide px-8 md:px-10 pt-20 md:pt-24 pb-12">
          {/* ── Primary nav (mobile only) — editorial serif treatment ── */}
          <div className="md:hidden">
            <p className="eyebrow text-fg-subtle">Navigate</p>
            <ul className="mt-6 space-y-5">
              {NAV_ITEMS.map(item => {
                const active = item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        "block font-serif font-extralight text-4xl tracking-[-0.02em] transition-colors duration-200",
                        active ? "text-gold" : "text-fg hover:text-gold",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="my-10 h-px w-full bg-border" />
          </div>

          {/* ── Overflow groups (both viewports) — small tracked sans ── */}
          <div className="space-y-9">
            {HAMBURGER_GROUPS.map(group => (
              <div key={group.heading}>
                <p className="eyebrow text-gold">{group.heading}</p>
                <ul className="mt-4 space-y-2">
                  {group.items.map(item =>
                    item.external ? (
                      <li key={`${group.heading}-${item.label}-${item.href}`}>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={onClose}
                          className="inline-flex min-h-9 items-center text-sm text-fg-muted hover:text-fg transition-colors duration-200"
                        >
                          {item.label}
                        </a>
                      </li>
                    ) : (
                      <li key={`${group.heading}-${item.label}-${item.href}`}>
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="inline-flex min-h-9 items-center text-sm text-fg-muted hover:text-fg transition-colors duration-200"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ))}
          </div>

          {/* ── Bottom CTA bar (mobile only) — primary action stays one tap away ── */}
          <div className="md:hidden mt-12 pt-8 border-t border-border">
            <Button asChild size="lg" className="w-full">
              <Link href="/request-a-quote" onClick={onClose}>
                Request a Quote
              </Link>
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}
