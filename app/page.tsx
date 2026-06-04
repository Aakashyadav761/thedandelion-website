import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import IntroSection from "@/components/home/IntroSection";
import HighlightGrid from "@/components/home/HighlightGrid";
import ReviewsSection from "@/components/home/ReviewsSection";

export const metadata: Metadata = {
  title:
    "The Dandelion – Colonels' Jungle Resort | Your Quiet Corner of the Western Ghats",
  description:
    "Arrive as guests, leave as family. A jungle retreat on the fringes of Dandeli forest — cottages, huts, guided walks, wildlife, and warm hospitality near Ramnagar, Karnataka.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <HighlightGrid />
      <ReviewsSection />
    </>
  );
}
