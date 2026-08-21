'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Building2 } from 'lucide-react';

export default function AboutUs() {
  return (
    <section className="relative w-full bg-white py-8 sm:py-12 lg:py-16 overflow-hidden font-sans text-[#0d2461]">
      
      {/* Background Decorative Ambient Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-[#0d2461]/5 to-transparent blur-[90px]" />
        <div className="absolute -bottom-[10%] -left-[5%] w-[40%] h-[40%] rounded-full bg-gradient-to-tr from-[#0d2461]/5 to-transparent blur-[90px]" />
      </div>

      <div className="relative z-10 max-w-[1750px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column (Heading) */}
          <motion.div 
            className="lg:col-span-5 space-y-4 sm:space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d2461]/5 border border-[#0d2461]/10"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5bd24] animate-pulse" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#0d2461] uppercase">
                A B O U T &nbsp; U S
              </span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-5xl lg:text-[62px] font-extrabold tracking-tight leading-[1.08]">
              <span className="text-[#0d2461]/40 font-medium">From</span> Vision <span className="text-[#0d2461]/40 font-medium">to</span> Space, <br className="hidden sm:block" />
              <span className="text-[#0d2461]/40 font-medium">Beautifully</span> Realized.
            </h2>
          </motion.div>

          {/* Right Column (Content & Stats) */}
          <motion.div 
            className="lg:col-span-7 lg:col-start-7 lg:pt-2 space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.1 }}
          >
            {/* Paragraphs */}
            <div className="space-y-4 text-[#0d2461]/80 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              <p>
                We blend architectural precision with unparalleled craftsmanship to deliver commercial restroom solutions that redefine hygiene and aesthetic standards. Since our inception, we have been committed to transforming functional spaces into design statements.
              </p>
              <p>
                Through innovative materials and rigorous engineering, we ensure that every cubicle, partition, and hardware fitting we provide stands the test of time, enduring high traffic without compromising on elegance.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#0d2461]/10">
              <motion.div 
                className="group p-5 rounded-2xl bg-[#0d2461]/[0.02] border border-[#0d2461]/5 transition-all duration-300 hover:bg-[#0d2461]/[0.05] hover:border-[#0d2461]/15 hover:shadow-lg space-y-2"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0d2461]">
                    19<span className="text-[#f5bd24] font-bold">+</span>
                  </h3>
                  <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#0d2461] shadow-sm border border-[#0d2461]/10 group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5 stroke-[1.5]" />
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-[#0d2461]/80 leading-snug">
                  Designing timeless interiors since 2006.
                </p>
              </motion.div>

              <motion.div 
                className="group p-5 rounded-2xl bg-[#0d2461]/[0.02] border border-[#0d2461]/5 transition-all duration-300 hover:bg-[#0d2461]/[0.05] hover:border-[#0d2461]/15 hover:shadow-lg space-y-2"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0d2461]">
                    880<span className="text-[#f5bd24] font-bold">+</span>
                  </h3>
                  <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#0d2461] shadow-sm border border-[#0d2461]/10 group-hover:scale-110 transition-transform">
                    <Building2 className="w-5 h-5 stroke-[1.5]" />
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-[#0d2461]/80 leading-snug">
                  Tailored solutions for every client.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
