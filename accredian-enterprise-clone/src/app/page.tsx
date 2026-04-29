import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Section } from "@/components/ui/section";

export default function Home() {
  return (
    <>
      <div id="top" />
      <SiteHeader />
      <main>
        <Section className="bg-gradient-to-b from-slate-50 to-white" containerClassName="py-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow">Enterprise learning platform</p>
              <h1 className="heading-display mt-5">Hero section placeholder</h1>
              <p className="body-lg mt-6 max-w-2xl">
                This scaffold is prepared for a polished enterprise landing page with reusable
                sections, clean hierarchy, and conversion-focused structure.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#solutions" className="btn btn-primary">
                  Explore solutions
                </a>
                <a href="#contact" className="btn btn-secondary">
                  Talk to team
                </a>
              </div>
            </div>
            <div className="surface-card lg:col-span-5">
              <p className="text-sm font-medium text-slate-600">Hero media placeholder</p>
              <div className="mt-4 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-sm text-slate-500">
                Product visual / KPI module slot
              </div>
            </div>
          </div>
        </Section>

        <Section id="solutions" className="border-y border-slate-200 bg-white" containerClassName="py-16 lg:py-20">
          <div className="section-shell">
            <p className="eyebrow">Solutions</p>
            <h2 className="heading-section mt-3">Section anchor placeholder</h2>
            <p className="body-md mt-4 max-w-2xl">
              Reserved for capability tracks, program cards, and enterprise value messaging.
            </p>
          </div>
        </Section>

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
