"use client";

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Share2, Globe, Video, Send } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted Form:', formData);
  };

  return (
    <section className="py-12 bg-slate-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans antialiased text-slate-900">
      <div className="relative w-full max-w-[1400px] bg-white rounded-[16px] border border-slate-100 p-6 sm:p-8 lg:p-12 overflow-hidden">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">

          {/* Left Info Panel (Clean light beige/gray tone matching image 2) */}
          <aside className="lg:col-span-4 bg-[#E5E2E0] rounded-[16px] p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold tracking-tight leading-[1.2] text-black">
                Let's Talk Beautiful Spaces.
              </h2>

              {/* Info Cards */}
              <div className="space-y-4 pt-1">
                <div className="bg-[#F0EDED] rounded-[12px] p-4.5 flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-transparent flex items-center justify-center text-slate-800 shrink-0">
                    <Phone className="w-5.5 h-5.5 stroke-[1.5]" />
                  </div>
                  <div>
                    <p className="text-[12px] text-slate-600 leading-tight">Call Us</p>
                    <p className="text-base font-semibold text-black tracking-tight mt-0.5">+91 9873735713</p>
                  </div>
                </div>

                <div className="bg-[#F0EDED] rounded-[12px] p-4.5 flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-transparent flex items-center justify-center text-slate-800 shrink-0">
                    <Mail className="w-5.5 h-5.5 stroke-[1.5]" />
                  </div>
                  <div>
                    <p className="text-[12px] text-slate-600 leading-tight">Mail Us</p>
                    <p className="text-base font-semibold text-black tracking-tight mt-0.5 break-all">contact@meghasystems.com</p>
                  </div>
                </div>

                <div className="bg-[#F0EDED] rounded-[12px] p-4.5 flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-transparent flex items-center justify-center text-slate-800 shrink-0 mt-0.5">
                    <MapPin className="w-5.5 h-5.5 stroke-[1.5]" />
                  </div>
                  <div>
                    <p className="text-[12px] text-slate-600 leading-tight">Visit Us</p>
                    <p className="text-base font-semibold text-black tracking-tight leading-snug mt-0.5">
                      Adore Business City, Sector 72-73, Faridabad, Haryana, 121004
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links (Clean minimal layout, aligned to bottom of the card) */}
            <div className="pt-4 border-t border-black/10 space-y-2.5">
              <p className="text-xs font-semibold text-slate-800">Connect with us:</p>
              <div className="flex items-center gap-3">
                <a
                  href="#facebook"
                  className="text-slate-800 hover:text-black transition-all"
                  aria-label="Facebook"
                >
                  <Share2 className="w-4 h-4" />
                </a>
                <a
                  href="#twitter"
                  className="text-slate-800 hover:text-black transition-all"
                  aria-label="Twitter"
                >
                  <Globe className="w-4 h-4" />
                </a>
                <a
                  href="#youtube"
                  className="text-slate-800 hover:text-black transition-all"
                  aria-label="YouTube"
                >
                  <Video className="w-4 h-4" />
                </a>
              </div>
            </div>
          </aside>

          {/* Right Form Panel */}
          <main className="lg:col-span-8 flex flex-col justify-between py-2 sm:pr-2">
            <header className="space-y-2.5 mb-7">
              <h1 className="text-4xl font-bold tracking-tight text-black leading-tight">
                Send Us a Message
              </h1>
              <p className="text-sm text-slate-500 max-w-2xl leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </header>

            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-850">
                    Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 bg-[#F8F7F7] border border-slate-100 rounded-[8px] text-base placeholder:text-slate-450 text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-300 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-850">
                    Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 bg-[#F8F7F7] border border-slate-100 rounded-[8px] text-base placeholder:text-slate-450 text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-300 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-850">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+80"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 bg-[#F8F7F7] border border-slate-100 rounded-[8px] text-base placeholder:text-slate-450 text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-300 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-850">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Write Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 bg-[#F8F7F7] border border-slate-100 rounded-[8px] text-base placeholder:text-slate-450 text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-300 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-850">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 bg-[#F8F7F7] border border-slate-100 rounded-[8px] text-base placeholder:text-slate-450 text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-300 transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-4 bg-black hover:bg-neutral-900 text-white text-sm font-medium tracking-wide rounded-[4px] transition-all cursor-pointer active:scale-[0.98]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </main>
        </div>

        {/* Isometric 3D Office Cubicles Watermark in Deep Navy / Slate Lineart */}
        <div className="absolute -bottom-8 -right-8 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] pointer-events-none opacity-[0.14] z-0">
          <svg
            viewBox="0 0 500 500"
            fill="none"
            stroke="#0F172A"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full"
          >
            {/* Floor Grid Base */}
            <path d="M250 100 L450 200 L250 300 L50 200 Z" strokeDasharray="4 4" strokeWidth="1" />
            <path d="M250 200 L450 300 L250 400 L50 300 Z" strokeDasharray="4 4" strokeWidth="1" />

            {/* Central Isometric Cubicle 1 */}
            <path d="M250 160 L330 200 L330 290 L250 250 Z" />
            <path d="M250 160 L170 200 L170 290 L250 250 Z" />
            <path d="M250 160 L330 120 L250 80 L170 120 Z" />

            {/* Partition Glass Panel */}
            <path d="M250 80 L250 160" strokeWidth="2.5" />
            <path d="M170 120 L170 200" strokeWidth="2" />
            <path d="M330 120 L330 200" strokeWidth="2" />

            {/* Cubicle Desk Surface */}
            <path d="M210 200 L290 160 L320 175 L240 215 Z" fill="#0F172A" fillOpacity="0.04" />
            <path d="M240 215 L240 255" />
            <path d="M320 175 L320 215" />

            {/* Monitor on Desk */}
            <path d="M270 170 L285 162 L285 178 L270 186 Z" />
            <path d="M277 183 L277 190" />

            {/* Cubicle 2 (Right Pod) */}
            <path d="M330 200 L410 240 L410 330 L330 290 Z" />
            <path d="M330 200 L410 160 L330 120" />
            <path d="M410 160 L410 240" strokeWidth="2" />

            {/* Cubicle 3 (Left Pod) */}
            <path d="M170 200 L90 240 L90 330 L170 290 Z" />
            <path d="M170 200 L90 160 L170 120" />
            <path d="M90 160 L90 240" strokeWidth="2" />

            {/* Office Chair Geometry */}
            <ellipse cx="260" cy="275" rx="14" ry="8" />
            <path d="M260 275 L260 300" />
            <path d="M260 300 L248 310" />
            <path d="M260 300 L272 310" />
            <path d="M260 300 L260 312" />
            <path d="M248 260 C248 245, 272 245, 272 260 L272 272 C272 272, 248 272, 248 272 Z" />
          </svg>
        </div>

      </div>
    </section>
  );
}