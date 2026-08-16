import { CONTACT_MAILTO } from "@/lib/contact";

const included = [
  "One focused page, designed around your content",
  "Copy drafted and edited with you",
  "Menu set on the page or linked to where it lives",
  "Opening hours, location and directions",
  "Booking, delivery and order routes connected",
  "Contact details for enquiries and private hire",
  "Built to read well on a phone first",
  "Live on your own domain at handover",
];

const notIncluded = [
  "Large multi-page or bespoke websites",
  "Replacing your booking or ordering platforms",
  "Ongoing marketing or content production",
  "Photography shoots (existing images can be used)",
];

const PriceSection = () => {
  return (
    <section id="price" aria-labelledby="price-title" className="w-full border-b border-border bg-paper-deep">
      <div className="container mx-auto py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow">Scope and price</p>
            <h2 id="price-title" className="mt-4 font-display text-4xl md:text-5xl leading-[1.02] text-ink">
              Focused One-Page Hospitality Website
            </h2>
            <p className="mt-8 border-t border-border pt-6 font-display text-6xl md:text-7xl leading-none text-ink">
              From £995
            </p>
            <p className="mt-3 text-sm text-ink-soft">
              Priced in GBP. Final price depends on how much content needs writing and how
              many routes are connected.
            </p>
            <a
              href={CONTACT_MAILTO}
              className="tap mt-8 inline-flex items-center justify-center bg-ink px-7 text-paper text-sm font-medium tracking-wide hover:bg-accent transition-colors"
            >
              Start a conversation
            </a>
          </div>

          <div className="lg:col-span-7 lg:border-l lg:border-border lg:pl-16">
            <p className="eyebrow">Included</p>
            <ul className="mt-4">
              {included.map((item) => (
                <li key={item} className="border-t border-border py-3 text-base text-ink">
                  {item}
                </li>
              ))}
            </ul>

            <p className="eyebrow mt-10">Not included</p>
            <ul className="mt-4">
              {notIncluded.map((item) => (
                <li key={item} className="border-t border-border py-3 text-base text-ink-soft">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
