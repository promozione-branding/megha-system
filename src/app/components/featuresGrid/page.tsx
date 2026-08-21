"use client";

import React from "react";

// You can replace these placeholder images with your actual Next.js public folder paths (e.g., '/images/controller.jpg')
const features = [
  {
    id: "01",
    subtitle: "EXPLORE THE FEATURES",
    title: "UNIQUE\nSOLUTIONS",
    image: "/assets/features-grid/2 (22).webp", 
    link: "#",
  },
  {
    id: "02",
    subtitle: "EXPLORE THE FEATURES",
    title: "PROJECT\nOVERVIEW",
    image: "/assets/features-grid/1 (71).webp",
    link: "#",
  },
  {
    id: "03",
    subtitle: "EXPLORE THE FEATURES",
    title: "EXPLORE\nPOTENTIALS",
    image: "/assets/features-grid/2 (22).webp",
    link: "#",
  },
  {
    id: "04",
    subtitle: "EXPLORE THE FEATURES",
    title: "DIGITAL\nINSTRUMENT",
    image: "/assets/features-grid/1 (71).webp",
    link: "#",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="w-full bg-white border-y border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`group relative flex flex-col justify-between min-h-[330px] p-7 sm:p-8 overflow-hidden cursor-pointer bg-white transition-colors duration-500 ${
              // Add right borders to separate columns (except on mobile where they stack)
              index !== features.length - 1 ? "lg:border-r border-gray-200" : ""
            } ${
              // Add bottom borders for tablet/mobile stacking
              index < 2 ? "md:border-b lg:border-b-0 border-gray-200" : ""
            } ${index === 0 ? "border-b md:border-b lg:border-b-0 border-gray-200" : ""}`}
          >
            {/* Hover Background Image Overlay */}
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <img
                src={feature.image}
                alt={feature.title.replace("\n", " ")}
                className="w-full h-full object-cover"
              />
              {/* Optional: Dark overlay to ensure white text is always readable over any image */}
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Content Container (Positioned above background) */}
            <div className="relative z-10 flex flex-col h-full">
              
              <div className="relative">
                {/* Giant Background Number */}
                <span className="absolute -top-6 -left-2 text-8xl font-bold text-gray-50 group-hover:text-white/10 transition-colors duration-500 pointer-events-none select-none z-[-1]">
                  {feature.id}
                </span>

                {/* Subtitle */}
                <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-gray-500 group-hover:text-gray-200 transition-colors duration-500 uppercase mt-4">
                  {feature.subtitle}
                </p>

                {/* Main Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-black group-hover:text-white transition-colors duration-500 uppercase mt-2 whitespace-pre-line leading-tight">
                  {feature.title}
                </h3>
              </div>

              {/* Bottom "Read More" Link */}
              <div className="mt-auto pt-6">
                <a
                  href={feature.link}
                  className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-black group-hover:text-white transition-colors duration-500 uppercase flex items-center gap-2"
                >
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}