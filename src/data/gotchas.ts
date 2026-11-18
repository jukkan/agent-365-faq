import type { Gotcha, Source } from './types';

const sd: Source = {
  label: 'Microsoft Agent 365 service description (Microsoft Learn, 2026-09-30)',
  url: 'https://learn.microsoft.com/en-us/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365',
  type: 'Official',
};
const lic: Source = {
  label: 'Microsoft Agent 365 Licensing FAQ',
  url: 'https://www.microsoft.com/licensing/faqs/122',
  type: 'Official',
};
const ignite: Source = {
  label: "What's new in Microsoft Agent 365 — Ignite 2026",
  url: 'https://techcommunity.microsoft.com/blog/agent-365-blog/whats-new-in-microsoft-agent-365-ignite-2026/4571753',
  type: 'Official',
};
const overview: Source = {
  label: 'Microsoft Agent 365 overview (Microsoft Learn)',
  url: 'https://learn.microsoft.com/en-us/microsoft-agent-365/overview',
  type: 'Official',
};

export const gotchas: Gotcha[] = [
  {
    id: 'g-sources-disagree',
    severity: 'important',
    title: 'Microsoft\'s own licensing pages disagree on what is included',
    body: 'The service description says audit logs/eDiscovery, shadow AI endpoint sync, blocking unsanctioned local agents and lifecycle automation need Agent 365 or E7. The Licensing FAQ lists several of these as included with any Microsoft Cloud subscription. Do not size a purchase on one page. Get the entitlement you are relying on confirmed in writing by your Microsoft account team or partner.',
    source: sd,
  },
  {
    id: 'g-prereq-three-versions',
    severity: 'important',
    title: 'The prerequisite license has three different descriptions',
    body: 'Product Terms (June 1, 2026): E5, F5 Defender and Purview, or Business Premium. Licensing FAQ: also E3 (or Office 365 E3 + EMS E3) plus Defender Suite and Purview Suite, with education and Frontline equivalents, and users with only E3 + Copilot are not eligible. Learn overview: Agent 365 "works best" with E5, and at least one licensed user enables it. Treat the Product Terms as the contract text and ask what your agreement says. The Licensing FAQ adds that existing signed contracts are not affected until renewal.',
    source: lic,
  },
  {
    id: 'g-one-license-not-coverage',
    severity: 'warning',
    title: 'One license turns the product on; it does not cover the tenant',
    body: 'At least one licensed user enables Agent 365 and observability signals appear after the first assignment. But the Licensing FAQ says activity tied to an unlicensed user is not entitled to the protections and is out of compliance, and pooling or multiplexing to reduce counts is not allowed. Licensing is per user, not per agent: users who delegate access to agents, and owners, sponsors or managers of agents with their own access, need a license.',
    source: lic,
  },
  {
    id: 'g-not-in-e5',
    severity: 'warning',
    title: 'E5 does not include Agent 365 — E7 does',
    body: 'Agent 365 is not in E3 or E5. It is included in Microsoft 365 E7 and sold as a standalone add-on. The Ignite 2026 post says "ME7" where the service description says "E7/G7"; they appear to be the same bundle family, but the pages do not say so explicitly.',
    source: lic,
  },
  {
    id: 'g-preview-ga',
    severity: 'warning',
    title: 'Most Ignite 2026 news is preview, and some of it arrives in December',
    body: 'GA per the Ignite post: Tools Registry, Defender local agent discovery, plugins and skills governance, core usage insights, and Defender runtime protection on Windows. Preview: connected platforms, Entra Agent ID for local agents, Purview DLP for local agents, dynamic agent risk, multi-tenant management, Cowork plugin, local agent governance. Dated items: Entra Agent ID rollout for connected platforms completes December 2026; external catalogs in Tools Registry are private preview from December 2026; Action center preview starts December 2026. Do not plan production controls on preview features.',
    source: ignite,
  },
  {
    id: 'g-gcc',
    severity: 'warning',
    title: 'GCC gets a subset',
    body: 'In the service description, the Graph API, all Purview features, Defender detection and posture features and most Intune controls are marked unavailable in GCC. Registry, basic governance, policy templates, observability, tool control and the Entra identity features are available. Check the table above row by row.',
    source: sd,
  },
  {
    id: 'g-defender-windows',
    severity: 'info',
    title: 'Local agent protection is uneven across operating systems',
    body: 'Defender local agent discovery supports managed Windows and macOS devices. Defender runtime protection is listed as GA on Windows, and the Ignite post does not mention macOS for it. MXC execution containers are Windows-only. Supported agent lists differ per feature (for example runtime protection names Claude Code, GitHub Copilot CLI, OpenClaw and ChatGPT Desktop).',
    source: ignite,
  },
  {
    id: 'g-analytics-license',
    severity: 'info',
    title: 'Business Analytics follows a different licensing rule',
    body: 'Analytics for Microsoft AI services needs at least one Microsoft 365 Copilot license in the tenant. Analytics for non-Microsoft AI needs Agent 365 and/or ME7. Rollout started in Frontier. Premium usage insights for non-Microsoft agents also require Agent 365 or ME7.',
    source: ignite,
  },
  {
    id: 'g-analytics-50-licenses',
    severity: 'warning',
    title: 'One Copilot license opens Business Analytics, but not all of it',
    body: 'The Ignite post says Business Analytics for Microsoft AI needs at least one Copilot license. The Business Analytics introduction says 50 assigned, and Viva Insights advanced analysis, which parts of Business Analytics run on, needs at least 50 assigned Viva Insights licenses (Copilot licenses count, in any mix). In a tenant with one Copilot Business license, the Metric calculators tab shows "Minimum license requirement for this experience is not met" and links to a Viva page that says one Copilot license is enough to start data processing. Waiting does not fix it; the count does. The Viva Insights Backend service plan is assigned at tenant level and needs no per-user action.',
    source: {
      type: 'Official',
      label: 'Environment requirements for Viva Insights (Microsoft Learn)',
      url: 'https://learn.microsoft.com/en-us/viva/insights/advanced/setup-maint/environment-requirements',
    },
  },
  {
    id: 'g-connected-platforms',
    severity: 'info',
    title: 'Connecting a platform does not mean full governance',
    body: 'Connected platforms is a preview and capabilities vary by platform. Agents appear in the registry with creator, owner and tools; activity detail exists only on supported platforms. Defender posture for Bedrock, Gemini, Vertex AI and Claude agents requires connecting the platform first, and is also preview.',
    source: ignite,
  },
  {
    id: 'g-credits',
    severity: 'info',
    title: 'Agent 365 has no consumption charge, but the agents it governs can',
    body: 'The Licensing FAQ says there are no consumption-based costs for Agent 365 at this time. The Learn overview describes cost management in Copilot Credits, the unit AI usage is billed in. Budget for the agents\' consumption separately, and for Azure Monitor if you export agent activity. Windows 365 for Agents is a separate product.',
    source: overview,
  },
];
