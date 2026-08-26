'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart, ArrowLeft, Sun, ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductProcessVisual from '@/components/ProductProcessVisual';
import ProductCard from '@/components/ProductCard';
import { getProductBySlug, PRODUCTS } from '@/lib/products';
import { useShop } from '@/context/ShopContext';

export default function GrowPlusPage() {
  const product = getProductBySlug('grow-plus');
  const [quantity, setQuantity] = useState(1);
  const { addItem, toggleWishlist, isInWishlist } = useShop();

  if (!product) return null;

  const isWishlisted = isInWishlist(product.id);
  const relatedProducts = PRODUCTS.filter((p) => p.slug !== product.slug);

  return (
    <main className="min-h-screen bg-sun-cream text-sun-charcoal flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Breadcrumbs & Back link */}
        <div className="pt-28 md:pt-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/products"
            className="inline-flex items-center text-xs font-sans font-semibold text-sun-olive hover:text-sun-forest transition-colors gap-1.5 bg-sun-sand/50 px-3 py-1.5 rounded-full border border-sun-border/40"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Products</span>
          </Link>
        </div>

        {/* Product Hero & Main Info */}
        <section className="py-8 md:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left: Product Artwork Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 rounded-3xl md:rounded-4xl border border-sun-border shadow-soft-lg relative overflow-hidden flex flex-col justify-between aspect-square group"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sun-forest/70 via-transparent to-black/20 p-6 flex flex-col justify-between pointer-events-none">
                <div className="flex justify-between items-start pointer-events-auto">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-sans font-semibold uppercase tracking-wider bg-sun-orange text-sun-cream shadow-sm">
                    {product.category}
                  </span>
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`p-3 rounded-full border transition-all ${
                      isWishlisted
                        ? 'bg-rose-50 border-rose-200 text-rose-500 shadow-sm'
                        : 'bg-white/90 border-sun-border text-sun-charcoal/80 hover:text-sun-forest'
                    }`}
                    aria-label="Wishlist"
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-rose-500' : ''}`} />
                  </button>
                </div>

                <div className="text-white">
                  <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-md">
                    {product.name}
                  </h1>
                  <p className="font-serif italic text-sm md:text-base text-sun-sand font-medium mt-1 drop-shadow">
                    {product.positioning}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: Details & Purchase Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-6 space-y-6"
            >
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-sun-gold font-bold">
                  AGE-APPROPRIATE COMPLEMENTARY FOOD
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-sun-forest mt-1">
                  {product.name}
                </h2>
                <p className="font-serif italic text-lg text-sun-olive font-medium mt-1">
                  Complementary nutrition inspired by diverse agricultural ingredients.
                </p>
                <p className="font-sans text-sm md:text-base text-sun-charcoal/80 mt-3 leading-relaxed">
                  {product.concept}
                </p>
              </div>

              {/* Price Status */}
              <div className="p-4 rounded-2xl bg-sun-sand/60 border border-sun-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sun className="w-5 h-5 text-sun-gold" />
                  <div>
                    <span className="font-mono text-sm font-bold text-sun-forest uppercase tracking-wider block">
                      Price — Coming Soon
                    </span>
                    <span className="text-xs text-sun-olive">
                      Pricing will be confirmed through WhatsApp checkout.
                    </span>
                  </div>
                </div>
              </div>

              {/* Target & Positioning summary */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm font-sans text-sun-charcoal">
                  <CheckCircle2 className="w-5 h-5 text-sun-gold shrink-0 mt-0.5" />
                  <div>
                    <strong>Target Audience:</strong> {product.target}
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm font-sans text-sun-charcoal">
                  <CheckCircle2 className="w-5 h-5 text-sun-gold shrink-0 mt-0.5" />
                  <div>
                    <strong>Brand Positioning:</strong> {product.positioning}
                  </div>
                </div>
              </div>

              {/* Quantity & Add to Cart CTA */}
              <div className="pt-4 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-sans font-semibold text-sun-forest uppercase tracking-wider">
                    Quantity:
                  </span>
                  <div className="flex items-center border border-sun-border rounded-xl bg-white">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1.5 text-sun-forest font-bold hover:bg-sun-sand/50 rounded-l-xl"
                    >
                      -
                    </button>
                    <span className="px-4 py-1.5 font-mono text-sm font-bold text-sun-forest">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1.5 text-sun-forest font-bold hover:bg-sun-sand/50 rounded-r-xl"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => addItem(product, quantity)}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-sun-forest text-sun-cream font-sans font-semibold text-sm hover:bg-sun-olive transition-colors shadow-soft-md"
                  >
                    <ShoppingBag className="w-4 h-4 text-sun-gold" />
                    <span>Add {quantity} to Cart</span>
                  </button>

                  <Link
                    href="/checkout"
                    onClick={() => addItem(product, quantity)}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-sun-gold text-sun-forest font-sans font-semibold text-sm hover:bg-sun-orange hover:text-white transition-colors shadow-soft-md"
                  >
                    <span>Instant Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Product Development & Responsible Positioning Notes */}
              <div className="space-y-3 pt-2">
                {product.developmentNote && (
                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-950 flex items-start gap-3 text-xs leading-relaxed">
                    <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Important Product-Development Note:</strong> {product.developmentNote}
                    </div>
                  </div>
                )}

                {product.disclaimer && (
                  <div className="p-4 rounded-2xl bg-sun-sand border border-sun-border text-sun-charcoal flex items-start gap-3 text-xs leading-relaxed">
                    <ShieldAlert className="w-5 h-5 text-sun-olive shrink-0 mt-0.5" />
                    <div>
                      <strong>Regulatory Disclaimer:</strong> {product.disclaimer}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

          </div>

          {/* Detailed Ingredients Section */}
          <div className="mt-16 bg-sun-surface rounded-3xl p-8 border border-sun-border">
            <h3 className="font-serif text-2xl font-bold text-sun-forest mb-4">
              Complementary Food Concept Ingredients
            </h3>
            <p className="font-sans text-sm text-sun-charcoal/80 mb-6 leading-relaxed">
              SunHarvest Grow+ combines combinations of cereals, pulses, vegetables, and fruits for young children starting complementary feeding:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {product.ingredients.map((ing) => (
                <div key={ing} className="bg-sun-cream rounded-xl p-4 border border-sun-border text-center shadow-xs">
                  <span className="text-xl block mb-1">🍎</span>
                  <span className="font-serif text-xs font-bold text-sun-forest block">{ing}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Process Visual */}
          <ProductProcessVisual />

          {/* Related Products */}
          <div className="mt-16">
            <h3 className="font-serif text-2xl font-bold text-sun-forest mb-6">
              Explore Related Nutrition Concepts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProducts.map((rel, idx) => (
                <ProductCard key={rel.id} product={rel} index={idx} />
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
