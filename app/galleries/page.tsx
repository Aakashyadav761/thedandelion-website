import type { Metadata } from "next";
import Image from "next/image";
import GalleryGrid, { type GalleryPhoto } from "@/components/galleries/GalleryGrid";

export const metadata: Metadata = {
  title: "Galleries",
  description:
    "Photos of The Dandelion – Colonels' Jungle Resort: the pool, cottages, huts, Dandelion Kitchen, and the forest surroundings.",
};

// Curated resort photos grouped by category.
// Replace with sanity.fetch() for GalleryImage documents once Sanity is connected.
const photos: GalleryPhoto[] = [
  // Pool & Grounds
  { src: "/images/pool/20221214_112149.jpg",      alt: "Pool with mountain backdrop",          category: "Pool & Grounds" },
  { src: "/images/pool/20240330_133149.jpg",       alt: "Resort pool area",                     category: "Pool & Grounds" },
  { src: "/images/pool/IMG-20240417-WA0009.jpg",   alt: "Swimming pool and palm trees",         category: "Pool & Grounds" },
  { src: "/images/pool/IMG-20240417-WA0010.jpg",   alt: "Pool deck and resort buildings",       category: "Pool & Grounds" },
  { src: "/images/pool/IMG-20240417-WA0012.jpg",   alt: "Resort pool at The Dandelion",         category: "Pool & Grounds" },
  { src: "/images/pool/IMG-20240417-WA0014.jpg",   alt: "Forest and pool view",                 category: "Pool & Grounds" },
  { src: "/images/pool/IMG_3460.jpg",              alt: "Pool with surrounding trees",          category: "Pool & Grounds" },
  { src: "/images/jacuzzi/Jacuzzi%20pool.jpg",     alt: "Jacuzzi pool at The Dandelion",        category: "Pool & Grounds" },

  // Cottages
  { src: "/images/cottage/IMG-20240418-WA0001.jpg", alt: "Cottage nestled among trees",        category: "Cottages" },
  { src: "/images/cottage/IMG-20240418-WA0002.jpg", alt: "Cottage exterior view",              category: "Cottages" },
  { src: "/images/cottage/IMG-20240418-WA0003.jpg", alt: "Cottage verandah",                   category: "Cottages" },
  { src: "/images/cottage/IMG_3466.jpg",            alt: "Cottage garden path",                category: "Cottages" },
  { src: "/images/cottage/IMG_3469.jpg",            alt: "Cottage room interior",              category: "Cottages" },
  { src: "/images/cottage/IMG_3471.jpg",            alt: "Cottage interior details",           category: "Cottages" },

  // Huts
  { src: "/images/hut/IMG-20240418-WA0004.jpg",    alt: "Hut exterior at The Dandelion",      category: "Huts" },
  { src: "/images/hut/IMG-20240418-WA0005.jpg",    alt: "Hut entrance",                       category: "Huts" },
  { src: "/images/hut/IMG-20240418-WA0006.jpg",    alt: "Hut verandah",                       category: "Huts" },
  { src: "/images/hut/20221214_114245.jpg",         alt: "Hut surrounded by greenery",         category: "Huts" },
  { src: "/images/hut/20221214_114914.jpg",         alt: "Hut interior",                       category: "Huts" },

  // Dining & Evenings
  { src: "/images/restaurant/20221015_112410.jpg",  alt: "Dandelion Kitchen dining area",      category: "Dining & Evenings" },
  { src: "/images/restaurant/20221215_215140.jpg",  alt: "Evening at Dandelion Kitchen",       category: "Dining & Evenings" },
  { src: "/images/barbeque/20221215_201658.jpg",    alt: "Barbeque evening at the resort",     category: "Dining & Evenings" },
];

export default function GalleriesPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative h-[50vh] min-h-[360px] flex items-end overflow-hidden">
        <Image
          src="/images/pool/IMG-20240417-WA0008.jpg"
          alt="The Dandelion – Colonels' Jungle Resort"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-12 md:pb-16 w-full max-w-7xl mx-auto">
          <p className="font-body text-[10px] tracking-[0.22em] uppercase text-earthen mb-3">
            The resort in pictures
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl text-cream font-light leading-none">
            Galleries
          </h1>
        </div>
      </section>

      {/* ─── Intro ─── */}
      <section className="bg-cream py-12 md:py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-12 bg-earthen/50" />
            <span className="text-earthen text-xl leading-none">✦</span>
            <span className="h-px w-12 bg-earthen/50" />
          </div>
          <p className="font-body text-base md:text-lg text-brown-body leading-relaxed">
            A look at the resort — the pool, the cottages and huts, the kitchen, and the
            evenings. Click any photo to view it full-size.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="h-px w-12 bg-earthen/50" />
            <span className="text-earthen text-xl leading-none">✦</span>
            <span className="h-px w-12 bg-earthen/50" />
          </div>
        </div>
      </section>

      {/* ─── Gallery grid with lightbox ─── */}
      <section className="bg-cream pb-20 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryGrid photos={photos} />
        </div>
      </section>
    </>
  );
}
