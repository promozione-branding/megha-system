'use client';

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Html, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

interface CarouselItem {
  id: number;
  title: string;
  subtitle: string;
  color: string;
}

const ITEMS: CarouselItem[] = [
  { id: 1, title: 'COMPACT LAMINATE', subtitle: 'High-Pressure Impact Resistant Panels', color: '#1e40af' },
  { id: 2, title: 'ALUMINUM HARDWARE', subtitle: 'Anodized Anti-Corrosive Profiles', color: '#0284c7' },
  { id: 3, title: 'NYLON FITTINGS', subtitle: 'Heavy Duty Self-Closing Hinges', color: '#0d9488' },
  { id: 4, title: 'STAINLESS FOOT', subtitle: 'Adjustable Grade 304 Legs', color: '#3b82f6' },
  { id: 5, title: 'PRIVACY LOCKS', subtitle: 'Occupancy Indicator Latch Systems', color: '#4f46e5' },
];

function Card({ item, index, total, activeIndex, onClick }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Calculate radial position on 3D carousel ring
  const angle = ((index - activeIndex) / total) * Math.PI * 2;
  const radius = 4.5;
  const x = Math.sin(angle) * radius;
  const z = Math.cos(angle) * radius - radius + 1;
  const rotationY = angle;
  const isActive = index === activeIndex;

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.position.x = THREE.MathUtils.damp(meshRef.current.position.x, x, 6, delta);
      meshRef.current.position.z = THREE.MathUtils.damp(meshRef.current.position.z, z, 6, delta);
      meshRef.current.rotation.y = THREE.MathUtils.damp(meshRef.current.rotation.y, rotationY, 6, delta);
    }
  });

  return (
    <Float speed={isActive ? 2 : 0} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh
        ref={meshRef}
        onClick={onClick}
        scale={isActive ? [2.2, 3, 0.1] : [1.8, 2.5, 0.1]}
      >
        <boxGeometry />
        <meshStandardMaterial
          color={item.color}
          roughness={0.2}
          metalness={0.5}
          wireframe={!isActive}
        />
        <Html
          transform
          distanceFactor={3}
          position={[0, 0, 0.6]}
          className="pointer-events-none select-none text-center p-4 w-48 bg-black/80 backdrop-blur-md rounded-xl border border-white/20 text-white"
        >
          <div className="text-xs font-mono tracking-widest text-blue-400 mb-1">0{item.id}</div>
          <div className="font-bold text-sm leading-tight uppercase mb-2">{item.title}</div>
          <div className="text-[10px] text-zinc-400 leading-tight">{item.subtitle}</div>
        </Html>
      </mesh>
    </Float>
  );
}

export default function ThreeCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % ITEMS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + ITEMS.length) % ITEMS.length);
  };

  return (
    <section className="relative w-full h-[80vh] bg-black text-white overflow-hidden flex flex-col items-center justify-center">
      {/* Header */}
      <div className="absolute top-8 left-8 z-20 font-sans">
        <div className="text-xs font-mono tracking-widest text-blue-500 uppercase mb-1">Interactive 3D Showcase</div>
        <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight">Megha System Hardware</h2>
      </div>

      {/* 3D Canvas Carousel */}
      <div className="w-full h-full cursor-grab active:cursor-grabbing">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={50} />
          <ambientLight intensity={0.7} />
          <directionalLight position={[10, 10, 10]} intensity={1.5} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#1e40af" />

          <group position={[0, -0.2, 0]}>
            {ITEMS.map((item, index) => (
              <Card
                key={item.id}
                item={item}
                index={index}
                total={ITEMS.length}
                activeIndex={activeIndex}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </group>
        </Canvas>
      </div>

      {/* Control Buttons */}
      <div className="absolute bottom-8 z-20 flex items-center gap-4">
        <button
          onClick={handlePrev}
          className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-mono uppercase tracking-widest transition-all"
        >
          ← Prev
        </button>
        <span className="font-mono text-xs text-zinc-400">
          0{activeIndex + 1} / 0{ITEMS.length}
        </span>
        <button
          onClick={handleNext}
          className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-mono uppercase tracking-widest transition-all"
        >
          Next →
        </button>
      </div>
    </section>
  );
}
