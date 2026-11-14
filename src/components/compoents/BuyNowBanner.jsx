"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import PopupForm from "./PopupForm";

export default function BuyNowBanner({
  heading = "Transform your commercial space now!",
  subheading = "Architectural perfection in every space",
  description = "Discover our premium compact laminate cubicle systems and wall paneling, engineered for 100% moisture resistance, unmatched durability, and sleek modern design.",
  buttonText = "Get a Quote - Direct Pricing",
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative w-full overflow-hidden border-y border-gray-100 bg-white py-7 font-sans shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] sm:py-9">
        {/* Background Glows */}
        <div className="pointer-events-none absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-blue-100 opacity-50 blur-[80px]" />

        <div className="pointer-events-none absolute right-1/4 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-indigo-50 opacity-60 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            
            {/* Left Side */}
            <div className="flex flex-col items-start space-y-4 sm:space-y-5 lg:col-span-7">
              <h2 className="max-w-2xl bg-gradient-to-r from-[#0d2461] to-[#1e4a9e] bg-clip-text text-3xl font-extrabold leading-[1.12] tracking-tight text-transparent drop-shadow-sm sm:text-4xl lg:text-[46px]">
                {heading}
              </h2>

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="group relative inline-flex cursor-pointer items-center gap-3.5 rounded-full bg-gradient-to-r from-[#0d2461] to-[#1a3875] py-2 pl-6 pr-2 text-white shadow-md transition-all duration-500 hover:-translate-y-0.5 hover:from-[#091842] hover:to-[#0d2461] hover:shadow-xl sm:py-2"
              >
                <span className="text-sm font-semibold tracking-wide sm:text-base">
                  {buttonText}
                </span>

                {/* Arrow */}
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0d2461] shadow-sm transition-transform duration-500 group-hover:translate-x-1 group-hover:rotate-12 sm:h-9 sm:w-9">
                  <ArrowRight className="h-4 w-4 stroke-[2.5] sm:h-[18px] sm:w-[18px]" />
                </div>
              </button>
            </div>

            {/* Right Side */}
            <div className="flex flex-col justify-center space-y-2.5 border-l border-transparent lg:col-span-5 lg:py-2 lg:pl-6 lg:border-gray-200/60">
              <h3 className="text-lg font-bold tracking-tight text-[#0d2461] sm:text-xl">
                {subheading}
              </h3>

              <p className="max-w-lg text-sm font-medium leading-relaxed text-gray-600 sm:text-base">
                {description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popup */}
      <PopupForm
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}