"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export interface GalleryPhoto {
  src: string;
  alt: string;
}

const VISIBLE = 3;

export default function UnitGallery({ images }: { images: GalleryPhoto[] }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [thumbStart, setThumbStart] = useState(0);
  const touchX = useRef<number | null>(null);

  const maxStart = Math.max(0, images.length - VISIBLE);

  const prevThumbs = () => setThumbStart((s) => Math.max(0, s - 1));
  const nextThumbs = () => setThumbStart((s) => Math.min(maxStart, s + 1));

  const selectImage = (globalIdx: number) => {
    setActiveIdx(globalIdx);
    // Pan thumb window so the selected image stays visible
    if (globalIdx < thumbStart) setThumbStart(globalIdx);
    else if (globalIdx >= thumbStart + VISIBLE) setThumbStart(globalIdx - VISIBLE + 1);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = touchX.current - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 40) dx > 0 ? nextThumbs() : prevThumbs();
    touchX.current = null;
  };

  const visibleThumbs = images.slice(thumbStart, thumbStart + VISIBLE);

  return (
    <div className="flex flex-col h-full">
      {/* Main image — flex-1 so it fills whatever height the right column sets */}
      <div className="relative flex-1 min-h-[240px] rounded-xl overflow-hidden">
        <Image
          key={images[activeIdx].src}
          src={images[activeIdx].src}
          alt={images[activeIdx].alt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={activeIdx === 0}
        />
      </div>

      {/* Thumbnail carousel — flex-shrink-0 keeps it at natural height */}
      <div
        className="mt-2 flex-shrink-0 flex items-center gap-2"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Prev */}
        <button
          onClick={prevThumbs}
          disabled={thumbStart === 0}
          aria-label="Previous photos"
          className="flex-shrink-0 w-7 h-7 rounded-full border border-earthen/40 flex items-center justify-center text-brown-body hover:border-gold hover:text-gold transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* 3 visible thumbnails */}
        <div className="flex-1 grid grid-cols-3 gap-2">
          {visibleThumbs.map((img, i) => {
            const globalIdx = thumbStart + i;
            const isActive = globalIdx === activeIdx;
            return (
              <button
                key={img.src}
                onClick={() => selectImage(globalIdx)}
                aria-label={`View: ${img.alt}`}
                className={`relative h-20 rounded-lg overflow-hidden transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                  isActive
                    ? "ring-2 ring-gold ring-offset-1 ring-offset-cream opacity-100"
                    : "opacity-55 hover:opacity-85"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 33vw, 17vw"
                />
              </button>
            );
          })}
        </div>

        {/* Next */}
        <button
          onClick={nextThumbs}
          disabled={thumbStart >= maxStart}
          aria-label="Next photos"
          className="flex-shrink-0 w-7 h-7 rounded-full border border-earthen/40 flex items-center justify-center text-brown-body hover:border-gold hover:text-gold transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
