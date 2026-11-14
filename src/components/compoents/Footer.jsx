"use client";

import React, { useState } from "react";
import { handleCallClick } from "@/lib/track";
import { ChevronRight, Share2, Globe, Camera, Send, Building2, } from "lucide-react";

export default function FooterSection() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    console.log("Subscribed with:", email);
    setEmail("");
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#1a2942] via-[#0e172e] to-[#040812] pt-10 font-sans text-white antialiased sm:pt-14 sm:pb-16">
      {/* =====================================================
          GIANT BACKGROUND WATERMARK
      ===================================================== */}
      <div className="pointer-events-none absolute bottom-2 left-0 right-0 z-0 flex w-full justify-center overflow-hidden px-2 leading-none">
        <span className="block max-w-full whitespace-nowrap text-center font-serif text-[12.5vw] font-bold tracking-tighter text-white/[0.14]">
          Megha Systems
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        {/* =====================================================
            TOP GRID
        ===================================================== */}
        <div className="grid grid-cols-1 gap-12 pb-10 md:grid-cols-12 lg:gap-16 sm:pb-12">
          {/* =================================================
              LEFT COLUMN
          ================================================= */}
          <div className="space-y-8 md:col-span-6 lg:col-span-7">
            {/* Logo */}
            <div className="flex items-center gap-3.5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white shadow-lg shadow-black/20">
                <Building2 className="h-6 w-6 stroke-[1.8]" />
              </div>

              <span className="font-serif text-3xl font-bold tracking-tight text-white">
                Megha Systems
              </span>
            </div>

            {/* Tagline & Address */}
            <div className="max-w-lg space-y-3.5">
              <h3 className="font-serif text-3xl font-medium leading-tight text-white sm:text-4xl">
                Luxury Systems for iconic spaces.
              </h3>
            </div>

            {/* Newsletter */}
            <div className="space-y-4 pt-3">
              <h4 className="font-serif text-xl font-semibold text-white">
                Newsletter
              </h4>

              <form onSubmit={handleSubscribe} className="relative max-w-md">
                <div className="flex items-center rounded-full border border-white/25 bg-white/10 p-2 shadow-inner transition-all focus-within:border-white/60 focus-within:ring-2 focus-within:ring-white/20">
                  <input
                    type="email"
                    required
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent px-4 py-2.5 text-base text-white outline-none placeholder:text-white/60"
                  />

                  <button
                    type="submit"
                    className="inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b1329] shadow-md transition-all hover:bg-neutral-100 hover:shadow-lg active:scale-95"
                  >
                    <span>Subscribe</span>

                    <ChevronRight className="h-4 w-4 stroke-[2.5]" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* =================================================
              RIGHT COLUMNS
          ================================================= */}
          <div className="grid grid-cols-2 gap-8 pt-2 sm:gap-12 md:col-span-6 lg:col-span-5">
            {/* Navigation */}
            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-white/90">
                Navigation
              </h4>

              <ul className="space-y-3.5 text-base font-normal text-white/80">
                <li>
                  <a href="/" className="transition-colors hover:text-white">
                    Home
                  </a>
                </li>

                <li>
                  <a href="/" className="transition-colors hover:text-white">
                    About
                  </a>
                </li>

                <li>
                  <a href="/" className="transition-colors hover:text-white">
                    Cubicle Systems
                  </a>
                </li>

                <li>
                  <a href="/" className="transition-colors hover:text-white">
                    Marble Finishes
                  </a>
                </li>

                <li>
                  <a href="/" className="transition-colors hover:text-white">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-white/90">
                Contact
              </h4>

              <div className="space-y-3.5 text-base font-normal text-white/80">
                {/* Email */}
                <p>
                  <a
                    href="mailto:contact@meghasystems.com"
                    className="hover:text-white transition-colors font-medium text-white"
                  >
                    contact@meghasystems.com
                  </a>
                </p>

                {/* Phone */}
                <p>
                  <a
                    href="tel:+919873735716"
                    onClick={() => handleCallClick({ source: "Landing page", obj: "N/A" })}
                    className="hover:text-white transition-colors font-medium text-white"
                  >
                    +91 9873735716
                  </a>
                </p>

                <p>
                  <a
                    href="tel:+919873735713"
                    onClick={() => handleCallClick({ source: "Landing page", obj: "N/A" })}
                    className="hover:text-white transition-colors font-medium text-white"
                  >
                    +91 9873735713
                  </a>
                </p>

                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-white mb-1.5">
                    Head Office
                  </p>
                  <p className="leading-relaxed">
                    Plot Number-P10/J-3, Adore Business City, Sector 72-73,
                    Faridabad, Haryana, 121004
                  </p>
                </div>

                {/* Branch Office */}
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-white mb-1.5">
                    Branch Office
                  </p>
                  <p className="leading-relaxed">
                    Plot No.341/1,2,3 & 4, Safdar Nagar, Borabanda,
                    Hyderabad-500018
                  </p>
                </div>
              </div>

              {/* Social Icons */}
              {/* <div className="flex items-center gap-3 pt-2">

                <a
                  href="#facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-sm transition-all hover:bg-white hover:text-[#0b1329]"
                  aria-label="Facebook"
                >
                  <Share2 className="h-4 w-4" />
                </a>

                <a
                  href="#linkedin"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-sm transition-all hover:bg-white hover:text-[#0b1329]"
                  aria-label="LinkedIn"
                >
                  <Globe className="h-4 w-4" />
                </a>

                <a
                  href="#instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-sm transition-all hover:bg-white hover:text-[#0b1329]"
                  aria-label="Instagram"
                >
                  <Camera className="h-4 w-4" />
                </a>

                <a
                  href="#telegram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-sm transition-all hover:bg-white hover:text-[#0b1329]"
                  aria-label="Telegram"
                >
                  <Send className="h-4 w-4" />
                </a>

              </div> */}
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ===================================================== */}
        <div className="relative z-20 flex flex-col items-center justify-between gap-4 border-t border-white/15 pb-10 pt-8 text-sm text-white/70 sm:flex-row">
          <p>© 2026 Megha Systems. All rights reserved.</p>

          <div className="flex items-center gap-8">
            <a href="#terms" className="transition-colors hover:text-white">
              Terms & Conditions
            </a>

            <a href="#privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
