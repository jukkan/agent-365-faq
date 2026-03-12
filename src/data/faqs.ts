import type { FaqItem } from './types';

export const faqs: FaqItem[] = [
  // BASICS
  {
    id: 'basics-001',
    question: 'What is Microsoft Agent 365 in simple terms?',
    shortAnswer: 'Agent 365 is Microsoft\'s control plane for AI agents - a centralized system to observe, secure, and govern all agents across your organization, whether built with Copilot Studio, Microsoft Foundry, open-source frameworks, or third-party platforms. Generally available May 1, 2026.',
    detailedAnswer: `Agent 365 is best understood as a **management and governance layer** for AI agents, similar to how Microsoft Entra ID manages user identities. It will be **generally available on May 1, 2026** at **$15 per user per month**.

**Key capabilities:**
- **Registry**: A central inventory of all agents in your organization, including shadow agents
- **Access Control**: Define what each agent can access using conditional access policies
- **Observability**: Explore connections between agents, people, and data; monitor agent behavior and performance in real time
- **Security**: Detect and respond to threats via Microsoft Defender integration
- **Governance**: Apply data protection policies via Microsoft Purview integration

**What Agent 365 unites:**
- Microsoft 365 apps optimized for agent productivity
- Microsoft Admin Center for agent management
- **Windows 365 for Agents** - a secure execution environment for computer-using AI agents
- Defender, Entra, and Purview for agent security and governance

Think of it as giving your IT and security teams the same level of control over AI agents that they have over human users - because agents are becoming "digital employees" that can take actions, access data, and make decisions.

Agent 365 is also available as part of **Microsoft 365 E7: The Frontier Suite** ($99/user/month), which bundles Copilot, Agent 365, Entra Suite, and E5 security.

Official documentation is available on Microsoft Learn - see the sources below.`,
    audiences: ['IT Admin', 'Security & Compliance', 'Business & Licensing'],
    categories: ['Basics'],
    difficulty: 'Intro',
    sources: [
      {
        label: 'Secure agentic AI for your frontier transformation — Microsoft Security Blog (March 9, 2026)',
        url: 'https://www.microsoft.com/en-us/security/blog/2026/03/09/secure-agentic-ai-for-your-frontier-transformation/',
        type: 'Official',
      },
      {
        label: 'Microsoft Agent 365 overview (Microsoft Learn)',
        url: 'https://learn.microsoft.com/en-us/microsoft-agent-365/overview',
        type: 'Official',
      },
      {
        label: 'Hello, world. — Agent 365 Blog launch post (Feb 2026)',
        url: 'https://techcommunity.microsoft.com/blog/agent-365-blog/hello-world-/4494728',
        type: 'Official',
      },
    ],
    status: 'Documented',
    lastReviewed: '2026-03-12',
    updatedAt: '2026-03-12',
    tags: ['control plane', 'registry', 'governance', 'windows 365 for agents', 'ga', 'pricing'],
  },
  {
    id: 'basics-002',
    question: 'How is Agent 365 different from Microsoft 365 Copilot and Copilot Studio?',
    shortAnswer: 'Copilot is an AI assistant, Copilot Studio is an agent-building tool, and Agent 365 is the governance and management layer that sits above all agents regardless of where they were built.',
    detailedAnswer: `These are three distinct but related products:

**Microsoft 365 Copilot:**
- An AI assistant embedded in Microsoft 365 apps (Word, Excel, Teams, etc.)
- Helps users with productivity tasks
- Can be extended with custom agents

**Copilot Studio:**
- A low-code tool for building custom agents
- Provides visual designers, connectors to data sources, and workflow automation
- Agents built here can be deployed to Microsoft 365 Copilot or Teams

**Microsoft Foundry (formerly Azure AI Foundry):**
- Microsoft's platform for building enterprise AI agents with pro-code tooling
- Includes integration with Agent 365 out of the box

**Agent 365:**
- A governance and management platform that works ACROSS all agents
- Manages agents from Copilot Studio, Microsoft Foundry, third-party platforms (Salesforce, ServiceNow), and custom-built agents
- Provides registry, security, access control, monitoring, and compliance
- Provides enterprise SDK and CLI for developers integrating any agent framework

**Analogy:** If agents are employees, Copilot Studio is the hiring/training department, and Agent 365 is HR + IT + Security combined - managing all employees regardless of which department hired them.`,
    audiences: ['IT Admin', 'Business & Licensing', 'Developer / Architect'],
    categories: ['Basics', 'Ecosystem & Integrations'],
    difficulty: 'Intro',
    sources: [
      {
        label: 'Microsoft Agent 365 overview (Microsoft Learn)',
        url: 'https://learn.microsoft.com/en-us/microsoft-agent-365/overview',
        type: 'Official',
      },
    ],
    status: 'Documented',
    lastReviewed: '2026-02-19',
    updatedAt: '2026-02-19',
    tags: ['copilot', 'copilot studio', 'microsoft foundry', 'comparison'],
  },
  {
    id: 'basics-003',
    question: 'Is Agent 365 itself an "agent"?',
    shortAnswer: 'No, Agent 365 is not an agent. It is a management platform - a control plane that governs other agents.',
    detailedAnswer: `Agent 365 is **not an AI agent** that performs tasks or makes decisions. It is infrastructure.

**What it IS:**
- A registry and database of agent metadata
- A policy enforcement system
- A monitoring and observability platform
- An integration layer connecting agents to security and compliance tools

**What it is NOT:**
- A conversational AI
- A task automation tool
- A replacement for Copilot or Copilot Studio

Think of it like Microsoft Entra ID: Entra doesn't "do work" on behalf of users, it manages their identities, permissions, and access. Agent 365 does the same for agents.`,
    audiences: ['IT Admin', 'Developer / Architect'],
    categories: ['Basics', 'Architecture'],
    difficulty: 'Intro',
    sources: [
      {
        label: 'Microsoft Agent 365 blog post',
        url: 'https://www.microsoft.com/en-us/microsoft-365/blog/2025/11/18/microsoft-agent-365-the-control-plane-for-ai-agents/',
        type: 'Official',
      },
    ],
    status: 'Documented',
    lastReviewed: '2025-11-18',
    tags: ['architecture', 'definition'],
  },

  // GOVERNANCE & SHADOW AGENTS
  {
    id: 'governance-001',
    question: 'How does Agent 365 help with shadow agents and agent sprawl?',
    shortAnswer: 'Agent 365 provides a central registry that discovers and tracks all agents in your environment, including unsanctioned ones. It can quarantine unregistered agents and enforce governance policies.',
    detailedAnswer: `Shadow agents are a growing risk: with 56 million monthly active Power Platform users, anyone can build agents without IT knowing.

**How Agent 365 addresses this:**

1. **Discovery**: Automatically discovers agents across Microsoft 365, Power Platform, Azure, and (eventually) third-party systems
2. **Registry**: Maintains a central inventory with metadata about each agent (purpose, owner, data access, etc.)
3. **Quarantine**: Can isolate unsanctioned agents until reviewed and approved
4. **Policy Enforcement**: Blocks agents that don't meet security or compliance requirements
5. **Visibility**: Dashboards show all agent activity, making shadow agents visible to IT and security teams

**Editor's note:** The details of how Agent 365 discovers third-party agents are still emerging. Initial focus is on Microsoft ecosystem agents.`,
    audiences: ['IT Admin', 'Security & Compliance'],
    categories: ['Governance & Shadow Agents', 'Security & Compliance'],
    difficulty: 'Intermediate',
    sources: [
      {
        label: 'Agent governance insights',
        url: 'https://office365itpros.com/2025/06/27/agent-governance-rencore/',
        type: 'Analysis',
      },
    ],
    status: 'Partially documented',
    lastReviewed: '2025-11-18',
    tags: ['shadow IT', 'governance', 'discovery', 'quarantine'],
  },
  {
    id: 'governance-002',
    question: 'What does it mean to quarantine an unsanctioned agent?',
    shortAnswer: 'Quarantine temporarily disables an agent and prevents it from executing actions or accessing data until IT reviews and either approves or permanently blocks it.',
    detailedAnswer: `When Agent 365 detects an unregistered or non-compliant agent, it can place the agent in quarantine:

**What happens during quarantine:**
- Agent cannot execute actions or workflows
- Data access is blocked
- Agent remains visible in the registry for review
- Owner is notified (if identifiable)

**Review process:**
1. IT/Security team investigates the agent's purpose, data access, and risk
2. Decision: Approve, require changes, or permanently block
3. If approved, agent is registered and policies are applied
4. If blocked, agent is deactivated

**Use cases for quarantine:**
- Agents built by users without proper approval
- Agents accessing sensitive data without appropriate controls
- Agents using unapproved third-party connectors
- Agents with security vulnerabilities

This is similar to how endpoint management tools quarantine unmanaged devices.`,
    audiences: ['IT Admin', 'Security & Compliance'],
    categories: ['Governance & Shadow Agents', 'Security & Compliance'],
    difficulty: 'Intermediate',
    sources: [
      {
        label: 'Microsoft Agent 365 landing page',
        url: 'https://www.microsoft.com/en-us/microsoft-agent-365',
        type: 'Official',
      },
    ],
    status: 'Partially documented',
    lastReviewed: '2025-11-18',
    tags: ['quarantine', 'policy enforcement'],
  },

  // SECURITY & COMPLIANCE
  {
    id: 'security-001',
    question: 'What protections does Microsoft Defender add for AI agents via Agent 365?',
    shortAnswer: 'Defender provides security posture management, threat detection and investigation, and runtime threat protection for agents—including protection against prompt manipulation, model tampering, and agent-based attack chains.',
    detailedAnswer: `Microsoft Defender integrates with Agent 365 to secure agents with purpose-built protections:

**Security Posture Management (public preview):**
- Detects misconfigurations and vulnerabilities in Microsoft Foundry and Copilot Studio agents
- Enables security leaders to proactively resolve issues before they become attack vectors
- Recommends security improvements

**Detection, Investigation, and Response (public preview):**
- Enables investigation and remediation of attacks that target agents
- Ensures agents are accounted for in security investigations
- Generates alerts when threats are detected
- Provides investigation tools and timelines

**Runtime Threat Protection (public preview, entering April 2026):**
- Protects agents that use the Agent 365 tools gateway
- Detects, blocks, and investigates malicious agent activities at runtime
- Protects against prompt manipulation, model tampering, and agent-based attack chains

**Agent Risk Signals (public preview):**
- Defender assesses risk of agent compromise
- Entra evaluates identity risk for agents
- Purview evaluates insider risk for agent interactions
- Security teams can evaluate agent risk just like they do for users
- Agent actions can be blocked based on compromise signals, sign-in anomalies, and risky data interactions

**Note:** Several Defender capabilities for agents are in **public preview** and will continue to be in preview at GA on May 1, 2026. Runtime threat protection enters public preview in April 2026.`,
    audiences: ['Security & Compliance', 'IT Admin'],
    categories: ['Security & Compliance'],
    difficulty: 'Intermediate',
    sources: [
      {
        label: 'Secure agentic AI for your frontier transformation — Microsoft Security Blog (March 9, 2026)',
        url: 'https://www.microsoft.com/en-us/security/blog/2026/03/09/secure-agentic-ai-for-your-frontier-transformation/',
        type: 'Official',
      },
      {
        label: 'Securing autonomous agents with Microsoft Security',
        url: 'https://www.microsoft.com/en-us/security/blog/2025/08/26/securing-and-governing-the-rise-of-autonomous-agents/',
        type: 'Official',
      },
    ],
    status: 'Documented',
    lastReviewed: '2026-03-12',
    updatedAt: '2026-03-12',
    tags: ['defender', 'threat detection', 'security', 'runtime protection', 'posture management'],
  },
  {
    id: 'security-002',
    question: 'How does Agent 365 address prompt injection and data exfiltration risks?',
    shortAnswer: 'Agent 365 uses Defender runtime threat protection to detect and block prompt manipulation at runtime, and Purview inline DLP to block sensitive data in prompts. Purview sensitivity labels ensure agents follow the same data handling rules as users.',
    detailedAnswer: `Prompt injection and data exfiltration are two of the biggest risks with AI agents. Agent 365 addresses both through multiple layers:

**Prompt Injection / Manipulation Protection:**
- **Defender runtime threat protection** detects and blocks prompt manipulation, model tampering, and agent-based attack chains (public preview, entering April 2026)
- Detection of jailbreak attempts and malicious instructions
- Blocking of requests that try to override the agent's system prompt
- Integration with Microsoft Defender's threat intelligence

**Data Exfiltration Prevention:**
- **Inline Data Loss Prevention (DLP)** for prompts to Copilot Studio agents blocks sensitive information such as personally identifiable information, credit card numbers, and custom sensitive information types (SITs) from being processed in the runtime
- **Information Protection** ensures agents inherit and honor Microsoft 365 data sensitivity labels—agents follow the same rules as users for handling sensitive data
- **Data Security Posture Management** provides visibility into data risks for agents so admins can proactively mitigate them
- **Insider Risk Management** extends to agents to block and flag risky agent interactions with sensitive data

**Data Lifecycle and Compliance:**
- **Data Lifecycle Management** enables retention and deletion policies for prompts and agent-generated data
- **Audit and eDiscovery** treats AI agents as auditable entities alongside users and applications
- **Communication Compliance** extends to agent interactions to detect risky AI communications

**Limitations to note:**
- Some Purview capabilities (insider risk signals) will remain in public preview at GA
- Protection is strongest within the Microsoft ecosystem
- Third-party agents may require additional configuration
- Runtime filtering can impact performance

**Best practice:** Use least-privilege access and test agents in isolated environments before production deployment.`,
    audiences: ['Security & Compliance', 'Developer / Architect'],
    categories: ['Security & Compliance'],
    difficulty: 'Advanced',
    sources: [
      {
        label: 'Secure agentic AI for your frontier transformation — Microsoft Security Blog (March 9, 2026)',
        url: 'https://www.microsoft.com/en-us/security/blog/2026/03/09/secure-agentic-ai-for-your-frontier-transformation/',
        type: 'Official',
      },
      {
        label: 'Microsoft extends Zero Trust to secure the agentic workforce',
        url: 'https://www.microsoft.com/en-us/security/blog/2025/05/19/microsoft-extends-zero-trust-to-secure-the-agentic-workforce/',
        type: 'Official',
      },
    ],
    status: 'Documented',
    lastReviewed: '2026-03-12',
    updatedAt: '2026-03-12',
    tags: ['prompt injection', 'data exfiltration', 'purview', 'DLP', 'inline dlp', 'information protection'],
  },
  {
    id: 'security-003',
    question: 'What is the relationship between Agent 365, Entra Agent ID, Defender, and Purview?',
    shortAnswer: 'Agent 365 is the orchestration layer. Entra Agent ID provides identities and access governance, Defender provides security and threat protection, and Purview provides data governance and compliance. They work together as an integrated stack.',
    detailedAnswer: `These four products form Microsoft's AI agent security and governance stack:

**Microsoft Entra Agent ID (included in Agent 365):**
- **Agent ID**: Gives each agent a unique identity designed specifically for agents
- **Identity Protection and Conditional Access**: Extends user policies to agents—real-time access decisions based on risk, device compliance, and security attributes
- **Identity Governance**: Limits agent access with scoped access packages and audit capabilities
- **Security policy templates**: Automates collaboration between IT and security teams

**Agent 365 (the control plane):**
- **Agent Registry**: Central inventory of all agents (Microsoft, ecosystem partners, API-registered)
- **Observability**: Agent behavior, performance, adoption metrics, agent map, and activity details
- **Agent risk signals**: Aggregated from Defender, Entra, and Purview
- **Policy orchestration** across all agents

**Microsoft Defender (security, included in Agent 365):**
- **Security posture management** for Foundry and Copilot Studio agents (public preview)
- **Detection, investigation, and response** for agent-targeted attacks (public preview)
- **Runtime threat protection** for agents using the tools gateway (public preview, entering April 2026)
- Protects against prompt manipulation, model tampering, and agent-based attack chains

**Microsoft Purview (data governance, included in Agent 365):**
- **Data Security Posture Management**: Visibility into data risks for agents
- **Information Protection**: Agents inherit and honor M365 sensitivity labels
- **Inline DLP**: Blocks sensitive data in prompts to Copilot Studio agents
- **Insider Risk Management**: Extends insider risk protection to agents
- **Data Lifecycle Management**: Retention/deletion policies for agent data
- **Audit and eDiscovery**: Agents are auditable entities
- **Communication Compliance**: Extends to agent interactions

**How they work together:**
1. An agent is given an **Entra Agent ID** identity
2. **Agent 365** registers the agent, applies Blueprint policies, and provides observability
3. **Purview** enforces data protection—sensitivity labels, DLP, insider risk
4. **Defender** monitors for threats—posture assessment, detection, runtime protection
5. All activity is logged and auditable across the stack

Think of it as: Entra = ID card, Agent 365 = HR system, Defender = security guard, Purview = compliance officer.`,
    audiences: ['Security & Compliance', 'IT Admin', 'Developer / Architect'],
    categories: ['Security & Compliance', 'Architecture', 'Ecosystem & Integrations'],
    difficulty: 'Advanced',
    sources: [
      {
        label: 'Secure agentic AI for your frontier transformation — Microsoft Security Blog (March 9, 2026)',
        url: 'https://www.microsoft.com/en-us/security/blog/2026/03/09/secure-agentic-ai-for-your-frontier-transformation/',
        type: 'Official',
      },
      {
        label: 'Announcing Microsoft Entra Agent ID',
        url: 'https://techcommunity.microsoft.com/blog/microsoft-entra-blog/announcing-microsoft-entra-agent-id-secure-and-manage-your-ai-agents/3827392',
        type: 'Official',
      },
    ],
    status: 'Documented',
    lastReviewed: '2026-03-12',
    updatedAt: '2026-03-12',
    tags: ['entra', 'defender', 'purview', 'architecture', 'integration', 'agent id'],
  },

  // LICENSING & AVAILABILITY
  {
    id: 'licensing-001',
    question: 'How do I get access to Agent 365 today?',
    shortAnswer: 'Agent 365 is generally available on May 1, 2026, priced at $15 per user per month. Until then, it is available through the Frontier preview program for tenants with at least one Microsoft 365 Copilot license.',
    detailedAnswer: `**General availability: May 1, 2026**

Microsoft announced on March 9, 2026 that Agent 365 will be **generally available on May 1, 2026**, priced at **$15 per user per month**.

Agent 365 is also included in **Microsoft 365 E7: The Frontier Suite** ($99 per user per month), which bundles Microsoft 365 Copilot, Agent 365, Microsoft Entra Suite, and Microsoft 365 E5.

**Current availability (before May 1):**

Agent 365 remains in the **Frontier preview program** until GA.

**Prerequisites for Frontier access:**
- At least one Microsoft 365 Copilot license on the tenant
- Global Admin or Copilot Admin access to Microsoft 365 Admin Center

**Exact steps to enable Frontier:**
1. Sign into Microsoft 365 admin center
2. Select **Copilot** in the left navigation
3. Select **Settings**
4. Under **User access**, select **Copilot Frontier**
5. Choose specific users, groups, or select all to grant access
6. Go to **Agents** from the left pane to get started
7. If prompted, agree to the terms of service

**Important caveats for Frontier:**
- Frontier is for early adopters who want to test new features before GA
- Some Agent 365 capabilities (Defender risk signals, Purview insider risk, runtime threat protection) will remain in public preview at GA
- Features and capabilities are still evolving

**Next steps after enabling:**
- Take a tour of your Agent 365 overview page
- Use the Agent 365 documentation hub on Microsoft Learn
- For developers: explore the Agent 365 SDK and CLI`,
    audiences: ['IT Admin', 'Business & Licensing'],
    categories: ['Licensing & Availability', 'Rollout & Adoption'],
    difficulty: 'Intro',
    sources: [
      {
        label: 'Secure agentic AI for your frontier transformation — Microsoft Security Blog (March 9, 2026)',
        url: 'https://www.microsoft.com/en-us/security/blog/2026/03/09/secure-agentic-ai-for-your-frontier-transformation/',
        type: 'Official',
      },
      {
        label: 'Microsoft Agent 365 overview (Microsoft Learn)',
        url: 'https://learn.microsoft.com/en-us/microsoft-agent-365/overview',
        type: 'Official',
      },
    ],
    status: 'Documented',
    lastReviewed: '2026-03-12',
    updatedAt: '2026-03-12',
    tags: ['general availability', 'pricing', 'availability', 'admin center', 'e7'],
  },
  {
    id: 'licensing-002',
    question: 'Is Agent 365 a separate paid product, or included in existing Microsoft 365 plans?',
    shortAnswer: 'Agent 365 is a separate paid product at $15 per user per month, generally available May 1, 2026. It is also included in the new Microsoft 365 E7: The Frontier Suite at $99 per user per month.',
    detailedAnswer: `**Pricing announced (March 9, 2026):**
- **Agent 365 standalone:** $15 per user per month (GA May 1, 2026)
- **Microsoft 365 E7: The Frontier Suite:** $99 per user per month (GA May 1, 2026)

**What is included in Agent 365 ($15/user/month):**
- Agent Registry and observability
- Agent ID (Entra-based unique identity for agents)
- Identity Protection and Conditional Access for agents
- Identity Governance for agents
- Microsoft Purview capabilities: Data Security Posture Management, Information Protection, Inline DLP, Insider Risk Management, Data Lifecycle Management, Audit & eDiscovery, Communication Compliance
- Microsoft Defender protections for agents: security posture management, detection/investigation/response, runtime threat protection
- Security policy templates

**What is included in Microsoft 365 E7 ($99/user/month):**
- Everything in Microsoft 365 E5
- Microsoft 365 Copilot
- Agent 365
- Microsoft Entra Suite
- Advanced Defender, Entra, Intune, and Purview security capabilities

**What this means for existing customers:**
- E5 customers: Agent 365 is NOT included — purchase as add-on or upgrade to E7
- E3 customers: Agent 365 is available as add-on, or upgrade path to E7
- Copilot customers: Agent 365 is separate — governs Copilot agents but is not bundled with the Copilot license itself

**Note:** Some capabilities (Defender risk signals, Purview insider risk, runtime threat protection) will remain in public preview on May 1.

**Learn more:** <a href="https://licensing.guide/tag/agent-365/" target="_blank" rel="noopener noreferrer" style="color: #0078d4; text-decoration: underline;">Read more about Microsoft Agent 365 licensing in The Licensing Guide blog</a>`,
    audiences: ['Business & Licensing', 'IT Admin'],
    categories: ['Licensing & Availability'],
    difficulty: 'Intermediate',
    sources: [
      {
        label: 'Secure agentic AI for your frontier transformation — Microsoft Security Blog (March 9, 2026)',
        url: 'https://www.microsoft.com/en-us/security/blog/2026/03/09/secure-agentic-ai-for-your-frontier-transformation/',
        type: 'Official',
      },
      {
        label: 'Microsoft Agent 365 landing page',
        url: 'https://www.microsoft.com/en-us/microsoft-agent-365',
        type: 'Official',
      },
    ],
    status: 'Documented',
    lastReviewed: '2026-03-12',
    updatedAt: '2026-03-12',
    tags: ['pricing', 'licensing', 'SKU', 'e7'],
  },

  // DEVELOPER EXPERIENCE
  {
    id: 'dev-001',
    question: 'If I build an agent in Copilot Studio or Microsoft Foundry, what do I need to do to make it Agent 365 compatible?',
    shortAnswer: 'Agents built in Copilot Studio and Microsoft Foundry integrate with Agent 365 automatically. For custom agents built on any SDK, use the Agent 365 SDK and CLI to add enterprise identity, observability, and governed MCP tool access.',
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
  - Governed MCP tool access (Outlook, Teams, SharePoint, etc.)
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
    categories: ['Developer Experience', 'Rollout & Adoption'],
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
    shortAnswer: 'Entra Agent ID provides the identity and authentication mechanism for your custom agent. Agent 365 registers that identity and applies governance, security, and monitoring policies.',
    detailedAnswer: `**The workflow for custom agents:**

1. **Create an Entra Agent ID**
   - Navigate to Microsoft Entra admin center
   - Create a new "Agent" identity (similar to app registrations)
   - Configure authentication method (certificate, secret, federated)
   - Grant necessary API permissions

2. **Build your agent**
   - Develop using your preferred framework (LangChain, Semantic Kernel, custom)
   - Configure the agent to authenticate using the Entra Agent ID
   - Implement required interfaces for telemetry and logging

3. **Register with Agent 365**
   - Submit agent metadata to Agent 365 registry
   - Provide description, capabilities, data access requirements
   - Agent 365 links the Entra identity to the registry entry

4. **Apply policies**
   - Configure conditional access (when can the agent run?)
   - Set data access policies via Purview
   - Enable Defender monitoring

5. **Deploy and monitor**
   - Deploy agent to your environment
   - Monitor via Agent 365 dashboards
   - Receive alerts if security issues arise

**Key benefit:** Your custom agent now has the same governance and security as Microsoft-built agents, creating a unified management experience.

**Technical note:** Entra Agent IDs work like managed identities with no default permissions - you must explicitly grant access to each resource.`,
    audiences: ['Developer / Architect', 'Security & Compliance'],
    categories: ['Developer Experience', 'Architecture', 'Security & Compliance'],
    difficulty: 'Advanced',
    sources: [
      {
        label: 'Microsoft Entra Agent ID launch',
        url: 'https://office365itpros.com/2025/05/27/entra-agent-id/',
        type: 'Analysis',
      },
    ],
    status: 'Partially documented',
    lastReviewed: '2025-11-18',
    tags: ['entra agent id', 'custom agents', 'development'],
  },

  // ECOSYSTEM & INTEGRATIONS
  {
    id: 'ecosystem-001',
    question: 'Can Agent 365 manage third-party agents from Salesforce, ServiceNow, or Workday?',
    shortAnswer: 'Yes, in theory. Agent 365 is designed to support third-party agents, but the integration details and partner ecosystem are still developing. Initial focus is on Microsoft ecosystem agents.',
    detailedAnswer: `**Microsoft's stated vision:**
Agent 365 is positioned as an open platform that can govern agents from any source - Microsoft, ISVs, and custom-built.

**How third-party integration works (planned):**
1. Third-party agent must have an Entra Agent ID
2. Agent metadata is registered in Agent 365
3. Agent authenticates via Entra when accessing Microsoft 365 data
4. Agent 365 applies policies and monitoring

**Current reality:**
- Integration mechanisms are still being finalized
- ISV partners are building Agent 365 connectors
- Most documentation focuses on Microsoft-built agents
- Cross-platform governance is complex

**Challenges:**
- Third-party agents may use different identity systems
- Data flows outside Microsoft cloud may not be fully visible
- Compliance and monitoring may be limited for external agents
- Partner ecosystem maturity takes time

**Practical advice:**
If you need to govern third-party agents today:
- Ask your ISV vendor about Agent 365 integration plans
- Consider using API gateways for visibility and control
- Implement logging and monitoring at integration points
- Use Entra conditional access to control data access

**Editor's note:** This is an area to watch closely as Microsoft announces partnerships and integration patterns.`,
    audiences: ['IT Admin', 'Developer / Architect', 'Security & Compliance'],
    categories: ['Ecosystem & Integrations', 'Governance & Shadow Agents'],
    difficulty: 'Advanced',
    sources: [
      {
        label: 'Microsoft Agent 365 landing page',
        url: 'https://www.microsoft.com/en-us/microsoft-agent-365',
        type: 'Official',
      },
    ],
    status: 'Partially documented',
    lastReviewed: '2025-11-18',
    tags: ['third-party', 'salesforce', 'servicenow', 'integrations'],
  },
  {
    id: 'ecosystem-002',
    question: 'What is the relationship between Agent 365 and the Microsoft 365 Copilot agent store?',
    shortAnswer: 'The Copilot agent store is a discovery and distribution channel for agents. Agent 365 is the governance layer that manages all agents, including those from the store.',
    detailedAnswer: `**Microsoft 365 Copilot Agent Store:**
- A marketplace where users can discover and add agents to Copilot
- Includes Microsoft-built agents (Researcher, Analyst, etc.) and third-party agents
- Agents are categorized by role and use case
- Users can install agents with a few clicks

**Agent 365's role:**
- Governs which agents from the store can be installed (IT controls)
- Monitors usage of store-installed agents
- Applies security and compliance policies to all agents
- Provides visibility into which agents are being used and by whom

**IT admin workflow:**
1. User browses agent store and requests to install an agent
2. Request triggers approval workflow (if configured)
3. IT reviews agent permissions and data access
4. If approved, agent is installed and registered in Agent 365
5. Agent 365 monitors the agent's activity

**Controls available:**
- Block specific agents tenant-wide
- Require approval for certain categories of agents
- Auto-approve pre-vetted agents
- Set data access restrictions per agent

**Think of it as:** The agent store is like an app store, and Agent 365 is like Mobile Device Management (MDM) for those apps.`,
    audiences: ['IT Admin', 'Business & Licensing'],
    categories: ['Ecosystem & Integrations', 'Governance & Shadow Agents'],
    difficulty: 'Intermediate',
    sources: [
      {
        label: 'Microsoft 365 Copilot built for the era of human-agent collaboration',
        url: 'https://www.microsoft.com/en-us/microsoft-365/blog/2025/04/23/microsoft-365-copilot-built-for-the-era-of-human-agent-collaboration/',
        type: 'Official',
      },
    ],
    status: 'Documented',
    lastReviewed: '2025-11-18',
    tags: ['agent store', 'copilot', 'marketplace'],
  },

  // ROLLOUT & ADOPTION
  {
    id: 'rollout-001',
    question: 'What should I do to prepare for Agent 365 before general availability on May 1?',
    shortAnswer: 'Start by inventorying existing agents in your environment, documenting their purpose and data access, reviewing your Entra and Purview governance policies, and establishing an agent approval process. GA is May 1, 2026.',
    detailedAnswer: `**Agent 365 is generally available May 1, 2026** at $15/user/month. Here's how to prepare:

**Preparation checklist:**

**1. Inventory existing agents**
- Identify agents built in Copilot Studio and Power Platform
- Document custom agents and automations
- List third-party tools that use AI agents (Salesforce, ServiceNow, etc.)
- Identify "shadow agents" built without IT knowledge

**2. Define governance policies**
- Who can create agents? (role-based permissions)
- What approval process is required?
- What data can agents access?
- How long are agents retained/audited?

**3. Review security posture**
- Audit Entra ID configurations and conditional access policies
- Review Purview data classification and sensitivity labels
- Ensure Defender is properly configured
- Test incident response procedures

**4. Establish monitoring practices**
- Define KPIs for agent performance and usage
- Set up logging and telemetry collection
- Create dashboards for visibility
- Train security team on agent-related threats

**5. Pilot planning (use Frontier now)**
- If not already in Frontier, enable it to test Agent 365 before GA
- Identify low-risk use cases for initial agent deployments
- Select pilot users and teams
- Create feedback mechanisms
- Plan for iterative rollout

**6. Budget and licensing**
- Agent 365: $15/user/month standalone
- Microsoft 365 E7: $99/user/month (includes Copilot + Agent 365 + E5 + Entra Suite)
- Determine which users need Agent 365 licensing
- Engage your Microsoft account team for volume licensing

**7. Training and communication**
- Educate users on what agents are and how to use them safely
- Train IT/security teams on Agent 365 capabilities
- Document procedures and best practices
- Set expectations about what is/isn't allowed

Starting preparation now positions you to move quickly at GA on May 1.`,
    audiences: ['IT Admin', 'Security & Compliance'],
    categories: ['Rollout & Adoption', 'Governance & Shadow Agents'],
    difficulty: 'Intermediate',
    sources: [
      {
        label: 'Secure agentic AI for your frontier transformation — Microsoft Security Blog (March 9, 2026)',
        url: 'https://www.microsoft.com/en-us/security/blog/2026/03/09/secure-agentic-ai-for-your-frontier-transformation/',
        type: 'Official',
      },
    ],
    status: 'Documented',
    lastReviewed: '2026-03-12',
    updatedAt: '2026-03-12',
    tags: ['preparation', 'planning', 'rollout', 'ga'],
  },
  {
    id: 'rollout-002',
    question: 'Should I enable Agent 365 for my entire tenant or start with a pilot group?',
    shortAnswer: 'Start with a pilot group. Use Frontier now to test before GA on May 1, then expand gradually. Enable Agent 365 for a limited set of users and use cases first, learn from the experience, then expand.',
    detailedAnswer: `**Recommended approach: Phased rollout**

**Phase 0: Frontier testing (now through May 1)**
- Enable Frontier for IT admins and security team
- Test Agent 365 features with non-production agents
- Familiarize your team before GA

**Phase 1: IT and Security pilot (GA + 2-4 weeks)**
- Enable Agent 365 for IT admins and security team
- Register a few production agents
- Familiarize team with dashboards, policies, and controls
- Identify any issues or gaps

**Phase 2: Departmental pilot (1-2 months)**
- Select a friendly department (e.g., HR, marketing)
- Enable Agent 365 for that group
- Deploy 3-5 pre-approved agents relevant to their work
- Gather feedback on usability and value
- Refine policies based on learnings

**Phase 3: Broad rollout (ongoing)**
- Expand to additional departments
- Enable agent store access with guardrails
- Allow users to request custom agents
- Continuously monitor and adjust policies

**Why phased rollout?**
- Some Agent 365 features will still be in public preview at GA (Defender risk signals, Purview insider risk, runtime threat protection)
- Best practices are evolving
- Risk of disrupting existing workflows
- Opportunity to learn before widespread adoption
- Easier to troubleshoot issues with smaller group

**Exception:** If you have minimal agent usage today, tenant-wide enablement may be fine - there's less to disrupt.`,
    audiences: ['IT Admin'],
    categories: ['Rollout & Adoption'],
    difficulty: 'Intermediate',
    sources: [
      {
        label: 'Secure agentic AI for your frontier transformation — Microsoft Security Blog (March 9, 2026)',
        url: 'https://www.microsoft.com/en-us/security/blog/2026/03/09/secure-agentic-ai-for-your-frontier-transformation/',
        type: 'Official',
      },
    ],
    status: 'Documented',
    lastReviewed: '2026-03-12',
    updatedAt: '2026-03-12',
    tags: ['pilot', 'rollout strategy', 'adoption', 'ga'],
  },

  // ARCHITECTURE
  {
    id: 'arch-001',
    question: 'Where does Agent 365 fit in the Microsoft 365 architecture?',
    shortAnswer: 'Agent 365 sits alongside Microsoft 365 Admin Center as a management layer, integrating with Entra ID for identity, Defender for security, Purview for compliance, and Windows 365 for Agents for secure agent execution environments.',
    detailedAnswer: `**Architectural layers:**

**Layer 1: Agents (the workload)**
- Microsoft 365 Copilot agents
- Copilot Studio agents
- Microsoft Foundry agents (formerly Azure AI Foundry)
- Third-party agents (Salesforce, ServiceNow, etc.)
- Custom-built agents (LangChain, OpenAI Agents SDK, Claude SDK, etc.)
- Computer-using agents running via **Windows 365 for Agents**

**Layer 2: Agent 365 (control plane)**
- Registry and metadata store (including shadow agent discovery)
- Agent Blueprint system (IT-approved governance templates from Entra)
- Policy orchestration engine
- Monitoring and telemetry via OpenTelemetry / observability dashboards
- Admin interfaces in Microsoft 365 Admin Center

**Layer 3: Security and compliance integrations**
- **Microsoft Entra** (identity and access via Entra Agent IDs)
- **Microsoft Defender** (threat protection, runtime security)
- **Microsoft Purview** (data governance, DLP)
- **Windows 365 for Agents** (secure execution environment for computer-using AI agents)
- MCP Tooling Gateway (governed access to M365 services via MCP servers)

**Layer 4: Data and services**
- Microsoft Graph (data access)
- SharePoint, OneDrive, Exchange (data stores)
- Microsoft 365 apps (Word, Excel, Teams, etc.) via MCP Tooling Servers
- Dataverse / Dynamics 365
- External data sources (via connectors)
- Any cloud endpoint: Azure, AWS, GCP

**Data flow example:**
1. User invokes an agent in Teams
2. Agent authenticates with Entra Agent ID
3. Agent 365 checks Blueprint policies (is agent approved? can it run now?)
4. Defender monitors the request for threats
5. Agent calls MCP Tooling Server to access data safely (Outlook, SharePoint, etc.)
6. Purview applies sensitivity labels and DLP
7. Agent performs task and responds
8. Activity is logged via OpenTelemetry for audit and observability

This architecture enables centralized governance without requiring changes to each individual agent's business logic.`,
    audiences: ['Developer / Architect', 'IT Admin'],
    categories: ['Architecture'],
    difficulty: 'Advanced',
    sources: [
      {
        label: 'Microsoft Agent 365 overview (Microsoft Learn)',
        url: 'https://learn.microsoft.com/en-us/microsoft-agent-365/overview',
        type: 'Official',
      },
      {
        label: 'Agent 365 tooling servers overview (Microsoft Learn)',
        url: 'https://learn.microsoft.com/en-us/microsoft-agent-365/tooling-servers-overview',
        type: 'Official',
      },
    ],
    status: 'Documented',
    lastReviewed: '2026-02-19',
    updatedAt: '2026-02-19',
    tags: ['architecture', 'integration', 'layers', 'windows 365 for agents', 'mcp', 'blueprint'],
  },

  // Additional FAQs
  {
    id: 'basics-004',
    question: 'Who needs Agent 365? Is it only for large enterprises?',
    shortAnswer: 'Agent 365 is most valuable for organizations with multiple agents, complex compliance requirements, or concerns about shadow AI. Small businesses with minimal agent usage may not need it yet.',
    detailedAnswer: `**Organizations that benefit most:**

**Large enterprises (1000+ employees):**
- Multiple departments building agents independently
- Regulatory compliance requirements (GDPR, HIPAA, SOC 2)
- Need for centralized visibility and control
- Complex security postures

**Regulated industries:**
- Financial services
- Healthcare
- Government contractors
- Legal and professional services

**Organizations with high agent adoption:**
- Heavy Power Platform and Copilot Studio usage
- Many custom agents and automations
- Third-party agent integrations
- Agent sprawl or shadow AI concerns

**Who might NOT need it (yet):**
- Small businesses with <100 users
- Organizations with no or minimal agent usage
- Companies without compliance requirements
- Teams just starting to explore agents

**Recommendation:** Even if you don't need Agent 365 today, understanding it helps you make informed decisions as you scale agent adoption.`,
    audiences: ['Business & Licensing', 'IT Admin'],
    categories: ['Basics', 'Licensing & Availability'],
    difficulty: 'Intro',
    sources: [],
    status: 'Not yet documented / speculative',
    lastReviewed: '2025-11-18',
    tags: ['target audience', 'use cases'],
  },
  {
    id: 'security-004',
    question: 'What are the biggest security risks with AI agents that Agent 365 helps mitigate?',
    shortAnswer: 'Key risks include unauthorized data access, prompt injection attacks, credential theft, agent impersonation, and data exfiltration. Agent 365 addresses these through identity, access control, monitoring, and threat detection.',
    detailedAnswer: `**Top security risks and Agent 365's mitigations:**

**1. Unauthorized data access**
- **Risk:** Agent accesses data it shouldn't
- **Mitigation:** Entra Agent ID with least-privilege access, conditional access policies

**2. Prompt injection**
- **Risk:** Malicious user manipulates agent's behavior through crafted prompts
- **Mitigation:** Defender runtime filtering, input validation, monitoring

**3. Credential theft**
- **Risk:** Agent's credentials are stolen and used maliciously
- **Mitigation:** Entra identity protection, anomaly detection, certificate-based auth

**4. Agent impersonation**
- **Risk:** Fake agent pretends to be legitimate
- **Mitigation:** Registry with verified agents, quarantine of unknown agents

**5. Data exfiltration**
- **Risk:** Agent leaks sensitive data externally
- **Mitigation:** Purview DLP policies, monitoring of data flows, sensitivity labels

**6. Shadow agents**
- **Risk:** Unmanaged agents bypass security controls
- **Mitigation:** Discovery and registration, quarantine capabilities

**7. Supply chain attacks**
- **Risk:** Compromised third-party agent or dependency
- **Mitigation:** Registry verification, Defender threat intelligence, agent isolation

**Layered defense:** Agent 365 doesn't provide a single silver bullet - it orchestrates multiple security controls working together.

**Important:** No security system is perfect. Agent 365 reduces risk but doesn't eliminate it entirely.`,
    audiences: ['Security & Compliance', 'IT Admin'],
    categories: ['Security & Compliance'],
    difficulty: 'Advanced',
    sources: [
      {
        label: 'Securing and governing autonomous agents',
        url: 'https://www.microsoft.com/en-us/security/blog/2025/08/26/securing-and-governing-the-rise-of-autonomous-agents/',
        type: 'Official',
      },
    ],
    status: 'Partially documented',
    lastReviewed: '2025-11-18',
    tags: ['security risks', 'threat mitigation'],
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

**3. Add MCP tool servers (optional)**
- Run \`a365 develop add-mcp-servers\` to wire in governed Microsoft 365 MCP tools (Outlook, Teams, SharePoint, etc.)

**4. Add observability**
- Agent 365 SDK wraps each agent invocation in an InferenceScope for automatic capture via OpenTelemetry

**5. Publish**
- Run \`a365 publish\` to package and deploy your agent to the Microsoft 365 admin center

**For AI-guided setup:** The Agent 365 CLI supports AI-guided setup using GitHub Copilot, Claude Code, or OpenAI Codex - all from a single instruction file.

**Testing locally:** Use the Agent 365 CLI mock tooling server to simulate MCP server interactions offline without needing real Microsoft 365 connections.

**Best for:** Pro-code developers comfortable with CLI tooling who want full control over their agent's tech stack.`,
    audiences: ['Developer / Architect'],
    categories: ['Developer Experience', 'Architecture'],
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
    id: 'governance-003',
    question: 'How granular are the access controls? Can I restrict agents to specific SharePoint sites or specific users?',
    shortAnswer: 'Yes. Agent 365 leverages Entra conditional access and Microsoft Graph permissions, allowing you to control which data sources, sites, users, and even times of day an agent can access.',
    detailedAnswer: `**Access control mechanisms:**

**1. Resource-level permissions (via Entra)**
- Grant agent access to specific SharePoint sites
- Limit to certain OneDrive folders
- Restrict to specific mailboxes or Teams channels
- Control access to specific APIs

**2. User-based restrictions**
- Agent can only access data for specific users
- Agent can only be invoked by certain roles
- Agent inherits user's permissions (user-delegated access)

**3. Conditional access policies**
- Time-based restrictions (e.g., agent only runs during business hours)
- Location-based restrictions (e.g., agent only runs from corporate network)
- Risk-based restrictions (e.g., disable agent if risk detected)
- Device-based restrictions (e.g., agent only accessible from managed devices)

**4. Data classification (via Purview)**
- Agent cannot access data labeled "Confidential"
- Agent can read but not share "Internal" data
- Fine-grained permissions based on sensitivity labels

**Example policy:**
"The HR Bot agent can access SharePoint sites in the HR site collection, but only for users in the HR department, and only during weekdays between 8 AM and 6 PM."

**Granularity level:** Very fine-grained - similar to what you can do with user accounts in Entra and Purview.

**Caveat:** Configuring highly granular policies requires understanding Entra, Graph permissions, and Purview - there's a learning curve.`,
    audiences: ['IT Admin', 'Security & Compliance'],
    categories: ['Security & Compliance', 'Governance & Shadow Agents'],
    difficulty: 'Advanced',
    sources: [
      {
        label: 'Microsoft Entra Agent ID announcement',
        url: 'https://techcommunity.microsoft.com/blog/microsoft-entra-blog/announcing-microsoft-entra-agent-id-secure-and-manage-your-ai-agents/3827392',
        type: 'Official',
      },
    ],
    status: 'Documented',
    lastReviewed: '2025-11-18',
    tags: ['access control', 'conditional access', 'permissions'],
  },
  {
    id: 'ecosystem-003',
    question: 'Does Agent 365 work with agents built on Azure OpenAI, Azure AI Services, or Microsoft Foundry?',
    shortAnswer: 'Yes. Microsoft Foundry (formerly Azure AI Foundry) integrates with Agent 365 out of the box. Agents on Azure OpenAI can also integrate via Entra Agent ID, the Agent 365 SDK, and MCP tooling servers. Agent code can be hosted on any cloud.',
    detailedAnswer: `**Integration path for Azure-based agents:**

**Using Microsoft Foundry (formerly Azure AI Foundry):**
- Microsoft's platform for building enterprise AI agents
- Integrates with Agent 365 out of the box
- Agents created in Foundry can be automatically registered
- Supports Entra Agent IDs natively
- Quickstart available: Python Agent Framework sample

**Using Azure OpenAI directly:**
- Build your agent using Azure OpenAI API
- Add the Agent 365 SDK to your project for enterprise capabilities
- Run \`a365 setup\` via the CLI to configure identity and blueprint
- Agent can access Microsoft 365 data via MCP Tooling Servers governed by Agent 365

**Benefits of Azure integration:**
- Data stays in Azure (no third-party LLM API calls if not desired)
- Compliance with data residency requirements
- Integration with Azure Monitor and Application Insights
- Unified billing under Azure subscription

**Note on multi-cloud:** Agent 365 also works with agents hosted on AWS or GCP—cloud location of the agent does not restrict Agent 365 governance.

**Architecture:**
Your agent (Azure / AWS / GCP) → Agent 365 SDK → MCP Tooling Gateway → Microsoft 365 data → Agent 365 governance & observability

**Recommendation:** If you're building custom agents and already use Azure, this is the most natural integration path. Use the Agent 365 CLI quickstart for Python Agent Framework to get started quickly.`,
    audiences: ['Developer / Architect'],
    categories: ['Ecosystem & Integrations', 'Developer Experience'],
    difficulty: 'Intermediate',
    sources: [
      {
        label: 'Agent 365 SDK and CLI overview (Microsoft Learn)',
        url: 'https://learn.microsoft.com/en-us/microsoft-agent-365/developer/',
        type: 'Official',
      },
      {
        label: 'Quickstart: Python Agent Framework sample (Microsoft Learn)',
        url: 'https://learn.microsoft.com/en-us/microsoft-agent-365/developer/quickstart-python-agent-framework',
        type: 'Official',
      },
    ],
    status: 'Documented',
    lastReviewed: '2026-02-19',
    updatedAt: '2026-02-19',
    tags: ['azure', 'azure openai', 'microsoft foundry', 'multi-cloud', 'sdk'],
  },
  {
    id: 'licensing-003',
    question: 'If I already have Microsoft 365 E5, do I automatically get Agent 365?',
    shortAnswer: 'No. Agent 365 is not included in Microsoft 365 E5. It is available as a standalone add-on at $15/user/month, or as part of the new Microsoft 365 E7: The Frontier Suite at $99/user/month.',
    detailedAnswer: `**Confirmed as of March 2026:**
- Microsoft 365 E5 does **NOT** include Agent 365
- Agent 365 is a **separate product** priced at $15 per user per month
- Agent 365 is included in the new **Microsoft 365 E7: The Frontier Suite** at $99 per user per month

**Options for E5 customers:**

**Option 1: Add Agent 365 as standalone**
- Purchase Agent 365 at $15/user/month as add-on to your E5 subscription
- Get full Agent 365 capabilities for managing agents

**Option 2: Upgrade to Microsoft 365 E7**
- $99/user/month includes E5 + Copilot + Agent 365 + Entra Suite
- Best value if you also need Microsoft 365 Copilot
- Comprehensive protection across both users and agents

**What E7 includes that E5 does not:**
- Microsoft 365 Copilot
- Agent 365 (full agent governance)
- Microsoft Entra Suite
- Advanced Defender, Entra, Intune, and Purview security capabilities

**What to do now:**
- If you have E5 and use agents: Plan for Agent 365 add-on ($15/user/month)
- If you have E5 and want Copilot + agent governance: Consider E7 ($99/user/month)
- If budget is a concern: Evaluate which users need Agent 365 (may not need it for all users)
- Talk to your Microsoft account team about volume licensing options

**Timeline:** Both Agent 365 standalone and Microsoft 365 E7 are generally available May 1, 2026.`,
    audiences: ['Business & Licensing'],
    categories: ['Licensing & Availability'],
    difficulty: 'Intermediate',
    sources: [
      {
        label: 'Secure agentic AI for your frontier transformation — Microsoft Security Blog (March 9, 2026)',
        url: 'https://www.microsoft.com/en-us/security/blog/2026/03/09/secure-agentic-ai-for-your-frontier-transformation/',
        type: 'Official',
      },
    ],
    status: 'Documented',
    lastReviewed: '2026-03-12',
    updatedAt: '2026-03-12',
    tags: ['E5', 'E7', 'licensing', 'copilot', 'pricing'],
  },
  {
    id: 'licensing-004',
    question: 'What is Microsoft 365 E7: The Frontier Suite and how does it relate to Agent 365?',
    shortAnswer: 'Microsoft 365 E7 is a new premium bundle at $99/user/month that includes Microsoft 365 Copilot, Agent 365, Microsoft Entra Suite, and Microsoft 365 E5—delivering comprehensive protection across both users and agents. Available May 1, 2026.',
    detailedAnswer: `**Microsoft 365 E7: The Frontier Suite**

Announced March 9, 2026, Microsoft 365 E7 is Microsoft's most comprehensive enterprise offering, designed for organizations pursuing "Frontier Transformation" with AI.

**What E7 includes:**
- **Microsoft 365 E5** — the full E5 suite with advanced Defender, Entra, Intune, and Purview security
- **Microsoft 365 Copilot** — AI assistant embedded in Word, Excel, Teams, and other M365 apps
- **Agent 365** — the control plane for AI agents (observability, governance, security)
- **Microsoft Entra Suite** — comprehensive identity and access management

**Pricing:**
- $99 per user per month (retail)
- Available for purchase May 1, 2026

**Who should consider E7:**
- Organizations that want both Copilot and Agent 365 (buying separately would cost more)
- Enterprises already on E5 looking to add AI capabilities with full security
- Organizations that need comprehensive protection across both users and agents
- Companies pursuing agentic AI at enterprise scale

**E7 vs. buying components separately:**
- E5 alone: Does not include Copilot or Agent 365
- E5 + Copilot ($30/user/month) + Agent 365 ($15/user/month) = separate purchases
- E7 bundles everything at $99/user/month for a simplified licensing experience

**Important:** E7 positions AI governance (Agent 365) alongside AI productivity (Copilot) as a single enterprise offering—reflecting Microsoft's view that intelligence and trust must go together.`,
    audiences: ['Business & Licensing', 'IT Admin'],
    categories: ['Licensing & Availability'],
    difficulty: 'Intro',
    sources: [
      {
        label: 'Secure agentic AI for your frontier transformation — Microsoft Security Blog (March 9, 2026)',
        url: 'https://www.microsoft.com/en-us/security/blog/2026/03/09/secure-agentic-ai-for-your-frontier-transformation/',
        type: 'Official',
      },
      {
        label: 'Microsoft 365 E7: The Frontier Suite',
        url: 'https://www.microsoft.com/en-us/microsoft-365/microsoft-365-enterprise',
        type: 'Official',
      },
    ],
    status: 'Documented',
    lastReviewed: '2026-03-12',
    isNew: true,
    tags: ['E7', 'frontier suite', 'licensing', 'pricing', 'copilot', 'bundle'],
  },
  {
    id: 'rollout-003',
    question: 'What are common mistakes organizations make when rolling out agent governance?',
    shortAnswer: 'Common mistakes include: no agent inventory before enabling controls, overly restrictive policies that block legitimate use, insufficient user training, and treating agent governance as a one-time project instead of ongoing work.',
    detailedAnswer: `**Mistake #1: Deploying without understanding what exists**
- **Problem:** Enable Agent 365 without knowing what agents are already in use
- **Result:** Unexpected disruptions, quarantined agents, user confusion
- **Fix:** Inventory existing agents first

**Mistake #2: Overly restrictive policies**
- **Problem:** Lock down everything out of fear
- **Result:** Users route around controls, reduced productivity, shadow AI grows
- **Fix:** Start permissive, tighten gradually based on real risk

**Mistake #3: Insufficient user education**
- **Problem:** Deploy Agent 365 without explaining to users
- **Result:** Support tickets, resistance to adoption, workarounds
- **Fix:** Training and communication before deployment

**Mistake #4: Treating it as a project, not a process**
- **Problem:** Deploy Agent 365, declare victory, move on
- **Result:** Policies become outdated, new agents unmanaged, drift
- **Fix:** Ongoing monitoring, policy reviews, continuous improvement

**Mistake #5: No clear ownership**
- **Problem:** Unclear who manages Agent 365 (IT? Security? Business units?)
- **Result:** Inconsistent decisions, gaps in governance
- **Fix:** Establish clear ownership and decision-making processes

**Mistake #6: Ignoring third-party agents**
- **Problem:** Focus only on Microsoft agents, ignore Salesforce/ServiceNow agents
- **Result:** Incomplete governance, security gaps
- **Fix:** Include third-party agents in inventory and policies

**Mistake #7: All-or-nothing approach**
- **Problem:** Try to govern every agent perfectly from day one
- **Result:** Overwhelming complexity, paralysis
- **Fix:** Phased approach - start with high-risk agents, expand over time

**Best practice:** Treat agent governance like endpoint management - it's an ongoing discipline, not a one-time deployment.`,
    audiences: ['IT Admin', 'Security & Compliance'],
    categories: ['Rollout & Adoption', 'Governance & Shadow Agents'],
    difficulty: 'Intermediate',
    sources: [],
    status: 'Not yet documented / speculative',
    lastReviewed: '2025-11-18',
    tags: ['mistakes', 'best practices', 'lessons learned'],
  },
  // NEW IN FEBRUARY 2026 REFRESH
  {
    id: 'dev-004',
    question: 'What is the Agent 365 SDK and how is it different from other Microsoft agent SDKs?',
    shortAnswer: 'The Agent 365 SDK adds enterprise capabilities (identity, observability, MCP tool access, notifications) to agents you\'ve already built on any framework. It is not an agent builder itself—it\'s an enterprise enhancement layer.',
    detailedAnswer: `**What the Agent 365 SDK does:**
The Agent 365 SDK extends agents built on **any** agent platform or SDK by adding:

- **Entra-based Agent identity** — each agent gets its own managed Entra ID
- **Governed MCP tool access** — safe, policy-enforced connections to Microsoft 365 services (Outlook, Teams, SharePoint, etc.)
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
    categories: ['Developer Experience', 'Architecture'],
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
    question: 'What are Agent 365 MCP Tooling Servers and why do they matter?',
    shortAnswer: 'Agent 365 tooling servers are enterprise-grade Model Context Protocol (MCP) servers that give agents safe, policy-enforced access to Microsoft 365 services like Outlook, Teams, SharePoint, OneDrive, and Dataverse—replacing the need for each agent to implement its own M365 integrations.',
    detailedAnswer: `**What MCP Tooling Servers are:**
Agent 365 tooling servers implement the **Model Context Protocol (MCP)**—an open standard for providing AI agents with access to external tools and data sources. Microsoft pre-built and pre-certified these servers for core M365 services.

**Available tooling servers (as of Feb 2026):**
- **Outlook Calendar**: Create, list, update, and delete events; accept/decline invites; resolve scheduling conflicts
- **Outlook Mail**: Create, update, delete messages; reply/reply-all; semantic search
- **SharePoint and OneDrive**: Upload files; get metadata; search; manage lists
- **Teams**: Create, update, delete chats; add members; post messages; channel operations
- **User Profile**: Get manager, direct reports, and profile info; search users
- **Word**: Create and read documents; add comments; reply to comments
- **Dataverse and Dynamics 365**: CRUD operations and domain-specific actions
- **Copilot Search**: Chat with M365 Copilot; start and continue multi-turn threads

**Why they matter:**
- **Policy enforcement built-in**: DLP, MIP sensitivity labels, and Defender monitoring are enforced at the tooling gateway—not left to each agent to implement
- **Auditable**: All tool calls are logged for compliance and observability
- **No custom integration needed**: Agents get instant, governed access to M365 without writing custom Graph API code
- **Works with any framework**: Use from Agent 365 SDK, Copilot Studio, LangChain, Claude SDK, or any MCP-compatible client

**How to add MCP servers to your agent:**
Run \`a365 develop add-mcp-servers\` via the Agent 365 CLI. Authentication scopes are configured automatically via the Blueprint.

**Local testing:** Use the Agent 365 CLI mock tooling server for offline development—no real M365 connection needed.`,
    audiences: ['Developer / Architect', 'IT Admin', 'Security & Compliance'],
    categories: ['Developer Experience', 'Ecosystem & Integrations', 'Security & Compliance'],
    difficulty: 'Intermediate',
    sources: [
      {
        label: 'Agent 365 tooling servers overview (Microsoft Learn)',
        url: 'https://learn.microsoft.com/en-us/microsoft-agent-365/tooling-servers-overview',
        type: 'Official',
      },
      {
        label: 'Add and manage tools (Microsoft Learn)',
        url: 'https://learn.microsoft.com/en-us/microsoft-agent-365/developer/tooling',
        type: 'Official',
      },
    ],
    status: 'Documented',
    lastReviewed: '2026-02-19',
    isNew: true,
    tags: ['mcp', 'tooling servers', 'outlook', 'teams', 'sharepoint', 'governance', 'dlp'],
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
    categories: ['Governance & Shadow Agents', 'Developer Experience', 'Architecture'],
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
  {
    id: 'basics-006',
    question: 'What is Windows 365 for Agents and how does it relate to Agent 365?',
    shortAnswer: 'Windows 365 for Agents is a secure, cloud-based execution environment for computer-using AI agents—agents that control a PC to perform tasks. Agent 365 governs and monitors these agents like any other, while Windows 365 for Agents provides their isolated runtime.',
    detailedAnswer: `**What Windows 365 for Agents is:**
Windows 365 for Agents provides a dedicated, managed cloud PC environment specifically for **computer-using agents**—AI agents that operate a Windows desktop to perform tasks (browsing the web, filling forms, running apps) rather than calling APIs directly.

**Why a dedicated environment matters:**
- Agents operating a desktop need an isolated, auditable environment
- Prevents agents from accessing unintended resources on shared machines
- Provides a clean, reproducible state for each agent session
- Security controls (network isolation, policy enforcement) are built in

**How it relates to Agent 365:**
- Windows 365 for Agents is one component that Agent 365 "unites" as part of its control plane
- Agent 365 governs agents running in Windows 365 for Agents just like any other agent
- Activity from computer-using agents is logged, monitored, and policy-enforced through Agent 365
- Admins manage Windows 365 for Agents environments alongside other agent infrastructure

**Use cases for computer-using agents:**
- Legacy application automation (systems without APIs)
- Complex multi-step web workflows
- RPA (Robotic Process Automation) scenarios enhanced with AI reasoning
- UI-driven tasks that don't expose programmatic interfaces

**Status:** Windows 365 for Agents was mentioned in the February 2026 blog post as part of the Agent 365 ecosystem. Detailed documentation may still be emerging.`,
    audiences: ['IT Admin', 'Developer / Architect', 'Business & Licensing'],
    categories: ['Basics', 'Architecture'],
    difficulty: 'Intermediate',
    sources: [
      {
        label: 'Hello, world. — Agent 365 Blog (Feb 2026)',
        url: 'https://techcommunity.microsoft.com/blog/agent-365-blog/hello-world-/4494728',
        type: 'Official',
      },
    ],
    status: 'Partially documented',
    lastReviewed: '2026-02-19',
    isNew: true,
    tags: ['windows 365 for agents', 'computer-using agents', 'execution environment', 'rpa'],
  },

  {
    id: 'basics-005',
    question: 'What does "agent as a digital employee" mean in the context of Agent 365?',
    shortAnswer: 'It means agents are treated like users - they get identities, permissions, access reviews, and audit logs, just like human employees. This enables consistent governance and security practices.',
    detailedAnswer: `**The "digital employee" concept:**

Microsoft is positioning agents not as tools or scripts, but as entities that:
- Have identities (Entra Agent ID)
- Have job descriptions (agent metadata)
- Get hired (created and registered)
- Get permissions (access policies)
- Perform work (execute tasks)
- Get monitored (activity logs)
- Get promoted or fired (updated or deactivated)

**Why this matters:**

**1. Consistent governance**
- Same processes for agents and humans
- Existing policies extend to agents
- Unified management interface

**2. Audit and compliance**
- "Who did what?" includes agents
- Regulatory compliance easier to demonstrate
- Clear accountability

**3. Security**
- Zero trust principles apply to agents
- Conditional access works the same way
- Threat detection treats agent compromise like account compromise

**4. Organizational understanding**
- Business leaders can understand agent impact
- HR-like metrics (productivity, workload, performance)
- Easier to explain to auditors and regulators

**Example:**
Instead of "a script accesses SharePoint," it's "the HR Benefits Agent accessed employee records to answer a benefits question for John Smith on Tuesday at 2 PM."

**Philosophical shift:** From thinking about agents as automation to thinking about agents as workforce members that need to be managed.

**Important caveat:** This is a conceptual framework - agents don't have legal rights or employment status.`,
    audiences: ['Business & Licensing', 'IT Admin', 'Security & Compliance'],
    categories: ['Basics', 'Governance & Shadow Agents'],
    difficulty: 'Intro',
    sources: [
      {
        label: 'Microsoft teases agents that become independent users',
        url: 'https://www.theregister.com/2025/11/10/microsoft_agentic_users_a365/',
        type: 'News',
      },
    ],
    status: 'Documented',
    lastReviewed: '2025-11-18',
    tags: ['digital employee', 'philosophy', 'governance model'],
  },
];
