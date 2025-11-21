import React from 'react';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'faq', label: 'FAQ Explorer' },
    { id: 'scenarios', label: 'Scenarios' },
    { id: 'governance', label: 'Governance & Security' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'ecosystem', label: 'Ecosystem' },
    { id: 'open-questions', label: 'Open Questions' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-ms-blue-600 cursor-pointer" onClick={() => onNavigate('overview')}>
              Agent 365 FAQ
            </h1>
            <span className="ml-3 px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded">
              Unofficial Guide
            </span>
          </div>
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="text-gray-600 hover:text-ms-blue-600 transition-colors text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
