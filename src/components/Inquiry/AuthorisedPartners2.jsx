"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import Link from "next/link";

import "swiper/css";
import "swiper/css/free-mode";

const partners = [
  {
    name: "TESA",
    logo: "/assets/clients/14 (1).webp",
  },
  {
    name: "STYLAM",
    logo: "/assets/clients/15 (2).webp",
  },
  {
    name: "CENTURYPLY",
    logo: "/assets/clients/16 (2).webp",
  },
  {
    name: "CROWN",
    logo: "/assets/clients/17 (2).webp",
  },
  {
    name: "VIRGO",
    logo: "/assets/clients/18 (2).webp",
  },
  {
    name: "GREENPLY",
    logo: "/assets/clients/19 (1).webp",
  },
];

export default function AuthorisedPartners2() {
  return (
    <section className="overflow-hidden bg-[#f4f3ef] py-10 md:py-15">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-10 lg:px-15">

        {/* ================= HEADER ================= */}

        <div className="mx-auto mb-5 max-w-[760px] text-center md:mb-8">

          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.22em] text-neutral-500 md:text-xs">
            Authorised Channel Partner
          </span>

          <h2 className="text-[40px] font-medium leading-[0.95] tracking-[-0.045em] text-[#181818] sm:text-5xl md:text-6xl lg:text-[68px]">
            Partnered with

            <span className="mt-1 block text-neutral-400">
              Brands That Lead.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[650px] text-sm leading-6 text-neutral-600 md:text-[15px] md:leading-7">
            As an Authorised Channel Partner for leading brands,
            Megha Systems brings certified products, trusted
            materials, and professional expertise together to
            deliver reliable washroom solutions.
          </p>

        </div>

        {/* ================= DESKTOP GRID ================= */}

        <div className="hidden gap-4 md:grid md:grid-cols-3 xl:grid-cols-6">
          {partners.map((partner) => (
            <PartnerCard
              key={partner.name}
              partner={partner}
            />
          ))}
        </div>

        {/* ================= MOBILE SWIPER ================= */}

        <div className="md:hidden">
          <Swiper
            modules={[FreeMode]}
            spaceBetween={5}
            slidesPerView={2}
            freeMode={{
              enabled: true,
              sticky: false,
            }}
            grabCursor={true}
            className="!overflow-visible"
          >
            {partners.map((partner) => (
              <SwiperSlide
                key={partner.name}
                className="!h-auto"
              >
                <PartnerCard partner={partner} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}

/* =====================================================
   PARTNER CARD
===================================================== */

function PartnerCard({ partner }) {
  return (
    <div
      className="
        group
        relative
        flex
        h-[240px]
        flex-col
        overflow-hidden
        border
        border-[#deddd7]
        bg-white
        p-2
        transition-all
        duration-500

        hover:-translate-y-1
        hover:border-[#20201e]
        hover:shadow-[0_15px_40px_rgba(0,0,0,0.07)]

        md:h-[270px]
        md:p-6
      "
    >

      {/* ================= TOP ================= */}

      <div className="flex items-center justify-between">

        <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
          Authorised
        </span>

        <Link
          href="/inquiry"
          aria-label={`View ${partner.name}`}
          className="
            flex
            h-7
            w-7
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-neutral-200
            text-xs
            text-neutral-400
            transition-all
            duration-500
            group-hover:rotate-45
            group-hover:border-neutral-800
            group-hover:text-neutral-800
          "
        >
          ↗
        </Link>

      </div>

      {/* ================= LOGO ================= */}

      <div className="flex flex-1 items-center justify-center py-6">

        <img
          src={partner.logo}
          alt={`${partner.name} logo`}
          loading="lazy"
          className="
            block
            max-h-full
            max-w-full
            w-auto
            object-contain
            transition-all
            duration-500
            group-hover:scale-105
          "
        />

      </div>

      {/* ================= BOTTOM ================= */}

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

      {/* ================= HOVER LINE ================= */}

      <span
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          w-0
          bg-[#181818]
          transition-all
          duration-500
          group-hover:w-full
        "
      />

    </div>
  );
}