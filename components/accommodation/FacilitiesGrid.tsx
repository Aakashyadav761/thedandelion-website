import type { CSSProperties } from "react";
import {
  BedDouble,
  AirVent,
  Refrigerator,
  ShowerHead,
  Flame,
  Flower2,
  HeartHandshake,
  Home,
  Maximize2,
  UserPlus,
  Sofa,
  TreePine,
  Baby,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const facilityIcons: Record<string, LucideIcon> = {
  "King-size bed": BedDouble,
  "Air Conditioning": AirVent,
  "Mini Fridge": Refrigerator,
  "Private Washroom": ShowerHead,
  "Geyser (hot water)": Flame,
  "Garden View": Flower2,
  "Couple Friendly": HeartHandshake,
  "Independent House": Home,
  "Spacious Room": Maximize2,
  "Accommodates Extra Person": UserPlus,
  "Private Patio": Sofa,
  "Forest View": TreePine,
  "Child Friendly": Baby,
};

// Shorter labels for the compact single-row grid — keeps every cell on one line.
const shortLabels: Record<string, string> = {
  "King-size bed": "King Bed",
  "Air Conditioning": "AC",
  "Mini Fridge": "Fridge",
  "Private Washroom": "Bath",
  "Geyser (hot water)": "Hot Water",
  "Independent House": "Own House",
  "Spacious Room": "Roomy",
  "Accommodates Extra Person": "Extra Person",
  "Private Patio": "Patio",
};

export default function FacilitiesGrid({ facilities }: { facilities: string[] }) {
  if (!facilities?.length) return null;
  return (
    <div
      className="grid grid-cols-3 sm:grid-cols-4 gap-x-2 gap-y-6 lg:gap-x-1.5 lg:gap-y-0 lg:[grid-template-columns:repeat(var(--facility-count),minmax(0,1fr))]"
      style={{ "--facility-count": facilities.length } as CSSProperties}
    >
      {facilities.map((name) => {
        const Icon = facilityIcons[name] ?? Sparkles;
        return (
          <div key={name} className="flex flex-col items-center text-center gap-1.5 lg:gap-1.5 lg:px-0.5 lg:min-w-0">
            <span className="flex items-center justify-center w-10 h-10 lg:w-7 lg:h-7 rounded-full bg-sage/12 text-sage shrink-0">
              <Icon className="w-4 h-4 lg:w-3 lg:h-3" strokeWidth={1.6} />
            </span>
            <span className="font-body text-[9px] lg:text-[8px] uppercase lg:tracking-normal tracking-wide text-brown-body leading-[1.25] break-words [overflow-wrap:anywhere] lg:w-full">
              {shortLabels[name] ?? name}
            </span>
          </div>
        );
      })}
    </div>
  );
}
