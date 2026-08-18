import { CONTACT_MAILTO } from "@/lib/contact";

const proof = [
  ["20 years", "in hospitality"],
  ["15 years", "in management"],
  ["Real hospitality web work", "including Las Chicas, Cronulla"],
];

const HeroEditorial = () => {
  return (
    <section id="hero" className="w-full border-b border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left: display statement */}
          <div className="lg:col-span-7 lg:border-r lg:border-border lg:pr-12 pt-12 md:pt-20 lg:pt-28 pb-10 lg:pb-24">
            <p className="eyebrow">Hospitality websites &amp; guest journeys</p>
            <h1 className="mt-6 md:mt-8 font-display text-[3.25rem] leading-[0.95] sm:text-6xl md:text-7xl lg:text-[5.5rem] lg:leading-[0.92] text-ink">
              A clearer path
              <br />
              from interest
              <br />
              <span className="italic">to booking.</span>
            </h1>
          </div>

          {/* Right: brief column */}
          <div className="lg:col-span-5 lg:pl-12 pb-14 lg:pt-28 lg:pb-24 flex flex-col justify-between gap-10">
            <div>
              <div className="rule mb-6 hidden lg:block" />
              <p className="measure text-base md:text-lg leading-relaxed text-ink-soft">
                I design and build focused, mobile-first web experiences for independent
                hospitality businesses — from functions and group enquiries to relaunches,
                promotions and venue websites.
              </p>
            </div>

            <div>
              <dl>
                {proof.map(([figure, label]) => (
                  <div key={figure} className="rule pt-4 pb-4">
                    <dt className="font-display text-2xl md:text-[1.75rem] leading-tight text-ink">
                      {figure}
                    </dt>
                    <dd className="mt-1 text-sm text-ink-soft">{label}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <a
                  href="#work"
                  className="tap inline-flex items-center justify-center bg-ink px-7 text-paper text-sm font-medium tracking-wide hover:bg-accent transition-colors"
                >
                  See the Las Chicas project
                </a>
                <a
                  href={CONTACT_MAILTO}
                  className="tap inline-flex items-center link-editorial text-sm font-medium"
                >
                  Start a conversation
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
