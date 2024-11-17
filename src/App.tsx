import React, { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { CategoryFilter } from './components/CategoryFilter';
import { RemedyCard } from './components/RemedyCard';
import { remedies } from './data/remedies';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredRemedies = remedies.filter(remedy => {
    const matchesSearch = remedy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         remedy.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? remedy.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800"> Remedies</h1>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
        </div>

        <CategoryFilter 
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRemedies.map((remedy) => (
            <RemedyCard key={remedy.name} remedy={remedy} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;