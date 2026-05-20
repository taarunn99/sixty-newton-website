import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/utils";

/**
 * Branded gold-pill link to the parent company (lapizblue.com).
 * Use this anywhere we mention "Lapiz Blue Group" — it both attributes
 * the relationship and back-links the parent brand for SEO + traffic.
 */
export function LapizBlueLink({
  label = "Lapiz Blue Group",
  variant = "gold",
  className,
}: {
  label?: string;
  variant?: "gold" | "ghost";
  className?: string;
}) {
  return (
    <a
      href={SITE.parentGroupUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${SITE.parentGroup} — opens in a new tab`}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-full px-4 py-2 transition-colors duration-200",
        "eyebrow tracking-[0.2em]",
        variant === "gold"
          ? "bg-gold text-bg hover:bg-gold-hover"
          : "border border-gold/60 bg-transparent text-gold hover:bg-gold hover:text-bg",
        className,
      )}
    >
      <Image
        src="/brand/lapizblue-logo.svg"
        alt=""
        width={20}
        height={20}
        className={cn(
          "h-4 w-auto transition-opacity duration-200",
          variant === "gold" ? "opacity-90" : "opacity-90 group-hover:opacity-100",
        )}
        aria-hidden
      />
      <span>{label}</span>
      <ArrowUpRight
        size={12}
        aria-hidden
        className="opacity-70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
}
