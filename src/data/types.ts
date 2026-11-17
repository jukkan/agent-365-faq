export type AudienceRole =
  | 'IT Admin'
  | 'Security & Compliance'
  | 'Developer / Architect'
  | 'Business & Licensing';

export type Category =
  | 'Basics'
  | 'Included vs Paid'
  | 'Dependencies'
  | 'Gotchas'
  | 'Governance & Security'
  | 'Agents & Platforms'
  | 'Building Agents';

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
  /** ISO date string marking when this item was last meaningfully updated (triggers "Updated" badge) */
  updatedAt?: string;
  /** Mark as true for brand-new FAQ items added in a refresh (triggers "New" badge) */
  isNew?: boolean;
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

export type CoverageArea = 'Admin center' | 'Entra' | 'Purview' | 'Defender' | 'Intune';

/** One row of the Microsoft 365 service description feature table. */
export interface CoverageRow {
  feature: string;
  area: CoverageArea;
  /** Included with qualifying Microsoft 365 Enterprise, Business, Education and Frontline plans */
  includedWithM365: boolean;
  /** Available in GCC per the service description */
  gcc: boolean;
  /** Where the Agent 365 Licensing FAQ (microsoft.com/licensing/faqs/122) appears to say something different */
  conflict?: string;
}

export interface Dependency {
  name: string;
  whatItDoes: string;
  licenseNote: string;
  withoutIt: string;
}

export interface Gotcha {
  id: string;
  title: string;
  body: string;
  severity: 'important' | 'warning' | 'info';
  source: Source;
}
