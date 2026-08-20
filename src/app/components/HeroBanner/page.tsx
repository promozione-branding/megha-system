'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, X } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const HERO_SLIDES = [
  {
    id: 1,
    src: '/assets/hero_section_images/Apple-BKC-Mumbai-India-media-preview-hero_Full-Bleed-Image.jpg.slideshow-large.jpg.jpeg',
    alt: 'Apple BKC Architectural Showcase',
  },
  {
    id: 2,
    src: '/assets/hero_section_images/Apple-office-featured-20240117 (2).webp',
    alt: 'Apple Office Architectural Interior Showcase',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop',
    alt: 'Architectural Interior Showcase',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1800&auto=format&fit=crop',
    alt: 'Modern Restroom Systems Showcase',
  },
];

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleConsultation = () => {
    console.log("Book consultation clicked");
  };

  return (
    <>
      <section className="w-full bg-white text-black font-sans antialiased pt-2 sm:pt-3 lg:pt-4 pb-8 sm:pb-10 lg:pb-12">
        <div className="mx-auto max-w-[1750px] px-6 sm:px-10 lg:px-14 xl:px-16">
          
          {/* Top Sub-header */}
          <div className="mb-2 sm:mb-3">
            <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.45em] text-gray-500 uppercase">
              Welcome to Megha
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-[68px] xl:text-[76px] font-semibold tracking-[-0.04em] text-black leading-[1.02] max-w-7xl">
            Designing Space, Defining Life.
          </h1>

          {/* Action Button & Description Row */}
          <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 lg:gap-12">
            <button
              type="button"
              onClick={handleConsultation}
              className="inline-flex items-center justify-center gap-2.5 border border-black bg-transparent px-6 py-2.5 text-xs sm:text-sm font-medium text-black transition-all duration-200 hover:bg-black hover:text-white cursor-pointer w-fit"
            >
              <span>Book a Free Consultation</span>
              <span className="text-sm leading-none">→</span>
            </button>

            <p className="max-w-xl text-xs sm:text-sm leading-relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          {/* Bottom Feature Grid */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-[21%_79%] xl:grid-cols-[20%_80%] gap-5 lg:gap-6 items-stretch">
            
            {/* Left Quote Card with Video Play Button */}
            <div className="relative group/card bg-[#f4f3f0] border border-black/5 rounded-[22px] p-6 sm:p-7 lg:p-8 flex flex-col justify-between min-h-[320px] sm:min-h-[380px] lg:min-h-[440px] xl:min-h-[480px]">
              <div>
                <div className="flex items-center justify-between">
                  {/* Double Quote Icon */}
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-black/80"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h3c0 4-2 6-4 6" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h3c0 4-2 6-4 6" />
                  </svg>

                  {/* Play Video Trigger Button */}
                  <button
                    type="button"
                    onClick={() => setIsVideoOpen(true)}
                    className="group/btn relative flex items-center gap-2 bg-black text-white px-3.5 py-2 rounded-full text-xs font-medium hover:bg-[#0d2461] transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
                    aria-label="Play showreel video"
                  >
                    <div className="relative flex items-center justify-center">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-40 animate-ping" />
                      <Play className="w-3.5 h-3.5 fill-white" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wide uppercase pr-0.5">Watch</span>
                  </button>
                </div>

                {/* Quote Statement */}
                <h2 className="mt-5 text-xl sm:text-2xl lg:text-[28px] xl:text-[30px] font-semibold tracking-[-0.035em] text-black leading-[1.16]">
                  Well-designed spaces speak without words.
                </h2>
              </div>

              {/* Author */}
              <div className="pt-6 flex items-end justify-between">
                <div>
                  <p className="text-sm sm:text-base font-semibold text-black tracking-tight">
                    Peter Bakar
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 font-normal">
                    Founder of Megha Systems
                  </p>
                </div>
              </div>
            </div>

            {/* Right Showcase Banner Slider */}
            <div className="relative min-h-[320px] sm:min-h-[380px] lg:min-h-[440px] xl:min-h-[480px] w-full overflow-hidden rounded-[22px] shadow-sm group/slider">
              <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                effect="fade"
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                loop={true}
                pagination={{ clickable: true }}
                className="w-full h-full hero-swiper text-white"
              >
                {HERO_SLIDES.map((slide) => (
                  <SwiperSlide key={slide.id} className="relative w-full h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[440px] xl:min-h-[480px]">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      priority={slide.id === 1}
                      className="object-cover object-center"
                    />
                    {/* Subtle Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

          </div>

        </div>
      </section>

      {/* Video Modal Overlay */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-300">
          <div className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            
            {/* Modal Header bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-gradient-to-r from-[#0d2461] to-black">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#f5bd24] animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider text-white">Megha Systems — Brand Showreel</span>
              </div>
              <button
                type="button"
                onClick={() => setIsVideoOpen(false)}
                className="p-1.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video w-full bg-black">
              <video
                src="/assets/video/video_1.mp4"
                controls
                autoPlay
                className="w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
}