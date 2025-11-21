import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

export const ArchitectureDiagramSection: React.FC = () => {
  const mermaidRef = useRef<HTMLDivElement>(null);

  const diagramDefinition = `%%{init: {'theme':'base', 'themeVariables': {'primaryColor':'#cfe2f3','primaryTextColor':'#000','primaryBorderColor':'#0078d4','lineColor':'#323130','secondaryColor':'#fce5cd','secondaryTextColor':'#000','secondaryBorderColor':'#ff8c00','tertiaryColor':'#f5f5f5','tertiaryTextColor':'#000','tertiaryBorderColor':'#666666','quaternaryColor':'#f3e5f5','quaternaryTextColor':'#000','quaternaryBorderColor':'#9c27b0','fontSize':'13px','fontFamily':'Segoe UI, system-ui, sans-serif','nodeSpacing':'50','rankSpacing':'80','curve':'basis'}, 'flowchart': {'nodeSpacing': 25, 'rankSpacing': 50, 'curve': 'basis', 'padding': 20, 'useMaxWidth': true}}}%%

graph TB
    subgraph EXISTING["EXISTING M365 INFRASTRUCTURE"]
        EntraID["<b>Microsoft Entra ID</b><br/>User Identities<br/>1B+ enterprise users"]
        M365Admin["<b>M365 Admin Center</b><br/>Central Management"]
        Purview["<b>Microsoft Purview</b><br/>Data Governance"]
        Defender["<b>Microsoft Defender</b><br/>Threat Protection"]
        WorkIQ["<b>Work IQ Layer</b><br/>Emails, Files, Meetings<br/>Org Chart, Workflows"]
    end

    subgraph AGENT365["AGENT 365 CONTROL PLANE"]
        subgraph REG["1. REGISTRY & IDENTITY"]
            AgentID["<b>Entra Agent ID</b><br/>Agent Identity System"]
            Registry["<b>Agent Registry</b><br/>Central Inventory"]
            AgentStore["<b>Agent Store</b><br/>Discovery Portal"]
        end

        subgraph ACCESS["2. ACCESS CONTROL"]
            Policies["<b>Policy Templates</b><br/>Security Guardrails"]
            ConditionalAccess["<b>Conditional Access</b><br/>Risk-based Engine"]
            Sponsors["<b>Sponsor Assignment</b><br/>Human Accountability"]
        end

        subgraph VIZ["3. OBSERVABILITY"]
            Dashboard["<b>Unified Dashboard</b><br/>Real-time Monitoring"]
            Telemetry["<b>Telemetry & Logs</b><br/>Performance & ROI"]
            RoleReports["<b>Role-based Reports</b><br/>IT, Security, Business"]
        end

        subgraph INTEROP["4. INTEROPERABILITY"]
            Tools["<b>Agentic Tools</b><br/>Outlook, Teams<br/>SharePoint, Dynamics"]
            WorkIQAccess["<b>Work IQ Access</b><br/>Same Context as Users"]
            MCP["<b>MCP Interfaces</b><br/>Standard Protocols"]
        end

        subgraph SEC["5. SECURITY"]
            ThreatProtection["<b>Threat Detection</b><br/>Real-time Response"]
            DataProtection["<b>Data Security</b><br/>Sensitivity Labels"]
            Audit["<b>Audit & eDiscovery</b><br/>Compliance Ready"]
        end
    end

    subgraph USERS["END USERS"]
        M365Apps["<b>M365 Apps</b><br/>Word, Excel, PowerPoint<br/>Outlook, Teams"]
        CopilotChat["<b>Microsoft 365 Copilot</b><br/>AI Assistant for Work"]
    end

    subgraph SOURCES["AGENT BUILD PLATFORMS"]
        CopilotStudio["<b>Copilot Studio</b><br/>Low-code Builder"]
        Foundry["<b>Microsoft Foundry</b><br/>Pro-code Platform"]
        SDK["<b>Agent 365 SDK</b><br/>.NET, Python, Node.js"]
        ThirdParty["<b>3rd Party / OSS</b><br/>Any Platform"]
    end

    %% Main infrastructure connections
    EntraID ==>|extends identity| AgentID
    M365Admin ==>|same admin UI| Registry
    M365Admin -.->|enforces| Policies
    Purview ==>|applies policies| DataProtection
    Defender ==>|extends protection| ThreatProtection
    WorkIQ ==>|powers context| WorkIQAccess

    %% Internal Agent 365 connections
    AgentID --> Registry
    Registry --> AgentStore
    Policies --> ConditionalAccess
    ConditionalAccess -.->|validates| AgentID
    Dashboard --> Telemetry
    Dashboard --> RoleReports
    Tools --> WorkIQAccess
    Tools --> MCP
    Sponsors -.->|oversees| Registry

    %% Build platform connections
    CopilotStudio ==>|auto-register| Registry
    Foundry ==>|auto-register| Registry
    SDK -->|API register| Registry
    ThirdParty -->|manual register| Registry

    %% User interface connections
    AgentStore ==>|discover & deploy| CopilotChat
    Tools ==>|integrates| M365Apps
    CopilotChat <-->|collaborates| M365Apps

    %% Security monitoring
    ThreatProtection -.->|monitors| AgentID
    DataProtection -.->|protects| Tools
    Audit <-.->|logs activity| Telemetry

    %% Color classes
    classDef existing fill:#e1f5ff,stroke:#0078d4,stroke-width:3px,color:#000
    classDef agent365 fill:#fff4e1,stroke:#ff8c00,stroke-width:3px,color:#000
    classDef sources fill:#f5f5f5,stroke:#666666,stroke-width:3px,color:#000
    classDef users fill:#f3e5f5,stroke:#9c27b0,stroke-width:3px,color:#000

    class EntraID,M365Admin,Purview,Defender,WorkIQ existing
    class AgentID,Registry,AgentStore,Policies,ConditionalAccess,Sponsors,Dashboard,Telemetry,RoleReports,Tools,WorkIQAccess,MCP,ThreatProtection,DataProtection,Audit agent365
    class CopilotStudio,Foundry,SDK,ThirdParty sources
    class M365Apps,CopilotChat users`;

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'base',
      securityLevel: 'loose',
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
      },
    });

    const renderDiagram = async () => {
      if (mermaidRef.current) {
        mermaidRef.current.innerHTML = '';
        try {
          const { svg } = await mermaid.render('architecture-diagram', diagramDefinition);
          mermaidRef.current.innerHTML = svg;
        } catch (error) {
          console.error('Mermaid rendering error:', error);
        }
      }
    };

    renderDiagram();
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Agent 365 Architecture Diagram</h2>
        <p className="text-gray-600">
          Control plane for AI agents — extending M365 infrastructure to agentic AI with enterprise-grade governance
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Architecture Overview</h3>
        <p className="text-gray-700 mb-6">
          The diagram below illustrates how Agent 365 integrates with existing M365 infrastructure to provide
          comprehensive agent management through five core capabilities:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="flex items-start gap-2">
            <span className="text-ms-blue-600 font-bold">1.</span>
            <span><strong>Registry & Identity</strong> - Agent identity system and discovery portal</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-ms-blue-600 font-bold">2.</span>
            <span><strong>Access Control</strong> - Policy templates and conditional access</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-ms-blue-600 font-bold">3.</span>
            <span><strong>Observability</strong> - Unified monitoring and role-based reporting</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-ms-blue-600 font-bold">4.</span>
            <span><strong>Interoperability</strong> - Native M365 tools integration and standard protocols</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-ms-blue-600 font-bold">5.</span>
            <span><strong>Security</strong> - Threat detection, data protection, and compliance</span>
          </div>
        </div>

        {/* Color Legend */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Color Legend</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded border-2" style={{ background: '#e1f5ff', borderColor: '#0078d4' }}></div>
              <span className="text-sm"><strong>Blue:</strong> Existing M365</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded border-2" style={{ background: '#fff4e1', borderColor: '#ff8c00' }}></div>
              <span className="text-sm"><strong>Orange:</strong> Agent 365</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded border-2" style={{ background: '#f5f5f5', borderColor: '#666666' }}></div>
              <span className="text-sm"><strong>Grey:</strong> Build platforms</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded border-2" style={{ background: '#f3e5f5', borderColor: '#9c27b0' }}></div>
              <span className="text-sm"><strong>Purple:</strong> User interfaces</span>
            </div>
          </div>
        </div>

        {/* Mermaid Diagram Container */}
        <div className="overflow-x-auto">
          <div
            ref={mermaidRef}
            className="mermaid-container min-w-full flex justify-center"
          />
        </div>
      </div>

      {/* Key Benefits */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex gap-2">
            <span className="text-ms-blue-600">•</span>
            <span>Leverages existing M365 infrastructure investments</span>
          </li>
          <li className="flex gap-2">
            <span className="text-ms-blue-600">•</span>
            <span>Provides enterprise-grade security and governance for AI agents</span>
          </li>
          <li className="flex gap-2">
            <span className="text-ms-blue-600">•</span>
            <span>Enables unified management across all agent sources</span>
          </li>
          <li className="flex gap-2">
            <span className="text-ms-blue-600">•</span>
            <span>Maintains consistency with familiar M365 admin experience</span>
          </li>
          <li className="flex gap-2">
            <span className="text-ms-blue-600">•</span>
            <span>Ensures compliance and audit readiness</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
