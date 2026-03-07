# AGENTS.md

## Project overview

Unofficial FAQ microsite for **Microsoft Agent 365** — Microsoft's control plane for AI agents in Microsoft 365. The site explains the product in plain language. It is a fully static React SPA with no backend, deployed to GitHub Pages at https://a365-faq.jukkan.com/. **Not affiliated with Microsoft.**

## Tech stack

| Tool | Version |
|------|---------|
| React | 19 |
| TypeScript | ~5.9 (strict mode) |
| Vite | 7 |
| Tailwind CSS | 3 (custom `ms-blue` palette in `tailwind.config.js`) |
| Mermaid.js | ^11 |
| ESLint | 9 (flat config — `eslint.config.js`) |
| Node.js | 20 (CI) |

## Repository layout

```
.github/workflows/deploy.yml   # CI: push to main → build → GitHub Pages
src/
  components/                  # 15 React components (named exports only)
  data/
    types.ts                   # Shared TypeScript types and interfaces
    faqs.ts                    # FAQ content (FaqItem[])
    scenarios.ts               # Scenario content
    openQuestions.ts           # Open questions content
    categories.ts              # Category definitions
    roles.ts                   # Audience role definitions
  App.tsx                      # Main app with section-based layout
  main.tsx                     # Entry point
  index.css                    # Tailwind directives + Mermaid styles
tailwind.config.js             # ms-blue custom color palette
eslint.config.js               # ESLint 9 flat config
vite.config.ts                 # Vite config (base: '/')
```

## Commands

```bash
# Install dependencies
npm install

# Development server (localhost:5173)
npm run dev

# Production build — type-check then bundle to dist/
npm run build

# Lint all files
npm run lint

# Preview production build locally
npm run preview
```

> No test framework is currently configured.

## Key types (src/data/types.ts)

```typescript
type AudienceRole = 'IT Admin' | 'Security & Compliance' | 'Developer / Architect' | 'Business & Licensing';
type Category = 'Basics' | 'Architecture' | 'Security & Compliance' | 'Governance & Shadow Agents'
              | 'Ecosystem & Integrations' | 'Licensing & Availability' | 'Rollout & Adoption'
              | 'Developer Experience';
type Difficulty = 'Intro' | 'Intermediate' | 'Advanced';
type SourceType = 'Official' | 'News' | 'Analysis';
type Status = 'Documented' | 'Partially documented' | 'Not yet documented / speculative';
// Key interfaces: FaqItem, Source, Scenario, OpenQuestion
```

## Coding rules

1. **Named exports only** — never `export default` for components.
2. **Functional components with hooks** — no class components.
3. **Tailwind utility classes** for all styling — no CSS modules, no styled-components.
4. **TypeScript strict** — fully type all props, data, and function signatures.
5. **`ms-blue` palette** — use these custom colors for Microsoft-branded blue UI elements.
6. **`App.tsx` layout** — sections are laid out using `useRef` for scroll-based navigation; follow existing patterns when adding sections.

## Content rules

- All FAQ entries live in `src/data/faqs.ts` and must conform to the `FaqItem` interface.
- Base content on **verifiable, official Microsoft sources**.
- Mark speculative content with `status: 'Not yet documented / speculative'`.
- **Never invent** product details (pricing, SKUs, GA dates) unless officially announced.
- Use plain language; avoid marketing jargon.
- Update `lastReviewed` when verifying accuracy; set `isNew: true` and `updatedAt` for new entries.

## Hard constraints

- **No backend** — do not add API routes, server-side rendering, or any server component.
- **Do not modify** `.github/workflows/deploy.yml` without explicit instruction.
- **Do not change** `vite.config.ts` `base: '/'` without understanding the deployment setup.
- **Do not commit** `dist/` — it is git-ignored.
- **Do not use default exports** for components.
