import type { Metadata } from "next";
import Image from "next/image";
import ReopeningBanner from "@/components/layout/ReopeningBanner";

export const metadata: Metadata = {
  title: "Groups & Events",
  description:
    "Book The Dandelion as an exclusive full-property buyout for your group of 16 to 50 adults. Ideal for family reunions, milestone birthdays, friend trips, and weddings in the Western Ghats.",
};

const WA_LINK =
  "https://wa.me/917764006404?text=Hi%2C%20I%27m%20interested%20in%20a%20group%20%2F%20full-property%20booking%20at%20The%20Dandelion.%20Please%20share%20details.";

const occasions = [
  "Family Reunions",
  "Milestone Birthdays",
  "Friend Trips",
  "Weddings & Pre-Wedding Celebrations",
  "Extended Family Getaways",
];

const included = [
  "Exclusive access to all 8 units (3 Cottages, 5 Huts) across 11 acres",
  "In-house dining — breakfast included, all meals available",
  "All resort activities — guided jungle walks, birdwatching, jacuzzi pool, barbeque evenings, bonfire, outdoor games",
  "Dedicated team for the duration of your stay",
  "Flexible check-in and check-out for groups (on request)",
];

const WhatsAppIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function GroupsPage() {
  return (
    <>
      <ReopeningBanner />

      {/* ─── Hero ─── */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <Image
          src="/images/barbeque/20221215_201658.jpg"
          alt="Groups gathering at The Dandelion – Colonels' Jungle Resort"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-12 md:pb-18 w-full max-w-7xl mx-auto">
          <p className="font-body text-[10px] tracking-[0.22em] uppercase text-earthen mb-3">
            Full Property Buyouts
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-cream font-light leading-tight max-w-3xl">
            Your Group. The Whole Resort. Nothing Else.
          </h1>
          <p className="mt-4 font-body text-sm md:text-base text-cream/75 max-w-2xl leading-relaxed">
            The Dandelion is available for exclusive full-property buyouts — ideal for groups of 16 to
            50 adults. No shared property, no strangers. Just your group, 11 acres of forest, and
            everything that comes with it. New units opening September 2026.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 bg-gold text-brown-dark font-body font-semibold text-sm tracking-wide px-8 py-3.5 rounded hover:bg-gold/90 transition-colors"
          >
            <WhatsAppIcon />
            Get a Quote Now
          </a>
        </div>
      </section>

      {/* ─── Occasions ─── */}
      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px w-12 bg-earthen/50" />
              <span className="text-earthen text-xl leading-none">✦</span>
              <span className="h-px w-12 bg-earthen/50" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl text-gold-dark font-medium">
              What Brings Groups Here
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-5">
            {occasions.map((label) => (
              <div
                key={label}
                className="bg-forest/5 border border-earthen/25 rounded-xl px-6 py-7 text-center w-full sm:w-56 md:w-52 lg:w-56"
              >
                <div className="w-8 h-px bg-earthen/40 mx-auto mb-4" />
                <h3 className="font-heading text-xl text-gold-dark font-medium leading-snug">
                  {label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="bg-cream py-2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <span className="h-px flex-1 bg-earthen/30" />
            <span className="text-earthen leading-none">✦</span>
            <span className="h-px flex-1 bg-earthen/30" />
          </div>
        </div>
      </div>

      {/* ─── What's Included ─── */}
      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl text-gold-dark font-medium">
              What&apos;s Included
            </h2>
          </div>
          <ul className="space-y-5">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-sage/20 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-sage"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="font-body text-base text-brown-body leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-forest py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-12 bg-earthen/25" />
            <span className="text-earthen/60 text-xl leading-none">✦</span>
            <span className="h-px w-12 bg-earthen/25" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl text-cream font-medium mb-4">
            Ready to Plan Your Group Stay?
          </h2>
          <p className="font-body text-sm text-cream/65 leading-relaxed mb-7">
            Tell us your dates, group size, and occasion — we&apos;ll put together a package for you.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-brown-dark font-body font-semibold text-sm tracking-wide px-8 py-3.5 rounded hover:bg-gold/90 transition-colors"
          >
            <WhatsAppIcon />
            Get a Quote Now
          </a>
        </div>
      </section>
    </>
  );
}
