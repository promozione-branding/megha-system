'use client';

import { useRef, useEffect } from 'react';

const SVG_MASK = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1100 200' preserveAspectRatio='xMidYMid meet'><text x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle' font-family='Arial,sans-serif' font-weight='900' font-size='110' fill='black'>MEGHA SYSTEMS</text></svg>")`;

const initialMaskSize = 0.8;
const targetMaskSize = 40;
const easing = 0.15;

export default function TextMaskScroll() {
  const container = useRef(null);
  const stickyMask = useRef(null);
  const innerMedia = useRef(null);
  const headerText = useRef(null);

  useEffect(() => {
    let easedScrollProgress = 0;
    let rafId = 0;

    const animate = () => {
      if (
        stickyMask.current &&
        container.current &&
        innerMedia.current
      ) {
        const containerRect =
          container.current.getBoundingClientRect();

        const totalScrollHeight =
          containerRect.height - window.innerHeight;

        const scrollProgress =
          totalScrollHeight > 0
            ? Math.max(0, -containerRect.top / totalScrollHeight)
            : 0;

        const delta =
          scrollProgress - easedScrollProgress;

        easedScrollProgress += delta * easing;

        const progress = Math.max(
          0,
          Math.min(1, easedScrollProgress)
        );

        const isMobile = window.innerWidth < 640;

        /*
         * Header
         */
        if (headerText.current) {
          headerText.current.style.opacity = `${Math.max(
            0,
            1 - scrollProgress * 8
          )}`;
        }

        /*
         * =========================
         * PHASE 1 — MASK ZOOM
         * =========================
         */

        const zoomProgress = Math.min(
          1,
          progress / 0.6
        );

        const mobileTargetSize = 32;

        const currentTargetSize = isMobile
          ? mobileTargetSize
          : targetMaskSize;

        const maskSize =
          (initialMaskSize +
            currentTargetSize *
            Math.pow(zoomProgress, 3)) *
          100;

        if (zoomProgress > 0.99) {
          stickyMask.current.style.maskImage = 'none';
          stickyMask.current.style.webkitMaskImage = 'none';
        } else {
          stickyMask.current.style.maskImage = SVG_MASK;
          stickyMask.current.style.webkitMaskImage = SVG_MASK;

          stickyMask.current.style.maskSize =
            `${maskSize}%`;

          stickyMask.current.style.webkitMaskSize =
            `${maskSize}%`;
        }

        /*
         * =========================
         * PHASE 2 — IMAGE SHRINK
         * =========================
         */

        const shrinkProgress = Math.max(
          0,
          (progress - 0.6) / 0.4
        );

        /*
         * Desktop:
         * 100% -> 90%
         *
         * Mobile:
         * 100% -> 94%
         *
         * This prevents the video from becoming
         * too small on narrow screens.
         */
        const scale = isMobile
          ? 1 - shrinkProgress * 0.06
          : 1 - shrinkProgress * 0.1;

        /*
         * Smaller movement on mobile
         */
        const translateY = isMobile
          ? shrinkProgress * 25
          : shrinkProgress * 50;

        /*
         * Smaller radius on mobile
         */
        const borderRadius = isMobile
          ? shrinkProgress * 20
          : shrinkProgress * 32;

        innerMedia.current.style.transform =
          `scale(${scale}) translateY(${translateY}px)`;

        innerMedia.current.style.borderRadius =
          `${borderRadius}px`;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <main className="relative bg-[#0f0f11]">
      <div
        ref={container}
        className="relative h-[220vh] sm:h-[250vh]"
      >
        <div className="sticky top-0 h-[100svh] min-h-[600px] w-full overflow-hidden flex items-center justify-center bg-[#0f0f11]">

          {/* =========================
              HEADER
          ========================= */}

          <div
            ref={headerText}
            className="
              absolute
              top-[27%]
              sm:top-[30%]
              left-1/2
              -translate-x-1/2
              z-20
              w-full
              px-5
              text-center
              pointer-events-none
            "
          >
            <p
              className="
                text-white/80
                text-[10px]
                xs:text-xs
                sm:text-sm
                font-semibold
                tracking-[0.18em]
                sm:tracking-[0.3em]
                uppercase
                leading-relaxed
              "
            >
              CUBICLE ENGINEERING EXCELLENCE
            </p>
          </div>

          {/* =========================
              MASK
          ========================= */}

          <div
            ref={stickyMask}
            className="
              absolute
              inset-0
              w-full
              h-full
              overflow-hidden
              flex
              items-center
              justify-center
            "
            style={{
              maskImage: SVG_MASK,
              WebkitMaskImage: SVG_MASK,

              /*
               * Slightly higher on mobile.
               * Desktop keeps your original position.
               */
              maskPosition: '50% 57%',
              WebkitMaskPosition: '50% 57%',

              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',

              /*
               * Responsive starting size
               */
              maskSize: '80%',
              WebkitMaskSize: '80%',
            }}
          >
            {/* =========================
                VIDEO
            ========================= */}

            <div
              ref={innerMedia}
              className="
                relative
                w-full
                h-full
                overflow-hidden
                transform-gpu
                origin-center
                will-change-transform
              "
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                "
              >
                <source
                  src="/assets/video/CLIP 4 COMPRESSED.mp4"
                  type="video/mp4"
                />
              </video>

              {/* =========================
                  LOGO
              ========================= */}

              <div
                className="
                  absolute
                  bottom-4
                  right-3
                  sm:bottom-6
                  sm:right-5
                  w-24
                  sm:w-36
                  md:w-45
                  bg-white
                  p-1.5
                  sm:p-2
                  rounded-md
                  sm:rounded-lg
                "
              >
                <img
                  src="/assets/logo/1.png"
                  alt="Megha Systems"
                  className="block w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}