import type { Metadata } from "next";
import Image from "next/image";
import UnitSection, { type UnitData } from "@/components/accommodation/UnitSection";

export const metadata: Metadata = {
  title: "Accommodation",
  description:
    "Stay in a Cottage or Hut at The Dandelion – Colonels' Jungle Resort. Rustic comfort, warm hospitality, and forest views on the edge of Dandeli, Western Ghats.",
};

// Static data typed to match the Sanity Room schema.
// Replace with a sanity.fetch() GROQ query once the Sanity project is connected.
const units: UnitData[] = [
  {
    id: "cottages",
    unitType: "Cottages",
    count: 3,
    heading: "Cottage",
    description:
      "The heart of the resort, our Cottages are made for those with a romantic connection to nature. Shaped by the season and the space around them, each offers complete privacy and comfort — an open layout with generous seating and plenty of room to spread out and unwind together.",
    rate: 6600,
    rateIncludes: "room + breakfast",
    maxAdults: 2,
    extraPersonCharge: 1000,
    images: [
      { src: "/images/cottage/IMG-20240418-WA0001.jpg", alt: "Cottage nestled among trees at The Dandelion" },
      { src: "/images/cottage/IMG-20240418-WA0002.jpg", alt: "Cottage exterior view" },
      { src: "/images/cottage/IMG-20240418-WA0003.jpg", alt: "Cottage verandah" },
      { src: "/images/cottage/IMG_3466.jpg",             alt: "Cottage garden path" },
      { src: "/images/cottage/IMG_3469.jpg",             alt: "Cottage room interior" },
      { src: "/images/cottage/IMG_3471.jpg",             alt: "Cottage interior and washroom" },
      { src: "/images/cottage/IMG-20240418-WA0011.jpg",  alt: "Cottage washroom" },
    ],
    imageLayout: "left",
    whatsappMessage:
      "Hi, I'd like to enquire about a Cottage at The Dandelion – Colonels' Jungle Resort.",
  },
  {
    id: "huts",
    unitType: "Huts",
    count: 5,
    heading: "Hut",
    description:
      "Our Huts are the easygoing choice — relaxed, affordable, and full of character. Thoughtfully crafted to blend rustic charm with modern comfort, each carries a warm, homely calm that makes it easy to slow right down and stay a while.",
    rate: 4500,
    rateIncludes: "room + breakfast",
    maxAdults: 2,
    extraPersonCharge: null,
    images: [
      { src: "/images/hut/IMG-20240418-WA0004.jpg",                                         alt: "Hut at The Dandelion Resort" },
      { src: "/images/hut/IMG-20240418-WA0005.jpg",                                         alt: "Hut exterior" },
      { src: "/images/hut/IMG-20240418-WA0006.jpg",                                         alt: "Hut entrance and verandah" },
      { src: "/images/hut/20221214_114245.jpg",                                              alt: "Hut surrounded by forest" },
      { src: "/images/hut/20221214_114914.jpg",                                              alt: "Hut interior" },
      { src: "/images/hut/WhatsApp%20Image%202023-01-15%20at%204.52.00%20PM.jpeg",          alt: "Hut room" },
      { src: "/images/hut/WhatsApp%20Image%202023-02-15%20at%207.21.49%20PM.jpeg",          alt: "Hut washroom" },
    ],
    imageLayout: "right",
    whatsappMessage:
      "Hi, I'd like to enquire about a Hut at The Dandelion – Colonels' Jungle Resort.",
  },
];

export default function AccommodationPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative h-[55vh] min-h-[380px] flex items-end overflow-hidden">
        <Image
          src="/images/cottage/IMG-20240417-WA0019.jpg"
          alt="Accommodation at The Dandelion – Colonels' Jungle Resort"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
        <div className="relative z-10 px-6 sm:px-12 lg:px-20 pb-14 md:pb-20 w-full max-w-7xl mx-auto">
          <p className="font-body text-[10px] tracking-[0.22em] uppercase text-earthen mb-3">
            Stay with us
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl text-cream font-light leading-none">
            Accommodation
          </h1>
          <p className="mt-4 font-body text-sm text-cream/60 tracking-wide">
            Check-in: 2:00&nbsp;PM &nbsp;·&nbsp; Check-out: 11:00&nbsp;AM
          </p>
        </div>
      </section>

      {/* Intro strip */}
      <div className="bg-forest py-5 px-4 text-center">
        <p className="font-body text-sm text-cream/70 max-w-2xl mx-auto leading-relaxed">
          Two character-filled stays on 11 acres of forested land — each built to let you slow down
          and settle in. All rates include breakfast and are flat per-night.
        </p>
      </div>

      {/* Unit sections — alternating layout */}
      {units.map((unit) => (
        <UnitSection key={unit.id} unit={unit} />
      ))}

      {/* Separator */}
      <div className="flex items-center justify-center gap-6 py-6 bg-cream">
        <span className="h-px w-24 bg-earthen/30" />
        <span className="text-earthen text-xl leading-none">✦</span>
        <span className="h-px w-24 bg-earthen/30" />
      </div>

      {/* Policy strip */}
      <section className="bg-forest py-14 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl text-cream font-medium mb-4">
            Before You Arrive
          </h2>
          <p className="font-body text-sm text-cream/65 leading-relaxed mb-6">
            All rates are per night and inclusive of GST. The room rate includes breakfast for all
            in-room occupants. Additional charges apply for the Jacuzzi pool, à&nbsp;la&nbsp;carte
            dining at Dandelion Kitchen, guided walks, barbeque evenings, and outdoor games — all
            of which can be arranged on arrival or at the time of enquiry.
          </p>
          <p className="font-body text-sm text-cream/65 leading-relaxed">
            Children are welcome. Please mention the number of guests and any special requirements
            when you enquire so we can prepare accordingly.
          </p>
        </div>
      </section>
    </>
  );
}
