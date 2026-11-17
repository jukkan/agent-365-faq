import type { FaqItem, Source } from './types';
import { carriedOverFaqs } from './faqsCarriedOver';

const SD: Source = {
  label: 'Microsoft Agent 365 service description (Microsoft Learn)',
  url: 'https://learn.microsoft.com/en-us/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365',
  type: 'Official',
};
const LIC: Source = {
  label: 'Microsoft Agent 365 Licensing FAQ',
  url: 'https://www.microsoft.com/licensing/faqs/122',
  type: 'Official',
};
const TERMS: Source = {
  label: 'Microsoft Product Terms — Agent 365',
  url: 'https://www.microsoft.com/licensing/terms/productoffering/Agent365/EAEAS#clause-2755-h3-1',
  type: 'Official',
};
const IGNITE: Source = {
  label: "What's new in Microsoft Agent 365 — Ignite 2026 (Tech Community)",
  url: 'https://techcommunity.microsoft.com/blog/agent-365-blog/whats-new-in-microsoft-agent-365-ignite-2026/4571753',
  type: 'Official',
};
const OVERVIEW: Source = {
  label: 'Microsoft Agent 365 overview (Microsoft Learn)',
  url: 'https://learn.microsoft.com/en-us/microsoft-agent-365/overview',
  type: 'Official',
};
const GA: Source = {
  label: 'Microsoft Agent 365, now generally available (Microsoft Security Blog, May 1, 2026)',
  url: 'https://www.microsoft.com/security/blog/2026/05/01/microsoft-agent-365-now-generally-available-expands-capabilities-and-integrations/',
  type: 'Official',
};

const REVIEWED = '2026-11-17';

