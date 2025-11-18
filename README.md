# Agent 365 FAQ - Unofficial Guide

A modern, interactive FAQ-style microsite that explains **Microsoft Agent 365** in plain language. This unofficial resource helps Microsoft customers—IT admins, security teams, developers, and business decision makers—understand what Agent 365 is, how it works, and how to adopt it.

## What is Agent 365?

Microsoft Agent 365 is a **control plane for AI agents**—a centralized system to register, monitor, secure, and govern all agents across your organization, whether built by Microsoft, third parties, or your own teams.

Think of it as giving IT and security teams the same level of control over AI agents that they have over human users, because agents are becoming "digital employees" that can take actions, access data, and make decisions.

## About This Site

This site provides:

- **25+ comprehensive FAQs** covering basics, architecture, security, governance, licensing, and developer experience
- **Real-world scenarios** to help you understand common use cases
- **Governance and security guidance** explaining how Agent 365 integrates with Defender, Entra, and Purview
- **Ecosystem integration details** for Microsoft and third-party platforms
- **Open questions and roadmap gaps** tracking what's still evolving

**Important:** This is an **unofficial resource**. All information is based on publicly available Microsoft sources as of November 2025. Always verify with [official Microsoft documentation](https://www.microsoft.com/en-us/microsoft-agent-365).

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for styling
- **No backend** - fully static, deployable to any static host

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
# Create optimized production build
npm run build
```

The built files will be in the `dist/` directory, ready to deploy to any static hosting service.

### Preview Production Build

```bash
# Preview the production build locally
npm run preview
```

## Deployment

This is a static site that can be deployed to:

- **GitHub Pages**: Enable Pages in your repo settings, point to the `gh-pages` branch
- **Netlify**: Connect your repo and set build command to `npm run build` and publish directory to `dist`
- **Vercel**: Import your repo, Vercel will auto-detect Vite configuration
- **Azure Static Web Apps**: Use the Azure Portal or CLI to deploy
- **Any static hosting**: Upload the contents of `dist/` folder

### Example: Deploy to GitHub Pages

```bash
# Build the site
npm run build

# Deploy to GitHub Pages (using gh-pages package)
npm install -g gh-pages
gh-pages -d dist
```

## Project Structure

```
agent-365-faq/
├── src/
│   ├── components/           # React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── FaqList.tsx
│   │   ├── FaqItem.tsx
│   │   ├── FaqSearch.tsx
│   │   ├── FilterChips.tsx
│   │   ├── RoleTabs.tsx
│   │   ├── Callout.tsx
│   │   ├── SourceBadge.tsx
│   │   ├── ScenariosSection.tsx
│   │   ├── GovernanceSection.tsx
│   │   ├── EcosystemSection.tsx
│   │   └── OpenQuestionsSection.tsx
│   ├── data/                 # Content and data
│   │   ├── types.ts          # TypeScript type definitions
│   │   ├── faqs.ts           # All FAQ items
│   │   ├── scenarios.ts      # Scenario cards
│   │   ├── openQuestions.ts  # Open questions
│   │   ├── categories.ts     # FAQ categories
│   │   └── roles.ts          # User roles
│   ├── App.tsx               # Main application component
│   ├── main.tsx              # Application entry point
│   └── index.css             # Global styles and Tailwind imports
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── vite.config.ts            # Vite configuration
```

## Editing FAQ Content

All FAQ content is stored in `src/data/faqs.ts`. Each FAQ follows this structure:

```typescript
{
  id: 'unique-id',
  question: 'The question text',
  shortAnswer: 'A brief 1-2 sentence answer',
  detailedAnswer: 'Detailed explanation with context, bullets, and examples',
  audiences: ['IT Admin', 'Security & Compliance', 'Developer / Architect', 'Business & Licensing'],
  categories: ['Basics', 'Security & Compliance', 'Governance & Shadow Agents', etc.],
  difficulty: 'Intro' | 'Intermediate' | 'Advanced',
  sources: [
    {
      label: 'Source description',
      url: 'https://source-url',
      type: 'Official' | 'News' | 'Analysis'
    }
  ],
  status: 'Documented' | 'Partially documented' | 'Not yet documented / speculative',
  lastReviewed: '2025-11-18',
  tags: ['optional', 'tags']
}
```

To add or edit FAQs:

1. Open `src/data/faqs.ts`
2. Add or modify FAQ objects in the `faqs` array
3. Follow the existing format and style
4. Use official Microsoft sources when possible
5. Mark speculative content appropriately with the `status` field

## Content Guidelines

When adding or updating content:

- **Base factual statements on official Microsoft sources** (landing pages, Learn docs, blog posts)
- **Label speculation clearly** using the status field and editor's notes
- **Do not invent product details** like pricing, SKUs, or GA dates unless officially announced
- **Use plain language** and avoid marketing jargon
- **Keep content up to date** as Microsoft's documentation evolves

## Maintenance

This site should be updated as:

- Microsoft releases new Agent 365 features or documentation
- Pricing and licensing details are announced
- Third-party integrations mature
- Product moves from Frontier to general availability

Update the `lastReviewed` date when verifying FAQ accuracy.

## Contributing

This is an open educational resource. Contributions are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes (add FAQs, fix errors, improve UI)
4. Submit a pull request with a clear description

Please ensure:
- Content is based on verifiable sources
- Speculation is clearly labeled
- Code follows existing patterns
- TypeScript compiles without errors

## Sources

Content is based on:

- [Microsoft Agent 365 landing page](https://www.microsoft.com/en-us/microsoft-agent-365)
- [Microsoft 365 blog](https://www.microsoft.com/en-us/microsoft-365/blog/)
- [Microsoft Learn documentation](https://learn.microsoft.com/en-us/microsoft-agent-365/)
- [Microsoft Ignite 2025 Book of News](https://news.microsoft.com/ignite-2025-book-of-news/)
- [Microsoft Tech Community blogs](https://techcommunity.microsoft.com/)
- Reputable technology news sources

## License

This project is provided for educational purposes. Content is based on publicly available information. Microsoft, Agent 365, Microsoft 365, Copilot, Entra, Defender, and Purview are trademarks of Microsoft Corporation.

## Disclaimer

**This is not an official Microsoft resource.** It is an independent educational project created to help organizations understand Microsoft Agent 365. All information is provided "as is" without warranty. Product features, pricing, availability, and documentation are subject to change by Microsoft at any time.

For official information, always refer to:
- [microsoft.com/microsoft-agent-365](https://www.microsoft.com/en-us/microsoft-agent-365)
- [learn.microsoft.com/microsoft-agent-365](https://learn.microsoft.com/en-us/microsoft-agent-365/)
- Your Microsoft account team

---

**Last Updated:** November 18, 2025
