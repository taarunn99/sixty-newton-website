"use client";
import { useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import AutoScroll from "embla-carousel-auto-scroll";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

/**
 * Discipline icon reel — auto-scrolling, paused never, with a gold radial
 * spotlight that follows the cursor while it's over the strip.
 */

const ICONS = [
  "107", "108", "109", "110", "111", "112", "113", "114", "115", "116",
] as const;

export function DisciplineReel() {
  const sectionRef = useRef<HTMLElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section
      ref={sectionRef}
      aria-label="Disciplines — visual reel"
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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
              stopOnMouseEnter: false,
              stopOnFocusIn: false,
            }),
          ]}
        >
          <CarouselContent className="ml-0">
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

        {/* Mouse-tracking gold spotlight — "shadow button" pattern, scaled up */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-px z-[5] transition-opacity duration-500"
          style={{
            opacity: hovered ? 1 : 0,
            background: `radial-gradient(500px circle at ${pos.x}px ${pos.y}px, rgba(184,146,79,0.25), transparent 70%)`,
          }}
        />

        {/* Edge fades — above the spotlight so the glow also dissolves at the edges */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 md:w-32 bg-gradient-to-r from-bg to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 md:w-32 bg-gradient-to-l from-bg to-transparent"
        />
      </div>
    </section>
  );
}
