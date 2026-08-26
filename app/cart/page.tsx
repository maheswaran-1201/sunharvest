'use client';

import React from 'react';
import Link from 'next/link';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, Sun, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useShop } from '@/context/ShopContext';

export default function CartPage() {
  const { cart, removeItem, updateQuantity, clearCart } = useShop();

  const isEmpty = cart.length === 0;

  return (
    <main className="min-h-screen bg-sun-cream text-sun-charcoal flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Header Banner */}
        <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-sun-sand/30 border-b border-sun-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-sun-gold font-bold bg-sun-forest px-3.5 py-1 rounded-full inline-block mb-2">
                SHOPPING BAG
              </span>
              <h1 className="font-serif text-3xl md:text-5xl font-extrabold text-sun-forest tracking-tight">
                Your SunHarvest Cart
              </h1>
            </div>

            {!isEmpty && (
              <button
                onClick={clearCart}
                className="text-xs font-sans text-sun-olive hover:text-rose-600 transition-colors flex items-center gap-1.5 self-start md:self-auto bg-white/60 px-3 py-1.5 rounded-full border border-sun-border"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear Entire Cart</span>
              </button>
            )}
          </div>
        </section>

        {/* Main Cart Content */}
        <section className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isEmpty ? (
            <div className="bg-sun-surface rounded-3xl p-12 text-center max-w-xl mx-auto border border-sun-border space-y-6 shadow-soft-sm">
              <div className="w-20 h-20 rounded-full bg-sun-sand/80 flex items-center justify-center mx-auto text-sun-forest">
                <ShoppingBag className="w-10 h-10 text-sun-gold" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-sun-forest">
                  Your cart is currently empty.
                </h2>
                <p className="font-sans text-sm text-sun-charcoal/70 mt-2">
                  Explore our nutrition concepts rooted in Indian agriculture and solar preservation.
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
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Left Column: Cart Items List */}
              <div className="lg:col-span-8 space-y-6">
                {cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="bg-sun-surface rounded-3xl p-6 border border-sun-border shadow-soft-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
                  >
                    <div className="flex items-center gap-4">
                      {/* Product Symbol Box */}
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-sun-sand via-sun-cream to-sun-surface border border-sun-border flex items-center justify-center text-3xl shrink-0">
                        {item.product.slug === 'iron-plus'
                          ? '🌾'
                          : item.product.slug === 'mother-plus'
                          ? '🌱'
                          : '🥭'}
                      </div>

                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-sun-olive bg-sun-sand/60 px-2 py-0.5 rounded">
                          {item.product.category}
                        </span>
                        <h3 className="font-serif text-xl font-bold text-sun-forest mt-1">
                          <Link href={`/products/${item.product.slug}`} className="hover:underline">
                            {item.product.name}
                          </Link>
                        </h3>
                        <p className="font-serif italic text-xs text-sun-olive mt-0.5">
                          {item.product.positioning}
                        </p>
                        <div className="mt-2 text-xs font-mono font-semibold text-sun-gold">
                          Price — Coming Soon
                        </div>
                      </div>
                    </div>

                    {/* Quantity Controls & Remove */}
                    <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-t-0 border-sun-border/60">
                      <div className="flex items-center border border-sun-border rounded-xl bg-white">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-3 py-1.5 text-sun-forest hover:bg-sun-sand/50 rounded-l-xl font-bold"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 py-1.5 font-mono text-xs font-bold text-sun-forest">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-3 py-1.5 text-sun-forest hover:bg-sun-sand/50 rounded-r-xl font-bold"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="p-2 text-sun-charcoal/50 hover:text-rose-600 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}

                <div className="pt-2">
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 text-xs font-sans font-semibold text-sun-olive hover:text-sun-forest transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Continue Browsing Products</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Order Summary */}
              <div className="lg:col-span-4 bg-sun-surface rounded-3xl p-6 md:p-8 border border-sun-border shadow-soft-md space-y-6 h-fit">
                <h3 className="font-serif text-xl font-bold text-sun-forest border-b border-sun-border/60 pb-4">
                  Order Summary
                </h3>

                <div className="space-y-3 text-xs font-sans text-sun-charcoal">
                  <div className="flex justify-between py-1">
                    <span>Total Products Selected:</span>
                    <span className="font-mono font-bold text-sun-forest">{cart.length} item(s)</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Pricing Status:</span>
                    <span className="font-mono font-bold text-sun-gold">To be confirmed</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Delivery Status:</span>
                    <span className="font-mono font-bold text-sun-olive">To be confirmed</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-sun-sand/60 border border-sun-border flex items-start gap-2.5 text-xs text-sun-forest leading-relaxed">
                  <Sun className="w-4 h-4 text-sun-gold shrink-0 mt-0.5" />
                  <div>
                    <strong>WhatsApp Confirmation:</strong> Pricing will be confirmed directly through WhatsApp order placement.
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-sun-forest text-sun-cream font-sans text-sm font-semibold hover:bg-sun-olive transition-colors shadow-soft-md"
                >
                  <span>Continue to Checkout</span>
                  <ArrowRight className="w-4 h-4 text-sun-gold" />
                </Link>
              </div>

            </div>
          )}
        </section>
      </div>

      <Footer />
    </main>
  );
}
