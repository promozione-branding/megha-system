"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

interface LayerData {
  id: number;
  title: string;
  subtitle: string;
  cadWidth: string;
  cadX: number;
  labelY: number;
}

const CUBICLE_LAYERS: LayerData[] = [
  { id: 0, title: "COMPACT LAMINATE", subtitle: "12mm High-Pressure Board", cadWidth: "10%", cadX: 7, labelY: 9 },
  { id: 1, title: "ALUMINUM FRAME", subtitle: "Anodized Structural Rail", cadWidth: "16%", cadX: 16, labelY: 25 },
  { id: 2, title: "NYLON HARDWARE", subtitle: "High-Impact Polymer Joint", cadWidth: "18%", cadX: 25, labelY: 41 },
  { id: 3, title: "WATERPROOF CORE", subtitle: "100% Moisture Barrier", cadWidth: "22%", cadX: 35, labelY: 57 },
  { id: 4, title: "ANTI-BACTERIAL COATING", subtitle: "Silver-Ion Surface Shield", cadWidth: "6%", cadX: 42, labelY: 73 },
  { id: 5, title: "STAINLESS STEEL FOOT", subtitle: "Grade 304 Pedestal Base", cadWidth: "16%", cadX: 48, labelY: 89 },
];

export default function LightWallSectionScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeLayer, setActiveLayer] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end 70vh"],
  });

  const scannerX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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
      className="relative w-full h-[220vh] bg-[#f8fafc] font-sans selection:bg-[#0d2461] selection:text-white"
    >
      {/* Sticky wrapper */}
      <div className="sticky top-[12vh] h-[76vh] w-full overflow-hidden bg-[#f8fafc] flex flex-col justify-center border-y border-[#e2e8f0]">
        
        {/* Architectural Blueprint Grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to right, #0d2461 1px, transparent 1px), linear-gradient(to bottom, #0d2461 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            opacity: 0.05,
          }}
        />

        <div className="relative z-10 max-w-[1750px] mx-auto w-full px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center h-full">
          
          {/* Left Side: Typography & Brand Statement */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d2461]/5 border border-[#0d2461]/10 text-xs font-mono tracking-widest text-[#0d2461] uppercase font-semibold mb-4">
                <span className="w-2 h-2 rounded-full bg-[#0d2461] animate-ping" />
                MEGHA SYSTEM ARCHITECTURE
              </span>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-[#0d2461]">
                Trusted Toilet <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d2461] to-[#2563eb]">
                  Cubicle Systems.
                </span>
              </h1>
            </div>

            <p className="text-[#475569] text-sm md:text-base leading-relaxed max-w-md">
              Engineered with high-pressure compact laminate, anti-bacterial surfaces, and heavy-duty stainless steel fittings for ultimate commercial durability.
            </p>

            <div className="flex items-center gap-4 text-xs font-mono tracking-widest text-[#0d2461]/70 uppercase pt-2">
              <div className="h-0.5 w-10 bg-[#0d2461]" />
              <div className="flex items-center gap-2 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#f5bd24]" />
                <span>6 Core Precision Layering</span>
              </div>
            </div>
          </div>

          {/* Right Side: High-Tech CAD Cross-Section & Dynamic Pointer */}
          <div className="lg:col-span-7 relative w-full h-[400px] lg:h-[480px] bg-white/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-[#e2e8f0] shadow-[0_15px_40px_rgba(13,36,97,0.06)] flex items-center overflow-hidden">
            
            {/* Background Grid inside container */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                backgroundImage: "radial-gradient(#0d2461 1px, transparent 1px)",
                backgroundSize: "20px 20px"
              }}
            />

            {/* SVG Dynamic Pointers */}
            <svg
              className="absolute inset-0 w-full h-full z-0 pointer-events-none"
              preserveAspectRatio="none"
            >
              {CUBICLE_LAYERS.map((layer) => {
                const isActive = activeLayer === layer.id;
                return (
                  <g key={`line-${layer.id}`}>
                    {/* Glowing active node dot */}
                    <circle
                      cx={`${layer.cadX}%`}
                      cy={`${layer.labelY}%`}
                      r={isActive ? "5" : "3"}
                      className={`transition-all duration-300 ${
                        isActive ? "fill-[#0d2461] stroke-[#3b82f6] stroke-2" : "fill-[#94a3b8]"
                      }`}
                    />
                    {/* Connector line */}
                    <line
                      x1={`${layer.cadX}%`}
                      y1={`${layer.labelY}%`}
                      x2="60%"
                      y2={`${layer.labelY}%`}
                      strokeWidth={isActive ? "2" : "1"}
                      strokeDasharray={isActive ? "none" : "3 3"}
                      vectorEffect="non-scaling-stroke"
                      className={`transition-all duration-300 ${
                        isActive ? "stroke-[#0d2461]" : "stroke-[#cbd5e1]"
                      }`}
                    />
                  </g>
                );
              })}
            </svg>

            {/* CAD Blocks Section */}
            <div className="absolute left-6 sm:left-8 top-[10%] bottom-[10%] w-[48%] flex justify-between z-10 gap-1 sm:gap-1.5">
              
              {/* Layer 0: Compact Laminate */}
              <div
                className={`relative transition-all duration-500 rounded-lg overflow-hidden border ${
                  activeLayer === 0 
                    ? "border-[#0d2461] bg-[#0d2461]/15 shadow-[0_0_20px_rgba(13,36,97,0.15)] scale-[1.02]" 
                    : "border-[#cbd5e1] bg-slate-100/60"
                }`}
                style={{ width: CUBICLE_LAYERS[0].cadWidth }}
              >
                <div className="absolute inset-0 opacity-40 bg-[linear-gradient(45deg,#0d2461_12.5%,transparent_12.5%,transparent_50%,#0d2461_50%,#0d2461_62.5%,transparent_62.5%,transparent_100%)] bg-[length:6px_6px]" />
              </div>

              {/* Layer 1: Aluminum Frame */}
              <div
                className={`relative flex flex-col justify-around items-center py-4 transition-all duration-500 rounded-lg border ${
                  activeLayer === 1 
                    ? "border-[#0d2461] bg-[#0d2461]/15 shadow-[0_0_20px_rgba(13,36,97,0.15)] scale-[1.02]" 
                    : "border-[#cbd5e1] bg-slate-100/60"
                }`}
                style={{ width: CUBICLE_LAYERS[1].cadWidth }}
              >
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`w-[65%] aspect-square rounded-sm border transition-colors duration-300 ${
                      activeLayer === 1 ? "border-[#0d2461] bg-white/80" : "border-[#94a3b8] bg-white/40"
                    }`}
                  />
                ))}
              </div>

              {/* Layer 2: Nylon Hardware */}
              <div
                className={`relative transition-all duration-500 rounded-lg overflow-hidden border ${
                  activeLayer === 2 
                    ? "border-[#0d2461] bg-[#0d2461]/15 shadow-[0_0_20px_rgba(13,36,97,0.15)] scale-[1.02]" 
                    : "border-[#cbd5e1] bg-slate-100/60"
                }`}
                style={{ width: CUBICLE_LAYERS[2].cadWidth }}
              >
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                  <line
                    x1="0" y1="0" x2="100%" y2="100%"
                    strokeWidth="1.5"
                    vectorEffect="non-scaling-stroke"
                    className={activeLayer === 2 ? "stroke-[#0d2461]" : "stroke-[#cbd5e1]"}
                  />
                  <line
                    x1="100%" y1="0" x2="0" y2="100%"
                    strokeWidth="1.5"
                    vectorEffect="non-scaling-stroke"
                    className={activeLayer === 2 ? "stroke-[#0d2461]" : "stroke-[#cbd5e1]"}
                  />
                </svg>
              </div>

              {/* Layer 3: Waterproof Core (Honeycomb Pattern) */}
              <div
                className={`relative transition-all duration-500 rounded-lg overflow-hidden border ${
                  activeLayer === 3 
                    ? "border-[#0d2461] bg-[#0d2461]/15 shadow-[0_0_20px_rgba(13,36,97,0.15)] scale-[1.02]" 
                    : "border-[#cbd5e1] bg-slate-100/60"
                }`}
                style={{ width: CUBICLE_LAYERS[3].cadWidth }}
              >
                <svg className="absolute inset-0 w-full h-[120%]" preserveAspectRatio="none" viewBox="0 0 100 1000">
                  <path
                    d="M0 0 L100 40 L0 80 L100 120 L0 160 L100 200 L0 240 L100 280 L0 320 L100 360 L0 400 L100 440 L0 480 L100 520 L0 560 L100 600 L0 640 L100 680 L0 720 L100 760 L0 800 L100 840 L0 880 L100 920 L0 960 L100 1000"
                    fill="none"
                    strokeWidth="3"
                    vectorEffect="non-scaling-stroke"
                    className={activeLayer === 3 ? "stroke-[#0d2461]" : "stroke-[#94a3b8]"}
                  />
                </svg>
              </div>

              {/* Layer 4: Anti-Bacterial Surface Coating */}
              <div
                className={`relative transition-all duration-500 rounded-full border-y border-x-2 ${
                  activeLayer === 4 
                    ? "border-[#0d2461] bg-[#f5bd24] shadow-[0_0_15px_rgba(245,189,36,0.6)] scale-110" 
                    : "border-[#94a3b8] bg-[#3b82f6]/30"
                }`}
                style={{ width: CUBICLE_LAYERS[4].cadWidth }}
              />

              {/* Layer 5: Stainless Steel Foot */}
              <div
                className={`relative flex flex-col transition-all duration-500 rounded-lg overflow-hidden border ${
                  activeLayer === 5 
                    ? "border-[#0d2461] bg-[#0d2461]/15 shadow-[0_0_20px_rgba(13,36,97,0.15)] scale-[1.02]" 
                    : "border-[#cbd5e1] bg-slate-100/60"
                }`}
                style={{ width: CUBICLE_LAYERS[5].cadWidth }}
              >
                {Array.from({ length: 7 }).map((_, i) => (
                  <div
                    key={i}
                    className={`flex-1 border-b last:border-b-0 transition-colors duration-300 ${
                      activeLayer === 5 ? "border-[#0d2461] bg-white/40" : "border-[#cbd5e1]"
                    }`}
                  />
                ))}
              </div>

              {/* HIGH-TECH SCANNER LASER BAR */}
              <motion.div
                style={{ left: scannerX }}
                className="absolute top-[-4%] bottom-[-4%] w-0.5 bg-gradient-to-b from-[#3b82f6] via-[#0d2461] to-[#3b82f6] z-40 shadow-[0_0_15px_#3b82f6] flex flex-col justify-between items-center"
              >
                <div className="w-3.5 h-3.5 rounded-full border-2 border-[#0d2461] bg-[#f5bd24] shadow-md animate-pulse -translate-y-1" />
                <div className="w-3.5 h-3.5 rounded-full border-2 border-[#0d2461] bg-[#f5bd24] shadow-md animate-pulse translate-y-1" />
              </motion.div>

            </div>

            {/* Right Side: Styled Labels */}
            <div className="absolute right-4 sm:right-6 top-0 bottom-0 w-[38%] sm:w-[36%] z-20 flex flex-col justify-between py-6">
              {CUBICLE_LAYERS.map((layer) => {
                const isActive = activeLayer === layer.id;
                return (
                  <div
                    key={layer.id}
                    className={`transition-all duration-300 rounded-xl px-3 py-1.5 flex flex-col justify-center ${
                      isActive
                        ? "bg-[#0d2461] text-white shadow-lg translate-x-1 border border-[#0d2461]"
                        : "bg-white/60 hover:bg-white text-[#475569] border border-transparent"
                    }`}
                  >
                    <span
                      className={`font-mono text-[10px] md:text-xs tracking-wider uppercase font-bold block leading-tight ${
                        isActive ? "text-white" : "text-[#0d2461]"
                      }`}
                    >
                      {layer.title}
                    </span>
                    <span
                      className={`text-[9px] md:text-[10px] font-sans transition-colors block mt-0.5 ${
                        isActive ? "text-[#f5bd24] font-medium" : "text-[#94a3b8]"
                      }`}
                    >
                      {layer.subtitle}
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