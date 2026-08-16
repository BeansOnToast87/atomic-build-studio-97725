const steps = [
  {
    n: "01",
    title: "A conversation",
    body: "You describe the venue, where your information currently lives and what guests keep asking for.",
  },
  {
    n: "02",
    title: "Scope agreed",
    body: "We settle exactly what the page will carry and which existing platforms it connects to, in writing.",
  },
  {
    n: "03",
    title: "Words and structure",
    body: "Your copy is drafted and ordered so the page reads as your venue rather than as a template.",
  },
  {
    n: "04",
    title: "Design and build",
    body: "The page is designed around your content, then built to be quick, legible and easy to read on a phone.",
  },
  {
    n: "05",
    title: "Review",
    body: "You read it, correct it and confirm the details before anything goes live.",
  },
  {
    n: "06",
    title: "Handover",
    body: "The site goes live on your domain, and you know how the information gets updated.",
  },
];

const ProcessSteps = () => {
  return (
    <section id="process" aria-labelledby="process-title" className="w-full border-b border-border">
      <div className="container mx-auto py-14 md:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">How it works</p>
          <h2 id="process-title" className="mt-4 font-display text-4xl md:text-5xl leading-[1.02] text-ink">
            A short, ordered process.
          </h2>
        </div>

        <ol className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12">
          {steps.map((s) => (
            <li
              key={s.n}
              className="border-t border-border py-6 lg:pr-8"
            >
              <span className="eyebrow">{s.n}</span>
              <h3 className="mt-3 font-display text-2xl leading-tight text-ink">{s.title}</h3>
              <p className="mt-2 text-sm md:text-base leading-relaxed text-ink-soft">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ProcessSteps;
