import { LocationCard } from "@/components/ui/location-card";

/**
 * Home-page Visit-Us section.
 * Sits at the very bottom of the home flow, after HomeEnquiry.
 * The Directions button opens Google Maps on the Lapiz Blue Dubai Branch.
 */
export function VisitUs() {
  // Universal Maps URL — works on iOS / Android / desktop, lands directly on directions.
  const mapsHref =
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent("Lapiz Blue General Trading LLC - Dubai Branch");

  return (
    <section
      aria-label="Visit us"
      className="relative w-full bg-bg border-t border-border"
    >
      <div className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow text-gold flex items-center gap-3">
            <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-gold" />
            <span>Visit us</span>
          </p>
          <h2 className="font-serif font-extralight text-fg mt-5 text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] tracking-[-0.02em]">
            Find us in Dubai.
          </h2>
          <p className="font-serif font-light text-fg-muted mt-4 text-lg md:text-xl leading-relaxed">
            Our Dubai branch is open Sunday – Thursday. Drop by, or open directions in one tap.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <LocationCard
            imageUrl="/images/home/visit-dubai.webp"
            imageAlt="Sixty Newton Dubai office — Lapiz Blue Tower"
            location="Dubai"
            country="United Arab Emirates"
            href={mapsHref}
            className="w-full max-w-sm"
          />
        </div>
      </div>
    </section>
  );
}
