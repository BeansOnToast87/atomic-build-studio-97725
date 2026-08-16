const spec = [
  { label: "What the venue is", body: "A short, well-written introduction in your own voice — the room, the food, the intent." },
  { label: "Menu or menu link", body: "Set legibly on the page, or linked cleanly to wherever your menu already lives." },
  { label: "Opening hours", body: "Stated plainly, including the days you are closed, so nobody has to guess." },
  { label: "Location", body: "Address, how to find the door, and a map link that opens in the guest's own app." },
  { label: "Booking or order routes", body: "Your existing booking, delivery and ordering platforms connected clearly — not replaced." },
  { label: "Contact details", body: "One obvious way to reach you for enquiries, press and private hire." },
];

const ScopeSpec = () => {
  return (
    <section id="what-you-get" aria-labelledby="scope-title" className="w-full border-b border-border bg-paper-deep">
      <div className="container mx-auto py-14 md:py-20">
        <div className="max-w-3xl">
          <p className="eyebrow">The product</p>
          <h2 id="scope-title" className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.02] text-ink">
            One focused page, carrying everything a guest actually looks for.
          </h2>
        </div>

        <dl className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {spec.map((item, i) => (
            <div
              key={item.label}
              className={`border-t border-border py-5 md:py-6 ${
                i >= spec.length - 1 ? "md:border-b-0" : ""
              }`}
            >
              <dt className="font-display text-xl md:text-2xl text-ink">{item.label}</dt>
              <dd className="mt-2 measure text-sm md:text-base leading-relaxed text-ink-soft">
                {item.body}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 border-t border-border pt-6 measure text-sm md:text-base leading-relaxed text-ink-soft">
          It is deliberately focused rather than a large bespoke website. Everything on the
          page is there because a guest, a supplier or a journalist would look for it.
        </p>
      </div>
    </section>
  );
};

export default ScopeSpec;
