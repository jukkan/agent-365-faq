import React from 'react';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'advisor', label: 'Ask the advisor' },
    { id: 'coverage', label: 'Included vs paid' },
    { id: 'dependencies', label: 'Dependencies' },
    { id: 'gotchas', label: 'Gotchas' },
    { id: 'faq', label: 'FAQ' },
    { id: 'open-questions', label: 'Open questions' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <button className="flex items-baseline gap-3 text-left" onClick={() => onNavigate('overview')}>
            <span className="font-display text-2xl text-gray-900">Agent 365 FAQ</span>
            <span className="font-mono text-xs text-gray-500">unofficial</span>
          </button>
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="text-sm text-gray-700 hover:text-ms-blue-600 hover:underline underline-offset-4"
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
