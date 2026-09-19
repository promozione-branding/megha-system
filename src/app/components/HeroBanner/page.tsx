
'use client';

import React, {
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ArrowUpRight, X } from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from 'swiper/modules';

import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import PopupForm from '@/components/PopupForm';

/* ============================================================
   HERO DATA
============================================================ */

const HERO_SLIDES = [
  {
    id: 1,
    title: 'Premium Cubicles, Made to Last.',
    description:
      'Designed with precision. With 500+ toilet cubicles installed at the Foxconn facility for Apple, our solutions bring together scale, precision, and dependable performance.',
    src: '/foxconnF.webp',
    mobileSrc: '/appleMF.webp',
    alt: 'Apple BKC Architectural Toilet Cubicle Showcase',
  },

  {
    id: 2,
    title: 'Where Design Meets Performance.',
    description:
      'Built around performance. Delivered for Maruti Suzuki. With 4,000+ toilet cubicles installed at the Kadkhoda plant, our solutions are made for scale, precision, and demanding environments.',
    src: '/marutiF.webp',
    mobileSrc: '/marutiMF.webp',
    alt: 'Maruti Suzuki  Toilet Cubicle Partition',
  },

  {
    id: 5,
    title: 'Custom Cubicles for Every Space.',
    description:
      'Designed for demanding footfall. Delivered across 50+ MCD & McDonald’s outlets, our toilet cubicles combine durability, hygiene, and consistent performance across every location.',
    src: '/MCDF.webp',
    mobileSrc: '/mcdMF.webp',
    alt: 'McDonald Toilet Cubicle ',
  },

  {
    id: 4,
    title: 'Built for Modern Washrooms.',
    description:
      'Designed for scale and precision. 650+ toilet cubicles installed at OPPO’s Kasna factory, delivering durability, functionality, and dependable performance.',
    src: '/OppoF.webp',
    mobileSrc: '/oppoMF.webp',
    alt: 'Oppo Toilet Cubicle',
  },
] as const;

/* ============================================================
   PROJECT DATA
============================================================ */

const projects = [
  {
    id: 2,
    image: '/hero2/foxconn.webp',
    logo: '/assets/clients/Apple (2).webp',
    title: 'Manufacturing Facility',
    alt:"Apple Toilet Cubicle Partition",
    stats: 'Premium Restroom Solutions',
    description:
      '500+ toilet cubicles installed at the Foxconn facility for Apple',
    button: 'View Project',
  },

  {
    id: 1,
    image: '/hero2/marutiDoor.webp',
    logo: '/assets/clients/maruti.webp',
    alt:"Maruti Suzuki Toilet Cubicle Partition",
    title: 'Kharkhoda Plant',
    stats: '2,000+ Toilet Cubicles Installed',
    description:
      'Built around performance. Delivered for Maruti Suzuki.',
    button: 'View Project',
  },

  {
    id: 3,
    image: '/hero2/mcd.webp',
    logo: '/assets/clients/mag.webp',
    alt:"McDonald Toilet Cubicle Partition",
    title: 'Multiple Locations',
    stats: 'Hygienic. Stylish. Durable.',
    description:
      'Restroom cubicle solutions across multiple outlets pan India.',
    button: 'View Project',
  },

  {
    id: 4,
    image: '/hero2/oppo.webp',
    logo: '/hero2/oppoLogo.webp',
    title: 'Corporate Office',
    alt:"Oppo Toilet Cubicle Partition",
    stats: '500+ Cubicles Installed',
    description:
      'Premium restroom partitions designed for modern corporate spaces.',
    button: 'View Project',
  },
] as const;

/* ============================================================
   TYPEWRITER
   Optimized with timeout instead of setInterval.
============================================================ */

interface TypewriterTextProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
  className?: string;
}

