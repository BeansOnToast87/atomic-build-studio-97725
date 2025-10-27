const BrandCodeChips = () => {
  const chips = ["7-Day Sprint", "Proof or We Pay", "WhatsApp-First"];

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
