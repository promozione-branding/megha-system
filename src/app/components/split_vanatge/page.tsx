'use client';

import React, { useRef, useState } from 'react';
import { Quote, Play } from 'lucide-react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useTransform,
  MotionValue,
} from 'framer-motion';

interface VantageItem {
  id: number;
  quote: string;
  author: string;
  role: string;
  imageUrl: string;
}

const items: VantageItem[] = [
  {
    id: 1,
    quote: 'Well-designed spaces speak without words.',
    author: 'Peter Bakar',
    role: 'Founder of Royal Spaces',
    imageUrl: '/assets/split_vantage_image/new1.jpeg',
  },
  {
    id: 2,
    quote:
      'Architecture is the learned game, correct and magnificent, of forms assembled in the light.',
    author: 'Elena Rostova',
    role: 'Principal Architect',
    imageUrl: '/assets/split_vantage_image/2.jpeg',
  },
  {
    id: 3,
    quote:
      'Simplicity is about subtracting the obvious and adding the meaningful.',
    author: 'Marcus Vance',
    role: 'Head of Interior Design',
    imageUrl: '/assets/split_vantage_image/3rd3.webp',
  },
  {
    id: 4,
    quote:
      'Precision in detail creates extraordinary architecture.',
    author: 'Sophia Chen',
    role: 'Lead Structural Engineer',
    imageUrl: '/assets/split_vantage_image/4.jpg',
  },
];

