const ConceptLabel = ({ className = "" }: { className?: string }) => (
  <p className={`eyebrow !text-paper/70 !tracking-[0.2em] ${className}`}>
    Concept demo — illustrative only. Not client work.
  </p>
);

const IllustrativeButton = ({ children }: { children: React.ReactNode }) => (
  <span
    role="button"
    aria-disabled="true"
    className="inline-flex items-center justify-center border border-paper/40 px-5 py-3 text-xs font-medium uppercase tracking-[0.14em] text-paper/85 cursor-default select-none"
  >
    {children}
  </span>
);

const ConceptDemo = () => {
  return (
    <section
      id="concept"
      aria-labelledby="concept-title"
      className="w-full bg-ink text-paper border-t border-paper/20"
    >
      {/* Permanent label bar */}
      <div className="sticky top-0 z-20 border-b border-paper/25 bg-ink/95 backdrop-blur-sm">
        <div className="container mx-auto py-3">
          <ConceptLabel />
        </div>
      </div>

      <div className="container mx-auto py-14 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow !text-paper/60">What it could look like</p>
            <h2
              id="concept-title"
              className="mt-4 font-display text-4xl md:text-5xl leading-[1.02]"
            >
              North Street Kitchen
            </h2>
            <p className="mt-5 measure text-sm md:text-base leading-relaxed text-paper/75">
              A fictional venue, invented to show the shape of the finished page. No real
              venue, address, booking destination, reviews or results are represented here.
            </p>
            <p className="mt-6 border-t border-paper/25 pt-4 text-xs uppercase tracking-[0.16em] text-paper/55">
              Buttons below are illustrative and perform no action.
            </p>
          </div>

          {/* Composed page fragments */}
          <div className="lg:col-span-8 lg:border-l lg:border-paper/25 lg:pl-16 space-y-12 md:space-y-16">
            {/* Fragment: masthead + intro */}
            <figure className="relative">
              <div className="border-t border-paper/40 pt-6">
                <p className="text-[0.625rem] uppercase tracking-[0.2em] text-paper/50">
                  Neighbourhood kitchen · all day
                </p>
                <p className="mt-4 font-display text-5xl md:text-7xl leading-[0.94]">
                  North Street
                  <br />
                  <span className="italic">Kitchen</span>
                </p>
                <p className="mt-5 measure text-sm md:text-base leading-relaxed text-paper/75">
                  Small plates, wood-fired bread and a short wine list. Walk-ins at the
                  counter, tables for six or fewer.
                </p>
              </div>
              <figcaption className="mt-4 border-t border-paper/20 pt-3 text-xs uppercase tracking-[0.14em] text-paper/50">
                Fragment 01 — what the venue is, said once, clearly
              </figcaption>
            </figure>

            {/* Fragment: menu typography */}
            <figure>
              <div className="border-t border-paper/40 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-12">
                {[
                  ["Focaccia, cultured butter", "5"],
                  ["Grilled leeks, hazelnut", "9"],
                  ["Hand-rolled pici, pepper", "14"],
                  ["Whole plaice, brown butter", "22"],
                  ["Chicory, anchovy, lemon", "7"],
                  ["Olive oil cake, crème fraîche", "8"],
                ].map(([dish, price]) => (
                  <div
                    key={dish}
                    className="flex items-baseline gap-4 border-b border-paper/15 py-3"
                  >
                    <span className="font-display text-lg md:text-xl">{dish}</span>
                    <span className="flex-1 border-b border-dotted border-paper/25 translate-y-[-3px]" />
                    <span className="font-display text-lg md:text-xl tabular-nums">{price}</span>
                  </div>
                ))}
              </div>
              <figcaption className="mt-4 border-t border-paper/20 pt-3 text-xs uppercase tracking-[0.14em] text-paper/50">
                Fragment 02 — menu set on the page, or linked where it already lives
              </figcaption>
            </figure>

            {/* Fragment: hours + location */}
            <figure>
              <div className="border-t border-paper/40 pt-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div>
                  <p className="eyebrow !text-paper/60">Opening hours</p>
                  <dl className="mt-4">
                    {[
                      ["Tue – Thu", "12:00 – 22:00"],
                      ["Fri – Sat", "12:00 – 23:00"],
                      ["Sunday", "12:00 – 17:00"],
                      ["Mon", "Closed"],
                    ].map(([d, h]) => (
                      <div
                        key={d}
                        className="flex items-baseline justify-between gap-6 border-b border-paper/15 py-2.5"
                      >
                        <dt className="text-sm text-paper/75">{d}</dt>
                        <dd className="font-display text-lg tabular-nums">{h}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div>
                  <p className="eyebrow !text-paper/60">Finding us</p>
                  <p className="mt-4 font-display text-2xl md:text-3xl leading-snug">
                    North Street,
                    <br />
                    fictional location
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-paper/70">
                    Directions and a map link would sit here on a real venue's page.
                  </p>
                </div>
              </div>
              <figcaption className="mt-4 border-t border-paper/20 pt-3 text-xs uppercase tracking-[0.14em] text-paper/50">
                Fragment 03 — hours and location, stated without hedging
              </figcaption>
            </figure>

            {/* Fragment: routes */}
            <figure>
              <div className="border-t border-paper/40 pt-6">
                <p className="eyebrow !text-paper/60">Booking and order routes</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <IllustrativeButton>Book a table</IllustrativeButton>
                  <IllustrativeButton>View menu</IllustrativeButton>
                  <IllustrativeButton>Order for collection</IllustrativeButton>
                </div>
                <p className="mt-5 measure text-sm leading-relaxed text-paper/70">
                  On a real venue's page these would connect to the platforms you already
                  use. Here they demonstrate placement only.
                </p>
              </div>
              <figcaption className="mt-4 border-t border-paper/20 pt-3 text-xs uppercase tracking-[0.14em] text-paper/50">
                Fragment 04 — existing platforms connected, not replaced
              </figcaption>
            </figure>

            <ConceptLabel className="border-t border-paper/25 pt-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConceptDemo;
