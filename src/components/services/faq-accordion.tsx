import { Plus } from "lucide-react";
import { faqJsonLd, jsonLdScript } from "@/lib/jsonld";
import { cn } from "@/lib/utils";

export interface FAQItemData {
  q: string;
  a: string;
}

/**
 * FAQ accordion — uses native <details>/<summary> so:
 *   • zero JS, instant interactivity, fully accessible
 *   • all answers render in the DOM regardless of open/closed (SEO + crawlers)
 *   • visitors can open as many as they like
 * The plus icon rotates 45deg on open (becomes an x) via a sibling selector.
 * Renders matching FAQPage JSON-LD inline.
 */
export function FAQAccordion({
  items,
  className,
}: {
  items: FAQItemData[];
  className?: string;
}) {
  return (
    <>
      <ul className={cn("divide-y divide-border border-t border-b border-border", className)}>
        {items.map(item => (
          <li key={item.q}>
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 md:py-6 select-none">
                <span className="font-serif text-lg md:text-xl text-fg leading-snug pr-4">
                  {item.q}
                </span>
                <Plus
                  size={18}
                  aria-hidden
                  className="shrink-0 text-fg-muted transition-transform duration-200 group-open:rotate-45 group-open:text-gold"
                />
              </summary>
              <p className="pb-6 md:pb-8 pr-10 text-fg-muted text-base leading-relaxed">
                {item.a}
              </p>
            </details>
          </li>
        ))}
      </ul>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(faqJsonLd(items))}
      />
    </>
  );
}
