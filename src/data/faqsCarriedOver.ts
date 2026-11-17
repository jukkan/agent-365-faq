import type { FaqItem } from './types';

/** Developer FAQs carried over unchanged from earlier refreshes; not re-verified in the Ignite 2026 pass. */
export const carriedOverFaqs: FaqItem[] = [
  {
    id: 'dev-001',
    question: 'If I build an agent in Copilot Studio or Microsoft Foundry, what do I need to do to make it Agent 365 compatible?',
    shortAnswer: 'Agents built in Copilot Studio and Microsoft Foundry integrate with Agent 365 automatically. For custom agents built on any SDK, use the Agent 365 SDK and CLI to add enterprise identity, observability, and governed Work IQ MCP tool access.',
    detailedAnswer: `**For Copilot Studio agents:**
- Agents built in Copilot Studio can be published to Microsoft 365 Copilot
- Once published, they automatically appear in the Agent 365 registry
- Apply governance policies and Blueprints via the Admin Center

**For Microsoft Foundry agents (formerly Azure AI Foundry):**
- Microsoft Foundry integrates with Agent 365 out of the box
- Agents created in Foundry can be automatically registered
- Supports Entra Agent IDs natively

**For custom or open-source agents (any framework):**
- Use the **Agent 365 SDK** to extend your agent with enterprise capabilities:
  - Entra-based Agent identity
  - Governed Work IQ MCP tool access (Outlook, Teams, SharePoint, etc.)
  - OpenTelemetry-based observability
  - Notifications via Activity protocol
- Use the **Agent 365 CLI** (a365) to automate setup, blueprint creation, MCP integration, publishing, and Azure deployment
- Supported frameworks: LangChain, OpenAI Agents SDK, Claude Code SDK, Microsoft Agent Framework, Microsoft Agents SDK

**Best practices:**
- Use descriptive names and documentation for your agents
- Follow least-privilege principles for data access
- Use Agent Blueprints for consistent policy inheritance
- Test locally using the Agent 365 CLI mock tooling server
- Document agent capabilities and limitations`,
    audiences: ['Developer / Architect'],
    categories: ['Building Agents'],
    difficulty: 'Intermediate',
    sources: [
      {
        label: 'Agent 365 SDK and CLI (Microsoft Learn)',
        url: 'https://learn.microsoft.com/en-us/microsoft-agent-365/developer/',
        type: 'Official',
      },
      {
        label: 'Agent 365 development lifecycle (Microsoft Learn)',
        url: 'https://learn.microsoft.com/en-us/microsoft-agent-365/developer/a365-dev-lifecycle',
        type: 'Official',
      },
    ],
    status: 'Documented',
    lastReviewed: '2026-02-19',
    updatedAt: '2026-02-19',
    tags: ['copilot studio', 'microsoft foundry', 'sdk', 'cli', 'registration'],
  },
  {
    id: 'dev-002',
    question: 'How do Entra Agent ID and Agent 365 work together for custom agents?',
    shortAnswer: 'Entra Agent ID provides the identity and authentication mechanism for your custom agent. Agent 365 registers that identity and applies governance, security, and monitoring policies. The identity hierarchy uses agent blueprints, agent identities, and optional agent users.',
    detailedAnswer: `**Agent identity architecture:**

Entra Agent ID introduces a purpose-built identity hierarchy for AI agents:

- **Agent blueprint**: A logical definition of an agent type (like a template). Registered as an application in Entra
- **Agent identity blueprint principal**: A service principal representing the blueprint in the tenant—used only to create agent identities and agent users
- **Agent identity**: An instantiated agent identity that authenticates and accesses resources
- **Agent user**: An optional nonhuman user account for agents that need user-like capabilities (mailbox, Teams, calendar access)

Each blueprint can create multiple agent identities, and each agent identity can optionally have one agent user.

**The workflow for custom agents:**

1. **Create an Agent Blueprint**
   - Register your agent type in the Microsoft Entra admin center or via the Microsoft agent identity platform APIs
   - Define the blueprint with capabilities, permissions, and metadata
   - The blueprint acts as a template for creating agent instances

2. **Instantiate Agent Identities**
   - Create agent identities from the blueprint
   - Each identity authenticates via OAuth 2.0/OIDC (certificate, secret, or federated credentials)
   - Optionally create an agent user if the agent needs user-like access (mailbox, Teams participation)

3. **Assign a Sponsor**
   - Every agent identity should have a human sponsor responsible for oversight
   - Sponsors manage the agent's lifecycle and access decisions
   - If a sponsor leaves, sponsorship auto-transfers to their manager

4. **Configure Access**
   - Use access packages in Entra ID Governance for time-bound, auditable resource access
   - Apply Conditional Access policies (risk-based, attribute-based, or blueprint-grouped)
   - Grant Microsoft Graph permissions, Azure RBAC roles, or app roles as needed

5. **Register with Agent 365**
   - Agent 365 links the Entra identity to the central Agent Registry
   - Apply blueprint-level policies, enable observability, configure monitoring

6. **Deploy and monitor**
   - Deploy agent to your environment (Azure, AWS, GCP, or on-premises)
   - Entra Identity Protection monitors for risky behavior (sign-in spikes, unfamiliar resource access)
   - Monitor via Agent 365 dashboards and receive alerts if security issues arise

**Platform integration:**
- **Microsoft Foundry** automatically provisions agent blueprints and identities when you create agents
- **Copilot Studio** can automatically assign agent identities to agents created in Power Platform
- **Azure App Service / Functions** can use agent identities for secure resource access
- **Teams** developers can manage agent blueprints in the Developer Portal

**Key benefit:** Your custom agent gets the same governance and security as Microsoft-built agents—Conditional Access, Identity Protection, Identity Governance, and network controls all apply.

**Technical note:** Agent identities start with no permissions—you must explicitly grant access. They support both autonomous access (application-only) and delegated access (on behalf of a user).`,
    audiences: ['Developer / Architect', 'Security & Compliance'],
    categories: ['Building Agents'],
    difficulty: 'Advanced',
    sources: [
      {
        label: 'What are agent identities? — Microsoft Learn',
        url: 'https://learn.microsoft.com/en-us/entra/agent-id/identity-platform/what-is-agent-id',
        type: 'Official',
      },
      {
        label: 'Microsoft Entra Agent ID overview — Microsoft Learn',
        url: 'https://learn.microsoft.com/en-us/entra/agent-id/identity-professional/microsoft-entra-agent-identities-for-ai-agents',
        type: 'Official',
      },
      {
        label: 'Identity Governance for agent identities — Microsoft Learn',
        url: 'https://learn.microsoft.com/en-us/entra/id-governance/agent-id-governance-overview',
        type: 'Official',
      },
    ],
    status: 'Documented',
    lastReviewed: '2026-03-14',
    updatedAt: '2026-03-14',
    tags: ['entra agent id', 'custom agents', 'development', 'agent blueprint', 'agent identity', 'agent user'],
  },
  {
    id: 'dev-003',
    question: 'Can I use Agent 365 with open-source agent frameworks like LangChain, OpenAI Agents SDK, or Claude SDK?',
    shortAnswer: 'Yes. Agent 365 officially supports LangChain, OpenAI Agents SDK, Claude Code SDK, and other frameworks via the Agent 365 SDK. Microsoft provides quickstart guides for each. Agents can also be hosted on Azure, AWS, or GCP.',
    detailedAnswer: `**Supported frameworks (officially documented as of Feb 2026):**
- LangChain (Node.js quickstart available)
- OpenAI Agents SDK
- Claude Code SDK (Anthropic)
- Microsoft Agent Framework
- Microsoft Agents SDK
- Any other framework via manual instrumentation

**Hosting options:**
- Azure (recommended for Microsoft integration)
- AWS
- Google Cloud Platform (GCP)
- Any other cloud or on-premises endpoint

**How to integrate using the Agent 365 SDK:**

**1. Install Agent 365 CLI**
- Run: \`dotnet tool install --global Microsoft.Agents.A365.DevTools.Cli --prerelease\`

**2. Set up your environment**
- Run \`a365 setup\` to create Azure resources, configure permissions, and register your agent blueprint

**3. Add Work IQ MCP servers (optional)**
- Run \`a365 develop add-mcp-servers\` to wire in governed Work IQ MCP tools (Outlook, Teams, SharePoint, etc.)

**4. Add observability**
- Agent 365 SDK wraps each agent invocation in an InferenceScope for automatic capture via OpenTelemetry

**5. Publish**
- Run \`a365 publish\` to package and deploy your agent to the Microsoft 365 admin center

**For AI-guided setup:** The Agent 365 CLI supports AI-guided setup using GitHub Copilot, Claude Code, or OpenAI Codex - all from a single instruction file.

**Testing locally:** Use the Agent 365 CLI mock tooling server to simulate MCP server interactions offline without needing real Microsoft 365 connections.

**Best for:** Pro-code developers comfortable with CLI tooling who want full control over their agent's tech stack.`,
    audiences: ['Developer / Architect'],
    categories: ['Building Agents'],
    difficulty: 'Advanced',
    sources: [
      {
        label: 'Agent 365 SDK and CLI overview (Microsoft Learn)',
        url: 'https://learn.microsoft.com/en-us/microsoft-agent-365/developer/',
        type: 'Official',
      },
      {
        label: 'Quickstart: JavaScript LangChain agent (Microsoft Learn)',
        url: 'https://learn.microsoft.com/en-us/microsoft-agent-365/developer/quickstart-nodejs-langchain',
        type: 'Official',
      },
      {
        label: 'Quickstart: JavaScript Claude Agent SDK (Microsoft Learn)',
        url: 'https://learn.microsoft.com/en-us/microsoft-agent-365/developer/quickstart-nodejs-claude',
        type: 'Official',
      },
      {
        label: 'Agent365-devTools CLI (GitHub)',
        url: 'https://github.com/microsoft/Agent365-devTools',
        type: 'Official',
      },
    ],
    status: 'Documented',
    lastReviewed: '2026-02-19',
    updatedAt: '2026-02-19',
    tags: ['langchain', 'open source', 'claude sdk', 'openai agents sdk', 'cli', 'quickstart', 'multi-cloud'],
  },
  {
    id: 'dev-004',
    question: 'What is the Agent 365 SDK and how is it different from other Microsoft agent SDKs?',
    shortAnswer: 'The Agent 365 SDK adds enterprise capabilities (identity, observability, MCP tool access, notifications) to agents you\'ve already built on any framework. It is not an agent builder itself—it\'s an enterprise enhancement layer.',
    detailedAnswer: `**What the Agent 365 SDK does:**
The Agent 365 SDK extends agents built on **any** agent platform or SDK by adding:

- **Entra-based Agent identity** — each agent gets its own managed Entra ID
- **Governed Work IQ MCP tool access** — safe, policy-enforced connections to Microsoft 365 services (Outlook, Teams, SharePoint, etc.)
- **OpenTelemetry-based observability** — automatic tracing of inputs, outputs, and inference events
- **Activity protocol notifications** — proactive messaging to users and systems
- **Agent ID-driven governance** — integration with Agent 365 policy enforcement

**What it is NOT:**
- Not a replacement for agent frameworks like LangChain, Copilot Studio, or Microsoft Agent Framework
- Not a code generator or agent builder
- Not the same as the Microsoft 365 Agents SDK (which builds multi-channel bots)

**Supported frameworks for auto-instrumentation:**
- OpenAI Agents SDK
- LangChain
- Microsoft Agent Framework
- (Manual instrumentation available for any other framework)

**How it differs from the Microsoft 365 Agents SDK:**
The Microsoft 365 Agents SDK builds conversational agents that run across Teams, Outlook, and other M365 surfaces. The Agent 365 SDK is a governance/enterprise overlay that can wrap agents built with M365 Agents SDK or any other stack.

**Getting started:** See the official developer docs and quickstarts on Microsoft Learn.`,
    audiences: ['Developer / Architect'],
    categories: ['Building Agents'],
    difficulty: 'Intermediate',
    sources: [
      {
        label: 'Agent 365 SDK and CLI (Microsoft Learn)',
        url: 'https://learn.microsoft.com/en-us/microsoft-agent-365/developer/',
        type: 'Official',
      },
    ],
    status: 'Documented',
    lastReviewed: '2026-02-19',
    isNew: true,
    tags: ['sdk', 'developer', 'opentelemetry', 'observability', 'identity'],
  },
  {
    id: 'dev-005',
    question: 'What are Work IQ MCP servers and how do agents use them?',
    shortAnswer: 'Work IQ MCP servers are enterprise-grade Model Context Protocol (MCP) servers, powered by the Work IQ intelligence layer, that give agents safe, policy-enforced access to Microsoft 365 services like Outlook, Teams, SharePoint, OneDrive, Word, and Dataverse—all governed by Agent 365.',
    detailedAnswer: `**What Work IQ MCP servers are:**
Work IQ MCP servers implement the **Model Context Protocol (MCP)**—an open standard for providing AI agents with access to external tools and data sources. They are powered by **Work IQ**, the intelligence layer that grounds Copilot and agents in real-time organizational context across Data, Memory, and Inference layers. Microsoft pre-built and pre-certified these servers for core M365 services.

**Available Work IQ MCP servers (preview):**
- **Work IQ Copilot**: Chat with Microsoft 365 Copilot; start conversations and continue multi-turn threads; ground responses with files
- **Work IQ Mail**: Create, update, delete messages; reply and reply-all; semantic search across emails
- **Work IQ Calendar**: Create, list, update, and delete events; accept/decline invites; resolve scheduling conflicts
- **Work IQ Teams**: Create, update, delete chats; add members; post messages; channel operations
- **Work IQ User**: Get manager, direct reports, and profile info; search users across the organization
- **Work IQ Word**: Create and read documents; add comments; reply to comments
- **SharePoint and OneDrive MCP Server**: File and folder operations, metadata retrieval, sharing
- **Dataverse and Dynamics 365 MCP Server**: CRUD operations and domain-specific actions

**Key features:**
- **Centralized governance**: Admins manage MCP servers in the Microsoft 365 admin center—allow or block servers across the organization
- **Enterprise-grade security**: Scoped permissions, policy enforcement, and runtime observability ensure agents operate within compliance boundaries
- **Continuous evaluation**: All servers undergo rigorous testing for accuracy, latency, and reliability
- **Policy enforcement built-in**: DLP, MIP sensitivity labels, and Defender monitoring at the tooling gateway
- **Full observability**: All tool calls are traceable via Microsoft Defender Advanced Hunting for audits and anomaly detection
- **Works with any framework**: Use from Agent 365 SDK, Copilot Studio, Microsoft Foundry, LangChain, Claude SDK, or any MCP-compatible client

**How to add Work IQ MCP servers to your agent:**
- **Low-code (Copilot Studio)**: Add tools via the Tools tab → Model Context Protocol → select Work IQ servers
- **Pro-code (Microsoft Foundry)**: Browse the tool catalog, filter by Microsoft, and connect MCP servers
- **CLI**: Run \`a365 develop add-mcp-servers\` via the Agent 365 CLI
- **VS Code**: Connect directly to the MCP Management Server for custom server creation

**Custom MCP servers:** Use the **MCP Management Server** to build scenario-focused custom MCP servers using 1,500+ connectors, Microsoft Graph APIs, Dataverse custom APIs, and REST endpoints.

**Licensing:** Requires a Microsoft 365 Copilot license to use Work IQ MCP servers.

**Local testing:** Use the Agent 365 CLI mock tooling server for offline development—no real M365 connection needed.`,
    audiences: ['Developer / Architect', 'IT Admin', 'Security & Compliance'],
    categories: ['Building Agents'],
    difficulty: 'Intermediate',
    sources: [
      {
        label: 'Work IQ MCP overview (Microsoft Learn)',
        url: 'https://learn.microsoft.com/en-us/microsoft-agent-365/tooling-servers-overview',
        type: 'Official',
      },
      {
        label: 'Add and manage tools (Microsoft Learn)',
        url: 'https://learn.microsoft.com/en-us/microsoft-agent-365/developer/tooling',
        type: 'Official',
      },
      {
        label: 'A closer look at Work IQ (Microsoft Tech Community)',
        url: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/a-closer-look-at-work-iq/4499789',
        type: 'Official',
      },
    ],
    status: 'Documented',
    lastReviewed: '2026-03-12',
    updatedAt: '2026-03-12',
    tags: ['work iq', 'mcp', 'tooling servers', 'outlook', 'teams', 'sharepoint', 'governance', 'dlp', 'copilot studio', 'foundry'],
  },
  {
    id: 'dev-006',
    question: 'What is an Agent Blueprint and how does it work?',
    shortAnswer: 'An Agent Blueprint is an IT-approved, Entra-sourced template that defines an agent\'s capabilities, required MCP tool permissions, security constraints, and governance policies. All agent instances created from a Blueprint inherit its rules automatically.',
    detailedAnswer: `**What an Agent Blueprint defines:**
- Agent capabilities and description
- Required MCP tool server access (Outlook, Teams, SharePoint, etc.)
- Security and compliance constraints (DLP, external access, logging)
- Audit requirements and lifecycle metadata
- Linked governance policy templates

**How Blueprints work:**
1. **IT creates or approves a Blueprint** in Microsoft Entra and the Agent 365 admin center
2. **Blueprint is activated** for a tenant—users can request instances from the Microsoft 365 admin center
3. **Agents are provisioned** from the Blueprint, automatically inheriting all its rules
4. **Governance is consistent**—all instances of the same agent type have identical security posture

**For developers:**
- The Agent 365 CLI (\`a365 setup\`) creates your Blueprint as part of the setup process
- The CLI configures Azure resources, permissions, service principal, and MCP permissions on the Blueprint
- After setup, you have a fully configured, enterprise-ready agent foundation

**For IT admins:**
- Blueprints are the mechanism for pre-approving and standardizing agent types
- Users request new agent instances from a Blueprint via the admin center
- No individual agent configuration needed—compliance comes from the Blueprint

**Analogy:** Blueprints are like enterprise app provisioning templates—similar to how managed apps are deployed via Intune, but for AI agents.`,
    audiences: ['IT Admin', 'Developer / Architect', 'Security & Compliance'],
    categories: ['Building Agents'],
    difficulty: 'Intermediate',
    sources: [
      {
        label: 'Agent 365 CLI and Blueprint setup (Microsoft Learn)',
        url: 'https://learn.microsoft.com/en-us/microsoft-agent-365/developer/agent-365-cli',
        type: 'Official',
      },
      {
        label: 'Agent 365 development lifecycle (Microsoft Learn)',
        url: 'https://learn.microsoft.com/en-us/microsoft-agent-365/developer/a365-dev-lifecycle',
        type: 'Official',
      },
    ],
    status: 'Documented',
    lastReviewed: '2026-02-19',
    isNew: true,
    tags: ['blueprint', 'governance', 'template', 'entra', 'policy'],
  },
];
