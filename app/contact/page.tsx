'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <main className="min-h-screen bg-sun-cream text-sun-charcoal flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Page Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-sun-sand/30 border-b border-sun-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-mono uppercase tracking-widest text-sun-gold font-bold bg-sun-forest px-4 py-1.5 rounded-full inline-block mb-4 shadow-soft-sm">
              GET IN TOUCH
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-sun-forest tracking-tight">
              Contact SunHarvest
            </h1>
            <p className="font-sans text-base sm:text-lg text-sun-charcoal/80 max-w-2xl mx-auto mt-4 leading-relaxed">
              We welcome inquiries from customers, agricultural partners, and organizations interested in our solar preservation and nutrition food concepts.
            </p>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Contact Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-sun-forest">
                Direct Communication
              </h2>
              <p className="font-sans text-sm text-sun-charcoal/80 leading-relaxed">
                Reach out to us directly via email or phone, or visit our location.
              </p>

              {/* Email Card */}
              <div className="bg-sun-surface rounded-3xl p-6 border border-sun-border shadow-soft-sm flex items-start gap-4 hover:border-sun-gold transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-sun-forest text-sun-gold flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sun-forest text-base">Email</h3>
                  <a
                    href="mailto:arvindh2310@gmail.com"
                    className="font-sans text-sm text-sun-olive hover:text-sun-forest transition-colors break-all block mt-1"
                  >
                    arvindh2310@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-sun-surface rounded-3xl p-6 border border-sun-border shadow-soft-sm flex items-start gap-4 hover:border-sun-gold transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-sun-gold text-sun-forest flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sun-forest text-base">Phone</h3>
                  <a
                    href="tel:6300113574"
                    className="font-sans text-sm text-sun-olive hover:text-sun-forest transition-colors block mt-1"
                  >
                    6300113574
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-sun-surface rounded-3xl p-6 border border-sun-border shadow-soft-sm flex items-start gap-4 hover:border-sun-gold transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-sun-olive text-sun-cream flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sun-forest text-base">Location</h3>
                  <p className="font-sans text-sm text-sun-charcoal/80 mt-1 leading-relaxed">
                    Amrita Vishwa Vidhyapeetham, Amaravati
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7 bg-sun-surface rounded-3xl md:rounded-4xl p-8 md:p-10 border border-sun-border shadow-soft-md">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-sun-forest mb-2">
                Send Us a Message
              </h2>
              <p className="font-sans text-sm text-sun-charcoal/70 mb-8">
                Fill out the form below and we will respond to your query.
              </p>

              {submitted ? (
                <div className="bg-sun-sand/80 border border-sun-border rounded-2xl p-8 text-center space-y-4 my-8">
                  <CheckCircle2 className="w-12 h-12 text-sun-forest mx-auto" />
                  <h3 className="font-serif text-2xl font-bold text-sun-forest">
                    Message Received
                  </h3>
                  <p className="font-sans text-sm text-sun-charcoal/80 max-w-md mx-auto">
                    Thank you for reaching out to SunHarvest. We have received your inquiry and will be in touch with you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-full bg-sun-forest text-sun-cream font-sans text-xs font-semibold hover:bg-sun-olive transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-sans font-semibold text-sun-forest uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-sun-border text-sun-charcoal text-sm focus:outline-none focus:border-sun-gold"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-sans font-semibold text-sun-forest uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-sun-border text-sun-charcoal text-sm focus:outline-none focus:border-sun-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold text-sun-forest uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Your phone number"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-sun-border text-sun-charcoal text-sm focus:outline-none focus:border-sun-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold text-sun-forest uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-sun-border text-sun-charcoal text-sm focus:outline-none focus:border-sun-gold"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-sun-forest text-sun-cream font-sans text-sm font-semibold hover:bg-sun-olive transition-colors shadow-soft-md"
                  >
                    <Send className="w-4 h-4 text-sun-gold" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
