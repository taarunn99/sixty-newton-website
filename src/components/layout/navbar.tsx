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
 * Navbar — transparent-feeling at rest (always shows a faint top-fade so items
 * remain readable on any background), solid when:
 *  - desktop hover (mouseenter on the header)
 *  - drawer is open (visual continuity with the menu)
 *  - the home `#hero` section has fully scrolled out of view
 *  - any non-home route (no hero → default to solid)
 */
export function Navbar() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [pastHero, setPastHero] = useState(pathname !== "/");

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
      {/* Always-on subtle top-fade so navbar items remain readable even when
          the header itself is "transparent". Sits behind navbar content, doesn't
          intercept clicks, doesn't add visual weight when content underneath
          is already dark. */}
      {!solid && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-bg/60 via-bg/20 to-transparent"
        />
      )}

      {/* 3-col grid: equal-fr left + right with auto centre = viewport-centred nav */}
      <div className="mx-auto grid h-16 md:h-[72px] max-w-[1600px] grid-cols-[1fr_auto_1fr] items-center px-5 md:px-12 lg:px-16">
        {/* Left — brand */}
        <div className="flex items-center">
          <Logo size={72} priority />
        </div>

        {/* Centre — main nav (hidden below md, lives in hamburger drawer there) */}
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
                  "eyebrow tracking-[0.22em] text-fg hover:text-gold transition-colors duration-200 relative",
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

        {/* Right — CTA + hamburger. Both visible at ALL viewports now. */}
        <div className="flex items-center gap-2 md:gap-3 justify-self-end">
          <Button asChild size="sm" className="md:hidden">
            <Link href="/request-a-quote">Quote</Link>
          </Button>
          <Button asChild size="md" className="hidden md:inline-flex">
            <Link href="/request-a-quote">Request a Quote</Link>
          </Button>
          <MobileMenu open={drawerOpen} onOpenChange={setDrawerOpen} />
        </div>
      </div>
    </header>
  );
}
