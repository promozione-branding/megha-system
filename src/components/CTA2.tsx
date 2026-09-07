
'use client';

import  { useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import PopupForm from '@/components/PopupForm';

interface BuyNowBannerProps {
  heading?: string;
  subheading?: string;
  description?: string;
  buttonText?: string;
  discountBadge?: string;
}

export default function CTA2({
  heading = 'Transform your commercial space now!',
  subheading = 'Architectural perfection in every space',
  description = 'Discover our premium compact laminate cubicle systems and wall paneling, engineered for 100% moisture resistance, unmatched durability, and sleek modern design.',
  buttonText = 'Get a Quote',
}: BuyNowBannerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#0d2461] py-10 sm:py-12 lg:py-14 font-sans">
        {/* Background Decoration */}
        <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-[#f5bd24]/10 blur-3xl pointer-events-none" />

        {/* Gold top line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#f5bd24]" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            {/* Content */}
            <div className="max-w-3xl">
              <div className="mb-3 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#f5bd24]" />
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/80">
                  {subheading}
                </span>
              </div>

              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[46px]">
                {heading}
              </h2>

              <p className="mt-4 max-w-2xl text-sm font-medium leading-relaxed text-white/70 sm:text-base">
                {description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">

              {/* Get Quote */}
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="group inline-flex min-w-[175px] items-center justify-center gap-3 rounded-full bg-[#f5bd24] px-6 py-3.5 text-sm font-bold text-[#0d2461] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <span>{buttonText}</span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0d2461] text-white transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </button>

              {/* Call Now */}
              <a
                href="tel:+919873735716"
                className="group inline-flex min-w-[175px] items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-[#0d2461]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0d2461] transition-transform duration-300 group-hover:scale-110">
                  <Phone className="h-4 w-4" />
                </span>

                <span>Call Now</span>
              </a>

            </div>
          </div>

          {/* Bottom Trust Row */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-5 text-xs font-semibold text-white/50">
            <span>✓ Premium Quality</span>
            <span>✓ Moisture Resistant</span>
            <span>✓ Direct Pricing</span>
            <span>✓ Expert Support</span>
          </div>
        </div>
      </section>

      <PopupForm
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

