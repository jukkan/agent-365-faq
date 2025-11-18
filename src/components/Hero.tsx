import React from 'react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="bg-gradient-to-br from-ms-blue-50 via-blue-50 to-indigo-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Microsoft Agent 365
          <span className="block text-3xl text-ms-blue-600 mt-2">
            The Control Plane for AI Agents
          </span>
        </h1>

        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
          Agent 365 is Microsoft's centralized system to <strong>register, monitor, secure, and govern</strong> all AI agents across your organization—whether built by Microsoft, third parties, or your own teams.
        </p>

        <div className="bg-white/80 backdrop-blur rounded-lg p-6 max-w-2xl mx-auto mb-8 border border-gray-200">
          <p className="text-gray-600">
            Think of it as giving your IT and security teams the same level of control over AI agents that they have over human users—because agents are becoming "digital employees" that can take actions, access data, and make decisions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <button
            onClick={() => onNavigate('faq')}
            className="px-8 py-3 bg-ms-blue-600 text-white font-semibold rounded-lg hover:bg-ms-blue-700 transition-colors shadow-md"
          >
            Browse FAQs
          </button>
          <button
            onClick={() => onNavigate('scenarios')}
            className="px-8 py-3 bg-white text-ms-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors border-2 border-ms-blue-600 shadow-md"
          >
            Explore Scenarios
          </button>
        </div>

        <p className="text-sm text-gray-500">
          ⚠️ <strong>Not official:</strong> This is an independent resource to help you understand Agent 365. Always verify with{' '}
          <a href="https://www.microsoft.com/en-us/microsoft-agent-365" target="_blank" rel="noopener noreferrer" className="text-ms-blue-600 underline">
            Microsoft's official documentation
          </a>.
        </p>
      </div>
    </div>
  );
};
