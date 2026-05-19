import { cn } from "@/lib/utils";
import type { ComparisonTable as ComparisonTableData } from "@/content/services/types";

/**
 * Static comparison table — system A vs B vs C with rows of attributes.
 * First column is sticky on mobile horizontal-scroll containers.
 * Renders as a real <table> so screen readers + search crawlers see structure.
 */
export function ComparisonTable({
  table,
  className,
}: {
  table: ComparisonTableData;
  className?: string;
}) {
  return (
    <div className={cn("overflow-x-auto rounded-md border border-border bg-bg-elevated", className)}>
      <table className="w-full min-w-[640px] text-left font-sans">
        <thead>
          <tr className="border-b border-border">
            <th className="sticky left-0 z-10 bg-bg-elevated px-4 py-4 md:px-6 md:py-5 eyebrow text-fg-subtle">&nbsp;</th>
            {table.columns.map(col => (
              <th
                key={col}
                scope="col"
                className="px-4 py-4 md:px-6 md:py-5 eyebrow text-gold"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {table.rows.map(row => (
            <tr key={row.label}>
              <th
                scope="row"
                className="sticky left-0 z-10 bg-bg-elevated px-4 py-4 md:px-6 md:py-5 font-mono text-xs uppercase tracking-widest text-fg-muted whitespace-nowrap align-top"
              >
                {row.label}
              </th>
              {row.cells.map((cell, i) => (
                <td
                  key={i}
                  className="px-4 py-4 md:px-6 md:py-5 text-sm leading-relaxed text-fg align-top"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {table.caption && (
        <p className="border-t border-border bg-bg-inset px-4 py-3 md:px-6 text-xs text-fg-muted">
          {table.caption}
        </p>
      )}
    </div>
  );
}
