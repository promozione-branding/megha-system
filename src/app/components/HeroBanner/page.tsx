'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

import Image from 'next/image';

import { ArrowUpRight, Play, X } from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

import 'swiper/css/effect-fade';

import 'swiper/css/pagination';

import PopupForm from '@/components/PopupForm';

import Link from 'next/link';


const HERO_SLIDES = [

  {
    id: 1,
    title: 'Premium Cubicles, Made to Last.',
    description:
      'Designed with precision. With 500+ toilet cubicles installed at the Foxconn facility for Apple, our solutions bring together scale, precision, and dependable performance.',
    // src: '/assets/hero_section_images/Apple-BKC-Mumbai-India-media-preview-hero_Full-Bleed-Image.jpg.slideshow-large.jpg.jpeg',
    src:"/appleNew.webp",
    alt: 'Apple BKC Architectural Showcase',
  },

  {
    id: 2,
    title: 'Where Design Meets Performance.',
    description:
      'Built around performance. Delivered for Maruti Suzuki. With 4,000+ toilet cubicles installed at the Kadkhoda plant, our solutions are made for scale, precision, and demanding environments.',
    // src: '/assets/hero_section_images/l53220260518130534.webp',
    src:"/marutiNew.webp",
    alt: 'maruti suzuki',
  },

  {
    id: 5,
    title: 'Custom Cubicles for Every Space.',
    description:
      'Designed for demanding footfall. Delivered across 50+ MCD & McDonald’s outlets, our toilet cubicles combine durability, hygiene, and consistent performance across every location.',
    // src: '/assets/hero_section_images/McDonald-1.jpg.jpeg',
    src:"/mcdNew.webp",
    alt: 'McDonald',
  },

  {
    id: 4,
    title: 'Built for Modern Washrooms.',
    description:
      'Designed for scale and precision. 650+ toilet cubicles installed at OPPO’s Kasna factory, delivering durability, functionality, and dependable performance.',
    src:  "/oppoNew.webp",
    alt: 'Oppo',
  },

];


