export default function Loading() {
  return (
    <div
      aria-busy="true"
      aria-live="polite"
      className="grid min-h-[80dvh] place-items-center bg-bg"
    >
      <div className="flex flex-col items-center gap-4">
        <span className="block h-px w-24 bg-gold/40 animate-pulse" />
        <span className="eyebrow text-fg-subtle">Loading</span>
      </div>
    </div>
  );
}
