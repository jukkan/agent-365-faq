import React from 'react';

interface FaqSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export const FaqSearch: React.FC<FaqSearchProps> = ({ value, onChange }) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search FAQs..."
        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ms-blue-500 focus:border-transparent outline-none transition-all"
      />
    </div>
  );
};
