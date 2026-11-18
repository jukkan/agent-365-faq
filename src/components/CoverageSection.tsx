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
          Rows marked <span className="font-semibold text-amber-700">⚠ differs</span> read differently in Microsoft's Licensing FAQ.
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

      <div className="overflow-x-auto border border-gray-200 rounded-lg bg-white">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-left text-gray-700">
            <tr>
              <th className="px-4 py-3">Capability</th>
              <th className="px-4 py-3">Where</th>
              <th className="px-4 py-3 text-center">With M365 plan</th>
              <th className="px-4 py-3 text-center">Needs E7 / Agent 365</th>
              <th className="px-4 py-3 text-center">GCC</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {rows.map((r) => (
              <tr key={r.feature} className={r.conflict ? 'bg-amber-50/50' : ''}>
                <td className="px-4 py-3 text-gray-900">
                  {r.feature}
                  {r.conflict && (
                    <p className="mt-1 text-xs text-amber-800">
                      <span className="font-semibold">⚠ differs:</span> {r.conflict}
                    </p>
                  )}
                </td>
                <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{r.area}</td>
                <td className="px-4 py-3 text-center">{r.includedWithM365 ? '✓' : '—'}</td>
                <td className="px-4 py-3 text-center">{r.includedWithM365 ? '' : 'Paid'}</td>
                <td className="px-4 py-3 text-center">{r.gcc ? '✅' : '❌'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500">
        Sources:{' '}
        <a className="underline" href="https://learn.microsoft.com/en-us/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365" target="_blank" rel="noopener noreferrer">service description</a>,{' '}
        <a className="underline" href="https://www.microsoft.com/licensing/faqs/122" target="_blank" rel="noopener noreferrer">Licensing FAQ</a>,{' '}
        <a className="underline" href="https://techcommunity.microsoft.com/blog/agent-365-blog/whats-new-in-microsoft-agent-365-ignite-2026/4571753" target="_blank" rel="noopener noreferrer">Ignite 2026 post</a>. The matrix lists generally available capabilities as Microsoft's tables describe them; preview status is covered in the Gotchas.
      </p>
    </div>
  );
};
