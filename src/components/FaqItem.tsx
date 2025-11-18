import { useState } from 'react';
import type { FaqItem as FaqItemType } from '../data/types';
import { SourceBadge } from './SourceBadge';

interface FaqItemProps {
  faq: FaqItemType;
}

export const FaqItem: React.FC<FaqItemProps> = ({ faq }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const statusColors = {
    'Documented': 'bg-green-100 text-green-800',
    'Partially documented': 'bg-yellow-100 text-yellow-800',
    'Not yet documented / speculative': 'bg-orange-100 text-orange-800',
  };

  const difficultyColors = {
    'Intro': 'bg-blue-100 text-blue-800',
    'Intermediate': 'bg-purple-100 text-purple-800',
    'Advanced': 'bg-red-100 text-red-800',
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left"
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-gray-900 flex-1">
            {faq.question}
          </h3>
          <div className="flex-shrink-0">
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform ${isExpanded ? 'transform rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <p className="mt-2 text-gray-600">{faq.shortAnswer}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className={`px-2 py-1 rounded text-xs font-medium ${statusColors[faq.status]}`}>
            {faq.status}
          </span>
          <span className={`px-2 py-1 rounded text-xs font-medium ${difficultyColors[faq.difficulty]}`}>
            {faq.difficulty}
          </span>
          {faq.categories.slice(0, 2).map((cat) => (
            <span key={cat} className="px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
              {cat}
            </span>
          ))}
        </div>
      </button>

      {isExpanded && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div
            className="prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{
              __html: faq.detailedAnswer.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br />')
            }}
          />

          {faq.sources.length > 0 && (
            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 mb-3">Sources:</h4>
              <div className="space-y-2">
                {faq.sources.map((source, idx) => (
                  <SourceBadge key={idx} source={source} />
                ))}
              </div>
            </div>
          )}

          <div className="mt-4 text-xs text-gray-500">
            Last reviewed: {new Date(faq.lastReviewed).toLocaleDateString()}
          </div>
        </div>
      )}
    </div>
  );
};
