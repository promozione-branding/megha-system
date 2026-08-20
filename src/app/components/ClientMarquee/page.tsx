'use client';

import React from 'react';
import Image from 'next/image';

const CLIENT_LOGOS = [
  { id: 1, src: '/assets/clients/client5.webp', alt: 'McDonalds' },
  { id: 2, src: '/assets/clients/client6.png', alt: 'Delhi Metro Text' },
  { id: 3, src: '/assets/clients/client6.webp', alt: 'Delhi Metro Logo' },
  { id: 4, src: '/assets/clients/client7.png', alt: 'Yamaha' },
];

export default function ClientMarquee() {
  // Duplicate array 4 times to ensure a seamless infinite scroll loop with 20 items
  const marqueeLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="relative w-full bg-white py-12 sm:py-16 border-y border-gray-100 overflow-hidden font-sans">
      
      {/* Section Header */}
      <div className="max-w-[1750px] mx-auto px-6 mb-8 text-center">
        <p className="text-[11px] sm:text-xs font-bold tracking-[0.35em] text-gray-400 uppercase">
          TRUSTED BY ARCHITECTS &amp; INDUSTRY LEADERS NATIONWIDE
        </p>
      </div>

      {/* Marquee Wrapper with Side Fading Gradient Masks */}
      <div className="relative w-full overflow-hidden flex items-center group">
        
        {/* Left & Right Edge Fades */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex w-max items-center gap-14 sm:gap-20 lg:gap-24 animate-marquee group-hover:[animation-play-state:paused] will-change-transform">
          {marqueeLogos.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="relative shrink-0 h-16 sm:h-18 w-36 sm:w-48 flex items-center justify-center cursor-pointer group/logo"
            >
              <div className="relative w-full h-full flex items-center justify-center transition-all duration-300 transform scale-110 sm:scale-125 opacity-90 group-hover/logo:opacity-100 group-hover/logo:scale-135">
                <Image
                  src={client.src}
                  alt={client.alt}
                  fill
                  className="object-contain mix-blend-multiply"
                  sizes="(max-width: 768px) 144px, 192px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframe animation style injected inline */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
