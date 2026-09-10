'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import PopupForm from '@/components/PopupForm';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  href: string;
}

interface CardMotionTransform {
  left: MotionValue<string>;
  y: MotionValue<string>;
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  zIndex: number;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Black Maxi',
    category: 'CLASSIC RANGE',
    image: "/product/Black Maxi.webp",
    href: '/products/black-maxi',
  },
  {
    id: 2,
    title: 'Duro',
    category: 'CLASSIC RANGE',
    image: "/product/Duro-Toilet-Cubicles.webp",
    href: '/products/duro',
  },
  {
    id: 3,
    title: 'Kiddiez',
    category: 'KIDS RANGE',
    image: "/product/Kiddiez.webp",
    href: '/products/kiddiez',
  },
  {
    id: 4,
    title: 'Luron',
    category: 'CLASSIC RANGE',
    image: "/product/Luron.webp",
    href: '/products/luron',
  },
];

export default function Hero3() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // =========================================================
  // DESKTOP ANIMATION — LEFT UNCHANGED
  // =========================================================

  const card1Left = useTransform(
    scrollYProgress,
    [0.08, 0.65],
    ['55%', '0%']
  );
  const card1Y = useTransform(
    scrollYProgress,
    [0.08, 0.65],
    ['16vh', '96vh']
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

  const card2Left = useTransform(
    scrollYProgress,
    [0.08, 0.65],
    ['60%', '52%']
  );
  const card2Y = useTransform(
    scrollYProgress,
    [0.08, 0.65],
    ['12vh', '96vh']
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

  const card3Left = useTransform(
    scrollYProgress,
    [0.08, 0.65],
    ['52%', '0%']
  );
  const card3Y = useTransform(
    scrollYProgress,
    [0.08, 0.65],
    ['22vh', '146vh']
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

  const card4Left = useTransform(
    scrollYProgress,
    [0.08, 0.65],
    ['57%', '52%']
  );
  const card4Y = useTransform(
    scrollYProgress,
    [0.08, 0.65],
    ['26vh', '146vh']
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

  const cardMotionTransforms: CardMotionTransform[] = [
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

        /* Mobile */
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
            pt-10
            pb-8
            flex
            flex-col
            justify-center

            max-lg:min-h-0
            max-lg:pt-12
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
            {/* Left Hero Text Column */}

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
                  text-[#0f172a]
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
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
                  👤
                </span>

                Book a call with me
              </button>
            </div>

            {/* Right Column Spacer */}

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
              text-[#0f172a]

              max-lg:text-[clamp(2.25rem,10vw,3.5rem)]
              max-lg:leading-tight
            "
          >
            Our Products
          </h2>
        </div>

        {/* =====================================================
            DESKTOP SPACER
            Keep exactly as before, but only on desktop.
        ===================================================== */}

        <div className="min-h-[95vh] w-full max-lg:hidden" />

        {/* =====================================================
            DESKTOP ANIMATED CARDS
            Completely unchanged behavior.
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
                    {/* Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="
        w-full
        h-full
        object-cover
        transition-transform
        duration-700
        ease-out
        group-hover:scale-105
      "
                      loading="eager"
                    />

                    {/* Dark Gradient */}
                    <div
                      className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black/80
        via-black/20
        to-transparent
        opacity-0
        transition-opacity
        duration-500
        group-hover:opacity-100
      "
                    />

                    {/* Product Info */}
                    <div
                      className="
        absolute
        inset-x-0
        bottom-0
        z-10
        flex
        items-end
        justify-between
        gap-5
        p-6

        opacity-0
        translate-y-5

        transition-all
        duration-500
        ease-out

        group-hover:opacity-100
        group-hover:translate-y-0
      "
                    >
                      {/* Category + Name */}
                      <div className="min-w-0">
                        <p
                          className="
            mb-1.5
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.18em]
            text-white/70
          "
                        >
                          {project.category}
                        </p>

                        <h3
                          className="
            text-2xl
            font-bold
            tracking-tight
            text-white
          "
                        >
                          {project.title}
                        </h3>
                      </div>

                      {/* View Product */}
                      <Link
                        href={project.href}
                        onClick={(e) => e.stopPropagation()}
                        className="
    group/button
    flex
    h-12
    w-12
    shrink-0
    items-center
    justify-center
    overflow-hidden
    rounded-full
    bg-white
    text-slate-900
    shadow-lg

    transition-all
    duration-500
    ease-out

    /* Expand when CARD is hovered */
    group-hover:w-44

    /* Button hover */
    hover:bg-slate-900
    hover:text-white
  "
                      >
                        {/* Button Text */}
                        <span
                          className="
      whitespace-nowrap
      text-sm
      font-semibold

      opacity-0
      -translate-x-3

      transition-all
      duration-300
      ease-out

      /* Show when CARD is hovered */
      group-hover:opacity-100
      group-hover:translate-x-0
    "
                        >
                          View Product
                        </span>

                        {/* Arrow */}
                        <span
                          className="
      flex
      h-12
      w-12
      shrink-0
      items-center
      justify-center
      text-xl
      transition-transform
      duration-300

      group-hover:translate-x-1
    "
                        >
                          →
                        </span>
                      </Link>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            MOBILE / TABLET PRODUCTS
            Normal responsive stacked layout.
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
    group
  "
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="
      w-full
      h-full
      object-cover
      transition-transform
      duration-700
      ease-out
      group-hover:scale-105
    "
                loading="eager"
              />

              {/* Dark Gradient Overlay */}
              <div
                className="
      absolute
      inset-0
      bg-gradient-to-t
      from-black/75
      via-black/20
      to-transparent
      opacity-0
      transition-opacity
      duration-500
      group-hover:opacity-100
    "
              />

              {/* Product Information */}
              <div
                className="
      absolute
      inset-x-0
      bottom-0
      z-10
      p-6
      flex
      items-end
      justify-between
      gap-5

      opacity-0
      translate-y-5

      transition-all
      duration-500
      ease-out

      group-hover:opacity-100
      group-hover:translate-y-0
    "
              >
                {/* Name + Category */}
                <div className="min-w-0">
                  <p
                    className="
          mb-1.5
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.18em]
          text-white/70
        "
                  >
                    {project.category}
                  </p>

                  <h3
                    className="
          text-2xl
          font-bold
          tracking-tight
          text-white
        "
                  >
                    {project.title}
                  </h3>
                </div>

                {/* View Product Button */}
                <a
                  href={project.href}
                  onClick={(e) => e.stopPropagation()}
                  className="
        group/button
        flex
        h-12
        w-12
        shrink-0
        items-center
        justify-center
        overflow-hidden
        rounded-full
        bg-white
        text-slate-900
        shadow-lg

        transition-all
        duration-500

        hover:w-36
        hover:bg-slate-900
        hover:text-white
      "
                >
                  <span
                    className="
          whitespace-nowrap
          text-sm
          font-semibold
          opacity-0
          -translate-x-2

          transition-all
          duration-300

          group-hover/button:opacity-100
          group-hover/button:translate-x-0
        "
                  >
                    View Product
                  </span>

                  <span
                    className="
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          text-xl
          transition-transform
          duration-300
          group-hover/button:translate-x-1
        "
                  >
                    →
                  </span>
                </a>
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