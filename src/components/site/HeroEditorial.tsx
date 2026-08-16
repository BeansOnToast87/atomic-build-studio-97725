import { CONTACT_MAILTO } from "@/lib/contact";

const HeroEditorial = () => {
  return (
    <section id="hero" className="w-full border-b border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left: display statement */}
          <div className="lg:col-span-7 lg:border-r lg:border-border lg:pr-12 pt-12 md:pt-20 lg:pt-28 pb-10 lg:pb-24">
            <p className="eyebrow">Websites for independent hospitality</p>
            <h1 className="mt-6 md:mt-8 font-display text-[3.25rem] leading-[0.95] sm:text-6xl md:text-7xl lg:text-[5.5rem] lg:leading-[0.92] text-ink">
              A proper online
              <br />
              home for
              <br />
              <span className="italic">your venue.</span>
            </h1>
          </div>

          {/* Right: brief column */}
          <div className="lg:col-span-5 lg:pl-12 pb-14 lg:pt-28 lg:pb-24 flex flex-col justify-between gap-10">
            <div>
              <div className="rule mb-6 hidden lg:block" />
              <p className="measure text-base md:text-lg leading-relaxed text-ink-soft">
                Focused websites that bring your menu, opening hours, location and
                booking or order routes together clearly.
              </p>
            </div>

            <div>
              <div className="rule pt-5 flex items-baseline justify-between gap-6">
                <span className="eyebrow">One-page website</span>
                <span className="font-display text-3xl md:text-4xl text-ink leading-none">
                  From £995
                </span>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <a
                  href={CONTACT_MAILTO}
                  className="tap inline-flex items-center justify-center bg-ink px-7 text-paper text-sm font-medium tracking-wide hover:bg-accent transition-colors"
                >
                  Start a conversation
                </a>
                <a href="#concept" className="tap inline-flex items-center link-editorial text-sm font-medium">
                  See a concept
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroEditorial;
