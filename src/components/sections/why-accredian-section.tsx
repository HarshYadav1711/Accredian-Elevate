import { Section } from "@/components/ui/section";
import { whyAccredianPoints } from "@/data/top-half-content";

export function WhyAccredianSection() {
  return (
    <Section className="bg-slate-50" containerClassName="py-10 lg:py-12">
      <div className="section-shell">
        <p className="eyebrow">Why Accredian</p>
        <ul className="mt-5 grid gap-3">
          {whyAccredianPoints.map((point) => (
            <li key={point} className="text-sm leading-6 text-slate-700">
              • {point}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
