'use client';

import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'full' | 'icon-only' | 'light';
  className?: string;
  showTagline?: boolean;
}

export default function Logo({
  variant = 'full',
  className = '',
  showTagline = true,
}: LogoProps) {
  const isLight = variant === 'light';

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sun-gold rounded-lg ${className}`}
      aria-label="SunHarvest - Return to Homepage"
    >
      {/* Official SunHarvest Logo Image Lockup */}
      <div className="flex items-center gap-2.5">
        <div className="relative h-10 md:h-12 w-auto flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
          <img
            src="/images/logo.jpg"
            alt="SunHarvest Logo"
            className={`h-full w-auto object-contain rounded-md ${isLight ? 'brightness-125 contrast-125' : ''}`}
          />
        </div>

        {showTagline && variant !== 'icon-only' && (
          <div className="hidden sm:flex flex-col border-l border-sun-border/60 pl-2.5 ml-1">
            <span
              className={`text-[10px] md:text-[11px] font-serif italic font-semibold tracking-wider ${
                isLight ? 'text-sun-sand/90' : 'text-sun-gold'
              }`}
            >
              A Taste of Indian Summers
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
