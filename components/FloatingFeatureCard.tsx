'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FloatingFeatureCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

export default function FloatingFeatureCard({
  icon,
  title,
  description,
  className = '',
  delay = 0,
}: FloatingFeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`bg-white/90 backdrop-blur-md border border-sun-border/80 rounded-2xl p-4 md:p-4 shadow-soft-md hover:shadow-soft-lg transition-all duration-300 ${className}`}
    >
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-sun-sand/60 flex items-center justify-center text-xl md:text-2xl shrink-0 shadow-inner">
          {icon}
        </div>
        <div>
          <h4 className="font-serif text-sm md:text-base font-bold text-sun-forest tracking-tight">
            {title}
          </h4>
          <p className="font-sans text-xs text-sun-charcoal/70 leading-relaxed mt-0.5 max-w-[200px]">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
