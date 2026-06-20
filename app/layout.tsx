import type { Metadata } from "next";
import { Cormorant_Garamond, Mulish } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const mulish = Mulish({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-mulish",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Dandelion – Colonels’ Jungle Resort | Western Ghats, Karnataka",
    template: "%s | The Dandelion – Colonels’ Jungle Resort",
  },
  description:
    "A jungle resort on the fringes of Dandeli forest in the Western Ghats. Cottages, huts, pool, guided nature walks, and wildlife — near Ramnagar, Belgavi, Karnataka.",
  metadataBase: new URL("https://www.thedandelion.in"),
  openGraph: {
    title: "The Dandelion – Colonels’ Jungle Resort",
    description:
      "A jungle retreat on the fringes of Dandeli forest — cottages, huts, guided walks, wildlife, and warm hospitality near Ramnagar, Karnataka.",
    url: "https://www.thedandelion.in",
    siteName: "The Dandelion – Colonels’ Jungle Resort",
    images: [
      {
        url: "https://www.thedandelion.in/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "The Dandelion – Colonels’ Jungle Resort, Dandeli, Western Ghats",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Dandelion – Colonels’ Jungle Resort",
    description:
      "A jungle retreat on the fringes of Dandeli forest — cottages, huts, guided walks, wildlife, and warm hospitality near Ramnagar, Karnataka.",
    images: ["https://www.thedandelion.in/og-image.jpeg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "The Dandelion – Colonels’ Jungle Resort",
  url: "https://www.thedandelion.in",
  description:
    "A jungle resort on the fringes of Dandeli forest in the Western Ghats, on the Bangalore - Goa Highway, near Ramnagar, Belgavi, Karnataka. 1 hour drive from Belgaum, Hubbali and Darwad.",
  telephone: "+91-7764006404",
  address: {
    "@type": "PostalAddress",
    addressLocality: "near Ramnagar",
    addressRegion: "Belgavi district, Karnataka",
    addressCountry: "IN",
  },
  amenityFeature: [
    "Swimming Pool",
    "Jacuzzi",
    "Restaurant",
    "Guided Nature Walks",
    "Birdwatching",
    "Barbeque",
  ].map((name) => ({ "@type": "LocationFeatureSpecification", name })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${mulish.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-body text-brown-body bg-cream">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <GoogleAnalytics gaId="G-3YSTT1N5GT" />
      </body>
    </html>
  );
}
