"use client";

import React, { useState } from 'react';
import { ChevronRight, Share2, Globe, Camera, Send, Building2 } from 'lucide-react';

export default function FooterSection() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed with:', email);
    setEmail('');
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#1a2942] via-[#0e172e] to-[#040812] text-white font-sans antialiased overflow-hidden pt-10 sm:pt-14 pb-12 sm:pb-16 border-t border-white/10">

      {/* Giant Background Watermark Typography (Fully visible descenders) */}
      <div className="absolute bottom-2 left-0 right-0 w-full select-none pointer-events-none overflow-hidden leading-none z-0 px-2 flex justify-center">
        <span className="text-[12.5vw] font-serif font-bold text-white/[0.14] tracking-tighter whitespace-nowrap block text-center max-w-full">
          Megha Systems
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">

        {/* Top Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-10 sm:pb-12">

          {/* Left Column: Brand & Newsletter */}
          <div className="md:col-span-6 lg:col-span-7 space-y-8">
            {/* Logo */}
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 text-white flex items-center justify-center shadow-lg shadow-black/20">
                <Building2 className="w-6 h-6 stroke-[1.8]" />
              </div>
              <span className="text-3xl font-serif font-bold tracking-tight text-white">
                Megha Systems
              </span>
            </div>

            {/* Tagline & Address */}
            <div className="space-y-3.5 max-w-lg">
              <h3 className="text-3xl sm:text-4xl font-serif text-white font-medium leading-tight">
                Luxury Systems for iconic spaces.
              </h3>
              <p className="text-base text-white/80 leading-relaxed font-light">
                Plot No.341/1,2,3 & 4, Safdar Nagar, Borabanda, Hyderabad-500018
              </p>
            </div>

            {/* Newsletter */}
            <div className="space-y-4 pt-3">
              <h4 className="text-xl font-serif font-semibold text-white">
                Newsletter
              </h4>
              <form onSubmit={handleSubscribe} className="relative max-w-md">
                <div className="flex items-center bg-white/10 border border-white/25 rounded-full p-2 focus-within:border-white/60 focus-within:ring-2 focus-within:ring-white/20 transition-all shadow-inner">
                  <input
                    type="email"
                    required
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 text-base bg-transparent text-white placeholder:text-white/60 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="shrink-0 inline-flex items-center gap-2 bg-white hover:bg-neutral-100 text-[#0b1329] text-sm font-semibold px-6 py-3 rounded-full transition-all cursor-pointer shadow-md hover:shadow-lg active:scale-95"
                  >
                    <span>Subscribe</span>
                    <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Columns: Navigation & Contact */}
          <div className="md:col-span-6 lg:col-span-5 grid grid-cols-2 gap-8 sm:gap-12 pt-2">

            {/* Navigation Column */}
            <div className="space-y-6">
              <h4 className="text-sm font-bold tracking-widest text-white/90 uppercase">
                Navigation
              </h4>
              <ul className="space-y-3.5 text-base text-white/80 font-normal">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#cubicles" className="hover:text-white transition-colors">Cubicle Systems</a></li>
                <li><a href="#materials" className="hover:text-white transition-colors">Marble Finishes</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="space-y-6">
              <h4 className="text-sm font-bold tracking-widest text-white/90 uppercase">
                Contact
              </h4>
              <div className="space-y-3.5 text-base text-white/80 font-normal">
                <p className="leading-relaxed">
                  Plot Number-P10/J-3, Adore Business City, Sector 72-73, Faridabad, Haryana, 121004
                </p>
                <p>
                  <a href="mailto:hola@dominantsite.com" className="hover:text-white transition-colors font-medium text-white">
                    contact@meghasystems.com
                  </a>
                </p>
                <p>
                  <a href="tel:+919873735716" className="hover:text-white transition-colors font-medium text-white">
                    +91 9873735716
                  </a>
                </p>
                <p>
                  <a href="tel:+919873735713" className="hover:text-white transition-colors font-medium text-white">
                    +91 9873735713
                  </a>
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="#facebook"
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-[#0b1329] transition-all shadow-sm"
                  aria-label="Facebook"
                >
                  <Share2 className="w-4 h-4" />
                </a>
                <a
                  href="#linkedin"
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-[#0b1329] transition-all shadow-sm"
                  aria-label="LinkedIn"
                >
                  <Globe className="w-4 h-4" />
                </a>
                <a
                  href="#instagram"
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-[#0b1329] transition-all shadow-sm"
                  aria-label="Instagram"
                >
                  <Camera className="w-4 h-4" />
                </a>
                <a
                  href="#telegram"
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-[#0b1329] transition-all shadow-sm"
                  aria-label="Telegram"
                >
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/70 relative z-20 pb-10">
          <p>© 2026 Megha Systems. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a href="#terms" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>

    </footer>
  );
}