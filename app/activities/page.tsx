import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Activities & Facilities",
  description:
    "Swimming pool, Jacuzzi, guided jungle walks, birdwatching, barbeque evenings, and Dandelion Kitchen — everything on offer at The Dandelion – Colonels' Jungle Resort.",
};

// Static data typed to mirror the Sanity Activity schema.
// Replace with sanity.fetch() once the project is connected.
const featuredActivities = [
  {
    id: "pool",
    name: "Swimming Pool",
    category: "Pool & Water",
    description:
      "A full-size pool set among the trees, with a separate baby pool alongside. The perfect place to cool off on a warm afternoon.",
    image: "/images/pool/IMG-20240417-WA0009.jpg",
    imageAlt: "Swimming pool at The Dandelion Resort",
    isChargeable: false,
    priceNote: "Complimentary",
  },
  {
    id: "jacuzzi",
    name: "Jacuzzi Pool",
    category: "Pool & Water",
    description:
      "Warm water, quiet surroundings, and nothing to do but unwind. Book a slot at reception.",
    image: "/images/jacuzzi/Jacuzzi%20pool.jpg",
    imageAlt: "Jacuzzi pool at The Dandelion Resort",
    isChargeable: true,
    priceNote: "₹900 / hour",
  },
  {
    id: "restaurant",
    name: "Dandelion Kitchen",
    category: "Dining",
    description:
      "Our on-site restaurant serves freshly prepared meals throughout the day. Breakfast is included in your room rate; lunch and dinner are à la carte.",
    image: "/images/restaurant/20221015_112410.jpg",
    imageAlt: "Dandelion Kitchen restaurant",
    isChargeable: true,
    priceNote: "À la carte (breakfast incl. in stay)",
  },
  {
    id: "barbeque",
    name: "Barbeque Evenings",
    category: "Dining",
    description:
      "Pick from the menu, fire up the grill yourself, and settle in for a slow evening under the trees at our dedicated barbeque point.",
    image: "/images/barbeque/20221215_201658.jpg",
    imageAlt: "Barbeque point at The Dandelion Resort",
    isChargeable: true,
    priceNote: "Charged per item ordered",
  },
];

const moreActivities = [
  {
    id: "walks",
    name: "Guided Jungle Walks",
    category: "Nature & Wildlife",
    description:
      "Walk the forest edge with one of our resident local guides — spot birds, track wildlife signs, and stop for coffee at the forest viewpoint.",
    isChargeable: false,
    priceNote: "Coffee at viewpoint: ₹100 / person",
  },
  {
    id: "birdwatching",
    name: "Birdwatching",
    category: "Nature & Wildlife",
    description:
      "The forest around the resort hosts an exceptional variety of birdlife, including hornbills, kingfishers, and over 200 species across the wider region.",
    isChargeable: false,
    priceNote: null,
  },
  {
    id: "machaan",
    name: "Machaan",
    category: "Nature & Wildlife",
    description:
      "Climb to our elevated forest viewing platform. The best spot on the property for wildlife sightings — especially at dawn and dusk.",
    isChargeable: false,
    priceNote: null,
  },
  {
    id: "outdoor-games",
    name: "Outdoor Games",
    category: "Recreation",
    description:
      "Badminton, volleyball, and pool games on the grounds. Collect equipment from reception.",
    isChargeable: false,
    priceNote: null,
  },
  {
    id: "indoor-games",
    name: "Indoor Games",
    category: "Recreation",
    description:
      "Books, board games, and indoor activities available at the retreat — the right pace for a slow afternoon.",
    isChargeable: false,
    priceNote: null,
  },
];

// Category pill colours
const categoryColour: Record<string, string> = {
  "Pool & Water":      "bg-sage/20 text-sage",
  "Dining":            "bg-earthen/20 text-brown-body",
  "Nature & Wildlife": "bg-forest/15 text-forest",
  "Recreation":        "bg-gold/15 text-gold-dark",
};

export default function ActivitiesPage() {
  return (
    <>
      {/* ─── Page hero ─── */}
      <section className="relative h-[55vh] min-h-[380px] flex items-end overflow-hidden">
        <Image
          src="/images/pool/20221214_112149.jpg"
          alt="Swimming pool at The Dandelion – Colonels' Jungle Resort"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-12 md:pb-16 w-full max-w-7xl mx-auto">
          <p className="font-body text-[10px] tracking-[0.22em] uppercase text-earthen mb-3">
            On the grounds
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl text-cream font-light leading-none">
            Activities &amp; Facilities
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
            Slow mornings, active afternoons, long evenings around the grill — the resort
            is set up for both. Everything below is on-site and available to all guests;
            items marked chargeable are settled at checkout.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="h-px w-12 bg-earthen/50" />
            <span className="text-earthen text-xl leading-none">✦</span>
            <span className="h-px w-12 bg-earthen/50" />
          </div>
        </div>
      </section>

      {/* ─── Featured activities — photo cards ─── */}
      <section className="bg-cream pb-12 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {featuredActivities.map((act) => (
              <div
                key={act.id}
                className="group relative h-72 md:h-80 rounded-xl overflow-hidden"
              >
                <Image
                  src={act.image}
                  alt={act.imageAlt}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-cream">
                  <span
                    className={`inline-block font-body text-[10px] font-semibold tracking-[0.16em] uppercase px-2.5 py-1 rounded-full mb-2 ${
                      act.isChargeable
                        ? "bg-gold/80 text-brown-dark"
                        : "bg-sage/60 text-cream"
                    }`}
                  >
                    {act.isChargeable ? act.priceNote : "Complimentary"}
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl font-medium leading-tight">
                    {act.name}
                  </h3>
                  <p className="mt-1.5 font-body text-sm text-cream/70 leading-relaxed line-clamp-2">
                    {act.description}
                  </p>
                </div>
              </div>
            ))}
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

      {/* ─── Nature, wildlife & recreation — compact cards ─── */}
      <section className="bg-cream pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-brown-body/50 mb-2">
              Also on offer
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-gold-dark font-medium">
              Nature, Wildlife &amp; Recreation
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {moreActivities.map((act) => (
              <div
                key={act.id}
                className="bg-earthen/8 rounded-xl p-6 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-body text-[10px] font-semibold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full ${
                      categoryColour[act.category] ?? "bg-earthen/20 text-brown-body"
                    }`}
                  >
                    {act.category}
                  </span>
                  {act.priceNote && (
                    <span className="font-body text-xs text-brown-body/60">
                      {act.priceNote}
                    </span>
                  )}
                </div>
                <h3 className="font-heading text-xl md:text-2xl text-gold-dark font-medium leading-tight">
                  {act.name}
                </h3>
                <p className="font-body text-sm text-brown-body leading-relaxed flex-1">
                  {act.description}
                </p>
                {!act.priceNote && (
                  <span className="font-body text-xs text-sage font-medium tracking-wide">
                    Complimentary
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Forest enquiry strip ─── */}
      <section className="bg-forest py-12 md:py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <p className="font-body text-sm text-cream/60 tracking-[0.15em] uppercase mb-3">
            Plan your stay
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-cream font-medium mb-4">
            Ask Us Anything
          </h2>
          <p className="font-body text-sm text-cream/65 leading-relaxed mb-7">
            Have questions about activities, availability, or what to bring? Message us on
            WhatsApp before you arrive — we&apos;re happy to help.
          </p>
          <a
            href="https://wa.me/917764006404?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20the%20activities%20at%20The%20Dandelion."
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
