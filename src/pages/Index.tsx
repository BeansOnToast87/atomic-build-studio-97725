import { useEffect } from 'react';
import { sfga } from '@/lib/analytics';
import Masthead from '@/components/site/Masthead';
import HeroEditorial from '@/components/site/HeroEditorial';
import Situations from '@/components/site/Situations';
import LasChicasCaseStudy from '@/components/site/LasChicasCaseStudy';
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

        <LasChicasCaseStudy />


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
