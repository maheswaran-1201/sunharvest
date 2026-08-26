'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Sun, PackageCheck, Layers, ShieldCheck, Award } from 'lucide-react';

export default function ProductProcessVisual() {
  const steps = [
    {
      step: '01',
      title: 'Fresh Produce',
      icon: Sprout,
      desc: 'Sourcing diverse agricultural produce.',
    },
    {
      step: '02',
      title: 'Solar Drying',
      icon: Sun,
      desc: 'Controlled natural solar preservation.',
    },
    {
      step: '03',
      title: 'Stable Ingredients',
      icon: Layers,
      desc: 'Nutrient-rich, shelf-stable botanicals.',
    },
    {
      step: '04',
      title: 'Formulation',
      icon: PackageCheck,
      desc: 'Purpose-oriented food mix combinations.',
    },
    {
      step: '05',
      title: 'Nutrient & Safety Validation',
      icon: ShieldCheck,
      desc: 'Specialist food safety & quality checks.',
    },
    {
      step: '06',
      title: 'SunHarvest Product',
      icon: Award,
      desc: 'Preserved nutrition for daily life.',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-sun-sand/40 rounded-3xl md:rounded-4xl border border-sun-border p-6 md:p-10 my-10">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-mono uppercase tracking-widest text-sun-gold font-bold bg-sun-forest px-3 py-1 rounded-full inline-block mb-3">
          PRESERVATION JOURNEY
        </span>
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-sun-forest">
          The SunHarvest Process
        </h3>
        <p className="font-sans text-sm text-sun-charcoal/80 mt-2">
          From Indian farmland to solar preservation and validated nutrition.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative">
        {steps.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-sun-cream rounded-2xl p-4 border border-sun-border/80 flex flex-col justify-between relative group hover:border-sun-gold transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-sun-gold bg-sun-sand/80 px-2 py-0.5 rounded">
                    {item.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-sun-forest/10 flex items-center justify-center text-sun-forest group-hover:bg-sun-gold group-hover:text-sun-forest transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="font-serif text-sm font-bold text-sun-forest mb-1">
                  {item.title}
                </h4>
                <p className="font-sans text-xs text-sun-charcoal/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Arrow divider for horizontal flow on desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-sun-gold font-bold text-xs">
                  →
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
