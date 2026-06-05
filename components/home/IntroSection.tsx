export default function IntroSection() {
  return (
    <section className="bg-cream py-20 md:py-28 px-4">
      <div className="mx-auto max-w-3xl text-center">
        {/* Decorative rule */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="h-px w-16 bg-earthen/50" />
          <span className="text-earthen text-2xl leading-none">✦</span>
          <span className="h-px w-16 bg-earthen/50" />
        </div>

        <h2 className="font-heading text-4xl md:text-5xl text-gold-dark font-medium leading-snug mb-6">
          A Natural Wilderness,<br />Warmly Held
        </h2>

        <p className="font-body text-base md:text-lg text-brown-body leading-relaxed mb-6">
          At The Dandelion, we believe the best stays are the ones that feel personal.
          Tucked on the fringe of Dandeli&apos;s forest in the Western Ghats, we offer a natural,
          unmanicured wilderness where genuine warmth matters as much as the birdsong.
        </p>

        <p className="font-body text-base md:text-lg text-brown-body/80 leading-relaxed mb-10">
          Set across 11 acres on the forest&apos;s northern edge, our lush green environs showcase
          an abundance of flora and fauna — especially birds. A seasonal river nearby hosts grazing
          deer, root-digging wild hog, and migrating elephant herds, along with sightings of hornbills.
          From guided jungle walks to slow evenings around the barbeque, everything is looked after
          personally, so that what begins as a stay becomes a bond you carry home.
        </p>

        {/* Decorative rule */}
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-earthen/50" />
          <span className="text-earthen text-2xl leading-none">✦</span>
          <span className="h-px w-16 bg-earthen/50" />
        </div>
      </div>
    </section>
  );
}