export default function SplitVantage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const newIndex = Math.min(
      items.length - 1,
      Math.max(
        0,
        Math.round(latest * (items.length - 1))
      )
    );

    setActiveIndex((current) =>
      current === newIndex ? current : newIndex
    );
  });

  const active = items[activeIndex];

  return (
    <section
      ref={containerRef}
      className="
        relative
        
        w-full
        bg-slate-50
        font-sans
        antialiased
        text-slate-900
      "
      style={{
        height: `${items.length * 55}vh`,
      }}
    >
      {/* =========================
          STICKY VIEWPORT
      ========================= */}

      <div
        className="
          sticky
          top-0
          h-[100svh]
          min-h-[620px]
          w-full
          overflow-hidden
          z-10
          flex
          items-center
          justify-center
          px-3
          py-4
          sm:px-6
          sm:py-6
          lg:px-12
        "
      >
        <div
          className="
            w-full
            max-w-7xl
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-3
            sm:gap-5
            lg:gap-6
            items-stretch
            max-h-full
          "
        >
          {/* =========================
              LEFT CARD
          ========================= */}

          <div
            className="
              lg:col-span-4
              bg-[#1E3A8A]
              text-white
              rounded-[22px]
              sm:rounded-[28px]
              lg:rounded-[32px]
              px-5
              py-5
              sm:p-8
              lg:p-10
              flex
              flex-col
              justify-between
              border
              border-white/10
              shadow-lg

              min-h-0
              h-[42svh]
              sm:h-[40svh]
              lg:h-[560px]

              max-h-[390px]
              sm:max-h-[460px]
              lg:max-h-none
            "
          >
            {/* Quote */}
            <div className="space-y-3 sm:space-y-6">
              <div className="text-white/90">
                <Quote
                  className="
                    w-7
                    h-7
                    sm:w-9
                    sm:h-9
                    rotate-180
                    stroke-[1.5]
                    fill-none
                    text-white/90
                  "
                />
              </div>

              {/* Animated Quote */}
              <div
                className="
                  relative
                  min-h-[105px]
                  sm:min-h-[150px]
                  flex
                  items-start
                "
              >
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={`${active.id}-quote`}
                    initial={{
                      opacity: 0,
                      y: 12,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -8,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: 'easeOut',
                    }}
                    className="
                      text-[23px]
                      leading-[1.18]
                      sm:text-3xl
                      lg:text-4xl
                      font-bold
                      tracking-tight
                      text-white
                    "
                  >
                    {active.quote}
                  </motion.h2>
                </AnimatePresence>
              </div>
            </div>

            {/* Author / Controls */}
            <div className="pt-3 sm:pt-8 space-y-3 sm:space-y-6">
              <div className="relative min-h-[38px] sm:min-h-[44px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${active.id}-author`}
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="space-y-0.5"
                  >
                    <p
                      className="
                        text-xs
                        sm:text-sm
                        lg:text-base
                        font-bold
                        text-white
                        tracking-tight
                      "
                    >
                      {active.author}
                    </p>

                    <p
                      className="
                        text-[10px]
                        sm:text-xs
                        lg:text-sm
                        text-slate-300
                        font-medium
                      "
                    >
                      {active.role}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex items-center justify-between">
                {/* Play */}
                <button
                  type="button"
                  className="
                    w-10
                    h-10
                    sm:w-12
                    sm:h-12
                    rounded-full
                    bg-white
                    hover:bg-slate-100
                    text-[#0F172A]
                    flex
                    items-center
                    justify-center
                    shadow-md
                    transition-all
                    duration-200
                    hover:scale-105
                    active:scale-95
                    cursor-pointer
                  "
                  aria-label="Play"
                >
                  <Play
                    className="
                      w-3.5
                      h-3.5
                      sm:w-4
                      sm:h-4
                      fill-[#0F172A]
                      translate-x-0.5
                    "
                  />
                </button>

                {/* Dots */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {items.map((_, idx) => (
                    <div
                      key={idx}
                      className={`
                        h-1.5
                        sm:h-2
                        rounded-full
                        transition-all
                        duration-300
                        ${activeIndex === idx
                          ? 'w-5 sm:w-6 bg-white'
                          : 'w-1.5 sm:w-2 bg-white/30'
                        }
                      `}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* =========================
              RIGHT IMAGE
          ========================= */}

          <div
            className="
              lg:col-span-8
              relative
              rounded-[22px]
              sm:rounded-[28px]
              lg:rounded-[32px]
              overflow-hidden
              shadow-sm
              border
              border-black/5

              h-[48svh]
              sm:h-[52svh]
              lg:h-[560px]

              min-h-0
            "
          >
            <div
              className="
                relative
                w-full
                h-full
                rounded-[22px]
                sm:rounded-[28px]
                lg:rounded-[32px]
                overflow-hidden
              "
            >
              {items.map((item, i) => (
                <ProjectImageCard
                  key={item.id}
                  item={item}
                  index={i}
                  total={items.length}
                  progress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectImageCard({
  item,
  index,
  total,
  progress,
}: {
  item: VantageItem;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  /*
   * First image is always visible.
   */
  if (index === 0) {
    return (
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.author}
          className="
            h-full
            w-full
            object-fill
            
            select-none
            pointer-events-none
          "
          draggable={false}
        />
      </div>
    );
  }

  /*
   * Divide scroll progress between images.
   */
  const segment = 1 / (total - 1);

  const startWipe = (index - 1) * segment;

  const endWipe =
    startWipe + segment * 0.75;

  const holdEnd =
    index * segment;

  /*
   * Wipe image from bottom -> top.
   */
  const clipPath = useTransform(
    progress,
    [
      startWipe,
      endWipe,
      holdEnd,
      1,
    ],
    [
      'inset(100% 0% 0% 0%)',
      'inset(0% 0% 0% 0%)',
      'inset(0% 0% 0% 0%)',
      'inset(0% 0% 0% 0%)',
    ],
    {
      clamp: true,
    }
  );

  return (
    <motion.div
      style={{
        zIndex: index,
        clipPath,
      }}
      className="
        absolute
        inset-0
        h-full
        w-full
        overflow-hidden
        will-change-[clip-path]
      "
    >
      <img
        src={item.imageUrl}
        alt={item.author}
        className="
          h-full
          w-full
          object-cover
          object-center
          select-none
          pointer-events-none
        "
        draggable={false}
      />
    </motion.div>
  );
}