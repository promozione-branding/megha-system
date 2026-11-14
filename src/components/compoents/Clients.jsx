'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CLIENT_LOGOS = [
  { id: 1, src: '/assets/clients/client5.webp', alt: 'McDonalds' },
  { id: 2, src: '/assets/clients/client6.png', alt: 'Delhi Metro Text' },
  { id: 3, src: '/assets/clients/client6.webp', alt: 'Mercedes' },
  { id: 4, src: '/assets/clients/client7.png', alt: 'Yamaha' },
  { id: 5, src: '/assets/clients/Apple (2).webp', alt: 'Apple' },
  { id: 6, src: '/assets/clients/kfc.webp', alt: 'KFC' },
  { id: 7, src: '/assets/clients/mag.webp', alt: 'MAC' },
  { id: 8, src: '/assets/clients/maruti.webp', alt: 'Maruti' },
];

export default function ClientMarquee() {
  // Repeat enough times to guarantee seamless scrolling
  const marqueeLogos = [
    ...CLIENT_LOGOS,
    ...CLIENT_LOGOS,
    ...CLIENT_LOGOS,
  ];

  return (
    <section className="relative w-full overflow-hidden border-y border-gray-100 bg-white py-10 font-sans">

      {/* Section Header */}
      <div className="mx-auto mb-8 max-w-[1750px] px-6 text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-gray-400 sm:text-sm">
          TRUSTED BY ARCHITECTS &amp; INDUSTRY LEADERS NATIONWIDE
        </p>
      </div>

      {/* Marquee */}
      <div className="relative flex w-full items-center overflow-hidden">

        {/* Left Fade */}
        <div
          className="
            pointer-events-none absolute left-0 top-0 z-20
            h-full w-24
            bg-gradient-to-r from-white via-white/80 to-transparent
            sm:w-40
          "
        />

        {/* Right Fade */}
        <div
          className="
            pointer-events-none absolute right-0 top-0 z-20
            h-full w-24
            bg-gradient-to-l from-white via-white/80 to-transparent
            sm:w-40
          "
        />

        {/* Framer Motion Track */}
        <motion.div
          className="flex w-max items-center gap-14 sm:gap-20 lg:gap-24"
          initial={{ x: 0 }}
          animate={{ x: ['0%', '-33.333333%'] }}
          transition={{
            x: {
              duration: 25,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
            },
          }}
          whileHover={{
            animationPlayState: 'paused',
          }}
        >
          {marqueeLogos.map((client, index) => (
            <motion.div
              key={`${client.id}-${index}`}
              className="
                relative flex h-25 w-36 shrink-0
                cursor-pointer items-center justify-center
                rounded-xl
                bg-white
                shadow-md
                sm:h-30 sm:w-48
              "
              whileHover={{
                scale: 1.05,
                y: -4,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
            >
              <motion.div
                className="relative flex h-full w-full items-center justify-center"
                initial={{ scale: 1.1, opacity: 0.85 }}
                whileHover={{
                  scale: 1.2,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.3,
                  ease: 'easeOut',
                }}
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={140}
                  height={140}
                  className="h-auto max-h-[80px] w-auto max-w-[140px] object-contain"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}