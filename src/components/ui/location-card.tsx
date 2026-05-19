"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

export interface LocationCardProps {
  imageUrl: string;
  imageAlt?: string;
  location: string;
  country: string;
  href: string;
  priority?: boolean;
  className?: string;
}

const LocationCard = React.forwardRef<HTMLDivElement, LocationCardProps>(
  ({ imageUrl, imageAlt, location, country, href, priority = false, className }, ref) => {
    const controls = useAnimation();

    const cardVariants = {
      initial: { scale: 1, y: 0 },
      hover:   { scale: 1.02, y: -4, transition: { type: "spring" as const, stiffness: 380, damping: 22 } },
    };
    const textVariants = {
      initial: { opacity: 1 },
      hover:   { opacity: 0, transition: { duration: 0.12 } },
    };
    const iconVariants = {
      initial: { x: 0 },
      hover:   { x: 56, transition: { type: "spring" as const, stiffness: 300, damping: 18 } },
    };

    const titleId = React.useId();
    const alt = imageAlt ?? `A view of ${location}`;

    return (
      <motion.div
        ref={ref}
        role="group"
        aria-labelledby={titleId}
        variants={cardVariants}
        initial="initial"
        whileHover="hover"
        animate={controls}
        onHoverStart={() => controls.start("hover")}
        onHoverEnd={() => controls.start("initial")}
        className={cn(
          "overflow-hidden rounded-2xl border border-border bg-bg-elevated text-fg shadow-[0_1px_0_rgba(239,232,213,0.04)_inset,0_30px_60px_-20px_rgba(0,0,0,0.55)]",
          className,
        )}
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={alt}
            fill
            priority={priority}
            sizes="(min-width: 768px) 384px, 92vw"
            className="object-cover"
          />
        </div>

        <div className="flex items-center justify-between gap-4 p-4 md:p-5">
          <div className="min-w-0">
            <h3 id={titleId} className="font-serif text-xl text-fg leading-tight tracking-[-0.01em] truncate">
              {location},
            </h3>
            <p className="mt-1 eyebrow text-fg-subtle truncate">{country}</p>
          </div>

          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Get directions to ${location}`}
            whileTap={{ scale: 0.96 }}
            className="relative flex h-10 w-32 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gold text-sm font-medium text-bg transition-colors duration-200 hover:bg-gold-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            <motion.span variants={textVariants} animate={controls} className="absolute">
              Directions
            </motion.span>
            <motion.span variants={iconVariants} animate={controls} className="absolute left-4 flex items-center">
              <Send size={16} aria-hidden />
            </motion.span>
          </motion.a>
        </div>
      </motion.div>
    );
  },
);

LocationCard.displayName = "LocationCard";

export { LocationCard };
