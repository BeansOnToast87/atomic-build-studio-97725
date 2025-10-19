import { useEffect } from 'react';
import { sfga } from '@/lib/analytics';
import Hero from '@/components/Hero';
import Offer from '@/components/Offer';

const Index = () => {
  useEffect(() => {
    // Initialize analytics helper
    sfga.flushQueue();
  }, []);

  return (
    <>
      <header role="banner" className="w-full">
        {/* Header content will be added in subsequent blocks */}
      </header>
      
      <main role="main" className="min-h-screen">
        <Hero />
        <Offer />
      </main>
      
      <footer role="contentinfo" className="w-full">
        {/* Footer content will be added in subsequent blocks */}
      </footer>
    </>
  );
};

export default Index;
