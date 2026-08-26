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
    price: null,
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
    price: null,
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
    price: null,
    available: true,
    ctaText: 'Explore Grow+',
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
