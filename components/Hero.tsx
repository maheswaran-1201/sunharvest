'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Sun, Award } from 'lucide-react';
import FloatingFeatureCard from './FloatingFeatureCard';
import FeatureStrip from './FeatureStrip';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-28 pb-16 md:pt-36 md:pb-24 bg-sun-cream overflow-hidden flex flex-col justify-between">
      {/* Background Decorative Solar & Botanical Accent Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-br from-sun-sand/40 via-sun-cream to-sun-gold/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-sun-olive/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Brand Messaging */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start space-y-6 text-left"
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sun-sand/80 border border-sun-border text-sun-forest font-sans text-xs font-semibold tracking-wider uppercase shadow-soft-sm">
              <span className="text-sun-gold text-sm animate-pulse">☀️</span>
              <span>FROM FARM TO SUN</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-sun-forest tracking-tight leading-[1.15]">
              Dried <span className="text-sun-gold italic font-normal">Naturally.</span> <br />
              Kept <span className="text-sun-olive">Perfectly.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="font-sans text-base sm:text-lg text-sun-charcoal/80 font-normal leading-relaxed max-w-xl">
              Connecting Indian agricultural produce with the power of sunshine to create nutrition-focused food concepts for everyday life.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <Link
                href="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-sun-forest text-sun-cream font-sans text-base font-semibold tracking-wide hover:bg-sun-olive transition-all duration-300 shadow-soft-md hover:shadow-soft-lg group"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/our-process"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 rounded-full bg-sun-sand/70 border border-sun-border text-sun-forest font-sans text-base font-semibold hover:bg-sun-sand transition-all duration-300 shadow-soft-sm group"
              >
                <span>Our Process</span>
                <ArrowRight className="w-4 h-4 ml-1.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </Link>
            </div>

            {/* Trust indicator pill */}
            <div className="pt-4 flex items-center gap-6 text-xs text-sun-olive font-sans font-medium">
              <div className="flex items-center gap-1.5">
                <Leaf className="w-4 h-4 text-sun-gold" />
                <span>100% Sun Dried</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-sun-border" />
              <div className="flex items-center gap-1.5">
                <Sun className="w-4 h-4 text-sun-gold" />
                <span>Zero Artificial Heat</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-sun-border" />
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-sun-gold" />
                <span>Indian Agriculture</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Cinematic Farm-to-Sun Product Campaign Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex items-center justify-center"
          >
            {/* Main Central Cinematic Visual Canvas */}
            <div className="relative w-full max-w-xl aspect-[4/3] rounded-3xl md:rounded-[2.5rem] bg-gradient-to-br from-sun-sand via-sun-cream to-[#EFE3C8] p-3 shadow-soft-lg border border-sun-border/70 overflow-hidden group">
              <img
                src="/images/hero-banner.jpg"
                alt="SunHarvest Range — IRON+, MOTHER+, GROW+"
                className="w-full h-full object-cover object-center rounded-2xl md:rounded-[2rem] group-hover:scale-105 transition-transform duration-700 shadow-sm"
              />
              <div className="absolute inset-0 rounded-3xl md:rounded-[2.5rem] ring-1 ring-inset ring-black/10 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Feature Strip (Horizontal 4-Column Bar) */}
      <FeatureStrip />
    </section>
  );
}
