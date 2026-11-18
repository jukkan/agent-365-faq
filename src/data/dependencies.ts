import type { Dependency } from './types';

/** Compiled from the Learn overview, the service description, the Licensing FAQ and the Ignite 2026 post (read 2026-11-17). */
export const dependencies: Dependency[] = [
  {
    name: 'Microsoft 365 admin center',
    whatItDoes: 'Hosts the agent registry, Agent Map, basic governance actions, policy templates, usage insights and cost management.',
    licenseNote: 'Registry and basic governance come with qualifying Microsoft 365 plans. Policy templates, tool control and observability need Agent 365.',
    withoutIt: 'There is no separate Agent 365 console: this is where you start.',
  },
  {
    name: 'Microsoft Entra (Agent ID, Conditional Access, Identity Protection, ID Governance, Global Secure Access)',
    whatItDoes: 'Gives agents identities, scopes their access, applies Conditional Access and risk, and controls agent network traffic.',
    licenseNote: 'The Agent 365 license unlocks the agent features. Per the earlier Product Terms reading on this site, delegated-access scenarios also depend on the user holding Entra-capable licenses (Conditional Access: Microsoft 365 E3; Identity Protection: E5).',
    withoutIt: 'No identity, access-scoping or Conditional Access for agents. Connected-platform agents get an Entra Agent ID, rolling out through December 2026.',
  },
  {
    name: 'Microsoft Purview',
    whatItDoes: 'Audit and eDiscovery, DLP, sensitivity labels, DSPM for AI, Insider Risk, retention and compliance for agent activity.',
    licenseNote: 'Agent features need Agent 365 or E7. Label-based controls assume your data is labeled and covered by Purview licensing (Product Terms notes pay-as-you-go for non-Microsoft 365 data).',
    withoutIt: 'Agents are visible but not data-governed. Without labeled data, label-based DLP has little to enforce.',
  },
  {
    name: 'Microsoft Defender',
    whatItDoes: 'Agent posture, threat detection and blocking, local agent discovery and runtime protection, unified logs and hunting.',
    licenseNote: 'Agent features need Agent 365 or E7. Advanced hunting depends on log data from Defender for Cloud Apps Office connectors, so the user needs a license that includes it.',
    withoutIt: 'No threat detection or hunting for agents; local agent discovery is unavailable.',
  },
  {
    name: 'Microsoft Intune',
    whatItDoes: 'Device compliance for agent access, policy-controlled agent runtime, and blocking unsanctioned local agents.',
    licenseNote: 'Needs Agent 365 or E7 for the agent features, and devices must be Intune-managed.',
    withoutIt: 'Local agents on endpoints cannot be constrained or blocked through device policy.',
  },
  {
    name: 'Prerequisite license (Microsoft 365 E5, F5 Defender and Purview, or Business Premium)',
    whatItDoes: 'Product Terms require one of these to purchase Agent 365 (User SL) from June 1, 2026.',
    licenseNote: 'The Licensing FAQ describes a wider set (for example E3 plus Defender Suite and Purview Suite). See the Gotchas section.',
    withoutIt: 'You cannot buy Agent 365 under the Product Terms wording; the Licensing FAQ says without ME5 core features are limited.',
  },
  {
    name: 'Microsoft 365 Copilot license',
    whatItDoes: 'Required in the tenant for Business Analytics on Microsoft AI services.',
    licenseNote: 'The Ignite post says one Copilot license enables analytics for Microsoft services; the Business Analytics docs and Viva Insights advanced analysis say 50 assigned. Analytics for non-Microsoft AI needs Agent 365 and/or ME7.',
    withoutIt: 'Business Analytics covers less of your AI estate. Agent 365 itself does not require Copilot.',
  },
  {
    name: 'Copilot Credits',
    whatItDoes: 'The billing unit for AI usage. Agent 365 cost management reports it by user, group, agent and service and supports spending limits.',
    licenseNote: 'The Licensing FAQ says there are no consumption-based costs for Agent 365 itself at this time. The agents it governs can still consume billed credits.',
    withoutIt: 'Cost views are empty if nothing consumes credits.',
  },
  {
    name: 'Azure Monitor / Application Insights',
    whatItDoes: 'Destination for exported agent traces (Export Agent Activity, announced at Ignite 2026; status not stated in the post).',
    licenseNote: 'Azure-side ingestion and retention costs are outside the Agent 365 license.',
    withoutIt: 'Agent activity stays inside Microsoft portals.',
  },
  {
    name: 'Frontier program',
    whatItDoes: 'Early access channel. Business Analytics is rolling out starting in Frontier; some shadow AI visibility was Frontier-only at GA.',
    licenseNote: 'Participation is separate from licensing.',
    withoutIt: 'Some newly announced features reach you later than Frontier tenants.',
  },
];
