"use client";
import Image from "next/image";
import AutoScroll from "embla-carousel-auto-scroll";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

/**
 * Client logo reel — auto-scrolling, infinite loop, paused on hover.
 *
 * Same mechanic as DisciplineReel: a quiet brand strip sitting under the
 * /portfolio PageHero with no divider line between subtitle and reel.
 *
 * Logos are normalised to white silhouettes via CSS filter so the variety
 * of brand colours doesn't fight the dark page — universal "trust strip"
 * pattern used by Apple / Stripe / Anthropic for partner / client rails.
 */

// Display order — alternates wide wordmarks and stacked marks so adjacent
// logos don't all share the same shape and the reel reads as varied.
const CLIENTS = [
  { slug: "emaar",         alt: "Emaar Properties" },
  { slug: "atlantis",      alt: "Atlantis The Royal" },
  { slug: "damac",         alt: "DAMAC Properties" },
  { slug: "st-regis",      alt: "St. Regis Abu Dhabi" },
  { slug: "dubai-hills",   alt: "Dubai Hills Estate" },
  { slug: "le-meridien",   alt: "Le Méridien Hotels" },
  { slug: "sobha-realty",  alt: "Sobha Realty" },
  { slug: "al-wathba",     alt: "Al Wathba Desert Resort & Spa" },
] as const;

export function ClientReel() {
  return (
    <section
      aria-label="Selected clients — visual reel"
      className="relative w-full bg-bg py-3 md:py-5 overflow-hidden"
    >
      <div className="relative mx-auto w-full">
        <Carousel
          opts={{ loop: true, dragFree: true, align: "start" }}
          plugins={[
            AutoScroll({
              playOnInit: true,
              speed: 0.6,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
        >
          <CarouselContent className="ml-0">
            {/* Duplicate the set so the loop seam is invisible while Embla
                rebuilds — visual continuity at the wrap point. */}
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <CarouselItem
                key={`${c.slug}-${i}`}
                className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
              >
                <div className="mx-6 md:mx-10 flex h-10 md:h-12 shrink-0 items-center justify-center">
                  <Image
                    src={`/brand/clients/${c.slug}.webp`}
                    alt={c.alt}
                    width={160}
                    height={64}
                    className="h-full w-auto max-w-[140px] md:max-w-[180px] object-contain opacity-65 transition-opacity duration-300 hover:opacity-100 [filter:brightness(0)_invert(1)]"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Edge fades — dissolve into page bg at both ends */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-bg to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-bg to-transparent"
        />
      </div>
    </section>
  );
}
