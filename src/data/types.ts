export type AudienceRole =
  | 'IT Admin'
  | 'Security & Compliance'
  | 'Developer / Architect'
  | 'Business & Licensing';

export type Category =
  | 'Basics'
  | 'Architecture'
  | 'Security & Compliance'
  | 'Governance & Shadow Agents'
  | 'Ecosystem & Integrations'
  | 'Licensing & Availability'
  | 'Rollout & Adoption'
  | 'Developer Experience';

export type Difficulty = 'Intro' | 'Intermediate' | 'Advanced';

export type SourceType = 'Official' | 'News' | 'Analysis';

export type Status = 'Documented' | 'Partially documented' | 'Not yet documented / speculative';

export interface Source {
  label: string;
  url: string;
  type: SourceType;
}

export interface FaqItem {
  id: string;
  question: string;
  shortAnswer: string;
  detailedAnswer: string;
  audiences: AudienceRole[];
  categories: Category[];
  difficulty: Difficulty;
  sources: Source[];
  status: Status;
  lastReviewed: string;
  tags?: string[];
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  icon: string;
  targetAudiences: AudienceRole[];
  relatedFaqIds: string[];
  relatedCategories: Category[];
}

export interface OpenQuestion {
  id: string;
  question: string;
  whatWeKnow: string[];
  questionsToAsk: string[];
  category: Category;
  lastUpdated: string;
}
