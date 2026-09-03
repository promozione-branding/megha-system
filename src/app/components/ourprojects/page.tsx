"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  X,
} from "lucide-react";
import Link from "next/link";

interface Project {
  number: string;
  title: string;
  description: string;
  image: string;
  details: string;
  features: string[];
}

const projects: Project[] = [
  {
    number: "01",
    title: "Luxury Toilet Cubicles",
    description:
      "Created for premium environments, our luxury cubicles bring together sophisticated finishes, premium materials, and precision detailing to make every washroom feel considered.",
    image:
      "/11.avif",
    details:
      "Our luxury toilet cubicles are designed for premium commercial and hospitality environments where aesthetics, durability, and attention to detail matter. We offer refined finishes and practical configurations that create a sophisticated washroom experience.",
    features: [
      "Premium finishes",
      "Durable HPL materials",
      "Modern hardware",
      "Custom configurations",
    ],
  },
  {
    number: "02",
    title: "Urinal Cubicles",
    description:
      "Our urinal cubicle solutions are designed for busy washrooms, combining smart space utilization, durable construction, and easy maintenance.",
    image: "/new1.webp",
    details:
      "Megha Systems urinal partitions provide privacy and efficient space utilization for commercial, institutional, and high-traffic washrooms. Our systems are manufactured using durable materials designed for regular use and easy maintenance.",
    features: [
      "Efficient space utilization",
      "Easy to maintain",
      "Moisture-resistant materials",
      "Heavy-duty construction",
    ],
  },
  {
    number: "03",
    title: "Kids Toilet Cubicles",
    description:
      "Safe, comfortable, and thoughtfully designed, our kids' cubicles create welcoming washroom spaces with child-friendly proportions, durable materials, and vibrant finishes.",
    image: "/1.webp",
    details:
      "Our kids toilet cubicles are designed around the needs of younger users. We focus on safe proportions, practical layouts, durable construction, and visually engaging finishes to create comfortable washrooms for schools, malls, recreational spaces, and other child-focused environments.",
    features: [
      "Child-friendly proportions",
      "Safe rounded detailing",
      "Durable materials",
      "Colourful finish options",
    ],
  },
];

