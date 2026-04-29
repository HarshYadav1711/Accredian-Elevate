# Accredian Enterprise Partial Clone

Production-grade partial clone of an enterprise SaaS landing page inspired by Accredian Enterprise.

Reference: [Accredian Enterprise](https://enterprise.accredian.com/)

## Stack

- Next.js App Router
- TypeScript
- React functional components + hooks
- Tailwind CSS
- Next.js Route Handlers for bonus lead capture API

No paid dependencies, no external paid backends, and no unnecessary libraries.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Quality checks:

```bash
npm run lint
npm run build
```

## Architecture

The project is intentionally scoped to a single landing page with modular, reusable sections.

### App Composition

- `src/app/page.tsx` - sequential composition of all landing sections
- `src/app/layout.tsx` - global metadata, fonts, and skip-link for accessibility
- `src/app/globals.css` - Tailwind component tokens (`btn`, headings, cards, spacing surfaces)

### Reusable UI Primitives

- `src/components/ui/container.tsx` - shared max-width and responsive horizontal padding
- `src/components/ui/section.tsx` - semantic section wrapper with scroll anchor offset

### Landing Sections

- `src/components/sections/hero-section.tsx`
- `src/components/sections/trust-row.tsx`
- `src/components/sections/offerings-section.tsx`
- `src/components/sections/process-section.tsx`
- `src/components/sections/outcomes-testimonials-section.tsx`
- `src/components/sections/final-cta-section.tsx`
- `src/components/site-header.tsx`
- `src/components/site-footer.tsx`

### Lead Capture Bonus

- `src/components/lead-capture-form.tsx` - accessible form with client validation and submit states
- `src/app/api/leads/route.ts` - `POST` + `GET` handler with in-memory storage (free, self-contained)
- `src/types/lead.ts` - typed request and record contracts

### Content Configuration

- `src/data/top-half-content.ts` - data arrays for badges, offerings, process steps, testimonials, stats, and footer links

## Design and UX Approach

- Calm enterprise visual language with strong typography hierarchy
- Mobile-first responsive behavior and readable line lengths
- Soft borders, subtle shadows, generous whitespace
- Seamless anchor navigation with sticky header
- Keyboard-friendly focus states and semantic HTML landmarks

## API and Persistence Strategy

- `POST /api/leads` validates payload and stores records in memory.
- `GET /api/leads` returns stored records for local verification.
- Records are capped to a small in-memory history to avoid unbounded growth.
- This intentionally demonstrates realistic API integration without paid infrastructure.

## AI Usage (Assignment Requirement)

AI was used for:

- Initial scaffold and section decomposition brainstorming
- Drafting early content structure and validation flow ideas
- Accelerating repetitive implementation tasks

Manual improvements done after AI assistance:

- Rewrote all key copy for enterprise tone and clarity
- Refined spacing, alignment, and typography for visual consistency
- Tightened accessibility (labels, skip link, focus states, feedback semantics)
- Cleaned dead code and simplified component boundaries
- Hardened route handler input handling and in-memory strategy

## Future Enhancements (If More Time)

- Add lightweight unit tests for form validation and API handler behavior
- Add richer proof components (case studies or customer logo wall)
- Add optional persistence adapter (file or DB) behind same route contract
- Expand accessibility audit with screen-reader flow checks

## Deployment

1. Push this repository to GitHub.
2. Import the project into Vercel.
3. Deploy using default Next.js settings.

Submission checklist:

- Live Vercel URL
- GitHub repository URL
- Assignment form submission link
