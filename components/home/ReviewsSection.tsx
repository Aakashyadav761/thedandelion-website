import { readdirSync } from "fs";
import { join } from "path";
import ReviewsCarousel from "./ReviewsCarousel";

export default function ReviewsSection() {
  let reviewFiles: string[] = [];

  try {
    const reviewsDir = join(process.cwd(), "public", "images", "reviews");
    reviewFiles = readdirSync(reviewsDir)
      .filter((f) => /\.(png|jpg|jpeg|webp)$/i.test(f))
      .sort();
  } catch {
    reviewFiles = [];
  }

  if (reviewFiles.length === 0) return null;

  return (
    <section className="bg-cream py-20 md:py-24 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-12 bg-earthen/50" />
            <span className="text-earthen text-xl leading-none">✦</span>
            <span className="h-px w-12 bg-earthen/50" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl text-gold-dark font-medium">
            What Our Guests Say
          </h2>
          <p className="mt-3 font-body text-sm tracking-widest uppercase text-brown-body/60">
            From Google Reviews
          </p>
        </div>

        <ReviewsCarousel files={reviewFiles} />
      </div>
    </section>
  );
}
