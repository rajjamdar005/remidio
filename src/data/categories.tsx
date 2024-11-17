import React from 'react';
import { Leaf, Heart, Activity, Coffee, Sun, History, Globe, Book, Star, Stethoscope } from 'lucide-react';
import { Category } from '../types';

export const categories: Category[] = [
  { name: 'Native American', icon: <Leaf className="w-6 h-6" /> },
  { name: 'Egyptian', icon: <History className="w-6 h-6" /> },
  { name: 'Greek', icon: <Globe className="w-6 h-6" /> },
  { name: 'Medieval', icon: <Book className="w-6 h-6" /> },
  { name: 'General Health', icon: <Star className="w-6 h-6" /> },
  { name: 'Digestive', icon: <Coffee className="w-6 h-6" /> },
  { name: 'Immunity', icon: <Sun className="w-6 h-6" /> },
  { name: 'Heart & Circulation', icon: <Heart className="w-6 h-6" /> },
  { name: 'Energy & Vitality', icon: <Activity className="w-6 h-6" /> },
  { name: 'Respiratory', icon: <Stethoscope className="w-6 h-6" /> }
];