const newFaqs: FaqItem[] = [
  // BASICS
  {
    id: 'basics-001',
    question: 'What is Agent 365, in one paragraph?',
    shortAnswer: 'A control plane for AI agents: a registry plus governance, security and cost views that span Microsoft and non-Microsoft agents. Generally available for the Commercial cloud since May 1, 2026, licensed per user.',
    detailedAnswer: `Microsoft describes four pillars: **management** (registry, Agent Map, connected platforms), **governance** (owners, approvals, tool control, policy templates), **security** (risk signals from Defender, Entra and Purview) and **business value** (usage and Copilot Credit spend).

The part customers tend to miss: it is not one console. The registry and basic governance live in the Microsoft 365 admin center, but most security capabilities are delivered through Entra, Purview, Defender and Intune. The Agent 365 license is what entitles you to those agent features in those products.

It is licensed per user, not per agent. List price: $15 per user per month standalone, or included in Microsoft 365 E7 ($99).`,
    audiences: ['IT Admin', 'Business & Licensing', 'Security & Compliance'],
    categories: ['Basics'],
    difficulty: 'Intro',
    sources: [OVERVIEW, LIC],
    status: 'Documented',
    lastReviewed: REVIEWED,
    updatedAt: REVIEWED,
    tags: ['overview', 'control plane'],
  },
  {
    id: 'basics-002',
    question: 'How is Agent 365 different from Microsoft 365 Copilot and Copilot Studio?',
    shortAnswer: 'Copilot and Copilot Studio are where agents are used and built. Agent 365 is where they are inventoried, governed and secured, including agents from other vendors. You do not need Copilot to buy Agent 365.',
    detailedAnswer: `**Copilot / Copilot Studio / Foundry**: build and run agents.
**Agent 365**: registry, ownership, access, policy, risk and cost across all of them, plus agents on other platforms and local agents on endpoints.

Overlap to watch: Business Analytics for Microsoft AI services requires at least one Microsoft 365 Copilot license in the tenant, and E7 bundles both. Otherwise they are bought separately.`,
    audiences: ['IT Admin', 'Business & Licensing'],
    categories: ['Basics'],
    difficulty: 'Intro',
    sources: [IGNITE, LIC],
    status: 'Documented',
    lastReviewed: REVIEWED,
    tags: ['copilot', 'copilot studio'],
  },
  {
    id: 'basics-003',
    question: 'Is Agent 365 only for large enterprises?',
    shortAnswer: 'No. Microsoft 365 Business Premium is on the prerequisite list, and there are SMB, Education and Frontline paths. But the value depends on how many agents you actually have.',
    detailedAnswer: `The Product Terms prerequisite list includes **Microsoft 365 Business Premium**, and the Licensing FAQ describes SMB, Education and Frontline combinations. For SMB it says Defender Suite for SMB and Purview Suite for SMB are needed to unlock full functionality, though they are not formal prerequisites.

A practical test: if the free registry (see "What do I get without buying anything?") already shows few agents and no external platforms, you may not need the paid layer yet. This is our opinion, not Microsoft guidance.`,
    audiences: ['Business & Licensing', 'IT Admin'],
    categories: ['Basics', 'Included vs Paid'],
    difficulty: 'Intro',
    sources: [LIC, TERMS],
    status: 'Partially documented',
    lastReviewed: REVIEWED,
    tags: ['smb', 'business premium'],
  },

  // INCLUDED VS PAID
  {
    id: 'paid-001',
    question: 'What do I get without buying anything?',
    shortAnswer: 'Per the service description: the agent registry inventory, basic governance actions, lifecycle automation rules and syncing agents from external platforms into the registry. Core usage insights are also GA with qualifying subscriptions.',
    detailedAnswer: `**Included with qualifying Microsoft 365 Enterprise, Business, Education and Frontline plans (service description):**
- Inventory of agents in the Agent Registry
- Basic governance: publish, deploy, block, delete, approve, assign to users/groups, reassign owner, pin
- Automate lifecycle actions with conditions-based rules
- Sync agents and metadata from external platforms into the registry
- Core usage insights (agent overview, active users, activity, sessions, exception rate, run time), GA per the Ignite 2026 post

**Caveat:** the Licensing FAQ draws the line differently (see "Why do Microsoft's pages disagree?"). Use the Coverage matrix on this site for the row-by-row view.`,
    audiences: ['IT Admin', 'Business & Licensing'],
    categories: ['Included vs Paid'],
    difficulty: 'Intro',
    sources: [SD, IGNITE, LIC],
    status: 'Documented',
    lastReviewed: REVIEWED,
    updatedAt: REVIEWED,
    isNew: true,
    tags: ['included', 'registry'],
  },
  {
    id: 'paid-002',
    question: 'What does the paid Agent 365 license unlock?',
    shortAnswer: 'Policy templates, observability, tenant-wide tool control, the Graph API, and nearly all the security layer in Entra, Purview, Defender and Intune.',
    detailedAnswer: `Per the service description, these **require Microsoft 365 E7/G7 or Agent 365**:

- **Admin center:** policy templates, observability and monitoring, tool access control, Graph API
- **Entra:** access packages for agents, sponsor lifecycle policies, Conditional Access and Identity Protection for agents, network traffic controls
- **Purview:** audit/eDiscovery, data lifecycle, compliance, DSPM, Insider Risk, sensitivity labels, DLP
- **Defender:** shadow AI endpoint sync, posture and exposure, threat detection and blocking, unified logs and hunting
- **Intune:** device compliance, policy-controlled runtime, blocking unsanctioned local agents

Also paid: premium usage insights for non-Microsoft agents, and Business Analytics for non-Microsoft AI.`,
    audiences: ['Business & Licensing', 'IT Admin', 'Security & Compliance'],
    categories: ['Included vs Paid'],
    difficulty: 'Intermediate',
    sources: [SD, IGNITE],
    status: 'Documented',
    lastReviewed: REVIEWED,
    updatedAt: REVIEWED,
    isNew: true,
    tags: ['paid', 'premium'],
  },
  {
    id: 'paid-003',
    question: 'How is Agent 365 priced, and who has to be licensed?',
    shortAnswer: '$15 per user per month standalone, or $99 in Microsoft 365 E7. Per user only: no per-agent charge. Users who delegate access to agents, and owners/sponsors of agents with their own access, need a license.',
    detailedAnswer: `- **List price:** $15/user/month standalone; E7 is $99/user/month (E5 + Copilot + Agent 365 + Entra Suite)
- **No per-agent licensing.** One license covers all agents associated with the user, with no fixed cap
- **No consumption charge** for Agent 365 itself at this time
- **Who:** users who delegate their access to agents (on-behalf-of), and the owner, sponsor or manager of agents with their own access. Microsoft recommends broader coverage including Copilot users and anyone who manages or interacts with agents
- **Pooling is not allowed.** Licensing is contractually enforced

To size it, the Licensing FAQ points to two exportable reports: "Active users using agents in Microsoft 365 Copilot" (Reports > Usage) and "Registry agent owners" (Agents > All agents). Neither needs a license.`,
    audiences: ['Business & Licensing'],
    categories: ['Included vs Paid'],
    difficulty: 'Intermediate',
    sources: [LIC, GA],
    status: 'Documented',
    lastReviewed: REVIEWED,
    updatedAt: REVIEWED,
    tags: ['pricing', 'per user'],
  },
  {
    id: 'paid-004',
    question: 'Do I need a prerequisite license before I can buy Agent 365?',
    shortAnswer: 'Per Product Terms since June 1, 2026: Microsoft 365 E5, Microsoft 365 F5 Defender and Purview, or Microsoft 365 Business Premium. The Licensing FAQ describes a wider set of qualifying combinations.',
    detailedAnswer: `**Product Terms (June 1, 2026):** purchasing Agent 365 (User SL) requires one of Microsoft 365 E5, Microsoft 365 F5 Defender and Purview, or Microsoft 365 Business Premium.

**Licensing FAQ:**
- Enterprise: E5, or E3 (or Office 365 E3 + EMS E3), plus Defender Suite and Purview Suite
- Frontline: F1/F3 plus Defender and Purview Suite FLW
- SMB: Business Premium (Defender/Purview Suites for SMB unlock full functionality but are not formal prerequisites)
- Education: A5 for Faculty, or A3 (or Office 365 A3 + EMS A3) plus Defender and Purview Suite for Education
- Information Workers need ME5 to be licensed; users with only ME3 + Copilot are not eligible
- Existing signed contracts are not affected until renewal

**Learn overview:** "works best" with E5, and at least one user must hold a qualifying Agent 365 license.

Agent 365 does not upgrade a user's own security entitlements.`,
    audiences: ['Business & Licensing', 'Security & Compliance'],
    categories: ['Included vs Paid', 'Gotchas'],
    difficulty: 'Advanced',
    sources: [TERMS, LIC, OVERVIEW],
    status: 'Partially documented',
    lastReviewed: REVIEWED,
    updatedAt: REVIEWED,
    tags: ['prerequisite', 'E5', 'business premium'],
  },
  {
    id: 'paid-005',
    question: 'E7, or E5 plus standalone Agent 365?',
    shortAnswer: 'E7 gives the most complete experience (E5, Copilot, Agent 365, Entra Suite). It is not required. If you do not need Copilot or Entra Suite, E5 + Agent 365 is the leaner path.',
    detailedAnswer: `Licensing options per the Licensing FAQ: Microsoft 365 E7; or E5, A5 or Business Premium plus Agent 365; or Microsoft 365 plus Defender Suite and Purview Suite plus Agent 365.

E7 is not required for Agent 365. Agent 365 is not included in E3 or E5. E7 is designed to align with the EU Data Boundary.

Naming: the service description says "E7/G7"; the Ignite 2026 post says "ME7".`,
    audiences: ['Business & Licensing'],
    categories: ['Included vs Paid'],
    difficulty: 'Intermediate',
    sources: [LIC, SD, IGNITE],
    status: 'Documented',
    lastReviewed: REVIEWED,
    tags: ['E7', 'bundle'],
  },
  {
    id: 'paid-006',
    question: 'We already have Microsoft 365 Copilot. Do we still need Agent 365?',
    shortAnswer: 'Copilot does not include Agent 365. Copilot licenses unlock Business Analytics for Microsoft AI services, but the security and governance layer needs Agent 365 or E7.',
    detailedAnswer: `Copilot users are among those Microsoft recommends licensing for Agent 365, but the licenses are independent. Copilot license: required for Business Analytics on Microsoft AI. Agent 365: required for non-Microsoft AI analytics and the premium governance/security features.`,
    audiences: ['Business & Licensing'],
    categories: ['Included vs Paid'],
    difficulty: 'Intro',
    sources: [IGNITE, LIC],
    status: 'Documented',
    lastReviewed: REVIEWED,
    tags: ['copilot'],
  },
  {
    id: 'paid-007',
    question: 'What is available in GCC?',
    shortAnswer: 'A subset. The service description marks the Graph API, all Purview features, Defender detection/posture features and most Intune controls as not available in GCC.',
    detailedAnswer: `**Available in GCC:** registry, basic governance, lifecycle rules, registry sync, policy templates, observability, tool control, Entra access packages/lifecycle/Conditional Access, Defender unified logs, Intune device compliance.

**Not available in GCC:** Graph API; Entra network traffic monitoring/blocking; all Purview rows; Defender shadow AI sync, posture and threat detection; Intune policy-controlled runtime and blocking unsanctioned local agents.

The page also notes that as of October 1, 2026 Agent 365 meets all FedRAMP High controls reviewed by Microsoft's independent assessor, with final authorization pending. The Licensing FAQ states it does not cover GCC licensing.`,
    audiences: ['IT Admin', 'Security & Compliance'],
    categories: ['Included vs Paid', 'Gotchas'],
    difficulty: 'Intermediate',
    sources: [SD, LIC],
    status: 'Partially documented',
    lastReviewed: REVIEWED,
    isNew: true,
    tags: ['gcc', 'fedramp'],
  },

  // DEPENDENCIES
  {
    id: 'dep-001',
    question: 'Which other Microsoft services does Agent 365 depend on?',
    shortAnswer: 'The admin center, Entra, Purview, Defender and Intune, plus an eligible prerequisite license. Optional: a Copilot license for Business Analytics, and Azure Monitor if you export agent activity.',
    detailedAnswer: `See the Dependencies section on this site for each service, what it does for agents, and what happens without it.

Short version: Agent 365 is an entitlement plus a registry. The enforcement runs in the other products, so their configuration is your work: labeled data in Purview, managed devices in Intune, Conditional Access policies in Entra, and Defender onboarding.`,
    audiences: ['IT Admin', 'Security & Compliance'],
    categories: ['Dependencies'],
    difficulty: 'Intermediate',
    sources: [OVERVIEW, SD],
    status: 'Documented',
    lastReviewed: REVIEWED,
    isNew: true,
    tags: ['dependencies'],
  },
  {
    id: 'dep-002',
    question: 'Do I need to have Purview, Defender and Entra already configured?',
    shortAnswer: 'Effectively yes, if you want the security value. The Licensing FAQ says without ME5, core features are limited. Agent 365 does not do the underlying setup for you.',
    detailedAnswer: `Examples of dependencies on your existing estate (per Product Terms notes and the Licensing FAQ):
- Label-based DLP and label honoring need grounding data to be labeled
- Conditional Access for delegated agents evaluates against the user's identity, so the user needs the corresponding Entra licensing
- Advanced hunting depends on Defender for Cloud Apps Office connector log data
- Intune controls need managed devices
- Without ME5, examples of limited features: advanced Purview classification, Defender detection of local agents, Intune controls for local agents`,
    audiences: ['Security & Compliance', 'IT Admin'],
    categories: ['Dependencies'],
    difficulty: 'Advanced',
    sources: [LIC, TERMS],
    status: 'Partially documented',
    lastReviewed: REVIEWED,
    tags: ['prerequisites', 'purview', 'defender'],
  },
  {
    id: 'dep-003',
    question: 'How do Copilot Credits relate to Agent 365?',
    shortAnswer: 'Agent 365 itself has no consumption charge. Its cost management views report the Copilot Credits that agents consume, by user, group, agent and service, and let you set spending limits.',
    detailedAnswer: `Learn describes Copilot Credits as the units AI usage is billed in. Agent 365 shows consumption and supports limits for groups and users. The Ignite 2026 post adds cost-management enhancements (model controls, delegated budgets, Graph/Fabric export), with status not stated.

The credits themselves are billed regardless of whether you license Agent 365.`,
    audiences: ['Business & Licensing', 'IT Admin'],
    categories: ['Dependencies', 'Included vs Paid'],
    difficulty: 'Intermediate',
    sources: [OVERVIEW, LIC, IGNITE],
    status: 'Partially documented',
    lastReviewed: REVIEWED,
    isNew: true,
    tags: ['copilot credits', 'cost'],
  },

  // GOTCHAS
  {
    id: 'gotcha-001',
    question: 'Why do Microsoft\'s licensing pages seem to contradict each other?',
    shortAnswer: 'The service description and the Licensing FAQ place several features on opposite sides of the free/paid line. Ask for written confirmation of any entitlement you are relying on.',
    detailedAnswer: `Rows where we see a difference (details in the Coverage matrix):
- Audit logs and eDiscovery: service description = paid; Licensing FAQ = included
- Shadow AI endpoint sync/discovery: paid vs included
- Blocking unsanctioned local agents: paid vs included
- Lifecycle automation and registry sync: included vs paid

Possible explanations include a free baseline versus agent-specific depth, or different update dates. We have not found Microsoft's reconciliation. Service description page date: 2026-09-30.`,
    audiences: ['Business & Licensing', 'IT Admin'],
    categories: ['Gotchas', 'Included vs Paid'],
    difficulty: 'Advanced',
    sources: [SD, LIC],
    status: 'Partially documented',
    lastReviewed: REVIEWED,
    isNew: true,
    tags: ['conflict', 'licensing'],
  },
  {
    id: 'gotcha-002',
    question: 'What happens with agents owned by users who are not licensed?',
    shortAnswer: 'The Licensing FAQ says activity tied to an unlicensed user is not entitled to Agent 365 protections and is considered out of compliance. One licensed user enables the product but does not cover everyone.',
    detailedAnswer: `Observability signals start after the first license is assigned. Licensing is contractually enforced, multiplexing/pooling is not permitted, and standard service protections and usage limits may still apply. Foundational capabilities remain available to all Microsoft Cloud subscribers.

Practical step: use the "Registry agent owners" export to see how many distinct owners your agents have before you license.`,
    audiences: ['Business & Licensing', 'IT Admin'],
    categories: ['Gotchas'],
    difficulty: 'Intermediate',
    sources: [LIC],
    status: 'Documented',
    lastReviewed: REVIEWED,
    isNew: true,
    tags: ['compliance', 'per user'],
  },
  {
    id: 'gotcha-003',
    question: 'Which Ignite 2026 announcements are actually GA?',
    shortAnswer: 'GA: Tools Registry, Defender local agent discovery, plugins and skills governance, core usage insights, Defender runtime protection (Windows). Most of the rest is preview, and some starts in December 2026.',
    detailedAnswer: `**GA:** Tools Registry; local agent discovery in Defender; plugins and skills governance; core usage insights; Defender runtime protection for local agents on Windows.

**Preview:** connected platforms; GSA network discovery and shadow AI discovery in the registry; Entra Agent ID for local agents and for Autopilot; Agent Map use cases; multi-tenant management (public preview); local agent governance; Cowork plugin; dynamic agent risk; Purview DLP for local agents; third-party posture in Defender; Intune and GSA local agent controls.

**Dated:** Entra Agent ID for connected platforms completes December 2026; Tools Registry external catalogs private preview from December 2026; Action center preview from December 2026.

**Status not stated:** Export Agent Activity, adaptive identity controls, Cost Management enhancements.`,
    audiences: ['IT Admin', 'Security & Compliance', 'Business & Licensing'],
    categories: ['Gotchas', 'Governance & Security'],
    difficulty: 'Intermediate',
    sources: [IGNITE],
    status: 'Documented',
    lastReviewed: REVIEWED,
    isNew: true,
    tags: ['ignite 2026', 'preview', 'ga'],
  },

  // GOVERNANCE & SECURITY
  {
    id: 'sec-001',
    question: 'Can Agent 365 find and control agents on laptops, like Claude Code or GitHub Copilot CLI?',
    shortAnswer: 'Discovery of 60+ local agents is GA in Defender (managed Windows and macOS). Governance, DLP and identity for local agents are mostly preview; runtime protection is GA on Windows.',
    detailedAnswer: `- **Discovery (GA):** Defender discovers 60+ local agents and their MCP servers, tied to device and user. Network-level discovery via Global Secure Access is preview.
- **Identity (preview):** distinct Entra Agent ID for supported local agents, starting with GitHub Copilot CLI and Claude Code.
- **Runtime protection (GA on Windows):** audit or block mode; supported agents include Claude Code, GitHub Copilot CLI, OpenClaw and ChatGPT Desktop.
- **DLP (preview):** Purview, for agents including Claude Code, Claude Desktop and GitHub Copilot CLI.
- **Governance (preview):** allow, restrict, investigate; block through Intune, Defender and GSA.

Entitlement is a gotcha: see "Why do Microsoft's pages disagree?".`,
    audiences: ['Security & Compliance', 'IT Admin'],
    categories: ['Governance & Security', 'Agents & Platforms'],
    difficulty: 'Intermediate',
    sources: [IGNITE, SD],
    status: 'Documented',
    lastReviewed: REVIEWED,
    isNew: true,
    tags: ['local agents', 'shadow ai', 'defender'],
  },
  {
    id: 'sec-002',
    question: 'What is dynamic agent risk and where do I see it?',
    shortAnswer: 'One risk level per agent combining runtime signals with exposure and blast radius, shown in the registry, Defender, Entra and Purview. Preview.',
    detailedAnswer: `Signals span identity, access, data, endpoints, cloud and network. The level updates as the agent acts, is targeted, or receives code or model updates. Partners Check Point, Cyera, Darktrace and Zenity are adding signals through Microsoft Sentinel. Entra adaptive controls evaluate Conditional Access at the point of action (status not stated).`,
    audiences: ['Security & Compliance'],
    categories: ['Governance & Security'],
    difficulty: 'Advanced',
    sources: [IGNITE],
    status: 'Partially documented',
    lastReviewed: REVIEWED,
    isNew: true,
    tags: ['risk', 'conditional access', 'preview'],
  },
  {
    id: 'sec-003',
    question: 'Can I control which MCP servers, plugins and skills agents use?',
    shortAnswer: 'Plugins and skills governance for Microsoft 365 Copilot and Copilot Cowork is GA, and the Tools Registry is GA. Tenant-wide tool control needs the paid license.',
    detailedAnswer: `Admins decide which plugins and skills are available and assign them to users or groups. Before blocking an MCP server you can see which agents use it and which plugins depend on it. Azure AI Gateway and LiteLLM MCP support is preview. Control of which tools (including Microsoft MCP servers) agents can access tenant-wide is listed as requiring E7/G7 or Agent 365.`,
    audiences: ['IT Admin', 'Security & Compliance'],
    categories: ['Governance & Security'],
    difficulty: 'Intermediate',
    sources: [IGNITE, SD],
    status: 'Documented',
    lastReviewed: REVIEWED,
    isNew: true,
    tags: ['mcp', 'tools registry', 'plugins'],
  },

  // AGENTS & PLATFORMS
  {
    id: 'plat-001',
    question: 'Which non-Microsoft platforms can be connected?',
    shortAnswer: 'Connected platforms is in preview. The Ignite post lists Entra Agent ID rollout for Salesforce Agentforce, Amazon AgentCore, Google Vertex AI, Databricks, Snowflake, Anthropic Claude Managed Agents, OpenAI, Oracle, SAP, ServiceNow and UiPath, completing in December 2026.',
    detailedAnswer: `You connect a platform once and agents sync into the registry without code changes, showing creator, owner and tools. Activity detail varies by platform. A guided wizard and secretless authentication (Entra workload identity federation) are included for supported platforms.

At GA (May 2026) registry sync with AWS Bedrock and Google Cloud was public preview. Defender posture for Bedrock, Gemini, Vertex AI and Claude agents is preview and requires connecting the platform.`,
    audiences: ['IT Admin', 'Developer / Architect'],
    categories: ['Agents & Platforms'],
    difficulty: 'Intermediate',
    sources: [IGNITE, GA],
    status: 'Partially documented',
    lastReviewed: REVIEWED,
    isNew: true,
    tags: ['connected platforms', 'third party'],
  },
  {
    id: 'plat-002',
    question: 'Can I manage agents across multiple tenants?',
    shortAnswer: 'Multi-tenant agent management in the Microsoft 365 admin center is in public preview: one view across tenants, with deploy, compare, review and approve/block at scale.',
    detailedAnswer: `Covers Microsoft and non-Microsoft agents. The Ignite post does not state licensing for it. Verify before relying on it for partner or multi-tenant scenarios.`,
    audiences: ['IT Admin'],
    categories: ['Agents & Platforms'],
    difficulty: 'Intermediate',
    sources: [IGNITE],
    status: 'Partially documented',
    lastReviewed: REVIEWED,
    isNew: true,
    tags: ['multi-tenant', 'preview'],
  },
];

export const faqs: FaqItem[] = [...newFaqs, ...carriedOverFaqs];
