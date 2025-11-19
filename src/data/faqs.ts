import type { FaqItem } from './types';

export const faqs: FaqItem[] = [
  // BASICS
  {
    id: 'basics-001',
    question: 'What is Microsoft Agent 365 in simple terms?',
    shortAnswer: 'Agent 365 is Microsoft\'s control plane for AI agents - a centralized system to register, monitor, secure, and govern all agents across your organization, whether built by Microsoft, third parties, or your own teams.',
    detailedAnswer: `Agent 365 is best understood as a **management and governance layer** for AI agents, similar to how Microsoft Entra ID manages user identities.

**Key capabilities:**
- **Registry**: A central inventory of all agents in your organization
- **Access Control**: Define what each agent can access using conditional access policies
- **Visibility**: Monitor agent activity, performance, and security posture through dashboards
- **Security**: Detect and respond to threats via Microsoft Defender integration
- **Governance**: Apply data protection policies via Microsoft Purview integration

Think of it as giving your IT and security teams the same level of control over AI agents that they have over human users - because agents are becoming "digital employees" that can take actions, access data, and make decisions.`,
    audiences: ['IT Admin', 'Security & Compliance', 'Business & Licensing'],
    categories: ['Basics'],
    difficulty: 'Intro',
    sources: [
      {
        label: 'Microsoft Agent 365 landing page',
        url: 'https://www.microsoft.com/en-us/microsoft-agent-365',
        type: 'Official',
      },
    ],
    status: 'Documented',
    lastReviewed: '2025-11-18',
    tags: ['control plane', 'registry', 'governance'],
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

**Agent 365:**
- A governance and management platform that works ACROSS all agents
- Manages agents from Copilot Studio, Azure AI Foundry, third-party platforms (Salesforce, ServiceNow), and custom-built agents
- Provides registry, security, access control, monitoring, and compliance

**Analogy:** If agents are employees, Copilot Studio is the hiring/training department, and Agent 365 is HR + IT + Security combined - managing all employees regardless of which department hired them.`,
    audiences: ['IT Admin', 'Business & Licensing', 'Developer / Architect'],
    categories: ['Basics', 'Ecosystem & Integrations'],
    difficulty: 'Intro',
    sources: [
      {
        label: 'Microsoft 365 Copilot agents overview',
        url: 'https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/agents-overview',
        type: 'Official',
      },
    ],
    status: 'Documented',
    lastReviewed: '2025-11-18',
    tags: ['copilot', 'copilot studio', 'comparison'],
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
    shortAnswer: 'Defender provides threat detection, security posture assessment, and runtime protection against attacks like prompt injection and data exfiltration attempts.',
    detailedAnswer: `Microsoft Defender for Cloud Apps and Defender XDR integrate with Agent 365 to secure agents:

**Threat Detection:**
- Detects anomalous agent behavior (unusual data access, excessive API calls)
- Identifies compromised agent credentials
- Monitors for data exfiltration attempts

**Runtime Protection:**
- Blocks prompt injection attacks in real-time
- Filters malicious input before it reaches the agent's LLM
- Prevents agents from executing dangerous actions

**Security Posture:**
- Assesses agent vulnerabilities and misconfigurations
- Recommends security improvements
- Tracks compliance with organizational security policies

**Incident Response:**
- Generates alerts when threats are detected
- Provides investigation tools and timelines
- Enables automated response actions (e.g., disable agent, revoke access)

**Editor's note:** This is based on Microsoft's stated integration plans. Specific Defender features for agents are still rolling out.`,
    audiences: ['Security & Compliance', 'IT Admin'],
    categories: ['Security & Compliance'],
    difficulty: 'Intermediate',
    sources: [
      {
        label: 'Securing autonomous agents with Microsoft Security',
        url: 'https://www.microsoft.com/en-us/security/blog/2025/08/26/securing-and-governing-the-rise-of-autonomous-agents/',
        type: 'Official',
      },
    ],
    status: 'Partially documented',
    lastReviewed: '2025-11-18',
    tags: ['defender', 'threat detection', 'security'],
  },
  {
    id: 'security-002',
    question: 'How does Agent 365 address prompt injection and data exfiltration risks?',
    shortAnswer: 'Agent 365 integrates with Defender for runtime filtering of malicious prompts and uses Purview to apply sensitivity labels and data loss prevention policies to agent interactions.',
    detailedAnswer: `Prompt injection and data exfiltration are two of the biggest risks with AI agents. Agent 365 addresses both:

**Prompt Injection Protection:**
- Runtime filtering of user input before it reaches the agent's LLM
- Detection of jailbreak attempts and malicious instructions
- Blocking of requests that try to override the agent's system prompt
- Integration with Microsoft Defender's threat intelligence

**Data Exfiltration Prevention:**
- Microsoft Purview applies sensitivity labels to data accessed by agents
- Data Loss Prevention (DLP) policies block agents from sharing sensitive data
- Monitoring of data movement and alerting on suspicious transfers
- Conditional access can restrict which data sources agents can access

**Limitations to note:**
- Protection is strongest within the Microsoft ecosystem
- Third-party agents may require additional configuration
- Runtime filtering can impact performance
- False positives are possible and require tuning

**Best practice:** Use least-privilege access and test agents in isolated environments before production deployment.`,
    audiences: ['Security & Compliance', 'Developer / Architect'],
    categories: ['Security & Compliance'],
    difficulty: 'Advanced',
    sources: [
      {
        label: 'Microsoft extends Zero Trust to secure the agentic workforce',
        url: 'https://www.microsoft.com/en-us/security/blog/2025/05/19/microsoft-extends-zero-trust-to-secure-the-agentic-workforce/',
        type: 'Official',
      },
    ],
    status: 'Partially documented',
    lastReviewed: '2025-11-18',
    tags: ['prompt injection', 'data exfiltration', 'purview', 'DLP'],
  },
  {
    id: 'security-003',
    question: 'What is the relationship between Agent 365, Entra Agent ID, Defender, and Purview?',
    shortAnswer: 'Agent 365 is the orchestration layer. Entra Agent ID provides identities, Defender provides security, and Purview provides data governance. They work together as an integrated stack.',
    detailedAnswer: `These four products form Microsoft's AI agent security and governance stack:

**Microsoft Entra Agent ID:**
- Provides identity for agents (like managed identities for apps)
- Handles authentication and authorization
- Enables conditional access policies for agents
- Makes agents visible in the Entra admin center

**Agent 365:**
- Central registry and control plane
- Orchestrates policies across all agents
- Provides unified monitoring and dashboards
- Connects the other components together

**Microsoft Defender:**
- Threat detection and response
- Runtime protection against attacks
- Security posture assessment
- Incident investigation tools

**Microsoft Purview:**
- Data classification and sensitivity labeling
- Data loss prevention (DLP) for agent interactions
- Compliance monitoring and audit logs
- Information barriers and governance policies

**How they work together:**
1. An agent is given an Entra Agent ID identity
2. Agent 365 registers the agent and applies policies
3. Purview labels data the agent can access
4. Defender monitors agent behavior for threats
5. All activity is logged for audit and compliance

Think of it as: Entra = ID card, Agent 365 = HR system, Defender = security guard, Purview = compliance officer.`,
    audiences: ['Security & Compliance', 'IT Admin', 'Developer / Architect'],
    categories: ['Security & Compliance', 'Architecture', 'Ecosystem & Integrations'],
    difficulty: 'Advanced',
    sources: [
      {
        label: 'Announcing Microsoft Entra Agent ID',
        url: 'https://techcommunity.microsoft.com/blog/microsoft-entra-blog/announcing-microsoft-entra-agent-id-secure-and-manage-your-ai-agents/3827392',
        type: 'Official',
      },
    ],
    status: 'Documented',
    lastReviewed: '2025-11-18',
    tags: ['entra', 'defender', 'purview', 'architecture', 'integration'],
  },

  // LICENSING & AVAILABILITY
  {
    id: 'licensing-001',
    question: 'How do I get access to Agent 365 today?',
    shortAnswer: 'Agent 365 is currently available through the Frontier early access program for customers with Microsoft 365 Copilot licenses. Access is enabled through the Microsoft 365 Admin Center.',
    detailedAnswer: `**Current availability (as of Nov 2025):**

Agent 365 is in **early access** via the Frontier program, not generally available.

**Prerequisites:**
- Microsoft 365 Copilot license (required)
- Admin access to Microsoft 365 Admin Center
- Enrollment in the Frontier early access program

**How to access:**
1. Navigate to Microsoft 365 Admin Center
2. Look for Frontier program enrollment options
3. Enable Agent 365 features for your tenant or specific users
4. Begin registering and managing agents

**Important caveats:**
- Frontier is for early adopters who want to test new features
- Not recommended for production-critical scenarios yet
- Features and capabilities are still evolving
- No public SLA or support commitments for Frontier features

**Editor's note:** Microsoft has not announced a general availability (GA) date or detailed pricing for Agent 365 as a standalone product.`,
    audiences: ['IT Admin', 'Business & Licensing'],
    categories: ['Licensing & Availability', 'Rollout & Adoption'],
    difficulty: 'Intro',
    sources: [
      {
        label: 'Frontier program overview',
        url: 'https://adoption.microsoft.com/en-us/copilot/frontier-program/',
        type: 'Official',
      },
    ],
    status: 'Documented',
    lastReviewed: '2025-11-18',
    tags: ['frontier', 'early access', 'availability'],
  },
  {
    id: 'licensing-002',
    question: 'Is Agent 365 a separate paid product, or included in existing Microsoft 365 plans?',
    shortAnswer: 'Microsoft has not disclosed final licensing or pricing. Currently, it requires a Copilot license to access via Frontier. Whether it will be included, bundled, or sold separately at GA is unknown.',
    detailedAnswer: `**What we know:**
- Agent 365 is currently accessible only with a Microsoft 365 Copilot license
- It is delivered through the Frontier early access program
- No separate SKU or pricing has been announced

**What we don't know:**
- Will Agent 365 be included in Copilot licenses at GA?
- Will there be a separate Agent 365 SKU?
- Will pricing be per-user, per-agent, or tenant-wide?
- Will there be different tiers (e.g., basic registry vs. advanced security)?

**Speculation (not official):**
Given Microsoft's product strategy, Agent 365 could follow patterns like:
- **Included in E5**: Core agent management included in Microsoft 365 E5 (similar to Entra ID P2)
- **Add-on for E3**: Available as an add-on for E3 customers
- **Copilot-bundled**: Included with Copilot licenses as an agent management layer
- **Per-agent pricing**: Some features might be priced per registered agent

**Recommendation:** If you're evaluating Agent 365, ask your Microsoft account team about roadmap and pricing plans specific to your licensing agreement.

**Learn more:** <a href="https://licensing.guide/tag/agent-365/" target="_blank" rel="noopener noreferrer" style="color: #0078d4; text-decoration: underline;">Read more about Microsoft Agent 365 licensing in The Licensing Guide blog</a>`,
    audiences: ['Business & Licensing', 'IT Admin'],
    categories: ['Licensing & Availability'],
    difficulty: 'Intermediate',
    sources: [
      {
        label: 'Microsoft Agent 365 landing page',
        url: 'https://www.microsoft.com/en-us/microsoft-agent-365',
        type: 'Official',
      },
    ],
    status: 'Not yet documented / speculative',
    lastReviewed: '2025-11-18',
    tags: ['pricing', 'licensing', 'SKU'],
  },

  // DEVELOPER EXPERIENCE
  {
    id: 'dev-001',
    question: 'If I build an agent in Copilot Studio or Azure AI Foundry, what do I need to do to make it Agent 365 compatible?',
    shortAnswer: 'Agents built in Copilot Studio and Azure AI Foundry can be automatically registered with Agent 365. You will need to ensure the agent has an Entra Agent ID and proper metadata.',
    detailedAnswer: `**For Copilot Studio agents:**
- Agents built in Copilot Studio can be published to Microsoft 365 Copilot
- Once published, they automatically appear in the Agent 365 registry
- Ensure you provide clear descriptions and metadata during creation
- Apply governance policies via the Admin Center

**For Azure AI Foundry agents:**
- Create an Entra Agent ID for your agent (similar to creating a managed identity)
- Register the agent in the Agent 365 registry via API or portal
- Configure access permissions and conditional access policies
- Integrate telemetry and logging for observability

**Best practices:**
- Use descriptive names and documentation for your agents
- Follow least-privilege principles for data access
- Implement logging and monitoring hooks
- Test agents in non-production environments first
- Document agent capabilities and limitations

**Editor's note:** Microsoft is still building out developer documentation and SDKs for Agent 365 integration. More detailed guidance is expected as the product moves toward GA.`,
    audiences: ['Developer / Architect'],
    categories: ['Developer Experience', 'Rollout & Adoption'],
    difficulty: 'Intermediate',
    sources: [
      {
        label: 'Announcing Microsoft Entra Agent ID',
        url: 'https://techcommunity.microsoft.com/blog/microsoft-entra-blog/announcing-microsoft-entra-agent-id-secure-and-manage-your-ai-agents/3827392',
        type: 'Official',
      },
    ],
    status: 'Partially documented',
    lastReviewed: '2025-11-18',
    tags: ['copilot studio', 'azure ai foundry', 'registration'],
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
    question: 'What should I do to prepare for Agent 365 if I am not in Frontier yet?',
    shortAnswer: 'Start by inventorying existing agents in your environment, documenting their purpose and data access, reviewing your Entra and Purview governance policies, and establishing an agent approval process.',
    detailedAnswer: `**Preparation checklist:**

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

**5. Pilot planning**
- Identify low-risk use cases for initial agent deployments
- Select pilot users and teams
- Create feedback mechanisms
- Plan for iterative rollout

**6. Training and communication**
- Educate users on what agents are and how to use them safely
- Train IT/security teams on Agent 365 capabilities
- Document procedures and best practices
- Set expectations about what is/isn't allowed

Starting now positions you to move quickly when Agent 365 becomes generally available.`,
    audiences: ['IT Admin', 'Security & Compliance'],
    categories: ['Rollout & Adoption', 'Governance & Shadow Agents'],
    difficulty: 'Intermediate',
    sources: [],
    status: 'Not yet documented / speculative',
    lastReviewed: '2025-11-18',
    tags: ['preparation', 'planning', 'rollout'],
  },
  {
    id: 'rollout-002',
    question: 'Should I enable Agent 365 for my entire tenant or start with a pilot group?',
    shortAnswer: 'Start with a pilot group. Enable Agent 365 for a limited set of users and use cases first, learn from the experience, then expand gradually.',
    detailedAnswer: `**Recommended approach: Phased rollout**

**Phase 1: IT and Security pilot (2-4 weeks)**
- Enable Agent 365 for IT admins and security team only
- Register a few test agents
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

**Why not tenant-wide from the start?**
- Agent 365 is still in Frontier (early access)
- Features and best practices are evolving
- Risk of disrupting existing workflows
- Opportunity to learn before widespread adoption
- Easier to troubleshoot issues with smaller group

**Exception:** If you have minimal agent usage today, tenant-wide enablement may be fine - there's less to disrupt.`,
    audiences: ['IT Admin'],
    categories: ['Rollout & Adoption'],
    difficulty: 'Intermediate',
    sources: [],
    status: 'Not yet documented / speculative',
    lastReviewed: '2025-11-18',
    tags: ['pilot', 'rollout strategy', 'adoption'],
  },

  // ARCHITECTURE
  {
    id: 'arch-001',
    question: 'Where does Agent 365 fit in the Microsoft 365 architecture?',
    shortAnswer: 'Agent 365 sits alongside Microsoft 365 Admin Center as a management layer, integrating with Entra ID for identity, Defender for security, and Purview for compliance.',
    detailedAnswer: `**Architectural layers:**

**Layer 1: Agents (the workload)**
- Microsoft 365 Copilot agents
- Copilot Studio agents
- Azure AI Foundry agents
- Third-party agents
- Custom-built agents

**Layer 2: Agent 365 (control plane)**
- Registry and metadata store
- Policy orchestration engine
- Monitoring and telemetry collection
- Admin interfaces and dashboards

**Layer 3: Security and compliance integrations**
- Microsoft Entra (identity and access)
- Microsoft Defender (threat protection)
- Microsoft Purview (data governance)
- Microsoft 365 Admin Center (management)

**Layer 4: Data and services**
- Microsoft Graph (data access)
- SharePoint, OneDrive, Exchange (data stores)
- Microsoft 365 apps (Word, Excel, Teams, etc.)
- External data sources (via connectors)

**Data flow example:**
1. User invokes an agent in Teams
2. Agent authenticates with Entra Agent ID
3. Agent 365 checks policies (is agent approved? can it run now?)
4. Defender monitors the request for threats
5. Agent accesses data via Microsoft Graph
6. Purview applies sensitivity labels and DLP
7. Agent performs task and responds
8. Activity is logged in Agent 365 for audit

This architecture enables centralized governance without requiring changes to each individual agent.`,
    audiences: ['Developer / Architect', 'IT Admin'],
    categories: ['Architecture'],
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
    tags: ['architecture', 'integration', 'layers'],
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
    question: 'Can I use Agent 365 with open-source agent frameworks like LangChain or AutoGPT?',
    shortAnswer: 'Yes, but you need to integrate your agent with Entra Agent ID for authentication and the Agent 365 registry API. This requires custom development work.',
    detailedAnswer: `**Integration requirements:**

**1. Authentication**
- Configure your agent to authenticate using Entra Agent ID
- Use Microsoft Authentication Library (MSAL) in your agent code
- Obtain and manage credentials securely

**2. Registration**
- Call Agent 365 registry API to register your agent
- Provide required metadata (name, description, capabilities)
- Keep registration information up to date

**3. Telemetry and logging**
- Implement hooks to send activity logs to Agent 365
- Use Azure Monitor or Application Insights for telemetry
- Ensure compliance with data retention policies

**4. Policy compliance**
- Respect conditional access policies (check before executing)
- Integrate with Microsoft Graph for data access
- Handle policy violations gracefully

**Example workflow (Python + LangChain):**
- Authenticate with Entra Agent ID using MSAL library
- Register agent with Agent 365 registry API
- Build your LangChain agent with standard code
- Send telemetry and activity logs to Agent 365

**Challenges:**
- Limited documentation for open-source frameworks
- More complex than using Copilot Studio
- You're responsible for maintaining integration code
- May require ongoing updates as Agent 365 evolves

**Best for:** Developers comfortable with API integration and custom development.`,
    audiences: ['Developer / Architect'],
    categories: ['Developer Experience', 'Architecture'],
    difficulty: 'Advanced',
    sources: [],
    status: 'Not yet documented / speculative',
    lastReviewed: '2025-11-18',
    tags: ['langchain', 'open source', 'custom development'],
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
    question: 'Does Agent 365 work with agents built on Azure OpenAI or Azure AI Services?',
    shortAnswer: 'Yes. Agents built using Azure OpenAI and Azure AI Services can integrate with Agent 365 by using Entra Agent ID and registering with the Agent 365 registry.',
    detailedAnswer: `**Integration path for Azure-based agents:**

**Using Azure AI Foundry:**
- Azure AI Foundry is Microsoft's platform for building enterprise AI agents
- Includes integration with Agent 365 out of the box
- Agents created in Foundry can be automatically registered
- Supports Entra Agent ID natively

**Using Azure OpenAI directly:**
- Build your agent using Azure OpenAI API
- Create an Entra Agent ID for your agent
- Register agent metadata with Agent 365
- Implement telemetry and logging hooks
- Deploy and monitor via Agent 365 dashboards

**Using Azure AI Services (Vision, Speech, etc.):**
- Similar to Azure OpenAI integration
- Use managed identities or Entra Agent IDs for authentication
- Register the agent with Agent 365
- Apply governance policies

**Benefits of Azure integration:**
- All data stays in Azure (no third-party LLM API calls)
- Compliance with data residency requirements
- Integration with Azure Monitor and Application Insights
- Unified billing under Azure subscription

**Architecture:**
Your agent → Azure OpenAI / AI Services → Microsoft Graph (data access) → Agent 365 (governance)

**Recommendation:** If you're building custom agents and already use Azure, this is the most natural integration path.`,
    audiences: ['Developer / Architect'],
    categories: ['Ecosystem & Integrations', 'Developer Experience'],
    difficulty: 'Intermediate',
    sources: [],
    status: 'Partially documented',
    lastReviewed: '2025-11-18',
    tags: ['azure', 'azure openai', 'azure ai'],
  },
  {
    id: 'licensing-003',
    question: 'If I already have Microsoft 365 E5, do I automatically get Agent 365?',
    shortAnswer: 'Not automatically. Currently, Agent 365 requires a Copilot license and enrollment in Frontier. Microsoft has not clarified if E5 will include Agent 365 at general availability.',
    detailedAnswer: `**Current state (Frontier early access):**
- Microsoft 365 E5 alone does NOT give you Agent 365 access
- You need Microsoft 365 Copilot license
- Plus enrollment in Frontier early access program

**Possible scenarios at GA:**
Microsoft could take several approaches:

**Scenario 1: Included in E5**
- Core Agent 365 features included in E5 (similar to Entra ID P2)
- Makes sense given E5 positioning as premium security/compliance tier

**Scenario 2: Included with Copilot**
- Agent 365 bundled with all Copilot licenses
- Positions Agent 365 as essential for Copilot ecosystem

**Scenario 3: Separate add-on**
- Agent 365 sold as standalone SKU
- Available as add-on for E3, E5, and Copilot customers

**Scenario 4: Tiered approach**
- Basic registry in E5
- Advanced features (Defender integration, advanced analytics) require add-on

**What to do now:**
- If evaluating E5: Ask Microsoft about Agent 365 inclusion plans
- If planning Copilot: Assume Agent 365 will be available
- If budget-constrained: Wait for official licensing announcement

**Editor's note:** This is purely speculation. Wait for official announcements before making purchasing decisions.`,
    audiences: ['Business & Licensing'],
    categories: ['Licensing & Availability'],
    difficulty: 'Intermediate',
    sources: [],
    status: 'Not yet documented / speculative',
    lastReviewed: '2025-11-18',
    tags: ['E5', 'licensing', 'copilot'],
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
