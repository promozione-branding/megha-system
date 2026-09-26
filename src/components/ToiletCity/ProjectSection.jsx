"use client";

import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

/* ============================================================
   PROJECT DATA
============================================================ */

const projects = [
  {
    id: 2,
    image: "/hero2/foxconn.webp",
    logo: "/assets/clients/Apple (2).webp",
    title: "Manufacturing Facility",
    alt: "Apple Toilet Cubicle Partition",
    stats: "Premium Restroom Solutions",
    description:
      "500+ toilet cubicles installed at the Foxconn facility for Apple",
  },

  {
    id: 1,
    image: "/hero2/marutiDoor.webp",
    logo: "/assets/clients/maruti.webp",
    title: "Kharkhoda Plant",
    alt: "Maruti Suzuki Toilet Cubicle Partition",
    stats: "2,000+ Toilet Cubicles Installed",
    description:
      "Built around performance. Delivered for Maruti Suzuki.",
  },

  {
    id: 3,
    image: "/hero2/mcd.webp",
    logo: "/assets/clients/mag.webp",
    title: "Multiple Locations",
    alt: "McDonald Toilet Cubicle Partition",
    stats: "Hygienic. Stylish. Durable.",
    description:
      "Restroom cubicle solutions across multiple outlets pan India.",
  },

  {
    id: 4,
    image: "/hero2/oppo.webp",
    logo: "/hero2/oppoLogo.webp",
    title: "Corporate Office",
    alt: "Oppo Toilet Cubicle Partition",
    stats: "500+ Cubicles Installed",
    description:
      "Premium restroom partitions designed for modern corporate spaces.",
  },
];

/* ============================================================
   PROJECT CARD
============================================================ */

const ProjectCard = memo(function ProjectCard({ project }) {
  return (
    <article
      className="
        group relative h-[250px] overflow-hidden
        rounded-[14px]
        border border-[#e5e5e5]
        bg-white
        shadow-[0_3px_15px_rgba(0,0,0,0.04)]
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_15px_40px_rgba(0,0,0,0.10)]
        md:h-[230px]
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
              duration-700
              ease-out
              group-hover:scale-105
            "
          />

          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/[0.06]" />
        </div>

        {/* CONTENT */}
        <div className="flex min-w-0 flex-1 flex-col justify-between px-4 py-4">

          <div>

            {/* LOGO */}
            <div className="mb-3 flex h-[38px] items-center">
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

            {/* STATS */}
            <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-[#0d2461]">
              {project.stats}
            </p>

            {/* DESCRIPTION */}
            <p className="mt-2 line-clamp-3 text-[10px] leading-[1.5] text-[#777]">
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
              transition-all duration-200
              hover:border-[#0d2461]
              hover:bg-[#0d2461]
              hover:text-white
            "
          >
            View Project

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
   PROJECT SECTION
============================================================ */

export default function ProjectSection() {
  return (
    <section className="w-full bg-white py-10 md:py-14">

      <div className="mx-auto max-w-[1750px] px-5 md:px-8">

        {/* HEADER */}
        <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">

          <div>
            <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0d2461]">
              Our Projects
            </span>

            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-black sm:text-4xl lg:text-5xl">
              Projects That
              <span className="text-[#0d2461]"> Speak for Us.</span>
            </h2>
          </div>

          <Link
            href="/projects"
            className="
              group inline-flex w-fit items-center gap-2
              border-b border-black
              pb-1
              text-sm font-medium text-black
            "
          >
            View All Projects

            <ArrowUpRight
              size={15}
              className="
                transition-transform duration-200
                group-hover:-translate-y-1
                group-hover:translate-x-1
              "
            />
          </Link>

        </div>

        {/* =====================================================
            DESKTOP — 4 PROJECTS
        ===================================================== */}

        <div className="hidden min-[1200px]:grid grid-cols-4 gap-[18px]">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        {/* =====================================================
            TABLET + MOBILE — SWIPER
        ===================================================== */}

        <div className="block min-[1200px]:hidden">

          <Swiper
            modules={[Autoplay, Navigation]}
            speed={800}
            loop={true}
            spaceBetween={14}
            autoplay={{
              delay: 3000,
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
              },

              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },

              768: {
                slidesPerView: 3,
                spaceBetween: 18,
              },
            }}
            className="w-full"
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
  );
}