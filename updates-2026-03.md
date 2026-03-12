# March 2026 Content Refresh — Agent 365 GA Announcement

**Refresh date:** 2026-03-12
**Triggered by:** Microsoft's announcement that Agent 365 will be [generally available on May 1, 2026](https://www.microsoft.com/en-us/security/blog/2026/03/09/secure-agentic-ai-for-your-frontier-transformation/) at $15 per user per month, along with the new Microsoft 365 E7: The Frontier Suite at $99 per user per month.

---

## Summary

This refresh updates the Agent 365 FAQ site to reflect the most significant announcement since the product's introduction: **Agent 365 will be generally available on May 1, 2026.** The biggest changes are:

1. **GA date confirmed: May 1, 2026** — Agent 365 moves from Frontier preview to general availability.
2. **Pricing announced: $15 per user per month** — Agent 365 is a standalone paid product, not bundled with E5 or Copilot.
3. **Microsoft 365 E7: The Frontier Suite announced** — A new premium bundle at $99/user/month including E5, Copilot, Agent 365, and Entra Suite.
4. **Detailed capability breakdown** for Agent 365 — including specific Defender, Purview, and Entra capabilities, and which ones are GA vs. public preview.
5. **Previously speculative FAQs are now documented** — licensing, pricing, and E5 inclusion questions are now answered with official information.
6. **Work IQ and Work IQ MCP servers documented** — Microsoft's intelligence layer (Data/Memory/Inference) and its enterprise-grade MCP servers are now explained, with updated naming across existing FAQs.

---

## Source Documents for This Refresh

| Source | URL | Date |
|--------|-----|------|
| Secure agentic AI for your frontier transformation | https://www.microsoft.com/en-us/security/blog/2026/03/09/secure-agentic-ai-for-your-frontier-transformation/ | March 9, 2026 |
| Microsoft Agent 365 landing page | https://www.microsoft.com/en-us/microsoft-agent-365 | March 2026 |
| Microsoft 365 E7 enterprise page | https://www.microsoft.com/en-us/microsoft-365/microsoft-365-enterprise | March 2026 |
| Work IQ MCP overview (Microsoft Learn) | https://learn.microsoft.com/en-us/microsoft-agent-365/tooling-servers-overview | March 2026 |
| A closer look at Work IQ (Microsoft Tech Community) | https://techcommunity.microsoft.com/blog/microsoft365copilotblog/a-closer-look-at-work-iq/4499789 | March 2026 |

---

## New FAQ Items Added

### `licensing-004` — What is Microsoft 365 E7: The Frontier Suite and how does it relate to Agent 365?
- **Category:** Licensing & Availability
- **Difficulty:** Intro
- **Audiences:** Business & Licensing, IT Admin
- **Rationale:** Microsoft 365 E7 is a brand-new product announced on March 9, 2026 that bundles E5 + Copilot + Agent 365 + Entra Suite at $99/user/month. It's critical for licensing decisions.

### `arch-002` — What is Work IQ and what role does it play in Agent 365?
- **Categories:** Architecture, Basics
- **Difficulty:** Intermediate
- **Audiences:** IT Admin, Developer / Architect, Business & Licensing, Security & Compliance
- **Rationale:** Work IQ is the intelligence layer (Data/Memory/Inference) behind Microsoft 365 Copilot and Agent 365–managed agents. It powers Work IQ MCP servers and is now documented on Microsoft Learn. This FAQ explains the three layers, how Work IQ connects to Agent 365 governance, the Work IQ MCP servers, and licensing requirements.

---

## Updated FAQ Items

### `basics-001` — What is Microsoft Agent 365 in simple terms?
- Added **GA date (May 1, 2026)** and **pricing ($15/user/month)** to short and detailed answers
- Added mention of Microsoft 365 E7 bundle
- Added March 2026 Security Blog as primary source
- lastReviewed: 2026-02-19 → **2026-03-12**

### `licensing-001` — How do I get access to Agent 365 today?
- Complete rewrite to reflect GA announcement
- Added GA date, pricing, and E7 details
- Distinguished between Frontier (current) and GA (May 1)
- Noted which capabilities remain in public preview at GA
- Status remains: Documented
- lastReviewed: 2026-02-19 → **2026-03-12**

### `licensing-002` — Is Agent 365 a separate paid product, or included in existing Microsoft 365 plans?
- **Major update:** Previously speculative, now fully documented
- Confirmed: $15/user/month standalone, included in E7 at $99/user/month
- Added detailed breakdown of what's included in Agent 365 and E7
- Clarified impact on E5, E3, and Copilot customers
- Status: Not yet documented / speculative → **Documented**
- lastReviewed: 2025-11-18 → **2026-03-12**

