"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

export interface GalleryPhoto {
  src: string;
  alt: string;
  category: string;
}

const ALL = "All";

export default function GalleryGrid({ photos }: { photos: GalleryPhoto[] }) {
  const categories = [ALL, ...Array.from(new Set(photos.map((p) => p.category)))];
  const [active, setActive] = useState(ALL);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);

  const filtered = active === ALL ? photos : photos.filter((p) => p.category === active);

  const close = () => setLightboxIdx(null);

  const prev = useCallback(() => {
    setLightboxIdx((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  }, [filtered.length]);

  const next = useCallback(() => {
    setLightboxIdx((i) => (i === null ? null : (i + 1) % filtered.length));
  }, [filtered.length]);

  // Keyboard + body scroll lock
  useEffect(() => {
    if (lightboxIdx === null) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIdx, prev, next]);

  return (
    <>
      {/* Category filter pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`font-body text-sm px-4 py-1.5 rounded-full border transition-colors ${
              active === cat
                ? "bg-sage text-cream border-sage"
                : "border-earthen/40 text-brown-body hover:border-sage hover:text-sage"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
        {filtered.map((photo, idx) => (
          <div
            key={photo.src}
            className="break-inside-avoid relative overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => setLightboxIdx(idx)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={0}
              height={0}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center"
          onClick={close}
          onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = touchX.current - e.changedTouches[0].clientX;
            if (Math.abs(dx) > 50) dx > 0 ? next() : prev();
            touchX.current = null;
          }}
        >
          {/* Close */}
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-5 z-10 text-white/70 hover:text-white"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous photo"
            className="absolute left-4 z-10 text-white/60 hover:text-white p-2"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl mx-14 max-h-[88vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={filtered[lightboxIdx].src}
              src={filtered[lightboxIdx].src}
              alt={filtered[lightboxIdx].alt}
              width={0}
              height={0}
              sizes="90vw"
              className="w-full h-auto max-h-[88vh] object-contain"
            />
            <p className="mt-2 font-body text-xs text-white/40 text-center">
              {filtered[lightboxIdx].alt}
            </p>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next photo"
            className="absolute right-4 z-10 text-white/60 hover:text-white p-2"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Counter */}
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 font-body text-xs text-white/40">
            {lightboxIdx + 1} / {filtered.length}
          </p>
        </div>
      )}
    </>
  );
}
