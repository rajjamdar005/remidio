import React from 'react';
import { categories } from '../data/categories';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onCategorySelect }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => onCategorySelect(category.name === selectedCategory ? '' : category.name)}
          className={`p-4 rounded-lg flex flex-col items-center justify-center transition-all ${
            category.name === selectedCategory
              ? 'bg-green-500 text-white'
              : 'bg-white hover:bg-green-50'
          }`}
        >
          {category.icon}
          <span className="mt-2 text-sm font-medium text-center">{category.name}</span>
        </button>
      ))}
    </div>
  );
};