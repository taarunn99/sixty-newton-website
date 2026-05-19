import { cn } from "@/lib/utils";

export interface CrossSectionLayerData {
  index: number;
  title: string;
  detail: string;
}

/**
 * Cross-section build-up diagram.
 * Pure SVG / CSS — top-to-bottom stack of layers with a label rail on the
 * right. Each layer has a hover state that surfaces its detail line.
 * Mobile: stacked vertical list. Desktop: side-by-side stack + rail.
 */
export function CrossSectionDiagram({
  layers,
  notes,
  className,
}: {
  layers: CrossSectionLayerData[];
  notes?: string[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-md border border-border bg-bg-elevated p-5 md:p-8",
        className,
      )}
    >
      <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-12">
        {/* Stack (SVG-styled blocks) */}
        <ul
          className="space-y-px"
          aria-label="System build-up from top to bottom"
        >
          {layers.map(layer => (
            <li
              key={layer.index}
              className="group relative flex items-stretch overflow-hidden rounded-sm bg-bg-inset"
            >
              <span
                aria-hidden
                className="grid w-12 shrink-0 place-items-center border-r border-border bg-bg font-mono text-[11px] text-gold"
              >
                {String(layer.index).padStart(2, "0")}
              </span>
              <span className="block flex-1 px-4 py-3 md:px-5 md:py-4">
                <span className="block font-serif text-base md:text-lg text-fg leading-tight">
                  {layer.title}
                </span>
                <span className="mt-1 block font-mono text-xs text-fg-muted">
                  {layer.detail}
                </span>
              </span>
            </li>
          ))}
        </ul>

        {/* Notes rail */}
        {notes && notes.length > 0 && (
          <div className="self-center">
            <p className="eyebrow text-fg-subtle">Lap & overlap discipline</p>
            <ul className="mt-4 space-y-3 text-sm text-fg-muted leading-relaxed">
              {notes.map(n => (
                <li key={n} className="flex gap-3">
                  <span aria-hidden className="mt-2 inline-block h-px w-3 bg-gold shrink-0" />
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
