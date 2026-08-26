'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { User, Package, Heart, LogIn, UserPlus, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<'signin' | 'signup' | 'orders' | 'tracking' | 'profile'>('signin');

  return (
    <main className="min-h-screen bg-sun-cream text-sun-charcoal flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Page Header */}
        <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-sun-sand/30 border-b border-sun-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-mono uppercase tracking-widest text-sun-gold font-bold bg-sun-forest px-3.5 py-1 rounded-full inline-block mb-2">
              USER ACCOUNT ARCHITECTURE
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-extrabold text-sun-forest tracking-tight">
              SunHarvest Account & Orders
            </h1>
          </div>
        </section>

        {/* Main Content & Tabs */}
        <section className="py-12 md:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs Header */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 border-b border-sun-border/60 pb-4">
            <button
              onClick={() => setActiveTab('signin')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-sans text-xs md:text-sm font-semibold transition-colors ${
                activeTab === 'signin'
                  ? 'bg-sun-forest text-sun-cream shadow-sm'
                  : 'bg-sun-sand/50 text-sun-charcoal/80 hover:bg-sun-sand'
              }`}
            >
              <LogIn className="w-4 h-4" />
              <span>Sign In</span>
            </button>

            <button
              onClick={() => setActiveTab('signup')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-sans text-xs md:text-sm font-semibold transition-colors ${
                activeTab === 'signup'
                  ? 'bg-sun-forest text-sun-cream shadow-sm'
                  : 'bg-sun-sand/50 text-sun-charcoal/80 hover:bg-sun-sand'
              }`}
            >
              <UserPlus className="w-4 h-4" />
              <span>Create Account</span>
            </button>

            <button
              onClick={() => setActiveTab('orders')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-sans text-xs md:text-sm font-semibold transition-colors ${
                activeTab === 'orders'
                  ? 'bg-sun-forest text-sun-cream shadow-sm'
                  : 'bg-sun-sand/50 text-sun-charcoal/80 hover:bg-sun-sand'
              }`}
            >
              <Package className="w-4 h-4" />
              <span>Order History</span>
            </button>

            <button
              onClick={() => setActiveTab('tracking')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-sans text-xs md:text-sm font-semibold transition-colors ${
                activeTab === 'tracking'
                  ? 'bg-sun-forest text-sun-cream shadow-sm'
                  : 'bg-sun-sand/50 text-sun-charcoal/80 hover:bg-sun-sand'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Order Tracking</span>
            </button>
          </div>

          {/* TAB 1: Sign In */}
          {activeTab === 'signin' && (
            <div className="bg-sun-surface rounded-3xl p-8 md:p-10 border border-sun-border max-w-md mx-auto shadow-soft-sm">
              <h2 className="font-serif text-2xl font-bold text-sun-forest mb-2">
                Sign In to SunHarvest
              </h2>
              <p className="font-sans text-xs text-sun-charcoal/70 mb-6">
                Access saved preferences and future order history.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label className="block text-xs font-sans font-semibold text-sun-forest uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-sun-border text-sun-charcoal text-sm focus:outline-none focus:border-sun-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-sans font-semibold text-sun-forest uppercase tracking-wider mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-sun-border text-sun-charcoal text-sm focus:outline-none focus:border-sun-gold"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-sun-forest text-sun-cream font-sans text-sm font-semibold hover:bg-sun-olive transition-colors shadow-soft-sm"
                >
                  Sign In
                </button>
              </form>
            </div>
          )}

          {/* TAB 2: Create Account */}
          {activeTab === 'signup' && (
            <div className="bg-sun-surface rounded-3xl p-8 md:p-10 border border-sun-border max-w-md mx-auto shadow-soft-sm">
              <h2 className="font-serif text-2xl font-bold text-sun-forest mb-2">
                Create an Account
              </h2>
              <p className="font-sans text-xs text-sun-charcoal/70 mb-6">
                Join SunHarvest for seamless nutrition ordering.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label className="block text-xs font-sans font-semibold text-sun-forest uppercase tracking-wider mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-sun-border text-sun-charcoal text-sm focus:outline-none focus:border-sun-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-sans font-semibold text-sun-forest uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-sun-border text-sun-charcoal text-sm focus:outline-none focus:border-sun-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-sans font-semibold text-sun-forest uppercase tracking-wider mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-sun-border text-sun-charcoal text-sm focus:outline-none focus:border-sun-gold"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-sun-forest text-sun-cream font-sans text-sm font-semibold hover:bg-sun-olive transition-colors shadow-soft-sm"
                >
                  Create Account
                </button>
              </form>
            </div>
          )}

          {/* TAB 3: Order History */}
          {activeTab === 'orders' && (
            <div className="bg-sun-surface rounded-3xl p-12 text-center max-w-xl mx-auto border border-sun-border space-y-6 shadow-soft-sm">
              <Package className="w-12 h-12 text-sun-gold mx-auto" />
              <div>
                <h2 className="font-serif text-2xl font-bold text-sun-forest">
                  Your orders will appear here once you place your first SunHarvest order.
                </h2>
                <p className="font-sans text-sm text-sun-charcoal/70 mt-2">
                  Order status updates and history will automatically sync after confirmation.
                </p>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-sun-forest text-sun-cream font-sans text-sm font-semibold hover:bg-sun-olive transition-colors shadow-soft-md"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 text-sun-gold" />
              </Link>
            </div>
          )}

          {/* TAB 4: Order Tracking */}
          {activeTab === 'tracking' && (
            <div className="bg-sun-surface rounded-3xl p-12 text-center max-w-xl mx-auto border border-sun-border space-y-6 shadow-soft-sm">
              <User className="w-12 h-12 text-sun-gold mx-auto" />
              <div>
                <h2 className="font-serif text-2xl font-bold text-sun-forest">
                  Order tracking will become available after your order is confirmed.
                </h2>
                <p className="font-sans text-sm text-sun-charcoal/70 mt-2">
                  Once your WhatsApp order is verified, tracking details will be sent directly to your phone.
                </p>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-sun-forest text-sun-cream font-sans text-sm font-semibold hover:bg-sun-olive transition-colors shadow-soft-md"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 text-sun-gold" />
              </Link>
            </div>
          )}
        </section>
      </div>

      <Footer />
    </main>
  );
}
