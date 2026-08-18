const situations = [
  {
    n: "01",
    title: "Private hire & functions",
    body: "Help guests understand the offer, relevant details and enquiry route without unnecessary hunting.",
  },
  {
    n: "02",
    title: "Bookings",
    body: "Make the route from venue interest to the correct booking action clear.",
  },
  {
    n: "03",
    title: "Relaunches & rebrands",
    body: "Bring the new identity, current information and important guest journeys together while removing outdated digital remnants.",
  },
  {
    n: "04",
    title: "Promoted experiences",
    body: "Give a specific event, package or promotion a focused route rather than sending interested guests into generic venue information.",
  },
  {
    n: "05",
    title: "Venue information",
    body: "Make menus, opening hours, location, booking or order routes and other guest-critical information easier to understand and act on.",
  },
];

const Situations = () => {
  return (
    <section id="what-i-improve" aria-labelledby="situations-title" className="w-full border-b border-border">
      <div className="container mx-auto py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-8">
            <p className="eyebrow">What I improve</p>
            <h2 id="situations-title" className="mt-4 font-display text-4xl md:text-5xl leading-[1.02] text-ink">
              The website usually isn&apos;t the problem. The journey is.
            </h2>
            </div>
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
