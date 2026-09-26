"use client"
import React, { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import PopupForm from '../PopupForm'

export default function Afforable({city}) {
        const [open, setOpen] = useState(false);

  return (
    <>
        <section className="w-full overflow-hidden bg-[#f7f8fa] py-6 md:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* IMAGE SIDE */}
            <div className="relative">
              <div className="relative h-[420px] overflow-hidden rounded-[28px] sm:h-[520px]">
                <Image
                  src="/1.png"
                  alt={`Affordable Restroom Cubicles in ${city}`}
                  fill
                  priority
                  unoptimized
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 rounded-2xl bg-white/95 px-5 py-4 shadow-xl backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1E3A8A]">
                    Restroom Solutions
                  </p>

                  <p className="mt-1 text-lg font-bold text-[#171717]">
                    Built for Daily Use
                  </p>
                </div>

                {/* Arrow */}
                <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#1E3A8A] text-white shadow-lg">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </div>

            {/* CONTENT SIDE */}
            <div>
              {/* Small Label */}
              <span className="inline-block rounded-full bg-[#1E3A8A] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white">
                Affordable & Durable
              </span>

              {/* Heading */}
              <h2 className="mt-5 font-serif text-4xl font-bold leading-[1.1] tracking-tight text-[#171717] sm:text-5xl lg:text-[52px]">
                Affordable Restroom Cubicles in{" "}
                <span className="text-[#1E3A8A]">{city}</span>
              </h2>

              {/* Intro */}
              <p className="mt-6 text-base  text-[#555] sm:text-lg">
                Megha Systems offers{" "}
                <strong className="font-semibold text-[#222]">
                  restroom cubicles in {city}
                </strong>{" "}
                at a budget friendly price. We aim to keep the work solid,
                useful, and built to last, without pushing costs too high.
              </p>

              {/* Paragraph */}
              <p className="mt-5 text-base  text-[#555] sm:text-lg">
                Every job is not the same. That is why we plan the cubicles
                based on what you actually need. We look at the space on site,
                how many compartments you want, what material you prefer, and
                how often the restroom will be used.
              </p>

              {/* Remaining Content */}
              <p className="mt-7 text-base  text-[#555] sm:text-lg">
                These cubicles fit many places. You can use them in{" "}
                <strong className="font-semibold text-[#222]">
                  offices, schools, hospitals, hotels, shopping malls,
                  restaurants, and other commercial areas
                </strong>
                . They are meant for daily use and made to stay easy to
                maintain.
              </p>

              {/* CTA */}
              <div className="mt-8">
                <button onClick={() => setOpen(true)} className="inline-flex items-center gap-3 rounded-full bg-[#1E3A8A] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#172554] hover:shadow-lg">
                  Get a Project Quote
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

       <PopupForm
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  )
}
