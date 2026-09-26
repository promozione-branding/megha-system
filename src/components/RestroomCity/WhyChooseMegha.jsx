"use client";

import React, { useState } from "react";
import { Check, ArrowUpRight } from "lucide-react";
import PopupForm from "../PopupForm";

const reasons = [
  {
    number: "01",
    title: "Quality Materials",
    description:
      "We employ quality materials and fittings that are suitable for everyday use in restrooms.",
  },
  {
    number: "02",
    title: "Customization",
    description:
      "Sizes, design, fittings, and configuration of the cubicles can be tailored to suit your needs.",
  },
  {
    number: "03",
    title: "Professional Installation",
    description:
      "Good installation results in efficient performance.",
  },
  {
    number: "04",
    title: "Project Assistance",
    description:
      "We will offer help in planning, selecting material, and installing the cubicles for the project.",
  },
  {
    number: "05",
    title: "Durable Cubicles",
    description:
      "Our cubicles for restrooms are made in such a way that they can withstand regular use.",
  },
];

export default function WhyChooseMegha({ city }) {
      const [open, setOpen] = useState(false);
    
  return (
    <section className="w-full bg-white py-6 md:py-13">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADER */}
        <div className="max-w-4xl">
          <span className="inline-block rounded-full bg-[#1E3A8A] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-4xl font-sans font-bold leading-[1.1] tracking-tight text-[#171717] sm:text-5xl lg:text-6xl">
            Why Choose Megha Systems for Restroom Cubicles in{" "}
            <span className="text-[#1E3A8A]">{city}</span>
          </h2>

          {/* <p className="mt-6 max-w-3xl text-base leading-8 text-[#555] sm:text-lg">
            At Megha Systems, our efforts are directed at supplying cubicles
            for restrooms in {city}, using good quality material, practical
            designs, and effective installation.
          </p> */}
        </div>

        {/* REASONS */}
        <div className="mt-12 grid grid-cols-1 gap-4  md:grid-cols-5">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="group relative flex flex-col  overflow-hidden rounded-[24px] border border-neutral-200 bg-[#f7f8fa] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#1E3A8A]/20 hover:bg-[#1E3A8A]"
            >
              {/* NUMBER */}
              <div className="flex items-start justify-between">
                <span className="text-sm font-bold tracking-wider text-[#1E3A8A] transition-colors duration-300 group-hover:text-white">
                  {reason.number}
                </span>

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#1E3A8A] shadow-sm transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              {/* CONTENT */}
              <div>
                <h3 className="text-xl font-bold leading-tight text-[#171717] transition-colors duration-300 group-hover:text-white">
                  {reason.title}
                </h3>

                <p className="mt-2 text-sm md:leading-6 text-[#666] transition-colors duration-300 group-hover:text-blue-50">
                  {reason.description}
                </p>
              </div>

              {/* BOTTOM LINE */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-white transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* BOTTOM CONTENT */}
        <div className="mt-10 flex flex-col gap-5 rounded-[24px] bg-[#1E3A8A] p-7 text-white sm:p-9 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#1E3A8A]">
              <Check className="h-5 w-5" strokeWidth={3} />
            </div>

            <div>
              <h3 className="text-xl font-bold">
                Practical Restroom Solutions
              </h3>

              <p className="mt-1 max-w-2xl text-sm leading-6 text-blue-100">
                From material selection to installation, Megha Systems
                supports your restroom cubicle project in {city}.
              </p>
            </div>
          </div>

          <button onClick={() => setOpen(true)}  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1E3A8A] transition-all duration-300 hover:bg-blue-50">
            Discuss Your Project
            <ArrowUpRight className="h-4 w-4" />
          </button>

        </div>

      </div>

      <PopupForm
              isOpen={open}
              onClose={() => setOpen(false)}
            />
    </section>
  );
}