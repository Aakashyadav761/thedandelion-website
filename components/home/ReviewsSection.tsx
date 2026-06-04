import { readdirSync } from "fs";
import { join } from "path";
import Image from "next/image";

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

        {/* Reviews grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {reviewFiles.map((filename, i) => (
            <div
              key={filename}
              className="break-inside-avoid rounded-xl overflow-hidden shadow-sm border border-earthen/20 bg-white"
            >
              <Image
                src={`/images/reviews/${encodeURIComponent(filename)}`}
                alt={`Guest review ${i + 1} of The Dandelion – Colonels' Jungle Resort`}
                width={0}
                height={0}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
