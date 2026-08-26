'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS } from '@/lib/products';
import { useShop } from '@/context/ShopContext';

export default function WishlistPage() {
  const { wishlist } = useShop();

  const savedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));
  const isEmpty = savedProducts.length === 0;

  return (
    <main className="min-h-screen bg-sun-cream text-sun-charcoal flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Header */}
        <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-sun-sand/30 border-b border-sun-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-mono uppercase tracking-widest text-sun-gold font-bold bg-sun-forest px-3.5 py-1 rounded-full inline-block mb-2">
              SAVED ITEMS
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-extrabold text-sun-forest tracking-tight">
              Your Saved Products
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isEmpty ? (
            <div className="bg-sun-surface rounded-3xl p-12 text-center max-w-xl mx-auto border border-sun-border space-y-6 shadow-soft-sm">
              <div className="w-20 h-20 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center mx-auto text-rose-500">
                <Heart className="w-10 h-10 fill-rose-500/20" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-sun-forest">
                  Your SunHarvest wishlist is waiting.
                </h2>
                <p className="font-sans text-sm text-sun-charcoal/70 mt-2">
                  Save your favorite nutrition concepts to explore or purchase later.
                </p>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-sun-forest text-sun-cream font-sans text-sm font-semibold hover:bg-sun-olive transition-colors shadow-soft-md"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 text-sun-gold" />
              </Link>
            </div>
          ) : (
            <div>
              <div className="mb-6 flex justify-between items-center">
                <p className="font-sans text-sm text-sun-olive font-medium">
                  Showing {savedProducts.length} saved product(s)
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {savedProducts.map((product, idx) => (
                  <ProductCard key={product.id} product={product} index={idx} />
                ))}
              </div>
            </div>
          )}
        </section>
      </div>

      <Footer />
    </main>
  );
}
