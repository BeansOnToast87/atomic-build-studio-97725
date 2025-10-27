const RadicalTransparency = () => {
  const pilotCounterTarget = 10;

  return (
    <section 
      className="w-full py-16 md:py-20 bg-muted/30" 
      data-testid="transparency"
      id="transparency"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Radical Transparency
        </h2>
        
        <div className="bg-card border border-border rounded-lg p-6 md:p-8">
          <div className="mb-6 text-center">
            <p className="text-sm text-muted-foreground mb-2">
              Pilot pricing for first <strong>{pilotCounterTarget}</strong> builds
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full font-semibold">
              <span className="text-2xl">{pilotCounterTarget}</span>
              <span className="text-sm">slots available</span>
            </div>
          </div>

          <div className="prose prose-sm max-w-none">
            <p className="text-base leading-relaxed text-foreground">
              We are a new studio. We build a working preview before you accept. You only keep it if you like it. 
              "Vibe coding" means we use simple blocks and ship fast.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RadicalTransparency;
