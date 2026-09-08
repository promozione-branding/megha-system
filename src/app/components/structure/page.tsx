"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";

interface LayerData {
  id: number;
  number: number;
  title: string;
  subtitle: string;
  x: string;
  y: string;
}

const CUBICLE_LAYERS: LayerData[] = [
  {
    id: 0,
    number: 1,
    title: "SS Adjustable Leg",
    subtitle: "Adjustable stainless steel support leg",
    x: "45%",
    y: "87%",
  },
  {
    id: 1,
    number: 2,
    title: "Door Stopper",
    subtitle: "Floor-mounted door protection stopper",
    x: "38%",
    y: "63%",
  },
  {
    id: 2,
    number: 3,
    title: "Top Rail",
    subtitle: "Strong aluminum top support",
    x: "50%",
    y: "12%",
  },
  {
    id: 3,
    number: 4,
    title: "Vertical Strip",
    subtitle: "Silver-Ion Surface Shield",
    x: "82%",
    y: "40%",
  },
  {
    id: 4,
    number: 5,
    title: "Indicator Lock",
    subtitle: "Secure internal privacy locking mechanism",
    x: "73%",
    y: "47%",
  },
  {
    id: 5,
    number: 6,
    title: "Door Knob",
    subtitle: "Durable stainless steel door knob",
    x: "15%",
    y: "53%",
  },
 
];

export default function LightWallSectionScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeLayer, setActiveLayer] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      CUBICLE_LAYERS.length - 1,
      Math.floor(latest * CUBICLE_LAYERS.length)
    );

    setActiveLayer(index);
  });

  const active = CUBICLE_LAYERS[activeLayer];

  return (
    <section
      ref={containerRef}
      className="relative hidden md:block w-full bg-[#f8fafc] font-sans"
    >
      {/* Scroll height */}
      <div className="h-[300vh]">
        {/* Sticky presentation */}
        <div className="sticky top-0 h-screen w-full flex items-center ">
          <div className="max-w-[1500px] mx-auto w-full px-5 md:px-7 ">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

              {/* LEFT CONTENT */}
              <div className="lg:col-span-4 relative">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d2461]/5 border border-[#0d2461]/10 text-[10px] md:text-xs font-mono tracking-widest text-[#0d2461] uppercase font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#0d2461] animate-pulse" />
                  MEGHA SYSTEM ARCHITECTURE
                </span>

                <h2 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.08] text-[#0d2461]">
                  Designed to Perform.
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d2461] to-[#2563eb]">
                    Built to Endure.
                  </span>
                </h2>

                <p className="mt-6 text-[#475569] text-sm md:text-base leading-relaxed max-w-lg">
                  A complete cubicle system engineered around material
                  strength, precision detailing, and reliable components.
                </p>

                {/* ACTIVE COMPONENT */}
                <div className="mt-10 z-[999] min-h-[120px]">
                  <div className="text-xs font-mono text-[#94a3b8] tracking-[0.25em]">
                    COMPONENT 0{active.number}
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2"
                    >
                      <h3 className="text-2xl md:text-3xl font-bold text-[#0d2461]">
                        {active.title}
                      </h3>

                      <p className="mt-2 text-sm text-[#64748b]">
                        {active.subtitle}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* SCROLL INDICATOR */}
                <div className="mt-8 flex items-center gap-3">
                  <div className="h-px w-10 bg-[#0d2461]" />
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#64748b]">
                    Scroll to explore
                  </span>
                </div>
              </div>

              {/* IMAGE */}
              <div className="lg:col-span-8">
                <div className="relative w-full  rounded-3xl border border-[#e2e8f0] bg-white shadow-[0_20px_60px_rgba(13,36,97,0.10)]">

                  <img
                    src="/assets/new2.jpeg"
                    alt="Bathroom cubicle system with numbered component markers"
                    className="block w-full rounded-2xl md:h-[80vh]"
                  />

                  {/* IMAGE HOTSPOTS */}
                  {CUBICLE_LAYERS.map((layer) => {
                    const isActive = activeLayer === layer.id;

                    return (
                      <motion.div
                        key={layer.id}
                        className="absolute"
                        style={{
                          left: layer.x,
                          top: layer.y,
                          transform: "translate(-50%, -50%)",
                        }}
                        animate={{
                          scale: isActive ? 1.15 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Connector */}
                        <motion.div
                          className={`absolute right-full top-1/2 mr-2 h-px origin-right ${
                            isActive
                              ? "w-20 bg-[#0d2461]"
                              : "w-8 bg-white/80"
                          }`}
                        />

                        {/* Number */}
                        <div
                          className={`
                            relative
                            flex items-center justify-center
                            w-10 h-10 md:w-10 md:h-10
                            rounded-full
                            border-2
                            font-mono
                            font-bold
                            text-sm md:text-base
                            transition-all duration-300
                            ${
                              isActive
                                ? "bg-[#0d2461] text-white border-white shadow-[0_0_0_5px_rgba(13,36,97,0.18)]"
                                : "bg-white/90 text-[#0d2461] border-white shadow-lg"
                            }
                          `}
                        >
                          {layer.number}

                          {isActive && (
                            <span className="absolute inset-0 rounded-full border border-[#0d2461] animate-ping opacity-40" />
                          )}
                        </div>

                        {/* Desktop label directly on image */}
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{
                                opacity: 0,
                                x: 10,
                              }}
                              animate={{
                                opacity: 1,
                                x: 0,
                              }}
                              exit={{
                                opacity: 0,
                                x: 10,
                              }}
                              className="
                                absolute
                                left-14
                                top-1/2
                                -translate-y-1/2
                                whitespace-nowrap
                                rounded-xl
                                bg-white
                             
                                overflow-hidden
                                px-2
                                py-2
                                shadow-xl
                                border border-[#e2e8f0]
                                z-20
                              "
                            >
                              <div className="text-xs font-bold tracking-wider text-[#0d2461]">
                                {layer.title}
                              </div>

                              <div className="mt-1 text-[10px] text-wrap  text-[#64748b]">
                                {layer.subtitle}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}

                  {/* IMAGE BOTTOM INFO */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <div className="rounded-full bg-white/90 backdrop-blur-md border border-white px-4 py-2">
                      <span className="text-[10px] font-mono tracking-widest text-[#0d2461]">
                        SYSTEM DETAIL / 01
                      </span>
                    </div>

                    <div className="rounded-full bg-[#0d2461] text-white px-4 py-2">
                      <span className="text-[10px] font-mono tracking-widest">
                        {active.number} / {CUBICLE_LAYERS.length}
                      </span>
                    </div>
                  </div>
                </div>

                {/* MOBILE LABEL */}
                <div className="lg:hidden mt-4 rounded-2xl bg-white border border-[#e2e8f0] p-5">
                  <div className="text-[10px] font-mono tracking-widest text-[#94a3b8]">
                    COMPONENT 0{active.number}
                  </div>

                  <div className="mt-1 text-lg font-bold text-[#0d2461]">
                    {active.title}
                  </div>

                  <div className="mt-1 text-sm text-[#64748b]">
                    {active.subtitle}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}