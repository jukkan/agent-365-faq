# February 2026 Content Refresh

**Refresh date:** 2026-02-19
**Triggered by:** Launch of the [Agent 365 Blog](https://techcommunity.microsoft.com/blog/agent-365-blog/hello-world-/4494728) (Feb 16, 2026) and publication of comprehensive [Microsoft Learn documentation](https://learn.microsoft.com/en-us/microsoft-agent-365/overview) for Agent 365.

---

## Summary

This refresh updates the Agent 365 FAQ site to reflect significant new official information that became available since the V1 launch in November 2025. The biggest changes are:

1. **Microsoft Learn now has comprehensive Agent 365 documentation** — the product has moved from "partially speculative" to well-documented in several areas.
2. **Agent 365 SDK and CLI are now available** (pre-release) with quickstarts for multiple frameworks.
3. **MCP Tooling Servers** provide a new governed way for agents to access Microsoft 365 data.
4. **Agent Blueprints** are the new IT-governance mechanism for standardizing agent types.
5. **Windows 365 for Agents** has been introduced as a secure execution environment for computer-using AI agents.
6. **Microsoft Foundry** is the current branding for what was previously called "Azure AI Foundry."
7. A dedicated **Agent 365 Blog** and **Discussion Space** have launched at aka.ms/A365blog and aka.ms/A365discussions.

---

## Source Documents for This Refresh

| Source | URL | Date |
|--------|-----|------|
| Agent 365 Blog – "Hello, world." | https://techcommunity.microsoft.com/blog/agent-365-blog/hello-world-/4494728 | Feb 16, 2026 |
| Microsoft Agent 365 overview (Learn) | https://learn.microsoft.com/en-us/microsoft-agent-365/overview | Feb 2026 |
| Agent 365 SDK and CLI (Learn) | https://learn.microsoft.com/en-us/microsoft-agent-365/developer/ | Feb 2026 |
| Agent 365 tooling servers overview (Learn) | https://learn.microsoft.com/en-us/microsoft-agent-365/tooling-servers-overview | Feb 2026 |
| Agent 365 development lifecycle (Learn) | https://learn.microsoft.com/en-us/microsoft-agent-365/developer/a365-dev-lifecycle | Feb 2026 |
| Quickstart: LangChain Node.js (Learn) | https://learn.microsoft.com/en-us/microsoft-agent-365/developer/quickstart-nodejs-langchain | Feb 2026 |
| Quickstart: Claude Agent SDK Node.js (Learn) | https://learn.microsoft.com/en-us/microsoft-agent-365/developer/quickstart-nodejs-claude | Feb 2026 |
| Quickstart: Python Agent Framework (Learn) | https://learn.microsoft.com/en-us/microsoft-agent-365/developer/quickstart-python-agent-framework | Feb 2026 |
| Agent365-devTools (GitHub) | https://github.com/microsoft/Agent365-devTools | Feb 2026 |
| Deploying Agent 365 at Microsoft (Inside Track) | https://www.microsoft.com/insidetrack/blog/deploying-microsoft-agent-365-how-were-extending-our-infrastructure-to-manage-agents-at-microsoft/ | 2026 |

---

## New FAQ Items Added

### `dev-004` — What is the Agent 365 SDK and how is it different from other Microsoft agent SDKs?
- **Category:** Developer Experience / Architecture
- **Difficulty:** Intermediate
- **Audiences:** Developer / Architect
- **Rationale:** The Agent 365 SDK was not available at V1 launch. It is now documented on Microsoft Learn with a clear description of what it does (enterprise enhancement layer, not an agent builder) and how it differs from the Microsoft 365 Agents SDK.

### `dev-005` — What are Agent 365 MCP Tooling Servers and why do they matter?
- **Category:** Developer Experience / Ecosystem & Integrations / Security & Compliance
- **Difficulty:** Intermediate
- **Audiences:** Developer / Architect, IT Admin, Security & Compliance
- **Rationale:** MCP Tooling Servers are a major new capability enabling governed access to M365 services from any agent. Not mentioned in V1. Now documented with a catalog of available servers.

### `dev-006` — What is an Agent Blueprint and how does it work?
- **Category:** Governance & Shadow Agents / Developer Experience / Architecture
- **Difficulty:** Intermediate
- **Audiences:** IT Admin, Developer / Architect, Security & Compliance
- **Rationale:** The Agent Blueprint concept is central to how Agent 365 governance scales. It was not described in V1 documentation and is now fully documented on Microsoft Learn.

### `basics-006` — What is Windows 365 for Agents and how does it relate to Agent 365?
- **Category:** Basics / Architecture
- **Difficulty:** Intermediate
- **Audiences:** IT Admin, Developer / Architect, Business & Licensing
- **Rationale:** Windows 365 for Agents was introduced in the February 2026 blog post as a new component of the Agent 365 ecosystem. It provides secure execution environments for computer-using AI agents.

---

## Updated FAQ Items

### `basics-001` — What is Microsoft Agent 365 in simple terms?
- Added **Windows 365 for Agents** as a component Agent 365 unites
- Changed "Azure AI Foundry" to **Microsoft Foundry** (current branding)
- Added community resources (blog, discussions)
- Updated sources to include Microsoft Learn overview (previously relied on marketing landing page)
- Status: Documented (unchanged)
- lastReviewed: 2025-11-18 → **2026-02-19**

### `basics-002` — How is Agent 365 different from Microsoft 365 Copilot and Copilot Studio?
- Renamed "Azure AI Foundry" to **Microsoft Foundry** throughout
- Added mention of Agent 365 SDK and CLI as part of the developer management layer
- lastReviewed: 2025-11-18 → **2026-02-19**

### `licensing-001` — How do I get access to Agent 365 today?
- Added **exact step-by-step Admin Center navigation** (Admin Center > Copilot > Settings > User access > Copilot Frontier) from official documentation
- Added note about what to do after enabling (tour the overview page, follow Learn docs)
- Updated sources to Microsoft Learn overview
- lastReviewed: 2025-11-18 → **2026-02-19**

### `dev-001` — If I build an agent in Copilot Studio or [Azure AI Foundry], what do I need to do?
- Question updated to reference **Microsoft Foundry** instead of Azure AI Foundry
- Added comprehensive section on Agent 365 SDK and CLI for custom/open-source agents
- Listed all officially supported frameworks
- Added reference to Agent Blueprints
- Status: Partially documented → **Documented**
- lastReviewed: 2025-11-18 → **2026-02-19**

### `dev-003` — Can I use Agent 365 with open-source agent frameworks like LangChain or AutoGPT?
- Question updated to name **OpenAI Agents SDK** and **Claude SDK** as supported frameworks
- Replaced speculative content with documented CLI workflow (a365 setup, a365 develop add-mcp-servers, a365 publish)
- Added note about multi-cloud hosting (Azure, AWS, GCP)
- Added note about AI-guided setup with Claude Code, GitHub Copilot, OpenAI Codex
- Added note about mock tooling server for local testing
- Added multiple official quickstart sources
- Status: Not yet documented / speculative → **Documented**
- lastReviewed: 2025-11-18 → **2026-02-19**

### `arch-001` — Where does Agent 365 fit in the Microsoft 365 architecture?
- Added **Windows 365 for Agents** to Layer 1 (agent workload) and Layer 3 (platform integrations)
- Renamed "Azure AI Foundry" to **Microsoft Foundry**
- Added MCP Tooling Gateway to the architecture layers
- Added Agent Blueprint system to Layer 2
- Updated data flow to reflect MCP-based tool access and OpenTelemetry observability
- Added multi-cloud hosting note (Azure, AWS, GCP)
- Updated sources to Microsoft Learn
- Status: Partially documented → **Documented**
- lastReviewed: 2025-11-18 → **2026-02-19**

### `ecosystem-003` — Does Agent 365 work with agents built on Azure OpenAI or Azure AI Services?
- Question updated to mention **Microsoft Foundry** as the current product name
- Added Agent 365 SDK integration path replacing the manual registry API approach
- Added multi-cloud note (agent code can run on AWS, GCP)
- Added link to Python Agent Framework quickstart
- Status: Partially documented → **Documented**
- lastReviewed: 2025-11-18 → **2026-02-19**

---

## Updated Open Questions

### `oq-002` — How exactly will third-party agents integrate with Agent 365?
- Updated `whatWeKnow` with confirmed multi-framework support (LangChain, OpenAI Agents SDK, Claude Code SDK, etc.)
- Updated `questionsToAsk` to focus remaining open questions on ISV certification and partner ecosystem
- lastUpdated: 2025-11-18 → **2026-02-19**

### `oq-006` — What developer tools, SDKs, and documentation will be available?
- Substantially updated `whatWeKnow` — question now largely answered
- Updated `questionsToAsk` to focus on stability, versioning, and additional quickstart coverage
- Question text updated to note it is "Largely answered as of Feb 2026"
- lastUpdated: 2025-11-18 → **2026-02-19**

---

## Visual Changes to the Site

### Update Banner
- Added an amber "February 2026 refresh" banner to the Hero section referencing the blog post and Microsoft Learn
- Banner summarizes the main new items and points to NEW/UPDATED badges

### FAQ Card Badges
- New `isNew: true` field on FAQ items triggers a blue **NEW** badge in the card header
- New `updatedAt: '2026-02-19'` field triggers an amber **UPDATED** badge
- Cards with changes are highlighted with a colored border (blue for new, amber for updated)
- Expanded view shows "February 2026 refresh" attribution

### Official Docs Button
- Added a third button to the Hero CTA section linking directly to Microsoft Learn documentation

### Disclaimer Update
- Updated the footer disclaimer to link to Microsoft Learn (learn.microsoft.com/en-us/microsoft-agent-365/overview) instead of the Microsoft product marketing page

---

## Items NOT Changed (Validated as Still Accurate)

The following FAQ items were reviewed against current documentation and remain accurate without changes:

- `basics-003` — Is Agent 365 itself an "agent"? (Still accurate)
- `basics-004` — Who needs Agent 365? (Still accurate)
- `basics-005` — "Agent as a digital employee" concept (Still accurate)
- `governance-001` — Shadow agents and agent sprawl (Still accurate; 100,000+ agents at Microsoft confirms scale)
- `governance-002` — Quarantine mechanics (Still accurate)
- `governance-003` — Granular access controls (Still accurate)
- `security-001` — Defender protections (Still accurate)
- `security-002` — Prompt injection and data exfiltration (Still accurate)
- `security-003` — Relationship between Agent 365, Entra, Defender, Purview (Still accurate)
- `security-004` — Biggest security risks (Still accurate)
- `licensing-002` — Separate SKU vs. bundled pricing (Still speculative; no announcement)
- `licensing-003` — E5 inclusion (Still speculative; no announcement)
- `rollout-001` — Preparation checklist (Still accurate)
- `rollout-002` — Pilot vs. tenant-wide rollout (Still accurate)
- `rollout-003` — Common governance mistakes (Still accurate)
- `dev-002` — Entra Agent ID and Agent 365 for custom agents (Still accurate; enriched by Blueprint concept in new FAQ)
- `ecosystem-001` — Third-party agent management (Still accurate)
- `ecosystem-002` — Agent store relationship (Still accurate)

---

## Known Remaining Gaps

- **Licensing and pricing at GA**: Still not announced. `licensing-002` and `licensing-003` remain speculative.
- **Windows 365 for Agents documentation**: Only mentioned in the blog post; deeper technical documentation not yet available.
- **ISV partner ecosystem**: Which specific ISVs (Salesforce, ServiceNow, Workday) have certified their agents against Agent 365 is not yet documented.
- **GA timeline**: No announcement of general availability date.
- **Performance benchmarks**: Latency impact of Agent 365 monitoring (oq-004) remains undocumented.
- **Data residency specifics** for Agent 365 telemetry and registry data (oq-007) remain undocumented.
