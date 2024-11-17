import React from 'react';
import { Remedy } from '../types';

interface RemedyCardProps {
  remedy: Remedy;
}

export const RemedyCard: React.FC<RemedyCardProps> = ({ remedy }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-800">{remedy.name}</h3>
          <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
            {remedy.category}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{remedy.description}</p>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Ingredients:</h4>
            <ul className="list-disc list-inside text-gray-600">
              {remedy.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Instructions:</h4>
            <p className="text-gray-600">{remedy.instructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};