### `licensing-003` — If I already have Microsoft 365 E5, do I automatically get Agent 365?
- **Major update:** Previously speculative, now fully documented
- Confirmed: E5 does NOT include Agent 365
- Added concrete options: $15/user/month add-on or E7 upgrade at $99/user/month
- Removed speculative scenarios, replaced with confirmed information
- Status: Not yet documented / speculative → **Documented**
- lastReviewed: 2025-11-18 → **2026-03-12**

### `security-001` — What protections does Microsoft Defender add for AI agents via Agent 365?
- Replaced general descriptions with **specific announced capabilities**
- Added: Security Posture Management, Detection/Investigation/Response, Runtime Threat Protection, Agent Risk Signals
- Noted which capabilities are GA vs. public preview
- Noted runtime threat protection entering preview in April 2026
- Status: Partially documented → **Documented**
- lastReviewed: 2025-11-18 → **2026-03-12**

### `security-002` — How does Agent 365 address prompt injection and data exfiltration risks?
- Updated with **specific Purview capabilities**: Inline DLP, Information Protection, DSPM, Insider Risk Management
- Added Data Lifecycle Management, Audit & eDiscovery, Communication Compliance details
- Updated Defender runtime threat protection details
- Status: Partially documented → **Documented**
- lastReviewed: 2025-11-18 → **2026-03-12**

### `security-003` — What is the relationship between Agent 365, Entra Agent ID, Defender, and Purview?
- Complete rewrite with **specific capabilities for each component** as announced
- Added detailed breakdown: Agent ID, Identity Protection, Conditional Access, Identity Governance for Entra
- Added detailed Purview capabilities (DSPM, Information Protection, Inline DLP, Insider Risk, Data Lifecycle, Audit/eDiscovery, Communication Compliance)
- Added specific Defender capabilities with preview status
- lastReviewed: 2025-11-18 → **2026-03-12**

### `rollout-001` — What should I do to prepare for Agent 365?
- Updated question to reference May 1 GA date
- Added budget/licensing planning section with specific prices
- Added recommendation to use Frontier for pre-GA testing
- Status: Not yet documented / speculative → **Documented**
- lastReviewed: 2025-11-18 → **2026-03-12**

### `rollout-002` — Should I enable Agent 365 for entire tenant or start with a pilot group?
- Added **Phase 0: Frontier testing (now through May 1)**
- Updated Phase 1 to reference GA launch
- Added context about preview capabilities at GA
- Status: Not yet documented / speculative → **Documented**
- lastReviewed: 2025-11-18 → **2026-03-12**

### `arch-001` — Where does Agent 365 fit in the Microsoft 365 architecture?
- Added **Work IQ as a dedicated Layer 3** (intelligence layer) with Data/Memory/Inference breakdown
- Renumbered Security & compliance to Layer 4 and Data & services to Layer 5
- Renamed "MCP Tooling Gateway" and "MCP Tooling Servers" references to **Work IQ MCP servers**
- Added Work IQ context step in data flow example (step 6)
- Added A closer look at Work IQ (Tech Community) source
- Added `work iq` tag
- lastReviewed: 2026-02-19 → **2026-03-12**
- updatedAt: 2026-02-19 → **2026-03-12**

### `dev-001` — If I build an agent in Copilot Studio or Microsoft Foundry, what do I need to do to make it Agent 365 compatible?
- Updated "governed MCP tool access" to **"governed Work IQ MCP tool access"** in short answer and detailed answer

### `dev-004` — What is the Agent 365 SDK and how is it different from other Microsoft agent SDKs?
- Updated "Governed MCP tool access" to **"Governed Work IQ MCP tool access"** in SDK capabilities list

### `dev-005` — What are Work IQ MCP servers and how do agents use them? (previously: "What are Agent 365 MCP Tooling Servers and why do they matter?")
- **Major update:** Renamed question and rewritten to use official **Work IQ MCP** naming
- Updated server list to use official names: Work IQ Copilot, Work IQ Mail, Work IQ Calendar, Work IQ Teams, Work IQ User, Work IQ Word (plus SharePoint/OneDrive and Dataverse servers)
- Added **MCP Management Server** for building custom MCP servers (1,500+ connectors, Graph APIs, Dataverse, REST)
- Added multiple integration paths: low-code (Copilot Studio), pro-code (Microsoft Foundry), CLI, VS Code
- Added key features: centralized governance, enterprise-grade security, continuous evaluation, full observability via Defender Advanced Hunting
- Added **Copilot license requirement** note
- Added A closer look at Work IQ (Tech Community) source
- lastReviewed: 2026-02-19 → **2026-03-12**
- updatedAt: **2026-03-12** (added)

