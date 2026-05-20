import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/constants/site";

export default function NotFound() {
  return (
    <section className="grid min-h-[80dvh] place-items-center bg-bg px-6 py-32 text-center">
      <div className="max-w-2xl">
        <p className="eyebrow text-gold flex items-center justify-center gap-3">
          <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-gold" />
          <span>404 · Not found</span>
          <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-gold" />
        </p>

        <h1 className="font-serif font-extralight text-fg mt-8 text-[clamp(2.5rem,8vw,5rem)] leading-[1.02] tracking-[-0.02em]">
          Off the <span className="italic text-gold">blueprint.</span>
        </h1>

        <p className="mt-6 max-w-xl mx-auto font-serif font-light text-fg-muted text-lg md:text-xl leading-relaxed">
          The page you were looking for isn&rsquo;t here. Either the URL is wrong, the page hasn&rsquo;t been built yet, or it lived on a route we&rsquo;ve since renamed.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <Button asChild size="md">
            <Link href="/">Go home</Link>
          </Button>
          <Button asChild variant="outlineFill" size="md" className="group">
            <Link href="/request-a-quote">
              Request a Quote
              <ArrowRight size={14} aria-hidden className="ml-1 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>

        {/* Quick-nav — common destinations */}
        <div className="mt-16 border-t border-border pt-10">
          <p className="eyebrow text-fg-subtle">Or jump to</p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-fg-muted">
            {[
              { href: "/disciplines", label: "Disciplines" },
              { href: "/portfolio", label: "Portfolio" },
              { href: "/approach", label: "Approach" },
              { href: "/about", label: "About" },
              { href: "/blog", label: "Blog" },
              { href: "/faq", label: "FAQ" },
            ].map(l => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="eyebrow hover:text-gold transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-12 text-xs text-fg-subtle">
          Stuck? WhatsApp us on{" "}
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
