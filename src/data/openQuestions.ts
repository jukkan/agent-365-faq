import type { OpenQuestion } from './types';

export const openQuestions: OpenQuestion[] = [
  {
    id: 'oq-001',
    question: 'Which free/paid line is authoritative: the service description or the Licensing FAQ?',
    whatWeKnow: [
      'The service description (2026-09-30) lists audit/eDiscovery, endpoint agent sync and blocking unsanctioned local agents as requiring Agent 365 or E7/G7',
      'The Licensing FAQ lists them as included with any Microsoft Cloud subscription',
    ],
    questionsToAsk: [
      'Which document governs our agreement?',
      'Can you confirm in writing which features we get without Agent 365 licenses?',
    ],
    category: 'Included vs Paid',
    lastUpdated: '2026-11-17',
  },
  {
    id: 'oq-002',
    question: 'Which prerequisite licenses qualify for purchase?',
    whatWeKnow: [
      'Product Terms (June 1, 2026): E5, F5 Defender and Purview, or Business Premium',
      'Licensing FAQ also describes E3 + Defender Suite + Purview Suite, plus education and Frontline combinations',
      'Existing contracts are unaffected until renewal (Licensing FAQ)',
    ],
    questionsToAsk: [
      'Does E3 plus the Defender and Purview Suites qualify under our agreement?',
      'What happens at renewal if our current license mix no longer qualifies?',
    ],
    category: 'Included vs Paid',
    lastUpdated: '2026-11-17',
  },
  {
    id: 'oq-003',
    question: 'What will the preview features cost, and when do they reach GA?',
    whatWeKnow: [
      'Many Ignite 2026 features are preview; several start in December 2026',
      'Licensing is stated only for Business Analytics and premium usage insights',
    ],
    questionsToAsk: [
      'Will connected platforms, local agent governance and multi-tenant management be included in the $15 license at GA?',
      'Is there a GA date for dynamic agent risk?',
    ],
    category: 'Gotchas',
    lastUpdated: '2026-11-17',
  },
  {
    id: 'oq-004',
    question: 'What is the GCC and sovereign cloud roadmap?',
    whatWeKnow: [
      'Service description shows a subset in GCC; Purview rows are all unavailable',
      'FedRAMP High controls reviewed as of October 1, 2026; final authorization pending',
      'The Learn overview says GA is for the Commercial segment',
    ],
    questionsToAsk: ['When will Purview and Defender agent features reach GCC?', 'What is the plan for GCC High and DoD?'],
    category: 'Included vs Paid',
    lastUpdated: '2026-11-17',
  },
];
