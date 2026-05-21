"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/constants/site";
import { Logo } from "./logo";
import { Drawer } from "./mobile-menu";
import { DisciplinesMegaMenu } from "./disciplines-mega-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Navbar layout (all viewports, left → right):
 *   [Logo]    [Centre nav (md+)]    [Hamburger] [Request a Quote]
 *
 * The hamburger button lives DIRECTLY in the navbar (not inside the Drawer
 * component) — this keeps the click handler and the open state right next to
 * each other, with no prop-passing indirection that previously broke.
 *
 * Background state:
 *   - solid on hover, on drawer-open, on past-hero (home), or on any non-home route
 *   - otherwise transparent, with a permanent subtle top-fade gradient so items
 *     remain readable on any underlying content.
 */
export function Navbar() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [pastHero, setPastHero] = useState(pathname !== "/");

  // Disciplines mega-menu state — separate from header hover so the panel
  // doesn't open on every navbar mouseenter.
  const [megaOpen, setMegaOpen] = useState(false);
  const megaTimer = useRef<number | null>(null);

  const openMega = () => {
    if (megaTimer.current) window.clearTimeout(megaTimer.current);
    setMegaOpen(true);
  };
  const closeMega = () => {
    if (megaTimer.current) window.clearTimeout(megaTimer.current);
    megaTimer.current = window.setTimeout(() => setMegaOpen(false), 150);
  };

  useEffect(() => {
    setPastHero(pathname !== "/");
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;
    const heroEl = document.getElementById("hero");
    if (!heroEl) {
      setPastHero(true);
      return;
    }
    setPastHero(false);
    const io = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-64px 0px 0px 0px" },
    );
    io.observe(heroEl);
    return () => io.disconnect();
  }, [pathname]);

  // Belt-and-braces: also lock the navbar solid once we've scrolled past
  // ~100px on any page. iOS Safari's IntersectionObserver can fire
  // inconsistently during URL-bar transitions and GSAP ScrollTrigger pin
  // events, which was causing the navbar to briefly "disappear" on
  // mobile (transparent state over a dark frame). Scroll-Y is a stable
  // fallback signal that doesn't depend on the hero observer.
  const [scrolledDown, setScrolledDown] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => setScrolledDown(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer + mega-menu on route change
  useEffect(() => {
    setDrawerOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  // Escape closes the mega-menu
  useEffect(() => {
    if (!megaOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMegaOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [megaOpen]);

  const solid = hovered || drawerOpen || pastHero || megaOpen || scrolledDown;

  return (
    <>
      <header
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300",
          solid
            ? "bg-bg/85 backdrop-blur-md border-b border-border"
            : "bg-transparent border-b border-transparent",
        )}
      >
        {/* Permanent subtle top-fade so navbar items are always readable */}
        {!solid && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-bg/60 via-bg/20 to-transparent"
          />
        )}

        {/*
          3-col grid with EXPLICIT col-start anchors. Without these, when the
          centre <nav> is display:none on mobile, CSS Grid auto-flows the
          remaining items into cols 1 and 2 — the right cluster falls into
          col 2 and col 3 collapses, leaving empty space on the far right.
          col-start fixes each item to its column regardless of hidden siblings.
        */}
        <div className="mx-auto grid h-16 md:h-[72px] max-w-[1600px] grid-cols-[1fr_auto_1fr] items-center px-5 md:px-12 lg:px-16">
          {/* Left — brand (col 1) */}
          <div className="col-start-1 flex items-center justify-self-start">
            <Logo size={72} priority />
          </div>

          {/* Centre — main nav (col 2, md+ only) */}
          <nav className="col-start-2 hidden md:flex items-center gap-8 lg:gap-10 justify-self-center">
            {NAV_ITEMS.map(item => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(item.href + "/");

              const isDisciplines = item.href === "/disciplines";

              return (
                <div
                  key={item.href}
                  className="relative"
                  onPointerEnter={isDisciplines ? openMega : undefined}
                  onPointerLeave={isDisciplines ? closeMega : undefined}
                >
                  <Link
                    href={item.href}
                    aria-haspopup={isDisciplines ? "menu" : undefined}
                    aria-expanded={isDisciplines ? megaOpen : undefined}
                    onFocus={isDisciplines ? openMega : undefined}
                    className={cn(
                      "eyebrow tracking-[0.22em] text-fg hover:text-gold transition-colors duration-200 relative",
                      "inline-flex items-center gap-1",
                      active && "text-gold",
                    )}
                  >
                    {item.label}
                    {isDisciplines && (
                      <ChevronDown
                        size={12}
                        aria-hidden
                        className={cn(
                          "transition-transform duration-200",
                          megaOpen && "rotate-180",
                        )}
                      />
                    )}
                    <span
                      className={cn(
                        "absolute -bottom-1.5 left-0 right-0 h-px bg-gold origin-left transition-transform duration-300",
                        active ? "scale-x-100" : "scale-x-0",
                      )}
                      aria-hidden
                    />
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Disciplines mega-menu (desktop hover dropdown) */}
          <DisciplinesMegaMenu
            open={megaOpen}
            onPointerEnter={openMega}
            onPointerLeave={closeMega}
          />

          {/* Right — Hamburger + Request a Quote (col 3, both viewports, hard-pinned to viewport edge) */}
          <div className="col-start-3 flex items-center gap-2 md:gap-3 justify-self-end">
            <button
              type="button"
              aria-label={drawerOpen ? "Close menu" : "Open menu"}
              aria-expanded={drawerOpen}
              aria-controls="sn-drawer"
              onClick={() => setDrawerOpen(v => !v)}
              className="relative z-[65] inline-flex h-11 w-11 items-center justify-center text-fg hover:text-gold transition-colors duration-200"
            >
              {drawerOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <Button asChild size="sm" className="md:hidden">
              <Link href="/request-a-quote">Quote</Link>
            </Button>
            <Button asChild size="md" className="hidden md:inline-flex">
              <Link href="/request-a-quote">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Drawer renders OUTSIDE the header — independent stacking context */}
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
