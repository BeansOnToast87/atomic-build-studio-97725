import { useEffect } from 'react';
import { sfga } from '@/lib/analytics';
import Header from '@/components/Header';
import HeroOfferDropIn from '@/components/HeroOfferDropIn';
import DemoGallery from '@/components/DemoGallery';
import ProofScreenshots from '@/components/ProofScreenshots';
import Packages from '@/components/Packages';
import MiniFAQ from '@/components/MiniFAQ';
import TrustRow from '@/components/TrustRow';
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
        <HeroOfferDropIn />
        <DemoGallery />
        <ProofScreenshots />
        <Packages />
        <MiniFAQ />
        <TrustRow />
      </main>
      
      <StickyCTA />
      
      <footer role="contentinfo" className="w-full">
        <Footer />
      </footer>
    </>
  );
};

export default Index;
