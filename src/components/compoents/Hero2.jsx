"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  memo,
} from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import PopupForm from "./PopupForm";



const NAVY = "#0B2A66";
const GOLD = "#D9A83A";


const HERO_SLIDES = [
  {
    id: 1,
    title: "Premium Cubicles, Made to Last.",
    highlight: "Made to Last.",
    description:
      "Designed with precision. With 500+ toilet cubicles installed at the Foxconn facility for Apple, our solutions bring together scale, precision, and dependable performance.",
    alt: "Apple BKC Architectural Showcase",
    tiles: [
      { label: "Classic Range", sub: "8 Products", icon: "door", src: "https://toiletcubiclemanufacturer.com/product/Black%20Maxi.webp" },
      { label: "Black Maxi", icon: "factory", src: "https://toiletcubiclemanufacturer.com/product/Maxi%20Pro.webp" },
      { label: "Maxi PRO", icon: "layers", src: "https://toiletcubiclemanufacturer.com/product/Duro-Toilet-Cubicles.webp" },
      { label: "Duro", icon: "shield", src: "https://toiletcubiclemanufacturer.com/product/duro%20pro%20toilet%20cubicles.webp" },
      { label: "NEO", icon: "clock", src: "https://toiletcubiclemanufacturer.com/product/Neo.webp" },
    ],
  },
  {
    id: 2,
    title: "Where Design Meets Performance.",
    highlight: "Performance.",
    description:
      "Built around performance. Delivered for Maruti Suzuki. With 4,000+ toilet cubicles installed at the Kadkhoda plant, our solutions are made for scale, precision, and demanding environments.",
    alt: "Maruti Suzuki",
    tiles: [
      { label: "Luxe Range", sub: "3 Products", icon: "door", src: "https://toiletcubiclemanufacturer.com/product/Cielo.webp" },
      { label: "Cielo", icon: "factory", src: "https://toiletcubiclemanufacturer.com/product/Premia.webp" },
      { label: "Premia", icon: "layers", src: "https://toiletcubiclemanufacturer.com/product/Rove.webp" },
      { label: "Rove", icon: "shield", src: "https://toiletcubiclemanufacturer.com/product/Maxi.webp" },
      { label: "Luron", icon: "clock", src: "https://toiletcubiclemanufacturer.com/product/Luron.webp" },
    ],
  },
  {
    id: 5,
    title: "Custom Cubicles for Every Space.",
    highlight: "Every Space.",
    description:
      "Designed for demanding footfall. Delivered across 50+ MCD & McDonald's outlets, our toilet cubicles combine durability, hygiene, and consistent performance across every location.",
    alt: "McDonald's",
    tiles: [
      { label: "Kids Range", sub: "3 Products", icon: "door", src: "https://toiletcubiclemanufacturer.com/product/Kiddiez.webp" },
      { label: "Kiddiez", icon: "factory", src: "https://toiletcubiclemanufacturer.com/product/Kiddiez%20Pro.webp" },
      { label: "Kiddiez Pro", icon: "layers", src: "https://toiletcubiclemanufacturer.com/product/kids2.webp" },
      { label: "Nylon Kiddiez", icon: "shield", src: "https://toiletcubiclemanufacturer.com/product/Cubi%20Doorz.webp" },
      { label: "Cubic Doorz", icon: "clock", src: "https://toiletcubiclemanufacturer.com/product/Duro-Toilet-Cubicles.webp" },
    ],
  },
  {
    id: 4,
    title: "Built for Modern Washrooms.",
    highlight: "Modern Washrooms.",
    description:
      "Made for high-traffic environments. Our toilet cubicle solutions across KFC outlets are built for everyday performance, easy maintenance, and lasting durability.",
    alt: "KFC",
    tiles: [
      { label: "Urinal Partitions", sub: "Modesty Panels", icon: "door", src: "https://toiletcubiclemanufacturer.com/product/Commercial%20Urinal%20Partitions.webp" },
      { label: "Maxi", icon: "factory", src: "https://toiletcubiclemanufacturer.com/product/Maxi.webp" },
      { label: "Duro Pro", icon: "layers", src: "https://toiletcubiclemanufacturer.com/product/duro%20pro%20toilet%20cubicles.webp" },
      { label: "Black Maxi", icon: "shield", src: "https://toiletcubiclemanufacturer.com/product/Black%20Maxi.webp" },
      { label: "Premia", icon: "clock", src: "https://toiletcubiclemanufacturer.com/product/Premia.webp" },
    ],
  },
];

