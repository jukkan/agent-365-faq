import type { Category } from '../data/types';
import { categories } from '../data/categories';

interface FilterChipsProps {
  selectedCategories: Category[];
  onToggleCategory: (category: Category) => void;
}

export const FilterChips: React.FC<FilterChipsProps> = ({ selectedCategories, onToggleCategory }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const isSelected = selectedCategories.includes(category.value);
        return (
          <button
            key={category.value}
            onClick={() => onToggleCategory(category.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              isSelected
                ? 'bg-ms-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            title={category.description}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
};
