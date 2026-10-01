import type { Metadata } from "next";
import Image from "next/image";
import { sanityClient } from "@/lib/sanity";
import type { MenuSection } from "@/lib/types";
import { LeafSprig, sectionIcon } from "@/components/kitchen/LineArt";

export const metadata: Metadata = {
  title: "Dandelion Kitchen",
  description:
    "Dandelion Kitchen — vegetarian and non-vegetarian meals cooked fresh to order, in a garden setting 500 m off the Bangalore–Goa highway near Ramnagar. Open 8 am to 9.30 pm daily. Walk-ins welcome.",
};

// ── Static facts ───────────────────────────────────────────────────────────
// These live as page constants rather than in Sanity: they change rarely, and
// a schema for them would be extra surface area (per KITCHEN-PAGE-BRIEF.md).
// The MENU is the exception — it carries ~60 prices and lives in Sanity.

const PHONE = "+917764006404";
const PHONE_DISPLAY = "+91 77640 06404";

const WA_LINK =
  "https://wa.me/917764006404?text=Hi%2C%20I%27d%20like%20to%20ask%20about%20Dandelion%20Kitchen.";

// Dandelion Kitchen's own map pin — deliberately distinct from the resort's,
// because the Kitchen is a separately listed Google business.
const KITCHEN_GEO = { lat: 15.425642, lng: 74.542537 };
const DIRECTIONS_LINK = `https://www.google.com/maps/dir/?api=1&destination=${KITCHEN_GEO.lat}%2C${KITCHEN_GEO.lng}`;

const ADDRESS = {
  street: "39/66, Village Chinchewadi",
  locality: "Taluka Khanapur",
  region: "Belagavi, Karnataka",
  postalCode: "591301",
};

/** Opening hours — the blanket window, matching the Google listing exactly. */
const OPENING_HOURS = "8:00 am – 9:30 pm, daily";

/**
 * Main serving hours — when the full kitchen runs. These are deliberately NOT
 * the opening hours and must never go into the JSON-LD: the kitchen is open
 * continuously across the whole window, with tea, coffee and snacks between
 * services. Listing only these windows would read as "closed" at 4 pm.
 */
const SERVING_HOURS = [
  { meal: "Breakfast", time: "8:00 – 10:00 am" },
  { meal: "Lunch", time: "12:00 – 3:30 pm" },
  { meal: "Dinner", time: "7:00 – 9:30 pm" },
];

const AT_A_GLANCE = [
  "Vegetarian & non-vegetarian",
  "Cooked fresh to order",
  "Walk-ins welcome — no booking needed",
  "Takeaway available",
  "Parking on site",
  "No alcohol served",
];

async function getMenu(): Promise<MenuSection[]> {
  return sanityClient.fetch(
    `*[_type == "menuSection"] | order(order asc) {
      _id, _type, title, order, note, items
    }`
  );
}

function formatPrice(price?: number) {
  return typeof price === "number" ? `₹${price}` : "On request";
}

// ── Icons ──────────────────────────────────────────────────────────────────

const WhatsAppIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const PinIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

// ── Page ───────────────────────────────────────────────────────────────────

