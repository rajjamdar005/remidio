import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearch: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearch }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search remedies..."
        className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
      <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
    </div>
  );
};