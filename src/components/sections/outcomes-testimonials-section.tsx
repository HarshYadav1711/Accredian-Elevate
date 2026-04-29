import { Section } from "@/components/ui/section";
import { outcomeStats, testimonials } from "@/data/top-half-content";

export function OutcomesTestimonialsSection() {
  return (
    <Section id="outcomes" className="bg-white" containerClassName="py-16 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <p className="eyebrow">Outcomes</p>
          <h2 className="heading-section mt-3">
            Enterprise-ready outcomes backed by measurable execution
          </h2>
          <p className="body-md mt-4">
            Move from course activity to capability impact with transparent milestones and
            stakeholder-friendly reporting.
          </p>
          <dl className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {outcomeStats.map((item) => (
              <div key={item.label} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <dt className="text-xs uppercase tracking-wide text-slate-500">{item.label}</dt>
                <dd className="mt-2 text-2xl font-semibold text-slate-900">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div id="testimonials" className="lg:col-span-7">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-600">
            What enterprise teams say
          </p>
          <div className="mt-4 grid gap-4">
            {testimonials.map((item) => (
              <figure key={item.author} className="surface-card">
                <blockquote className="text-sm leading-7 text-slate-700">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm">
                  <span className="font-semibold text-slate-900">{item.author}</span>
                  <span className="text-slate-500"> - {item.company}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
