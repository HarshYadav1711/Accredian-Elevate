import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { OfferingsSection } from "@/components/sections/offerings-section";
import { OutcomesTestimonialsSection } from "@/components/sections/outcomes-testimonials-section";
import { ProcessSection } from "@/components/sections/process-section";
import { TrustRow } from "@/components/sections/trust-row";
import { WhyAccredianSection } from "@/components/sections/why-accredian-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <div id="top" />
      <SiteHeader />
      <main id="main-content">
        {/* Compose sections in top-to-bottom narrative order to keep scanning predictable. */}
        <HeroSection />
        <TrustRow />
        <WhyAccredianSection />
        <OfferingsSection />
        <ProcessSection />
        <OutcomesTestimonialsSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
