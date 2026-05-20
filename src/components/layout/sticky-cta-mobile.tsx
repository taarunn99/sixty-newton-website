"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/utils";

/**
 * Sticky bottom-of-viewport CTA bar — MOBILE ONLY.
 * Appears after the user scrolls past 60% of the page; slides up from the
 * bottom edge. Two affordances: WhatsApp icon button + "Get a Quote" pill.
 *
 * Hidden on md+ (desktop has the persistent Request-a-Quote in the navbar).
 * Hidden on /request-a-quote itself (avoid double-CTA on the form page).
 */
export function StickyCTAMobile({ hideOnPath }: { hideOnPath?: string } = {}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (hideOnPath && window.location.pathname.startsWith(hideOnPath)) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const pct = max > 0 ? scrolled / max : 0;
        setVisible(pct > 0.55);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [hideOnPath]);

  const waHref = `https://wa.me/${SITE.whatsappHref}?text=${encodeURIComponent(SITE.whatsappMessage)}`;

  return (
    <div
      aria-hidden={!visible}
      style={{
        // Respect Z-Fold / iPhone home-indicator / system gesture areas.
        paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 1rem)",
        paddingLeft:   "calc(env(safe-area-inset-left, 0px) + 1rem)",
        paddingRight:  "calc(env(safe-area-inset-right, 0px) + 1rem)",
      }}
      className={cn(
        "md:hidden fixed inset-x-0 bottom-0 z-40 pt-3",
        "bg-gradient-to-t from-bg via-bg/95 to-transparent",
        "transition-[transform,opacity] duration-300 ease-out",
        visible ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-full opacity-0 pointer-events-none",
      )}
    >
      <div className="flex items-center gap-3">
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp the Sixty Newton team"
          className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/60 bg-bg-elevated text-gold transition-colors duration-200 active:bg-gold active:text-bg"
        >
          <svg viewBox="0 0 24 24" aria-hidden focusable="false" className="h-5 w-5" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </a>

        <Link
          href="/request-a-quote"
          className="group flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-gold text-bg eyebrow tracking-[0.22em] px-5 transition-colors duration-200 active:bg-gold-hover"
        >
          Get a quote
          <ArrowRight
            size={14}
            aria-hidden
            className="transition-transform duration-200 group-active:translate-x-0.5"
          />
        </Link>
      </div>
    </div>
  );
}