const projects = [

   {
    id: 2,
    image: "/hero2/foxconn.webp",
    logo: '/assets/clients/Apple (2).webp',
    title: "Manufacturing Facility",
    stats: "Premium Restroom Solutions",
    description:
      "500+ toilet cubicles installed at the Foxconn facility for Apple",
    button: "View Project",
    href: "#",
  },

  {
    id: 1,
    image: "/hero2/marutiDoor.webp",
    logo: '/assets/clients/maruti.webp',
    title: "Kharkhoda Plant",
    stats: "2,000+ Toilet Cubicles Installed",
    description:
      "Built around performance. Delivered for Maruti Suzuki.",
    button: "View Project",
    href: "#",
  },

 

  {
    id: 3,
   image: "/hero2/mcd.webp",
    logo: '/assets/clients/mag.webp',
    title: "Multiple Locations",
    stats: "Hygienic. Stylish. Durable.",
    description:
      "Restroom cubicle solutions across multiple outlets pan India.",
    button: "View Project",
    href: "#",
  },

  {
    id: 4,
   image: "/hero2/oppo.webp",
    logo:  "/hero2/oppoLogo.webp",
    title: "Corporate Office",
    stats: "500+ Cubicles Installed",
    description:
      "Premium restroom partitions designed for modern corporate spaces.",
    button: "View Project",
    href: "#",
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

  const currentSlide =
    HERO_SLIDES[activeSlideIndex] || HERO_SLIDES[0];

  const slideTimerRef =
    useRef<ReturnType<typeof setTimeout> | null>(null);


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
    setOpen(true);
  };


  const videoRef = useRef<HTMLVideoElement>(null);

  const [open, setOpen] = useState(false);


  useEffect(() => {

    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }

  }, []);


  return (

    <>

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="w-full bg-white text-black font-sans antialiased pt-2 sm:pt-3 lg:pt-4 pb-4 sm:pb-5 lg:pb-3">

        <div className="mx-auto max-w-[1750px] px-4 lg:px-10">


          {/* Top Sub-header */}

          {/* 
          <div className="mb-2 sm:mb-3">

            <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.45em] text-gray-500 uppercase">
              Welcome to Megha
            </span>

          </div>
          */}


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

              <span>
                Book a Free Consultation
              </span>

              <span className="text-sm leading-none">
                →
              </span>

            </button>


            {/* Typewritten Sub-description */}

            <p className="max-w-3xl text-xs sm:text-[17px] leading-relaxed text-gray-800 min-h-[48px]">

              <TypewriterText
                key={`description-${activeSlideIndex}`}
                text={currentSlide.description}
                speed={12}
                onComplete={handleTypewriterComplete}
              />

            </p>

          </div>


          {/* =====================================================
              BOTTOM FEATURE GRID
          ===================================================== */}

          <div className="mt-5 sm:mt-8 grid grid-cols-1 lg:grid-cols-[20%_80%] gap-4 md:gap-6 items-stretch">


            {/* DESKTOP VIDEO */}

            <div className="relative lg:flex hidden group/card bg-linear-to-b from-[#f8f7f4] to-[#efeee9] border border-black/5 rounded-[22px] flex-col justify-between shadow-sm hover:shadow-md transition-all duration-500 cursor-pointer overflow-hidden">

              <video
                ref={videoRef}
                src="/assets/video/meg (1).mp4"
                 autoPlay
  muted
  loop
  playsInline
  preload="auto"
                className="w-full h-full object-fill"
              />

            </div>


            {/* MOBILE VIDEO */}

            <div className="relative lg:hidden flex group/card bg-linear-to-b from-[#f8f7f4] to-[#efeee9] border border-black/5 rounded-[22px] flex-col justify-between shadow-sm hover:shadow-md transition-all duration-500 cursor-pointer overflow-hidden">

              <video
                ref={videoRef}
                src="/assets/video/CLIP 4 COMPRESSED.mp4"
                 autoPlay
  muted
  loop
  playsInline
  preload="auto"
                className="w-full h-full object-fill"
              />

            </div>


            {/* RIGHT SHOWCASE BANNER SLIDER */}

            <div className="relative min-h-[320px] sm:min-h-[380px] lg:min-h-[440px] xl:min-h-[480px] w-full overflow-hidden rounded-[22px] shadow-sm group/slider">

              <Swiper
                modules={[EffectFade, Pagination]}
                effect="fade"
                speed={800}
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

                  <SwiperSlide
                    key={slide.id}
                    className="relative w-full h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[440px] xl:min-h-[480px]"
                  >

                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      priority={slide.id === 1}
                      className="object-fill object-center"
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


      {/* =====================================================
          POPUP FORM
      ===================================================== */}

      <PopupForm
        isOpen={open}
        onClose={() => setOpen(false)}
      />


      {/* =====================================================
          VIDEO MODAL
      ===================================================== */}

      {isVideoOpen && (

        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-300">

          <div className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">


            {/* Modal Header */}

            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-gradient-to-r from-[#0d2461] to-black">

              <div className="flex items-center gap-2.5">

                <div className="w-2.5 h-2.5 rounded-full bg-[#f5bd24] animate-pulse" />

                <span className="text-xs font-semibold uppercase tracking-wider text-white">
                  Megha Systems — Brand Showreel
                </span>

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
                
                autoPlay
                className="w-full h-full object-contain"
              >

                Your browser does not support the video tag.

              </video>

            </div>

          </div>

        </div>

      )}


      {/* =====================================================
          PROJECT SHOWCASE
      ===================================================== */}

      <section className="w-full bg-white py-6 md:py-5">

        <div className="mx-auto max-w-[1750px] px-5 md:px-8">


          {/* =================================================
              DESKTOP
              1200px+
              
              REAL CSS GRID
              4 COLUMNS
              NO SWIPER
              NO AUTOPLAY
          ================================================= */}

          <div className="hidden  min-[1200px]:grid grid-cols-4 gap-[18px]">

            {projects.map((project) => (

              <ProjectCard
                key={project.id}
                project={project}
              />

            ))}

          </div>


          {/* =================================================
              TABLET + MOBILE
              BELOW 1200px

              SWIPER ENABLED
          ================================================= */}

          <div className="block min-[1200px]:hidden">


            <Swiper
              modules={[Autoplay, Navigation]}

               speed={2000}
                loop={true}

              spaceBetween={18}


              

              autoplay={{
                
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}


              navigation={{
                prevEl: ".project-prev",
                nextEl: ".project-next",
              }}


              breakpoints={{

                

                0: {
                  slidesPerView: 1,
                  spaceBetween: 14,
                },



                768: {
                  slidesPerView: 3,
                  spaceBetween: 18,
                },

              }}


              className="w-full !overflow-hidden"
            >


              {projects.map((project) => (

                <SwiperSlide key={project.id}>

                  <ProjectCard
                    project={project}
                  />

                </SwiperSlide>

              ))}


            </Swiper>


            {/* =================================================
                SLIDER NAVIGATION
            ================================================= */}

            

          </div>

        </div>

      </section>

    </>

  );

}


/* ============================================================
   PROJECT CARD
============================================================ */

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {

  return (

    <article className="group relative h-[250px]  md:h-[230px] overflow-hidden rounded-[12px] border border-[#e5e5e5] bg-white shadow-[0_3px_15px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(0,0,0,0.10)]">


      <div className="flex h-full">


        {/* =================================================
            IMAGE
        ================================================= */}

        <div className="relative h-full w-[43%] shrink-0 overflow-hidden">

          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="220px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />


          {/* Image overlay */}

          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/[0.04]" />

        </div>


        {/* =================================================
            CONTENT
        ================================================= */}

        <div className="flex min-w-0 flex-1 flex-col justify-between px-4 py-4">


          <div>


            {/* LOGO */}

            <div className="mb-3 flex h-[40px] items-center">

              <Image
                src={project.logo}
                alt={`${project.title} logo`}
                width={100}
                height={30}
                className="max-h-[30px] w-auto max-w-[105px] object-contain object-left"
              />

            </div>


            {/* TITLE */}

            <h3 className="text-[17px] font-semibold leading-tight text-[#202020]">
              {project.title}
            </h3>


            {/* STAT */}

            {/* <p className="mt-1.5 text-[10.5px] font-medium leading-[1.35] text-[#333]">
              {project.stats}
            </p> */}


            {/* DESCRIPTION */}

            <p className="mt-2 line-clamp-3 text-[13px] text-[9.5px] leading-[1.5] text-[#777]">
              {project.description}
            </p>


          </div>


          {/* =================================================
              CTA
          ================================================= */}

          <Link
            href="/projects"
            className="mt-2 inline-flex w-fit  items-center gap-1.5 rounded-[5px] border border-[#d8d8d8] bg-white px-3 py-1.5 text-[13px] font-medium text-[#222] transition-all duration-300 hover:border-[#222] hover:bg-[#222] hover:text-white"
          >

            {project.button}

            <ArrowUpRight
              size={11}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]"
            />

          </Link>


        </div>

      </div>

    </article>

  );

}