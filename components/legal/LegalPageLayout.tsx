import type { ReactNode } from "react";

export default function LegalPageLayout({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <>
      {/* ─── Title band ─── */}
      <section className="bg-forest py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <p className="font-body text-[10px] tracking-[0.22em] uppercase text-earthen mb-3">
            {eyebrow}
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-cream font-light leading-tight">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 font-body text-sm text-cream/65 leading-relaxed max-w-xl mx-auto">
              {intro}
            </p>
          )}
        </div>
      </section>

      {/* ─── Content ─── */}
      <section className="bg-cream py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10">{children}</div>
        </div>
      </section>
    </>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      {heading && (
        <h2 className="font-heading text-2xl md:text-3xl text-gold-dark font-medium">
          {heading}
        </h2>
      )}
      <div className="flex flex-col gap-4 font-body text-sm md:text-base text-brown-body leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="text-earthen mt-1.5 flex-shrink-0 text-[6px]">●</span>
          <span className="font-body text-sm md:text-base text-brown-body leading-relaxed">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
