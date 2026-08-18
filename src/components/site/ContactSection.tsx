import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/contact";

const ContactSection = () => {
  return (
    <section id="contact" aria-labelledby="contact-title" className="w-full bg-ink text-paper">
      <div className="container mx-auto py-16 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow !text-paper/60">Next step</p>
            <h2
              id="contact-title"
              className="mt-5 font-display text-[2.75rem] leading-[1.02] md:text-6xl lg:text-7xl"
            >
              Tell me about the journey
              <br />
              <span className="italic">you&apos;d like to improve.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:border-l lg:border-paper/25 lg:pl-12">
            <p className="measure text-base leading-relaxed text-paper/80">
              Tell me about the venue, what guests currently use, and the booking, enquiry or
              experience you want to make clearer. I&apos;ll tell you plainly whether a focused
              Sprint is a fit.
            </p>
            <a
              href={CONTACT_MAILTO}
              className="tap mt-8 inline-flex w-full items-center justify-center border-b-2 border-accent bg-paper px-9 py-1 text-ink text-base font-medium tracking-wide hover:bg-accent hover:text-paper hover:border-paper transition-colors"
            >
              Start a conversation
            </a>
            <p className="mt-5 border-t border-paper/25 pt-4 text-sm text-paper/70">
              {CONTACT_EMAIL}
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
