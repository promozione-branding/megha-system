"use client";

import React from "react";

// You can replace these placeholder images with your actual Next.js public folder paths (e.g., '/images/controller.jpg')
const features = [
  {
    id: "01",
    subtitle: "EXPLORE THE FEATURES",
    title: "UNIQUE\nSOLUTIONS",
    // Updated working Unsplash gaming/controller image
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop", 
    link: "#",
  },
  {
    id: "02",
    subtitle: "EXPLORE THE FEATURES",
    title: "PROJECT\nOVERVIEW",
    // Placeholder tech image
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    id: "03",
    subtitle: "EXPLORE THE FEATURES",
    title: "EXPLORE\nPOTENTIALS",
    // Placeholder tech image
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    id: "04",
    subtitle: "EXPLORE THE FEATURES",
    title: "DIGITAL\nINSTRUMENT",
    // Placeholder tech image
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
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
            className={`group relative flex flex-col justify-between min-h-[450px] p-12 overflow-hidden cursor-pointer bg-white transition-colors duration-500 ${
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
                <span className="absolute -top-8 -left-4 text-9xl font-bold text-gray-50 group-hover:text-white/10 transition-colors duration-500 pointer-events-none select-none z-[-1]">
                  {feature.id}
                </span>

                {/* Subtitle */}
                <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-gray-500 group-hover:text-gray-200 transition-colors duration-500 uppercase mt-12">
                  {feature.subtitle}
                </p>

                {/* Main Title */}
                <h3 className="text-3xl sm:text-4xl font-bold text-black group-hover:text-white transition-colors duration-500 uppercase mt-3 whitespace-pre-line leading-tight">
                  {feature.title}
                </h3>
              </div>

              {/* Bottom "Read More" Link */}
              <div className="mt-auto pt-12">
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