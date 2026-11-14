"use client";

import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const partners = [
  { name: "TESA", logo: "/assets/clients/14 (1).webp" },
  { name: "STYLAM", logo: "/assets/clients/15 (2).webp" },
  { name: "CENTURYPLY", logo: "/assets/clients/16 (2).webp" },
  { name: "CROWN", logo: "/assets/clients/17 (2).webp" },
  { name: "VIRGO", logo: "/assets/clients/18 (2).webp" },
  { name: "GREENPLY", logo: "/assets/clients/19 (1).webp" },
];

export default function AuthorisedPartners2() {
  return (
    <section
      className="overflow-hidden bg-[#f4f3ef] py-10 md:py-14"
      aria-labelledby="partners-heading"
    >
      <div className="mx-auto w-full px-4 sm:px-6 md:px-10 lg:px-15">
        {/* Header */}
        <header className="mx-auto mb-6 max-w-[760px] text-center md:mb-8">
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.22em] text-neutral-500 md:text-xs">
            Authorised Channel Partner
          </span>

          <h2
            id="partners-heading"
            className="text-[40px] font-medium leading-[0.95] tracking-[-0.045em] text-[#181818] sm:text-5xl md:text-6xl lg:text-[68px]"
          >
            Partnered with
            <span className="mt-1 block text-neutral-400">
              Brands That Lead.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[650px] text-sm leading-6 text-neutral-600 md:text-[15px] md:leading-7">
            As an Authorised Channel Partner for leading brands, Megha Systems
            brings certified products, trusted materials, and professional
            expertise together to deliver reliable washroom solutions.
          </p>
        </header>

        {/* Partners Slider */}
        <Swiper
          modules={[Autoplay]}
          loop
          speed={4500}
          slidesPerView={2}
          spaceBetween={10}
          allowTouchMove
          grabCursor
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2.5,
              spaceBetween: 12,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 14,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
          }}
          className="partners-swiper"
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={partner.name} className="!h-auto">
              <PartnerCard
                partner={partner}
                priority={index < 2}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          .partners-swiper .swiper-wrapper {
            transform: none !important;
            transition-duration: 0ms !important;
          }
        }
      `}</style>
    </section>
  );
}

/* =====================================================
   PARTNER CARD
===================================================== */

const PartnerCard = memo(function PartnerCard({ partner, priority }) {
  return (
    <article className="group relative flex h-[240px] w-full flex-col overflow-hidden border border-[#deddd7] bg-white p-3 transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-[#20201e] hover:shadow-[0_15px_40px_rgba(0,0,0,0.07)] md:h-[320px] md:p-6">
      {/* Top */}
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
          Authorised
        </span>

        <Link
          href="/"
          aria-label={`View ${partner.name}`}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-xs text-neutral-400 transition-[transform,border-color,color] duration-500 group-hover:rotate-45 group-hover:border-neutral-800 group-hover:text-neutral-800"
        >
          ↗
        </Link>
      </div>

      {/* Logo */}
      <div className="relative flex flex-1 items-center justify-center py-6">
        <div className="relative h-[110px] w-[85%] md:h-[170px]">
          <Image
            src={partner.logo}
            alt={`${partner.name} logo`}
            fill
            priority={priority}
            sizes="(max-width: 639px) 38vw, (max-width: 767px) 32vw, (max-width: 1023px) 22vw, 20vw"
            className="object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-neutral-100 pt-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-sm font-medium tracking-tight text-[#181818] md:text-base">
            {partner.name}
          </h3>

          <span className="text-[9px] uppercase tracking-[0.15em] text-neutral-400">
            Partner
          </span>
        </div>
      </div>

      {/* Hover Line */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#181818] transition-[width] duration-500 group-hover:w-full"
      />
    </article>
  );
});