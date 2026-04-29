"use client";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "Solutions", href: "#solutions" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="text-lg font-semibold tracking-tight text-slate-900">
          Accredian Enterprise
        </a>
        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-slate-600 transition hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 rounded-sm"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#contact"
          className="btn btn-primary"
        >
          Book a demo
        </a>
      </div>
    </header>
  );
}
