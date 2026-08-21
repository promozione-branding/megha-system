'use client';

import React from 'react';
import Image from 'next/image';

const CERTIFICATES = [
  { id: 1, src: '/assets/certificates/1.png', alt: 'Quality Certification 1' },
  { id: 2, src: '/assets/certificates/2.png', alt: 'Quality Certification 2' },
  { id: 3, src: '/assets/certificates/3.png', alt: 'Quality Certification 3' },
  { id: 4, src: '/assets/certificates/4.png', alt: 'Quality Certification 4' },
  { id: 5, src: '/assets/certificates/5.png', alt: 'Quality Certification 5' },
  { id: 6, src: '/assets/certificates/6.png', alt: 'Quality Certification 6' },
  { id: 7, src: '/assets/certificates/7.png', alt: 'Quality Certification 7' },
  { id: 8, src: '/assets/certificates/8.png', alt: 'Quality Certification 8' },
  { id: 9, src: '/assets/certificates/9.png', alt: 'Quality Certification 9' },
  { id: 10, src: '/assets/certificates/10.png', alt: 'Quality Certification 10' },
  { id: 11, src: '/assets/certificates/11.png', alt: 'Quality Certification 11' },
  { id: 12, src: '/assets/certificates/12.png', alt: 'Quality Certification 12' },
  { id: 13, src: '/assets/certificates/13.png', alt: 'Quality Certification 13' },
];

export default function CertificatesMarquee() {
  // Duplicate array to ensure a seamless continuous 60fps scrolling loop
  const marqueeCertificates = [...CERTIFICATES, ...CERTIFICATES];

  return (
    <section className="relative w-full bg-[#f8f9fa] pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8 lg:pb-10 border-y border-gray-200/80 overflow-hidden font-sans text-[#0d2461]">
      <div className="max-w-[1750px] mx-auto px-6 flex flex-col-reverse lg:grid lg:grid-cols-12 items-center gap-12 lg:gap-8">
        
        {/* Marquee Track Container (Left Side) */}
        <div className="lg:col-span-7 xl:col-span-8 relative w-full overflow-hidden flex items-center group py-4">
          
          {/* Left & Right Gradient Fade Overlays */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#f8f9fa] via-[#f8f9fa]/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#f8f9fa] via-[#f8f9fa]/90 to-transparent z-10 pointer-events-none" />

          {/* Moving Ticker Track */}
          <div className="flex w-max items-center gap-6 sm:gap-8 animate-marquee-reverse group-hover:[animation-play-state:paused] will-change-transform">
            {marqueeCertificates.map((cert, index) => (
              <div
                key={`${cert.id}-${index}`}
                className="relative shrink-0 h-40 sm:h-48 lg:h-52 w-32 sm:w-40 lg:w-44 bg-white rounded-2xl p-4 border border-gray-200/70 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col items-center justify-center group/card"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    fill
                    className="object-contain p-1 transition-transform duration-300 group-hover/card:scale-105"
                    sizes="(max-width: 768px) 128px, 176px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Header Text (Right Side) */}
        <div className="lg:col-span-5 xl:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left relative z-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d2461]/5 border border-[#0d2461]/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#f5bd24] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#0d2461] uppercase">
              Accreditations &amp; Standards
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#0d2461] leading-[1.15]">
            Certified for Precision, Safety &amp; Durability
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-lg">
            Our restroom cubicles and wall paneling systems conform to rigorous international quality, fire-rating, and ISO standard compliance.
          </p>
        </div>

      </div>

      {/* Marquee Keyframes */}
      <style jsx>{`
        @keyframes marqueeReverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-marquee-reverse {
          animation: marqueeReverse 35s linear infinite;
        }
      `}</style>
    </section>
  );
}
