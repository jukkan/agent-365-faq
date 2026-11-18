# AGENTS.md

## Project overview

Unofficial FAQ microsite for **Microsoft Agent 365** — Microsoft's control plane for AI agents in Microsoft 365. The site explains the product in plain language. It is a fully static React SPA with no backend, deployed to GitHub Pages at https://a365-faq.jukkan.com/. **Not affiliated with Microsoft.**

## Git branch discipline

- treat `main` as the default working branch unless the user explicitly asks for a branch or the change clearly needs isolation
- do not create a branch just because the tool or IDE offers one automatically
- create a short-lived branch only for risky experiments, unfinished multi-session work, or changes that must not hit `main` yet
- if the current branch is not `main`, check why before starting new work instead of piling more changes onto a stale branch
- if you create a branch, finish the lifecycle: merge or cherry-pick the useful result, then delete the branch locally and remotely when no longer needed

## Tech stack

| Tool | Version |
|------|---------|
| React | 19 |
| TypeScript | ~5.9 (strict mode) |
| Vite | 7 |
| Tailwind CSS | 3 (colours mapped to N/A design-system tokens in `tailwind.config.js`) |
| Mermaid.js | ^11 |
| ESLint | 9 (flat config — `eslint.config.js`) |
| Node.js | 20 (CI) |

## Styling (N/A design system)

The site follows the Niiranen Advisory design system (repo `Niiranen-Advisory/na-design-system`, local `E:\Dev\jukkan\na-design-system`). Applied 2026-11-18.

- `src/styles/na/tokens.css` and `spice.css` are vendored copies (from commit `8eae405`). Refresh by copying them again; do not edit them here.
- `tailwind.config.js` remaps existing utility names onto `--na-*` tokens: `ms-blue`/`blue`/`purple`/`amber`/`yellow`/`orange` → the oxblood accent, `gray` → ink/paper/border, `red` → danger, `green` → neutral. Radius is capped at 4px and shadows are off. Use the tokens; never hard-code colours.
- Type: DM Serif Display for h1–h3 (one weight only: never add `font-bold`/`font-semibold` to them), IBM Plex Serif for body and h4–h6, system UI for nav/buttons/inputs, system mono for metadata and labels. Fonts load from Google Fonts in `index.html`.
- One accent per piece. No gradients, emoji icons, pills or badge clusters: status goes in one mono metadata line.
- Spice pieces: cut masthead in the hero; one glyph per section head (`.a365-section-head`, hidden below 1024px); window on the footer CTA. One piece per view.
- Coverage matrix uses the Advisory Pack figure language (`.a365-matrix`: black header, paid column on the raised ground, hatched strip for rows where sources differ). The dependencies section is a dark plate (`.a365-plate` remaps tokens locally) with quiet outlined cards (`.a365-dep`).
- Brand marks in `public/brand/` are not licensed for reuse outside Jukka's own properties.

## Repository layout

```
.github/workflows/deploy.yml   # CI: push to main → build → GitHub Pages
src/
  components/                  # React components (named exports only)
  data/
    types.ts                   # Shared TypeScript types and interfaces
    faqs.ts                    # FAQ content (FaqItem[])
    coverage.ts / dependencies.ts / gotchas.ts  # Included-vs-paid matrix, dependency cards, gotchas
    openQuestions.ts           # Open questions content
    categories.ts              # Category definitions
    roles.ts                   # Audience role definitions
  App.tsx                      # Main app with section-based layout
  main.tsx                     # Entry point
  index.css                    # Token/spice imports, base type, matrix + plate styles, Mermaid styles
  styles/na/                   # Vendored tokens.css + spice.css from na-design-system
tailwind.config.js             # Tailwind colours/fonts/radius/shadow remapped to --na-* tokens
public/brand/                  # N/A monogram + favicon (not licensed for reuse)
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
type Category = 'Basics' | 'Included vs Paid' | 'Dependencies' | 'Gotchas' | 'Governance & Security'
              | 'Agents & Platforms' | 'Building Agents';
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
5. **N/A design system** — see Styling below. `ms-blue-*` now means the single oxblood accent, not Microsoft blue.
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
