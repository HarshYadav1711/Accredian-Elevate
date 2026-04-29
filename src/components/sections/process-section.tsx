import { Section } from "@/components/ui/section";
import { processSteps } from "@/data/top-half-content";

export function ProcessSection() {
  return (
    <Section id="how-it-works" className="bg-slate-50" containerClassName="py-16 lg:py-20">
      <div>
        <p className="eyebrow">How It Works</p>
        <h2 className="heading-section mt-3 max-w-2xl">
          A clear operating model for enterprise capability transformation
        </h2>
        <p className="body-md mt-4 max-w-2xl">
          Keep alignment across leaders, managers, and learners through a practical four-step
          execution framework.
        </p>
      </div>

      <ol className="mt-10 grid gap-4 md:grid-cols-2">
        {processSteps.map((step, index) => (
          <li key={step.title} className="surface-card">
            <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
              Step {index + 1}
            </p>
            <h3 className="mt-2 text-lg font-semibold tracking-tight text-slate-900">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
