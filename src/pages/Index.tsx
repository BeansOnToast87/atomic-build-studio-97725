import { useEffect } from 'react';
import { sfga } from '@/lib/analytics';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Offer from '@/components/Offer';
import DemoGallery from '@/components/DemoGallery';
import Packages from '@/components/Packages';
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
        <Hero />
        <Offer />
        <DemoGallery />
        <Packages />
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
