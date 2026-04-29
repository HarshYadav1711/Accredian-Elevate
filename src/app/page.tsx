import { HeroSection } from "@/components/sections/hero-section";
import { OfferingsSection } from "@/components/sections/offerings-section";
import { TrustRow } from "@/components/sections/trust-row";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Section } from "@/components/ui/section";

export default function Home() {
  return (
    <>
      <div id="top" />
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustRow />
        <OfferingsSection />

        <Section id="outcomes" className="bg-slate-50" containerClassName="py-16 lg:py-20">
          <div className="section-shell">
            <p className="eyebrow">Outcomes</p>
            <h2 className="heading-section mt-3">Section anchor placeholder</h2>
            <p className="body-md mt-4 max-w-2xl">
              Reserved for proof points, impact statistics, and trust-building enterprise outcomes.
            </p>
          </div>
        </Section>

        <Section id="contact" className="bg-white" containerClassName="py-16 lg:py-20">
          <div className="section-shell">
            <p className="eyebrow">Lead capture</p>
            <h2 className="heading-section mt-3">Contact section placeholder</h2>
            <p className="body-md mt-4 max-w-2xl">
              Prepared for the bonus lead form. The API route scaffold is already available in
              <code> /api/leads</code>.
            </p>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
