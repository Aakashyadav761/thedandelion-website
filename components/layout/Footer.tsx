import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { href: "/accommodation", label: "Accommodation" },
  { href: "/galleries", label: "Galleries" },
  { href: "/activities", label: "Activities & Facilities" },
  { href: "/around-us", label: "Around Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/jobs", label: "Careers" },
];

export default function Footer() {
  return (
    <footer className="bg-forest text-cream/80 font-body">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 md:pt-12 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <Link href="/">
              <Image
                src="/images/logo/logo.png"
                alt="The Dandelion – Colonels' Jungle Resort"
                width={48}
                height={72}
                className="object-contain brightness-90"
              />
            </Link>
            <div>
              <p className="text-sm font-medium text-cream/90 leading-snug">
                The Dandelion –<br />Colonels&apos; Jungle Resort
              </p>
              <p className="mt-2 text-sm text-cream/60 leading-relaxed">
                Village Chinchewadi, Taluka Khanapur,<br />
                Dist. Belgavi, Karnataka
              </p>
            </div>
          </div>

          {/* Quick links — centred on desktop */}
          <div className="md:text-center">
            <h3 className="text-sm font-medium tracking-widest uppercase text-earthen mb-4">
              Explore
            </h3>
            <ul className="flex flex-col md:items-center gap-2">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-cream/70 hover:text-gold transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — right-aligned on desktop so content sits against the same right edge as the nav */}
          <div className="md:text-right">
            <h3 className="text-sm font-medium tracking-widest uppercase text-earthen mb-4">
              Get in Touch
            </h3>
            <ul className="flex flex-col md:items-end gap-3 text-sm text-cream/70">
              <li>
                <a
                  href="https://wa.me/917764006404"
                  className="hover:text-gold transition-colors"
                >
                  +91 77640 06404
                </a>
              </li>
              <li>
                <a
                  href="mailto:Help@theDandelion.in"
                  className="hover:text-gold transition-colors"
                >
                  Help@theDandelion.in
                </a>
              </li>
              <li className="text-cream/50 leading-relaxed">
                On the Bangalore–Goa Highway,<br />
                7 km from Ramnagar
              </li>
            </ul>
            <p className="mt-5 text-sm text-cream/70">
              <span className="text-gold font-semibold">4.7 ★</span>
              <span className="ml-1">on Google</span>
            </p>
            <a
              href="https://wa.me/917764006404?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20a%20stay%20at%20The%20Dandelion."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block bg-gold text-brown-dark text-sm font-semibold px-5 py-2.5 rounded hover:bg-gold/90 transition-colors"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-8 pt-3 pb-3 border-t border-sage/20 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cream/40">
          <p>
            &copy; {new Date().getFullYear()} The Dandelion – Colonels&apos; Jungle Resort. All rights reserved.
          </p>
          <p>theDandelion.in</p>
        </div>
      </div>
    </footer>
  );
}
