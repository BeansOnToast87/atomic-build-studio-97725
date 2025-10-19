import { Gauge, Activity, Globe } from 'lucide-react';

const badges = [
  {
    icon: Gauge,
    title: 'Lighthouse ≥85 / SEO ≥90',
    subtitle: '(screenshots included)',
  },
  {
    icon: Activity,
    title: 'GA4 Events Wired',
    subtitle: '(DebugView screenshots)',
  },
  {
    icon: Globe,
    title: 'Remote-first • UK/US clients',
    subtitle: null,
  },
];

const TrustRow = () => {
  return (
    <section className="w-full py-12 md:py-16 px-4 bg-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6">
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.title}
                className="text-center flex flex-col items-center"
              >
                <Icon className="w-8 h-8 text-primary mb-3" aria-hidden="true" />
                <h3 className="font-semibold mb-1">{badge.title}</h3>
                {badge.subtitle && (
                  <p className="text-sm text-muted-foreground">{badge.subtitle}</p>
                )}
              </div>
            );
          })}
        </div>
        
        <p className="text-center text-sm text-muted-foreground">
          Manchester-born, AU-based. Remote ops; local results.
        </p>
      </div>
    </section>
  );
};

export default TrustRow;
