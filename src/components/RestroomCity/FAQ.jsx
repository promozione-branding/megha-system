"use client";

import React, { useState } from "react";
import { Plus, X, ChevronRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";



export default function FAQ({ city }) {

  const faqs = [
  {
    id: 1,
    question: "What is the price of a restroom cubicle in {city}?",
    answer:
      `The restroom cubicle price in ${city} depends on factors such as material, panel thickness, cubicle size, number of compartments, hardware, finish, and installation requirements. A project-specific quotation can provide more accurate pricing.`,
  },
  {
    id: 2,
    question: `What factors affect restroom cubicle price in ${city}?`,
    answer:
      "The main factors include the type of material, panel dimensions, thickness, number of cubicles, hardware and fittings, design, finish, site conditions, and installation requirements.",
  },
  {
    id: 3,
    question: `How much does a restroom cubicle partition cost in ${city}?`,
    answer:
      "The cost of a restroom cubicle partition in {city} varies according to the material, size, thickness, layout, quantity, fittings, and project specifications. Pricing is generally calculated based on the requirements of the complete restroom.",
  },
  {
    id: 4,
    question: `Which material is suitable for restroom cubicles in ${city}?`,
    answer:
      "HPL is a commonly used option for commercial and institutional restroom cubicles because of its durability, moisture resistance, easy maintenance, and suitability for regular use.",
  },
];
  const [openId, setOpenId] = useState(1);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  // Replace {city} dynamically inside questions and answers
  const dynamicFaqs = faqs.map((faq) => ({
    ...faq,
    question: faq.question.replaceAll("{city}", city),
    answer: faq.answer.replaceAll("{city}", city),
  }));

  return (
  <section className="bg-white px-4 py-6 font-sans text-slate-900 antialiased sm:px-8 md:py-13">
  <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-14">

    {/* LEFT COLUMN - STICKY */}
    <div className="lg:col-span-5">
      <div className="flex flex-col space-y-8 lg:sticky lg:top-24">

        {/* Heading */}
        <div className="space-y-5">
          <span className="inline-block rounded-full bg-[#1E3A8A] px-4 py-1.5 text-[12px] font-bold uppercase tracking-wider text-white shadow-sm">
            FAQ
          </span>

          <h2 className=" text-4xl leading-[1.12] tracking-tight text-[#1e1e24] sm:text-4xl">
            Frequently Asked Questions About Restroom Cubicles in {city}
          </h2>
        </div>

        {/* Image Card */}
        <div className="relative overflow-hidden rounded-[28px] border border-neutral-200/80 bg-white shadow-md">

          <Image
            src="/assets/faq.webp"
            alt={`Restroom Cubicles in ${city}`}
            width={800}
            height={600}
            unoptimized
            className="h-[270px] w-full object-cover sm:h-[340px]"
          />

          {/* Arrow */}
          <button
            type="button"
            className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#1E3A8A] text-white shadow-lg transition-all hover:scale-105 hover:bg-[#172554]"
            aria-label="View restroom cubicle showcase"
          >
            <ChevronRight className="h-5 w-5 stroke-[2.5]" />
          </button>

          {/* Bottom Badge */}
          <div className="absolute bottom-4 left-4 flex max-w-[85%] items-center gap-3.5 rounded-2xl bg-[#1E3A8A] p-3 pr-5 text-white shadow-xl">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#1E3A8A] shadow-sm">
              <Sparkles className="h-5 w-5 stroke-[2]" />
            </div>

            <div className="leading-tight">
              <p className=" text-sm font-bold tracking-wide">
                Quality Restroom Solutions
              </p>

              <p className="text-[11px] font-normal text-blue-100/80">
                Durable Cubicle Partitions
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>

    {/* RIGHT COLUMN - SCROLLS WITH PAGE */}
    <div className="flex flex-col space-y-4 pt-1 lg:col-span-7">

      {dynamicFaqs.map((faq) => {
        const isOpen = openId === faq.id;

        return (
          <motion.div
            key={faq.id}
            layout
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 30,
            }}
          >
            {isOpen ? (

              /* OPEN FAQ */
              <motion.div
                layout
                initial={{
                  opacity: 0.8,
                  scale: 0.98,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
                className="overflow-hidden rounded-[24px] border border-neutral-200/80 bg-white shadow-lg"
              >

                <div className="p-2 pb-0">

                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-[18px] bg-[#1E3A8A] px-6 py-5 text-left text-white shadow-md shadow-blue-950/20"
                  >
                    <span className="text-base font-medium tracking-tight sm:text-lg">
                      {faq.question}
                    </span>

                    <motion.div
                      initial={{ rotate: -90 }}
                      animate={{ rotate: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#1E3A8A] shadow-sm"
                    >
                      <X className="h-4 w-4 stroke-[2.5]" />
                    </motion.div>
                  </button>

                </div>

                <AnimatePresence initial={false}>
                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-5 text-sm font-normal leading-relaxed text-neutral-600 sm:text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                </AnimatePresence>

              </motion.div>

            ) : (

              /* CLOSED FAQ */
              <motion.button
                layout
                onClick={() => toggleFAQ(faq.id)}
                className="group flex w-full cursor-pointer items-center justify-between gap-4 rounded-2xl border border-neutral-200/70 bg-white px-6 py-5 text-left text-neutral-800 shadow-xs transition-all hover:bg-neutral-50/80 hover:shadow-md sm:rounded-3xl"
              >

                <span className="text-base font-semibold tracking-tight transition-colors group-hover:text-[#1E3A8A] sm:text-lg">
                  {faq.question}
                </span>

                <motion.div
                  initial={{ rotate: 90 }}
                  animate={{ rotate: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-100/80 text-neutral-400 transition-colors group-hover:bg-[#1E3A8A]/10 group-hover:text-[#1E3A8A]"
                >
                  <Plus className="h-4 w-4 stroke-[2]" />
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