import { useEffect } from 'react';
import { sfga } from '@/lib/analytics';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BrandCodeChips from '@/components/BrandCodeChips';
import ValueStack from '@/components/ValueStack';
import PricingTierCards from '@/components/PricingTierCards';
import Gallery from '@/components/Gallery';
import ProofDashboardEmbed from '@/components/ProofDashboardEmbed';
import RadicalTransparency from '@/components/RadicalTransparency';
import MiniFAQ from '@/components/MiniFAQ';
import LeadMagnetModal from '@/components/LeadMagnetModal';
import StickyCTA from '@/components/StickyCTA';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Initialize analytics helper
    sfga.flushQueue();
  }, []);

  return (
    <>
      <Header />
      
      <main role="main" className="min-h-screen">
        <Hero />
        <BrandCodeChips />
        <ValueStack />
        <PricingTierCards />
        <Gallery />
        <ProofDashboardEmbed />
        <RadicalTransparency />
        <MiniFAQ />
      </main>
      
      <LeadMagnetModal />
      <StickyCTA />
      
      <footer role="contentinfo" className="w-full">
        <Footer />
      </footer>
    </>
  );
};

export default Index;
