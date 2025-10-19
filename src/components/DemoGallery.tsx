import { Droplets, Car, Hammer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { sfga } from '@/lib/analytics';

const demos = [
  {
    title: 'Pressure Washing Demo',
    outcome: 'WhatsApp CTA • GA4 tracked',
    icon: Droplets,
    url: 'https://demo1.prooflaunchstudio.com',
  },
  {
    title: 'Mobile Detailing Demo',
    outcome: 'Call/WhatsApp sticky footer',
    icon: Car,
    url: 'https://demo2.prooflaunchstudio.com',
  },
  {
    title: 'Trades Template',
    outcome: 'Audit-first layout',
    icon: Hammer,
    url: 'https://demo3.prooflaunchstudio.com',
  },
];

const DemoGallery = () => {
  const handleViewDemo = (demoUrl: string) => {
    sfga.fire('audit_click', {
      event_category: 'micro',
      dest: 'demo_view',
      page_location: window.location.href,
    });
    window.open(demoUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="w-full py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
          See Our Work
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {demos.map((demo) => {
            const Icon = demo.icon;
            return (
              <article
                key={demo.title}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <Icon className="w-12 h-12 text-primary mb-4" aria-hidden="true" />
                    <h3 className="text-xl font-semibold mb-2">{demo.title}</h3>
                    <p className="text-muted-foreground text-sm">{demo.outcome}</p>
                  </div>
                  
                  <div className="mt-auto space-y-3">
                    <Button
                      onClick={() => handleViewDemo(demo.url)}
                      className="w-full min-h-[44px]"
                      aria-label={`View ${demo.title}`}
                    >
                      View demo
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full min-h-[44px]"
                      aria-label={`See proof for ${demo.title}`}
                    >
                      See proof
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DemoGallery;
