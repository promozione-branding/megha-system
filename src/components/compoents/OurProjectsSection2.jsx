"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  X,
} from "lucide-react";
import PopupForm from "./PopupForm";
import { handleCallClick } from "@/lib/track";

const projects = [
  {
    number: "01",
    title: "Luxury Toilet Cubicles",
    description:
      "Created for premium environments, our luxury cubicles bring together sophisticated finishes, premium materials, and precision detailing to make every washroom feel considered.",
    image: "/lux2.webp",
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
    title: "Urinal Modesty Panels",
    description:
      "Our urinal cubicle solutions are designed for busy washrooms, combining smart space utilization, durable construction, and easy maintenance.",
    image: "/unimod.webp",
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

export default function OurProjectsSection2() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  /*
   * Lock body scroll while category modal is open.
   * Automatically restores scroll when modal closes/unmounts.
   */
  useEffect(() => {
    if (!selectedProject) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedProject]);

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const openQuote = () => {
    setIsQuoteOpen(true);
  };

  const closeQuote = () => {
    setIsQuoteOpen(false);
  };

  return (
    <>
      <section
        id="product"
        className="w-full overflow-hidden bg-white px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 lg:px-16 lg:py-16 xl:px-20"
        style={{
          fontFamily: "var(--font-jakarta), 'Helvetica Neue', sans-serif",
        }}
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-x-12 xl:gap-x-20">
            {/* =====================================================
                LEFT COLUMN
            ===================================================== */}
            <div className="flex flex-col gap-6 md:gap-7">
              {/* Heading */}
              <div className="pt-0.5 md:pt-2">
                <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.35em] text-neutral-400 sm:text-[10px] sm:tracking-[0.4em]">
                  OUR CATEGORIES
                </span>

                <h2 className="mb-4 text-[2.15rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-neutral-900 sm:text-4xl md:text-5xl">
                  <span className="font-light text-neutral-500">
                    Solutions
                  </span>{" "}
                  <span>for</span>
                  <br />
                  <span>Every Washroom.</span>
                </h2>

                <p className="max-w-xl text-[13px] leading-[1.7] text-neutral-500 sm:text-[15px] sm:leading-[1.75]">
                  Explore a complete range of toilet cubicle systems, from
                  everyday commercial applications to premium spaces, kids&apos;
                  washrooms, urinal partitions, and essential hardware.
                </p>
              </div>

              {/* Project 01 */}
              <CategoryImage
                project={projects[0]}
                onClick={() => openProject(projects[0])}
              />

              <ProjectInfo project={projects[0]} />

              {/* Desktop CTA */}
              <ProjectCTA
                onClick={openQuote}
                className="hidden md:flex"
              />
            </div>

            {/* =====================================================
                RIGHT COLUMN
            ===================================================== */}
            <div className="flex flex-col gap-7 md:gap-9 lg:mt-0">
              {/* Project 02 */}
              <CategoryImage
                project={projects[1]}
                onClick={() => openProject(projects[1])}
              />

              <ProjectInfo project={projects[1]} />

              {/* Project 03 */}
              <CategoryImage
                project={projects[2]}
                onClick={() => openProject(projects[2])}
              />

              <ProjectInfo project={projects[2]} />

              {/* Mobile CTA */}
              <ProjectCTA
                onClick={openQuote}
                className="flex md:hidden"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CATEGORY MODAL
      ========================================================= */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-[#0d2461]/70 p-3 backdrop-blur-sm sm:p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeProject();
              }
            }}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 15,
                scale: 0.98,
              }}
              transition={{
                duration: 0.25,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="relative max-h-[94vh] w-full max-w-[1000px] overflow-hidden rounded-[20px] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.25)] sm:rounded-[24px]"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-title"
            >
              {/* Close */}
              <button
                type="button"
                onClick={closeProject}
                aria-label="Close project details"
                className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-lg backdrop-blur transition-transform hover:scale-105 sm:right-4 sm:top-4 sm:h-10 sm:w-10"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>

              <div className="grid max-h-[94vh] grid-cols-1 overflow-y-auto lg:grid-cols-2">
                {/* Modal Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 lg:aspect-auto lg:min-h-[600px]">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-5 sm:bottom-6 sm:left-6">
                    <span className="text-5xl font-light leading-none text-white/50 sm:text-6xl">
                      {selectedProject.number}
                    </span>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#f0ad00] sm:text-[10px]">
                    Megha Systems
                  </span>

                  <h2
                    id="project-title"
                    className="mt-2.5 text-2xl font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0d2461] sm:text-4xl"
                  >
                    {selectedProject.title}
                  </h2>

                  <div className="mt-5 h-px w-10 bg-[#f5bd24] sm:mt-6 sm:w-12" />

                  <p className="mt-5 text-[13px] leading-6 text-neutral-500 sm:mt-6 sm:text-[15px] sm:leading-7">
                    {selectedProject.details}
                  </p>

                  {/* Features */}
                  <div className="mt-6 space-y-2.5 sm:mt-7 sm:space-y-3">
                    {selectedProject.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2.5 sm:gap-3"
                      >
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f5bd24]/15 text-[#0d2461]">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                        </div>

                        <span className="text-[13px] font-medium text-neutral-700 sm:text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-7 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:gap-3">
                    <button
                      type="button"
                      onClick={openQuote}
                      className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#0d2461] px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-white transition-all hover:-translate-y-0.5 hover:bg-[#102d7a] hover:shadow-lg sm:text-xs"
                    >
                      Get a Quote

                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </button>

                    <button
                      type="button"
                      onClick={closeProject}
                      className="inline-flex min-h-11 items-center justify-center rounded-full border border-neutral-200 px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-neutral-700 transition-all hover:border-neutral-900 hover:bg-neutral-50 sm:text-xs"
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

      {/* Quote Popup */}
      {isQuoteOpen && (
        <PopupForm
          isOpen={isQuoteOpen}
          onClose={closeQuote}
        />
      )}
    </>
  );
}

/* =============================================================
   CATEGORY IMAGE
============================================================= */

function CategoryImage({ project, onClick }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={`View details for ${project.title}`}
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.995 }}
      className="group relative block w-full overflow-hidden rounded-2xl bg-neutral-100 text-left sm:rounded-3xl"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:rounded-3xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 90vw, 50vw"
          className="object-cover"
        />

        {/* Desktop hover overlay */}
        <motion.div
          variants={{
            rest: {
              opacity: 0,
            },
            hover: {
              opacity: 1,
            },
          }}
          transition={{ duration: 0.25 }}
          className="pointer-events-none absolute inset-0 hidden bg-[#0d2461]/35 sm:block"
        />

        {/* Desktop view button */}
        <motion.div
          variants={{
            rest: {
              opacity: 0,
              scale: 0.9,
              y: 8,
            },
            hover: {
              opacity: 1,
              scale: 1,
              y: 0,
            },
          }}
          transition={{ duration: 0.25 }}
          className="pointer-events-none absolute inset-0 hidden items-center justify-center sm:flex"
        >
          <div className="rounded-full bg-white px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0d2461] shadow-xl">
            View Details
          </div>
        </motion.div>

        {/* Mobile subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent sm:hidden" />

        {/* Bottom content */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between sm:bottom-5 sm:left-5 sm:right-5">
          <div className="min-w-0 pr-3">
            <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/75 sm:text-[10px] sm:tracking-[0.25em]">
              Category {project.number}
            </span>

            <h3 className="mt-1 truncate text-base font-bold text-white sm:text-lg">
              {project.title}
            </h3>
          </div>

          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#0d2461] sm:h-9 sm:w-9">
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </div>
        </div>
      </div>
    </motion.button>
  );
}

