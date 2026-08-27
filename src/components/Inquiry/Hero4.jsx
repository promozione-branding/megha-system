"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PopupForm from "@/components/PopupForm";

const projects = [
  {
    id: 1,
    title: "Kora",
    category: "Consulting Site",
    image:
      "https://media.istockphoto.com/id/2290136631/photo/modern-public-mens-restroom-with-stalls-and-urinals-in-clean-commercial-facility.webp?a=1&b=1&s=612x612&w=0&k=20&c=lzm5u9HMHg8e7pwpGAzRC2B0bmOcaQgJVUpA22VPsGg=",
  },
  {
    id: 2,
    title: "KYMA",
    category: "AI Agency",
    image:
      "https://media.istockphoto.com/id/1144758380/photo/interior-of-a-public-toilet-with-open-doors-in-the-stalls-in-dark-gray-tones.jpg?s=612x612&w=0&k=20&c=4k30JfqZj5DipwX0eD8vsDtBHjLZdqNTN315CnID1_Q=",
  },
  {
    id: 3,
    title: "Mugen Studio",
    category: "Design Studio",
    image:
      "https://media.istockphoto.com/id/506005606/photo/doors-from-toilets.jpg?s=612x612&w=0&k=20&c=W398cXmdR42uT5p6z4DdV5qqVfsVpdQcUK5r6Q2e3w0=",
  },
  {
    id: 4,
    title: "Axiom Performance",
    category: "Ecommerce Site",
    image:
      "https://media.istockphoto.com/id/488209420/photo/modern-glass-cubicle-doors.jpg?s=612x612&w=0&k=20&c=-tEek_3R6viR2h_0WLiZtC7x6Jqo9DUMKXZc8MMmru4=",
  },
];

