"use client";

import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "Solutions", href: "#solutions" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const mobileToggleRef = useRef<HTMLButtonElement | null>(null);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const menuElement = mobileMenuRef.current;
    if (!menuElement) {
      return;
    }

    const focusable = menuElement.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );

    focusable[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        mobileToggleRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isMobileMenuOpen]);

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
                  className="rounded-sm text-sm font-medium text-slate-600 transition hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {isMobileMenuOpen ? (
          <button
            ref={mobileToggleRef}
            type="button"
            aria-expanded="true"
            aria-controls="mobile-nav-menu"
            onClick={() => setIsMobileMenuOpen(false)}
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 p-2 text-slate-700 transition hover:border-slate-400 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 md:hidden"
          >
            <span className="sr-only">Toggle navigation menu</span>
            <span aria-hidden="true" className="text-base leading-none">
              x
            </span>
          </button>
        ) : (
          <button
            ref={mobileToggleRef}
            type="button"
            aria-expanded="false"
            aria-controls="mobile-nav-menu"
            onClick={() => setIsMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 p-2 text-slate-700 transition hover:border-slate-400 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 md:hidden"
          >
            <span className="sr-only">Toggle navigation menu</span>
            <span aria-hidden="true" className="text-base leading-none">
              ≡
            </span>
          </button>
        )}
        <a
          href="#contact"
          className="btn btn-primary"
        >
          Book a demo
        </a>
      </div>
      <div
        ref={mobileMenuRef}
        id="mobile-nav-menu"
        className={`md:hidden overflow-hidden border-t border-slate-200 bg-white transition-all duration-200 ${
          isMobileMenuOpen
            ? "max-h-80 translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        <nav aria-label="Mobile navigation" className="px-4 py-3 sm:px-6">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={`mobile-${item.href}`}>
                <a
                  href={item.href}
                  onClick={closeMobileMenu}
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
