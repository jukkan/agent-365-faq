import React from 'react';
import { scenarios } from '../data/scenarios';

interface ScenariosSectionProps {
  onNavigate: (section: string, filters?: { categories?: string[]; faqIds?: string[] }) => void;
}

export const ScenariosSection: React.FC<ScenariosSectionProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Real-World Scenarios</h2>
        <p className="text-gray-600">
          Common situations organizations face when evaluating or adopting Agent 365
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {scenarios.map((scenario) => (
          <div
            key={scenario.id}
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => onNavigate('faq', { categories: scenario.relatedCategories })}
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">{scenario.icon}</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{scenario.title}</h3>
                <p className="text-gray-600 mb-4">{scenario.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {scenario.targetAudiences.map((audience) => (
                    <span key={audience} className="px-2 py-1 bg-ms-blue-50 text-ms-blue-700 text-xs rounded font-medium">
                      {audience}
                    </span>
                  ))}
                </div>
                <button className="text-ms-blue-600 text-sm font-medium hover:underline">
                  View related FAQs →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
