"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/constants/site";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Navbar — transparent at rest, solid on:
 *  - desktop hover (mouseenter on the header)
 *  - the drawer being open (visual continuity)
 *  - scrolling past the home `#hero` section (mobile-friendly: no hover possible)
 *  - any non-home route (no hero on the page → default to solid for readability)
 */
export function Navbar() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  // Default: solid on non-home routes (no hero). Home: starts transparent, flips
  // once the hero scrolls out of the viewport.
  const [pastHero, setPastHero] = useState(pathname !== "/");

  // Re-evaluate baseline when route changes
  useEffect(() => {
    setPastHero(pathname !== "/");
  }, [pathname]);

  // Track when the home `#hero` section leaves the viewport
  useEffect(() => {
    if (pathname !== "/") return;
    const heroEl = document.getElementById("hero");
    if (!heroEl) {
      setPastHero(true);
      return;
    }
    setPastHero(false);
    const io = new IntersectionObserver(
      ([entry]) => {
        // entry.isIntersecting === true while the hero is visible at all in the viewport.
        // Navbar stays transparent while any of the hero is on screen; goes solid once
        // we've scrolled past it entirely.
        setPastHero(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-64px 0px 0px 0px" }, // shrink top by navbar height
    );
    io.observe(heroEl);
    return () => io.disconnect();
  }, [pathname]);

  const solid = hovered || drawerOpen || pastHero;

  return (
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
      {/* 3-col grid: equal-fr left + right with auto centre = true viewport-centred nav */}
      <div className="mx-auto grid h-16 md:h-[72px] max-w-[1600px] grid-cols-[1fr_auto_1fr] items-center px-5 md:px-12 lg:px-16">
        {/* Left — brand */}
        <div className="flex items-center">
          <Logo size={72} priority />
        </div>

        {/* Centre — main nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 justify-self-center">
          {NAV_ITEMS.map(item => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "eyebrow tracking-[0.22em] text-fg/85 hover:text-fg transition-colors duration-200 relative",
                  active && "text-gold",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-1.5 left-0 right-0 h-px bg-gold origin-left transition-transform duration-300",
                    active ? "scale-x-100" : "scale-x-0",
                  )}
                  aria-hidden
                />
              </Link>
            );
          })}
        </nav>

        {/* Right — CTA + hamburger */}
        <div className="flex items-center gap-2 md:gap-3 justify-self-end">
          <div className="hidden md:block">
            <Button asChild size="md">
              <Link href="/request-a-quote">Request a Quote</Link>
            </Button>
          </div>
          <MobileMenu open={drawerOpen} onOpenChange={setDrawerOpen} />
        </div>
      </div>
    </header>
  );
}
