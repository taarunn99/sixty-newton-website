"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/constants/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // close on route change
  useEffect(() => setOpen(false), [pathname]);

  // lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // close on Esc
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
        className="md:hidden inline-flex h-11 w-11 items-center justify-center text-fg/90 hover:text-gold transition-colors"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-bg/95 backdrop-blur-md transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <nav className="flex h-dvh flex-col items-center justify-center gap-8 px-6">
          {NAV_ITEMS.map(item => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-serif text-4xl tracking-tight transition-colors",
                  active ? "text-gold" : "text-fg hover:text-gold",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Button asChild size="lg" className="mt-4">
            <Link href="/request-a-quote">Request a Quote</Link>
          </Button>
        </nav>
      </div>
    </>
  );
}
