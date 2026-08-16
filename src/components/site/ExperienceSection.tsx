const ExperienceSection = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="w-full bg-ink text-paper"
    >
      <div className="container mx-auto py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow !text-paper/60">Who builds it</p>
            <div className="mt-6 border-t border-paper/25 pt-6">
              <p className="font-display text-6xl md:text-7xl leading-none">20 years</p>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-paper/60">
                in hospitality
              </p>
            </div>
            <div className="mt-6 border-t border-paper/25 pt-6">
              <p className="font-display text-6xl md:text-7xl leading-none">15 years</p>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-paper/60">
                in management
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:border-l lg:border-paper/25 lg:pl-16">
            <h2
              id="experience-title"
              className="font-display text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.1]"
            >
              Built by someone who has worked services, not just websites.
            </h2>
            <div className="mt-6 space-y-4 measure text-base leading-relaxed text-paper/80">
              <p>
                Two decades on the floor and in management means the questions a venue gets
                asked all day are familiar ones: are you open, what is on, where are you,
                can we get a table, can we bring twelve people on a Thursday.
              </p>
              <p>
                That is what the page is organised around — the information guests ask for,
                written the way an operator would answer it, and kept simple enough that you
                can keep it accurate during a busy week.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
