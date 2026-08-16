import { useEffect } from 'react';
import { sfga } from '@/lib/analytics';
import Masthead from '@/components/site/Masthead';
import HeroEditorial from '@/components/site/HeroEditorial';
import Situations from '@/components/site/Situations';
import ScopeSpec from '@/components/site/ScopeSpec';
import ExperienceSection from '@/components/site/ExperienceSection';
import ConceptDemo from '@/components/site/ConceptDemo';
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
        <Situations />
        <ScopeSpec />
        <ExperienceSection />
        <ConceptDemo />
        <ProcessSteps />
        <PriceSection />
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
