"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

export default function ReviewsCarousel({ files }: { files: string[] }) {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      const count =
        window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
      setVisibleCount(count);
      setCurrent((c) => Math.min(c, Math.max(0, files.length - count)));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [files.length]);

  const maxIndex = Math.max(0, files.length - visibleCount);

  const prev = useCallback(() => setCurrent((c) => Math.max(0, c - 1)), []);
  const next = useCallback(
    () => setCurrent((c) => Math.min(maxIndex, c + 1)),
    [maxIndex]
  );

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 50) dx > 0 ? next() : prev();
    touchStartX.current = null;
  };

  const translatePct = visibleCount > 0 ? (current * 100) / visibleCount : 0;
  const dotCount = maxIndex + 1;

  return (
    <div>
      {/* Track */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${translatePct}%)` }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {files.map((filename, i) => (
            <div
              key={filename}
              className="flex-shrink-0 px-2"
              style={{ width: `${100 / visibleCount}%` }}
            >
              <div className="relative h-72 rounded-xl overflow-hidden shadow-sm border border-earthen/20 bg-white">
                <Image
                  src={`/images/reviews/${encodeURIComponent(filename)}`}
                  alt={`Guest review ${i + 1} of The Dandelion – Colonels' Jungle Resort`}
                  fill
                  className="object-contain object-top"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={prev}
          disabled={current === 0}
          aria-label="Previous reviews"
          className="w-10 h-10 rounded-full border border-earthen/40 flex items-center justify-center text-brown-body hover:border-gold hover:text-gold transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: dotCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2 bg-gold"
                  : "w-2 h-2 bg-earthen/40 hover:bg-earthen/70"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          disabled={current === maxIndex}
          aria-label="Next reviews"
          className="w-10 h-10 rounded-full border border-earthen/40 flex items-center justify-center text-brown-body hover:border-gold hover:text-gold transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
