import type { Category } from './types';

export const categories: { value: Category; label: string; description: string }[] = [
  { value: 'Basics', label: 'Basics', description: 'What Agent 365 is and who it is for' },
  { value: 'Included vs Paid', label: 'Included vs Paid', description: 'What comes with Microsoft 365 and what needs a license' },
  { value: 'Dependencies', label: 'Dependencies', description: 'Other services Agent 365 relies on' },
  { value: 'Gotchas', label: 'Gotchas', description: 'Things that surprise customers' },
  { value: 'Governance & Security', label: 'Governance & Security', description: 'Shadow agents, risk, data protection' },
  { value: 'Agents & Platforms', label: 'Agents & Platforms', description: 'Microsoft, third-party and local agents' },
  { value: 'Building Agents', label: 'Building Agents', description: 'SDK, blueprints, Entra Agent ID (carried over, not re-verified)' },
];
