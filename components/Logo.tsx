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
      {/* SunHarvest Emblem */}
      <div className="relative flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-sun-forest via-[#2c5737] to-sun-olive p-2 shadow-soft-md group-hover:scale-105 transition-transform duration-300">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-sun-gold overflow-visible drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Rays of Sunshine */}
          <circle cx="50" cy="42" r="24" stroke="#D99A28" strokeWidth="2.5" strokeDasharray="3 3" opacity="0.6" />
          <path
            d="M50 8V16M50 68V76M16 42H24M76 42H84M26 18L32 24M68 60L74 66M74 18L68 24M32 60L26 66"
            stroke="#D99A28"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Golden Sun Disc */}
          <circle cx="50" cy="42" r="16" fill="#D99A28" />
          {/* Internal Solar Glow */}
          <circle cx="50" cy="42" r="10" fill="#E99A32" />
          {/* Agriculture Wheat / Sun Harvest Leaf Motif */}
          <path
            d="M34 78C42 66 50 48 50 36C50 48 58 66 66 78C56 75 44 75 34 78Z"
            fill="#536B35"
          />
          <path
            d="M42 84C47 74 50 60 50 45C50 60 53 74 58 84C53 82 47 82 42 84Z"
            fill="#FCF8EF"
            opacity="0.9"
          />
          <path
            d="M50 42V88"
            stroke="#23452B"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {variant !== 'icon-only' && (
        <div className="flex flex-col">
          <div className="flex items-center tracking-tight">
            <span
              className={`font-serif text-xl md:text-2xl font-bold ${
                isLight ? 'text-white' : 'text-sun-forest'
              }`}
            >
              Sun<span className="text-sun-gold">Harvest</span>
            </span>
          </div>

          {showTagline && (
            <span
              className={`text-[9px] md:text-[10px] font-sans font-medium tracking-wider uppercase -mt-0.5 ${
                isLight ? 'text-sun-sand/80' : 'text-sun-olive'
              }`}
            >
              Dried Naturally. Kept Perfectly.
            </span>
          )}
        </div>
      )}
    </Link>
  );
}
