import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="grid min-h-[80dvh] place-items-center bg-bg px-6 text-center">
      <div className="max-w-md">
        <p className="eyebrow text-gold">404 — Not found</p>
        <h1 className="font-serif text-fg mt-6 text-5xl md:text-6xl leading-tight">
          Off the blueprint.
        </h1>
        <p className="mt-4 text-fg-muted">
          The page you were looking for isn&rsquo;t here. Let&rsquo;s point you somewhere useful.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <Button asChild>
            <Link href="/">Go home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Contact us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
