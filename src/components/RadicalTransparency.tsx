const RadicalTransparency = () => {
  return (
    <section 
      className="w-full py-16 md:py-20 bg-muted/30" 
      data-testid="transparency"
      id="transparency"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          How We Work
        </h2>
        
        <div className="bg-card border border-border rounded-lg p-6 md:p-8">
          <p className="text-base md:text-lg leading-relaxed text-foreground text-center">
            We are a new studio. We build a working preview before you accept. You only keep it if you like it. "Vibe coding" means we use simple blocks and ship fast.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RadicalTransparency;
