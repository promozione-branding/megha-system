"use client";

import React from "react";
import { Phone } from "lucide-react";

interface Project {
  number: string;
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    number: "01",
    title: "Luxury Toilet Cubicles",
    description:
      "Created for premium environments, our luxury cubicles bring together sophisticated finishes, premium materials, and precision detailing to make every washroom feel considered.",
    image:
      "https://media.istockphoto.com/id/2263983512/photo/public-toilet-design-with-contrasting-colors-modern-and-minimalist-design.jpg?s=612x612&w=0&k=20&c=JbEjk32IzXFUalLs7fb8GYpc8P7FZw65mCJWMt3ozhY=",
  },
  {
    number: "02",
    title: "Urinal Cubicles",
    description:
      "Our urinal cubicle solutions are designed for busy washrooms, combining smart space utilization, durable construction, and easy maintenance.",
    image:
      "https://media.istockphoto.com/id/508182124/photo/doors-from-toilets.jpg?s=612x612&w=0&k=20&c=ExswbkHEa6wG_h53KZcn2xbE_rKfcQ-c3duz2YSCuhQ=",
  },
  {
    number: "03",
    title: "Kids Toilet Cubicles",
    description:
      "Safe, comfortable, and thoughtfully designed, our kids' cubicles create welcoming washroom spaces with child-friendly proportions, durable materials, and vibrant finishes.",
    image:
      "https://media.istockphoto.com/id/525755111/photo/toilet-doors.jpg?s=612x612&w=0&k=20&c=IOtQdiMHbA1b-751jRjV7x1sD3YYp1DbjvMNoOIV7R0=",
  },
];

export default function OurProjectsSection() {
  return (
    <section
      className="w-full bg-white py-15 px-6 md:px-12 lg:px-16 xl:px-20 overflow-hidden"
      style={{ fontFamily: "var(--font-jakarta), 'Helvetica Neue', sans-serif" }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-20 lg:items-stretch">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col justify-between">

            {/* Section label + Heading */}
            <div className="pt-2">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-neutral-400 block mb-4">
                OUR CATEGORIES
              </span>
              <h2 className="text-[2.6rem] sm:text-5xl tracking-[-0.02em] leading-[1.08] text-neutral-900 mb-5">
                <span className="font-light text-neutral-500">Solutions</span>{" "}
                <span className="font-extrabold">for</span>
                <br />
                <span className="font-extrabold">Every Washroom.</span>
              </h2>
              <p className="text-neutral-500 text-[15px] leading-[1.75] max-w-xl font-normal">
                Explore a complete range of toilet cubicle systems, from everyday commercial applications to premium spaces, kids' washrooms, urinal partitions, and essential hardware.
              </p>
            </div>

            {/* Project 02 image */}
            <div className="group cursor-pointer">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-3xl bg-neutral-100">
                <img
                  src={projects[1].image}
                  alt={projects[1].title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>

            {/* Project 01 info (below project 02 image on left) */}
            <div className="flex items-start gap-5">
              <span
                className="text-[3.5rem] font-light leading-none select-none shrink-0"
                style={{ color: "#e2e8f0", letterSpacing: "-0.03em" }}
              >
                {projects[0].number}
              </span>
              <div>
                <h3 className="text-[1.15rem] font-bold text-neutral-900 mb-1.5 tracking-[-0.01em]">
                  {projects[0].title}
                </h3>
                <p className="text-[13px] text-neutral-500 leading-[1.7] max-w-xs">
                  {projects[0].description}
                </p>
              </div>
            </div>

            {/* CTA Card */}
            <div
              className="rounded-3xl p-8 flex flex-col gap-6"
              style={{ backgroundColor: "#f0eeec" }}
            >
              <div>
                <h3 className="text-2xl sm:text-[1.7rem] font-extrabold text-neutral-900 tracking-[-0.02em] mb-3 leading-tight">
                  Let&apos;s Build Your Next Washroom.
                </h3>
                <p className="text-[13px] text-neutral-400 leading-[1.75] font-normal">
                  From concept and customization to manufacturing and installation, Megha Systems delivers complete toilet cubicle solutions built around your space, requirements, and vision.
                </p>
              </div>

              <div className="border-t border-neutral-300/60 pt-5 flex flex-wrap items-center gap-4">
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-400 text-xs font-bold uppercase tracking-widest text-neutral-900 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300"
                >
                  Start Your Project <span>→</span>
                </a>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-neutral-400">
                      Talk to Our Experts
                    </span>
                    <a
                      href="tel:+919873735713"
                      className="text-sm font-bold text-neutral-900 hover:text-neutral-600 transition-colors"
                    >
                      +91 9873735713
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="flex flex-col gap-10">

            {/* Project 01 image */}
            <div className="group cursor-pointer">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-3xl bg-neutral-100">
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>

            {/* Project 02 info */}
            <div className="flex items-start gap-5">
              <span
                className="text-[3.5rem] font-light leading-none select-none shrink-0"
                style={{ color: "#e2e8f0", letterSpacing: "-0.03em" }}
              >
                {projects[1].number}
              </span>
              <div>
                <h3 className="text-[1.15rem] font-bold text-neutral-900 mb-1.5 tracking-[-0.01em]">
                  {projects[1].title}
                </h3>
                <p className="text-[13px] text-neutral-500 leading-[1.7] max-w-xs">
                  {projects[1].description}
                </p>
              </div>
            </div>

            {/* Project 03 image */}
            <div className="group cursor-pointer">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-3xl bg-neutral-100">
                <img
                  src={projects[2].image}
                  alt={projects[2].title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>

            {/* Project 03 info */}
            <div className="flex items-start gap-5">
              <span
                className="text-[3.5rem] font-light leading-none select-none shrink-0"
                style={{ color: "#e2e8f0", letterSpacing: "-0.03em" }}
              >
                {projects[2].number}
              </span>
              <div>
                <h3 className="text-[1.15rem] font-bold text-neutral-900 mb-1.5 tracking-[-0.01em]">
                  {projects[2].title}
                </h3>
                <p className="text-[13px] text-neutral-500 leading-[1.7] max-w-xs">
                  {projects[2].description}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}