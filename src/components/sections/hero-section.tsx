import { Section } from "@/components/ui/section";

export function HeroSection() {
  return (
    <Section className="bg-gradient-to-b from-slate-50 to-white" containerClassName="py-20 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <p className="eyebrow">Enterprise Workforce Transformation</p>
          <h1 className="heading-display mt-5">
            Close critical skill gaps and improve role readiness across teams.
          </h1>
          <p className="body-lg mt-6 max-w-2xl">
            Launch role-specific learning programs with clear milestones, manager accountability,
            and reporting that shows business impact, not just course activity.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#solutions" className="btn btn-primary">
              Explore enterprise offerings
            </a>
            <a href="#contact" className="btn btn-secondary">
              Speak with our team
            </a>
          </div>
        </div>
        <div className="surface-card lg:col-span-5">
          <p className="text-sm font-medium text-slate-700">Delivery performance snapshot</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs text-slate-500">Completion quality</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">82%</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs text-slate-500">Role readiness lift</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">3.4x</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs text-slate-500">Active cohorts</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">120+</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs text-slate-500">Enterprise partners</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">250+</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
