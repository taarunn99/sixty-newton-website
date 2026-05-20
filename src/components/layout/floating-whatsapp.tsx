"use client";
import { useEffect, useState } from "react";
import { SITE } from "@/constants/site";

/**
 * Floating WhatsApp CTA — fixed bottom-right, every page.
 *
 * Brand-gold (NOT the default WhatsApp green) for visual cohesion with the
 * atelier dark/gold palette. Subtle entrance, soft pulse, big touch target.
 *
 * Click pushes a `whatsapp_click` event to dataLayer so GA4 / GTM can register
 * it as a conversion when those IDs are eventually wired in.
 */
export function FloatingWhatsApp() {
  const [mounted, setMounted] = useState(false);

  // Avoid SSR/CSR mismatch — only render after first client paint
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 800);
    return () => clearTimeout(t);
  }, []);

  const href = `https://wa.me/${SITE.whatsappHref}?text=${encodeURIComponent(SITE.whatsappMessage)}`;

  const onClick = () => {
    if (typeof window === "undefined") return;
    const w = window as Window & { dataLayer?: Record<string, unknown>[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({
      event: "whatsapp_click",
      contact_method: "whatsapp",
      button_location: "floating",
      phone_number: SITE.whatsappHref,
    });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      aria-label={`Chat with ${SITE.name} on WhatsApp`}
      onClick={onClick}
      data-mounted={mounted ? "true" : "false"}
      style={{
        // Lifted above StickyCTAMobile (~76px tall) + device safe-area bottom inset.
        // Right-side inset handles Z-Fold / curved-screen / system-gesture overlap.
        bottom: "calc(env(safe-area-inset-bottom, 0px) + 7rem)",
        right:  "calc(env(safe-area-inset-right, 0px) + 1.25rem)",
      }}
      className="fixed md:!bottom-[calc(env(safe-area-inset-bottom,0px)+8rem)] md:!right-[calc(env(safe-area-inset-right,0px)+1.75rem)] z-50 group inline-flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-gold text-bg shadow-[0_10px_30px_-8px_rgba(184,146,79,0.45),0_0_0_1px_rgba(184,146,79,0.35)] transition-all duration-200 hover:bg-gold-hover hover:scale-105 active:scale-95 motion-reduce:transition-none data-[mounted=false]:opacity-0 data-[mounted=false]:translate-y-3 data-[mounted=true]:opacity-100 data-[mounted=true]:translate-y-0"
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-gold/40 -z-10 animate-ping motion-reduce:hidden"
        style={{ animationDuration: "3s" }}
      />
      {/* Inline WhatsApp glyph — single-path, fill currentColor */}
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
        className="h-7 w-7 md:h-8 md:w-8"
        fill="currentColor"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
    </a>
  );
}
