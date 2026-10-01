import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import IntroSection from "@/components/home/IntroSection";
import HighlightGrid from "@/components/home/HighlightGrid";
import ReviewsSection from "@/components/home/ReviewsSection";
import AnnouncementBanner from "@/components/layout/AnnouncementBanner";

export const metadata: Metadata = {
  title:
    "The Dandelion – Colonels' Jungle Resort | Your Quiet Corner of the Western Ghats",
  description:
    "A jungle retreat on the fringes of Dandeli forest — cottages, huts, guided walks, wildlife, and warm hospitality near Ramnagar, Karnataka.",
};

export default function HomePage() {
  return (
    <>
      <AnnouncementBanner />

      <Hero />
      <IntroSection />
      <HighlightGrid />
      <ReviewsSection />
    </>
  );
}
