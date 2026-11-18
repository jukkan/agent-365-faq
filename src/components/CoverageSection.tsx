import React, { useMemo, useState } from 'react';
import { coverage } from '../data/coverage';
import type { CoverageArea } from '../data/types';

const areas: ('All' | CoverageArea)[] = ['All', 'Admin center', 'Entra', 'Purview', 'Defender', 'Intune'];

export const CoverageSection: React.FC = () => {
  const [area, setArea] = useState<'All' | CoverageArea>('All');
  const [onlyConflicts, setOnlyConflicts] = useState(false);

  const rows = useMemo(
    () => coverage.filter((r) => (area === 'All' || r.area === area) && (!onlyConflicts || r.conflict)),
    [area, onlyConflicts]
  );
  const includedCount = coverage.filter((r) => r.includedWithM365).length;

  return (
    <div className="space-y-6">
      <div className="a365-section-head na-glyph na-glyph--sum">
        <h2 className="text-3xl text-gray-900 mb-2">What's included, what's paid</h2>
        <p className="text-gray-600 max-w-3xl">
          Row-by-row from Microsoft's service description (page dated 2026-09-30). {includedCount} of {coverage.length} capabilities
          come with qualifying Microsoft 365 plans; the rest need Microsoft 365 E7/G7 or an Agent 365 license.
          Hatched rows read differently in Microsoft's Licensing FAQ.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {areas.map((a) => (
          <button
            key={a}
            onClick={() => setArea(a)}
            className={`px-3 py-1.5 border text-sm ${area === a ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-700 border-gray-300 hover:border-gray-900'}`}
          >
            {a}
          </button>
        ))}
        <label className="ml-2 flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" checked={onlyConflicts} onChange={(e) => setOnlyConflicts(e.target.checked)} />
          Only rows where sources differ
        </label>
      </div>

      <div className="overflow-x-auto">
        <table className="a365-matrix min-w-full text-sm">
          <thead>
            <tr>
              <th>Capability</th>
              <th>Where</th>
              <th className="text-center">With your M365 plan</th>
              <th className="text-center a365-matrix__paid">Needs E7 or Agent 365</th>
              <th className="text-center">In GCC</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.feature} className={r.conflict ? 'a365-matrix__conflict' : ''}>
                <td className="text-gray-900">
                  {r.feature}
                  {r.conflict && (
                    <p className="mt-1 text-xs text-gray-700">
                      <span className="font-mono text-ms-blue-600">sources differ</span> {r.conflict}
                    </p>
                  )}
                </td>
                <td className="font-mono text-xs text-gray-600 whitespace-nowrap">{r.area}</td>
                <td className="text-center">
                  {r.includedWithM365 ? <span className="a365-mark a365-mark--yes" aria-label="Included">✓</span> : <span className="text-gray-400" aria-label="Not included">—</span>}
                </td>
                <td className="text-center a365-matrix__paid">
                  {!r.includedWithM365 && <span className="font-mono text-xs a365-paid">Paid</span>}
                </td>
                <td className="text-center font-mono text-xs">
                  {r.gcc ? <span className="text-gray-700">Yes</span> : <span className="text-gray-400 line-through decoration-ms-blue-600">No</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="flex items-center gap-2 border-t-2 border-gray-900 pt-3 text-sm text-gray-800 font-sans">
        <span className="na-hatch-key na-hatch" aria-hidden="true" /> Sources differ: get it confirmed in writing before you size a purchase.
      </p>
      <p className="text-xs text-gray-500">
        Sources:{' '}
        <a className="underline" href="https://learn.microsoft.com/en-us/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365" target="_blank" rel="noopener noreferrer">service description</a>,{' '}
        <a className="underline" href="https://www.microsoft.com/licensing/faqs/122" target="_blank" rel="noopener noreferrer">Licensing FAQ</a>,{' '}
        <a className="underline" href="https://techcommunity.microsoft.com/blog/agent-365-blog/whats-new-in-microsoft-agent-365-ignite-2026/4571753" target="_blank" rel="noopener noreferrer">Ignite 2026 post</a>. The matrix lists generally available capabilities as Microsoft's tables describe them; preview status is covered in the Gotchas.
      </p>
    </div>
  );
};
