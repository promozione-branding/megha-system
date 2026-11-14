"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

const CERTIFICATES = [
  { id: 1, src: "/assets/certificates/1.png", alt: "Quality Certification 1" },
  { id: 2, src: "/assets/certificates/2.png", alt: "Quality Certification 2" },
  { id: 3, src: "/assets/certificates/3.png", alt: "Quality Certification 3" },
  { id: 4, src: "/assets/certificates/4.png", alt: "Quality Certification 4" },
  { id: 5, src: "/assets/certificates/5.png", alt: "Quality Certification 5" },
  { id: 6, src: "/assets/certificates/6.png", alt: "Quality Certification 6" },
  { id: 7, src: "/assets/certificates/7.png", alt: "Quality Certification 7" },
  { id: 8, src: "/assets/certificates/8.png", alt: "Quality Certification 8" },
  { id: 9, src: "/assets/certificates/9.png", alt: "Quality Certification 9" },
  { id: 10, src: "/assets/certificates/10.png", alt: "Quality Certification 10" },
  { id: 11, src: "/assets/certificates/11.png", alt: "Quality Certification 11" },
  { id: 12, src: "/assets/certificates/12.png", alt: "Quality Certification 12" },
  { id: 13, src: "/assets/certificates/13.png", alt: "Quality Certification 13" },
];

export default function CertificatesMarquee() {
  const trackRef = useRef(null);
  const x = useMotionValue(0);

  const [paused, setPaused] = useState(false);
  const [loopWidth, setLoopWidth] = useState(0);

  /*
   * We render 3 copies.
   * Only the width of ONE copy is needed for the loop.
   */
  const marqueeCertificates = [
    ...CERTIFICATES,
    ...CERTIFICATES,
    ...CERTIFICATES,
  ];

  // Calculate width of one certificate set
  useEffect(() => {
    const calculateWidth = () => {
      if (!trackRef.current) return;

      const totalWidth = trackRef.current.scrollWidth;

      setLoopWidth(totalWidth / 3);
    };

    calculateWidth();

    window.addEventListener("resize", calculateWidth);

    return () => {
      window.removeEventListener("resize", calculateWidth);
    };
  }, []);

  /*
   * TRUE INFINITE LOOP
   */
  useAnimationFrame((_, delta) => {
    if (paused || !loopWidth) return;

    const current = x.get();

    // Speed in pixels per second
    const speed = 45;

    let next = current - (speed * delta) / 1000;

    /*
     * Once one complete set has moved away,
     * jump back by exactly the same width.
     *
     * Because the next set is identical,
     * the user cannot see the reset.
     */
    if (Math.abs(next) >= loopWidth) {
      next += loopWidth;
    }

    x.set(next);
  });

  return (
    <section className="relative w-full overflow-hidden border-y border-gray-200/80 bg-[#f8f9fa] pt-12 pb-6 font-sans text-[#0d2461] sm:pt-16 sm:pb-8 lg:pt-20 lg:pb-10">

      <div className="mx-auto flex max-w-[1750px] flex-col-reverse items-center gap-12 px-6 lg:grid lg:grid-cols-12 lg:gap-8">

        {/* =========================================
            MARQUEE
        ========================================= */}
        <div
          className="relative flex w-full items-center overflow-hidden py-4 lg:col-span-7 xl:col-span-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >

          {/* LEFT FADE */}
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-16 bg-gradient-to-r from-[#f8f9fa] via-[#f8f9fa]/90 to-transparent sm:w-32" />

          {/* RIGHT FADE */}
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-16 bg-gradient-to-l from-[#f8f9fa] via-[#f8f9fa]/90 to-transparent sm:w-32" />

          {/* TRACK */}
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex w-max items-center gap-6 sm:gap-8"
          >
            {marqueeCertificates.map((cert, index) => (
              <motion.div
                key={`${cert.id}-${index}`}
                className="
                  group/card relative
                  flex h-40 w-32 shrink-0
                  cursor-pointer
                  items-center justify-center
                  rounded-2xl
                  border border-gray-200/70
                  bg-white
                  p-4
                  shadow-sm
                  sm:h-48 sm:w-40
                  lg:h-52 lg:w-44
                "
                whileHover={{
                  y: -8,
                  scale: 1.04,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 22,
                }}
              >
                <div className="relative flex h-full w-full items-center justify-center">

                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    fill
                    sizes="(max-width: 768px) 128px, 176px"
                    className="
                      object-contain
                      p-1
                      transition-transform
                      duration-300
                      group-hover/card:scale-105
                    "
                  />

                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* =========================================
            CONTENT
        ========================================= */}
        <div className="relative z-20 flex flex-col items-center text-center lg:col-span-5 lg:items-start lg:text-left xl:col-span-4">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0d2461]/10 bg-[#0d2461]/5 px-3.5 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-[#f5bd24] opacity-75" />
              <span className="relative h-2 w-2 rounded-full bg-[#f5bd24]" />
            </span>

            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#0d2461] sm:text-xs">
              Accreditations &amp; Standards
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="text-3xl font-extrabold leading-[1.15] tracking-tight text-[#0d2461] sm:text-4xl lg:text-[42px]"
          >
            Certified for Precision, Safety &amp; Durability
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="mt-4 max-w-lg text-sm leading-relaxed text-gray-600 sm:text-base"
          >
            Our restroom cubicles and wall paneling systems conform to
            rigorous international quality, fire-rating, and ISO standard
            compliance.
          </motion.p>
        </div>
      </div>
    </section>
  );
}