"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { HAMBURGER_GROUPS, NAV_ITEMS } from "@/constants/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Universal drawer menu.
 * - Visible at ALL viewports (lives to the right of "Request a Quote")
 * - On <md, slides as a full-screen overlay and includes the centre nav links
 *   at the top (because the navbar hides them at that size).
 * - On md+, slides in as a right-side panel and shows only overflow links
 *   (Disciplines sub-pages, applicators, blog/FAQ, legal).
 */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close on route change
  useEffect(() => setOpen(false), [pathname]);

  // Body scroll lock while open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Esc to close
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
        onClick={() => setOpen(v => !v)}
        className="inline-flex h-11 w-11 items-center justify-center text-fg/90 hover:text-gold transition-colors duration-200"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Backdrop (md+) */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-bg/70 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
          "hidden md:block",
        )}
        onClick={() => setOpen(false)}
        aria-hidden
      />

      {/* Drawer panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        className={cn(
          // Mobile: full-screen overlay
          "fixed inset-0 z-50 bg-bg/95 backdrop-blur-md transition-all duration-300",
          // Desktop: right-side panel
          "md:left-auto md:right-0 md:top-0 md:h-dvh md:w-[460px] md:bg-bg-elevated md:border-l md:border-border md:backdrop-blur-none",
          open
            ? "opacity-100 pointer-events-auto translate-x-0"
            : "opacity-0 pointer-events-none md:translate-x-8",
        )}
      >
        <div className="h-full overflow-y-auto px-6 md:px-10 pt-24 md:pt-28 pb-12">
          {/* On <md only: surface the centre nav at the top */}
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
