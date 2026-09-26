"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Check, Droplets, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const advantages = [
  "Water-resistant",
  "Stain-resistant",
  "Strong and durable",
  "Easily cleanable and maintainable",
  "Ideal for washrooms used frequently",
  "Modern and clean look",
];

export default function HPLToiletCubicles({ city }) {
  return (
    <section className="relative overflow-hidden bg-[#f5f7f9] py-6 md:py-13">

      {/* Background Details */}
      <div className="pointer-events-none absolute -left-32 top-20 h-[350px] w-[350px] rounded-full bg-[#0d2461]/5 blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-[#f5bd24]/10 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* LEFT — HPL VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >

            {/* Main Image */}
            <div className="relative h-[430px] overflow-hidden rounded-[32px] bg-[#0d2461] sm:h-[520px]">

              <Image
                src="/pd doors images.jpg"
                alt={`HPL Toilet Cubicles in ${city}`}
                fill
                unoptimized
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07183f]/80 via-[#07183f]/10 to-transparent" />

              {/* HPL Badge */}
              <div className="absolute left-6 top-6 rounded-2xl border border-white/20 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-md">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0d2461]/60">
                  Material
                </p>

                <p className="mt-1 text-2xl font-black text-[#0d2461]">
                  HPL
                </p>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-6 left-6 right-6">

                <div className="flex items-end justify-between gap-4">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#f5bd24]">
                      Built for everyday use
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                      Durable. Clean. Practical.
                    </h3>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f5bd24] text-[#0d2461]">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>

                </div>

              </div>
            </div>

            {/* Floating Feature */}
            {/* <div className="absolute -bottom-5 right-5 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl sm:-right-5">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0d2461]/5 text-[#0d2461]">
                <Droplets className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-bold text-[#0d2461]">
                  Moisture Resistant
                </p>

                <p className="text-[11px] text-gray-500">
                  Suitable for wet environments
                </p>
              </div>

            </div> */}

          </motion.div>

          {/* RIGHT — CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >

            {/* Label */}
            <span className="inline-flex rounded-full border border-[#0d2461]/10 bg-[#0d2461]/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0d2461]">
              HPL Solutions
            </span>

            {/* Heading */}
            <h2 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0d2461] sm:text-5xl]">
              HPL Toilet Cubicles in{" "}
              <span className="text-[#f5bd24]">{city}</span>
            </h2>

            {/* Intro */}
            <p className="mt-6 text-base  text-gray-600 sm:text-lg">
              {city}{" "}
              <strong className="font-semibold text-[#222]">
                HPL Toilet Cubicles
              </strong>{" "}
              are ideal options for use in modern washrooms in commercial and
              institutional spaces. The material used in making the cubicles
              has properties of being durable and easy to maintain on a
              day-to-day basis.
            </p>

            {/* Advantages */}
            <div className="mt-8">

              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-[#0d2461]" />

                <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[#0d2461]">
                  Key Advantages
                </h3>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">

                {advantages.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                    }}
                    className="flex items-start gap-3 border-b border-[#0d2461]/10 pb-3"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0d2461] text-white">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>

                    <span className="text-sm leading-6 text-gray-600">
                      {item}
                    </span>
                  </motion.div>
                ))}

              </div>
            </div>

            {/* Applications */}
            <div className="mt-8 rounded-2xl bg-[#0d2461] p-3 sm:p-4">

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5bd24]">
                Ideal Applications
              </p>

              <p className="mt-3 text-sm  text-white/75 sm:text-base">
                The{" "}
                <strong className="text-white">
                  HPL toilet cubicles
                </strong>{" "}
                are ideal{" "}
                <strong className="text-white">
                  for offices, schools, hospitals, hotels, shopping complexes,
                  and other commercial buildings
                </strong>
                .
              </p>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}