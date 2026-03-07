# CLAUDE.md

Unofficial FAQ microsite for **Microsoft Agent 365** (Microsoft's AI-agent control plane for M365). Fully static React SPA — no backend, no API, no database. Deployed to GitHub Pages at https://a365-faq.jukkan.com/. Not affiliated with Microsoft.

## Commands

```bash
npm install        # install deps
npm run dev        # dev server → localhost:5173
npm run build      # tsc -b && vite build  (type-check + bundle to dist/)
npm run lint       # eslint .
npm run preview    # preview prod build
```

No test framework configured.

## Stack

- React 19 + TypeScript ~5.9 (strict)
- Vite 7 (`base: '/'` — do not change without understanding deployment)
- Tailwind CSS 3 — custom `ms-blue` color palette in `tailwind.config.js`
- Mermaid.js ^11 — architecture diagrams
- ESLint 9 flat config (`eslint.config.js`)
- Node 20 (CI)

## Structure

```
src/components/    # 15 components — named exports, functional + hooks
src/data/
  types.ts         # AudienceRole, Category, Difficulty, SourceType, Status, FaqItem, Source, Scenario, OpenQuestion
  faqs.ts          # All FAQ content (FaqItem[])
  scenarios.ts / openQuestions.ts / categories.ts / roles.ts
src/App.tsx        # Section layout with useRef scroll nav
src/index.css      # Tailwind directives + Mermaid styles
tailwind.config.js # ms-blue palette (50–900)
```

## Code style

- **Named exports only** — never `export default` for components
- Tailwind utility classes for all styling — no CSS modules, no styled-components
- All props and data fully typed (TypeScript strict)
- Use `ms-blue-*` classes for Microsoft-branded blue elements
- Follow existing `useRef` scroll-nav pattern in `App.tsx` when adding sections

## Content rules

- FAQ content → `src/data/faqs.ts`, must follow `FaqItem` interface
- Cite verifiable official Microsoft sources
- Speculative content → `status: 'Not yet documented / speculative'`
- Never invent pricing, SKUs, or GA dates
- New FAQs: set `isNew: true` + `updatedAt`; update `lastReviewed` when verifying

## Do NOT

- Add a backend, API routes, or SSR — static site only
- Modify `.github/workflows/deploy.yml` without explicit instruction
- Change `vite.config.ts` `base: '/'` without understanding deployment
- Use `export default` for components
- Commit `dist/` (git-ignored)
