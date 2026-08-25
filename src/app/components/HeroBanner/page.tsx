'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Play, X } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const HERO_SLIDES = [
  {
    id: 1,
    title: 'Premium Cubicles, Made to Last.',
    description: 'Designed with precision. With 500+ toilet cubicles installed at the Foxconn facility for Apple, our solutions bring together scale, precision, and dependable performance.',
    src: '/assets/hero_section_images/Apple-BKC-Mumbai-India-media-preview-hero_Full-Bleed-Image.jpg.slideshow-large.jpg.jpeg',
    alt: 'Apple BKC Architectural Showcase',
  },
  {
    id: 2,
    title: 'Where Design Meets Performance.',
    description: 'Built around performance. Delivered for Maruti Suzuki. With 4,000+ toilet cubicles installed at the Kadkhoda plant, our solutions are made for scale, precision, and demanding environments.',
    src: '/assets/hero_section_images/l53220260518130534.webp',
    alt: 'maruti suzuki',
  },
  {
    id: 5,
    title: 'Custom Cubicles for Every Space.',
    description: 'Designed for demanding footfall. Delivered across 50+ MCD & McDonald’s outlets, our toilet cubicles combine durability, hygiene, and consistent performance across every location.',
    src: '/assets/hero_section_images/McDonald-1.jpg.jpeg',
    alt: 'McDonald',
  },
  {
    id: 4,
    title: 'Built for Modern Washrooms.',
    description: 'Made for high-traffic environments. Our toilet cubicle solutions across KFC outlets are built for everyday performance, easy maintenance, and lasting durability.',
    src: '/assets/hero_section_images/KFC-opens-first-outlet-in-Mokokchung-plans-expansion-to-Wokha-and-Mon.webp',
    alt: 'KFC',
  },
];

interface TypewriterTextProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
  className?: string;
}

