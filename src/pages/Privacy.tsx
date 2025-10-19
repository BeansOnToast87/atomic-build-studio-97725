const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none space-y-6">
          <p className="text-muted-foreground">
            <strong>Last Updated:</strong> October 19, 2025
          </p>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Information We Collect</h2>
            <p className="text-muted-foreground">
              We collect minimal information necessary to provide our services: contact details you provide when booking audits, and anonymous analytics data via Google Analytics 4.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Analytics & Cookies</h2>
            <p className="text-muted-foreground">
              We use Google Analytics 4 to understand how visitors interact with our site. This includes anonymous usage data, page views, and conversion events. You can opt out via browser settings.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">How We Use Your Data</h2>
            <p className="text-muted-foreground">
              Contact information is used solely to communicate about your audit and project. We never sell or share your data with third parties for marketing purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Data Retention</h2>
            <p className="text-muted-foreground">
              We retain project-related communications for 12 months. Analytics data is retained per Google's standard policies (14 months).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Your Rights</h2>
            <p className="text-muted-foreground">
              You have the right to request access, correction, or deletion of your personal data. Contact us at hello@prooflaunchstudio.com.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p className="text-muted-foreground">
              For privacy-related questions: <a href="mailto:hello@prooflaunchstudio.com" className="text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded">hello@prooflaunchstudio.com</a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <a 
            href="/" 
            className="text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
          >
            ← Back to home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
