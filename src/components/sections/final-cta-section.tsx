import { Section } from "@/components/ui/section";
import { LeadCaptureForm } from "@/components/lead-capture-form";

export function FinalCtaSection() {
  return (
    <Section id="contact" className="bg-slate-900" containerClassName="py-16 lg:py-20">
      <div className="grid gap-8 rounded-2xl border border-white/15 bg-white/5 p-8 sm:p-10 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-300">
            Ready to get started
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Plan your enterprise upskilling roadmap with confidence.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Share your team context and goals. We will recommend a practical rollout model with
            milestones, governance, and measurable outcomes.
          </p>
          <p className="mt-6 text-sm text-slate-300">Response time: within 1 business day.</p>
          <a
            href="mailto:enterprise@accredian.example"
            className="mt-4 inline-flex rounded-sm text-sm font-medium text-indigo-200 transition hover:text-indigo-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            Prefer email? enterprise@accredian.example
          </a>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm lg:col-span-7">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-slate-900">Book a consultation</h3>
            <p className="mt-1 text-sm text-slate-600">
              Tell us what your teams need and we will get back with a tailored plan.
            </p>
          </div>
          <LeadCaptureForm />
        </div>
      </div>
    </Section>
  );
}
