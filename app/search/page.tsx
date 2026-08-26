'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Search, ArrowRight, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { searchProducts, Product } from '@/lib/products';

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<Product[]>([]);

  useEffect(() => {
    setQuery(initialQuery);
    setResults(searchProducts(initialQuery));
  }, [initialQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    setResults(searchProducts(val));
  };

  const handleClear = () => {
    setQuery('');
    setResults(searchProducts(''));
  };

  return (
    <div className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Search Input Box */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative flex items-center">
          <Search className="w-5 h-5 text-sun-gold absolute left-4 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={handleSearchChange}
            placeholder="Search by product name (Iron+), target (Women), or ingredients (Millet)..."
            className="w-full pl-12 pr-10 py-4 rounded-2xl bg-sun-surface border border-sun-border font-sans text-sm md:text-base text-sun-charcoal placeholder:text-sun-charcoal/50 focus:outline-none focus:border-sun-gold shadow-soft-sm"
            autoFocus
          />
          {query && (
            <button
              onClick={handleClear}
              className="absolute right-4 p-1 text-sun-charcoal/50 hover:text-sun-forest rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        {query && (
          <p className="text-xs font-sans text-sun-olive mt-2 text-center">
            Showing search results for "<strong className="text-sun-forest">{query}</strong>"
          </p>
        )}
      </div>

      {/* Search Results */}
      {results.length === 0 ? (
        <div className="bg-sun-surface rounded-3xl p-12 text-center max-w-xl mx-auto border border-sun-border space-y-6 shadow-soft-sm">
          <div className="w-16 h-16 rounded-full bg-sun-sand flex items-center justify-center mx-auto text-sun-forest">
            <Search className="w-8 h-8 text-sun-gold" />
          </div>
          <div>
            <h2 className="font-serif text-2xl font-bold text-sun-forest">
              No SunHarvest products found.
            </h2>
            <p className="font-sans text-sm text-sun-charcoal/70 mt-2">
              Try searching for "Iron+", "Mother+", "Grow+", "Women", "Millet", or "Children".
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-sun-forest text-sun-cream font-sans text-sm font-semibold hover:bg-sun-olive transition-colors shadow-soft-md"
          >
            <span>Explore All Products</span>
            <ArrowRight className="w-4 h-4 text-sun-gold" />
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-sun-cream text-sun-charcoal flex flex-col justify-between">
      <div>
        <Navbar />

        <section className="pt-32 pb-8 md:pt-40 md:pb-12 bg-sun-sand/30 border-b border-sun-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-mono uppercase tracking-widest text-sun-gold font-bold bg-sun-forest px-3.5 py-1 rounded-full inline-block mb-2">
              CATALOG SEARCH
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-extrabold text-sun-forest tracking-tight">
              Search SunHarvest Products
            </h1>
          </div>
        </section>

        <Suspense fallback={<div className="py-20 text-center text-sun-olive">Loading search...</div>}>
          <SearchContent />
        </Suspense>
      </div>

      <Footer />
    </main>
  );
}
