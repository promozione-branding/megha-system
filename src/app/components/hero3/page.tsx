'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

interface CardMotionTransform {
  left: MotionValue<string>;
  y: MotionValue<string>;
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  zIndex: number;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Kora',
    category: 'Consulting Site',
    image: '/assets/moving_down_images/image1.jpeg',
  },
  {
    id: 2,
    title: 'KYMA',
    category: 'AI Agency',
    image: '/assets/moving_down_images/image2.jpeg',
  },
  {
    id: 3,
    title: 'Mugen Studio',
    category: 'Design Studio',
    image: '/assets/moving_down_images/image3.jpeg',
  },
  {
    id: 4,
    title: 'Axiom Performance',
    category: 'Ecommerce Site',
    image: '/assets/moving_down_images/image4.jpeg',
  },
];

export default function Hero3() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Card 1 (Row 1 Left in Grid)
  // Target Y: 96vh (safely below the 'Latest Projects' header)
  const card1Left = useTransform(scrollYProgress, [0.08, 0.65], ['55%', '0%']);
  const card1Y = useTransform(scrollYProgress, [0.08, 0.65], ['16vh', '96vh']);
  const card1Rotate = useTransform(scrollYProgress, [0.08, 0.65], [-5, 0]);
  const card1Scale = useTransform(scrollYProgress, [0.08, 0.65], [0.88, 1]);

  // Card 2 (Row 1 Right in Grid)
  // Target Y: 96vh (safely below the 'Latest Projects' header)
  const card2Left = useTransform(scrollYProgress, [0.08, 0.65], ['60%', '52%']);
  const card2Y = useTransform(scrollYProgress, [0.08, 0.65], ['12vh', '96vh']);
  const card2Rotate = useTransform(scrollYProgress, [0.08, 0.65], [7, 0]);
  const card2Scale = useTransform(scrollYProgress, [0.08, 0.65], [0.82, 1]);

  // Card 3 (Row 2 Left in Grid)
  // Target Y: 146vh (balanced vertical gap below Row 1)
  const card3Left = useTransform(scrollYProgress, [0.08, 0.65], ['52%', '0%']);
  const card3Y = useTransform(scrollYProgress, [0.08, 0.65], ['22vh', '146vh']);
  const card3Rotate = useTransform(scrollYProgress, [0.08, 0.65], [-10, 0]);
  const card3Scale = useTransform(scrollYProgress, [0.08, 0.65], [0.78, 1]);

  // Card 4 (Row 2 Right in Grid)
  // Target Y: 146vh (balanced vertical gap below Row 1)
  const card4Left = useTransform(scrollYProgress, [0.08, 0.65], ['57%', '52%']);
  const card4Y = useTransform(scrollYProgress, [0.08, 0.65], ['26vh', '146vh']);
  const card4Rotate = useTransform(scrollYProgress, [0.08, 0.65], [5, 0]);
  const card4Scale = useTransform(scrollYProgress, [0.08, 0.65], [0.72, 1]);

  const cardMotionTransforms: CardMotionTransform[] = [
    { left: card1Left, y: card1Y, rotate: card1Rotate, scale: card1Scale, zIndex: 4 },
    { left: card2Left, y: card2Y, rotate: card2Rotate, scale: card2Scale, zIndex: 3 },
    { left: card3Left, y: card3Y, rotate: card3Rotate, scale: card3Scale, zIndex: 2 },
    { left: card4Left, y: card4Y, rotate: card4Rotate, scale: card4Scale, zIndex: 1 },
  ];

  return (
    <div ref={containerRef} className="relative bg-[#f8fafc] text-[#0f172a] min-h-[195vh] pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-14 relative">

        {/* --- HERO SECTION --- */}
        <div className="min-h-[70vh] pt-20 pb-8 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Hero Text Column */}
            <div className="lg:col-span-6 z-10 max-w-md">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/80 text-xs font-medium text-[#1e3a8a] mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for August&apos;25
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#0f172a] leading-[1.06] mb-6">
                Design that <br />
                <span className="text-[#334155]">delivers results.</span>
              </h1>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed font-normal">
                I help ambitious companies transform their digital presence through strategic design, high-performance web development, and brand identity.
              </p>

              <button className="px-6 py-3.5 rounded-full bg-[#0f172a] text-white font-semibold hover:bg-[#1e293b] transition-all shadow-md flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
                  👤
                </span>
                Book a call with me
              </button>
            </div>

            {/* Right Column Spacer */}
            <div className="lg:col-span-6 min-h-[55vh]" />
          </div>
        </div>

        {/* --- LATEST PROJECTS SECTION HEADER --- */}
        <div className="pt-16 pb-6 z-10 relative">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#0f172a]">
            Latest Projects
          </h2>
        </div>

        {/* Spacer for 2x2 Grid Height */}
        <div className="min-h-[105vh] w-full" />

        {/* --- ANIMATED CARDS LAYER --- */}
        <div className="absolute inset-0 w-full h-full pointer-events-none px-6 md:px-14">
          <div className="max-w-7xl mx-auto relative h-full">
            {projects.map((project, idx) => {
              const transform = cardMotionTransforms[idx];

              return (
                <motion.div
                  key={project.id}
                  style={{
                    left: transform.left,
                    y: transform.y,
                    rotate: transform.rotate,
                    scale: transform.scale,
                    zIndex: transform.zIndex,
                    willChange: 'left, transform',
                  }}
                  className="absolute top-0 w-[47%] max-w-[560px] pointer-events-auto flex flex-col group cursor-pointer transform-gpu"
                >
                  {/* Card Image Container */}
                  <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-xl shadow-slate-200/80 border border-slate-200/90 bg-white relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                      loading="eager"
                    />
                  </div>

                  {/* Title & Metadata */}
                  <div className="flex justify-between items-center mt-3.5 px-1">
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-[#0f172a] tracking-tight group-hover:text-blue-700 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">{project.category}</p>
                    </div>

                    <span className="text-xs font-semibold text-[#1e3a8a] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      ↗ View Project
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
