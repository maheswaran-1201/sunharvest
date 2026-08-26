'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sun, Sprout, ShieldCheck, Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import ProductProcessVisual from '@/components/ProductProcessVisual';
import { PRODUCTS } from '@/lib/products';

export default function Home() {
  return (
    <main className="min-h-screen bg-sun-cream text-sun-charcoal selection:bg-sun-gold selection:text-white flex flex-col justify-between">
      <div>
        {/* Sticky Header Navbar */}
        <Navbar />

        {/* Hero Section with Floating Cards & Feature Strip */}
        <Hero />

        {/* SECTION 2: PRODUCT PORTFOLIO */}
        <section className="py-20 md:py-28 bg-sun-cream relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-sun-gold font-bold bg-sun-forest px-4 py-1.5 rounded-full inline-block mb-4 shadow-soft-sm">
                AGRICULTURAL NUTRITION CONCEPTS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-sun-forest tracking-tight">
                Nutrition, rooted in Indian agriculture.
              </h2>
              <p className="font-sans text-base md:text-lg text-sun-charcoal/80 mt-4 leading-relaxed">
                Explore SunHarvest's nutrition-focused food concepts, developed around diverse agricultural ingredients and the process of solar preservation.
              </p>
            </div>

            {/* 3 Product Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PRODUCTS.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: REUSABLE PROCESS FLOW */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductProcessVisual />
        </section>

      </div>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
