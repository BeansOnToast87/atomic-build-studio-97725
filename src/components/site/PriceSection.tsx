import { CONTACT_MAILTO } from "@/lib/contact";

const scope = [
  {
    label: "One defined journey",
    body: "One agreed booking, enquiry, functions, event or other important hospitality journey.",
  },
  {
    label: "Focused experience",
    body: "Normally one primary page or experience, kept deliberately bounded rather than turning into a full-site redesign.",
  },
  {
    label: "Mobile-first design",
    body: "Designed around the mobile experience first, with a polished desktop version.",
  },
  {
    label: "Message & structure",
    body: "Information hierarchy and light copy restructuring using approved business facts and content.",
  },
  {
    label: "Trust & action",
    body: "Approved proof positioned where it helps, with one clear primary booking, enquiry or contact action.",
  },
  {
    label: "Implementation",
    body: "Built on an agreed, technically suitable setup, including connection to your existing booking or enquiry route where appropriate.",
  },
  {
    label: "Review & QA",
    body: "One consolidated revision round plus responsive and functional checks.",
  },
  {
    label: "Launch",
    body: "The agreed experience prepared for launch, with a short post-launch bug-fix window for build defects.",
  },
];

const PriceSection = () => {
  return (
    <section id="price" aria-labelledby="price-title" className="w-full border-b border-border bg-paper-deep">
      <div className="container mx-auto py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow">Focused Sprint</p>
            <h2 id="price-title" className="mt-4 font-display text-4xl md:text-5xl leading-[1.02] text-ink">
              Conversion Experience Sprint
            </h2>
            <p className="mt-6 border-t-2 border-ink pt-6 font-display text-[4.5rem] md:text-8xl leading-[0.9] text-ink">
              £1,500
            </p>
            <p className="mt-4 font-display text-2xl md:text-[1.75rem] leading-tight text-ink">
              One important guest journey, designed and built properly.
            </p>

            <dl className="mt-8 border-t border-border">
              <div className="border-b border-border py-4">
                <dt className="eyebrow">Payment</dt>
                <dd className="mt-2 text-base leading-relaxed text-ink">
                  £750 to book · £750 before launch, after the agreed experience
                  is demonstrated on staging or preview.
                </dd>
              </div>
              <div className="border-b border-border py-4">
                <dt className="eyebrow">Target</dt>
                <dd className="mt-2 text-base leading-relaxed text-ink">
                  7–10 working days after the required access, content, assets
                  and approvals are supplied.
                </dd>
                <dd className="mt-1 text-sm text-ink-soft">
                  Feedback or missing inputs may move the date.
                </dd>
              </div>
            </dl>

            <a
              href={CONTACT_MAILTO}
              className="tap mt-8 inline-flex w-full sm:w-auto items-center justify-center bg-ink px-9 text-paper text-base font-medium tracking-wide hover:bg-accent transition-colors"
            >
              Talk to Kevin about the journey
            </a>
            <p className="mt-5 measure text-sm leading-relaxed text-ink-soft">
              Not sure whether it&apos;s a Sprint? Tell me what you&apos;re trying to improve
              and I&apos;ll tell you plainly.
            </p>
            <p className="mt-6 measure text-base leading-relaxed text-ink-soft">
              Private hire, functions, events, group enquiries or another important part of
              your hospitality website — redesigned and implemented as a focused mobile-first
              experience with one clear primary action.
            </p>
          </div>

          <div className="lg:col-span-7 lg:border-l lg:border-border lg:pl-16">
            <p className="eyebrow">What the Sprint covers</p>
            <ul className="mt-4">
              {scope.map((item) => (
                <li key={item.label} className="border-t border-border py-4">
                  <p className="text-[0.8125rem] uppercase tracking-[0.14em] text-ink-soft">
                    {item.label}
                  </p>
                  <p className="mt-1.5 measure text-base leading-relaxed text-ink">{item.body}</p>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t-2 border-accent pt-5">
              <p className="eyebrow !text-accent">Technical fit</p>
              <p className="mt-2 measure text-base leading-relaxed text-ink">
                Technical fit is checked before the project is booked. If the existing platform
                or setup cannot support the agreed work safely within the Sprint, I&apos;ll tell
                you before taking payment and either propose a controlled alternative or scope
                the extra work separately.
              </p>
            </div>

            <p className="mt-8 border-t border-border pt-4 measure text-sm md:text-base text-ink-soft">
              Full venue rebuilds and larger hospitality website projects can be scoped
              separately.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PriceSection;
