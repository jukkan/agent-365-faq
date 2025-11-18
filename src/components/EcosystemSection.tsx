import React from 'react';

export const EcosystemSection: React.FC = () => {
  const integrations = [
    {
      name: 'Microsoft 365 Copilot',
      description: 'AI assistant embedded in M365 apps. Agent 365 governs Copilot extensions and custom agents added to Copilot.',
      relationship: 'Governed by Agent 365',
      icon: '🤖',
    },
    {
      name: 'Copilot Studio',
      description: 'Low-code tool for building custom agents. Agents built here can be automatically registered with Agent 365.',
      relationship: 'Agent creation tool',
      icon: '🛠️',
    },
    {
      name: 'Azure AI Foundry',
      description: 'Enterprise platform for building AI agents with Azure OpenAI and AI Services. Native Agent 365 integration.',
      relationship: 'Agent creation platform',
      icon: '☁️',
    },
    {
      name: 'Microsoft Entra Agent ID',
      description: 'Identity system for agents. Provides authentication, authorization, and visibility into agent identities.',
      relationship: 'Identity provider',
      icon: '🆔',
    },
    {
      name: 'Microsoft Defender',
      description: 'Security platform providing threat detection, runtime protection, and incident response for agents.',
      relationship: 'Security integration',
      icon: '🛡️',
    },
    {
      name: 'Microsoft Purview',
      description: 'Data governance platform applying sensitivity labels, DLP, and compliance policies to agent data access.',
      relationship: 'Compliance integration',
      icon: '📋',
    },
    {
      name: 'Third-Party Agents',
      description: 'Agents from Salesforce, ServiceNow, Workday, and other platforms can integrate via Entra Agent ID.',
      relationship: 'External integration (evolving)',
      icon: '🔌',
    },
    {
      name: 'Custom Frameworks',
      description: 'Agents built with LangChain, Semantic Kernel, AutoGPT, or custom code can register via Agent 365 API.',
      relationship: 'API integration',
      icon: '👨‍💻',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Ecosystem & Integrations</h2>
        <p className="text-gray-600">
          How Agent 365 connects with Microsoft products and third-party platforms
        </p>
      </div>

      <div className="bg-gradient-to-br from-ms-blue-50 to-indigo-50 rounded-lg p-6 border border-ms-blue-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Agent 365's Role in the Ecosystem</h3>
        <p className="text-gray-700 mb-4">
          Agent 365 sits at the center of Microsoft's AI agent ecosystem, acting as the <strong>control plane</strong> that connects:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-2"><span className="text-ms-blue-600">•</span><span><strong>Creation tools</strong> (Copilot Studio, Azure AI Foundry)</span></li>
          <li className="flex gap-2"><span className="text-ms-blue-600">•</span><span><strong>Security systems</strong> (Defender, Entra)</span></li>
          <li className="flex gap-2"><span className="text-ms-blue-600">•</span><span><strong>Compliance platforms</strong> (Purview)</span></li>
          <li className="flex gap-2"><span className="text-ms-blue-600">•</span><span><strong>External ecosystems</strong> (third-party agents, custom frameworks)</span></li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {integrations.map((integration) => (
          <div key={integration.name} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="text-4xl">{integration.icon}</div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{integration.name}</h3>
                <p className="text-xs text-ms-blue-600 font-medium mb-3">{integration.relationship}</p>
                <p className="text-sm text-gray-600">{integration.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border-l-4 border-yellow-500 p-6 rounded">
        <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
          <span>⚠️</span>
          Third-Party Integration Status
        </h3>
        <p className="text-gray-700 text-sm mb-3">
          While Microsoft states that Agent 365 is designed as an open platform supporting third-party agents, the integration mechanisms are still evolving.
        </p>
        <p className="text-gray-600 text-sm">
          <strong>Current reality:</strong> Most documentation and features focus on Microsoft-built agents. If you need to govern agents from Salesforce, ServiceNow, Workday, or other platforms, check with your ISV vendor about their Agent 365 integration roadmap.
        </p>
      </div>
    </div>
  );
};
