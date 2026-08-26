export interface Product {
  id: string;
  name: string;
  slug: string;
  target: string;
  category: string;
  concept: string;
  description: string;
  ingredients: string[];
  positioning: string;
  perfectFor?: string[];
  disclaimer?: string;
  developmentNote?: string;
  image: string;
  price: number | null;
  available: boolean;
  ctaText: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'sh-iron-plus',
    name: 'Sun Harvest Iron+',
    slug: 'iron-plus',
    target: 'Women',
    category: 'Food-based nutrition mix',
    concept:
      'A nutrition-focused food mix using appropriately processed ingredients such as millet, chickpea, sesame, amla, dried fruits, and other locally relevant ingredients.',
    description:
      "SunHarvest Iron+ combines traditional Indian grains, pulses, and sun-dried botanicals into a convenient food mix created to complement a balanced daily diet for women.",
    ingredients: [
      'Millet',
      'Chickpea',
      'Sesame',
      'Amla',
      'Dried Fruits',
      'Locally Relevant Agricultural Ingredients',
    ],
    positioning: 'Designed to complement an iron-rich, diverse diet.',
    disclaimer:
      'SunHarvest Iron+ is designed as a complementary food concept and is not intended to diagnose, treat or cure anaemia.',
    image: '/images/products/iron-plus.jpg',
    price: 199,
    available: true,
    ctaText: 'Explore Iron+',
  },
  {
    id: 'sh-mother-plus',
    name: 'Sun Harvest Mother+',
    slug: 'mother-plus',
    target: 'Pregnant, postpartum and lactating mothers',
    category: 'Maternal nutrition food mix',
    concept:
      'A food mix incorporating appropriately processed millet, pulses, sesame, nuts where appropriate, dried vegetables, and dried fruits.',
    description:
      'Thoughtfully formulated around the wholesome nourishment needed during motherhood. Solar drying preserves natural goodness in a food-based format.',
    ingredients: [
      'Millet',
      'Pulses',
      'Sesame',
      'Nuts (where appropriate)',
      'Dried Vegetables',
      'Dried Fruits',
    ],
    positioning: 'Farm nutrition, conveniently preserved for mothers.',
    disclaimer:
      'SunHarvest Mother+ is positioned as a food-based maternal nutrition concept and is not intended to treat, prevent or diagnose clinical conditions.',
    image: '/images/products/mother-plus.jpg',
    price: 199,
    available: true,
    ctaText: 'Explore Mother+',
  },
  {
    id: 'sh-grow-plus',
    name: 'Sun Harvest Grow+',
    slug: 'grow-plus',
    target: 'Children 6–23 months',
    category: 'Age-appropriate complementary food',
    concept:
      'A complementary food concept using combinations of cereals, pulses, vegetables, and fruits tailored for young children starting complementary feeding.',
    description:
      'Focused on complementary nutrition and convenient home preparation, drawing from diverse Indian crops preserved naturally.',
    ingredients: ['Cereals', 'Pulses', 'Vegetables', 'Fruits'],
    positioning:
      'Focus on complementary nutrition and convenient preparation for young children.',
    developmentNote:
      'Final formulation, texture, food safety, nutritional composition and regulatory compliance require appropriate specialist validation before commercial launch.',
    disclaimer:
      'SunHarvest Grow+ is a complementary food concept. It does not treat or prevent stunting, wasting, malnutrition, nutrient deficiencies, or disease.',
    image: '/images/products/grow-plus.jpg',
    price: 199,
    available: true,
    ctaText: 'Explore Grow+',
  },
  {
    id: 'sh-dried-mango',
    name: 'Sun Harvest Dried Mango',
    slug: 'dried-mango',
    target: 'Everyday Snackers',
    category: 'Solar Dried Fruit',
    concept:
      'Naturally dried mango with a rich tropical flavor and satisfying chewy texture. A simple way to enjoy the taste of ripe mango beyond the harvest season.',
    description:
      'SunHarvest Dried Mango brings the vibrant taste of ripe mango into a convenient, naturally preserved form. Carefully prepared and dried to retain its characteristic color, flavor and texture, it makes a versatile snack for everyday moments.\n\nEnjoy it straight from the pack, add it to breakfast bowls and trail mixes, or use it to bring a naturally fruity touch to desserts and recipes.',
    ingredients: ['Ripe Sun Mango', '100% Natural Solar Dried'],
    positioning: 'Naturally dried with rich tropical flavor and satisfying chewy texture.',
    perfectFor: ['Snacking', 'Breakfast Bowls', 'Trail Mixes', 'Desserts', 'Recipes'],
    image: '/images/products/dried-mango.jpg',
    price: 149,
    available: true,
    ctaText: 'Explore Dried Mango',
  },
  {
    id: 'sh-dried-tomato',
    name: 'Sun Harvest Dried Tomato',
    slug: 'dried-tomato',
    target: 'Cooking & Meals',
    category: 'Solar Dried Vegetable',
    concept:
      'Rich, savory and naturally intense, SunHarvest Dried Tomato adds depth and character to everyday meals.',
    description:
      'SunHarvest Dried Tomato captures the concentrated flavor of ripe tomatoes in a convenient dried form. Its naturally rich, savory taste makes it an excellent ingredient for adding depth to a variety of dishes.\n\nUse it in pasta, salads, sandwiches, breads, sauces or homemade recipes whenever you want a burst of tomato flavor.',
    ingredients: ['Ripe Vine Tomatoes', '100% Natural Solar Dried'],
    positioning: 'Rich, savory, and naturally intense tomato flavor for everyday meals.',
    perfectFor: ['Pasta', 'Salads', 'Sandwiches', 'Sauces', 'Breads', 'Cooking'],
    image: '/images/products/dried-tomato.jpg',
    price: 99,
    available: true,
    ctaText: 'Explore Dried Tomato',
  },
  {
    id: 'sh-dried-carrot',
    name: 'Sun Harvest Dried Carrot',
    slug: 'dried-carrot',
    target: 'Everyday Cooking',
    category: 'Solar Dried Vegetable',
    concept:
      'Naturally dried carrot with a delicate sweetness and convenient texture, ready to bring color and flavor to everyday cooking.',
    description:
      'SunHarvest Dried Carrot transforms fresh carrots into a convenient dried ingredient while retaining their familiar earthy sweetness and vibrant character.\n\nEasy to store and simple to incorporate into meals, dried carrot can be used in soups, curries, rice dishes, noodles and other everyday recipes.',
    ingredients: ['Fresh Carrots', '100% Natural Solar Dried'],
    positioning: 'Delicate sweetness and convenient texture, ready for everyday cooking.',
    perfectFor: ['Soups', 'Curries', 'Rice Dishes', 'Noodles', 'Snacks', 'Recipes'],
    image: '/images/products/dried-carrot.jpg',
    price: 99,
    available: true,
    ctaText: 'Explore Dried Carrot',
  },
  {
    id: 'sh-dried-vegetable-mix',
    name: 'Sun Harvest Dried Vegetable Mix',
    slug: 'dried-vegetable-mix',
    target: 'Quick Meals & Recipes',
    category: 'Solar Dried Vegetable Blend',
    concept:
      'A colorful combination of dried vegetables, bringing variety, texture and convenience to everyday meals.',
    description:
      'SunHarvest Dried Vegetable Mix brings together a selection of vegetables in a convenient dried format. With a colorful mix of shapes, textures and natural flavors, it is designed to make everyday cooking more versatile and convenient.\n\nAdd it to soups, rice dishes, noodles, curries or quick meal preparations for an easy way to incorporate a variety of vegetables into your recipes.',
    ingredients: ['Peas', 'Carrots', 'Corn', 'Green Beans', '100% Natural Solar Dried'],
    positioning: 'A colorful combination bringing variety, texture and convenience.',
    perfectFor: ['Soups', 'Rice Dishes', 'Noodles', 'Curries', 'Quick Meals', 'Recipe Mixes'],
    image: '/images/products/dried-vegetable-mix.jpg',
    price: 149,
    available: true,
    ctaText: 'Explore Veg Mix',
  },
];

export function getAllProducts(): Product[] {
  return PRODUCTS;
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function searchProducts(query: string): Product[] {
  if (!query || query.trim() === '') return PRODUCTS;
  const q = query.toLowerCase().trim();
  return PRODUCTS.filter((product) => {
    const matchName = product.name.toLowerCase().includes(q);
    const matchTarget = product.target.toLowerCase().includes(q);
    const matchCategory = product.category.toLowerCase().includes(q);
    const matchIngredients = product.ingredients.some((ing) =>
      ing.toLowerCase().includes(q)
    );
    const matchPositioning = product.positioning.toLowerCase().includes(q);
    return (
      matchName || matchTarget || matchCategory || matchIngredients || matchPositioning
    );
  });
}
