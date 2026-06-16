"use client";

import { useEffect, useState } from "react";

const SESSION_KEY = "reopening-banner-dismissed";

export default function ReopeningBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    sessionStorage.setItem(SESSION_KEY, "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={dismiss}
        aria-hidden="true"
      />
      {/* Modal */}
      <div className="relative z-10 max-w-md w-full bg-forest rounded-2xl px-8 py-8 text-center shadow-2xl">
        <button
          onClick={dismiss}
          aria-label="Dismiss announcement"
          className="absolute top-4 right-4 text-cream/50 hover:text-cream transition-colors p-1"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="h-px w-8 bg-earthen/40" />
          <span className="text-earthen/70 text-base leading-none">✦</span>
          <span className="h-px w-8 bg-earthen/40" />
        </div>

        <p className="font-body text-[10px] tracking-[0.22em] uppercase text-earthen mb-3">
          Season Update
        </p>
        <p className="font-heading text-2xl md:text-3xl text-cream font-medium leading-snug mb-3">
          Reopening September 2026
        </p>
        <p className="font-body text-sm text-cream/70 leading-relaxed">
          Accepting reservations now for September onwards.
        </p>

        <button
          onClick={dismiss}
          className="mt-6 inline-block font-body text-sm font-semibold bg-gold text-brown-dark px-7 py-2.5 rounded hover:bg-gold/90 transition-colors"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
