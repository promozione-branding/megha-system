'use client';

import { useState, useRef } from 'react';
import { useScroll, motion, useTransform, useMotionTemplate } from 'framer-motion';

const data = [
  {
    title: "Ford",
    description: "Working on the Next-Generation HMI Experience without no driving experience.",
    speed: 0.5
  },
  {
    title: "UFC",
    description: "Developed the Future of UFC Sports Ecosystem despite not being a sports fan.",
    speed: 0.5
  },
  {
    title: "Lincoln",
    description: "Defined the visual concept and design language for the Lincoln Zephyr 2022 but never seen it in real life.",
    speed: 0.67
  },
  {
    title: "Royal Caribbean",
    description: "I was just one person on a massive team that created an entire Royal Caribbean eco-system.",
    speed: 0.8
  },
  {
    title: "Sleepiq",
    description: "Designed a 1M+ users product utilizing my best personal experience: sleeping.",
    speed: 0.8
  },
  {
    title: "NFL",
    description: "Explored the Future of Fantasy Football while being in a country where football means a total different sport.",
    speed: 0.8
  }
];

function Title({ project, setSelectedProject }: any) {
  const { title, speed, i } = project;
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', `${25 / speed}vw end`]
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <div ref={container} className="border-b border-[#b7ab98]/25 relative z-10 cursor-default">
      <div 
        className="inline-block pl-[10%]"
        onMouseOver={() => setSelectedProject(i)}
        onMouseLeave={() => setSelectedProject(null)}
      >
        <div className="relative">
          <motion.p 
            style={{ clipPath: clip }}
            className="m-0 text-[#b7ab98] uppercase text-[8vw] leading-[7.5vw] font-bold relative z-[2] inline-block"
          >
            {title}
          </motion.p>
          <p className="m-0 text-[#1c1c1c] uppercase text-[8vw] leading-[7.5vw] font-bold absolute top-0 left-0 z-[1] inline-block">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

function Titles({ data, setSelectedProject }: any) {
  return (
    <div className="w-full border-t border-[#b7ab98]/25">
      {data.map((project: any, i: number) => (
        <Title key={i} project={{ ...project, i }} setSelectedProject={setSelectedProject} />
      ))}
    </div>
  );
}

function Descriptions({ data, selectedProject }: any) {
  const crop = (string: string, maxLength: number) => {
    return string.substring(0, maxLength);
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-20 flex flex-col">
      {data.map((project: any, i: number) => {
        const { title, description } = project;
        return (
          <div 
            key={i} 
            className="bg-[#ec4e39] flex justify-between items-center px-[10%] border-b border-transparent transition-all duration-300 ease-out"
            style={{
              clipPath: selectedProject === i ? "inset(0% 0 0%)" : "inset(50% 0 50%)",
              height: "7.5vw"
            }}
          >
            <p className="text-[#010101] uppercase font-bold text-[8vw] leading-[7.5vw] m-0 z-10 relative">
              {crop(title, 9)}
            </p>
            <p className="w-[40%] text-white text-[1vw] font-bold m-0 leading-snug">
              {description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <div className="relative w-full z-10 py-16">
      <Titles data={data} setSelectedProject={setSelectedProject} />
      <Descriptions data={data} selectedProject={selectedProject} />
    </div>
  );
}
