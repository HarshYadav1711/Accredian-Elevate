# Accredian Elevate — Enterprise Learning Platform (Landing Experience)

## Overview

Accredian Elevate is a production-grade, conversion-focused enterprise landing experience built to represent how modern organizations approach workforce transformation.

This project is a structured recreation of an enterprise product surface—designed not as a visual clone, but as a **clean, scalable, and credible interface** that communicates value, builds trust, and drives action.

The focus was on **clarity, composability, and real-world usability**, aligning closely with how enterprise SaaS products are actually designed and shipped.

---

## Live Demo

https://accredian-elevate.vercel.app/

---

## Tech Stack

* Next.js (App Router)
* TypeScript
* Tailwind CSS (with custom design tokens)
* React functional components and hooks
* Next.js Route Handlers (API)

No paid tools, no external backends, and no unnecessary dependencies were introduced.

---

## Product Thinking

Instead of treating this as a static UI exercise, the page was structured as a **conversion-driven enterprise flow**:

1. **Positioning** — clear value proposition in the hero
2. **Credibility** — trust indicators and outcome metrics
3. **Offerings** — modular enterprise services
4. **Execution model** — how the solution works
5. **Outcomes** — measurable impact and testimonials
6. **Action** — lead capture with minimal friction

Each section is intentionally placed to reduce ambiguity and guide decision-making.

---

## Architecture

The project follows a **component-first, data-driven architecture**:

* `src/app/page.tsx`
  Sequential composition of all landing sections

* `src/components/sections/*`
  Independent, reusable sections (Hero, Offerings, Process, etc.)

* `src/components/ui/*`
  Low-level primitives (`Container`, `Section`) for layout consistency

* `src/data/*`
  Centralized content configuration (offerings, testimonials, stats)

* `src/app/api/leads/route.ts`
  Lightweight API handler for lead capture

This structure keeps the codebase predictable, scalable, and easy to extend without introducing complexity.

---

## Design System

A minimal design system is implemented directly using Tailwind:

* Consistent spacing scale and max-width containers
* Reusable utility classes (`btn`, `surface-card`, typography tokens)
* Soft borders, subtle shadows, and rounded surfaces
* Mobile-first responsive layout

The visual direction prioritizes **readability and trust** over visual noise.

---

## Lead Capture (Bonus Implementation)

A fully functional lead capture flow is included:

* Client-side validation with field-level feedback
* Accessible form structure with ARIA attributes
* Loading, success, and error states
* API integration via Next.js route handlers

### API Design

* `POST /api/leads`
  Validates and stores submissions in memory

* `GET /api/leads`
  Returns stored entries for local verification

This approach demonstrates real API integration while remaining **self-contained and deployment-friendly** without requiring paid infrastructure.

---

## Accessibility and UX

* Semantic HTML structure across all sections
* Keyboard-accessible navigation and form inputs
* Visible focus states for interactive elements
* Skip link for improved navigation
* Smooth anchor-based scrolling with offset handling

---

## AI Usage

AI tools were used as a **productivity layer**, not as a replacement for decision-making.

Used for:

* Initial scaffolding and section decomposition
* Generating baseline component structures
* Iterative refinement of validation logic

Manually handled:

* Final UI layout and spacing decisions
* Component boundaries and architecture
* Content refinement for enterprise tone
* Accessibility improvements and UX details
* Code cleanup and simplification

---

## Trade-offs and Decisions

* Chose **in-memory storage** for lead capture to keep the project self-contained and free of external dependencies
* Avoided animations and heavy interactions to maintain clarity and performance
* Focused on a single-page experience instead of adding unnecessary routes

---

## If Given More Time

* Add persistent storage layer (file-based or database-backed)
* Introduce lightweight motion for improved perceived performance
* Expand proof sections (case studies, logos, deeper metrics)
* Add automated tests for form validation and API behavior

---

## Local Setup

```bash
npm install
npm run dev
```

Build check:

```bash
npm run build
```

---

## Deployment

Deployed using Vercel with default Next.js configuration.

---

## Closing Note

This project was built with the intent to reflect how a real engineer approaches:

* structuring UI systems
* making pragmatic trade-offs
* and building interfaces that communicate clearly

rather than simply replicating visuals.

---
