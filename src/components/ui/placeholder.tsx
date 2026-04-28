import { cn } from "@/lib/utils";

/**
 * Placeholder—an intentional empty visual slot. Designed to read as
 * "image goes here" without looking broken. Use anywhere a future image,
 * diagram, or screenshot will be dropped in.
 *
 * Renders a hairline-bordered box at a fixed aspect ratio with cyan
 * corner brackets and a small mono label. The aspect prop accepts any
 * Tailwind aspect-ratio value (e.g. "16/9", "4/3", "1/1").
 *
 * When `fill` is true, the aspect ratio is dropped and the box stretches
 * to fill its parent's height—useful when the placeholder lives in a
 * flex column that must match a sibling's measured height (e.g. a data
 * table running alongside it).
 */
export function Placeholder({
  label,
  aspect = "16/9",
  className,
  fill = false,
}: {
  label?: string;
  aspect?: string;
  className?: string;
  fill?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden border border-border bg-surface",
        fill && "h-full",
        className
      )}
      style={fill ? undefined : { aspectRatio: aspect }}
    >
      {/* Cyan corner brackets—same cypherpunk vocabulary as the rest
          of the brand, but applied to a placeholder so they read as
          "frame" rather than "active focal element". */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-px -top-px h-2 w-2 border-l-2 border-t-2 border-cyan/60"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-px -top-px h-2 w-2 border-r-2 border-t-2 border-cyan/60"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-px -left-px h-2 w-2 border-b-2 border-l-2 border-cyan/60"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-px -right-px h-2 w-2 border-b-2 border-r-2 border-cyan/60"
      />

      {label && (
        <div className="absolute left-4 top-3 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/30">
          // {label}
        </div>
      )}
    </div>
  );
}
