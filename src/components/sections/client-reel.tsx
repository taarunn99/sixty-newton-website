"use client";
import { useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import AutoScroll from "embla-carousel-auto-scroll";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

/**
 * Client logo reel — auto-scrolling, paused never, with a gold radial
 * spotlight that follows the cursor while it's over the strip.
 *
 * Logos normalised to white silhouettes via CSS filter so the brand-colour
 * variety doesn't fight the dark page (Apple / Stripe trust-strip pattern).
 */

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
      aria-label="Selected clients — visual reel"
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

        {/* Mouse-tracking gold spotlight — "shadow button" pattern, scaled up */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-px z-[5] transition-opacity duration-500"
          style={{
            opacity: hovered ? 1 : 0,
            background: `radial-gradient(500px circle at ${pos.x}px ${pos.y}px, rgba(184,146,79,0.25), transparent 70%)`,
          }}
        />

        {/* Edge fades — above the spotlight so the glow dissolves at the edges */}
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
