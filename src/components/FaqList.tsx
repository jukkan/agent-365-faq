import { useState, useMemo } from 'react';
import { FaqItem } from './FaqItem';
import { FaqSearch } from './FaqSearch';
import { FilterChips } from './FilterChips';
import { RoleTabs } from './RoleTabs';
import { faqs } from '../data/faqs';
import type { Category, AudienceRole } from '../data/types';

export const FaqList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [selectedRole, setSelectedRole] = useState<AudienceRole | null>(null);

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        if (
          !faq.question.toLowerCase().includes(query) &&
          !faq.shortAnswer.toLowerCase().includes(query) &&
          !faq.detailedAnswer.toLowerCase().includes(query)
        ) {
          return false;
        }
      }

      // Category filter
      if (selectedCategories.length > 0) {
        if (!faq.categories.some((cat) => selectedCategories.includes(cat))) {
          return false;
        }
      }

      // Role filter
      if (selectedRole) {
        if (!faq.audiences.includes(selectedRole)) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedCategories, selectedRole]);

  const toggleCategory = (category: Category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl text-gray-900 mb-2">FAQ Explorer</h2>
        <p className="text-gray-600">
          Search and filter {faqs.length} questions about Microsoft Agent 365
        </p>
      </div>

      <FaqSearch value={searchQuery} onChange={setSearchQuery} />

      <RoleTabs selectedRole={selectedRole} onSelectRole={setSelectedRole} />

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Filter by category:</h3>
        <FilterChips selectedCategories={selectedCategories} onToggleCategory={toggleCategory} />
      </div>

      <div>
        <p className="text-sm text-gray-600 mb-4">
          Showing {filteredFaqs.length} of {faqs.length} questions
        </p>
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => <FaqItem key={faq.id} faq={faq} />)
          ) : (
            <div className="na-glyph na-glyph--null text-center py-16 border border-gray-300" style={{ ['--na-glyph-size' as string]: '9rem', ['--na-glyph-x' as string]: '50%' }}>
              <p className="text-gray-700">No questions match these filters. Clear a filter or shorten the search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
