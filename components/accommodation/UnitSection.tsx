import UnitGallery, { type GalleryPhoto } from "./UnitGallery";
import FacilitiesGrid from "./FacilitiesGrid";

export interface UnitData {
  id: string;
  unitType: string;
  count: number;
  heading: string;
  description: string;
  rate: number | null;
  rateIncludes: string;
  maxAdults: number;
  extraPersonCharge: number | null;
  images: GalleryPhoto[];
  imageLayout: "left" | "right";
  whatsappMessage: string;
  facilities: string[];
}

function formatRate(rate: number) {
  return "₹" + rate.toLocaleString("en-IN");
}

export default function UnitSection({ unit }: { unit: UnitData }) {
  const waUrl = `https://wa.me/917764006404?text=${encodeURIComponent(unit.whatsappMessage)}`;
  const flipped = unit.imageLayout === "right";

  return (
    <section className="py-12 md:py-16 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">

          {/* Photo / gallery column — h-full so gallery can fill to match right column */}
          <div className={`h-full flex flex-col ${flipped ? "lg:order-2" : ""}`}>
            <UnitGallery images={unit.images} />
          </div>

          {/* Content column */}
          <div className={`flex flex-col ${flipped ? "lg:order-1" : ""}`}>

            {/* Type + count */}
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block bg-sage/15 text-sage font-body text-[10px] font-semibold tracking-[0.18em] uppercase px-3 py-1 rounded-full">
                {unit.unitType}
              </span>
              <span className="text-brown-body/40 font-body text-xs tracking-widest uppercase">
                {unit.count} units
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-5xl md:text-6xl text-gold-dark font-medium leading-tight mb-3">
              {unit.heading}
            </h2>

            {/* Description */}
            <p className="font-body text-base text-brown-body leading-relaxed mb-4">
              {unit.description}
            </p>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-4">
              <span className="h-px flex-1 bg-earthen/30" />
              <span className="text-earthen text-sm leading-none">✦</span>
              <span className="h-px flex-1 bg-earthen/30" />
            </div>

            {/* Rate */}
            <div className="mb-4">
              <div className="flex items-baseline gap-2 mb-0.5">
                <span className="font-heading text-4xl text-forest font-medium">
                  {unit.rate ? formatRate(unit.rate) : "Rates on enquiry"}
                </span>
                {unit.rate && (
                  <span className="font-body text-sm text-brown-body/60">/ night</span>
                )}
              </div>
              {unit.rate && (
                <p className="font-body text-xs text-brown-body/60 tracking-wide">
                  Inclusive of GST &nbsp;·&nbsp; {unit.rateIncludes}
                </p>
              )}
            </div>

            {/* Details grid */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="bg-earthen/8 rounded-lg p-3">
                <p className="font-body text-[10px] uppercase tracking-[0.15em] text-brown-body/50 mb-0.5">Sleeps</p>
                <p className="font-body text-sm font-medium text-forest">Up to {unit.maxAdults} adults</p>
              </div>
              <div className="bg-earthen/8 rounded-lg p-3">
                <p className="font-body text-[10px] uppercase tracking-[0.15em] text-brown-body/50 mb-0.5">Includes</p>
                <p className="font-body text-sm font-medium text-forest capitalize">{unit.rateIncludes}</p>
              </div>
              {unit.extraPersonCharge && (
                <div className="col-span-2 bg-earthen/8 rounded-lg p-3">
                  <p className="font-body text-[10px] uppercase tracking-[0.15em] text-brown-body/50 mb-0.5">Extra Guest</p>
                  <p className="font-body text-sm font-medium text-forest">
                    {formatRate(unit.extraPersonCharge)} / person &nbsp;·&nbsp; includes extra bed + breakfast
                  </p>
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold text-brown-dark font-body font-semibold text-sm tracking-wide px-7 py-3.5 rounded hover:bg-gold/90 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Enquire on WhatsApp
              </a>
              <p className="font-body text-xs text-brown-body/50 self-center">
                Check-in 2:00&nbsp;PM &nbsp;·&nbsp; Check-out 11:00&nbsp;AM
              </p>
            </div>

          </div>
        </div>

        {/* Facilities & amenities — icon grid, full width */}
        {unit.facilities.length > 0 && (
          <div className="mt-12 md:mt-16 pt-10 md:pt-12 border-t border-earthen/25">
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-brown-body/50 mb-2 text-center md:text-left">
              In every {unit.heading.toLowerCase()}
            </p>
            <h3 className="font-heading text-2xl md:text-3xl text-gold-dark font-medium mb-7 text-center md:text-left">
              Facilities &amp; Amenities
            </h3>
            <FacilitiesGrid facilities={unit.facilities} />
          </div>
        )}
      </div>
    </section>
  );
}
