import React from 'react';
import { gotchas } from '../data/gotchas';

// N/A treatment: a numbered ledger, not tinted cards. Severity is carried by
// a word and by the accent on the number of the two "important" rows only.
const severityLabel = { important: 'Check before buying', warning: 'Watch for this', info: 'Good to know' } as const;

export const GotchasSection: React.FC = () => (
  <div className="space-y-6">
    <div>
      <h2 className="text-3xl text-gray-900 mb-2">Gotchas</h2>
      <p className="text-gray-600 max-w-3xl">
        Things that tend to surprise customers, drawn from where Microsoft's own pages differ or where status is easy to misread. Reviewed 17.11.2026.
      </p>
    </div>
    <ol className="border-t-2 border-gray-900">
      {gotchas.map((g, i) => {
        const important = g.severity === 'important';
        return (
          <li key={g.id} className="grid grid-cols-[3rem_1fr] sm:grid-cols-[4.5rem_1fr] gap-x-4 py-6 border-b border-gray-200">
            <span className={`font-display text-4xl leading-none ${important ? 'text-ms-blue-600' : 'text-gray-400'}`}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="max-w-3xl">
              <p className={`font-mono text-xs mb-1 ${important ? 'text-ms-blue-600' : 'text-gray-500'}`}>{severityLabel[g.severity]}</p>
              <h3 className="text-xl text-gray-900 mb-2">{g.title}</h3>
              <p className="text-gray-700">{g.body}</p>
              <p className="mt-2 text-sm text-gray-500">
                Source:{' '}
                <a className="underline hover:text-ms-blue-600" href={g.source.url} target="_blank" rel="noopener noreferrer">{g.source.label}</a>
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  </div>
);
