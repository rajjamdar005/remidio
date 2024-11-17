export interface Remedy {
  name: string;
  description: string;
  category: string;
  ingredients: string[];
  instructions: string;
}

export interface Category {
  name: string;
  icon: JSX.Element;
}