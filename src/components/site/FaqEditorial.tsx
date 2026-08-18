const faqs = [
  {
    q: "Is this a full website redesign?",
    a: "Not usually. The Sprint focuses on one important guest journey — for example private hire, functions, events, group enquiries or another booking or enquiry experience. A larger website project can be scoped separately if that's what the business actually needs.",
  },
  {
    q: "What kind of hospitality journey is suitable?",
    a: "The best fit is a journey where a guest has clear intent but the current route is fragmented, generic, difficult to use or harder to understand than it needs to be. That might be functions, private hire, events, a promoted experience, group enquiries or another important part of the website.",
  },
  {
    q: "What does £1,500 include?",
    a: "One defined experience, mobile-first design, information and light copy restructuring from approved content, one clear primary action, implementation on a suitable setup, one consolidated revision round, responsive and functional QA, and launch preparation.",
  },
  {
    q: "Can you work with my current booking or enquiry platform?",
    a: "Usually, where the existing platform provides a practical route to connect or link into it. The Sprint does not replace booking systems, POS platforms or other specialist software.",
  },
  {
    q: "What do you need from me?",
    a: "Usually access to the relevant website or platform, current business information and content, approved images and proof where needed, the existing booking or enquiry route, and timely consolidated feedback.",
  },
  {
    q: "What if my existing website is technically unsuitable?",
    a: "I check technical fit before the project is booked. If the current platform or access makes the agreed work unsafe or unrealistic within the fixed scope, I'll tell you before taking payment and either propose a controlled alternative or scope the extra work separately.",
  },
  {
    q: "Do you guarantee more bookings or revenue?",
    a: "No. The Sprint improves an agreed guest journey and its implementation. It does not guarantee bookings, enquiries, revenue, conversion uplift or commercial performance.",
  },
];

const FaqEditorial = () => {
  return (
    <section id="faq" aria-labelledby="faq-title" className="w-full border-b border-border">
      <div className="container mx-auto py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
            <p className="eyebrow">Questions</p>
            <h2 id="faq-title" className="mt-4 font-display text-4xl md:text-5xl leading-[1.02] text-ink">
              Plainly answered.
            </h2>
            </div>
          </div>


          <div className="lg:col-span-8">
            {faqs.map((f, i) => (
              <details key={f.q} className={`group py-5 ${i === 0 ? "border-t border-border" : "border-t border-border"}`}>
                <summary className="tap flex cursor-pointer items-baseline justify-between gap-6 list-none">
                  <h3 className="font-display text-2xl md:text-[1.75rem] leading-tight text-ink">
                    {f.q}
                  </h3>
                  <span className="shrink-0 font-display text-2xl text-accent transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 measure text-sm md:text-base leading-relaxed text-ink-soft">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqEditorial;
