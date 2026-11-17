import type { CoverageRow } from './types';

/**
 * Source: Microsoft 365 service description for Agent 365 (page dated 2026-09-30, read 2026-11-17).
 * https://learn.microsoft.com/en-us/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365
 * `conflict` marks rows where the Licensing FAQ (microsoft.com/licensing/faqs/122) reads differently.
 */
export const coverage: CoverageRow[] = [
  { feature: 'Inventory of agents across the organization in the Agent Registry', area: 'Admin center', includedWithM365: true, gcc: true },
  { feature: 'Basic governance actions (publish, deploy, block, delete, approve, assign to users/groups, reassign owner, pin)', area: 'Admin center', includedWithM365: true, gcc: true },
  { feature: 'Automate agent lifecycle actions using conditions-based rules', area: 'Admin center', includedWithM365: true, gcc: true, conflict: 'The Licensing FAQ lists "lifecycle automation" as requiring an Agent 365 license.' },
  { feature: 'Sync agents and metadata from external platforms into the registry', area: 'Admin center', includedWithM365: true, gcc: true, conflict: 'The Licensing FAQ lists "registry sync" as requiring an Agent 365 license.' },
  { feature: 'Policy templates applying customized policies and controls to agents', area: 'Admin center', includedWithM365: false, gcc: true },
  { feature: 'Observability and monitoring of agent activity (visualization and telemetry)', area: 'Admin center', includedWithM365: false, gcc: true, conflict: 'Core usage insights (agent overview, active users, activity metrics) are described as available with qualifying Microsoft 365 subscriptions in the Ignite 2026 post; advanced insights need Agent 365.' },
  { feature: 'Control which tools (including Microsoft MCP servers) agents can access tenant-wide', area: 'Admin center', includedWithM365: false, gcc: true },
  { feature: 'Graph API for the agent registry, basic metadata and governance actions', area: 'Admin center', includedWithM365: false, gcc: false },
  { feature: 'Access packages for agents to define scope of agent permissions', area: 'Entra', includedWithM365: false, gcc: true },
  { feature: 'Built-in lifecycle policies with sponsor-driven workflows', area: 'Entra', includedWithM365: false, gcc: true },
  { feature: 'Conditional Access and Identity Protection for agents', area: 'Entra', includedWithM365: false, gcc: true },
  { feature: 'Monitor and block malicious or noncompliant network traffic for agents on user devices and Copilot Studio agents', area: 'Entra', includedWithM365: false, gcc: false },
  { feature: 'Audit logs and eDiscovery of agent interactions', area: 'Purview', includedWithM365: false, gcc: false, conflict: 'The Licensing FAQ lists "audit logs and eDiscovery" as included with any Microsoft Cloud subscription.' },
  { feature: 'Data Lifecycle Management for agent-generated data', area: 'Purview', includedWithM365: false, gcc: false },
  { feature: 'Detect noncompliant agent interactions; Compliance Manager for AI', area: 'Purview', includedWithM365: false, gcc: false },
  { feature: 'Data Security Posture Management with AI Observability', area: 'Purview', includedWithM365: false, gcc: false, conflict: 'The Licensing FAQ says DSPM and AI Observability can be used without a license, but agent-specific insights need Agent 365 or E7.' },
  { feature: 'Insider Risk Management for agents', area: 'Purview', includedWithM365: false, gcc: false },
  { feature: 'Agents inherit and honor data sensitivity labels', area: 'Purview', includedWithM365: false, gcc: false },
  { feature: 'Data loss prevention for agents', area: 'Purview', includedWithM365: false, gcc: false },
  { feature: 'Sync shadow AI endpoint agents', area: 'Defender', includedWithM365: false, gcc: false, conflict: 'The Licensing FAQ lists "discovery of AI on endpoints" as included with any Microsoft Cloud subscription.' },
  { feature: 'Find agent misconfigurations and exposure risks; map local agents to devices and MCP servers', area: 'Defender', includedWithM365: false, gcc: false },
  { feature: 'Detect suspicious agent activity, alert, and block tool invocations', area: 'Defender', includedWithM365: false, gcc: false },
  { feature: 'Unified agent observability logs for investigation and threat hunting', area: 'Defender', includedWithM365: false, gcc: true },
  { feature: 'Device compliance for agent Conditional Access', area: 'Intune', includedWithM365: false, gcc: true },
  { feature: 'Policy-controlled runtime environment for agents', area: 'Intune', includedWithM365: false, gcc: false },
  { feature: 'Block unsanctioned local endpoint agents', area: 'Intune', includedWithM365: false, gcc: false, conflict: 'The Licensing FAQ lists "blocking unsanctioned local agents" as included with any Microsoft Cloud subscription.' },
];
