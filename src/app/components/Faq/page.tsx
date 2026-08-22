'use client';

import React, { useState } from 'react';
import { Plus, X, ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "1. What materials are best suited for high-moisture washrooms?",
    answer: "Our solid compact laminate (HPL) and engineered stone panels provide 100% water and humidity resistance, antibacterial protection, and superior impact strength for high-traffic commercial use."
  },
  {
    id: 2,
    question: "2. Can partition dimensions and hardware finishes be customized?",
    answer: "Yes. We offer ceiling-hung, floor-anchored, and overhead-braced systems with customizable heights, panel widths, and hardware finishes including Matte Black, Brushed Brass, and SS 316."
  },
  {
    id: 3,
    question: "3. Are your cubicle panels fire-rated and vandal-resistant?",
    answer: "All panels comply with Class A fire safety ratings and feature graffiti-resistant, scratch-proof surfaces engineered specifically for public and commercial washrooms."
  },
  {
    id: 4,
    question: "4. Do you provide on-site measurements and CAD shop drawings?",
    answer: "Yes, our technical team provides complimentary on-site structural assessments, precise laser measurements, and full 2D/3D shop drawings before manufacturing begins."
  },
  {
    id: 5,
    question: "5. What warranty coverage applies to cubicle systems and fittings?",
    answer: "We provide a 10-year anti-delamination warranty on compact laminate panels and a 5-year replacement warranty on all stainless-steel hinges, indicator locks, and support legs."
  }
];

export default function WashroomCubiclesFAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="pt-2 sm:pt-4 lg:pt-6 pb-16 md:pb-20 lg:pb-24 bg-white flex items-center justify-center px-4 sm:px-8 lg:px-16 font-sans text-slate-900 antialiased">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
        
        {/* Left Column: Heading & Showcase Card */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          <div className="space-y-5">
            {/* Tag Badge */}
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#1E3A8A] text-white text-[12px] font-bold tracking-wider uppercase shadow-sm">
              FAQ
            </span>

            {/* Serif Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1e1e24] leading-[1.12] tracking-tight">
              Answers that bring clarity.
            </h2>
          </div>

          {/* Media Card */}
          <div className="relative rounded-[28px] overflow-hidden shadow-md border border-neutral-200/80 bg-white">
            <img
              src="/assets/faq.webp"
              alt="Premium Washroom Cubicle Partitions"
              className="w-full h-[270px] sm:h-[340px] object-cover"
            />

            {/* Right-Edge Floating Arrow Button */}
            <button 
              type="button"
              className="absolute top-1/2 right-4 -translate-y-1/2 w-11 h-11 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center shadow-lg hover:bg-[#172554] hover:scale-105 transition-all cursor-pointer"
              aria-label="View cubicle showcase"
            >
              <ChevronRight className="w-5.5 h-5.5 stroke-[2.5]" />
            </button>

            {/* Bottom-Left Floating Pill Badge */}
            <div className="absolute bottom-4 left-4 bg-[#1E3A8A] text-white rounded-2xl p-3 pr-5 flex items-center gap-3.5 shadow-xl max-w-[85%]">
              <div className="w-10 h-10 rounded-full bg-white text-[#1E3A8A] flex items-center justify-center shrink-0 shadow-sm">
                <Sparkles className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="leading-tight">
                <p className="text-sm font-serif font-bold tracking-wide">Grade A Certified</p>
                <p className="text-[11px] text-blue-100/80 font-normal">Compact Laminate Cubicles</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Accordion */}
        <div className="lg:col-span-7 flex flex-col space-y-4 pt-1">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div 
                key={faq.id} 
                layout 
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              >
                {isOpen ? (
                  /* Active Accordion Card */
                  <motion.div 
                    layout
                    initial={{ opacity: 0.8, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0.8, scale: 0.98 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="bg-white rounded-[24px] shadow-lg border border-neutral-200/80 overflow-hidden"
                  >
                    <div className="p-2 pb-0">
                      <button
                        onClick={() => toggleFAQ(faq.id)}
                        className="w-full bg-[#1E3A8A] text-white rounded-[18px] px-6 py-5 flex items-center justify-between gap-4 text-left shadow-md shadow-blue-950/20 cursor-pointer"
                      >
                        <span className="text-base sm:text-lg font-medium tracking-tight">
                          {faq.question}
                        </span>
                        <motion.div 
                          initial={{ rotate: -90 }}
                          animate={{ rotate: 0 }}
                          transition={{ duration: 0.2 }}
                          className="w-8 h-8 rounded-full bg-white text-[#1E3A8A] flex items-center justify-center shrink-0 shadow-sm"
                        >
                          <X className="w-4 h-4 stroke-[2.5]" />
                        </motion.div>
                      </button>
                    </div>

                    <AnimatePresence initial={false}>
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 py-5 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                          {faq.answer}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  /* Closed Accordion Item */
                  <motion.button
                    layout
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full bg-white hover:bg-neutral-50/80 text-neutral-800 rounded-2xl sm:rounded-3xl px-6 py-5 flex items-center justify-between gap-4 text-left border border-neutral-200/70 shadow-xs hover:shadow-md transition-all cursor-pointer group"
                  >
                    <span className="text-base sm:text-lg font-semibold tracking-tight group-hover:text-[#1E3A8A] transition-colors">
                      {faq.question}
                    </span>
                    <motion.div 
                      initial={{ rotate: 90 }}
                      animate={{ rotate: 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-8 h-8 rounded-full bg-neutral-100/80 text-neutral-400 group-hover:bg-[#1E3A8A]/10 group-hover:text-[#1E3A8A] flex items-center justify-center shrink-0 transition-colors"
                    >
                      <Plus className="w-4 h-4 stroke-[2]" />
                    </motion.div>
                  </motion.button>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}