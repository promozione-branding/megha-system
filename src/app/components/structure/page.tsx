"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

// Defines the properties and spatial coordinates (percentages) for the CAD mapping
interface LayerData {
  id: number;
  title: string;
  cadWidth: string; // Width of the CAD column
  cadX: number; // Approximate X center position (%) of the CAD column for the SVG pointer
  labelY: number; // Approximate Y center position (%) of the text label
}

const CUBICLE_LAYERS: LayerData[] = [
  { id: 0, title: "COMPACT LAMINATE", cadWidth: "8%", cadX: 4, labelY: 10 },
  { id: 1, title: "ALUMINUM FRAME", cadWidth: "16%", cadX: 18, labelY: 26 },
  { id: 2, title: "NYLON HARDWARE", cadWidth: "20%", cadX: 38, labelY: 42 },
  { id: 3, title: "WATERPROOF CORE", cadWidth: "22%", cadX: 62, labelY: 58 },
  { id: 4, title: "ANTI-BACTERIAL COATING", cadWidth: "6%", cadX: 78, labelY: 74 },
  { id: 5, title: "STAINLESS STEEL FOOT", cadWidth: "14%", cadX: 92, labelY: 90 },
];

export default function LightWallSectionScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeLayer, setActiveLayer] = useState<number>(0);

  // Track the scroll progress through the container while sticky is visible
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end 70vh"],
  });

  // Map full 0 to 1 scroll progress to X position of scanner bar from 0% to 100%
  const scannerX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Evenly distribute layer thresholds so scanner reaches the end layer 5
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest <= 0.16) setActiveLayer(0);
    else if (latest <= 0.33) setActiveLayer(1);
    else if (latest <= 0.50) setActiveLayer(2);
    else if (latest <= 0.67) setActiveLayer(3);
    else if (latest <= 0.83) setActiveLayer(4);
    else setActiveLayer(5);
  });

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[220vh] bg-[#f8fafc] font-sans selection:bg-[#1e40af] selection:text-white"
    >
      {/* Sticky wrapper stays in view taking ~70vh height */}
      <div className="sticky top-[15vh] h-[70vh] w-full overflow-hidden bg-[#f8fafc] flex flex-col justify-center border-y border-[#e2e8f0]">
        
        {/* Faint Architectural Grid Background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
          
          {/* Left Side: Typography & Brand Statement */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.08] text-[#0f172a] uppercase">
              <span className="block text-[#1e40af] text-lg md:text-xl tracking-widest mb-2 font-mono">MEGHA SYSTEM</span>
              <span className="block">Trusted Toilet</span>
              <span className="block text-[#1e40af]">Cubicle Systems.</span>
            </h1>

            <p className="mt-6 text-[#64748b] text-sm md:text-base leading-relaxed max-w-md">
              Engineered with high-pressure compact laminate, anti-bacterial surfaces, and heavy-duty stainless steel fittings for ultimate durability.
            </p>

            <div className="mt-8 flex items-center gap-4 text-xs font-mono tracking-widest text-[#64748b] uppercase">
              <div className="h-px w-12 bg-[#1e40af]" />
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1e40af]" />
                <span>6 Core Engineering Features</span>
              </div>
            </div>
          </div>

          {/* Right Side: CAD Cross-Section & Scroll Bar */}
          <div className="relative w-full h-[380px] lg:h-[450px] flex items-center pointer-events-none">
            
            {/* SVG Pointers connecting CAD blocks to Text Labels */}
            <svg
              className="absolute inset-0 w-full h-full z-0"
              preserveAspectRatio="none"
            >
              {CUBICLE_LAYERS.map((layer) => {
                const isActive = activeLayer === layer.id;
                return (
                  <g key={`line-${layer.id}`}>
                    <circle
                      cx={`${layer.cadX}%`}
                      cy={`${layer.labelY}%`}
                      r="3"
                      className={`transition-colors duration-300 ${
                        isActive ? "fill-[#1e40af]" : "fill-[#cbd5e1]"
                      }`}
                    />
                    <line
                      x1={`${layer.cadX}%`}
                      y1={`${layer.labelY}%`}
                      x2="68%"
                      y2={`${layer.labelY}%`}
                      strokeWidth="1"
                      vectorEffect="non-scaling-stroke"
                      className={`transition-colors duration-300 ${
                        isActive ? "stroke-[#1e40af]" : "stroke-[#cbd5e1]"
                      }`}
                    />
                  </g>
                );
              })}
            </svg>

            {/* CAD Blocks container */}
            <div className="absolute left-0 top-[8%] bottom-[8%] w-[65%] flex justify-between z-10">
              
              {/* Layer 01: Compact Laminate */}
              <div
                className={`relative transition-colors duration-300 border-2 ${
                  activeLayer === 0 ? "border-[#1e40af] bg-[#1e40af]/10" : "border-[#94a3b8]"
                }`}
                style={{ width: CUBICLE_LAYERS[0].cadWidth }}
              />

              {/* Layer 02: Aluminum Frame */}
              <div
                className={`relative flex flex-col justify-around items-center py-6 transition-colors duration-300 border-2 border-r-0 ${
                  activeLayer === 1 ? "border-[#1e40af] bg-[#1e40af]/10" : "border-[#94a3b8]"
                }`}
                style={{ width: CUBICLE_LAYERS[1].cadWidth }}
              >
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`w-[60%] aspect-square border-2 transition-colors duration-300 ${
                      activeLayer === 1 ? "border-[#1e40af]" : "border-[#94a3b8]"
                    }`}
                  />
                ))}
              </div>

              {/* Layer 03: Nylon Hardware */}
              <div
                className={`relative transition-colors duration-300 border-2 ${
                  activeLayer === 2 ? "border-[#1e40af] bg-[#1e40af]/10" : "border-[#94a3b8]"
                }`}
                style={{ width: CUBICLE_LAYERS[2].cadWidth }}
              >
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                  <line
                    x1="0" y1="0" x2="100%" y2="100%"
                    strokeWidth="1"
                    vectorEffect="non-scaling-stroke"
                    className={activeLayer === 2 ? "stroke-[#1e40af]" : "stroke-[#94a3b8]"}
                  />
                  <line
                    x1="0" y1="50%" x2="100%" y2="50%"
                    strokeWidth="1"
                    vectorEffect="non-scaling-stroke"
                    className={activeLayer === 2 ? "stroke-[#1e40af]" : "stroke-[#94a3b8]"}
                  />
                </svg>
              </div>

              {/* Layer 04: Waterproof Core */}
              <div
                className={`relative transition-colors duration-300 border-2 overflow-hidden ${
                  activeLayer === 3 ? "border-[#1e40af] bg-[#1e40af]/10" : "border-[#94a3b8]"
                }`}
                style={{ width: CUBICLE_LAYERS[3].cadWidth }}
              >
                <svg className="absolute inset-0 w-full h-[120%]" preserveAspectRatio="none" viewBox="0 0 100 1000">
                  <path
                    d="M0 0 L100 50 L0 100 L100 150 L0 200 L100 250 L0 300 L100 350 L0 400 L100 450 L0 500 L100 550 L0 600 L100 650 L0 700 L100 750 L0 800 L100 850 L0 900 L100 950 L0 1000"
                    fill="none"
                    strokeWidth="4"
                    vectorEffect="non-scaling-stroke"
                    className={activeLayer === 3 ? "stroke-[#1e40af]" : "stroke-[#94a3b8]"}
                  />
                </svg>
              </div>

              {/* Layer 05: Anti-Bacterial Coating */}
              <div
                className={`relative transition-colors duration-300 border-l-2 ${
                  activeLayer === 4 ? "border-[#1e40af]" : "border-[#94a3b8]"
                }`}
                style={{ width: CUBICLE_LAYERS[4].cadWidth }}
              />

              {/* Layer 06: Stainless Steel Foot */}
              <div
                className={`relative flex flex-col transition-colors duration-300 border-2 ${
                  activeLayer === 5 ? "border-[#1e40af] bg-[#1e40af]/10" : "border-[#94a3b8]"
                }`}
                style={{ width: CUBICLE_LAYERS[5].cadWidth }}
              >
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className={`flex-1 border-b-2 last:border-b-0 transition-colors duration-300 ${
                      activeLayer === 5 ? "border-[#1e40af]" : "border-[#94a3b8]"
                    }`}
                  />
                ))}
              </div>

              {/* THE SCANNER BAR */}
              <motion.div
                style={{ left: scannerX }}
                className="absolute top-[-5%] bottom-[-5%] w-0.5 bg-[#1e40af] z-50 shadow-[0_0_12px_rgba(30,64,175,0.5)] flex flex-col justify-between items-center"
              >
                <div className="w-3 h-3 rounded-full border-2 border-[#1e40af] bg-[#f8fafc]" />
                <div className="w-3 h-3 rounded-full border-2 border-[#1e40af] bg-[#f8fafc]" />
              </motion.div>
            </div>

            {/* Text Labels */}
            <div className="absolute right-0 top-0 bottom-0 w-[30%] z-20">
              {CUBICLE_LAYERS.map((layer) => {
                const isActive = activeLayer === layer.id;
                return (
                  <div
                    key={layer.id}
                    className="absolute w-full"
                    style={{
                      top: `${layer.labelY}%`,
                      transform: "translateY(-50%)",
                    }}
                  >
                    <span
                      className={`font-mono text-[10px] md:text-xs tracking-wider transition-all duration-300 uppercase block whitespace-nowrap bg-[#f8fafc] pl-2 ${
                        isActive
                          ? "text-[#1e40af] font-bold scale-105 origin-left"
                          : "text-[#64748b] font-medium"
                      }`}
                    >
                      {layer.title}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}