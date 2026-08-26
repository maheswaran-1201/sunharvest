'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, ArrowLeft, Sun, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useShop } from '@/context/ShopContext';
import { generateWhatsAppUrl, CustomerDetails } from '@/lib/whatsapp';

export default function CheckoutPage() {
  const { cart } = useShop();
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [form, setForm] = useState<CustomerDetails>({
    fullName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pinCode: '',
    note: '',
  });

  const isEmpty = cart.length === 0;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (isEmpty) {
      setErrorMsg('Your cart is empty. Please add products before checking out.');
      return;
    }

    if (
      !form.fullName.trim() ||
      !form.phone.trim() ||
      !form.address.trim() ||
      !form.city.trim() ||
      !form.state.trim() ||
      !form.pinCode.trim()
    ) {
      setErrorMsg('Please fill in all required customer details (*).');
      return;
    }

    // Generate WhatsApp URL and open
    const whatsappUrl = generateWhatsAppUrl(form, cart);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-sun-cream text-sun-charcoal flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Header Banner */}
        <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-sun-sand/30 border-b border-sun-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-mono uppercase tracking-widest text-sun-gold font-bold bg-sun-forest px-3.5 py-1 rounded-full inline-block mb-2">
              WHATSAPP CHECKOUT FLOW
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-extrabold text-sun-forest tracking-tight">
              Order Checkout
            </h1>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="bg-sun-surface rounded-3xl p-8 md:p-12 border border-sun-border text-center max-w-2xl mx-auto space-y-6 shadow-soft-md">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-sun-forest">
                Your order details are ready in WhatsApp.
              </h2>
              <p className="font-sans text-base text-sun-charcoal/80 leading-relaxed">
                Please send the formatted message in the opened WhatsApp window to continue the order process with SunHarvest.
              </p>
              <div className="p-4 rounded-2xl bg-sun-sand/80 border border-sun-border text-xs font-mono text-sun-forest text-left space-y-1">
                <div>Recipient: +91 8778374382</div>
                <div>Status: Waiting for user to send message on WhatsApp</div>
              </div>
              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 rounded-full bg-sun-sand text-sun-forest font-sans text-xs font-semibold hover:bg-sun-border"
                >
                  Edit Order Details
                </button>
                <Link
                  href="/products"
                  className="px-6 py-3 rounded-full bg-sun-forest text-sun-cream font-sans text-xs font-semibold hover:bg-sun-olive"
                >
                  Back to Products
                </Link>
              </div>
            </div>
          ) : isEmpty ? (
            <div className="bg-sun-surface rounded-3xl p-12 text-center max-w-xl mx-auto border border-sun-border space-y-6">
              <ShoppingBag className="w-12 h-12 text-sun-gold mx-auto" />
              <h2 className="font-serif text-2xl font-bold text-sun-forest">
                Your cart is empty.
              </h2>
              <p className="font-sans text-sm text-sun-charcoal/70">
                Please add products to your cart before proceeding to checkout.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sun-forest text-sun-cream font-sans text-sm font-semibold hover:bg-sun-olive"
              >
                <span>Browse Products</span>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleCheckout} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* LEFT COLUMN: Customer Information */}
              <div className="lg:col-span-7 bg-sun-surface rounded-3xl p-6 md:p-10 border border-sun-border shadow-soft-sm space-y-6">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-sun-forest">
                    Customer & Delivery Information
                  </h2>
                  <p className="font-sans text-xs text-sun-charcoal/70 mt-1">
                    Please provide your delivery address details for WhatsApp order confirmation.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-sans font-semibold text-sun-forest uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-sun-border text-sun-charcoal text-sm focus:outline-none focus:border-sun-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold text-sun-forest uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-sun-border text-sun-charcoal text-sm focus:outline-none focus:border-sun-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold text-sun-forest uppercase tracking-wider mb-1.5">
                      Delivery Address *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={form.address}
                      onChange={(e) => setForm({ ...form, address: e.target.value })}
                      placeholder="Street address, house number, landmark"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-sun-border text-sun-charcoal text-sm focus:outline-none focus:border-sun-gold"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-sans font-semibold text-sun-forest uppercase tracking-wider mb-1.5">
                        City *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.city}
                        onChange={(e) => setForm({ ...form, city: e.target.value })}
                        placeholder="City"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-sun-border text-sun-charcoal text-sm focus:outline-none focus:border-sun-gold"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-sans font-semibold text-sun-forest uppercase tracking-wider mb-1.5">
                        State *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.state}
                        onChange={(e) => setForm({ ...form, state: e.target.value })}
                        placeholder="State"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-sun-border text-sun-charcoal text-sm focus:outline-none focus:border-sun-gold"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-sans font-semibold text-sun-forest uppercase tracking-wider mb-1.5">
                        PIN Code *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.pinCode}
                        onChange={(e) => setForm({ ...form, pinCode: e.target.value })}
                        placeholder="PIN Code"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-sun-border text-sun-charcoal text-sm focus:outline-none focus:border-sun-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold text-sun-forest uppercase tracking-wider mb-1.5">
                      Additional Note (Optional)
                    </label>
                    <input
                      type="text"
                      value={form.note}
                      onChange={(e) => setForm({ ...form, note: e.target.value })}
                      placeholder="Special instructions or timing preferences"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-sun-border text-sun-charcoal text-sm focus:outline-none focus:border-sun-gold"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/cart"
                    className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-sun-olive hover:text-sun-forest transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Return to Shopping Cart</span>
                  </Link>
                </div>
              </div>

              {/* RIGHT COLUMN: Order Review & WhatsApp CTA */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-sun-surface rounded-3xl p-6 md:p-8 border border-sun-border shadow-soft-md space-y-6">
                  <h3 className="font-serif text-xl font-bold text-sun-forest border-b border-sun-border/60 pb-4">
                    Your Order
                  </h3>

                  {/* Products list */}
                  <div className="space-y-4 max-h-72 overflow-y-auto pr-1">
                    {cart.map((item) => (
                      <div key={item.product.id} className="flex items-center justify-between text-xs py-2 border-b border-sun-border/40">
                        <div>
                          <span className="font-serif font-bold text-sun-forest block text-sm">
                            {item.product.name}
                          </span>
                          <span className="text-sun-olive font-sans">
                            Quantity: {item.quantity}
                          </span>
                        </div>
                        <span className="font-mono text-sun-gold font-semibold">
                          Price — Coming Soon
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Summary Box */}
                  <div className="pt-4 border-t border-sun-border space-y-2 text-xs font-sans text-sun-charcoal">
                    <div className="flex justify-between">
                      <span>Pricing:</span>
                      <span className="font-mono font-bold text-sun-gold">To be confirmed</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery:</span>
                      <span className="font-mono font-bold text-sun-olive">To be confirmed</span>
                    </div>
                  </div>

                  {/* WhatsApp Info */}
                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-950 text-xs leading-relaxed flex items-start gap-2.5">
                    <MessageSquare className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      Clicking the button will open WhatsApp with your formatted order details for direct confirmation with SunHarvest at <strong>+91 8778374382</strong>.
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-emerald-600 text-white font-sans text-sm font-bold hover:bg-emerald-700 transition-colors shadow-soft-md"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Place Order on WhatsApp →</span>
                  </button>
                </div>
              </div>

            </form>
          )}
        </section>
      </div>

      <Footer />
    </main>
  );
}
