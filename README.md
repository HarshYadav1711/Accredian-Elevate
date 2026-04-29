# Accredian Enterprise Partial Clone

Production-grade partial clone of an enterprise SaaS landing page inspired by Accredian Enterprise.

Reference: [Accredian Enterprise](https://enterprise.accredian.com/)

## Tech Stack

- Next.js (App Router)
- TypeScript
- React functional components + hooks
- Tailwind CSS
- Next.js Route Handlers (`/api/leads`) for bonus lead capture API

All dependencies are free and actively maintained.

## Setup Instructions

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Production checks:

```bash
npm run lint
npm run build
```

## Architecture and Approach

The app is intentionally scoped to one high-quality landing page with reusable section architecture:

- `src/app/page.tsx`: page composition and section flow
- `src/components/site-header.tsx`: sticky navigation with smooth section links
- `src/components/site-footer.tsx`: structured footer links
- `src/components/section-heading.tsx`: reusable heading pattern
- `src/components/lead-capture-form.tsx`: bonus lead form with accessible interactions and states
- `src/app/api/leads/route.ts`: typed mock/in-memory API integration
- `src/data/landing-content.ts`: data-driven content arrays for reusable rendering
- `src/types/lead.ts`: shared TypeScript types for lead payload/records

Design intent:

- Calm and credible B2B visual language
- Mobile-first responsive layout
- Semantic sections and clear information hierarchy
- Subtle hover/focus states, minimal non-distracting motion

## API Integration (Bonus)

- `POST /api/leads` validates payload and stores submissions in memory.
- `GET /api/leads` returns current mock records for local verification.
- No paid service or external database required.

## AI Usage (Required by Assignment)

AI was used for:

- Initial project structure scaffolding
- Generating baseline section ideas and content blocks
- Suggesting component decomposition and typed API payload shapes

Manual improvements performed:

- Rewrote and refined copy for consistent enterprise tone
- Curated section flow to improve scanning and conversion intent
- Adjusted spacing, typography hierarchy, and contrast for UI polish
- Tightened TypeScript typing and validation logic in route handler
- Simplified dependencies and removed unnecessary complexity

## What I Would Improve With More Time

- Add richer visual proof components (case study cards, logo wall, KPI trends)
- Add stricter server-side validation and lightweight persistence option
- Expand accessibility audit (keyboard flow and screen reader checks)
- Add unit tests for route validation and key component rendering
- Add subtle scroll-linked cues for section transitions (still minimal)

## Deployment

Deploy to Vercel:

1. Push repository to GitHub
2. Import project in Vercel
3. Deploy with default Next.js settings

Add the resulting links in submission:

- Vercel live URL
- GitHub repository URL
- Assignment form link from the PDF
