import { Section } from "@/components/ui/section";

export function FinalCtaSection() {
  return (
    <Section id="contact" className="bg-slate-900" containerClassName="py-16 lg:py-20">
      <div className="rounded-2xl border border-white/15 bg-white/5 p-8 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-300">
          Ready to get started
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Align your workforce strategy with measurable skill outcomes.
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
          Book a focused consultation to map capability priorities, cohort design, and rollout
          plan for your teams.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#top" className="btn bg-white text-slate-900 hover:bg-slate-200">
            Request demo
          </a>
          <a
            href="mailto:enterprise@accredian.example"
            className="btn border border-white/30 bg-transparent text-white hover:border-white/60"
          >
            Contact enterprise team
          </a>
        </div>
      </div>
    </Section>
  );
}
