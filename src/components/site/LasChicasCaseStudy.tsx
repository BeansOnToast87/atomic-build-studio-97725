import LasChicasFigure from "@/components/site/LasChicasFigure";
import desktopHome from "@/assets/laschicas/laschicas-desktop-home.jpg.asset.json";
import mobileHome from "@/assets/laschicas/laschicas-mobile-home.jpg.asset.json";
import functionsShot from "@/assets/laschicas/laschicas-functions.jpg.asset.json";
import whatsOnShot from "@/assets/laschicas/laschicas-whats-on.jpg.asset.json";

/**
 * DRAFT — OWNER APPROVAL PENDING.
 * The quote below is expected to be approved but is not yet confirmed in writing.
 * Set to false to hide it; the composition is designed to read as complete without it.
 */
const SHOW_DRAFT_TESTIMONIAL = true;

const narrative = [
  {
    label: "The situation",
    body: "Las Chicas was moving on from its previous identity, Cony's. The digital presence still carried a mix of legacy branding, outdated contact details, inconsistent menu and promotion information, old booking pages and URLs, and fragmented enquiry routes — with the weakest experience on mobile, where most guests were arriving.",
  },
  {
    label: "The work",
    body: "The site and navigation were restructured around how guests actually decide: homepage, Menu, What's On, Functions, About, Gallery and Contact, each with a clear purpose and a single obvious next step. Content was rewritten, venue information corrected, mobile layout and navigation rebuilt, booking calls-to-action connected to OpenTable, and a distinct functions and group-enquiry journey created. Obsolete contact details and remaining Cony's material were removed, metadata, canonical tags, structured data and the sitemap were put in order, and the finished site was deployed on the venue's existing domain — then refined and maintained since.",
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
              <p className="mt-6 border-t border-border pt-3 text-xs md:text-sm leading-relaxed text-ink-soft">
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
                <dd className="mt-2 md:mt-0 measure text-sm md:text-base leading-relaxed text-ink-soft">
                  {part.body}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Dominant desktop view, deliberately offset, with the real mobile view overlapping the rule */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-9 lg:col-start-4 relative">
            <LasChicasFigure
              src={desktopHome.url}
              alt="Las Chicas homepage on desktop: full-width venue photography with the headline “Long nights, shared plates, stirred slowly.” and a Book a table action in the header."
              caption="Homepage — venue character first, with one unmistakable booking action held in the header and announcement bar."
              ratio="16 / 10"
              sizes="(min-width: 1024px) 72vw, 100vw"
            />

            {/* Mobile view: stacked on small screens, overlapping the desktop edge from lg up */}
            <div className="mt-8 max-w-[15rem] sm:max-w-[16rem] lg:absolute lg:-left-[7.5rem] lg:bottom-[-3.5rem] lg:mt-0 lg:w-[13.5rem] xl:w-[15rem] lg:max-w-none">
              <LasChicasFigure
                src={mobileHome.url}
                alt="Las Chicas homepage on a phone: condensed navigation, announcement bar and the same headline set for a narrow screen."
                alt-desc=""
                caption="Mobile — the layout guests actually use, rebuilt so information and the booking route survive a narrow screen."
                ratio="9 / 16"
                sizes="(min-width: 1024px) 15rem, 60vw"
                frameClassName="bg-ink"
              />
            </div>
          </div>
        </div>

        {/* Supporting evidence: two journeys, asymmetric */}
        <div className="mt-14 lg:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5 lg:col-start-2">
            <LasChicasFigure
              src={functionsShot.url}
              alt="Las Chicas functions page: headline “Group nights, planned with care.” with an enquire about functions and events action alongside standard bookings."
              caption="Functions — group and private-hire interest separated from standard bookings, with its own enquiry route."
              ratio="3 / 2"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
          <div className="lg:col-span-4 lg:col-start-8 lg:pt-16">
            <LasChicasFigure
              src={whatsOnShot.url}
              alt="Las Chicas What's On page: editorial heading “The week at Las Chicas.” beside a photograph of cocktails being made."
              caption="What's On — weekly events and seasonal moments given a place of their own, pointed at the same booking routes."
              ratio="3 / 2"
              sizes="(min-width: 1024px) 32vw, 100vw"
            />
          </div>
        </div>

        {/* Evidence boundary + draft testimonial */}
        <div className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-t border-border pt-6">
          <p className="lg:col-span-4 measure text-sm leading-relaxed text-ink-soft">
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
              <figcaption className="mt-4 border-t border-border pt-2 text-xs leading-relaxed text-ink-soft">
                Wording awaiting written confirmation from the venue owner.
                Attribution will be added once supplied.
              </figcaption>
            </figure>
          )}
        </div>
      </div>
    </section>
  );
};

export default LasChicasCaseStudy;
