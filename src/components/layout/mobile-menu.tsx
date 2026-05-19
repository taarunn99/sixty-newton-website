"use client";
import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { HAMBURGER_GROUPS, NAV_ITEMS } from "@/constants/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Universal drawer menu.
 * - Trigger visible at ALL viewports (right side of the navbar, beside Request a Quote)
 * - On <md: full-screen overlay with NAV_ITEMS + Request a Quote at the top, then
 *   HAMBURGER_GROUPS below.
 * - On md+: right-side panel (460px) with HAMBURGER_GROUPS only (centre nav already
 *   shows NAV_ITEMS).
 * - Inner scroll is functional but the scrollbar is hidden — no second-scrollbar UX.
 * - Page scroll is locked while open (document.body.style.overflow).
 * - Explicit X close button in the drawer's top-right corner.
 *
 * Open state is hoisted into <Navbar> so the navbar can flip to its "solid"
 * appearance while the drawer is on screen.
 */
type MobileMenuProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function MobileMenu({ open, onOpenChange }: MobileMenuProps) {
  const pathname = usePathname();
  const setOpen = onOpenChange;

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="inline-flex h-11 w-11 items-center justify-center text-fg/90 hover:text-gold transition-colors duration-200"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Backdrop (md+) — z-[55] so it sits above the navbar (z-50) but below the panel */}
      <div
        className={cn(
          "fixed inset-0 z-[55] bg-bg/70 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
          "hidden md:block",
        )}
        onClick={() => setOpen(false)}
        aria-hidden
      />

      {/* Drawer panel — z-[60] guarantees it sits above the navbar regardless of stacking quirks */}
      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-[60] bg-bg/95 backdrop-blur-md transition-all duration-300",
          "md:left-auto md:right-0 md:top-0 md:h-dvh md:w-[460px] md:bg-bg-elevated md:border-l md:border-border md:backdrop-blur-none",
          open
            ? "opacity-100 pointer-events-auto translate-x-0"
            : "opacity-0 pointer-events-none md:translate-x-8",
        )}
      >
        {/* Inline close X — top-right of the panel */}
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="absolute top-5 right-5 md:top-6 md:right-6 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-fg/90 hover:text-gold hover:border-gold transition-colors duration-200"
        >
          <X size={18} />
        </button>

        {/* Scrollable content — scrollbar hidden, scroll still works via wheel/touch */}
        <div className="h-full overflow-y-auto scrollbar-hide px-6 md:px-10 pt-20 md:pt-24 pb-12">
          {/* <md only: surface centre nav at top */}
          <div className="md:hidden">
            <p className="eyebrow text-fg-subtle">Main</p>
            <ul className="mt-5 space-y-4">
              {NAV_ITEMS.map(item => {
                const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href + "/"));
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "font-serif text-3xl tracking-tight transition-colors duration-200 block",
                        active ? "text-gold" : "text-fg hover:text-gold",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2">
                <Button asChild size="md">
                  <Link href="/request-a-quote">Request a Quote</Link>
                </Button>
              </li>
            </ul>
            <div className="my-10 h-px bg-border" />
          </div>

          {/* Overflow groups */}
          <div className="space-y-10">
            {HAMBURGER_GROUPS.map(group => (
              <div key={group.heading}>
                <p className="eyebrow text-fg-subtle">{group.heading}</p>
                <ul className="mt-5 space-y-2.5">
                  {group.items.map(item =>
                    item.external ? (
                      <li key={`${group.heading}-${item.label}-${item.href}`}>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-fg/85 hover:text-gold transition-colors duration-200 text-base"
                        >
                          {item.label}
                        </a>
                      </li>
                    ) : (
                      <li key={`${group.heading}-${item.label}-${item.href}`}>
                        <Link
                          href={item.href}
                          className="text-fg/85 hover:text-gold transition-colors duration-200 text-base"
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
        </div>
      </div>
    </>
  );
}
