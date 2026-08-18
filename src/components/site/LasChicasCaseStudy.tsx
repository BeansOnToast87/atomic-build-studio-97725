import LasChicasFigure from "@/components/site/LasChicasFigure";

const desktopHome = "/assets/laschicas/laschicas-desktop-home.jpg";
const mobileHome = "/assets/laschicas/laschicas-mobile-home.jpg";
const functionsShot = "/assets/laschicas/laschicas-functions.jpg";
const whatsOnShot = "/assets/laschicas/laschicas-whats-on.jpg";

/**
 * DRAFT — OWNER APPROVAL PENDING.
 * The quote below is expected to be approved but is not yet confirmed in writing.
 * Set to false to hide it; the composition is designed to read as complete without it.
 */
const SHOW_DRAFT_TESTIMONIAL = true;

/** Attribution inputs — leave null until the owner supplies them in writing. */
const TESTIMONIAL_ATTRIBUTION_NAME: string | null = null;
const TESTIMONIAL_LOGO_SRC: string | null = null;

const narrative = [
  {
    label: "The situation",
    body: "Las Chicas was moving on from its previous identity, Cony's. The digital presence still carried legacy branding, outdated contact details, inconsistent menu and promotion information, old booking URLs and fragmented enquiry routes — weakest on mobile, where most guests were arriving.",
  },
  {
    label: "The work",
    body: "The site was restructured around how guests actually decide: homepage, Menu, What's On, Functions, About, Gallery and Contact, each with one obvious next step. Content was rewritten, venue information corrected, the mobile layout and navigation rebuilt, booking actions connected to OpenTable, and a separate functions and group-enquiry journey created. Remaining Cony's material was removed, metadata, canonical tags, structured data and the sitemap put in order, and the site deployed on the venue's existing domain — refined and maintained since.",
  },
  {
    label: "The current state",
    body: "One coherent digital home covering venue information, menus, What's On, functions, booking routes, contact details and brand presentation — live today on the venue's own domain.",
  },
];

const LasChicasCaseStudy = () => {
  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="w-full border-b border-border"
    >
      <div className="container mx-auto py-14 md:py-20">
        {/* Heading + narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-8">
              <p className="eyebrow">Selected work</p>
              <h2
                id="work-title"
                className="mt-4 font-display text-4xl md:text-5xl leading-[1.02] text-ink"
              >
                Las Chicas, Cronulla
              </h2>
              <p className="mt-5 measure font-display text-xl md:text-2xl leading-snug text-ink-soft">
                From a fragmented rebrand transition to one clear digital home.
              </p>
              <p className="mt-6 border-t border-border pt-3 measure text-sm md:text-base leading-relaxed text-ink-soft">
                Real client work. Cocktail bar and kitchen, Cronulla — website,
                content and guest journeys, live and maintained.
              </p>
              <p className="mt-6">
                <a
                  href="https://www.barlaschicas.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="link-editorial text-sm md:text-base"
                >
                  View the live Las Chicas website
                </a>
              </p>
            </div>
          </div>

          <dl className="lg:col-span-8 lg:border-l lg:border-border lg:pl-12">
            {narrative.map((part, i) => (
              <div
                key={part.label}
                className={`grid grid-cols-1 md:grid-cols-[9rem_1fr] gap-x-8 py-5 md:py-6 ${
                  i === 0 ? "" : "border-t border-border"
                }`}
              >
                <dt className="eyebrow pt-1">{part.label}</dt>
                <dd className="mt-2 md:mt-0 measure text-base leading-relaxed text-ink-soft">
                  {part.body}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Dominant desktop view, with the real mobile view set small and low beside it */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 lg:items-end">
          <div className="order-1 lg:order-2 lg:col-span-9">
            <LasChicasFigure
              src={desktopHome}
              alt="Las Chicas homepage on desktop: full-width venue photography with the headline “Long nights, shared plates, stirred slowly.” and a Book a table action in the header."
              caption="Homepage — venue character first, with one unmistakable booking action held in the header and announcement bar."
              ratioClass="aspect-[4/3] md:aspect-[16/10]"
              sizes="(min-width: 1024px) 72vw, 100vw"
              priority
            />
          </div>

          <div className="order-2 lg:order-1 lg:col-span-3 max-w-[13rem] sm:max-w-[15rem] lg:max-w-none lg:pb-6">
            <LasChicasFigure
              src={mobileHome}
              alt="Las Chicas homepage on a phone: condensed navigation, announcement bar and the same headline set for a narrow screen."
              caption="Mobile — the layout guests actually use, rebuilt so the information and the booking route survive a narrow screen."
              ratioClass="aspect-[9/16]"
              sizes="(min-width: 1024px) 22vw, 55vw"
              frameClassName="bg-ink"
            />
          </div>
        </div>

        {/* Supporting evidence: two journeys, asymmetric */}
        <div className="mt-12 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-6 lg:col-start-2">
            <LasChicasFigure
              src={functionsShot}
              alt="Las Chicas functions page: headline “Group nights, planned with care.” with an enquire about functions and events action alongside standard bookings."
              caption="Functions — group and private-hire interest separated from standard bookings, with its own enquiry route."
              ratioClass="aspect-[16/10]"
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-24">
            <LasChicasFigure
              src={whatsOnShot}
              alt="Las Chicas What's On page: editorial heading “The week at Las Chicas.” beside a photograph of cocktails being made."
              caption="What's On — weekly events given a place of their own, pointed at the same booking routes."
              ratioClass="aspect-[2/1]"
              sizes="(min-width: 1024px) 32vw, 100vw"
            />
          </div>
        </div>

        {/* Evidence boundary + draft testimonial */}
        <div className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-t border-border pt-6">
          <p className="lg:col-span-4 measure text-sm md:text-base leading-relaxed text-ink-soft">
            No booking, revenue or conversion uplift is claimed because these
            outcomes were not formally measured.
          </p>

          {SHOW_DRAFT_TESTIMONIAL && (
            <figure className="lg:col-span-7 lg:col-start-6 lg:border-l lg:border-border lg:pl-12">
              <p className="eyebrow text-accent">
                Draft testimonial — owner approval pending
              </p>
              <blockquote className="mt-4 measure font-display text-2xl md:text-[1.75rem] leading-snug text-ink">
                &ldquo;Kevin understood the hospitality side of the business as
                well as the website itself. He took the transition from
                Cony&rsquo;s to Las Chicas, cleaned up the legacy information,
                rebuilt the customer journeys and created a site that represents
                the venue properly. I&rsquo;d happily recommend him to another
                hospitality business.&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                {/* Attribution slot — populate once the owner supplies name/title/logo. */}
                <div className="flex items-start gap-4">
                  {TESTIMONIAL_LOGO_SRC && (
                    <img
                      src={TESTIMONIAL_LOGO_SRC}
                      alt="Las Chicas wordmark"
                      loading="lazy"
                      className="h-8 w-auto shrink-0 opacity-80"
                    />
                  )}
                  <div>
                    <p className="text-base leading-tight text-ink">
                      {TESTIMONIAL_ATTRIBUTION_NAME ?? "[Owner name — to be supplied]"}
                    </p>
                    <p className="mt-1 text-[0.8125rem] uppercase tracking-[0.14em] text-ink-soft">
                      Owner / Director, Las Chicas
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  Wording awaiting written confirmation from the venue owner.
                  Attribution will be completed once supplied.
                </p>
              </figcaption>

            </figure>
          )}
        </div>
      </div>
    </section>
  );
};

export default LasChicasCaseStudy;
