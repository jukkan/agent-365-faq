import type { AudienceRole } from './types';

export const roles: { value: AudienceRole; label: string; description: string; icon: string }[] = [
  {
    value: 'IT Admin',
    label: 'IT Admin',
    description: 'Microsoft 365 administrators managing tenant-wide settings',
    icon: '⚙️',
  },
  {
    value: 'Security & Compliance',
    label: 'Security & Compliance',
    description: 'Security and compliance teams governing AI agent usage',
    icon: '🔒',
  },
  {
    value: 'Developer / Architect',
    label: 'Developer / Architect',
    description: 'Developers and architects building agents',
    icon: '👨‍💻',
  },
  {
    value: 'Business & Licensing',
    label: 'Business & Licensing',
    description: 'Decision makers evaluating costs and ROI',
    icon: '💼',
  },
];
