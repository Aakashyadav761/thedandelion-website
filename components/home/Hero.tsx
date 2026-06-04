import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background photo */}
      <Image
        src="/images/pool/20221214_112149.jpg"
        alt="The Dandelion Resort — pool with forested mountain backdrop, Western Ghats"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-16">
        {/* Logo — large centrepiece */}
        <div className="mb-6">
          <Image
            src="/images/logo/logo.png"
            alt="The Dandelion – Colonels' Jungle Resort"
            width={90}
            height={134}
            priority
            className="object-contain drop-shadow-lg"
          />
        </div>

        {/* Tagline */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream font-light tracking-wide drop-shadow-md">
          Your quiet corner of<br className="hidden sm:block" /> the Western Ghats.
        </h1>

        {/* Secondary line */}
        <p className="mt-4 font-body text-base sm:text-lg text-cream/80 tracking-widest uppercase font-light">
          Arrive as guests &mdash; leave as family
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="/accommodation"
            className="bg-gold text-brown-dark font-body font-semibold px-8 py-3.5 text-sm tracking-wide uppercase hover:bg-gold/90 transition-colors rounded"
          >
            Explore Accommodation
          </Link>
          <a
            href="https://wa.me/917764006404?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20a%20stay%20at%20The%20Dandelion."
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cream/70 text-cream font-body font-medium px-8 py-3.5 text-sm tracking-wide uppercase hover:bg-cream/10 transition-colors rounded"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/60 animate-bounce">
        <span className="text-xs font-body tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