const TypewriterText = memo(function TypewriterText({
  text,
  speed = 35,
  onComplete,
  className,
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const completeRef = useRef(onComplete);

  useEffect(() => {
    completeRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    let index = 0;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    setDisplayedText('');

    const typeNext = () => {
      index += 1;

      setDisplayedText(text.slice(0, index));

      if (index < text.length) {
        timeoutId = setTimeout(typeNext, speed);
      } else {
        completeRef.current?.();
      }
    };

    if (text.length > 0) {
      timeoutId = setTimeout(typeNext, speed);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [text, speed]);

  const isTyping = displayedText.length < text.length;

  return (
    <span className={className}>
      {displayedText}

      {isTyping && (
        <span
          className="ml-1 inline-block font-light"
          aria-hidden="true"
        >
          |
        </span>
      )}
    </span>
  );
});

/* ============================================================
   PROJECT CARD
============================================================ */

interface ProjectCardProps {
  project: (typeof projects)[number];
}

const ProjectCard = memo(function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <article
      className="
        group relative h-[250px] md:h-[230px]
        overflow-hidden rounded-[12px]
        border border-[#e5e5e5]
        bg-white
        shadow-[0_3px_15px_rgba(0,0,0,0.04)]
        transition-transform duration-300
        hover:-translate-y-1
        hover:shadow-[0_12px_35px_rgba(0,0,0,0.10)]
      "
    >
      <div className="flex h-full">
        {/* IMAGE */}

        <div className="relative h-full w-[43%] shrink-0 overflow-hidden">
          <Image
            src={project.image}
            alt={project.alt}
            fill
            sizes="(max-width: 767px) 43vw, 220px"
            loading="lazy"
            className="
              object-cover
              transition-transform
              duration-500
              ease-out
              group-hover:scale-[1.04]
            "
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/[0.04]" />
        </div>

        {/* CONTENT */}

        <div className="flex min-w-0 flex-1 flex-col justify-between px-4 py-4">
          <div>
            {/* LOGO */}

            <div className="mb-3 flex h-[40px] items-center">
              <Image
                src={project.logo}
                alt={`${project.title} logo`}
                width={100}
                height={30}
                loading="lazy"
                className="
                  max-h-[30px]
                  w-auto
                  max-w-[105px]
                  object-contain
                  object-left
                "
              />
            </div>

            {/* TITLE */}

            <h3 className="text-[17px] font-semibold leading-tight text-[#202020]">
              {project.title}
            </h3>

            {/* DESCRIPTION */}

            <p className="mt-2 line-clamp-3 text-[9.5px] leading-[1.5] text-[#777]">
              {project.description}
            </p>
          </div>

          {/* CTA */}

          <Link
            href="/projects"
            className="
              mt-2 inline-flex w-fit
              items-center gap-1.5
              rounded-[5px]
              border border-[#d8d8d8]
              bg-white
              px-3 py-1.5
              text-[13px]
              font-medium
              text-[#222]
              transition-colors
              duration-200
              hover:border-[#222]
              hover:bg-[#222]
              hover:text-white
            "
          >
            {project.button}

            <ArrowUpRight
              size={11}
              strokeWidth={1.8}
              className="
                transition-transform
                duration-200
                group-hover:-translate-y-[1px]
                group-hover:translate-x-[1px]
              "
            />
          </Link>
        </div>
      </div>
    </article>
  );
});

/* ============================================================
   HERO SECTIONp;
============================================================ */

export default function HeroSection() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const swiperRef = useRef<SwiperType | null>(null);
  const slideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentSlide =
    HERO_SLIDES[activeSlideIndex] ?? HERO_SLIDES[0];

  /* ==========================================================
     TYPEWRITER COMPLETE
  ========================================================== */

  const handleTypewriterComplete = useCallback(() => {
    if (slideTimerRef.current) {
      clearTimeout(slideTimerRef.current);
    }

    slideTimerRef.current = setTimeout(() => {
      swiperRef.current?.slideNext();
    }, 1800);
  }, []);

  /* ==========================================================
     CLEANUP
  ========================================================== */

  useEffect(() => {
    return () => {
      if (slideTimerRef.current) {
        clearTimeout(slideTimerRef.current);
      }
    };
  }, []);

  /* ==========================================================
     CONSULTATION
  ========================================================== */

  const handleConsultation = useCallback(() => {
    setOpen(true);
  }, []);

  /* ==========================================================
     VIDEO MODAL CLOSE
  ========================================================== */

  const handleCloseVideo = useCallback(() => {
    setIsVideoOpen(false);
  }, []);

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          w-full
          bg-white
          font-sans
          antialiased
          pt-2 sm:pt-3 lg:pt-4
          pb-4 sm:pb-5 lg:pb-3
        "
      >
        <div className="mx-auto max-w-[1750px] px-4 lg:px-10">
          {/* MAIN HEADLINE */}

          <h2
            className="
              max-w-7xl
              text-3xl
              font-semibold
              leading-[1.02]
              tracking-[-0.04em]
              text-black
              sm:text-6xl
              lg:text-[68px]
              xl:text-[76px]
            "
          >
            <TypewriterText
              key={`title-${activeSlideIndex}`}
              text={currentSlide.title}
              speed={45}
            />
          </h2>

          {/* ACTION + DESCRIPTION */}

          <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8 lg:gap-10">
            <button
              type="button"
              onClick={handleConsultation}
              className="
                inline-flex
                w-fit
                shrink-0
                cursor-pointer
                items-center
                justify-center
                gap-2.5
                border
                border-black
                bg-transparent
                px-6
                py-2.5
                text-xs
                font-medium
                text-black
                transition-colors
                duration-200
                hover:bg-black
                hover:text-white
                sm:text-sm
              "
            >
              <span>Book a Free Consultation</span>

              <span className="text-sm leading-none">
                →
              </span>
            </button>

            <p
              className="
                min-h-[48px]
                max-w-3xl
                text-xs
                leading-relaxed
                text-gray-800
                sm:text-[17px]
              "
            >
              <TypewriterText
                key={`description-${activeSlideIndex}`}
                text={currentSlide.description}
                speed={12}
                onComplete={handleTypewriterComplete}
              />
            </p>
          </div>

          {/* =================================================
              BOTTOM FEATURE GRID
          ================================================= */}

          <div
            className="
              mt-5
              grid
              grid-cols-1
              items-stretch
              gap-4
              md:gap-6
              lg:grid-cols-[20%_80%]
              sm:mt-8
            "
          >
            {/* =================================================
                DESKTOP VIDEO
            ================================================= */}

            <div
              className="
                relative
                hidden
                overflow-hidden
                rounded-[22px]
                border
                border-black/5
                bg-[#f4f3ef]
                shadow-sm
                lg:flex
              "
            >
              <video
                src="/assets/video/meg (1).mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
                aria-hidden="true"
              />
            </div>

            {/* =================================================
                MOBILE VIDEO
            ================================================= */}

            <div
              className="
                relative
                flex
                overflow-hidden
                rounded-[22px]
                border
                border-black/5
                bg-[#f4f3ef]
                shadow-sm
                lg:hidden
              "
            >
              <video
                src="/assets/video/CLIP 4 COMPRESSED.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
                aria-hidden="true"
              />
            </div>

            {/* =================================================
                HERO SLIDER
            ================================================= */}

            <div
              className="
                relative
                min-h-[320px]
                w-full
                overflow-hidden
                rounded-[22px]
                shadow-sm
                sm:min-h-[380px]
                lg:min-h-[440px]
                xl:min-h-[480px]
              "
            >
              <Swiper
                modules={[EffectFade, Pagination]}
                effect="fade"
                fadeEffect={{
                  crossFade: true,
                }}
                speed={650}
                loop
                watchSlidesProgress
                pagination={{
                  clickable: true,
                }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                  setActiveSlideIndex(swiper.realIndex);
                }}
                className="hero-swiper h-full w-full text-white"
              >
                {HERO_SLIDES.map((slide, index) => (
                  <SwiperSlide
                    key={slide.id}
                    className="
                      relative
                      h-[200px]
                      w-full
                      sm:min-h-[380px]
                      lg:min-h-[440px]
                      xl:min-h-[480px]
                    "
                  >
                    {/* DESKTOP IMAGE */}

                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      priority={index === 0}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      sizes="
                        (max-width: 767px) 0px,
                        (max-width: 1199px) 80vw,
                        80vw
                      "
                      className="
                        hidden
                        object-cover
                        object-center
                        md:block
                      "
                    />

                    {/* MOBILE IMAGE */}

                    <Image
                      src={slide.mobileSrc}
                      alt={slide.alt}
                      fill
                      priority={index === 0}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      sizes="100vw"
                      className="
                        object-cover
                        object-center
                        md:hidden
                      "
                    />

                    {/* OVERLAY */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/30
                        via-transparent
                        to-transparent
                      "
                    />
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
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/80
            p-4
            sm:p-6
          "
        >
          <div
            className="
              relative
              w-full
              max-w-5xl
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-black
              shadow-2xl
            "
          >
            {/* HEADER */}

            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-white/10
                bg-gradient-to-r
                from-[#0d2461]
                to-black
                px-6
                py-4
              "
            >
              <div className="flex items-center gap-2.5">
                <div className="h-2.5 w-2.5 rounded-full bg-[#f5bd24]" />

                <span
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-white
                  "
                >
                  Megha Systems — Brand Showreel
                </span>
              </div>

              <button
                type="button"
                onClick={handleCloseVideo}
                className="
                  cursor-pointer
                  rounded-full
                  bg-white/10
                  p-1.5
                  text-white
                  transition-colors
                  hover:bg-white/20
                "
                aria-label="Close video"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* VIDEO */}

            <div className="relative aspect-video w-full bg-black">
              <video
                src="/assets/video/video_1.mp4"
                autoPlay
                controls
                playsInline
                preload="metadata"
                className="h-full w-full object-contain"
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
              DESKTOP GRID
          ================================================= */}

          <div className="hidden min-[1200px]:grid grid-cols-4 gap-[18px]">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>

          {/* =================================================
              TABLET + MOBILE
          ================================================= */}

          <div className="block min-[1200px]:hidden">
            <Swiper
              modules={[Autoplay, Navigation]}
              speed={1000}
              loop
              spaceBetween={18}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                prevEl: '.project-prev',
                nextEl: '.project-next',
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
                  <ProjectCard project={project} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

