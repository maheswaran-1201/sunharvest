'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, Heart, User, Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { useShop } from '@/context/ShopContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();
  const router = useRouter();

  const { getCartCount, getWishlistCount } = useShop();
  const cartCount = getCartCount();
  const wishlistCount = getWishlistCount();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Our Process', href: '/our-process' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-sun-cream/90 backdrop-blur-md shadow-soft-md py-3 border-b border-sun-border/50'
            : 'bg-transparent py-5 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* LEFT: Logo */}
            <div className="flex items-center">
              <Logo />
            </div>

            {/* CENTER: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`font-sans text-sm font-medium transition-colors duration-200 relative py-1 ${
                      isActive
                        ? 'text-sun-forest font-semibold'
                        : 'text-sun-charcoal/80 hover:text-sun-forest'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-sun-gold rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* RIGHT: Action Icons & CTA */}
            <div className="hidden sm:flex items-center gap-3 lg:gap-5">
              {/* Search Toggle */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-sun-charcoal/80 hover:text-sun-forest hover:bg-sun-sand/50 rounded-full transition-colors"
                aria-label="Search products"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Icon */}
              <Link
                href="/wishlist"
                className="relative p-2 text-sun-charcoal/80 hover:text-sun-forest hover:bg-sun-sand/50 rounded-full transition-colors"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 bg-sun-gold text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Account Icon */}
              <Link
                href="/account"
                className="p-2 text-sun-charcoal/80 hover:text-sun-forest hover:bg-sun-sand/50 rounded-full transition-colors"
                aria-label="Account"
              >
                <User className="w-5 h-5" />
              </Link>

              {/* Cart Badge */}
              <Link
                href="/cart"
                className="relative p-2 text-sun-charcoal/80 hover:text-sun-forest hover:bg-sun-sand/50 rounded-full transition-colors"
                aria-label="Shopping Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 bg-sun-gold text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* Primary CTA */}
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-sun-forest text-sun-cream font-sans text-xs md:text-sm font-semibold tracking-wide hover:bg-sun-olive transition-all duration-300 shadow-soft-sm hover:shadow-soft-md group"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* MOBILE HEADER CONTROLS (Right Side) */}
            <div className="flex sm:hidden items-center gap-1.5">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-sun-charcoal/90 hover:text-sun-forest rounded-full"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <Link
                href="/wishlist"
                className="relative p-2 text-sun-charcoal/90 hover:text-sun-forest rounded-full"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 bg-sun-gold text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              <Link
                href="/cart"
                className="relative p-2 text-sun-charcoal/90 hover:text-sun-forest rounded-full"
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 bg-sun-gold text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-sun-forest hover:bg-sun-sand/60 rounded-lg transition-colors ml-0.5"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* SEARCH BAR EXPANDABLE OVERLAY */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-sun-surface border-b border-sun-border/60 overflow-hidden shadow-inner"
            >
              <form onSubmit={handleSearchSubmit} className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-3">
                <Search className="w-5 h-5 text-sun-gold" />
                <input
                  type="text"
                  placeholder="Search products (Iron+, Mother+, Grow+ or ingredients like Millet)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent font-sans text-sm md:text-base text-sun-charcoal placeholder:text-sun-charcoal/50 focus:outline-none"
                  autoFocus
                />
                <button
                  type="submit"
                  className="text-xs font-semibold text-sun-cream bg-sun-forest hover:bg-sun-olive px-4 py-2 rounded-full transition-colors shrink-0"
                >
                  Search
                </button>
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="text-xs font-semibold text-sun-olive hover:text-sun-forest px-3 py-2 bg-sun-sand/60 rounded-full shrink-0"
                >
                  Close
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-sun-charcoal/40 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-sun-cream shadow-2xl p-6 flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pt-16">
                <div className="flex items-center justify-between pb-6 border-b border-sun-border">
                  <Logo showTagline={false} />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-sun-forest rounded-full hover:bg-sun-sand"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="mt-8 flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-lg font-serif font-medium py-2 px-3 rounded-lg transition-colors ${
                        pathname === link.href
                          ? 'bg-sun-sand text-sun-forest font-semibold'
                          : 'text-sun-charcoal hover:bg-sun-sand/40 hover:text-sun-forest'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                  
                  <Link
                    href="/account"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-lg font-serif font-medium py-2 px-3 rounded-lg transition-colors ${
                      pathname === '/account'
                        ? 'bg-sun-sand text-sun-forest font-semibold'
                        : 'text-sun-charcoal hover:bg-sun-sand/40 hover:text-sun-forest'
                    }`}
                  >
                    Account & Orders
                  </Link>
                </nav>
              </div>

              <div className="pt-6 border-t border-sun-border flex flex-col gap-4">
                <Link
                  href="/products"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-sun-forest text-sun-cream font-sans font-semibold text-sm shadow-md hover:bg-sun-olive transition-colors"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <p className="text-center text-xs text-sun-olive font-sans">
                  SunHarvest — Dried Naturally. Kept Perfectly.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