### `ecosystem-003` — Does Agent 365 work with agents built on Azure OpenAI, Azure AI Services, or Microsoft Foundry?
- Updated "MCP tooling servers" to **"Work IQ MCP servers"** in short answer, detailed answer, and architecture diagram
- Updated "MCP Tooling Gateway" to **"Work IQ MCP servers"** in architecture flow

### CLI quickstart (within `dev-003`)
- Updated "Add MCP tool servers" step heading to **"Add Work IQ MCP servers"**
- Updated CLI command description to reference **"governed Work IQ MCP tools"**

---

## Updated Open Questions

### `oq-001` — What is the exact licensing and pricing model? (Now answered)
- Updated `whatWeKnow` with confirmed pricing ($15/user/month), GA date, E7 bundle details
- Remaining questions focus on volume licensing and tier options
- Question title updated to note it's answered
- lastUpdated: 2025-11-18 → **2026-03-12**

### `oq-003` — What features are GA vs. remaining in preview? (Partially answered)
- Updated `whatWeKnow` with specific GA vs. preview feature breakdown
- Listed all capabilities confirmed as GA and those remaining in public preview
- Noted runtime threat protection entering preview in April 2026
- Question title updated to note it's partially answered
- lastUpdated: 2025-11-18 → **2026-03-12**

### `oq-006` — What developer tools, SDKs, and documentation are available? (Updated March 2026)
- Added Work IQ MCP server details: official server names (Work IQ Mail, Calendar, Teams, User, Word, Copilot)
- Added MCP Management Server for custom MCP servers
- Added Work IQ MCP availability across Copilot Studio, Microsoft Foundry, and VS Code
- Added new question: "When will custom MCP server publishing be available to non-admin developers?"
- Question title updated from "Feb 2026" to "March 2026"
- lastUpdated: 2026-02-19 → **2026-03-12**

---

## Updated Scenarios

### `scenario-006` — We need to understand licensing and costs
- Updated description with confirmed pricing
- Added `licensing-004` (E7) to related FAQs

---

## Visual Changes to the Site

### Update Banner
- Replaced the amber "February 2026 refresh" banner with a **green "March 2026 GA announcement"** banner
- Banner highlights the GA date, pricing, and key updates
- Added **"Work IQ MCP servers explained"** to the banner's key updates list
- Links directly to the Microsoft Security Blog announcement

### FAQ Card Badges
- Items updated in March 2026 show **UPDATED** badge with "March 2026 GA update" attribution
- New `licensing-004` and `arch-002` items show **NEW** badge
- Items from February 2026 refresh retain their badges with "February 2026 refresh" attribution

### Architecture Diagram
- Updated **Work IQ Layer** node: description changed from "Emails, Files, Meetings / Org Chart, Workflows" to **"Data · Memory · Inference / Org Context for Agents"**
- Renamed **"MCP Interfaces"** node to **"Work IQ MCP"** in the Interoperability section

### Footer
- Updated "Last updated" date to March 12, 2026
- Updated disclaimer to reference March 2026 sources and link to Microsoft Learn

---

## Items NOT Changed (Validated as Still Accurate)

The following FAQ items were reviewed and remain accurate without changes:

- `basics-002` — How is Agent 365 different from Copilot and Copilot Studio? (Still accurate)
- `basics-003` — Is Agent 365 itself an "agent"? (Still accurate)
- `basics-004` — Who needs Agent 365? (Still accurate)
- `basics-005` — "Agent as a digital employee" concept (Still accurate)
- `basics-006` — Windows 365 for Agents (Still accurate)
- `governance-001` — Shadow agents and agent sprawl (Still accurate)
- `governance-002` — Quarantine mechanics (Still accurate)
- `governance-003` — Granular access controls (Still accurate)
- `security-004` — Biggest security risks (Still accurate)
- `dev-002` — Entra Agent ID workflow (Still accurate)
- `dev-006` — Agent Blueprints (Still accurate — Feb 2026)
- `rollout-003` — Common governance mistakes (Still accurate)
- `ecosystem-001` — Third-party agent management (Still accurate)
- `ecosystem-002` — Agent store relationship (Still accurate)

---

## Known Remaining Gaps

- **Volume licensing details**: Retail price is $15/user/month, but enterprise agreement pricing is not published.
- **Windows 365 for Agents documentation**: Still limited to blog post mention.
- **ISV partner ecosystem**: Specific ISV certifications not yet documented.
- **Performance benchmarks**: Latency impact (oq-004) remains undocumented.
- **Data residency specifics** for Agent 365 telemetry (oq-007) remain undocumented.
- **Transition from Frontier to GA**: Details on migration path not yet available.
- **Preview to GA timeline**: When public preview capabilities will reach GA is not announced.
- **Work IQ MCP servers are in preview**: All Work IQ MCP servers carry preview status; GA timeline not announced.
- **Custom MCP server publishing**: Currently limited to tenant administrators; developer access timeline not announced.
