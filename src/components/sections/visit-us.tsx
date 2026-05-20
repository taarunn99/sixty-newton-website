import { LocationCard } from "@/components/ui/location-card";
import { SITE } from "@/constants/site";

/**
 * Home-page Visit-Us section.
 *
 * The brand fact we want loud: registered office in Dubai, BUT site
 * mobilisation covers all seven Emirates. The headline emphasises UAE-wide
 * coverage; the location card is the Dubai office for visitor directions.
 */
export function VisitUs() {
  const mapsHref =
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent("Lapiz Blue General Trading LLC - Dubai Branch");

  return (
    <section
      aria-label="Where we work"
      className="relative w-full bg-bg border-t border-border"
    >
      <div className="mx-auto max-w-[1200px] px-5 md:px-12 lg:px-16 py-20 md:py-28">
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

        {/* Coverage strip — 7 Emirates loud + clear */}
        <div className="mt-12 border-t border-border-hairline pt-8">
          <p className="eyebrow text-fg-subtle">Coverage</p>
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3 md:gap-x-10">
            {SITE.serviceAreas.map(em => (
              <li
                key={em}
                className="font-serif text-2xl md:text-3xl lg:text-4xl text-fg font-extralight tracking-[-0.01em] leading-none"
              >
                {em}
              </li>
            ))}
          </ul>
        </div>

        {/* Office card */}
        <div className="mt-16 grid gap-10 md:gap-16 md:grid-cols-[1fr_minmax(0,22rem)] items-center">
          <div>
            <p className="eyebrow text-fg-subtle">Registered office · Dubai</p>
            <p className="mt-5 font-serif text-fg text-2xl md:text-3xl leading-tight font-light">
              {SITE.address.streetAddress}
            </p>
            <p className="mt-3 text-fg-muted text-base leading-relaxed">
              Sunday – Thursday, by appointment. Drop us a WhatsApp first and we&rsquo;ll have a coffee ready.
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
