const faqs = [
  {
    q: "Why only one page?",
    a: "Because that is usually all an independent venue needs. One page keeps the important information in one place, keeps it quick to load, and keeps it realistic for you to keep accurate.",
  },
  {
    q: "Will it replace my booking system?",
    a: "No. Whatever you already use for bookings, delivery or orders stays exactly as it is — the page connects to it clearly so guests can find it.",
  },
  {
    q: "What if my menu changes often?",
    a: "We can either set the menu on the page and update it, or link to wherever you already keep it current. That decision is made when the scope is agreed.",
  },
  {
    q: "Do I need photography?",
    a: "Not necessarily. The page is built to work on typography and structure. If you have good images of the room, the food or the signage, they can be used.",
  },
  {
    q: "Who writes the words?",
    a: "They are drafted for you and then edited together, so the page sounds like your venue rather than a template.",
  },
  {
    q: "What happens after handover?",
    a: "The site is live on your domain and you know how information gets updated. Anything beyond that is agreed separately.",
  },
];

const FaqEditorial = () => {
  return (
    <section id="faq" aria-labelledby="faq-title" className="w-full border-b border-border">
      <div className="container mx-auto py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow">Questions</p>
            <h2 id="faq-title" className="mt-4 font-display text-4xl md:text-5xl leading-[1.02] text-ink">
              Plainly answered.
            </h2>
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
