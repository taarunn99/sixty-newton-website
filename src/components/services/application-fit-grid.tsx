import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";

type IconName = keyof typeof Icons;

/**
 * Icon grid of "where this system fits" application slots.
 * Each tile: a lucide icon (rendered from string name) + a label.
 * Falls back to a neutral dot icon if the icon name doesn't exist in lucide.
 */
export function ApplicationFitGrid({
  items,
  className,
}: {
  items: { label: string; icon: string }[];
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "grid gap-px bg-border-hairline border border-border-hairline",
        "grid-cols-2 sm:grid-cols-3 md:grid-cols-4",
        className,
      )}
    >
      {items.map(it => {
        const Cmp = (Icons[it.icon as IconName] ?? Icons.Dot) as React.ComponentType<{ size?: number; "aria-hidden"?: boolean; strokeWidth?: number; className?: string }>;
        return (
          <li
            key={it.label}
            className="flex items-center gap-3 bg-bg px-4 py-5 md:px-5 md:py-6"
          >
            <Cmp aria-hidden size={20} strokeWidth={1.5} className="text-gold shrink-0" />
            <span className="font-serif text-fg text-sm md:text-base leading-tight">
              {it.label}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
