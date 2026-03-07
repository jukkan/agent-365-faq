# GitHub Copilot Instructions

## Project overview

This is an **unofficial FAQ microsite** explaining **Microsoft Agent 365** — Microsoft's control plane for AI agents in Microsoft 365 — in plain language. The site is a fully static React single-page application with no backend. It is deployed to GitHub Pages at https://a365-faq.jukkan.com/ and is **not affiliated with Microsoft**.

## Tech stack

- **React 19** with **TypeScript** (strict mode)
- **Vite 7** — dev server (`localhost:5173`) and production builds (`dist/`)
- **Tailwind CSS 3** — all styling via utility classes; custom `ms-blue` color palette (50–900) defined in `tailwind.config.js`
- **Mermaid.js** — architecture diagrams rendered in `ArchitectureDiagramSection`
- **ESLint 9** with flat config (`eslint.config.js`) — typescript-eslint, react-hooks, react-refresh plugins
- **Node.js 20** (per CI workflow)

## Project structure

```
src/
  components/   # 15 React components (Header, Footer, Hero, FaqList, FaqItem,
                #   FaqSearch, FilterChips, RoleTabs, Callout, SourceBadge,
                #   ScenariosSection, GovernanceSection, EcosystemSection,
                #   OpenQuestionsSection, ArchitectureDiagramSection)
  data/         # Content + type definitions
    types.ts        # All shared TypeScript types and interfaces
    faqs.ts         # FAQ entries (FaqItem[])
    scenarios.ts    # Scenario entries
    openQuestions.ts# Open questions entries
    categories.ts   # Category definitions
    roles.ts        # Audience role definitions
  App.tsx       # Main app — section-based layout with useRef scroll navigation
  main.tsx      # Entry point
  index.css     # Global styles (Tailwind directives + Mermaid diagram styles)
```

## Key types (src/data/types.ts)

- `AudienceRole`: `'IT Admin' | 'Security & Compliance' | 'Developer / Architect' | 'Business & Licensing'`
- `Category`: `'Basics' | 'Architecture' | 'Security & Compliance' | 'Governance & Shadow Agents' | 'Ecosystem & Integrations' | 'Licensing & Availability' | 'Rollout & Adoption' | 'Developer Experience'`
- `Difficulty`: `'Intro' | 'Intermediate' | 'Advanced'`
- `SourceType`: `'Official' | 'News' | 'Analysis'`
- `Status`: `'Documented' | 'Partially documented' | 'Not yet documented / speculative'`
- Key interfaces: `FaqItem`, `Source`, `Scenario`, `OpenQuestion`

## Common commands

```bash
npm install        # install dependencies
npm run dev        # start Vite dev server at localhost:5173
npm run build      # tsc -b && vite build  (type-check then build to dist/)
npm run lint       # eslint .
npm run preview    # preview production build locally
```

## Coding conventions

- All components are **functional React components** using hooks
- Use **named exports** for all components — never `default export`
- All styling via **Tailwind utility classes** — no CSS modules, no styled-components
- TypeScript strict mode — fully type all props and data structures
- Section-based layout in `App.tsx` using `useRef` for scroll navigation
- Use the `ms-blue` custom color palette for Microsoft-branded blue UI elements
- No test framework is currently configured

## Content guidelines

- All FAQ content lives in `src/data/faqs.ts` and must follow the `FaqItem` interface
- Content must be based on **verifiable, official Microsoft sources**
- Speculation must be clearly labeled with `status: 'Not yet documented / speculative'`
- Never invent product details (pricing, SKUs, GA dates) unless officially announced
- Use plain language; avoid marketing jargon
- Update `lastReviewed` dates when verifying FAQ accuracy
- New FAQs should set `isNew: true` and include an `updatedAt` date

## Important warnings

- **Do NOT add a backend**, API routes, or server-side rendering — this is intentionally a static site
- **Do NOT modify** the GitHub Actions deploy workflow (`.github/workflows/deploy.yml`) without explicit instruction
- **Do NOT change** the Vite `base: '/'` config without understanding the deployment setup
- **Do NOT use `default export`** for components — named exports only
- **Do NOT commit** the `dist/` directory — it is git-ignored