function TypewriterText({
  text,
  speed = 35,
  onComplete,
  className,
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    let timer: ReturnType<typeof setInterval>;

    setDisplayedText('');
    setIsTyping(true);

    timer = setInterval(() => {
      index += 1;

      setDisplayedText(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(timer);
        setIsTyping(false);
        onComplete?.();
      }
    }, speed);

    return () => {
      clearInterval(timer);
    };
  }, [text, speed, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      {isTyping && (
        <span className="ml-1 inline-block animate-pulse font-light">
          |
        </span>
      )}
    </span>
  );
}

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const currentSlide = HERO_SLIDES[activeSlideIndex] || HERO_SLIDES[0];

  const slideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleTypewriterComplete = useCallback(() => {
    if (slideTimerRef.current) {
      clearTimeout(slideTimerRef.current);
    }

    slideTimerRef.current = setTimeout(() => {
      swiperRef.current?.slideNext();
    }, 1800);
  }, []);

  useEffect(() => {
    return () => {
      if (slideTimerRef.current) {
        clearTimeout(slideTimerRef.current);
      }
    };
  }, []);

  const handleConsultation = () => {
    console.log("Book consultation clicked");
  };

  return (
    <>
      <section className="w-full bg-white text-black font-sans antialiased pt-2 sm:pt-3 lg:pt-4 pb-8 sm:pb-10 lg:pb-12">
        <div className="mx-auto max-w-[1750px] px-6 sm:px-10 lg:px-14 xl:px-12">

          {/* Top Sub-header */}
          {/* <div className="mb-2 sm:mb-3">
            <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.45em] text-gray-500 uppercase">
              Welcome to Megha
            </span>
          </div> */}

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-6xl lg:text-[68px] xl:text-[76px] font-semibold tracking-[-0.04em] text-black leading-[1.02] max-w-7xl">
            <TypewriterText
              key={`title-${activeSlideIndex}`}
              text={currentSlide.title}
              speed={45}
            />
          </h1>

          {/* Action Button & Description Row */}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 lg:gap-10">
            <button
              type="button"
              onClick={handleConsultation}
              className="inline-flex items-center justify-center gap-2.5 border border-black bg-transparent px-6 py-2.5 text-xs sm:text-sm font-medium text-black transition-all duration-200 hover:bg-black hover:text-white cursor-pointer w-fit shrink-0"
            >
              <span>Book a Free Consultation</span>
              <span className="text-sm leading-none">→</span>
            </button>

            {/* Typewritten Sub-description matching current slide */}
            <p className="max-w-3xl text-xs sm:text-sm leading-relaxed text-gray-500 min-h-[48px]">
              <TypewriterText
                key={`description-${activeSlideIndex}`}
                text={currentSlide.description}
                speed={12}
                onComplete={handleTypewriterComplete}
              />
            </p>
          </div>

          {/* Bottom Feature Grid */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-[21%_79%] xl:grid-cols-[20%_80%] gap-5 lg:gap-6 items-stretch">
            {/* <div onClick={() => setIsVideoOpen(true)}
              className="relative group/card bg-gradient-to-b from-[#f8f7f4] to-[#efeee9] border border-black/5 rounded-[22px] p-6 sm:p-7 lg:p-8 flex flex-col justify-between min-h-[320px] sm:min-h-[380px] lg:min-h-[440px] xl:min-h-[480px] shadow-sm hover:shadow-md transition-all duration-500 cursor-pointer overflow-hidden"
            >
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-blue-100/50 rounded-full blur-2xl group-hover/card:scale-150 transition-transform duration-700 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-black/80 group-hover/card:text-[#0d2461] transition-colors duration-300"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h3c0 4-2 6-4 6" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h3c0 4-2 6-4 6" />
                  </svg>

                  <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase px-3 py-1 bg-white/70 backdrop-blur-sm rounded-full border border-black/5 shadow-2xl">
                    SHOWREEL
                  </span>
                </div>

                <h2 className="mt-4 text-lg sm:text-xl lg:text-[22px] xl:text-[24px] font-semibold tracking-[-0.035em] text-black leading-[1.25]">
                  Well-designed spaces speak without words.
                </h2>
              </div>

              <div className="my-auto py-4 flex flex-col items-center justify-center">
                <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black text-white shadow-xl group-hover/card:scale-110 group-hover/card:bg-[#0d2461] transition-all duration-500">
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-white ml-1 transition-transform duration-300 group-hover/card:scale-110" />
                </div>
                <span className="mt-3 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-black/70 group-hover/card:text-[#0d2461] transition-colors">
                  Watch Showreel
                </span>
              </div>

              <div className="pt-2 flex items-end justify-between border-t border-black/5">
                <div>
                  <p className="text-sm sm:text-base font-semibold text-black tracking-tight">
                    Peter Bakar
                  </p>
                  <p className="text-xs text-gray-500 font-normal">
                    Founder of Megha Systems
                  </p>
                </div>
              </div>
            </div> */}

            <div className="relative group/card bg-gradient-to-b from-[#f8f7f4] to-[#efeee9] border border-black/5 rounded-[22px]  flex flex-col justify-between min-h-[320px] sm:min-h-[380px] lg:min-h-[440px] xl:min-h-[480px] shadow-sm hover:shadow-md transition-all duration-500 cursor-pointer overflow-hidden">
              <video
                src="https://www.shutterstock.com/shutterstock/videos/4000952735/preview/stock-footage-interior-of-a-public-restroom-in-japan-featuring-sinks-accessible-western-style-toilet-with-grab.webm"
                controls
                autoPlay
                className="w-full h-full object-fill"
              >
              </video>
            </div>

            {/* Right Showcase Banner Slider */}
            <div className="relative min-h-[320px] sm:min-h-[380px] lg:min-h-[440px] xl:min-h-[480px] w-full overflow-hidden rounded-[22px] shadow-sm group/slider">
              <Swiper
                modules={[EffectFade, Pagination]}
                effect="fade"
                loop={true}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                  setActiveSlideIndex(swiper.realIndex);
                }}
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