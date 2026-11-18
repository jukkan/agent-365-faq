import { useState } from 'react';
import type { FaqItem as FaqItemType } from '../data/types';
import { SourceBadge } from './SourceBadge';

interface FaqItemProps {
  faq: FaqItemType;
}

export const FaqItem: React.FC<FaqItemProps> = ({ faq }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const isUpdated = faq.updatedAt === '2026-11-17' || faq.updatedAt === '2026-06-01' || faq.updatedAt === '2026-03-12' || faq.updatedAt === '2026-02-19';
  const isNew = faq.isNew === true;

  const getUpdateLabel = (): string => {
    const date = faq.updatedAt ?? (faq.isNew ? faq.lastReviewed : undefined);
    if (date === '2026-11-17') return 'Ignite 2026 update';
    if (date === '2026-06-01') return 'June 2026 update';
    if (date === '2026-03-12') return 'March 2026 GA update';
    return 'February 2026 refresh';
  };

  return (
    <div className={`bg-white border-b border-gray-200 py-6 ${isExpanded ? 'border-l-2 border-l-ms-blue-600 pl-5' : ''}`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left"
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl text-gray-900 flex-1">
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

        <p className="mt-2 font-serif text-gray-700">{faq.shortAnswer}</p>

        <p className="mt-3 font-mono text-xs text-gray-500">
          {(isNew || isUpdated) && <span className="text-ms-blue-600">{isNew ? 'New' : 'Updated'}: {getUpdateLabel()} · </span>}
          <span className={faq.status === 'Documented' ? '' : 'text-ms-blue-600'}>{faq.status}</span>
          {' · '}{faq.difficulty}{' · '}{faq.categories.slice(0, 2).join(', ')}
        </p>
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
              <h4 className="font-mono text-xs text-gray-500 mb-2">Sources</h4>
              <div className="border-t border-gray-200">
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
