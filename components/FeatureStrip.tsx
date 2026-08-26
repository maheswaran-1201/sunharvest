'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Sprout, HeartPulse, Sparkles } from 'lucide-react';

export default function FeatureStrip() {
  const features = [
    {
      icon: Sun,
      title: 'Solar Drying',
      desc: 'Natural preservation through controlled solar drying.',
    },
    {
      icon: Sprout,
      title: 'Indian Agriculture',
      desc: 'Rooted in locally relevant agricultural produce.',
    },
    {
      icon: HeartPulse,
      title: 'Nutrition Focused',
      desc: 'Purpose-oriented food concepts.',
    },
    {
      icon: Sparkles,
      title: 'Thoughtful Nutrition',
      desc: 'Connecting agriculture, nutrition and everyday food.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16"
    >
      <div className="bg-gradient-to-r from-sun-forest via-[#284f32] to-sun-forest text-sun-cream rounded-3xl md:rounded-4xl p-6 md:p-10 shadow-soft-lg border border-sun-gold/20 relative overflow-hidden">
        {/* Background Subtle Solar Pattern Glow */}
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-sun-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-sun-olive/20 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 relative z-10">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex items-start gap-4 p-2 rounded-2xl transition-all duration-300 hover:bg-white/5 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-sun-gold/20 border border-sun-gold/30 flex items-center justify-center text-sun-gold shrink-0 group-hover:scale-110 group-hover:bg-sun-gold group-hover:text-sun-forest transition-all duration-300 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-base md:text-lg font-bold text-white tracking-wide">
                    {feature.title}
                  </h4>
                  <p className="font-sans text-xs md:text-sm text-sun-sand/80 leading-relaxed mt-1">
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
