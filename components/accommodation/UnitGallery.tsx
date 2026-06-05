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

  const selectImage = (idx: number) => {
    setActiveIdx(idx);
    if (idx < thumbStart) setThumbStart(idx);
    else if (idx >= thumbStart + VISIBLE) setThumbStart(idx - VISIBLE + 1);
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
      {/* Main image — grows to fill the column height; no fixed dimension */}
      <div className="relative flex-1 min-h-[260px] overflow-hidden">
        <Image
          key={images[activeIdx].src}
          src={images[activeIdx].src}
          alt={images[activeIdx].alt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 52vw"
          priority={activeIdx === 0}
        />
      </div>

      {/* Thumbnail strip — full column width; arrows float over the edges */}
      <div
        className="flex-shrink-0 mt-2 relative"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="grid grid-cols-3 gap-2">
          {visibleThumbs.map((img, i) => {
            const globalIdx = thumbStart + i;
            const isActive = globalIdx === activeIdx;
            return (
              <button
                key={img.src}
                onClick={() => selectImage(globalIdx)}
                aria-label={`View: ${img.alt}`}
                className={`relative h-20 overflow-hidden transition-all duration-200 focus:outline-none ${
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
                  sizes="(max-width: 1024px) 34vw, 18vw"
                />
              </button>
            );
          })}
        </div>

        {/* Prev arrow — only shown when not at start */}
        {thumbStart > 0 && (
          <button
            onClick={prevThumbs}
            aria-label="Previous photos"
            className="absolute left-1 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-cream/90 border border-earthen/40 flex items-center justify-center text-brown-body hover:border-gold hover:text-gold transition-colors shadow-sm"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Next arrow — only shown when not at end */}
        {thumbStart < maxStart && (
          <button
            onClick={nextThumbs}
            aria-label="Next photos"
            className="absolute right-1 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-cream/90 border border-earthen/40 flex items-center justify-center text-brown-body hover:border-gold hover:text-gold transition-colors shadow-sm"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
