"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "sn_consent_v1";

type Consent = "granted" | "denied";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function pushConsent(value: Consent) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "consent_update",
    consent: {
      ad_storage: value,
      ad_user_data: value,
      ad_personalization: value,
      analytics_storage: value,
      functionality_storage: "granted",
      security_storage: "granted",
    },
  });
}

/**
 * UAE PDPL-aware cookie consent banner.
 * Default-deny on first visit; analytics + ad cookies fire only after explicit consent.
 * Stores choice in localStorage, pushes Consent Mode v2 update to dataLayer.
 */
export function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Consent | null;
    if (!stored) {
      pushConsent("denied"); // initial state per PDPL
      setVisible(true);
    } else {
      pushConsent(stored);
    }
  }, []);

  const setConsent = (v: Consent) => {
    localStorage.setItem(STORAGE_KEY, v);
    pushConsent(v);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="consent-title"
      className={cn(
        "fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-2xl rounded-md border border-border bg-bg-elevated p-5 shadow-2xl",
        "md:inset-x-auto md:left-6 md:right-auto md:bottom-6",
      )}
    >
      <p id="consent-title" className="eyebrow text-gold">Cookies</p>
      <p className="mt-3 text-sm text-fg-muted leading-relaxed">
        We use cookies to understand how the site is used and improve it. You can accept
        analytics &amp; ad cookies, or continue with essentials only.
      </p>
      <div className="mt-5 flex flex-col sm:flex-row gap-2">
        <Button size="sm" onClick={() => setConsent("granted")}>Accept all</Button>
        <Button variant="outline" size="sm" onClick={() => setConsent("denied")}>
          Essentials only
        </Button>
      </div>
    </div>
  );
}
