import { LocationCard } from "@/components/ui/location-card";
import { SITE } from "@/constants/site";

/**
 * Home-page Visit-Us section.
 *
 * Layout (top → bottom):
 *  1. Heading band — "Based in Dubai. Delivering across the UAE."
 *  2. Coverage poster — giant "07" with the 7 emirates as a clean
 *     symmetric typographic block underneath (4-up + 3-up rows on
 *     desktop, gracefully collapses to 2-up on mobile)
 *  3. Office row — registered office details + phone numbers beside
 *     the Lapiz Blue Dubai LocationCard
 */
export function VisitUs() {
  const mapsHref =
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent("Lapiz Blue General Trading LLC - Dubai Branch");

  // Two rows for visual symmetry — 4 names + 3 names, centred
  const rowOne = SITE.serviceAreas.slice(0, 4);
  const rowTwo = SITE.serviceAreas.slice(4);

  return (
    <section
      aria-label="Where we work"
      className="relative w-full bg-bg border-t border-border"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-12 lg:px-16 py-20 md:py-28">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="eyebrow text-gold flex items-center gap-3">
            <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-gold" />
            <span>Where we work</span>
          </p>
          <h2 className="font-serif font-extralight text-fg mt-5 text-[clamp(2rem,5vw,3.75rem)] leading-[1.02] tracking-[-0.02em]">
            Based in Dubai.{" "}
            <span className="text-gold italic font-light">Delivering across the UAE.</span>
          </h2>
          <p className="font-serif font-light text-fg-muted mt-5 text-lg md:text-xl leading-relaxed max-w-2xl">
            Our office is in Al Quoz Industrial Area, Dubai — and our crews mobilise to projects in every Emirate. From a hotel back-of-house in Jumeirah to a podium deck in Abu Dhabi to a refinery floor in Mussafah, we travel.
          </p>
        </div>

        {/* ── Coverage poster — symmetric typographic block ── */}
        <div className="relative mt-16 md:mt-20 rounded-2xl border border-border bg-bg-elevated overflow-hidden">
          {/* Soft warm gold halo */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(184,146,79,0.08),transparent_60%)]"
          />

          {/* Faint dashed inner frame */}
          <div
            aria-hidden
            className="absolute inset-3 md:inset-5 border border-dashed border-[var(--border-dashed)] rounded-xl pointer-events-none"
          />

          <div className="relative px-6 md:px-12 lg:px-16 py-14 md:py-20 text-center">
            {/* Giant "07" mark — display serif, gold-tinted */}
            <p className="eyebrow text-fg-subtle">Coverage</p>
            <p
              aria-hidden
              className="font-serif font-extralight text-gold leading-[0.85] tracking-[-0.05em] mt-4 text-[clamp(7rem,18vw,16rem)] select-none"
            >
              07
            </p>
            <p className="mt-2 eyebrow text-gold tracking-[0.3em]">
              Emirates · One office · Daily mobilisation
            </p>

            <div aria-hidden className="mt-10 mx-auto h-px w-24 bg-gold/40" />

            {/* Two symmetric rows of emirate names */}
            <ul
              className="mt-10 flex flex-wrap justify-center items-baseline gap-x-4 gap-y-3 md:gap-x-8"
              aria-label="Emirates we serve"
            >
              {rowOne.map((em, i) => (
                <li
                  key={em}
                  className="flex items-baseline gap-x-4 md:gap-x-8 font-serif text-fg font-light tracking-[-0.01em] text-[clamp(1.25rem,3vw,2.25rem)]"
                >
                  <span>{em}</span>
                  {i < rowOne.length - 1 && (
                    <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-gold opacity-80" />
                  )}
                </li>
              ))}
            </ul>
            <ul
              className="mt-3 md:mt-5 flex flex-wrap justify-center items-baseline gap-x-4 gap-y-3 md:gap-x-8"
              aria-hidden
            >
              {rowTwo.map((em, i) => (
                <li
                  key={em}
                  className="flex items-baseline gap-x-4 md:gap-x-8 font-serif text-fg font-light tracking-[-0.01em] text-[clamp(1.25rem,3vw,2.25rem)]"
                >
                  <span>{em}</span>
                  {i < rowTwo.length - 1 && (
                    <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-gold opacity-80" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Office row — address + phone numbers + LocationCard ── */}
        <div className="mt-16 grid gap-10 md:gap-16 md:grid-cols-[1fr_minmax(0,22rem)] items-center">
          <div>
            <p className="eyebrow text-fg-subtle">Registered office · Dubai</p>
            <p className="mt-5 font-serif text-fg text-2xl md:text-3xl leading-tight font-light">
              {SITE.address.streetAddress}
            </p>
            <p className="mt-3 text-fg-muted text-base leading-relaxed">
              Monday – Saturday, by appointment. Drop us a WhatsApp first and we&rsquo;ll have a coffee ready.
            </p>
            <div className="mt-6 flex flex-col gap-1 text-sm">
              <a
                href={`tel:${SITE.landlineHref}`}
                className="text-fg-muted hover:text-gold transition-colors"
              >
                Landline · {SITE.landline}
              </a>
              <a
                href={`tel:${SITE.phoneHref}`}
                className="text-fg-muted hover:text-gold transition-colors"
              >
                Mobile · {SITE.phone}
              </a>
            </div>
          </div>

          <LocationCard
            imageUrl="/images/home/visit-dubai.webp"
            imageAlt="Sixty Newton Dubai office"
            location="Dubai"
            country="United Arab Emirates"
            href={mapsHref}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
