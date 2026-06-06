import type { Metadata } from "next";
import Image from "next/image";
import ApplicationForm from "@/components/jobs/ApplicationForm";
import { sanityClient } from "@/lib/sanity";
import type { Job } from "@/lib/types";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the team at The Dandelion – Colonels' Jungle Resort. Open roles include Manager, Chef, Housekeeping, Restaurant Staff, and more.",
};

const ROLE_ORDER = [
  "Manager",
  "Assistant Manager",
  "Chef",
  "Housekeeping",
  "Restaurant Staff",
  "Maintenance Staff",
];

async function getOpenRoles(): Promise<Job[]> {
  const jobs: Job[] = await sanityClient.fetch(
    `*[_type == "job" && isOpen == true] {
      _id, _type, title, type, description, location, isOpen
    }`
  );
  return jobs.sort((a, b) => {
    const ai = ROLE_ORDER.indexOf(a.title);
    const bi = ROLE_ORDER.indexOf(b.title);
    if (ai === -1 && bi === -1) return a.title.localeCompare(b.title);
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  });
}

function formatJobType(type: string): string {
  return type.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

const typeBadge: Record<string, string> = {
  "Full-time": "bg-sage/15 text-sage",
  "Part-time": "bg-earthen/20 text-brown-body",
  "Seasonal":  "bg-gold/15 text-gold-dark",
};

export default async function JobsPage() {
  const openRoles = await getOpenRoles();
  return (
    <>
      {/* ─── Page hero ─── */}
      <section className="relative h-[50vh] min-h-[360px] flex items-end overflow-hidden">
        <Image
          src="/images/cottage/IMG-20240417-WA0018.jpg"
          alt="The Dandelion – Colonels' Jungle Resort"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-12 md:pb-16 w-full max-w-7xl mx-auto">
          <p className="font-body text-[10px] tracking-[0.22em] uppercase text-earthen mb-3">
            Join the team
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl text-cream font-light leading-none">
            Careers
          </h1>
        </div>
      </section>

      {/* ─── Intro ─── */}
      <section className="bg-cream py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-12 bg-earthen/50" />
            <span className="text-earthen text-xl leading-none">✦</span>
            <span className="h-px w-12 bg-earthen/50" />
          </div>
          <p className="font-body text-base md:text-lg text-brown-body leading-relaxed">
            The Dandelion is a small, close-knit team built on personal warmth and
            genuine care for guests. If that sounds like you, we&apos;d love to hear
            from you.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="h-px w-12 bg-earthen/50" />
            <span className="text-earthen text-xl leading-none">✦</span>
            <span className="h-px w-12 bg-earthen/50" />
          </div>
        </div>
      </section>

      {/* ─── Open roles ─── */}
      <section className="bg-cream pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-brown-body/50 mb-2">
              Currently open
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-gold-dark font-medium">
              Open Positions
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {openRoles.map((role) => {
              const displayType = formatJobType(role.type);
              return (
                <div
                  key={role._id}
                  className="bg-white rounded-xl border border-earthen/20 shadow-sm p-6 flex flex-col gap-3"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-body text-[10px] font-semibold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full ${
                        typeBadge[displayType] ?? "bg-earthen/15 text-brown-body"
                      }`}
                    >
                      {displayType}
                    </span>
                    <span className="font-body text-[10px] text-brown-body/40 tracking-wide uppercase">
                      {role.location ?? "Ramnagar, Karnataka"}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl text-gold-dark font-medium leading-tight">
                    {role.title}
                  </h3>
                  {role.description && (
                    <p className="font-body text-sm text-brown-body leading-relaxed flex-1">
                      {role.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="bg-cream py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <span className="h-px flex-1 bg-earthen/30" />
            <span className="text-earthen leading-none">✦</span>
            <span className="h-px flex-1 bg-earthen/30" />
          </div>
        </div>
      </div>

      {/* ─── Application form ─── */}
      <section className="bg-cream pb-20 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left: context */}
            <div>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-brown-body/50 mb-2">
                Apply now
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-gold-dark font-medium mb-5">
                Get in Touch
              </h2>
              <p className="font-body text-base text-brown-body leading-relaxed mb-6">
                Fill in the form and we&apos;ll get back to you. All roles are based at
                the resort in Ramnagar, Karnataka. We welcome applications year-round —
                even if the right role isn&apos;t open yet, we keep good candidates on file.
              </p>
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-earthen/40" />
                <span className="text-earthen/60 text-lg leading-none">✦</span>
                <span className="h-px w-12 bg-earthen/40" />
              </div>
            </div>

            {/* Right: form */}
            <ApplicationForm />
          </div>
        </div>
      </section>
    </>
  );
}
