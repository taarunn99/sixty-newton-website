import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
};

/**
 * Reusable page-header band — used on every secondary route.
 * Editorial dark band with eyebrow + serif headline + optional subtitle.
 */
export function PageHero({ eyebrow, title, subtitle, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden bg-bg pt-40 pb-24 md:pt-48 md:pb-32 border-b border-border",
        className,
      )}
      aria-labelledby="page-hero-heading"
    >
      <div className="relative mx-auto max-w-[1600px] px-5 md:px-12 lg:px-16 text-center">
        {eyebrow && (
          <p className="eyebrow text-gold flex items-center justify-center gap-3">
            <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-gold" />
            <span>{eyebrow}</span>
            <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-gold" />
          </p>
        )}
        <h1
          id="page-hero-heading"
          className="font-serif mt-6 text-fg font-extralight tracking-[-0.02em] leading-[0.98] text-[clamp(2.5rem,6vw,5.5rem)]"
        >
          {title}
        </h1>
        {subtitle && (
          <p className="font-serif mt-6 max-w-2xl mx-auto text-fg-muted text-lg md:text-xl font-light leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export function StubBody({ children }: { children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-3xl px-5 md:px-10 py-20 md:py-28 text-center">
      <p className="eyebrow text-fg-subtle">In build</p>
      <p className="font-serif italic mt-6 text-2xl md:text-3xl text-fg-muted leading-relaxed">
        {children}
      </p>
    </section>
  );
}
