"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero({ city }) {
  return (
    <section className="relative min-h-[520px] overflow-hidden bg-[#0d2461]">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/880805138/photo/public-toilet.jpg?s=612x612&w=0&k=20&c=QcIBgwcsBDnfJTRsggKHSlu2-H5G8c1s2RN8qLGujNE=')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#07183f]/75" />

      {/* Decorative Circles */}
      <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-white/10" />
      <div className="absolute -right-20 -top-20 h-[280px] w-[280px] rounded-full border border-white/10" />

      <div className="absolute bottom-0 left-0 h-[280px] w-[280px] rounded-full bg-[#f5bd24]/10 blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-[1536px] items-center justify-center px-5 py-20 text-center sm:px-8 lg:px-12 xl:px-16">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex max-w-5xl flex-col items-center"
        >

          {/* Label */}
          <div className="mb-5">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
              Premium Restroom Solutions
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl flex font-extrabold leading-[0.9] tracking-[-0.04em] text-white sm:text-6xl">
            Toilet Cubicle
            &nbsp;
            <span className="text-[#f5bd24]">
              in {city}
            </span>
          </h1>


          {/* Hero Stats */}
          <div className="mt-8 flex flex-wrap justify-center gap-8 border-t border-white/15 pt-5">

            {/* Experience */}
            <div className="min-w-[120px]">
              <div className="text-3xl font-extrabold text-white">
                25<span className="text-[#f5bd24]">+</span>
              </div>

              <div className="mt-1 text-xs uppercase tracking-wider text-white/50">
                Years Experience
              </div>
            </div>

            {/* Projects */}
            <div className="min-w-[120px]">
              <div className="text-3xl font-extrabold text-white">
                5,000<span className="text-[#f5bd24]">+</span>
              </div>

              <div className="mt-1 text-xs uppercase tracking-wider text-white/50">
                Projects
              </div>
            </div>

            {/* Coverage */}
            <div className="min-w-[120px]">
              <div className="text-3xl font-extrabold text-white">
                Pan<span className="text-[#f5bd24]"> India</span>
              </div>

              <div className="mt-1 text-xs uppercase tracking-wider text-white/50">
                Service Coverage
              </div>
            </div>

          </div>
        </motion.div>
      </div>

      {/* Bottom Shape */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-white [clip-path:polygon(0_100%,100%_100%,100%_0,70%_65%,35%_20%,0_70%)]" />

    </section>
  );
}