"use client";
import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // TODO: pipe to Sentry / Vercel Logs once analytics IDs are in
    console.error(error);
  }, [error]);

  return (
    <section className="grid min-h-[80dvh] place-items-center bg-bg px-6 text-center">
      <div className="max-w-md">
        <p className="eyebrow text-gold">Something went wrong</p>
        <h1 className="font-serif text-fg mt-6 text-4xl md:text-5xl leading-tight">
          We hit a snag.
        </h1>
        <p className="mt-4 text-fg-muted">
          The page failed to load. You can retry — or head back home.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <Button onClick={() => reset()}>Try again</Button>
          <Button variant="outline" asChild>
            <Link href="/">Go home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
