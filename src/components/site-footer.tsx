import { Container } from "@/components/ui/container";

const footerLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "Contact", href: "#contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <Container className="flex flex-col gap-6 py-10">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <p className="text-base font-semibold text-slate-900">Accredian Enterprise</p>
          <ul className="flex flex-wrap gap-5">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-slate-600 transition hover:text-slate-900"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-sm text-slate-500">
          Foundation layout ready for enterprise sections and lead capture.
        </p>
      </Container>
    </footer>
  );
}
