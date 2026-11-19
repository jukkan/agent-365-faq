import React, { useState } from 'react';

const WEBCHAT =
  'https://copilotstudio.microsoft.com/environments/61cedc0d-ec3c-e0dd-aee1-9d28054f745e/bots/cr_a365advisor/webchat?__version__=2&enableFileAttachment=false&cliAgent=true';

const STARTERS = [
  'We have Microsoft 365 E5. What Agent 365 capabilities do we get without buying anything?',
  'What is the difference between Microsoft 365 E7 and buying Agent 365 separately?',
  'What do we need before Agent 365 Business Analytics shows data?',
  'Can Agent 365 find local agents like Claude Code on macOS laptops?',
  'Is Agent 365 available in GCC?',
];

export const AdvisorSection: React.FC = () => {
  const [started, setStarted] = useState(false);
  const [copied, setCopied] = useState<number | null>(null);

  const copy = async (i: number) => {
    try {
      await navigator.clipboard.writeText(STARTERS[i]);
      setCopied(i);
      setTimeout(() => setCopied((c) => (c === i ? null : c)), 2500);
    } catch {
      /* clipboard blocked: the text is still visible to select */
    }
  };

  return (
    <div className="grid gap-12 lg:grid-cols-[2fr_3fr] items-start">
      <div>
        <p className="font-mono text-sm text-gray-500 mb-3">Experimental · Copilot Studio</p>
        <h2 className="text-4xl mb-4">Ask the advisor</h2>
        <p className="text-lg text-gray-700 mb-4">
          A Copilot Studio agent grounded in this FAQ and Microsoft Learn's Agent 365 pages. It answers from those
          sources and says when they disagree.
        </p>
        <p className="border-l-2 border-ms-blue-600 pl-4 text-gray-700 mb-8">
          It can still be wrong. Check the cited source before you rely on an answer for a purchase or a client.
        </p>

        <p className="font-mono text-sm text-gray-500 mb-2">Try one: click to copy, then paste into the chat</p>
        <ul className="border-t border-gray-300">
          {STARTERS.map((q, i) => (
            <li key={q} className="border-b border-gray-300">
              <button
                onClick={() => copy(i)}
                className="w-full text-left py-3 pr-2 flex gap-3 items-baseline hover:bg-gray-100"
              >
                <span className="font-mono text-sm text-ms-blue-600 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-gray-800">{q}</span>
                <span className="ml-auto font-mono text-xs text-gray-500 shrink-0">{copied === i ? 'copied' : ''}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="na-window">
        <div className="na-window__bar">
          <p className="na-window__title">A365 ADVISOR · EXPERIMENTAL</p>
          <div className="na-window__controls">
            <a href={WEBCHAT} target="_blank" rel="noopener noreferrer" title="Open full screen" className="hover:bg-gray-200">
              ↗
            </a>
          </div>
        </div>
        <div className="a365-advisor-frame">
          {started ? (
            <iframe src={WEBCHAT} title="A365 Advisor chat" className="w-full h-full border-0" />
          ) : (
            <div className="na-hatch na-hatch--ink a365-advisor-idle">
              <div className="bg-white border-2 border-gray-900 p-6 max-w-sm text-center">
                <p className="mb-4 text-gray-700">
                  The chat loads from Microsoft Copilot Studio when you start it.
                </p>
                <button
                  onClick={() => setStarted(true)}
                  className="px-6 py-3 bg-ms-blue-600 text-white border-2 border-ms-blue-600 hover:bg-ms-blue-800"
                >
                  Start a conversation
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <p className="lg:col-start-2 -mt-6 text-sm text-gray-500">
        Unofficial experiment by Niiranen Advisory. Conversations are processed by Microsoft Copilot Studio. The agent's
        knowledge is the <a href="/a365-faq.md" className="underline">Markdown export</a> of this site.
      </p>
    </div>
  );
};
