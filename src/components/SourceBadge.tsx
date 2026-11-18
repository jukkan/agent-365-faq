import type { Source } from '../data/types';

interface SourceBadgeProps {
  source: Source;
}

// A ruled link row: source type in mono, label in text face. No tinted pill.
export const SourceBadge: React.FC<SourceBadgeProps> = ({ source }) => (
  <a
    href={source.url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-baseline gap-3 py-2 border-b border-gray-200 text-gray-800 hover:text-ms-blue-600 group"
  >
    <span className="font-mono text-xs text-gray-500 w-16 shrink-0">{source.type}</span>
    <span className="text-sm flex-1 group-hover:underline">{source.label}</span>
    <span aria-hidden="true" className="text-sm">↗</span>
  </a>
);
