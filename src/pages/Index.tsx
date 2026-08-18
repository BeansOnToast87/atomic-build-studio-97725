import { useEffect } from 'react';
import { sfga } from '@/lib/analytics';
import Masthead from '@/components/site/Masthead';
import HeroEditorial from '@/components/site/HeroEditorial';
import Situations from '@/components/site/Situations';
import ExperienceSection from '@/components/site/ExperienceSection';
import ProcessSteps from '@/components/site/ProcessSteps';
import PriceSection from '@/components/site/PriceSection';
import FaqEditorial from '@/components/site/FaqEditorial';
import ContactSection from '@/components/site/ContactSection';
import SiteFooter from '@/components/site/SiteFooter';
import MobileContactBar from '@/components/site/MobileContactBar';
import ConsentBar from '@/components/ConsentBar';

const Index = () => {
  useEffect(() => {
    sfga.flushQueue();
  }, []);

  return (
    <>
      <Masthead />

      <main role="main">
        <HeroEditorial />

        {/* Anchor target for the hero CTA. Full case-study composition lands in Pass 2. */}
        <section id="work" aria-labelledby="work-title" className="w-full border-b border-border bg-paper-deep">
          <div className="container mx-auto py-10 md:py-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
              <div className="lg:col-span-4">
                <p className="eyebrow">Selected work</p>
                <h2 id="work-title" className="mt-4 font-display text-3xl md:text-4xl leading-[1.05] text-ink">
                  Las Chicas, Cronulla
                </h2>
              </div>
              <div className="lg:col-span-8 lg:border-l lg:border-border lg:pl-12 flex items-end">
                <p className="border-t border-border pt-5 measure text-sm md:text-base leading-relaxed text-ink-soft">
                  Staging note — real project imagery and the full case-study composition are
                  added in the next build pass.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Situations />
        <ExperienceSection />
        <PriceSection />
        <ProcessSteps />
        <FaqEditorial />
        <ContactSection />
      </main>

      <footer role="contentinfo" className="w-full">
        <SiteFooter />
      </footer>

      <MobileContactBar />
      <ConsentBar />
    </>
  );
};

export default Index;
