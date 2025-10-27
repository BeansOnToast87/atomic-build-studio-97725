import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { sfga } from '@/lib/analytics';
const Gallery = () => {
  const demos = [{
    title: "Pressure Washing Demo",
    url: "https://demo1.example.com"
  }, {
    title: "Mobile Detailing Demo",
    url: "https://demo2.example.com"
  }, {
    title: "Trades Template",
    url: "https://demo3.example.com"
  }];
  const handleDemoClick = (title: string, url: string) => {
    sfga.fire('demo_view', {
      demo_title: title,
      demo_url: url,
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname
    });
  };
  return <section className="w-full py-16 md:py-20 bg-background" data-testid="gallery" id="gallery">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-500">
          Live Demos & Proof
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          See real builds in action. When client results arrive, we'll add "X leads in 14 days" snapshots.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {demos.map(demo => <article key={demo.title} className="bg-card border border-border rounded-lg p-6 flex flex-col">
              <h3 className="text-lg font-bold mb-4">{demo.title}</h3>
              <Button variant="outline" size="lg" onClick={() => handleDemoClick(demo.title, demo.url)} className="min-h-[44px] w-full" asChild>
                <a href={demo.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${demo.title}`}>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Demo
                </a>
              </Button>
            </article>)}
        </div>

        {/* Proof Placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-muted/50 border-2 border-dashed border-border rounded-lg p-8 flex flex-col items-center justify-center min-h-[200px]">
            <p className="text-muted-foreground text-center font-medium">
              GA4 DebugView Screenshot
            </p>
            <p className="text-sm text-muted-foreground text-center mt-2">
              (Client results coming soon)
            </p>
          </div>
          <div className="bg-muted/50 border-2 border-dashed border-border rounded-lg p-8 flex flex-col items-center justify-center min-h-[200px]">
            <p className="text-muted-foreground text-center font-medium">
              Lighthouse ≥90 Report
            </p>
            <p className="text-sm text-muted-foreground text-center mt-2">
              (Client results coming soon)
            </p>
          </div>
        </div>

        {/* Proof GIFs Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-slate-500">
            Proof GIFs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 flex flex-col items-center min-h-[180px]">
              <div className="w-full aspect-video bg-muted/50 rounded mb-3 flex items-center justify-center">
                <p className="text-xs text-muted-foreground">debugview_firing.gif</p>
              </div>
              <p className="text-sm text-center text-muted-foreground">
                Live tracking: WhatsApp + pricing clicks are counted.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 flex flex-col items-center min-h-[180px]">
              <div className="w-full aspect-video bg-muted/50 rounded mb-3 flex items-center justify-center">
                <p className="text-xs text-muted-foreground">lighthouse_mobile_90.gif</p>
              </div>
              <p className="text-sm text-center text-muted-foreground">
                Mobile speed 90+ so more visitors stick.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 flex flex-col items-center min-h-[180px]">
              <div className="w-full aspect-video bg-muted/50 rounded mb-3 flex items-center justify-center">
                <p className="text-xs text-muted-foreground">whatsapp_ping.gif</p>
              </div>
              <p className="text-sm text-center text-muted-foreground">
                Leads go straight to your phone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Gallery;