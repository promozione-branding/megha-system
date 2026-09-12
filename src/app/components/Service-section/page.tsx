
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  Layers,
  ShieldCheck,
  DoorClosed,
  LayoutGrid,
} from 'lucide-react';
import Link from 'next/link';

interface ServiceItem {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  isImageCard?: boolean;
  bgImage: string;
}

const services: ServiceItem[] = [
  {
    id: 1,
    icon: Layers,
    title: 'Premium Restroom Partitions',
    description:
      'Built with high-pressure compact laminates, our toilet cubicle combines structural strength with a clean, contemporary finish made for demanding spaces.',
    isImageCard: false,
    bgImage: '/assets/moving_down_images/image1.jpeg',
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: 'Waterproof Laminate Surfaces',
    description:
      'Made to handle moisture and everyday use, our surfaces stay easy to maintain while keeping the washroom clean, fresh, and refined.',
    isImageCard: true,
    bgImage: '/assets/moving_down_images/image2.jpeg',
  },
  {
    id: 3,
    icon: DoorClosed,
    title: 'Heavy-Duty Hardware Fittings',
    description:
      'From hinges and locks to adjustable legs and privacy indicators, every fitting is chosen for dependable performance and a seamless finish.',
    isImageCard: false,
    bgImage: '/assets/moving_down_images/image3.jpeg',
  },
  {
    id: 4,
    icon: LayoutGrid,
    title: 'Hygienic Space Planning',
    description:
      'Every layout is thoughtfully considered to create the right balance of privacy, movement, functionality, and visual harmony.',
    isImageCard: false,
    bgImage: '/6.jpeg',
  },
];

export default function ServicesSection(): React.ReactElement {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (id: number): void => {
    // Click behavior only for mobile/tablet
    if (window.innerWidth < 1024) {
      setActiveCard((prev) => (prev === id ? null : id));
    }
  };

  return (
    <section className="w-full bg-white py-4 px-4 font-sans antialiased text-[#111111] overflow-hidden sm:px-8 sm:py-8 lg:px-12">
      <div className="mx-auto max-w-[1750px] space-y-8 lg:px-6">
        {/* Header Block */}
        <header className="mx-auto flex max-w-3xl flex-col items-center pt-4 text-center">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 sm:text-[11px]">
            OUR CAPABILITIES
          </p>

          <h2 className="mb-2 text-3xl font-extrabold leading-[1.1] tracking-tight text-[#111111] sm:text-5xl lg:text-6xl">
            What{' '}
            <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text font-medium text-transparent">
              Goes
            </span>{' '}
            Into
            <br className="hidden sm:block" /> A Better Cubicle.
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-500 sm:text-base">
            From premium materials and precision hardware to smart space
            planning and expert installation, every element is carefully
            engineered to deliver lasting performance and a refined finish.
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 items-start gap-6 py-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 lg:pb-20 lg:pt-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isStaggered = index % 2 === 0;

            return (
              <div
                key={service.id}
                className={`transition-transform duration-700 ease-out ${
                  isStaggered
                    ? 'lg:translate-y-16'
                    : 'lg:-translate-y-8'
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  onClick={() => handleCardClick(service.id)}
                  className={`group relative flex min-h-[380px] cursor-pointer flex-col justify-between overflow-hidden rounded-[32px] p-6 transition-all duration-500 sm:min-h-[420px] sm:p-6 ${
                    service.isImageCard
                      ? 'border border-transparent shadow-2xl'
                      : 'border border-[#e5e7eb] bg-gradient-to-b from-white to-[#f4f5f7] shadow-[0_8px_30px_rgb(0,0,0,0.04)] lg:hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]'
                  }`}
                >
                  {/* Background Image */}
                  <div
                    className={`
                      absolute
                      inset-0
                      z-0
                      overflow-hidden
                      transition-opacity
                      duration-700

                      ${
                        service.isImageCard
                          ? 'opacity-100'
                          : `
                            max-lg:opacity-100
                            lg:opacity-0
                            lg:group-hover:opacity-100
                          `
                      }

                      ${
                        activeCard === service.id
                          ? 'max-lg:opacity-100'
                          : ''
                      }
                    `}
                  >
                    <img
                      src={service.bgImage}
                      alt={service.title}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-[1.5s]
                        ease-out
                        max-lg:scale-100
                        lg:group-hover:scale-110
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 opacity-90 transition-opacity duration-500" />
                  </div>

                  {/* Card Top */}
                  <div className="relative z-10 space-y-6">
                    {/* Floating Icon */}
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-500 ${
                        service.isImageCard
                          ? 'border border-white/30 bg-white/20 text-white shadow-lg backdrop-blur-md'
                          : `
                            border
                            border-gray-100
                            bg-white
                            text-[#111111]
                            shadow-sm

                            max-lg:border-white/30
                            max-lg:bg-white/20
                            max-lg:text-white
                            max-lg:shadow-lg
                            max-lg:backdrop-blur-md

                            lg:group-hover:border-white/30
                            lg:group-hover:bg-white/20
                            lg:group-hover:text-white
                            lg:group-hover:shadow-lg
                            lg:group-hover:backdrop-blur-md
                          `
                      }`}
                    >
                      <Icon className="h-7 w-7 stroke-[1.5]" />
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-3">
                      <h3
                        className={`
                          text-xl
                          font-bold
                          leading-snug
                          tracking-tight
                          transition-colors
                          duration-500
                          sm:text-2xl

                          ${
                            service.isImageCard
                              ? 'text-white'
                              : `
                                max-lg:text-white
                                lg:text-[#111111]
                                lg:group-hover:text-white
                              `
                          }
                        `}
                      >
                        {service.title}
                      </h3>

                      <p
                        className={`
                          text-sm
                          leading-relaxed
                          transition-colors
                          duration-500

                          ${
                            service.isImageCard
                              ? 'text-white'
                              : `
                                max-lg:text-gray-300
                                lg:text-[#111111]
                                lg:group-hover:text-white
                              `
                          }
                        `}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom */}
                  <div className="relative z-10 flex justify-end pt-8">
                    <Link
                      href="/products"
                      onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                        e.stopPropagation()
                      }
                      className={`
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        transition-all
                        duration-500

                        ${
                          service.isImageCard
                            ? 'bg-white text-[#111111] shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-110'
                            : `
                              border
                              border-gray-200
                              bg-white
                              text-[#111111]
                              shadow-sm

                              lg:group-hover:border-transparent
                              lg:group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]
                              lg:group-hover:scale-110
                            `
                        }
                      `}
                    >
                      <ChevronRight className="h-5 w-5 stroke-[2]" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

