"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/constants/site";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300",
        scrolled
          ? "bg-bg/85 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent",
      )}
    >
      {/* 3-col grid: equal-fr left + right with auto centre = true viewport-centred nav */}
      <div className="mx-auto grid h-20 md:h-[120px] max-w-[1600px] grid-cols-[1fr_auto_1fr] items-center px-5 md:px-12 lg:px-16">
        {/* Left — brand */}
        <div className="flex items-center">
          <Logo size={112} priority />
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
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
