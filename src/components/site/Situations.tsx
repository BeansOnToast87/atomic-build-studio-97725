const situations = [
  {
    n: "01",
    title: "Opening or recently opened",
    body: "You need one clear place that tells people what the venue is and how to reach it.",
  },
  {
    n: "02",
    title: "Relaunching or rebranding",
    body: "The name, room or menu has changed and the information online no longer matches.",
  },
  {
    n: "03",
    title: "Moving into permanent premises",
    body: "You are settling into a site and need an address, hours and booking route stated properly.",
  },
  {
    n: "04",
    title: "Running mostly on social",
    body: "Your hours and menu live in stories and captions, and guests have to dig for them.",
  },
  {
    n: "05",
    title: "Information fragmented",
    body: "Menus, hours and contact details sit across several platforms and disagree with each other.",
  },
  {
    n: "06",
    title: "No first-party site",
    body: "Everything about you is published by someone else, on someone else's terms.",
  },
];

const Situations = () => {
  return (
    <section id="situations" aria-labelledby="situations-title" className="w-full border-b border-border">
      <div className="container mx-auto py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4 lg:sticky lg:top-8">
            <p className="eyebrow">Who this is for</p>
            <h2 id="situations-title" className="mt-4 font-display text-4xl md:text-5xl leading-[1.02] text-ink">
              This is probably for you if…
            </h2>
          </div>

          <ul className="lg:col-span-8 lg:border-l lg:border-border lg:pl-12">
            {situations.map((s, i) => (
              <li
                key={s.n}
                className={`grid grid-cols-[2.25rem_1fr] md:grid-cols-[3.5rem_1fr] gap-x-4 md:gap-x-8 py-5 md:py-6 ${
                  i === 0 ? "" : "border-t border-border"
                }`}
              >
                <span className="eyebrow pt-1">{s.n}</span>
                <div>
                  <h3 className="font-display text-2xl md:text-[1.75rem] leading-tight text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 measure text-sm md:text-base leading-relaxed text-ink-soft">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Situations;
