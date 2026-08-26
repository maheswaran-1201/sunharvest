'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import ProductProcessVisual from '@/components/ProductProcessVisual';
import { PRODUCTS } from '@/lib/products';

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-sun-cream text-sun-charcoal flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Page Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-sun-sand/30 border-b border-sun-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-mono uppercase tracking-widest text-sun-gold font-bold bg-sun-forest px-4 py-1.5 rounded-full inline-block mb-4 shadow-soft-sm">
              PRODUCT PORTFOLIO
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-sun-forest tracking-tight">
              Nutrition, rooted in Indian agriculture.
            </h1>
            <p className="font-sans text-base sm:text-lg text-sun-charcoal/80 max-w-3xl mx-auto mt-4 leading-relaxed">
              Explore SunHarvest's nutrition-focused food concepts, developed around diverse agricultural ingredients and the process of solar preservation.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {/* Preservation Process Visual */}
          <div className="mt-16">
            <ProductProcessVisual />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
