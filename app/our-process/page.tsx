'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sprout, Sun, Layers, PackageCheck, ShieldCheck, Award, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function OurProcessPage() {
  const steps = [
    {
      num: '01',
      title: 'Fresh Produce',
      subtitle: 'Selection of appropriate agricultural ingredients',
      desc: 'Our journey begins with sourcing quality Indian crops including millets, pulses, seeds, vegetables, and fruits suited for natural processing.',
      icon: Sprout,
    },
    {
      num: '02',
      title: 'Solar Drying',
      subtitle: 'Controlled solar drying of suitable ingredients',
      desc: 'Selected ingredients undergo clean, controlled solar drying. Utilizing natural sun energy reduces moisture content gently while protecting quality.',
      icon: Sun,
    },
    {
      num: '03',
      title: 'Stable Ingredients',
      subtitle: 'Dried ingredients are prepared for further use',
      desc: 'Solar drying transforms fresh agricultural produce into stable botanicals and grains with extended shelf life and preserved goodness.',
      icon: Layers,
    },
    {
      num: '04',
      title: 'Formulation',
      subtitle: 'Ingredients are combined into purpose-oriented food concepts',
      desc: 'Dried ingredients are blended into targeted food concepts designed around specific nutritional needs for women, mothers, and young children.',
      icon: PackageCheck,
    },
    {
      num: '05',
      title: 'Nutrient & Safety Validation',
      subtitle: 'Appropriate nutritional and food-safety validation',
      desc: 'Formulations undergo thorough specialist assessment for food safety, quality parameters, and nutritional composition before commercial readiness.',
      icon: ShieldCheck,
    },
    {
      num: '06',
      title: 'SunHarvest Products',
      subtitle: 'The resulting concepts are prepared for consumer use',
      desc: 'Finished food mixes (Iron+, Mother+, Grow+) are packaged into convenient formats ready for home preparation in everyday meals.',
      icon: Award,
    },
  ];

  return (
    <main className="min-h-screen bg-sun-cream text-sun-charcoal flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Page Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-sun-sand/30 border-b border-sun-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-mono uppercase tracking-widest text-sun-gold font-bold bg-sun-forest px-4 py-1.5 rounded-full inline-block mb-4 shadow-soft-sm">
              PRESERVATION METHODOLOGY
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-sun-forest tracking-tight">
              Our 6-Step Solar Process
            </h1>
            <p className="font-sans text-base sm:text-lg text-sun-charcoal/80 max-w-3xl mx-auto mt-4 leading-relaxed">
              Explore how SunHarvest transforms fresh Indian agricultural produce into shelf-stable, nutrient-dense food concepts using controlled solar drying.
            </p>
          </div>
        </section>

        {/* Vertical Timeline Section */}
        <section className="py-16 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative border-l-2 border-sun-gold/40 ml-4 md:ml-32 space-y-12 md:space-y-16">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative pl-8 md:pl-12"
                >
                  {/* Timeline Dot Icon */}
                  <div className="absolute -left-[25px] top-0 w-12 h-12 rounded-full bg-sun-forest text-sun-gold border-4 border-sun-cream flex items-center justify-center shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Left Number Tag on Desktop */}
                  <div className="hidden md:block absolute -left-32 top-1 text-right w-24">
                    <span className="font-mono text-2xl font-extrabold text-sun-gold">
                      {step.num}
                    </span>
                  </div>

                  {/* Content Box */}
                  <div className="bg-sun-surface rounded-3xl p-6 md:p-8 border border-sun-border shadow-soft-sm hover:shadow-soft-md transition-shadow">
                    <div className="flex items-center gap-2 mb-2 md:hidden">
                      <span className="font-mono text-xs font-bold text-sun-gold bg-sun-sand px-2 py-0.5 rounded">
                        STEP {step.num}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-sun-forest">
                      {step.title}
                    </h3>
                    <p className="font-serif italic text-xs md:text-sm text-sun-olive font-medium mt-1">
                      {step.subtitle}
                    </p>
                    <p className="font-sans text-sm text-sun-charcoal/80 mt-3 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-sun-forest text-sun-cream font-sans text-sm font-semibold hover:bg-sun-olive transition-colors shadow-soft-md"
            >
              <span>Explore Products Built on This Process</span>
              <ArrowRight className="w-4 h-4 text-sun-gold" />
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
