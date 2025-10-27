const BrandCodeChips = () => {
  const chips = [
    "WhatsApp first. Leads go to your phone.",
    "Tracking on. We count calls, clicks, and chats.",
    "Built before you accept. See it working first."
  ];

  return (
    <section 
      className="w-full py-6 bg-muted/30" 
      data-testid="brand-codes"
      id="brand-codes"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <ul className="space-y-3">
          {chips.map((chip) => (
            <li
              key={chip}
              className="text-center text-base md:text-lg font-medium text-foreground"
            >
              {chip}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BrandCodeChips;
