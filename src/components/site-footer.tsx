import { Container } from "@/components/ui/container";
import { contactInfo, footerLinkGroups } from "@/data/top-half-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <Container className="py-12">
        <div className="grid gap-10 border-b border-slate-200 pb-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-base font-semibold text-slate-900">Accredian Enterprise</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Strategic workforce upskilling for enterprise teams focused on measurable capability
              outcomes.
            </p>
            <p className="mt-5 text-sm text-slate-600">
              <span className="font-medium text-slate-800">Email:</span> {contactInfo.email}
            </p>
            <p className="mt-1 text-sm text-slate-600">
              <span className="font-medium text-slate-800">Phone:</span> {contactInfo.phone}
            </p>
            <p className="mt-1 text-sm text-slate-600">{contactInfo.availability}</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 md:col-span-7">
            {footerLinkGroups.map((group) => (
              <div key={group.title}>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-700">
                  {group.title}
                </p>
                <ul className="mt-3 space-y-2">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm text-slate-600 transition hover:text-slate-900"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Accredian Enterprise. Built for learning and workforce
          transformation teams.
        </p>
      </Container>
    </footer>
  );
}
