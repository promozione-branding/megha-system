"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import PopupForm from "../PopupForm";

export default function DurableRestroomSolutions({ city }) {
            const [open, setOpen] = useState(false);
    
  return (
    <>
    <section className="relative w-full overflow-hidden bg-white py-6 md:py-13">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* LEFT — CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Label */}
            <span className="inline-flex items-center rounded-full border border-[#0d2461]/10 bg-[#0d2461]/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0d2461]">
              Restroom Solutions
            </span>

            {/* Heading */}
            <h2 className="mt-5 text-4xl  font-extrabold leading-[1.08] tracking-tight text-[#0d2461] sm:text-5xl lg:text-[52px]">
              Durable and Modern{" "}
              <span className="text-[#f5bd24]">
                Restroom Solutions
              </span>
            </h2>

            {/* Paragraph 1 */}
            <p className="mt-7 text-base  text-[#555] sm:text-lg">
              If you need a durable and good-looking{" "}
              <strong className="font-semibold text-[#222]">
                Toilet Cubicle in {city}
              </strong>{" "}
              for your office, school, hospital, hotel, shopping mall, or any
              other place of commercial activity, then Megha Systems is what
              you need. Our company designs and installs high-quality <a href="/" className="font-bold">toilet
              cubicles</a> and partitions offering great privacy, functionality,
              and neatness of appearance.
            </p>

            {/* Paragraph 2 */}
            <p className="mt-5 text-base text-[#555] sm:text-lg">
              Megha Systems&apos;{" "}
              <strong className="font-semibold text-[#222]">
                Toilet Cubicle Partition in {city}
              </strong>{" "}
              can be used in new buildings as well as in the renovation of
              existing restrooms. Our team knows that each restroom requires
              an individual approach, so we give a solution to practical
              toilet cubicle problems depending on the specifics of each
              project.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                "High Quality",
                "Custom Solutions",
                "Professional Installation",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-[#0d2461]/10 bg-[#f7f8fa] px-3 py-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0d2461] text-white">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>

                  <span className="text-xs font-semibold text-[#0d2461]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button onClick={() => setOpen(true)} className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#0d2461] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#07183f] hover:shadow-lg">
              Discuss Your Project
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </motion.div>

          {/* RIGHT — IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="relative"
          >
            {/* Decorative background */}
            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-[#f5bd24]/15 blur-3xl" />

            <div className="relative overflow-hidden rounded-[30px] border border-[#0d2461]/10 bg-[#f4f5f7] shadow-xl">

              <Image
                src="/newm2.webp"
                alt={`Durable Restroom Solutions in ${city}`}
                width={900}
                height={700}
                unoptimized
                className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[500px] lg:h-[560px]"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07183f]/60 via-transparent to-transparent" />

              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/95 p-5 shadow-xl backdrop-blur-md">

                <div className="flex items-center justify-between gap-4">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#0d2461]/60">
                      Serving {city}
                    </p>

                    <h3 className="mt-1 text-lg font-bold text-[#0d2461]">
                      Toilet Cubicle & Partition Solutions
                    </h3>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0d2461] text-white">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>

                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>

             <PopupForm
                          isOpen={open}
                          onClose={() => setOpen(false)}
                        />
    </>
  );
}