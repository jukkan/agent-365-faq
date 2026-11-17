import React from 'react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="bg-gradient-to-br from-ms-blue-50 via-blue-50 to-indigo-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div className="mb-8 bg-blue-50 border border-blue-300 rounded-lg p-4 max-w-3xl mx-auto text-left text-sm text-blue-900">
          <strong>Ignite 2026 redesign (Nov 17, 2026)</strong> — Agent 365 has been generally available since May 1, 2026. This guide now focuses on what is included versus paid, what it depends on, and the gotchas. Sources: the Ignite 2026 post, the service description and the Licensing FAQ.
        </div>

        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Microsoft Agent 365
          <span className="block text-3xl text-ms-blue-600 mt-2">
            The Control Plane for AI Agents
          </span>
        </h1>

        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
          A customer-side guide to what you get with your Microsoft 365 plan, what the <strong>paid license</strong> adds, which other services it <strong>depends on</strong>, and where it <strong>catches people out</strong>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <button
            onClick={() => onNavigate('coverage')}
            className="px-8 py-3 bg-ms-blue-600 text-white font-semibold rounded-lg hover:bg-ms-blue-700 transition-colors shadow-md"
          >
            Included vs paid
          </button>
          <button
            onClick={() => onNavigate('gotchas')}
            className="px-8 py-3 bg-white text-ms-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors border-2 border-ms-blue-600 shadow-md"
          >
            Read the gotchas
          </button>
          <a
            href="https://learn.microsoft.com/en-us/microsoft-agent-365/overview"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors border-2 border-gray-300 shadow-md"
          >
            Official Docs
          </a>
        </div>

        <p className="text-sm text-gray-500">
          ⚠️ <strong>Not official:</strong> This is an independent resource to help you understand Agent 365. Always verify with{' '}
          <a href="https://learn.microsoft.com/en-us/microsoft-agent-365/overview" target="_blank" rel="noopener noreferrer" className="text-ms-blue-600 underline">
            Microsoft's official documentation on Learn
          </a>.
        </p>
      </div>
    </div>
  );
};
