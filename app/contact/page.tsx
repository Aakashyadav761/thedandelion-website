import type { Metadata } from "next";
import Image from "next/image";
import { sanityClient } from "@/lib/sanity";
import type { SiteContent } from "@/lib/types";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with The Dandelion – Colonels' Jungle Resort. Find us on the Bangalore–Goa Highway, 7 km from Ramnagar, Karnataka.",
};

async function getSiteContent(): Promise<SiteContent | null> {
  return sanityClient.fetch(
    `*[_type == "siteContent"][0]{ _id, _type, story, address, phone, email, instagramUrl }`
  );
}

const guidelines = [
  "Do not enter the surrounding forest unaccompanied — staff are happy to guide jungle walks.",
  "Children must be supervised by an adult at all times.",
  "Use the bins provided; carry non-biodegradable waste back out. Litter takes years to degrade and can harm animals.",
  "Torches are provided in rooms; staff will escort guests around the property after dark.",
  "Wear protective shoes and clothing in the jungle and at night.",
  "First-aid kits are on site — carry your own required medication and insect repellent.",
  "No music or loud noise in public / open areas.",
  "Keep phones on silent or vibrate. Connectivity is limited — only Jio and Airtel get good signal.",
  "Wi-Fi is available in public areas only; ask Reception.",
  "Books and games are available at the retreat.",
];

export default async function ContactPage() {
  const site = await getSiteContent();
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative h-[45vh] min-h-[320px] flex items-end overflow-hidden">
        <Image
          src="/images/pool/20240330_133149.jpg"
          alt="The Dandelion – Colonels' Jungle Resort"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-12 md:pb-14 w-full max-w-7xl mx-auto">
          <p className="font-body text-[10px] tracking-[0.22em] uppercase text-earthen mb-3">
            Get in touch
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl text-cream font-light leading-none">
            Contact Us
          </h1>
        </div>
      </section>

      {/* ─── About + Contact details ─── */}
      <section className="bg-cream py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* About */}
            <div>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-brown-body font-semibold mb-2">
                Our story
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-gold-dark font-medium mb-6">
                A Natural Wilderness,<br />Warmly Held
              </h2>
              <p className="font-body text-base text-brown-body leading-relaxed mb-5">
                {site?.story ?? "At The Dandelion, we believe the best stays are the ones that feel personal. Tucked on the fringe of Dandeli’s forest in the Western Ghats, we offer a natural, unmanicured wilderness where genuine warmth matters as much as the birdsong. From guided jungle walks to slow evenings around the barbeque, everything is looked after personally — so that what begins as a visit becomes a memory you carry home."}
              </p>
              <p className="font-body text-sm text-brown-body/80 leading-relaxed">
                The Dandelion – Colonels&apos; Jungle Resort is a highly rated jungle retreat
                offering a natural, non-manicured ambience with a richly developed ecosystem.
                Set on the northern edge of Dandeli forest near Ramnagar, our lush 11-acre
                grounds showcase an abundance of flora and fauna — especially birds. A seasonal
                river nearby hosts grazing deer, wild hog, and migrating elephant herds, along
                with regular hornbill sightings.
              </p>
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-8">

              <div>
                <h3 className="font-body text-[10px] tracking-[0.18em] uppercase text-brown-body font-semibold mb-4">
                  Reach us
                </h3>
                <ul className="flex flex-col gap-4">
                  <li className="flex items-start gap-4">
                    <span className="text-earthen mt-0.5 flex-shrink-0">✦</span>
                    <div>
                      <p className="font-body text-sm font-medium text-forest">Phone / WhatsApp</p>
                      <a
                        href={`https://wa.me/${(site?.phone ?? "+91 7764006404").replace(/\D/g, "")}`}
                        className="font-body text-sm text-brown-body hover:text-gold transition-colors"
                      >
                        {site?.phone ?? "+91 77640 06404"}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-earthen mt-0.5 flex-shrink-0">✦</span>
                    <div>
                      <p className="font-body text-sm font-medium text-forest">Email</p>
                      <a
                        href={`mailto:${site?.email ?? "Help@theDandelion.in"}`}
                        className="font-body text-sm text-brown-body hover:text-gold transition-colors"
                      >
                        {site?.email ?? "Help@theDandelion.in"}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-earthen mt-0.5 flex-shrink-0">✦</span>
                    <div>
                      <p className="font-body text-sm font-medium text-forest">Address</p>
                      <p className="font-body text-sm text-brown-body leading-relaxed">
                        {site?.address ?? "Village Chinchewadi, Taluka Khanapur, Dist. Belgavi, Karnataka"}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-earthen mt-0.5 flex-shrink-0">✦</span>
                    <div>
                      <p className="font-body text-sm font-medium text-forest">Check-in / Check-out</p>
                      <p className="font-body text-sm text-brown-body">
                        Check-in: 2:00 PM &nbsp;·&nbsp; Check-out: 11:00 AM
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-body text-[10px] tracking-[0.18em] uppercase text-brown-body font-semibold mb-4">
                  How to reach us
                </h3>
                <ul className="flex flex-col gap-3">
                  <li className="flex items-start gap-3">
                    <span className="font-body text-xs text-sage font-semibold mt-0.5 flex-shrink-0">By road</span>
                    <p className="font-body text-sm text-brown-body leading-relaxed">
                      On the Bangalore–Goa Highway, 7&nbsp;km from Ramnagar —
                      500&nbsp;m off the highway in Nagargali gram panchayat.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-body text-xs text-sage font-semibold mt-0.5 flex-shrink-0 whitespace-nowrap">By air</span>
                    <p className="font-body text-sm text-brown-body">
                      Nearest airports: Belgaum, Hubballi, and Goa.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-body text-xs text-sage font-semibold mt-0.5 flex-shrink-0">By rail</span>
                    <p className="font-body text-sm text-brown-body">
                      Nearest railhead: Londa Junction.
                    </p>
                  </li>
                </ul>
              </div>

              <a
                href="https://wa.me/917764006404?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20a%20stay%20at%20The%20Dandelion."
                target="_blank"
                rel="noopener noreferrer"
                className="self-start inline-flex items-center gap-2 bg-gold text-brown-dark font-body font-semibold text-sm tracking-wide px-7 py-3.5 rounded hover:bg-gold/90 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Map ─── */}
      <section className="bg-cream pb-14 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative w-full h-[400px] md:h-[450px] rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.1035446364936!2d74.5419077!3d15.424961799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf17310991aa99%3A0xeace265f1e5fb716!2sThe%20Dandelion%20-%20Colonels%20Jungle%20Resort!5e0!3m2!1sen!2sin!4v1780556125962!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Dandelion – Colonels' Jungle Resort on Google Maps"
            />
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

      {/* ─── Know Before You Go ─── */}
      <section className="bg-cream pb-20 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-brown-body/50 mb-2">
              Guest guidelines
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-gold-dark font-medium">
              Know Before You Go
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
            {guidelines.map((g, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-sage font-body text-xs font-semibold mt-0.5 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-body text-sm text-brown-body leading-relaxed">{g}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
