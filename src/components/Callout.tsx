import React from 'react';

interface CalloutProps {
  type: 'info' | 'warning' | 'tip' | 'important';
  title?: string;
  children: React.ReactNode;
}

// Flat N/A callout: a rule on the left, no icon, no tint except for 'important'.
export const Callout: React.FC<CalloutProps> = ({ type, title, children }) => {
  const strong = type === 'important' || type === 'warning';
  return (
    <div className={`border-l-2 pl-4 py-2 ${strong ? 'border-ms-blue-600' : 'border-gray-900'} ${type === 'important' ? 'bg-ms-blue-50' : ''}`}>
      {title && <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>}
      <div className="text-gray-700 text-sm">{children}</div>
    </div>
  );
};
