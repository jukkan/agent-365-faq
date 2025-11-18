import React from 'react';
import { Callout } from './Callout';

export const GovernanceSection: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Governance & Security</h2>
        <p className="text-gray-600">
          How Agent 365 works with Microsoft's security and compliance stack
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-2xl">📋</span>
            Registry & Discovery
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-2">
              <span className="text-ms-blue-600">•</span>
              <span><strong>Central inventory</strong> of all agents across Microsoft 365, Power Platform, Azure, and third-party systems</span>
            </li>
            <li className="flex gap-2">
              <span className="text-ms-blue-600">•</span>
              <span><strong>Automatic discovery</strong> of agents including shadow and unsanctioned ones</span>
            </li>
            <li className="flex gap-2">
              <span className="text-ms-blue-600">•</span>
              <span><strong>Metadata tracking</strong>: owner, purpose, data access, last activity</span>
            </li>
            <li className="flex gap-2">
              <span className="text-ms-blue-600">•</span>
              <span><strong>Quarantine capability</strong> for unregistered or non-compliant agents</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-2xl">🔒</span>
            Access Control
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-2">
              <span className="text-ms-blue-600">•</span>
              <span><strong>Entra Agent ID</strong> provides identity for agents (like managed identities)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-ms-blue-600">•</span>
              <span><strong>Conditional access policies</strong> control when and where agents can run</span>
            </li>
            <li className="flex gap-2">
              <span className="text-ms-blue-600">•</span>
              <span><strong>Least privilege</strong> access with explicit permission grants</span>
            </li>
            <li className="flex gap-2">
              <span className="text-ms-blue-600">•</span>
              <span><strong>Fine-grained controls</strong> down to specific SharePoint sites or user data</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-2xl">🛡️</span>
            Security & Threat Protection
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-2">
              <span className="text-ms-blue-600">•</span>
              <span><strong>Microsoft Defender integration</strong> for threat detection and response</span>
            </li>
            <li className="flex gap-2">
              <span className="text-ms-blue-600">•</span>
              <span><strong>Runtime protection</strong> against prompt injection and malicious input</span>
            </li>
            <li className="flex gap-2">
              <span className="text-ms-blue-600">•</span>
              <span><strong>Anomaly detection</strong> for unusual agent behavior</span>
            </li>
            <li className="flex gap-2">
              <span className="text-ms-blue-600">•</span>
              <span><strong>Security posture assessment</strong> and vulnerability remediation</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-2xl">📊</span>
            Data Security & Compliance
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-2">
              <span className="text-ms-blue-600">•</span>
              <span><strong>Microsoft Purview integration</strong> for data governance</span>
            </li>
            <li className="flex gap-2">
              <span className="text-ms-blue-600">•</span>
              <span><strong>Sensitivity labels</strong> applied to data accessed by agents</span>
            </li>
            <li className="flex gap-2">
              <span className="text-ms-blue-600">•</span>
              <span><strong>Data Loss Prevention (DLP)</strong> policies prevent data exfiltration</span>
            </li>
            <li className="flex gap-2">
              <span className="text-ms-blue-600">•</span>
              <span><strong>Audit logs</strong> for compliance and regulatory requirements</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        <Callout type="tip" title="Key Questions to Ask Before Enabling Agent 365">
          <ul className="space-y-2 mt-2">
            <li>• Have we inventoried all existing agents in our environment?</li>
            <li>• Do we have clear policies for who can create agents and what they can access?</li>
            <li>• Are our Entra, Defender, and Purview configurations ready?</li>
            <li>• Have we defined our agent approval and review process?</li>
            <li>• Do we have monitoring and incident response procedures?</li>
          </ul>
        </Callout>

        <Callout type="warning" title="Common Pitfalls to Watch Out For">
          <ul className="space-y-2 mt-2">
            <li>• Enabling Agent 365 without understanding existing agents can cause disruptions</li>
            <li>• Overly restrictive policies may drive users to workarounds and shadow AI</li>
            <li>• Runtime security filtering can impact performance - test and tune</li>
            <li>• Third-party agent integration is still evolving - verify capabilities with vendors</li>
            <li>• Agent governance is ongoing work, not a one-time project</li>
          </ul>
        </Callout>
      </div>
    </div>
  );
};
