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
            className={`px-3 py-1.5 border text-sm ${
              isSelected
                ? 'bg-gray-900 text-white border-gray-900'
                : 'bg-white text-gray-700 border-gray-300 hover:border-gray-900'
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
