import React from 'react';
import { gotchas } from '../data/gotchas';
import { Callout } from './Callout';

export const GotchasSection: React.FC = () => (
  <div className="space-y-6">
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Gotchas</h2>
      <p className="text-gray-600 max-w-3xl">
        Things that tend to surprise customers, drawn from where Microsoft's own pages differ or where status is easy to misread. Reviewed 2026-11-17.
      </p>
    </div>
    <div className="space-y-4">
      {gotchas.map((g) => (
        <Callout key={g.id} type={g.severity} title={g.title}>
          <p>{g.body}</p>
          <p className="mt-2 text-xs">
            Source:{' '}
            <a className="underline" href={g.source.url} target="_blank" rel="noopener noreferrer">{g.source.label}</a>
          </p>
        </Callout>
      ))}
    </div>
  </div>
);
