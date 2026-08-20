'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      autoResize: true,
      smoothWheel: true,
    });

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Recalculate Lenis scroll dimensions dynamically when DOM changes
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });

    if (document.body) {
      resizeObserver.observe(document.body);
    }

    const handleResize = () => lenis.resize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleResize);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
