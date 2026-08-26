'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sprout, Sun, HeartPulse, Sparkles, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function OurStoryPage() {
  return (
    <main className="min-h-screen bg-sun-cream text-sun-charcoal flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-sun-forest text-sun-cream relative overflow-hidden">
          <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-sun-gold/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="text-xs font-mono uppercase tracking-widest text-sun-gold font-bold bg-white/10 px-4 py-1.5 rounded-full inline-block mb-4">
              OUR PHILOSOPHY
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
              From the farm. <br className="hidden sm:inline" />
              Through the sun. <br className="hidden sm:inline" />
              <span className="text-sun-gold italic font-normal">To everyday nutrition.</span>
            </h1>
            <p className="font-sans text-base sm:text-lg text-sun-sand/90 max-w-2xl mx-auto mt-6 leading-relaxed">
              Connecting Indian agricultural produce with the natural power of sunshine to create nutrition-focused food concepts for everyday living.
            </p>
          </div>
        </section>

        {/* Core Pillars Grid */}
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-sun-forest">
              The Four Pillars of SunHarvest
            </h2>
            <p className="font-sans text-sm md:text-base text-sun-charcoal/80 mt-2">
              Our approach brings together traditional crop diversity and solar drying methods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Pillar 1: Agriculture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-sun-surface rounded-3xl p-8 border border-sun-border shadow-soft-sm space-y-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-sun-forest text-sun-gold flex items-center justify-center shadow-sm">
                <Sprout className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-sun-forest">1. Agriculture</h3>
              <p className="font-sans text-sm text-sun-charcoal/80 leading-relaxed">
                SunHarvest's product concepts begin with Indian agricultural ingredients. India's rich biodiversity of millets, pulses, oilseeds, and botanicals forms the groundwork for our nutrition-focused food concepts.
              </p>
            </motion.div>

            {/* Pillar 2: Sunshine */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-sun-surface rounded-3xl p-8 border border-sun-border shadow-soft-sm space-y-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-sun-gold text-sun-forest flex items-center justify-center shadow-sm">
                <Sun className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-sun-forest">2. Sunshine</h3>
              <p className="font-sans text-sm text-sun-charcoal/80 leading-relaxed">
                Solar drying is an integral part of the preservation journey. By utilizing sunlight to gently reduce moisture content, we produce shelf-stable dried ingredients without relying on intensive artificial heat processes.
              </p>
            </motion.div>

            {/* Pillar 3: Nutrition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-sun-surface rounded-3xl p-8 border border-sun-border shadow-soft-sm space-y-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-sun-olive text-sun-cream flex items-center justify-center shadow-sm">
                <HeartPulse className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-sun-forest">3. Nutrition</h3>
              <p className="font-sans text-sm text-sun-charcoal/80 leading-relaxed">
                The resulting food mixes are designed around specific population segment food needs — complementary nutrition for children, wholesome mixes for mothers, and iron-rich grain blends for women.
              </p>
            </motion.div>

            {/* Pillar 4: Everyday Life */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="bg-sun-surface rounded-3xl p-8 border border-sun-border shadow-soft-sm space-y-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-sun-orange text-white flex items-center justify-center shadow-sm">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-sun-forest">4. Everyday Life</h3>
              <p className="font-sans text-sm text-sun-charcoal/80 leading-relaxed">
                Our goal is to connect agricultural ingredients with convenient, home-prepared food experiences. SunHarvest products fit seamlessly into daily household meals, promoting wholesome eating habits.
              </p>
            </motion.div>

          </div>

          {/* CTA Banner */}
          <div className="mt-16 bg-gradient-to-r from-sun-forest via-[#284f32] to-sun-forest rounded-3xl p-8 md:p-12 text-center text-sun-cream shadow-soft-lg">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
              Explore Our Nutrition Concepts
            </h3>
            <p className="font-sans text-sm text-sun-sand/80 max-w-xl mx-auto mb-6">
              Discover how SunHarvest Iron+, Mother+, and Grow+ bring agricultural ingredients to life.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-sun-gold text-sun-forest font-sans text-sm font-semibold hover:bg-sun-orange hover:text-white transition-colors"
            >
              <span>View Product Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
