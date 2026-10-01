// Botanical / culinary line art for the kitchen page.
//
// Deliberately line drawings rather than photographs: there are no real food
// photos yet, and stock food imagery would set an expectation the plate has to
// meet. These are inline SVG (a couple of kB), which also serves the page's
// weak-signal constraint — see KITCHEN-PAGE-BRIEF.md.

type IconProps = { className?: string };

/** Leaf sprig — section divider ornament. */
export function LeafSprig({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 12h18M42 12h18" />
      <path d="M32 5c-4 2-6 4.5-6 7s2 5 6 7c4-2 6-4.5 6-7s-2-5-6-7z" />
      <path d="M32 5v14" />
    </svg>
  );
}

/** Steaming bowl — curries, rice, dal. */
export function BowlIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 24h32c0 8-7 14-16 14S8 32 8 24z" />
      <path d="M5 24h38" />
      <path d="M20 14c0-3 3-3 3-6M27 16c0-2.5 2.5-2.5 2.5-5" />
    </svg>
  );
}

/** Cup — tea and coffee. */
export function CupIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M10 18h24v12c0 5-5 9-12 9s-12-4-12-9V18z" />
      <path d="M34 21h4a4 4 0 010 8h-4" />
      <path d="M17 11c0-2.5 2.5-2.5 2.5-5M25 11c0-2.5 2.5-2.5 2.5-5" />
    </svg>
  );
}

/** Flame — barbeque and grill. */
export function FlameIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M24 6c6 8 13 12 13 21a13 13 0 01-26 0c0-5 3-8 5-12 1.5 3 3 4 4.5 4C22 19 21 12 24 6z" />
    </svg>
  );
}

/** Wheat ear — breads and rice. */
export function WheatIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M24 42V14" />
      <path d="M24 14c0-4 3-7 6-8 0 4-2 7-6 8zM24 14c0-4-3-7-6-8 0 4 2 7 6 8z" />
      <path d="M24 24c0-4 3-7 6-8 0 4-2 7-6 8zM24 24c0-4-3-7-6-8 0 4 2 7 6 8z" />
      <path d="M24 34c0-4 3-7 6-8 0 4-2 7-6 8zM24 34c0-4-3-7-6-8 0 4 2 7 6 8z" />
    </svg>
  );
}

/** Maps a menu section title to its line-art icon. */
export function sectionIcon(title: string) {
  const t = title.toLowerCase();
  if (t.includes("beverage")) return CupIcon;
  if (t.includes("barbeque")) return FlameIcon;
  if (t.includes("roti") || t.includes("rice") || t.includes("chowmein")) return WheatIcon;
  return BowlIcon;
}
