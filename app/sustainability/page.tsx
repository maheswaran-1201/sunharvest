'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sun, Sprout, ShieldCheck, Leaf, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SustainabilityPage() {
  return (
    <main className="min-h-screen bg-sun-cream text-sun-charcoal flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Page Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-sun-forest text-sun-cream relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-sun-gold/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="text-xs font-mono uppercase tracking-widest text-sun-gold font-bold bg-white/10 px-4 py-1.5 rounded-full inline-block mb-4">
              RESPONSIBLE PRESERVATION
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Solar Preservation & Responsible Food Concepts
            </h1>
            <p className="font-sans text-base sm:text-lg text-sun-sand/90 max-w-3xl mx-auto mt-4 leading-relaxed">
              Connecting Indian agricultural crops with sun drying to extend produce stability and support food nutrition in everyday life.
            </p>
          </div>
        </section>

        {/* Editorial Content */}
        <section className="py-16 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Section 1: Solar Drying */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 bg-sun-sand/60 rounded-3xl p-8 border border-sun-border flex flex-col items-center justify-center text-center aspect-square">
              <Sun className="w-16 h-16 text-sun-gold mb-3 animate-pulse" />
              <h3 className="font-serif text-xl font-bold text-sun-forest">Harnessing Sunshine</h3>
              <span className="text-xs text-sun-olive mt-1">Natural Moisture Reduction</span>
            </div>
            <div className="md:col-span-8 space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-sun-forest">
                Sun Drying as a Natural Preservation Method
              </h2>
              <p className="font-sans text-sm md:text-base text-sun-charcoal/80 leading-relaxed">
                Solar drying relies on the abundance of natural sunlight in agricultural regions. By utilizing clean solar energy to remove moisture from harvested crops, SunHarvest reduces post-harvest loss while maintaining crop utility for food formulations.
              </p>
            </div>
          </div>

          {/* Section 2: Agriculture & Local Crops */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4 order-2 md:order-1">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-sun-forest">
                Valuing Crop Diversity in Indian Agriculture
              </h2>
              <p className="font-sans text-sm md:text-base text-sun-charcoal/80 leading-relaxed">
                Indian agriculture offers an incredible diversity of climate-resilient crops such as millets, chickpea, sesame, and native botanicals. Incorporating these crops into convenient food mixes supports diverse agricultural ecosystems and encourages traditional grain usage.
              </p>
            </div>
            <div className="md:col-span-4 bg-sun-sand/60 rounded-3xl p-8 border border-sun-border flex flex-col items-center justify-center text-center aspect-square order-1 md:order-2">
              <Sprout className="w-16 h-16 text-sun-olive mb-3" />
              <h3 className="font-serif text-xl font-bold text-sun-forest">Indian Crop Diversity</h3>
              <span className="text-xs text-sun-olive mt-1">Millets, Pulses & Botanicals</span>
            </div>
          </div>

          {/* Section 3: Responsible Processing */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 bg-sun-sand/60 rounded-3xl p-8 border border-sun-border flex flex-col items-center justify-center text-center aspect-square">
              <ShieldCheck className="w-16 h-16 text-sun-forest mb-3" />
              <h3 className="font-serif text-xl font-bold text-sun-forest">Thoughtful Processing</h3>
              <span className="text-xs text-sun-olive mt-1">Nutrient & Safety Focused</span>
            </div>
            <div className="md:col-span-8 space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-sun-forest">
                Responsible Food Preservation & Safety
              </h2>
              <p className="font-sans text-sm md:text-base text-sun-charcoal/80 leading-relaxed">
                Responsible processing means ensuring food safety, cleanliness, and nutrient integrity at every step. SunHarvest focuses on controlled hygienic solar drying and evidence-based formulation before consumer availability.
              </p>
            </div>
          </div>

          {/* Footer Callout */}
          <div className="bg-sun-surface rounded-3xl p-8 border border-sun-border text-center">
            <h3 className="font-serif text-2xl font-bold text-sun-forest mb-2">
              Learn More About Our Product Concepts
            </h3>
            <p className="font-sans text-sm text-sun-charcoal/70 mb-6">
              Explore how our products combine solar preservation with population-focused nutrition.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sun-forest text-sun-cream font-sans text-xs md:text-sm font-semibold hover:bg-sun-olive transition-colors"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4 text-sun-gold" />
            </Link>
          </div>

        </section>
      </div>

      <Footer />
    </main>
  );
}
