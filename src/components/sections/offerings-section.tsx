import { Section } from "@/components/ui/section";
import { offerings } from "@/data/top-half-content";

export function OfferingsSection() {
  return (
    <Section id="solutions" className="bg-white" containerClassName="py-16 lg:py-20">
      <div>
        <p className="eyebrow">Offerings</p>
        <h2 className="heading-section mt-3 max-w-2xl">
          Service modules built for enterprise rollout and measurable results
        </h2>
        <p className="body-md mt-4 max-w-2xl">
          Choose focused service layers based on your operating model, target roles, and timeline,
          then run a program plan leaders can review and scale.
        </p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {offerings.map((item) => (
          <article key={item.title} className="surface-card h-full">
            <h3 className="text-lg font-semibold tracking-tight text-slate-900">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
