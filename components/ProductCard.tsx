'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart, ArrowRight, Sun, Sparkles } from 'lucide-react';
import { Product } from '@/lib/products';
import { useShop } from '@/context/ShopContext';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem, toggleWishlist, isInWishlist } = useShop();
  const isWishlisted = isInWishlist(product.id);

  // Gradient themes per product for high visual appeal
  const cardGradients: Record<string, { bg: string; accent: string; badge: string; emoji: string }> = {
    'iron-plus': {
      bg: 'from-amber-900/10 via-sun-cream to-sun-sand/40',
      accent: 'border-sun-gold/40 text-sun-gold',
      badge: 'bg-sun-gold/15 text-sun-forest',
      emoji: '🌾',
    },
    'mother-plus': {
      bg: 'from-emerald-900/10 via-sun-cream to-sun-sand/40',
      accent: 'border-sun-olive/40 text-sun-olive',
      badge: 'bg-sun-olive/15 text-sun-forest',
      emoji: '🌱',
    },
    'grow-plus': {
      bg: 'from-orange-900/10 via-sun-cream to-sun-sand/40',
      accent: 'border-sun-orange/40 text-sun-orange',
      badge: 'bg-sun-orange/15 text-sun-forest',
      emoji: '🥭',
    },
  };

  const theme = cardGradients[product.slug] || {
    bg: 'from-sun-sand via-sun-cream to-sun-surface',
    accent: 'border-sun-gold text-sun-gold',
    badge: 'bg-sun-gold/20 text-sun-forest',
    emoji: '☀️',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-sun-surface rounded-3xl md:rounded-4xl border border-sun-border p-6 md:p-8 flex flex-col justify-between shadow-soft-md hover:shadow-soft-lg transition-all duration-300 group relative"
    >
      {/* Top Header & Badges */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className={`px-3.5 py-1 rounded-full text-xs font-sans font-semibold uppercase tracking-wider ${theme.badge}`}>
            {product.category}
          </span>
          
          <button
            onClick={() => toggleWishlist(product.id)}
            className={`p-2 rounded-full border transition-all ${
              isWishlisted
                ? 'bg-rose-50 border-rose-200 text-rose-500 shadow-sm'
                : 'bg-white/80 border-sun-border text-sun-charcoal/60 hover:text-sun-forest hover:border-sun-forest'
            }`}
            aria-label={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500' : ''}`} />
          </button>
        </div>

        {/* Product Visual Container with Real Image */}
        <Link href={`/products/${product.slug}`} className="block group-hover:scale-[1.02] transition-transform duration-300">
          <div className={`relative w-full aspect-[4/3] rounded-2xl bg-gradient-to-br ${theme.bg} border border-sun-border/60 overflow-hidden my-4 shadow-inner group/img`}>
            {/* Real Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
            />
            {/* Overlay Gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-sun-forest/80 via-sun-forest/20 to-transparent p-4 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="text-2xl drop-shadow">{theme.emoji}</span>
                <span className="text-[10px] font-mono tracking-widest text-sun-forest uppercase bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-sun-border/40 font-bold shadow-sm">
                  Target: {product.target}
                </span>
              </div>

              <div className="relative z-10 text-white">
                <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
                  {product.name}
                </h3>
                <p className="font-serif italic text-xs md:text-sm text-sun-sand font-medium mt-0.5 drop-shadow">
                  {product.positioning}
                </p>
              </div>
            </div>
          </div>
        </Link>

        {/* Concept Description */}
        <p className="font-sans text-xs md:text-sm text-sun-charcoal/80 leading-relaxed mb-4">
          {product.concept}
        </p>

        {/* Key Ingredients Pill List */}
        <div className="mb-6">
          <span className="text-[11px] font-sans font-semibold text-sun-olive uppercase tracking-wider block mb-2">
            Ingredients Concept:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {product.ingredients.slice(0, 4).map((ing) => (
              <span
                key={ing}
                className="text-[11px] font-sans bg-sun-sand/60 text-sun-forest px-2.5 py-1 rounded-md border border-sun-border/40"
              >
                {ing}
              </span>
            ))}
            {product.ingredients.length > 4 && (
              <span className="text-[11px] font-sans text-sun-olive px-1.5 py-1">
                +{product.ingredients.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer / Price & Actions */}
      <div className="pt-4 border-t border-sun-border/60 flex flex-col space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="font-serif text-xl font-bold text-sun-forest">
              {product.price ? `₹${product.price}` : 'Price — Coming Soon'}
            </span>
          </div>
          <span className="text-[11px] font-sans font-semibold text-sun-forest bg-sun-sand/80 px-3 py-1 rounded-full border border-sun-border/60">
            Solar Dried
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-1">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-sun-sand/80 text-sun-forest font-sans text-xs font-semibold hover:bg-sun-sand border border-sun-border transition-colors group/btn"
          >
            <span>{product.ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </Link>

          <button
            onClick={() => addItem(product, 1)}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-sun-forest text-sun-cream font-sans text-xs font-semibold hover:bg-sun-olive shadow-soft-sm transition-all"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-sun-gold" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
