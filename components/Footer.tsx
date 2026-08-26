'use client';

import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-sun-forest text-sun-cream pt-16 pb-12 border-t border-sun-gold/20 relative overflow-hidden">
      {/* Decorative Solar Glow Accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sun-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-sun-olive/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <Logo variant="light" />
            <p className="font-serif italic text-sun-sand/90 text-sm max-w-sm">
              Connecting Indian agricultural produce with the power of sunshine to create nutrition-focused food concepts for everyday life.
            </p>
            <div className="pt-2 text-xs font-mono uppercase tracking-wider text-sun-gold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sun-gold animate-pulse" />
              <span>Solar Dried. Indian Harvest.</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 flex flex-col space-y-3">
            <h4 className="font-serif font-bold text-white text-base tracking-wide border-b border-white/10 pb-2">
              Explore
            </h4>
            <ul className="space-y-2 text-sm font-sans text-sun-sand/80">
              <li>
                <Link href="/products" className="hover:text-sun-gold transition-colors inline-flex items-center">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/our-process" className="hover:text-sun-gold transition-colors inline-flex items-center">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:text-sun-gold transition-colors inline-flex items-center">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sun-gold transition-colors inline-flex items-center">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="lg:col-span-2 flex flex-col space-y-3">
            <h4 className="font-serif font-bold text-white text-base tracking-wide border-b border-white/10 pb-2">
              Products
            </h4>
            <ul className="space-y-2 text-sm font-sans text-sun-sand/80">
              <li>
                <Link href="/products/iron-plus" className="hover:text-sun-gold transition-colors">
                  Sun Harvest Iron+
                </Link>
              </li>
              <li>
                <Link href="/products/mother-plus" className="hover:text-sun-gold transition-colors">
                  Sun Harvest Mother+
                </Link>
              </li>
              <li>
                <Link href="/products/grow-plus" className="hover:text-sun-gold transition-colors">
                  Sun Harvest Grow+
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <h4 className="font-serif font-bold text-white text-base tracking-wide border-b border-white/10 pb-2">
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs md:text-sm font-sans text-sun-sand/90">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-sun-gold shrink-0 mt-0.5" />
                <a href="mailto:arvindh2310@gmail.com" className="hover:text-sun-gold transition-colors break-all">
                  arvindh2310@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sun-gold shrink-0" />
                <a href="tel:6300113574" className="hover:text-sun-gold transition-colors">
                  6300113574
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sun-gold shrink-0 mt-0.5" />
                <span>Amrita Vishwa Vidhyapeetham, Amaravati</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-sun-sand/70">
          <p>© {new Date().getFullYear()} SunHarvest. All rights reserved.</p>
          <p className="font-serif italic text-sun-sand font-medium">
            A Taste of Indian Summers
          </p>
        </div>
      </div>
    </footer>
  );
}
