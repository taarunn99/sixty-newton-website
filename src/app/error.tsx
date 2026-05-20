"use client";
import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/constants/site";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
    if (typeof window !== "undefined") {
      const w = window as Window & { dataLayer?: Record<string, unknown>[] };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({
        event: "app_error",
        error_digest: error.digest,
        error_message: error.message?.slice(0, 200),
      });
    }
  }, [error]);

  return (
    <section className="grid min-h-[80dvh] place-items-center bg-bg px-6 py-32 text-center">
      <div className="max-w-2xl">
        <p className="eyebrow text-gold flex items-center justify-center gap-3">
          <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-gold" />
          <span>Something went wrong</span>
          <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-gold" />
        </p>

        <h1 className="font-serif font-extralight text-fg mt-8 text-[clamp(2.5rem,8vw,5rem)] leading-[1.02] tracking-[-0.02em]">
          We hit a <span className="italic text-gold">snag.</span>
        </h1>

        <p className="mt-6 max-w-xl mx-auto font-serif font-light text-fg-muted text-lg md:text-xl leading-relaxed">
          The page didn&rsquo;t load cleanly. Most often this is a temporary network glitch — try again, and if it persists, message us directly.
        </p>

        {error?.digest && (
          <p className="mt-4 font-mono text-xs text-fg-subtle">
            Reference: {error.digest}
          </p>
        )}

        <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <Button size="md" onClick={() => reset()}>Try again</Button>
          <Button asChild variant="outlineFill" size="md" className="group">
            <Link href="/">
              Go home
              <ArrowRight size={14} aria-hidden className="ml-1 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>

        <p className="mt-12 text-xs text-fg-subtle">
          Or WhatsApp us on{" "}
          <a
            href={`https://wa.me/${SITE.whatsappHref}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-hover transition-colors"
          >
            {SITE.whatsapp}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