const ICONS = {
  door: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M12 3v18M9 12h.01M15 12h.01" />
    </>
  ),
  factory: (
    <>
      <path d="M3 21V10l6 3V10l6 3V6h3v15H3Z" />
      <path d="M7 17h2M12 17h2" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
};

function Icon({ name, className = "", color = "currentColor" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {ICONS[name] || ICONS.door}
    </svg>
  );
}

function ArrowCircle({ bg, fg, className = "" }) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover/tile:translate-x-0.5 ${className}`}
      style={{ background: bg, color: fg }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-1/2 w-1/2"
        aria-hidden="true"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </span>
  );
}

/* =========================================================
   TYPEWRITER (supports a highlighted tail phrase)
========================================================= */

const TypewriterText = memo(function TypewriterText({
  text,
  speed = 35,
  onComplete,
  className = "",
  highlight,
  highlightColor,
}) {
  const [displayedText, setDisplayedText] = useState("");

  const frameRef = useRef(null);
  const lastTimeRef = useRef(0);
  const indexRef = useRef(0);

  useEffect(() => {
    indexRef.current = 0;
    lastTimeRef.current = 0;

    setDisplayedText("");

    const animate = (time) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = time;
      }

      const elapsed = time - lastTimeRef.current;

      if (elapsed >= speed) {
        const charactersToAdd = Math.max(1, Math.floor(elapsed / speed));

        indexRef.current = Math.min(
          indexRef.current + charactersToAdd,
          text.length
        );

        setDisplayedText(text.slice(0, indexRef.current));

        lastTimeRef.current = time;

        if (indexRef.current >= text.length) {
          frameRef.current = null;

          if (onComplete) {
            onComplete();
          }

          return;
        }
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [text, speed, onComplete]);

  const hlStart = highlight ? text.lastIndexOf(highlight) : -1;
  const before =
    hlStart >= 0 ? displayedText.slice(0, hlStart) : displayedText;
  const hl = hlStart >= 0 ? displayedText.slice(hlStart) : "";

  return (
    <span className={className}>
      {before}
      {hl && <span style={{ color: highlightColor }}>{hl}</span>}

      {displayedText.length < text.length && (
        <span className="ml-1 inline-block font-light opacity-70">|</span>
      )}
    </span>
  );
});

/* =========================================================
   CONSULTATION BUTTON
========================================================= */

const ConsultButton = memo(function ConsultButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        group
        relative
        inline-flex
        w-fit
        shrink-0
        cursor-pointer
        items-center
        justify-center
        gap-3
        overflow-hidden
        rounded-full
        py-2
        pl-6
        pr-2
        text-xs
        font-semibold
        tracking-wide
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:shadow-xl
        active:translate-y-0
        active:scale-[0.98]
        sm:text-sm
      "
      style={{
        background: `linear-gradient(135deg, ${NAVY} 0%, #12399A 100%)`,
        boxShadow: "0 10px 24px -8px rgba(11,42,102,.55)",
        border: `2px solid ${GOLD}`,
      }}
    >
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-y-0
          -left-1/3
          w-1/3
          -skew-x-12
          bg-white/25
          blur-md
          transition-transform
          duration-700
          group-hover:translate-x-[420%]
        "
      />

      <span className="relative">Book a Free Consultation</span>

      <span
        className="
          relative
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          text-sm
          font-bold
          leading-none
          transition-transform
          duration-300
          group-hover:translate-x-0.5
        "
        style={{ background: GOLD, color: NAVY }}
      >
        →
      </span>
    </button>
  );
});


function FeatureTile({ tile, priority }) {
  return (
    <div
      className="group/tile relative order-last col-span-2 flex min-h-0 flex-col overflow-hidden rounded-[18px] shadow-lg md:order-none md:col-span-1 md:row-span-2 md:rounded-[22px]"
      style={{
        background: `linear-gradient(160deg, ${NAVY} 0%, #0A2255 100%)`,
      }}
    >
      <div className="relative z-10 flex items-center gap-3 px-4 pt-4 sm:gap-4 sm:px-7 sm:pt-6">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/25 bg-white/5 text-white sm:h-14 sm:w-14">
          <Icon name={tile.icon} className="h-6 w-6 sm:h-7 sm:w-7" />
        </span>

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-lg font-bold text-white sm:text-2xl lg:text-3xl">
            {tile.label}
          </h3>
         
        </div>

        <ArrowCircle
          bg={GOLD}
          fg="#fff"
          className="h-10 w-10 sm:h-14 sm:w-14"
        />
      </div>

     <div className="relative z-10 mx-3 mb-3 mt-4 h-[200px] flex-none overflow-hidden rounded-xl bg-white/5 sm:mx-4 sm:mb-4 sm:mt-6 sm:h-[320px] md:h-auto md:min-h-0 md:flex-1">
  <Image
    src={tile.src}
    alt={tile.label}
    fill
    priority={priority}
    sizes="(max-width: 768px) 100vw, 900px"
    quality={75}
    className="object-cover"
  />
</div>
    </div>
  );
}

