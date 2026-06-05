import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    title: "Accommodation",
    subtitle: "Cottages & Huts",
    description: "Rustic comfort tucked within the trees. Cottages for romance, huts for those who love to wander.",
    href: "/accommodation",
    image: "/images/cottage/IMG-20240418-WA0001.jpg",
    imageAlt: "Cottage nestled among trees at The Dandelion Resort",
  },
  {
    title: "Galleries",
    subtitle: "A Glimpse of the Resort",
    description: "Reflect on still pools and mountain ridges. Let the images speak for themselves.",
    href: "/galleries",
    image: "/images/pool/IMG-20240417-WA0009.jpg",
    imageAlt: "Resort swimming pool with palm trees and water slide",
  },
  {
    title: "Activities & Facilities",
    subtitle: "Stay, Play, Explore",
    description: "Guided jungle walks, poolside afternoons, self-barbeque evenings, and wildlife moments.",
    href: "/activities",
    image: "/images/pool/IMG-20240417-WA0010.jpg",
    imageAlt: "Resort pool area with lush gardens and resort buildings",
  },
  {
    title: "Around Us",
    subtitle: "Dandeli & Beyond",
    description: "White-water rafting on the Kali, jungle safaris, Syntheri Rocks — a region that rewards the curious.",
    href: "/around-us",
    image: "/images/cottage/IMG-20240417-WA0017.jpg",
    imageAlt: "Lush forest surroundings of the resort with natural garden paths",
  },
];

export default function HighlightGrid() {
  return (
    <section className="bg-forest py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl text-cream font-medium">
            The Resort, Explored
          </h2>
          <p className="mt-3 font-body text-cream/60 text-sm tracking-widest uppercase">
            Everything we have to offer
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {highlights.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative overflow-hidden rounded-lg h-80 md:h-96 block"
            >
              {/* Photo */}
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />

              {/* Gradient overlay — strong enough to read labels on any photo */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-cream">
                <p className="font-body text-xs tracking-widest uppercase text-gold font-semibold mb-1">
                  {item.subtitle}
                </p>
                <h3 className="font-heading text-2xl md:text-3xl font-medium mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-cream/70 leading-relaxed opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-1.5 mt-3 text-xs font-body font-medium tracking-widest uppercase text-gold group-hover:gap-3 transition-all duration-300">
                  Explore
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
