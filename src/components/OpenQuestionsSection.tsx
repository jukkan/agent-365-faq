import React from 'react';
import { openQuestions } from '../data/openQuestions';

export const OpenQuestionsSection: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Open Questions & Roadmap Gaps</h2>
        <p className="text-gray-600">
          What's currently unclear or still evolving with Agent 365
        </p>
      </div>

      <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
        <p className="text-orange-900 font-medium mb-2">
          📝 Agent 365 is in early access (Frontier program)
        </p>
        <p className="text-orange-800 text-sm">
          Many details are still being finalized as Microsoft moves toward general availability. This section tracks what we know, what we don't know, and what questions you should ask your Microsoft contacts.
        </p>
      </div>

      <div className="space-y-6">
        {openQuestions.map((oq) => (
          <div key={oq.id} className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-orange-600 font-bold">?</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{oq.question}</h3>
                <p className="text-xs text-gray-500 mt-1">
                  Category: {oq.category} • Last updated: {new Date(oq.lastUpdated).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  What We Know Now
                </h4>
                <ul className="space-y-2">
                  {oq.whatWeKnow.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex gap-2">
                      <span className="text-green-500 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
                  <span className="text-orange-600">?</span>
                  Questions to Ask Microsoft
                </h4>
                <ul className="space-y-2">
                  {oq.questionsToAsk.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex gap-2">
                      <span className="text-orange-500 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="font-semibold text-blue-900 mb-3">How to Stay Updated</h3>
        <ul className="space-y-2 text-sm text-blue-800">
          <li className="flex gap-2">
            <span>•</span>
            <span>Monitor the <a href="https://learn.microsoft.com/en-us/microsoft-agent-365/" target="_blank" rel="noopener noreferrer" className="underline font-medium">official Agent 365 documentation</a></span>
          </li>
          <li className="flex gap-2">
            <span>•</span>
            <span>Follow the <a href="https://www.microsoft.com/en-us/microsoft-365/blog/" target="_blank" rel="noopener noreferrer" className="underline font-medium">Microsoft 365 blog</a> for announcements</span>
          </li>
          <li className="flex gap-2">
            <span>•</span>
            <span>Join the Frontier program to get early access and influence product direction</span>
          </li>
          <li className="flex gap-2">
            <span>•</span>
            <span>Work with your Microsoft account team to get roadmap insights specific to your needs</span>
          </li>
          <li className="flex gap-2">
            <span>•</span>
            <span>Participate in Microsoft Tech Community forums to share experiences with peers</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
