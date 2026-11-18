import React from 'react';
import { dependencies } from '../data/dependencies';

export const DependenciesSection: React.FC = () => (
  <div className="space-y-6">
    <div className="a365-section-head na-glyph na-glyph--lte">
      <h2 className="text-3xl text-gray-900 mb-2">What Agent 365 depends on</h2>
      <p className="text-gray-600 max-w-3xl">
        Agent 365 is a registry plus an entitlement. Most enforcement happens in other Microsoft services, so their licensing and configuration decide what you actually get.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {dependencies.map((d) => (
        <div key={d.name} className="bg-white border border-gray-200 rounded-lg p-5">
          <h3 className="text-gray-900 mb-2">{d.name}</h3>
          <p className="text-sm text-gray-700 mb-3">{d.whatItDoes}</p>
          <p className="text-sm text-gray-600 mb-2"><span className="font-medium text-gray-800">License: </span>{d.licenseNote}</p>
          <p className="text-sm text-gray-600"><span className="font-medium text-gray-800">Without it: </span>{d.withoutIt}</p>
        </div>
      ))}
    </div>
  </div>
);
