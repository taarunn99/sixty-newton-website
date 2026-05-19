import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Related services — three sibling-discipline cards at the foot of a page.
 * Each tile links to /disciplines/[slug].
 */
export function RelatedServices({
  items,
  className,
}: {
  items: { slug: string; title: string; note: string }[];
  className?: string;
}) {
  return (
    <ul className={cn("grid gap-3 md:grid-cols-3 md:gap-4", className)}>
      {items.map(item => (
        <li key={item.slug}>
          <Link
            href={`/disciplines/${item.slug}`}
            className="group block h-full rounded-md border border-border bg-bg-elevated p-6 transition-colors duration-200 hover:border-gold/70"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-serif text-2xl text-fg leading-tight tracking-[-0.01em]">
                {item.title}
              </h3>
              <ArrowUpRight
                size={18}
                aria-hidden
                className="shrink-0 text-fg-subtle transition-colors duration-200 group-hover:text-gold"
              />
            </div>
            <p className="mt-3 text-fg-muted text-sm leading-relaxed">
              {item.note}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
