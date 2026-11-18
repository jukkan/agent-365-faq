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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {dependencies.map((d) => (
        <div key={d.name} className="a365-dep">
          <h3 className="a365-dep__name">{d.name}</h3>
          <p className="a365-dep__what">{d.whatItDoes}</p>
          <dl className="a365-dep__facts">
            <dt>License</dt><dd>{d.licenseNote}</dd>
            <dt>Without it</dt><dd>{d.withoutIt}</dd>
          </dl>
        </div>
      ))}
    </div>
  </div>
);