/* =============================================================
   PROJECT INFO
============================================================= */

function ProjectInfo({ project }) {
  return (
    <div className="flex items-start gap-3.5 sm:gap-5">
      <span
        className="shrink-0 select-none text-[2.8rem] font-light leading-none sm:text-[3.5rem]"
        style={{
          color: "#e2e8f0",
          letterSpacing: "-0.03em",
        }}
      >
        {project.number}
      </span>

      <div className="pt-0.5">
        <h3 className="mb-1 text-base font-bold tracking-[-0.01em] text-neutral-900 sm:mb-1.5 sm:text-[1.15rem]">
          {project.title}
        </h3>

        <p className="max-w-xl text-[12px] leading-[1.65] text-neutral-500 sm:max-w-xs sm:text-[13px] sm:leading-[1.7]">
          {project.description}
        </p>
      </div>
    </div>
  );
}

/* =============================================================
   PROJECT CTA
============================================================= */

function ProjectCTA({ onClick, className = "" }) {
  return (
    <div
      className={`flex-col gap-5 rounded-2xl p-6 sm:gap-6 sm:rounded-3xl sm:p-8 ${className}`}
      style={{
        backgroundColor: "#f0eeec",
      }}
    >
      <div>
        <h3 className="mb-2.5 text-xl font-extrabold leading-tight tracking-[-0.02em] text-neutral-900 sm:mb-3 sm:text-[1.7rem]">
          Let&apos;s Build Your Next Washroom.
        </h3>

        <p className="text-[12px] leading-[1.7] text-neutral-400 sm:text-[13px] sm:leading-[1.75]">
          From concept and customization to manufacturing and installation,
          Megha Systems delivers complete toilet cubicle solutions built
          around your space, requirements, and vision.
        </p>
      </div>

      <div className="flex flex-col items-start gap-4 border-t border-neutral-300/60 pt-5 sm:flex-row sm:flex-wrap sm:items-center">
        <button
          type="button"
          onClick={onClick}
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-neutral-400 px-5 py-3 text-[10px] font-bold uppercase tracking-widest text-neutral-900 transition-all duration-300 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white sm:px-6 sm:text-xs"
        >
          Start Your Project

          <ArrowRight className="h-3.5 w-3.5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white sm:h-10 sm:w-10">
            <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </div>

          <div>
            <span className="block text-[8px] uppercase tracking-widest text-neutral-400 sm:text-[10px]">
              Talk to Our Experts
            </span>

            <a
              href="tel:+919873735713"
              onClick={() => handleCallClick({ source: "Landing page", obj: "N/A" })}
              className="text-[13px] font-bold text-neutral-900 transition-colors hover:text-neutral-600 sm:text-sm"
            >
              +91 9873735713
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}