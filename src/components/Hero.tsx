import React from 'react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const LEARN = 'https://learn.microsoft.com/en-us/microsoft-agent-365/overview';

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white">
      {/* Masthead: the one spice piece on this view (SPICE.md rule 1). */}
      <div className="na-cut" style={{ ['--na-cut-height' as string]: '9rem', ['--na-cut-pos' as string]: '46%' }}>
        <span className="flex items-end gap-3">
          <img src="/brand/na-monogram-dark.svg" alt="N/A" className="h-10 w-auto" />
          <span className="hidden sm:inline">Niiranen Advisory · field guide</span>
        </span>
        <span>Updated for Ignite 2026 · 17.11.2026</span>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h1 className="text-5xl sm:text-6xl leading-tight text-balance mb-4">Agent 365 FAQ</h1>
        <p className="font-display text-2xl text-ms-blue-600 mb-8">Microsoft Agent 365, the control plane for AI agents, read from the customer side.</p>

        <p className="text-xl text-gray-700 max-w-3xl mb-6">
          What you get with your Microsoft 365 plan, what the <strong>paid license</strong> adds, which other services it{' '}
          <strong>depends on</strong>, and where it <strong>catches people out</strong>.
        </p>

        <p className="max-w-3xl mb-10 border-l-2 border-ms-blue-600 pl-4 text-gray-700">
          Agent 365 has been generally available since 1 May 2026. This edition follows Ignite 2026. Sources: the Ignite 2026 post,
          the service description and the Licensing FAQ.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <button
            onClick={() => onNavigate('coverage')}
            className="px-6 py-3 bg-ms-blue-600 text-white border-2 border-ms-blue-600 hover:bg-ms-blue-800"
          >
            See what's included vs paid
          </button>
          <button
            onClick={() => onNavigate('gotchas')}
            className="px-6 py-3 bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-100"
          >
            Read the gotchas
          </button>
          <a href={LEARN} target="_blank" rel="noopener noreferrer"
            className="px-6 py-3 text-gray-700 underline underline-offset-4 hover:text-ms-blue-600 self-center font-sans">
            Microsoft's docs on Learn ↗
          </a>
        </div>

        <p className="text-sm text-gray-500">
          Not official, not affiliated with Microsoft. Verify anything that matters against{' '}
          <a href={LEARN} target="_blank" rel="noopener noreferrer" className="text-ms-blue-600 underline">Microsoft Learn</a>.
        </p>
      </div>
    </div>
  );
};
