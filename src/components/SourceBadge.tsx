import type { Source } from '../data/types';

interface SourceBadgeProps {
  source: Source;
}

export const SourceBadge: React.FC<SourceBadgeProps> = ({ source }) => {
  const typeColors = {
    'Official': 'bg-blue-50 border-blue-200 text-blue-700',
    'News': 'bg-gray-50 border-gray-200 text-gray-700',
    'Analysis': 'bg-purple-50 border-purple-200 text-purple-700',
  };

  return (
    <a
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 p-3 rounded-lg border ${typeColors[source.type]} hover:shadow-md transition-shadow`}
    >
      <span className="text-xs font-medium px-2 py-1 bg-white rounded">
        {source.type}
      </span>
      <span className="text-sm flex-1">{source.label}</span>
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  );
};
