import { Remedy } from '../types';

export const remedies: Remedy[] = [
  // Native American Remedies
  {
    name: "Dill Seed Tea",
    description: "Traditional remedy for fever relief",
    category: "Native American",
    ingredients: ["1 teaspoon dill seeds", "8 ounces water"],
    instructions: "Boil dill seeds in water for 10 minutes; strain and drink."
  },
  {
    name: "Tulsi Tea",
    description: "Immunity-boosting remedy",
    category: "Native American",
    ingredients: ["Fresh or dried tulsi leaves", "Boiling water"],
    instructions: "Steep tulsi leaves in boiling water for about 10 minutes; strain and drink."
  },
  {
    name: "Garlic Infused Honey",
    description: "Remedy for cough relief",
    category: "Native American",
    ingredients: ["Garlic cloves (crushed)", "Honey"],
    instructions: "Soak crushed garlic in honey overnight; take a spoonful as needed."
  },
  {
    name: "Sage Tea",
    description: "Digestive health remedy",
    category: "Native American",
    ingredients: ["Fresh or dried sage leaves", "8 ounces water"],
    instructions: "Steep sage leaves in boiling water for about 10 minutes; strain and drink."
  },
  {
    name: "Hibiscus Tea",
    description: "Traditional remedy for blood pressure",
    category: "Native American",
    ingredients: ["Dried hibiscus flowers", "8 ounces water"],
    instructions: "Boil flowers in water for about 10 minutes; strain and enjoy hot or cold."
  },
  {
    name: "Nettle Leaf Infusion",
    description: "Nutritional boost remedy",
    category: "Native American",
    ingredients: ["Fresh or dried nettle leaves", "Boiling water"],
    instructions: "Steep nettle leaves in boiling water for about 5-7 minutes; strain and drink."
  },
  // Egyptian Remedies
  {
    name: "Juniper Berry Decoction",
    description: "Digestive support remedy",
    category: "Egyptian",
    ingredients: ["Dried juniper berries", "Water"],
    instructions: "Boil berries in water for about 15 minutes; strain and drink."
  },
  {
    name: "Garlic Paste for Wounds",
    description: "Antiseptic remedy for wound healing",
    category: "Egyptian",
    ingredients: ["Fresh garlic (crushed)"],
    instructions: "Apply crushed garlic directly to the wound; cover with a bandage."
  },
  {
    name: "Coriander Seed Tea",
    description: "Fever-reducing remedy",
    category: "Egyptian",
    ingredients: ["Coriander seeds", "Water"],
    instructions: "Boil seeds in water for about 10 minutes; strain and drink."
  },
  {
    name: "Mint Tea",
    description: "Stomach upset remedy",
    category: "Egyptian",
    ingredients: ["Fresh or dried mint leaves", "Boiling water"],
    instructions: "Steep mint leaves in boiling water; strain and drink warm."
  },
  {
    name: "Rosewater",
    description: "Natural skin toner",
    category: "Egyptian",
    ingredients: ["Distilled rosewater"],
    instructions: "Apply rosewater to the skin using a cotton ball as a natural toner."
  },
  {
    name: "Fennel Seed Water",
    description: "Digestive aid remedy",
    category: "Egyptian",
    ingredients: ["Fennel seeds soaked overnight in water"],
    instructions: "Strain the seeds and drink the infused water first thing in the morning."
  },
  {
    name: "Bitter Almond Oil",
    description: "Hair health remedy",
    category: "Egyptian",
    ingredients: ["Bitter almond oil"],
    instructions: "Massage into the scalp to promote hair growth and health."
  },
  // Greek Remedies
  {
    name: "Barley Cake",
    description: "Digestive support remedy",
    category: "Greek",
    ingredients: ["Barley flour", "Water"],
    instructions: "Mix barley flour with water into a dough form; bake into cakes and consume regularly."
  },
  {
    name: "Silphium Infusion",
    description: "Ancient remedy for various ailments",
    category: "Greek",
    ingredients: ["Silphium root (if available)", "Hot water"],
    instructions: "Steep silphium root in hot water and drink as needed."
  },
  {
    name: "Rose Petal Syrup",
    description: "Cough relief remedy",
    category: "Greek",
    ingredients: ["Fresh rose petals", "Sugar"],
    instructions: "Boil rose petals with sugar to create syrup; consume as needed."
  },
  {
    name: "Pomegranate Juice",
    description: "Health-boosting remedy",
    category: "Greek",
    ingredients: ["Fresh pomegranate"],
    instructions: "Juice fresh pomegranates and drink regularly to improve overall health."
  },
  {
    name: "Thyme Infusion",
    description: "Respiratory support remedy",
    category: "Greek",
    ingredients: ["Thyme", "Hot water"],
    instructions: "Steep thyme in hot water and drink warm to relieve coughs."
  },
  // Medieval Remedies
  {
    name: "Vapor Baths with Herbs",
    description: "Traditional remedy for various ailments",
    category: "Medieval",
    ingredients: ["Lavender", "Chamomile", "Hot water"],
    instructions: "Add herbs to hot bathwater and soak."
  },
  {
    name: "Scented Garlands of Herbs",
    description: "Air purification remedy",
    category: "Medieval",
    ingredients: ["Dried herbs like sage and thyme"],
    instructions: "Hang garlands around the home to purify the air."
  },
  {
    name: "Sweet-smelling Herb Poultices",
    description: "Relief for aches and pains",
    category: "Medieval",
    ingredients: ["Sage", "Warm compresses"],
    instructions: "Mix herbs with warm compresses and apply directly onto sore areas."
  },
  {
    name: "Hemp Seed Oil",
    description: "Skin conditions remedy",
    category: "Medieval",
    ingredients: ["Hemp seed oil"],
    instructions: "Apply hemp seed oil topically on dry patches or eczema-prone areas."
  },
  {
    name: "Fenugreek Seed Paste",
    description: "Inflammation relief remedy",
    category: "Medieval",
    ingredients: ["Soaked fenugreek seeds"],
    instructions: "Grind soaked seeds into a paste and apply on inflamed areas overnight."
  },
  // General Health Remedies
  {
    name: "Black Pepper and Honey Mix",
    description: "Cough relief remedy",
    category: "General Health",
    ingredients: ["Black pepper powder", "Honey"],
    instructions: "Mix black pepper powder into honey; take a spoonful as needed."
  },
  {
    name: "Rice Water (Kanji)",
    description: "Hydration remedy for illness",
    category: "General Health",
    ingredients: ["Water used after cooking rice"],
    instructions: "Drink rice starch as needed during sickness."
  },
  {
    name: "Fenugreek Water",
    description: "Detoxification remedy",
    category: "General Health",
    ingredients: ["Fenugreek seeds soaked overnight in water"],
    instructions: "Strain and drink the water first thing in the morning."
  },
  {
    name: "Moringa Leaf Powder Smoothie",
    description: "Nutritional boost remedy",
    category: "General Health",
    ingredients: ["Moringa leaf powder", "Smoothie ingredients"],
    instructions: "Blend moringa powder with fruits and vegetables of choice."
  },
  {
    name: "Kudzu Root Tea",
    description: "Traditional fever remedy",
    category: "General Health",
    ingredients: ["Kudzu root", "Hot water"],
    instructions: "Boil kudzu root into tea form and drink warm during fever episodes."
  }
];
