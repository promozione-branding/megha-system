"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  SlidersHorizontal,
  Wrench,
  Building2,
  ArrowUpRight,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Quality Material",
    text: "We use quality material and fittings that are suitable for regular usage.",
  },
  {
    icon: SlidersHorizontal,
    title: "Customization",
    text: "Sizes and configurations of the cubicles may be planned as per your requirement.",
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    text: "We make sure that fitting and alignment are done properly for a neatly fitted restroom.",
  },
  {
    icon: Building2,
    title: "Durable Solutions",
    text: "Our toilet cubicles are designed to handle regular use in offices, schools, hospitals, malls, hotels, and other busy spaces.",
  },
];

export default function WhyChooseToiletCubicles({ city }) {
  return (
    <section className="relative overflow-hidden bg-[#f4f6f8] py-6 md:py-13">

      {/* Decorative Shapes */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-[#0d2461]/5 blur-[100px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#f5bd24]/10 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-24 lg:self-start"
          >

            {/* Label */}
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#f5bd24]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0d2461]">
                Why Megha Systems
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-[#0d2461] sm:text-5xl lg:text-[58px]">
              Built around
              <br />
              <span className="text-[#f5bd24]">your project.</span>
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-md text-base leading-8 text-gray-600 sm:text-lg">
              At Megha Systems, we specialize in providing toilet cubicle
              solutions in {city} with a focus on quality, durability,
              functionality, and practical project requirements.
            </p>

            {/* Large Number */}
            <div className="mt-10 hidden md:block border-t border-[#0d2461]/10 pt-6">
              <span className="block text-6xl font-black tracking-[-0.05em] text-[#0d2461]/10 sm:text-7xl">
                04
              </span>

              <p className="mt-[-12px] text-sm font-semibold text-[#0d2461]">
                Reasons to choose our solutions
              </p>
            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <div className="relative">

            {/* Connecting Line */}
            <div className="absolute bottom-8 left-[31px] top-8 hidden w-px bg-[#0d2461]/10 sm:block" />

            <div className="space-y-5">

              {reasons.map((reason, index) => {
                const Icon = reason.icon;

                return (
                  <motion.div
                    key={reason.title}
                    initial={{
                      opacity: 0,
                      x: 35,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: "-60px",
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}
                    className="group relative"
                  >

                    {/* Timeline Dot */}
                    <div className="absolute left-[17px] top-8 z-10 hidden h-7 w-7 items-center justify-center rounded-full border-4 border-[#f4f6f8] bg-[#f5bd24] sm:flex" />

                    {/* Feature */}
                    <div className="relative ml-0 rounded-[28px] border border-[#0d2461]/10 bg-white p-4 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#0d2461]/20 hover:shadow-xl sm:ml-16 sm:p-7">

                      <div className="flex items-start gap-5">

                        {/* Icon */}
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0d2461]/5 text-[#0d2461] transition-all duration-500 group-hover:bg-[#0d2461] group-hover:text-white">
                          <Icon
                            className="h-6 w-6"
                            strokeWidth={1.7}
                          />
                        </div>

                        {/* Text */}
                        <div className="flex-1">

                          <div className="flex items-start justify-between gap-4">

                            <div>
                              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#f5bd24]">
                                0{index + 1}
                              </span>

                              <h3 className="mt-1 text-xl font-bold text-[#0d2461] sm:text-2xl">
                                {reason.title}
                              </h3>
                            </div>

                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#0d2461]/10 text-[#0d2461] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#0d2461] group-hover:text-white">
                              <ArrowUpRight className="h-4 w-4" />
                            </div>

                          </div>

                          <p className="mt-3 text-sm  text-gray-600 sm:text-base">
                            {reason.text}
                          </p>

                        </div>

                      </div>

                      {/* Bottom Hover Line */}
                      <div className="absolute bottom-0 left-8 h-[2px] w-0 bg-[#f5bd24] transition-all duration-500 group-hover:w-[calc(100%-64px)]" />

                    </div>

                  </motion.div>
                );
              })}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}