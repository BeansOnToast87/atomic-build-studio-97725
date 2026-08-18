const steps = [
  {
    n: "01",
    title: "Identify the journey",
    body: "We agree the one guest journey to improve, what action matters, what content is required and whether the current technical setup is suitable.",
  },
  {
    n: "02",
    title: "Design and build",
    body: "I restructure the experience, design it mobile-first and build the agreed scope using the approved content, proof and existing booking or enquiry routes.",
  },
  {
    n: "03",
    title: "Review and launch",
    body: "You give one consolidated round of feedback. I complete QA, demonstrate the agreed experience on staging or preview and prepare it for launch.",
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
            <li key={s.n} className="border-t border-border py-6 lg:pr-8">
              <span className="eyebrow">{s.n}</span>
              <h3 className="mt-3 font-display text-2xl leading-tight text-ink">{s.title}</h3>
              <p className="mt-2 text-sm md:text-base leading-relaxed text-ink-soft">{s.body}</p>
            </li>
          ))}
        </ol>

        <p className="mt-8 border-t border-border pt-4 measure text-sm text-ink-soft">
          The 7–10 working day target starts once the required access, content and assets are
          supplied.
        </p>
      </div>
    </section>
  );
};

export default ProcessSteps;
