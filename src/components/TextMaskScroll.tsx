'use client';

import { useRef, useEffect } from 'react';

// SVG mask with "MEGHA SYSTEM" bold text centered
const SVG_MASK = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 200" width="1100" height="200"><text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="system-ui,-apple-system,BlinkMacSystemFont,Arial,sans-serif" font-weight="900" font-size="130" fill="black">MEGHA SYSTEM</text></svg>')`;

const initialMaskSize = 0.8;
const targetMaskSize = 40; // Increased slightly to ensure it fully covers before shrinking
const easing = 0.15;

export default function TextMaskScroll() {
  const container = useRef<HTMLDivElement>(null);
  const stickyMask = useRef<HTMLDivElement>(null);
  const innerMedia = useRef<HTMLDivElement>(null);
  const headerText = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let easedScrollProgress = 0;
    let rafId = 0;

    const animate = () => {
      if (stickyMask.current && container.current && innerMedia.current) {
        const containerRect = container.current.getBoundingClientRect();
        const totalScrollHeight = containerRect.height - window.innerHeight;
        const scrollProgress = totalScrollHeight > 0 ? Math.max(0, -containerRect.top / totalScrollHeight) : 0;

        const delta = scrollProgress - easedScrollProgress;
        easedScrollProgress += delta * easing;
        // Clamp between 0 and 1
        const progress = Math.max(0, Math.min(1, easedScrollProgress));

        // Fade out top overlay text immediately as scroll starts
        if (headerText.current) {
          headerText.current.style.opacity = `${Math.max(0, 1 - scrollProgress * 8)}`;
        }

        // --- PHASE 1: 0% to 60% — Text Mask Zooms In ---
        const zoomProgress = Math.min(1, progress / 0.6);
        const maskSize = (initialMaskSize + (targetMaskSize * Math.pow(zoomProgress, 3))) * 100;
        
        // At the very end of zoom, remove mask completely to prevent clipping artifacts
        if (zoomProgress > 0.99) {
          stickyMask.current.style.maskImage = 'none';
          stickyMask.current.style.webkitMaskImage = 'none';
        } else {
          stickyMask.current.style.maskImage = SVG_MASK;
          stickyMask.current.style.webkitMaskImage = SVG_MASK;
          stickyMask.current.style.maskSize = `${maskSize}%`;
          stickyMask.current.style.webkitMaskSize = `${maskSize}%`;
        }

        // --- PHASE 2: 60% to 100% — Image Repositions & Shrinks ---
        const shrinkProgress = Math.max(0, (progress - 0.6) / 0.4);
        
        // Scale down from 1 to 0.90 (90% width)
        const scale = 1 - (shrinkProgress * 0.10);
        // Add border radius from 0 to 32px
        const borderRadius = shrinkProgress * 32;
        // Move it down slightly as it shrinks
        const translateY = shrinkProgress * 50;

        innerMedia.current.style.transform = `scale(${scale}) translateY(${translateY}px)`;
        innerMedia.current.style.borderRadius = `${borderRadius}px`;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <main className="relative bg-[#0f0f11]">
      {/* 250vh provides a smooth scroll zoom and shrink without excessive empty scroll space */}
      <div ref={container} className="relative h-[250vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#0f0f11]">
          {/* Overlay Text Above MEGHA SYSTEM */}
          <div
            ref={headerText}
            className="absolute top-[28%] sm:top-[30%] left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none"
          >
            <p className="text-white/80 text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase">
              CUBICLE ENGINEERING EXCELLENCE
            </p>
          </div>

          <div
            ref={stickyMask}
            className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center"
            style={{
              maskImage: SVG_MASK,
              WebkitMaskImage: SVG_MASK,
              // Fixed position (45% X, 60% Y)
              maskPosition: '45% 60%',
              WebkitMaskPosition: '45% 60%',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskSize: `${initialMaskSize * 100}%`,
              WebkitMaskSize: `${initialMaskSize * 100}%`,
            }}
          >
            {/* Inner media wrapper that scales and repositions */}
            <div 
              ref={innerMedia}
              className="relative w-full h-full overflow-hidden transform-gpu origin-center will-change-transform"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source
                  src="/assets/video/video_2.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
