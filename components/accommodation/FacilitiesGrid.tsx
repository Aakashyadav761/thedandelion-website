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

export default function FacilitiesGrid({ facilities }: { facilities: string[] }) {
  if (!facilities?.length) return null;
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-7">
      {facilities.map((name) => {
        const Icon = facilityIcons[name] ?? Sparkles;
        return (
          <div key={name} className="flex flex-col items-center text-center gap-2.5">
            <span className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-sage/12 text-sage">
              <Icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.6} />
            </span>
            <span className="font-body text-[11px] md:text-xs uppercase tracking-wide text-brown-body leading-tight">
              {name}
            </span>
          </div>
        );
      })}
    </div>
  );
}
