"use client";
import Image from "next/image";
import AutoScroll from "embla-carousel-auto-scroll";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

/**
 * Discipline icon reel — auto-scrolling, infinite loop, paused on hover.
 *
 * 10 gold line-art icons drift left-to-right (or right-to-left) across the
 * full width of the disciplines page. Sits directly under the PageHero band's
 * hairline divider as a quiet brand strip — no heading, no copy, just motion.
 *
 * Edge gradients (--bg fading to transparent) mask the loop seam so icons
 * appear to dissolve in/out of the page edges rather than hard-cutting.
 */

// Filename order matches the source folder (107..116) — the icons read as
// a sequence of disciplines: waterproofing, finishes, sealants, spray,
// installer, tiling, pools, maintenance, trowelling, polishing.
const ICONS = [
  "107", "108", "109", "110", "111", "112", "113", "114", "115", "116",
] as const;

export function DisciplineReel() {
  return (
    <section
      aria-label="Disciplines — visual reel"
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
            {/* Render the icon set twice so the loop seam is invisible while
                Embla rebuilds — visual continuity at the wrap point. */}
            {[...ICONS, ...ICONS].map((id, i) => (
              <CarouselItem
                key={`${id}-${i}`}
                className="flex basis-1/4 justify-center pl-0 sm:basis-1/5 md:basis-1/6 lg:basis-1/8 xl:basis-[10%]"
              >
                <div className="mx-6 md:mx-10 flex h-8 md:h-10 shrink-0 items-center justify-center">
                  <Image
                    src={`/icons/disciplines/${id}.webp`}
                    alt=""
                    width={64}
                    height={64}
                    className="h-full w-auto object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Edge fades — dissolve the icons into the page bg at both ends */}
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
