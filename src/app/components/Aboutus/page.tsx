'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Building2 } from 'lucide-react';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <section className="relative w-full border border-gray-200 overflow-hidden bg-white py-8 font-sans text-[#0d2461] md:py-12">
      {/* Background Decorative Ambient Blobs */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -right-[5%] -top-[10%] h-[40%] w-[40%] rounded-full bg-gradient-to-br from-[#0d2461]/5 to-transparent blur-[90px]" />
        <div className="absolute -bottom-[10%] -left-[5%] h-[40%] w-[40%] rounded-full bg-gradient-to-tr from-[#0d2461]/5 to-transparent blur-[90px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1750px] px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-1">

          {/* Left Column */}
          <motion.div
            className="space-y-4 lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              duration: 0.7,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            {/* Label */}
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-[#0d2461]/10 bg-[#0d2461]/5 px-3 py-1"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#f5bd24]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#0d2461]">
                ABOUT US
              </span>
            </motion.div>

            {/* Heading */}
            <h2 className="text-3xl font-extrabold leading-[1.04] tracking-tight sm:text-5xl lg:text-[55px]">
              <span className="font-medium text-[#0d2461]/40">From</span>{' '}
              Expertise{' '}
              <span className="font-medium text-[#0d2461]/40">to</span>{' '}
              Excellence,
              <br className="hidden sm:block" />
              <span className="block font-medium text-[#0d2461]/40">
                Built around precision.
              </span>
              <span className="block text-[#0d2461]">
                Designed for performance.
              </span>
            </h2>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="space-y-6 lg:col-span-7 lg:pt-2 sm:space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              duration: 0.7,
              ease: [0.21, 0.47, 0.32, 0.98],
              delay: 0.1,
            }}
          >
            {/* Content */}
            <div className="max-w-2xl space-y-4 text-sm font-normal leading-relaxed text-[#0d2461]/80 sm:text-base">
              <p>
                Established in 2012, Megha Systems has grown into a trusted name in toilet cubicle and restroom partition solutions. With expertise spanning design, manufacturing, and installation, we deliver complete washroom solutions built for modern commercial and institutional spaces.
              </p>

              <p>
                Led by Mr. Rakesh Talwar, with over 25 years of industry experience, our approach combines technical expertise, premium materials, innovative design, and meticulous execution. From the first concept to final installation, every project is delivered with a focus on quality, precision, and lasting performance.
                Learn more <Link href="/about" className="font-medium text-[#0d2461] hover:text-[#f5bd24]">about our journey</Link>, or <Link href="/contact" className="font-medium text-[#0d2461] hover:text-[#f5bd24] ">Contact Us</Link> to discuss your restroom partition requirements.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-1 border-t border-[#0d2461]/10 pt-4 sm:grid-cols-3">

              {/* Years */}
              <motion.div
                className="group rounded-2xl border border-[#0d2461]/5 bg-[#0d2461]/[0.02] p-5 transition-all duration-300 hover:border-[#0d2461]/15 hover:bg-[#0d2461]/[0.05] hover:shadow-lg"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-3xl font-extrabold tracking-tight text-[#0d2461] sm:text-4xl">
                      25<span className="text-[#f5bd24]">+</span>
                    </h3>

                    <p className="mt-1 text-sm font-medium text-[#0d2461]/70">
                      Years of Excellence
                    </p>
                  </div>

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#0d2461]/10 bg-white text-[#0d2461] shadow-sm transition-transform group-hover:scale-110">
                    <Award className="h-5 w-5 stroke-[1.5]" />
                  </div>
                </div>
              </motion.div>

              {/* Projects */}
              <motion.div
                className="group rounded-2xl border border-[#0d2461]/5 bg-[#0d2461]/[0.02] p-5 transition-all duration-300 hover:border-[#0d2461]/15 hover:bg-[#0d2461]/[0.05] hover:shadow-lg"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-3xl font-extrabold tracking-tight text-[#0d2461] sm:text-4xl">
                      5,000<span className="text-[#f5bd24]">+</span>
                    </h3>

                    <p className="mt-1 text-sm font-medium text-[#0d2461]/70">
                      Projects Completed
                    </p>
                  </div>

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#0d2461]/10 bg-white text-[#0d2461] shadow-sm transition-transform group-hover:scale-110">
                    <Building2 className="h-5 w-5 stroke-[1.5]" />
                  </div>
                </div>
              </motion.div>

              {/* Cubicles */}
              <motion.div
                className="group rounded-2xl border border-[#0d2461]/5 bg-[#0d2461]/[0.02] p-5 transition-all duration-300 hover:border-[#0d2461]/15 hover:bg-[#0d2461]/[0.05] hover:shadow-lg"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-3xl font-extrabold tracking-tight text-[#0d2461] sm:text-[31px]">
                      1 Lakh<span className="text-[#f5bd24]">+</span>
                    </h3>

                    <p className="mt-1 text-sm font-medium text-[#0d2461]/70">
                      Cubicles Installed
                    </p>
                  </div>

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#0d2461]/10 bg-white text-[#0d2461] shadow-sm transition-transform group-hover:scale-110">
                    <Building2 className="h-5 w-5 stroke-[1.5]" />
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}