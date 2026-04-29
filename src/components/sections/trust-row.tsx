import { Section } from "@/components/ui/section";
import { trustBadges } from "@/data/top-half-content";

export function TrustRow() {
  return (
    <Section className="border-y border-slate-200 bg-white" containerClassName="py-8 lg:py-10">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-sm font-medium text-slate-600">
          Trusted by teams scaling enterprise capability across industries
        </p>
        <ul className="flex flex-wrap gap-2">
          {trustBadges.map((badge) => (
            <li
              key={badge}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate-600"
            >
              {badge}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