export default async function KitchenPage() {
  const menu = await getMenu();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Dandelion Kitchen",
    url: "https://www.thedandelion.in/kitchen",
    telephone: PHONE,
    servesCuisine: ["Indian", "Chinese"],
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.locality,
      addressRegion: ADDRESS.region,
      postalCode: ADDRESS.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: KITCHEN_GEO.lat,
      longitude: KITCHEN_GEO.lng,
    },
    // Blanket hours only — must match the Google Business Profile.
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday",
      ],
      opens: "08:00",
      closes: "21:30",
    },
    servesAlcohol: false,
    acceptsReservations: false,
    parentOrganization: {
      "@type": "LodgingBusiness",
      name: "The Dandelion – Colonels’ Jungle Resort",
      url: "https://www.thedandelion.in",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── Hero ─── */}
      <section className="relative min-h-[88vh] sm:min-h-[80vh] flex items-end overflow-hidden">
        <Image
          src="/images/restaurant/WhatsApp%20Image%202023-01-02%20at%203.03.23%20PM.jpeg"
          alt="Evening table laid at Dandelion Kitchen, with laterite stone walls and warm lamplight"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/25" />

        <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-10 md:pb-16 pt-24 w-full max-w-7xl mx-auto">
          <p className="font-body text-[10px] tracking-[0.22em] uppercase text-earthen mb-3">
            At The Dandelion · Near Ramnagar
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-cream font-light leading-tight">
            Dandelion Kitchen
          </h1>
          <p className="mt-3 font-body text-base md:text-lg text-cream/85 max-w-xl leading-relaxed">
            Vegetarian and non-vegetarian, cooked fresh to order — in a garden setting rather
            than a roadside stop.
          </p>

          {/* The decision facts, above the fold on a phone */}
          <dl className="mt-6 flex flex-col gap-2.5 font-body text-sm text-cream/90">
            <div className="flex items-start gap-2.5">
              <span className="text-gold mt-0.5 flex-shrink-0">●</span>
              <div>
                <dt className="inline font-semibold text-cream">Open {OPENING_HOURS}</dt>
                <dd className="inline text-cream/70"> · walk-ins welcome</dd>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="text-gold mt-0.5 flex-shrink-0">●</span>
              <div>
                <dt className="inline font-semibold text-cream">500 m off the Bangalore–Goa highway</dt>
                <dd className="inline text-cream/70"> · 7 km from Ramnagar · parking on site</dd>
              </div>
            </div>
          </dl>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-brown-dark font-body font-semibold text-sm tracking-wide px-6 py-3.5 rounded hover:bg-gold/90 transition-colors"
            >
              <WhatsAppIcon />
              Ask on WhatsApp
            </a>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 bg-cream/10 backdrop-blur-sm border border-cream/30 text-cream font-body font-semibold text-sm tracking-wide px-6 py-3.5 rounded hover:bg-cream/20 transition-colors"
            >
              <PhoneIcon />
              Call
            </a>
            <a
              href={DIRECTIONS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cream/10 backdrop-blur-sm border border-cream/30 text-cream font-body font-semibold text-sm tracking-wide px-6 py-3.5 rounded hover:bg-cream/20 transition-colors"
            >
              <PinIcon />
              Directions
            </a>
          </div>
        </div>
      </section>

      {/* ─── At a glance ─── */}
      <section className="bg-forest py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2.5 font-body text-sm text-cream/80">
            {AT_A_GLANCE.map((fact) => (
              <li key={fact} className="flex items-center gap-2">
                <span className="text-earthen text-xs leading-none" aria-hidden="true">✦</span>
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── Hours ─── */}
      <section className="bg-cream py-14 md:py-18">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <LeafSprig className="w-16 h-6 text-earthen mx-auto mb-5" />
          <h2 className="font-heading text-3xl md:text-4xl text-gold-dark font-medium">
            Open All Day
          </h2>
          <p className="mt-4 font-body text-base text-brown-body leading-relaxed">
            We are open <strong className="font-semibold">{OPENING_HOURS}</strong>. The full
            kitchen runs across three main serving hours — outside them there is always tea,
            coffee and something to eat.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {SERVING_HOURS.map(({ meal, time }) => (
              <div
                key={meal}
                className="bg-forest/5 border border-earthen/25 rounded-xl px-5 py-5"
              >
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-earthen mb-1.5">
                  {meal}
                </p>
                <p className="font-heading text-xl text-gold-dark font-medium">{time}</p>
              </div>
            ))}
          </div>

          <p className="mt-5 font-body text-sm text-brown-body/80 leading-relaxed">
            Just turning up is fine. A quick call ahead helps us have it ready.
          </p>
        </div>
      </section>

      {/* ─── The setting ─── */}
      <section className="bg-cream pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative aspect-[4/5] sm:aspect-[3/2] lg:aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/restaurant/20221215_215140.jpg"
                alt="Dining table under a bamboo roof at Dandelion Kitchen, beside a wall of potted plants"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="font-body text-[10px] tracking-[0.22em] uppercase text-earthen mb-3">
                The Setting
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-gold-dark font-medium leading-snug">
                A Garden, Not a Roadside Stop
              </h2>
              <div className="mt-5 space-y-4 font-body text-base text-brown-body leading-relaxed">
                <p>
                  Dandelion Kitchen sits on eleven forested acres at the edge of the Dandeli
                  forest, 500 metres off the Bangalore–Goa highway near Ramnagar — a natural
                  stop on the drive, or on the way into Dandeli.
                </p>
                <p>
                  Tables sit out in the open under bamboo and tile, with laterite walls, potted
                  greenery and the forest a few steps away. It is quiet, and it is a long way
                  from eating beside the road.
                </p>
                <p>
                  Food can be packed to take with you. There is parking on site, and no alcohol
                  is served.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Menu ─── */}
      <section id="menu" className="bg-[#EDE4D3] py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <LeafSprig className="w-16 h-6 text-earthen mx-auto mb-5" />
            <h2 className="font-heading text-3xl md:text-4xl text-gold-dark font-medium">
              The Menu
            </h2>
            <p className="mt-3 font-body text-sm text-brown-body/85">
              À la carte. Everything cooked to order.
            </p>
          </div>

          {menu.length === 0 ? (
            <p className="text-center font-body text-sm text-brown-body/70">
              Our menu is being updated. Call us on{" "}
              <a href={`tel:${PHONE}`} className="text-gold-dark font-semibold underline">
                {PHONE_DISPLAY}
              </a>{" "}
              and we will tell you what is on today.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
              {menu.map((section) => {
                const Icon = sectionIcon(section.title);
                return (
                  <div key={section._id} className="break-inside-avoid">
                    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-earthen/40">
                      <Icon className="w-7 h-7 text-earthen flex-shrink-0" />
                      <h3 className="font-heading text-xl md:text-2xl text-gold-dark font-medium leading-snug">
                        {section.title}
                      </h3>
                    </div>

                    <ul className="space-y-2.5">
                      {section.items?.map((item) => (
                        <li
                          key={item._key}
                          className={
                            item.isSignature
                              ? "bg-gold/15 border border-gold/40 rounded-lg px-3 py-2.5 -mx-1"
                              : ""
                          }
                        >
                          <div className="flex items-baseline gap-3">
                            <span className="font-body text-[15px] text-brown-body leading-snug">
                              {item.name}
                              {item.isSignature && (
                                <span className="ml-2 inline-block align-middle font-body text-[9px] tracking-[0.18em] uppercase bg-gold text-brown-dark px-2 py-0.5 rounded-full font-semibold">
                                  House Signature
                                </span>
                              )}
                            </span>
                            <span
                              className="flex-1 border-b border-dotted border-earthen/50 translate-y-[-3px]"
                              aria-hidden="true"
                            />
                            <span className="font-body text-[15px] text-brown-body/90 font-medium whitespace-nowrap">
                              {formatPrice(item.price)}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>

                    {section.note && (
                      <p className="mt-3 font-body text-xs text-brown-body/70 italic">
                        {section.note}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          <p className="mt-12 text-center font-body text-xs text-brown-body/60 leading-relaxed">
            Prices in Indian rupees and subject to change. Taxes extra where applicable.
          </p>
        </div>
      </section>

      {/* ─── How to find us ─── */}
      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <LeafSprig className="w-16 h-6 text-earthen mx-auto mb-5" />
            <h2 className="font-heading text-3xl md:text-4xl text-gold-dark font-medium">
              How to Find Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-forest/5 border border-earthen/25 rounded-xl p-7">
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-earthen mb-3">
                From the highway
              </p>
              <ul className="space-y-3.5 font-body text-[15px] text-brown-body leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-gold flex-shrink-0 font-semibold">1.</span>
                  <span>
                    We are on the <strong className="font-semibold">Bangalore–Goa (Hubballi)
                    highway</strong>, about 7 km from Ramnagar town, in Nagargali gram panchayat.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold flex-shrink-0 font-semibold">2.</span>
                  <span>
                    The turning is only{" "}
                    <strong className="font-semibold">500 metres off the highway</strong> — a short
                    run in, not a detour into the forest.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold flex-shrink-0 font-semibold">3.</span>
                  <span>
                    Look for{" "}
                    <strong className="font-semibold">The Dandelion – Colonels&apos; Jungle
                    Resort</strong>. The Kitchen is on the same property, with parking on site.
                  </span>
                </li>
              </ul>
              <a
                href={DIRECTIONS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 bg-gold text-brown-dark font-body font-semibold text-sm tracking-wide px-6 py-3 rounded hover:bg-gold/90 transition-colors"
              >
                <PinIcon />
                Open in Google Maps
              </a>
            </div>

            <div className="bg-forest/5 border border-earthen/25 rounded-xl p-7">
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-earthen mb-3">
                Address
              </p>
              <address className="not-italic font-body text-[15px] text-brown-body leading-relaxed">
                Dandelion Kitchen<br />
                {ADDRESS.street}<br />
                {ADDRESS.locality}<br />
                {ADDRESS.region} {ADDRESS.postalCode}
              </address>

              <div className="mt-6 pt-6 border-t border-earthen/25 space-y-3">
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-3 font-body text-[15px] text-brown-body hover:text-gold-dark transition-colors"
                >
                  <span className="text-earthen"><PhoneIcon /></span>
                  {PHONE_DISPLAY}
                </a>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-body text-[15px] text-brown-body hover:text-gold-dark transition-colors"
                >
                  <span className="text-earthen"><WhatsAppIcon /></span>
                  Message us on WhatsApp
                </a>
              </div>

              <p className="mt-6 font-body text-sm text-brown-body/75 leading-relaxed">
                Part of The Dandelion – Colonels&apos; Jungle Resort. Staying the night?{" "}
                <a href="/accommodation" className="text-gold-dark font-semibold underline">
                  See where you can stay
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-forest py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <LeafSprig className="w-16 h-6 text-earthen/60 mx-auto mb-5" />
          <h2 className="font-heading text-3xl md:text-4xl text-cream font-medium mb-4">
            Pull In for a Meal
          </h2>
          <p className="font-body text-sm text-cream/70 leading-relaxed mb-7">
            Open {OPENING_HOURS}. Walk in, or send us a message and we will have it ready.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-brown-dark font-body font-semibold text-sm tracking-wide px-7 py-3.5 rounded hover:bg-gold/90 transition-colors"
            >
              <WhatsAppIcon />
              Ask on WhatsApp
            </a>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 border border-cream/30 text-cream font-body font-semibold text-sm tracking-wide px-7 py-3.5 rounded hover:bg-cream/10 transition-colors"
            >
              <PhoneIcon />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