export default function OurProjectsSection() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  return (
    <>
      <section
        className="w-full overflow-hidden bg-white px-6 py-15 md:px-12 lg:px-16 xl:px-20"
        style={{
          fontFamily:
            "var(--font-jakarta), 'Helvetica Neue', sans-serif",
        }}
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-x-12 lg:grid-cols-2 xl:gap-x-20">

            {/* =====================================================
                LEFT COLUMN
            ===================================================== */}
            <div className="flex flex-col justify-between gap-5">

              {/* Heading */}
              <div className="pt-2">
                <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400">
                  OUR CATEGORIES
                </span>

                <h2 className="mb-5 text-[2.6rem] leading-[1.08] tracking-[-0.02em] text-neutral-900 sm:text-5xl">
                  <span className="font-light text-neutral-500">
                    Solutions
                  </span>{" "}
                  <span className="font-extrabold">for</span>
                  <br />
                  <span className="font-extrabold">
                    Every Washroom.
                  </span>
                </h2>

                <p className="max-w-xl text-[15px] font-normal leading-[1.75] text-neutral-500">
                  Explore a complete range of toilet cubicle systems,
                  from everyday commercial applications to premium
                  spaces, kids&apos; washrooms, urinal partitions, and
                  essential hardware.
                </p>
              </div>

              {/* Project 02 Image */}
              <CategoryImage
                project={projects[0]}
                onClick={() => openProject(projects[0])}
              />

              {/* Project 01 Info */}
              <ProjectInfo project={projects[0]} />

              {/* CTA */}
              <div
                className="flex flex-col gap-6 rounded-3xl p-8"
                style={{ backgroundColor: "#f0eeec" }}
              >
                <div>
                  <h3 className="mb-3 text-2xl font-extrabold leading-tight tracking-[-0.02em] text-neutral-900 sm:text-[1.7rem]">
                    Let&apos;s Build Your Next Washroom.
                  </h3>

                  <p className="text-[13px] font-normal leading-[1.75] text-neutral-400">
                    From concept and customization to manufacturing
                    and installation, Megha Systems delivers complete
                    toilet cubicle solutions built around your space,
                    requirements, and vision.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 border-t border-neutral-300/60 pt-5">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 rounded-full border border-neutral-400 px-6 py-3 text-xs font-bold uppercase tracking-widest text-neutral-900 transition-all duration-300 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
                  >
                    Start Your Project
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white">
                      <Phone className="h-4 w-4" />
                    </div>

                    <div>
                      <span className="block text-[10px] uppercase tracking-widest text-neutral-400">
                        Talk to Our Experts
                      </span>

                      <a
                        href="tel:+919873735713"
                        className="text-sm font-bold text-neutral-900 transition-colors hover:text-neutral-600"
                      >
                        +91 9873735713
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =====================================================
                RIGHT COLUMN
            ===================================================== */}
            <div className="mt-10 flex flex-col gap-10 lg:mt-0">

              {/* Project 01 Image */}
              <CategoryImage
                project={projects[1]}
                onClick={() => openProject(projects[1])}
              />

              {/* Project 02 Info */}
              <ProjectInfo project={projects[1]} />

              {/* Project 03 Image */}
              <CategoryImage
                project={projects[2]}
                onClick={() => openProject(projects[2])}
              />

              {/* Project 03 Info */}
              <ProjectInfo project={projects[2]} />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CATEGORY POPUP
      ========================================================= */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-[#0d2461]/70 p-4 backdrop-blur-md sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) {
                closeProject();
              }
            }}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.96,
              }}
              transition={{
                duration: 0.3,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="
                relative
                max-h-[90vh]
                w-full
                max-w-[1000px]
                overflow-hidden
                rounded-[24px]
                bg-white
                shadow-[0_30px_100px_rgba(0,0,0,0.25)]
              "
            >

              {/* Close Button */}
              <button
                type="button"
                onClick={closeProject}
                aria-label="Close"
                className="
                  absolute
                  right-4
                  top-4
                  z-20
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-white/90
                  text-neutral-900
                  shadow-lg
                  backdrop-blur
                  transition-all
                  hover:scale-105
                  hover:bg-white
                "
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid max-h-[90vh] grid-cols-1 overflow-y-auto lg:grid-cols-2">

                {/* Image */}
                <div className="relative min-h-[280px] overflow-hidden bg-neutral-100 lg:min-h-[600px]">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6">
                    <span className="text-6xl font-light leading-none text-white/50">
                      {selectedProject.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">

                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#f0ad00]">
                    Megha Systems
                  </span>

                  <h2 className="mt-3 text-3xl font-extrabold leading-[1.05] tracking-[-0.03em] text-[#0d2461] sm:text-4xl">
                    {selectedProject.title}
                  </h2>

                  <div className="mt-6 h-px w-12 bg-[#f5bd24]" />

                  <p className="mt-6 text-sm leading-7 text-neutral-500 sm:text-[15px]">
                    {selectedProject.details}
                  </p>

                  {/* Features */}
                  <div className="mt-7 space-y-3">
                    {selectedProject.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3"
                      >
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f5bd24]/15 text-[#0d2461]">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                        </div>

                        <span className="text-sm font-medium text-neutral-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                    <a
                      href="tel:+919873735713"
                      onClick={closeProject}
                      className="
                        group
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        bg-[#0d2461]
                        px-6
                        py-3.5
                        text-xs
                        font-bold
                        uppercase
                        tracking-widest
                        text-white
                        transition-all
                        hover:-translate-y-0.5
                        hover:bg-[#102d7a]
                        hover:shadow-lg
                      "
                    >
                      Get a Quote

                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </a>

                    <button
                      type="button"
                      onClick={closeProject}
                      className="
                        inline-flex
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-neutral-200
                        px-6
                        py-3.5
                        text-xs
                        font-bold
                        uppercase
                        tracking-widest
                        text-neutral-700
                        transition-all
                        hover:border-neutral-900
                        hover:bg-neutral-50
                      "
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* =============================================================
   CATEGORY IMAGE
============================================================= */

function CategoryImage({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover="hover"
      initial="rest"
      className="group relative block w-full cursor-pointer overflow-hidden rounded-3xl bg-neutral-100 text-left"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">

        <motion.img
          src={project.image}
          alt={project.title}
          variants={{
            rest: {
              scale: 1,
            },
            hover: {
              scale: 1.05,
            },
          }}
          transition={{
            duration: 0.7,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="h-full w-full object-cover"
        />

        {/* Dark overlay */}
        <motion.div
          variants={{
            rest: {
              opacity: 0,
            },
            hover: {
              opacity: 1,
            },
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-[#0d2461]/35"
        />

        {/* Center View Button */}
        <motion.div
          variants={{
            rest: {
              opacity: 0,
              scale: 0.85,
              y: 10,
            },
            hover: {
              opacity: 1,
              scale: 1,
              y: 0,
            },
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="rounded-full bg-white px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0d2461] shadow-xl">
            View Details
          </div>
        </motion.div>

        {/* Bottom Category Name */}
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/70">
              Category {project.number}
            </span>

            <h3 className="mt-1 text-lg font-bold text-white">
              {project.title}
            </h3>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0d2461]">
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </motion.button>
  );
}

/* =============================================================
   PROJECT INFO
============================================================= */

function ProjectInfo({ project }: { project: Project }) {
  return (
    <div className="flex items-start gap-5">
      <span
        className="shrink-0 select-none text-[3.5rem] font-light leading-none"
        style={{
          color: "#e2e8f0",
          letterSpacing: "-0.03em",
        }}
      >
        {project.number}
      </span>

      <div>
        <h3 className="mb-1.5 text-[1.15rem] font-bold tracking-[-0.01em] text-neutral-900">
          {project.title}
        </h3>

        <p className="max-w-xs text-[13px] leading-[1.7] text-neutral-500">
          {project.description}
        </p>
      </div>
    </div>
  );
}