function SmallTile({ tile }) {
  return (
    <div className="group/tile relative flex min-h-0 flex-col overflow-hidden rounded-[16px] bg-white p-2.5 shadow-md ring-1 ring-black/5 sm:rounded-[20px] sm:p-4">
      <div className="flex items-start gap-2 sm:gap-3">
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 sm:h-11 sm:w-11"
          style={{ color: NAVY }}
        >
          <Icon name={tile.icon} className="h-4 w-4 sm:h-6 sm:w-6" />
        </span>

        <div className="min-w-0 flex-1 pt-0.5">
          <h3
            className="text-xs font-bold leading-tight sm:text-lg lg:text-xl"
            style={{ color: NAVY }}
          >
            {tile.label}
          </h3>
          <span
            className="mt-1 block h-[3px] w-6 rounded-full sm:mt-2 sm:w-9"
            style={{ background: GOLD }}
          />
        </div>

        <ArrowCircle
          bg={NAVY}
          fg="#fff"
          className="h-7 w-7 sm:h-10 sm:w-10"
        />
      </div>

      <div className="relative mt-2 min-h-[85px] flex-1 overflow-hidden rounded-lg sm:mt-3 sm:min-h-[220px] sm:rounded-xl">
        <Image
          src={tile.src}
          alt={tile.label}
          fill
          sizes="(max-width: 768px) 50vw, 450px"
          quality={75}
          className="object-cover"
        />

        {/* gold + navy corner accent */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-14 w-14 sm:h-24 sm:w-24"
          style={{
            background: GOLD,
            clipPath: "polygon(0 35%, 0 100%, 65% 100%)",
          }}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-14 w-14 sm:h-24 sm:w-24"
          style={{
            background: NAVY,
            clipPath: "polygon(0 62%, 0 100%, 38% 100%)",
          }}
        />
      </div>
    </div>
  );
}

/* =========================================================
   HERO COMPONENT
========================================================= */

export default function Hero2() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const swiperRef = useRef(null);
  const slideTimerRef = useRef(null);

  const currentSlide = HERO_SLIDES[activeSlideIndex] || HERO_SLIDES[0];

  const clearSlideTimer = useCallback(() => {
    if (slideTimerRef.current) {
      clearTimeout(slideTimerRef.current);
      slideTimerRef.current = null;
    }
  }, []);

  const handleTypewriterComplete = useCallback(() => {
    clearSlideTimer();

    slideTimerRef.current = setTimeout(() => {
      if (swiperRef.current && !swiperRef.current.destroyed) {
        swiperRef.current.slideNext();
      }
    }, 1800);
  }, [clearSlideTimer]);

  useEffect(() => {
    return () => {
      clearSlideTimer();
    };
  }, [clearSlideTimer]);

  const handleSlideChange = useCallback(
    (swiper) => {
      clearSlideTimer();
      setActiveSlideIndex(swiper.realIndex);
    },
    [clearSlideTimer]
  );

  const handleConsultation = useCallback(() => {
    setOpen(true);
  }, []);

  return (
    <>
      <section className="w-full bg-white pt-2 pb-8 font-sans text-black antialiased sm:pt-3 sm:pb-10 lg:pt-4 lg:pb-12">
        <div className="mx-auto w-full max-w-[1750px] px-4 lg:px-10">
          {/* DESKTOP CTA + DESCRIPTION */}
          <div className="mt-4 hidden items-center gap-5 sm:gap-8 md:flex lg:gap-10">
            <ConsultButton onClick={handleConsultation} />

            <p className="min-h-[48px] max-w-3xl text-xs leading-relaxed text-gray-500 sm:text-sm">
              <TypewriterText
                key={`description-${activeSlideIndex}`}
                text={currentSlide.description}
                speed={12}
                onComplete={handleTypewriterComplete}
              />
            </p>
          </div>

          {/* HERO SLIDER */}
          <div className="mt-5 grid items-stretch gap-4 sm:mt-8 md:gap-6">
            <div
              className="
                relative
                flex
                h-[880px]
                w-full
                flex-col
                overflow-hidden
                rounded-[22px]
                border
                border-slate-200/70
                shadow-sm
                md:h-[105vh]
                md:min-h-[860px]
              "
              style={{
                background:
                  "linear-gradient(180deg,#FFFFFF 0%,#F6F8FC 100%)",
              }}
            >
              {/* decorative diagonal stripes */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-0 z-0 h-8 w-12 sm:h-40 sm:w-80 lg:h-48 lg:w-[420px]"
              >
                <span
                  className="absolute inset-0"
                  style={{
                    background: GOLD,
                    clipPath: "polygon(35% 0, 78% 0, 43% 100%, 0 100%)",
                  }}
                />
                <span
                  className="absolute inset-0"
                  style={{
                    background: NAVY,
                    clipPath: "polygon(82% 0, 100% 0, 100% 80%, 66% 80%)",
                  }}
                />
              </div>

              {/* HEADER */}
              <div className="relative z-10 flex items-start justify-between px-5 pt-6 md:px-12 md:pt-8">
                <div>
                  <h1
                    className="grid max-w-full pr-10 text-3xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:max-w-[22ch] sm:pr-0 sm:text-5xl lg:text-[60px]"
                    style={{ color: NAVY }}
                  >
                    {/* invisible copies reserve the height of the longest title */}
                    {HERO_SLIDES.map((s) => (
                      <span
                        key={s.id}
                        aria-hidden="true"
                        className="invisible col-start-1 row-start-1"
                      >
                        {s.title}
                      </span>
                    ))}

                    {/* visible typewriter text sits on top in the same cell */}
                    <span className="col-start-1 row-start-1">
                      <TypewriterText
                        key={`title-${activeSlideIndex}`}
                        text={currentSlide.title}
                        speed={45}
                        highlight={currentSlide.highlight}
                        highlightColor={GOLD}
                      />
                    </span>
                  </h1>
                  {/* <span
                    className="mt-3 block h-1 w-16 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${NAVY} 50%, ${GOLD} 50%)`,
                    }}
                  /> */}
                </div>

                <div className="mr-[26rem] mt-4 hidden lg:block">
                 
                </div>
              </div>
    
              {/* SWIPER */}
              <Swiper
                modules={[EffectFade, Pagination]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                loop={true}
                speed={600}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                onSlideChange={handleSlideChange}
                className="hero-swiper relative z-10 mt-5 min-h-0 w-full flex-1"
              >
                {HERO_SLIDES.map((slide, index) => (
                  <SwiperSlide key={slide.id} className="!h-full">
                    <div
                      role="group"
                      aria-label={slide.alt}
                      className="
                        grid
                        h-full
                        grid-cols-2
                        grid-rows-[auto_auto_auto]
                        gap-3
                        px-4
                        pb-10
                        sm:gap-4
                        md:grid-cols-[1.7fr_1fr_1fr]
                        md:grid-rows-2
                        md:px-12
                      "
                    >
                      <FeatureTile
                        tile={slide.tiles[0]}
                        priority={index === 0}
                      />
                      {slide.tiles.slice(1).map((tile, i) => {
                        /* Use the real product images from the other slides
                           so each card on a slide shows a different photo. */
                        const pool = HERO_SLIDES.map((s) => s.tiles[0].src);
                        const src = pool[(index + i + 1) % pool.length];

                        return (
                          <SmallTile
                            key={`${slide.id}-${i}`}
                            tile={{ ...tile, src }}
                          />
                        );
                      })}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE CTA + DESCRIPTION */}
      <div className="flex flex-col gap-5 bg-white px-5 py-5 md:hidden">
        <ConsultButton onClick={handleConsultation} />

        <p className="min-h-[48px] max-w-3xl text-xs leading-relaxed text-gray-500 sm:text-sm">
          <TypewriterText
            key={`mobile-description-${activeSlideIndex}`}
            text={currentSlide.description}
            speed={12}
            onComplete={handleTypewriterComplete}
          />
        </p>
      </div>

      {/* POPUP */}
      <PopupForm isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}