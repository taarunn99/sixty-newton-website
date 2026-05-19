import { cn } from "@/lib/utils";

/**
 * Spec card — mono-style technical callout.
 * Renders a titled list of label / value rows in JetBrains-style mono.
 */
export function SpecCard({
  title,
  rows,
  className,
}: {
  title: string;
  rows: { label: string; value: string }[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-md border border-border bg-bg-elevated p-5 md:p-6",
        className,
      )}
    >
      <p className="eyebrow text-fg-subtle">{title}</p>
      <div aria-hidden className="mt-3 h-px w-10 bg-gold/60" />
      <dl className="mt-4 space-y-2 font-mono text-sm text-fg">
        {rows.map(r => (
          <div key={r.label} className="grid grid-cols-[6rem_1fr] gap-3">
            <dt className="text-fg-muted">{r.label}</dt>
            <dd>{r.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
