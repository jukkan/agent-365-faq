import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">About This Site</h3>
            <p className="text-sm text-gray-600">
              An unofficial, plain-language explainer for Microsoft Agent 365. Created to help IT admins, security teams, and developers understand what Agent 365 is and how it works.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Official Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.microsoft.com/en-us/microsoft-agent-365" target="_blank" rel="noopener noreferrer" className="text-ms-blue-600 hover:underline">
                  Agent 365 Landing Page
                </a>
              </li>
              <li>
                <a href="https://learn.microsoft.com/en-us/microsoft-agent-365/" target="_blank" rel="noopener noreferrer" className="text-ms-blue-600 hover:underline">
                  Learn Documentation
                </a>
              </li>
              <li>
                <a href="https://adoption.microsoft.com/en-us/copilot/frontier-program/" target="_blank" rel="noopener noreferrer" className="text-ms-blue-600 hover:underline">
                  Frontier Program
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Disclaimer</h3>
            <p className="text-xs text-gray-500">
              This site is not affiliated with Microsoft. All information is based on publicly available sources as of November 2025. Product features, pricing, and availability are subject to change. Always verify with official Microsoft documentation.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          Last updated: November 18, 2025 | Agent 365 FAQ
        </div>
      </div>
    </footer>
  );
};
