import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/accommodation", label: "Accommodation" },
  { href: "/corporate", label: "Corporate" },
  { href: "/groups", label: "Groups & Events" },
  { href: "/galleries", label: "Galleries" },
  { href: "/activities", label: "Activities" },
  { href: "/around-us", label: "Around Us" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-forest/90 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo + name lockup */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <Image
            src="/images/logo/logo.png"
            alt="The Dandelion – Colonels' Jungle Resort"
            width={38}
            height={56}
            className="object-contain"
            priority
          />
          <div className="flex flex-col justify-center">
            <span className="font-heading text-lg sm:text-xl text-cream font-medium leading-tight tracking-wide">
              The Dandelion
            </span>
            <span className="font-body text-[8px] sm:text-[10px] uppercase tracking-[0.13em] sm:tracking-[0.16em] text-cream/55 font-medium leading-tight mt-0.5">
              Colonels&apos; Jungle Resort
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
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

        {/* Mobile / tablet menu trigger */}
        <MobileMenu navLinks={navLinks} />
      </div>
    </header>
  );
}