export default function Hero4() {
  const containerRef = useRef(null);
  const [open, setOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // =========================================================
  // DESKTOP CARD 1
  // =========================================================

  const card1Left = useTransform(
    scrollYProgress,
    [0.08, 0.65],
    ["55%", "0%"]
  );

  const card1Y = useTransform(
    scrollYProgress,
    [0.08, 0.65],
    ["16vh", "96vh"]
  );

  const card1Rotate = useTransform(
    scrollYProgress,
    [0.08, 0.65],
    [-5, 0]
  );

  const card1Scale = useTransform(
    scrollYProgress,
    [0.08, 0.65],
    [0.88, 1]
  );

  // =========================================================
  // DESKTOP CARD 2
  // =========================================================

  const card2Left = useTransform(
    scrollYProgress,
    [0.08, 0.65],
    ["60%", "52%"]
  );

  const card2Y = useTransform(
    scrollYProgress,
    [0.08, 0.65],
    ["12vh", "96vh"]
  );

  const card2Rotate = useTransform(
    scrollYProgress,
    [0.08, 0.65],
    [7, 0]
  );

  const card2Scale = useTransform(
    scrollYProgress,
    [0.08, 0.65],
    [0.82, 1]
  );

  // =========================================================
  // DESKTOP CARD 3
  // =========================================================

  const card3Left = useTransform(
    scrollYProgress,
    [0.08, 0.65],
    ["52%", "0%"]
  );

  const card3Y = useTransform(
    scrollYProgress,
    [0.08, 0.65],
    ["22vh", "146vh"]
  );

  const card3Rotate = useTransform(
    scrollYProgress,
    [0.08, 0.65],
    [-10, 0]
  );

  const card3Scale = useTransform(
    scrollYProgress,
    [0.08, 0.65],
    [0.78, 1]
  );

  // =========================================================
  // DESKTOP CARD 4
  // =========================================================

  const card4Left = useTransform(
    scrollYProgress,
    [0.08, 0.65],
    ["57%", "52%"]
  );

  const card4Y = useTransform(
    scrollYProgress,
    [0.08, 0.65],
    ["26vh", "146vh"]
  );

  const card4Rotate = useTransform(
    scrollYProgress,
    [0.08, 0.65],
    [5, 0]
  );

  const card4Scale = useTransform(
    scrollYProgress,
    [0.08, 0.65],
    [0.72, 1]
  );

  // =========================================================
  // CARD TRANSFORMS
  // =========================================================

  const cardMotionTransforms = [
    {
      left: card1Left,
      y: card1Y,
      rotate: card1Rotate,
      scale: card1Scale,
      zIndex: 4,
    },
    {
      left: card2Left,
      y: card2Y,
      rotate: card2Rotate,
      scale: card2Scale,
      zIndex: 3,
    },
    {
      left: card3Left,
      y: card3Y,
      rotate: card3Rotate,
      scale: card3Scale,
      zIndex: 2,
    },
    {
      left: card4Left,
      y: card4Y,
      rotate: card4Rotate,
      scale: card4Scale,
      zIndex: 1,
    },
  ];

  return (
    <div
      ref={containerRef}
      className="
        relative
        bg-[#f8fafc]
        text-[#0f172a]
        min-h-[195vh]
        pb-16

        max-lg:min-h-0
        max-lg:pb-10
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          md:px-14
          relative
          max-lg:px-5
        "
      >

        {/* =====================================================
            HERO SECTION
        ===================================================== */}

        <div
          className="
            min-h-[70vh]
            pt-20
            pb-8
            flex
            flex-col
            justify-center

            max-lg:min-h-0
            max-lg:pt-24
            max-lg:pb-16
            max-lg:justify-start
          "
        >
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-12
              gap-8
              items-center
            "
          >

            {/* LEFT HERO TEXT */}

            <div
              className="
                lg:col-span-6
                z-10
                max-w-lg
                max-lg:max-w-none
              "
            >

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-3.5
                  py-1.5
                  rounded-full
                  bg-blue-50/80
                  border
                  border-blue-200/80
                  text-xs
                  font-medium
                  text-[#1e3a8a]
                  mb-6
                  shadow-sm
                "
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Toilet Cubicles
              </div>

              <h1
                className="
                  text-5xl
                  md:text-7xl
                  font-extrabold
                  tracking-tight
                  text-[#042555]
                  leading-[1.06]
                  mb-6

                  max-lg:text-[clamp(2.75rem,11vw,4.5rem)]
                  max-lg:leading-[1.05]
                  max-lg:mb-5
                "
              >
                Made for the <br />

                <span className="text-[#334155]">
                  spaces that matter.
                </span>
              </h1>

              <p
                className="
                  text-lg
                  text-slate-600
                  mb-8
                  leading-relaxed
                  font-normal

                  max-lg:text-base
                  max-lg:leading-7
                  max-lg:mb-7
                "
              >
                From high-traffic commercial environments to premium
                interiors, Megha Systems manufactures toilet cubicle
                systems where design, durability, and precision come
                together.
              </p>

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="
                  px-6
                  py-3.5
                  rounded-full
                  bg-[#0f172a]
                  text-white
                  font-semibold
                  hover:bg-[#1e293b]
                  transition-all
                  shadow-md
                  flex
                  items-center
                  gap-3

                  max-lg:w-full
                  max-lg:justify-center
                "
              >
                <span
                  className="
                    w-6
                    h-6
                    rounded-full
                    bg-blue-600
                    text-white
                    flex
                    items-center
                    justify-center
                    text-xs
                  "
                >
                  👤
                </span>

                Book a call with me
              </button>

            </div>

            {/* RIGHT SPACER */}

            <div
              className="
                lg:col-span-6
                min-h-[55vh]
                max-lg:hidden
              "
            />

          </div>
        </div>

        {/* =====================================================
            PRODUCTS HEADER
        ===================================================== */}

        <div
          className="
            pt-16
            pb-6
            z-10
            relative

            max-lg:pt-4
            max-lg:pb-8
          "
        >
          <h2
            className="
              text-4xl
              md:text-6xl
              font-extrabold
              tracking-tight
              text-[#042555]

              max-lg:text-[clamp(2.25rem,10vw,3.5rem)]
              max-lg:leading-tight
            "
          >
            Our Products
          </h2>
        </div>

        {/* =====================================================
            DESKTOP SPACER
        ===================================================== */}

        <div className="min-h-[105vh] w-full max-lg:hidden" />

        {/* =====================================================
            DESKTOP ANIMATED CARDS
        ===================================================== */}

        <div
          className="
            absolute
            inset-0
            w-full
            h-full
            pointer-events-none
            px-6
            md:px-14

            max-lg:hidden
          "
        >
          <div className="max-w-7xl mx-auto relative h-full">

            {projects.map((project, idx) => {
              const transform = cardMotionTransforms[idx];

              return (
                <motion.div
                  key={project.id}
                  style={{
                    left: transform.left,
                    y: transform.y,
                    rotate: transform.rotate,
                    scale: transform.scale,
                    zIndex: transform.zIndex,
                    willChange: "left, transform",
                  }}
                  className="
                    absolute
                    top-15
                    w-[47%]
                    max-w-[600px]
                    pointer-events-auto
                    flex
                    flex-col
                    group
                    cursor-pointer
                    transform-gpu
                  "
                >
                  <div
                    className="
                      w-full
                      aspect-[16/10]
                      rounded-2xl
                      overflow-hidden
                      shadow-xl
                      shadow-slate-200/80
                      border
                      border-slate-200/90
                      bg-white
                      relative
                    "
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-103
                      "
                      loading="eager"
                    />
                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>

        {/* =====================================================
            MOBILE / TABLET PRODUCTS
        ===================================================== */}

        <div
          className="
            hidden
            max-lg:flex
            flex-col
            gap-8
            pb-10
          "
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="
                w-full
                flex
                flex-col
                group
                cursor-pointer
              "
            >
              <div
                className="
                  w-full
                  aspect-[16/10]
                  rounded-2xl
                  overflow-hidden
                  shadow-xl
                  shadow-slate-200/80
                  border
                  border-slate-200/90
                  bg-white
                  relative
                "
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-103
                  "
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* =====================================================
            POPUP
        ===================================================== */}

        <PopupForm
          isOpen={open}
          onClose={() => setOpen(false)}
        />

      </div>
    </div>
  );
}