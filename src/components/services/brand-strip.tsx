import Link from "next/link";
import Image from "next/image";
import { APPLICATOR_CERTIFICATES } from "@/constants/site";
import { cn } from "@/lib/utils";

/**
 * Approved-applicator logo strip.
 * Used at the foot of the ServiceHero and again before the closing CTA.
 * Logos render in their natural colour over the dark background; each links
 * to the certificate row on /applicator-certifications.
 */
export function BrandStrip({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "compact";
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 items-center justify-items-center",
        variant === "compact" ? "max-w-2xl" : "max-w-3xl",
        className,
      )}
      aria-label="Approved applicator brands"
    >
      {APPLICATOR_CERTIFICATES.map(cert => (
        <Link
          key={cert.slug}
          href={`/applicator-certifications#${cert.slug}`}
          className="group relative block opacity-70 transition-opacity duration-200 hover:opacity-100 focus-visible:opacity-100"
          aria-label={`${cert.brand} — approved applicator certificate`}
        >
          <Image
            src={cert.logoSrc}
            alt={`${cert.brand} logo`}
            width={cert.logoAspect === "wide" ? 160 : 96}
            height={cert.logoAspect === "wide" ? 56 : 56}
            className="h-10 w-auto object-contain md:h-12"
          />
        </Link>
      ))}
    </div>
  );
}
