import type { Category } from './types';

export const categories: { value: Category; label: string; description: string }[] = [
  {
    value: 'Basics',
    label: 'Basics',
    description: 'Fundamental concepts and definitions',
  },
  {
    value: 'Architecture',
    label: 'Architecture',
    description: 'How Agent 365 works and integrates',
  },
  {
    value: 'Security & Compliance',
    label: 'Security & Compliance',
    description: 'Security features and compliance capabilities',
  },
  {
    value: 'Governance & Shadow Agents',
    label: 'Governance & Shadow Agents',
    description: 'Managing agent sprawl and unsanctioned agents',
  },
  {
    value: 'Ecosystem & Integrations',
    label: 'Ecosystem & Integrations',
    description: 'Third-party and Microsoft product integrations',
  },
  {
    value: 'Licensing & Availability',
    label: 'Licensing & Availability',
    description: 'Pricing, SKUs, and access programs',
  },
  {
    value: 'Rollout & Adoption',
    label: 'Rollout & Adoption',
    description: 'Getting started and deployment strategies',
  },
  {
    value: 'Developer Experience',
    label: 'Developer Experience',
    description: 'Building and registering agents',
  },
];
