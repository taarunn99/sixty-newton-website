import { cn } from "@/lib/utils";

/**
 * Atelier eyebrow: gold bullet · uppercase tracked label.
 * Reuses the global .eyebrow rule from globals.css.
 */
export function SectionEyebrow({
  children,
  className,
  align = "left",
}: {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <p
      className={cn(
        "eyebrow text-gold flex items-center gap-3",
        align === "center" && "justify-center",
        className,
      )}
    >
      <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-gold" />
      <span>{children}</span>
    </p>
  );
}
