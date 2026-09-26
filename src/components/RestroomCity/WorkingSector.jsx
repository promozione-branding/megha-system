"use client";

import React from "react";
import {
  School,
  Hotel,
  ShoppingBag,
  Hospital,
  Landmark,
  Plane,
  ArrowUpRight,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const sectors = [
  {
    icon: School,
    title: "Schools & Institutions",
    items: [
      "Toilet Partitions for Schools",
      "Bathroom Partitions for Kindergarten",
      "Toilet Partitions for Colleges / Institutes",
      "Washroom Partitions for Hostels",
    ],
  },
  {
    icon: Hotel,
    title: "Hotels & Hospitality",
    items: [
      "Toilet Partitions for Hotels & Restaurants",
      "Restroom Partitions for Club House",
      "Washroom Partitions for Resorts & Beaches",
      "Washroom Partitions for Banquets",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Malls & Retail",
    items: [
      "Restroom Partitions for Malls",
      "Bathroom Partitions for Shops",
      "Washroom Partitions for Cinema",
      "Washroom Partitions for Theater",
    ],
  },
  {
    icon: Hospital,
    title: "Healthcare",
    items: [
      "Bathroom Partitions for Hospitals",
      "Restroom Partitions for Laboratories",
      "Washroom Partitions for Healthcare",
    ],
  },
  {
    icon: Landmark,
    title: "Banks & Corporate",
    items: [
      "Toilet Cubicle Partitions for Banks",
      "Bathroom Partitions for Corporate Offices",
      "Washroom Partitions for Commercial Buildings",
    ],
  },
  {
    icon: Plane,
    title: "Transport Hubs",
    items: [
      "Restroom Cubicle Partitions for Airports",
      "Bathroom Partitions for Railway Stations",
      "Washroom Partitions for Metro Stations",
    ],
  },
];

export default function WorkingSector({ city }) {
  return (
    <section className="relative overflow-hidden bg-[#f7f8fa] py-8 md:py-13">

      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-[#0d2461]/5 blur-[100px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#f5bd24]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">

        {/* HEADER */}
        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex items-center rounded-full border border-[#0d2461]/10 bg-[#0d2461]/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0d2461]">
            Applications
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#0d2461] sm:text-4xl lg:text-5xl">
            Sectors Where to Use Toilet Cubicle Projects in{" "}
            <span className="text-[#f5bd24]">{city}</span>
          </h2>

        </div>

        {/* SWIPER */}
        <div className="mt-10">
<Swiper
  modules={[Autoplay]}
  spaceBetween={16}
  slidesPerView={1}
  loop={true}
  speed={700}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  breakpoints={{
    768: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  }}
  className="!overflow-hidden"
>
            {sectors.map((sector, index) => {
              const Icon = sector.icon;

              return (
                <SwiperSlide key={sector.title} className="!h-auto">

                  <div className="group relative flex h-full  flex-col overflow-hidden rounded-[24px] border border-[#0d2461]/10 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#0d2461]/20 hover:shadow-xl sm:p-6">

                    {/* TOP */}
                    <div className="flex items-start justify-between gap-3">

                      {/* ICON */}
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0d2461]/5 text-[#0d2461] transition-all duration-500 group-hover:bg-[#0d2461] group-hover:text-white sm:h-16 sm:w-16">
                        <Icon
                          className="h-7 w-7 sm:h-8 sm:w-8"
                          strokeWidth={1.5}
                        />
                      </div>

                      {/* NUMBER */}
                      <span className="text-[11px] font-bold tracking-[0.15em] text-[#0d2461]/25">
                        0{index + 1}
                      </span>

                    </div>

                    {/* TITLE */}
                    <h3 className="mt-5 text-lg font-bold leading-tight text-[#0d2461] sm:text-xl">
                      {sector.title}
                    </h3>

                    {/* ITEMS */}
                    <ul className="mt-4 space-y-2.5">
                      {sector.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-[13px] leading-5 text-gray-600"
                        >
                          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#f5bd24]" />

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* ARROW */}
                    <div className="absolute bottom-5 right-5 flex h-8 w-8 items-center justify-center rounded-full border border-[#0d2461]/10 text-[#0d2461] opacity-0 transition-all duration-500 group-hover:rotate-45 group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>

                    {/* BOTTOM ACCENT */}
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#f5bd24] transition-all duration-500 group-hover:w-full" />

                  </div>

                </SwiperSlide>
              );
            })}

          </Swiper>

        </div>

        {/* SLIDER INDICATOR */}
      
      </div>
    </section>
  );
}