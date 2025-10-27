const BrandCodeChips = () => {
  const chips = [
    "WhatsApp first. Leads go to your phone.",
    "Tracking on. We count calls, clicks, and chats.",
    "Built before you accept. See it working first.",
    "More jobs this week.",
    "Fewer no-shows.",
    "Faster replies."
  ];

  return (
    <section 
      className="w-full py-6 bg-muted/30" 
      data-testid="brand-codes"
      id="brand-codes"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-3">
          {chips.map((chip) => (
            <span
              key={chip}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandCodeChips;
