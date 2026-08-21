'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BuyNowBannerProps {
  heading?: string;
  subheading?: string;
  description?: string;
  buttonText?: string;
  discountBadge?: string;
}

export default function BuyNowBanner({
  heading = "Transform your commercial space now!",
  subheading = "Architectural perfection in every space",
  description = "Discover our premium compact laminate cubicle systems and wall paneling, engineered for 100% moisture resistance, unmatched durability, and sleek modern design.",
  buttonText = "Get a Quote - Direct Pricing",
}: BuyNowBannerProps) {
  return (
    <section className="relative w-full bg-white py-7 sm:py-9 border-y border-gray-100 overflow-hidden font-sans shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-100 rounded-full blur-[80px] opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-indigo-50 rounded-full blur-[100px] opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: Big Bold Title & Pill CTA Button */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-4 sm:space-y-5">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#0d2461] to-[#1e4a9e] leading-[1.12] max-w-2xl drop-shadow-sm">
              {heading}
            </h2>

            {/* Pill CTA Button matching the design in screenshot */}
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3.5 bg-gradient-to-r from-[#0d2461] to-[#1a3875] hover:from-[#091842] hover:to-[#0d2461] text-white pl-6 pr-2 py-2 sm:py-2 rounded-full transition-all duration-500 shadow-md hover:shadow-xl cursor-pointer hover:-translate-y-0.5"
            >
              <span className="text-sm sm:text-base font-semibold tracking-wide">
                {buttonText}
              </span>
              
              {/* White Circular Arrow Icon Button */}
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-[#0d2461] flex items-center justify-center transition-transform duration-500 group-hover:translate-x-1 group-hover:rotate-12 shadow-sm">
                <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.5]" />
              </div>
            </a>
          </div>

          {/* Right Side: Sub-headline & Detailed Description */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-2.5 lg:pl-6 border-l border-transparent lg:border-gray-200/60 lg:py-2">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#0d2461]">
              {subheading}
            </h3>

            <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-medium max-w-lg">
              {description}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
