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
            {/* Tiny circle call-buttons — minimalist, light up gold on
                hover/press. tel: hrefs open the dialler on mobile. */}
            <div className="mt-7 flex items-start gap-5">
              <a
                href={`tel:${SITE.landlineHref}`}
                aria-label={`Call landline ${SITE.landline}`}
                title={SITE.landline}
                className="group flex flex-col items-center gap-2"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/50 text-fg-muted transition-colors duration-200 group-hover:border-gold group-hover:bg-gold group-hover:text-bg group-active:bg-gold group-active:text-bg">
                  {/* Old-school desk-phone icon — semantic distinction from mobile */}
                  <svg viewBox="0 0 24 24" aria-hidden focusable="false" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 4h14a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1.5l-1 2h-9l-1-2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
                    <path d="M8 15h8" />
                    <path d="M8 19h8" />
                    <path d="M7 7h.01" />
                    <path d="M11 7h.01" />
                    <path d="M15 7h.01" />
                  </svg>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-fg-subtle transition-colors group-hover:text-gold">
                  Landline
                </span>
              </a>
              <a
                href={`tel:${SITE.phoneHref}`}
                aria-label={`Call mobile ${SITE.phone}`}
                title={SITE.phone}
                className="group flex flex-col items-center gap-2"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/50 text-fg-muted transition-colors duration-200 group-hover:border-gold group-hover:bg-gold group-hover:text-bg group-active:bg-gold group-active:text-bg">
                  {/* Handset / mobile icon */}
                  <svg viewBox="0 0 24 24" aria-hidden focusable="false" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                    <rect x="7" y="2" width="10" height="20" rx="2" />
                    <path d="M11 18h2" />
                  </svg>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-fg-subtle transition-colors group-hover:text-gold">
                  Mobile
                </span>
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
