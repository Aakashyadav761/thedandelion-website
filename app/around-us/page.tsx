import type { Metadata } from "next";
import Image from "next/image";
import { sanityClient } from "@/lib/sanity";
import type { Attraction } from "@/lib/types";

export const metadata: Metadata = {
  title: "Around Us",
  description:
    "White-water rafting on the Kali River, jungle safaris, Syntheri Rocks, and heritage day trips to Hampi and Badami — all within reach of The Dandelion – Colonels' Jungle Resort.",
};

async function getAttractions(): Promise<Attraction[]> {
  return sanityClient.fetch(
    `*[_type == "attraction"] | order(name asc) {
      _id, _type, name, description, distance
    }`
  );
}

// UI-only config: category label, colour, highlight, bookingNote — keyed by Sanity _id.
// These are presentation details not stored in the CMS.
const attractionUI: Record<string, {
  category: string;
  categoryColour: string;
  highlight: string | null;
  bookingNote: string;
}> = {
  "attraction-kali-river":     { category: "Adventure",        categoryColour: "bg-gold/15 text-gold-dark",  highlight: "Rapids at their best: October–March",       bookingNote: "Resort assists with bookings, free of charge" },
  "attraction-jungle-safari":  { category: "Wildlife",         categoryColour: "bg-forest/15 text-forest",   highlight: "Tickets purchased at the counter on-site",  bookingNote: "Resort helps plan the trip; tickets not pre-bookable" },
  "attraction-syntheri-rocks": { category: "Nature",           categoryColour: "bg-sage/15 text-sage",        highlight: null,                                        bookingNote: "Resort assists with bookings, free of charge" },
  "attraction-birdwatching":   { category: "Nature & Wildlife",categoryColour: "bg-sage/15 text-sage",        highlight: "Best at dawn and dusk",                     bookingNote: "Guided walks arranged by the resort" },
};

// Heritage trips: those with distance "Several hours drive"
const heritageUI: Record<string, { tag: string }> = {
  "attraction-hampi":   { tag: "UNESCO World Heritage" },
  "attraction-badami":  { tag: "Rock-cut Temples" },
  "attraction-pattadakal": { tag: "UNESCO World Heritage" },
};

export default async function AroundUsPage() {
  const allAttractions = await getAttractions();
  const nearbyAttractions = allAttractions.filter((a) => a._id in attractionUI);
  const heritageTrips = allAttractions.filter((a) => a._id in heritageUI);
  return (
    <>
      {/* ─── Page hero ─── */}
      <section className="relative h-[55vh] min-h-[380px] flex items-end overflow-hidden">
        <Image
          src="/images/pool/IMG-20240417-WA0014.jpg"
          alt="The forest and surroundings near The Dandelion – Colonels' Jungle Resort"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-12 md:pb-16 w-full max-w-7xl mx-auto">
          <p className="font-body text-[10px] tracking-[0.22em] uppercase text-earthen mb-3">
            Beyond the resort
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl text-cream font-light leading-none">
            Around Us
          </h1>
        </div>
      </section>

      {/* ─── Intro ─── */}
      <section className="bg-cream py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-12 bg-earthen/50" />
            <span className="text-earthen text-xl leading-none">✦</span>
            <span className="h-px w-12 bg-earthen/50" />
          </div>
          <p className="font-body text-base md:text-lg text-brown-body leading-relaxed">
            The Dandelion sits on the edge of Dandeli forest, on the Kali River — one
            of the Western Ghats' best nature-and-adventure regions. The resort assists
            with organising all nearby trips, free of charge.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="h-px w-12 bg-earthen/50" />
            <span className="text-earthen text-xl leading-none">✦</span>
            <span className="h-px w-12 bg-earthen/50" />
          </div>
        </div>
      </section>

      {/* ─── Nearby adventures ─── */}
      <section className="bg-cream pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mb-10">
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-brown-body/50 mb-2">
              Day trips & adventures
            </p>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <h2 className="font-heading text-3xl md:text-4xl text-gold-dark font-medium">
                Close to the Resort
              </h2>
              <p className="font-body text-xs text-brown-body/50 italic">
                Resort assists with all bookings, free of charge
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {nearbyAttractions.map((attr) => {
              const ui = attractionUI[attr._id];
              return (
                <div
                  key={attr._id}
                  className="rounded-xl overflow-hidden border border-earthen/20 bg-white shadow-sm flex flex-col"
                >
                  <div className="bg-earthen/8 px-6 py-4 flex items-center justify-between gap-4">
                    <span className={`font-body text-[10px] font-semibold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full ${ui.categoryColour}`}>
                      {ui.category}
                    </span>
                    <span className="font-body text-xs text-brown-body/60 text-right">
                      {attr.distance}
                    </span>
                  </div>
                  <div className="px-6 py-5 flex flex-col gap-3 flex-1">
                    <h3 className="font-heading text-2xl md:text-3xl text-gold-dark font-medium leading-tight">
                      {attr.name}
                    </h3>
                    <p className="font-body text-sm text-brown-body leading-relaxed flex-1">
                      {attr.description}
                    </p>
                    <div className="flex flex-col gap-1.5 pt-1 border-t border-earthen/15">
                      {ui.highlight && (
                        <p className="font-body text-xs text-brown-body/60">
                          <span className="text-sage font-medium">↳</span>&nbsp;{ui.highlight}
                        </p>
                      )}
                      <p className="font-body text-xs text-brown-body/60">
                        <span className="text-sage font-medium">↳</span>&nbsp;{ui.bookingNote}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="bg-cream py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <span className="h-px flex-1 bg-earthen/30" />
            <span className="text-earthen leading-none">✦</span>
            <span className="h-px flex-1 bg-earthen/30" />
          </div>
        </div>
      </div>

      {/* ─── Heritage day trips ─── */}
      <section className="bg-cream pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mb-10">
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-brown-body/50 mb-2">
              Further afield
            </p>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <h2 className="font-heading text-3xl md:text-4xl text-gold-dark font-medium">
                Heritage Day Trips
              </h2>
              <p className="font-body text-xs text-brown-body/50 italic">
                Several hours from the resort — full-day excursions
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {heritageTrips.map((trip) => {
              const ui = heritageUI[trip._id];
              return (
                <div
                  key={trip._id}
                  className="bg-earthen/8 rounded-xl p-6 flex flex-col gap-3"
                >
                  <span className="font-body text-[10px] font-semibold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full bg-gold/15 text-gold-dark self-start">
                    {ui.tag}
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl text-gold-dark font-medium leading-tight">
                    {trip.name}
                  </h3>
                  <p className="font-body text-sm text-brown-body leading-relaxed flex-1">
                    {trip.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Forest CTA strip ─── */}
      <section className="bg-forest py-12 md:py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <p className="font-body text-sm text-cream/60 tracking-[0.15em] uppercase mb-3">
            Plan ahead
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-cream font-medium mb-4">
            Let Us Help You Explore
          </h2>
          <p className="font-body text-sm text-cream/65 leading-relaxed mb-7">
            Tell us which trips interest you when you enquire and we&apos;ll arrange
            everything — rafting slots, safari logistics, directions, the lot.
          </p>
          <a
            href="https://wa.me/917764006404?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20nearby%20activities%20and%20day%20trips%20from%20The%20Dandelion."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-brown-dark font-body font-semibold text-sm tracking-wide px-8 py-3.5 rounded hover:bg-gold/90 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Enquire on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
