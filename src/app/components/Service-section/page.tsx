'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Layers, ShieldCheck, DoorClosed, LayoutGrid } from 'lucide-react';
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

export default function ServicesSection() {
  return (
    <section className="w-full bg-white py-4 sm:py-8 px-4 sm:px-8 lg:px-12 font-sans antialiased text-[#111111] overflow-hidden">
      <div className="max-w-[1750px] mx-auto space-y-8 lg:px-6">

        {/* Header Block */}
        <header className="text-center max-w-3xl mx-auto pt-4 flex flex-col items-center">
          <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.4em] text-gray-400 uppercase mb-3">
            OUR CAPABILITIES
          </p>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111111] leading-[1.1] mb-2">
            What <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 font-medium">Goes</span> Into<br className="hidden sm:block" /> A Better Cubicle.
          </h2>

          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            From premium materials and precision hardware to smart space planning and expert installation, every element is carefully engineered to deliver lasting performance and a refined finish.
          </p>
        </header>

        {/* Services Grid with Permanent Alternating Staggered Offset */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 items-start py-5 lg:pt-10 lg:pb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isStaggered = index % 2 === 0;

            return (
              <div
                key={service.id}
                className={`transition-transform duration-700 ease-out ${isStaggered ? 'lg:translate-y-16' : 'lg:-translate-y-8'
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
                  className={`group relative rounded-[32px] p-6 sm:p-6 flex flex-col justify-between min-h-[380px] sm:min-h-[420px] transition-all duration-500 overflow-hidden cursor-pointer ${service.isImageCard
                    ? 'shadow-2xl border border-transparent'
                    : 'bg-gradient-to-b from-white to-[#f4f5f7] border border-[#e5e7eb] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]'
                    }`}
                >
                  {/* Background Image & Rich Gradient Overlay */}
                  <div className={`absolute inset-0 transition-all duration-700 z-0 ${service.isImageCard ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    <img
                      src={service.bgImage}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 opacity-90 transition-opacity duration-500" />
                  </div>

                  {/* Card Top: Icon & Text */}
                  <div className="relative z-10 space-y-6">
                    {/* Floating Icon Container */}
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${service.isImageCard
                      ? 'bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg'
                      : 'bg-white shadow-sm border border-gray-100 text-[#111111] group-hover:bg-white/20 group-hover:backdrop-blur-md group-hover:border-white/30 group-hover:text-white group-hover:shadow-lg'
                      }`}>
                      <Icon className="w-7 h-7 stroke-[1.5]" />
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-3">
                      <h3
                        className={`text-xl sm:text-2xl font-bold tracking-tight leading-snug transition-colors duration-500 ${service.isImageCard ? 'text-white' : 'text-[#111111] group-hover:text-white'
                          }`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`text-sm leading-relaxed transition-colors duration-500 ${service.isImageCard ? 'text-gray-300' : 'text-gray-500 group-hover:text-gray-300'
                          }`}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom: Elegant Arrow Button */}
                  <div className="relative z-10 pt-8 flex justify-end">
                    <Link href={"/products"}
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${service.isImageCard
                        ? 'bg-white text-[#111111] shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-110'
                        : 'bg-white border border-gray-200 text-[#111111] shadow-sm group-hover:bg-white group-hover:border-transparent group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] group-hover:scale-110'
                        }`}
                    >
                      <ChevronRight className="w-5 h-5 stroke-[2]" />
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