import { cn } from "@/lib/utils";

/**
 * "60 Newton · 0 Carbon Emission" sustainability band — the brand's
 * green positioning. Static, server-rendered, no JS.
 */
export function SustainabilityBand({ className }: { className?: string }) {
  return (
    <section
      aria-label="Sustainability commitment"
      className={cn("relative w-full bg-bg-inset border-t border-border", className)}
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-12 lg:px-16 py-20 md:py-28">
        {/* Big mark */}
        <div className="flex flex-col items-center text-center">
          <p className="eyebrow text-gold flex items-center gap-3">
            <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-gold" />
            <span>Sustainability</span>
            <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-gold" />
          </p>

          {/* Hero numbers — display serif, oversized */}
          <h2 className="mt-8 font-serif font-extralight text-fg leading-[0.9] tracking-[-0.04em] text-[clamp(3rem,9vw,7.5rem)]">
            60 Newton{" "}
            <span className="italic font-light text-gold">·</span>{" "}
            <span className="italic font-light text-gold">0 carbon emission</span>
          </h2>

          <p className="mt-10 max-w-3xl font-serif font-light text-fg-muted text-lg md:text-2xl leading-relaxed">
            The name is the standard. <span className="text-fg">60 newtons</span> is the
            compressive force we benchmark our discipline against. <span className="text-fg">Zero</span> is
            the carbon footprint we audit our material stack and on-site practice towards.
          </p>
        </div>

        {/* Three pillars */}
        <div className="mt-16 grid gap-3 md:grid-cols-3 md:gap-4">
          <div className="rounded-md border border-border bg-bg p-6 md:p-8">
            <p className="eyebrow text-gold">01 · Low-VOC system stack</p>
            <p className="mt-4 font-serif font-light text-fg text-xl leading-snug">
              Low-VOC primers, sealers and paints across every interior scope.
            </p>
            <p className="mt-3 text-fg-muted text-sm leading-relaxed">
              AkzoNobel Dulux EasyClean and Velvet Touch in low-VOC formulations as the default for villa and hospitality interiors. Where the brief calls for it, we go further with Greenguard-grade systems.
            </p>
          </div>

          <div className="rounded-md border border-border bg-bg p-6 md:p-8">
            <p className="eyebrow text-gold">02 · Water-fed dust suppression</p>
            <p className="mt-4 font-serif font-light text-fg text-xl leading-snug">
              No dry-grinding in occupied spaces. Water-fed pads on every polish.
            </p>
            <p className="mt-3 text-fg-muted text-sm leading-relaxed">
              Slurry vacuum-extracted at source. Cuts respirable silica exposure to single-digit micrograms — the standard our occupied hospitality and residential refurb programmes are built on.
            </p>
          </div>

          <div className="rounded-md border border-border bg-bg p-6 md:p-8">
            <p className="eyebrow text-gold">03 · Combo systems = single trade</p>
            <p className="mt-4 font-serif font-light text-fg text-xl leading-snug">
              Combo roof systems that insulate and waterproof in one pass.
            </p>
            <p className="mt-3 text-fg-muted text-sm leading-relaxed">
              Spray PU foam + UV-stable PU topcoat covers two scopes in a single mobilisation — fewer truck movements, fewer site days, lower embodied energy than a stacked traditional build-up.
            </p>
          </div>
        </div>

        <p className="mt-12 text-center text-fg-subtle text-sm">
          We aren&rsquo;t claiming carbon-zero as a marketing fact — we&rsquo;re naming it as the direction the practice is travelling in. Every quotation now carries a low-impact alternative where one exists.
        </p>
      </div>
    </section>
  );
}
