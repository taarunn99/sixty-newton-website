import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SITE } from "@/constants/site";

/**
 * Sixty Newton brand lockup — gold house + polishing-machine mark
 * over the 'SixtyNewton — Technical Services' wordmark.
 * `/public/brand/logo.svg` is the dark-mode variant (white wordmark + gold mark).
 *
 * Source SVG is a 500×500 square lockup with generous padding,
 * so set `size` to a *height* in px and the width auto-fits.
 */
export function Logo({
  className,
  size = 56,
  priority = false,
}: {
  className?: string;
  size?: number;
  priority?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label={`${SITE.name} — home`}
      className={cn("inline-flex items-center select-none group", className)}
      style={{ height: size }}
    >
      <Image
        src="/brand/logo.svg"
        alt={SITE.name}
        width={size}
        height={size}
        priority={priority}
        className="h-full w-auto transition-opacity group-hover:opacity-90"
      />
    </Link>
  );
}
