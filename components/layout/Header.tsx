import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/accommodation", label: "Accommodation" },
  { href: "/galleries", label: "Galleries" },
  { href: "/activities", label: "Activities" },
  { href: "/around-us", label: "Around Us" },
  { href: "/jobs", label: "Jobs" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-forest/90 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo/logo.png"
            alt="The Dandelion – Colonels' Jungle Resort"
            width={38}
            height={56}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-body font-medium tracking-wide text-cream/90 hover:text-gold transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu trigger */}
        <MobileMenu navLinks={navLinks} />
      </div>
    </header>
  );
}
