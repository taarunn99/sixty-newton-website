import Link from "next/link";
import Image from "next/image";
import { APPLICATOR_CERTIFICATES } from "@/constants/site";
import { cn } from "@/lib/utils";

/**
 * Approved-applicator logo strip — "certificate wall" treatment.
 *
 * Design intent (atelier / editorial):
 *   Seven manufacturer marks vary wildly in native colour, contrast and
 *   aspect ratio. Naked-on-dark makes some vanish (Weber, Kerakoll) and
 *   others shout (Kerakoll's dark wordmark, Mapei's saturated blue).
 *
 *   The certificate-wall pattern normalises them: every logo sits on the
 *   same warm off-white tile with matched height. The tiles read as
 *   framed certificates on a gallery wall — visually quiet, uniformly
 *   spaced, with a gold-hairline hover cue for interactivity.
 *
 * Layout:
 *   2 cols on mobile, 4 cols on sm, 7 cols on md+ (single row).
 *   Each tile: fixed height, flex-center, cream backdrop, hairline border.
 *
 * Vetonit / Saveto ships an SVG with generous internal padding — its
 * `logoScale` in the data compensates so the mark reads at parity.
 */
export function BrandStrip({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-7 md:gap-3",
        className,
      )}
      aria-label="Approved applicator brands"
    >
      {APPLICATOR_CERTIFICATES.map(cert => (
        <Link
          key={cert.slug}
          href={`/approach#${cert.slug}`}
          aria-label={`${cert.brand} — approved applicator certificate`}
          className={cn(
            "group flex h-14 md:h-16 items-center justify-center overflow-hidden rounded-md px-3",
            "border border-white/[0.08] bg-white/[0.94]",
            "transition-all duration-200",
            "hover:border-gold/40 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
          )}
        >
          <Image
            src={cert.logoSrc}
            alt={`${cert.brand} logo`}
            width={cert.logoAspect === "wide" ? 160 : 96}
            height={cert.logoAspect === "wide" ? 56 : 56}
            className="max-h-8 md:max-h-9 w-auto object-contain"
            style={cert.logoScale ? { transform: `scale(${cert.logoScale})` } : undefined}
          />
        </Link>
      ))}
    </div>
  );
}
