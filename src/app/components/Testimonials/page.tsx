"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Professional, precise, and visionary. Their thoughtful, innovative designs add lasting value to every square foot of each unique project.",
    name: "Jonathan Pierce",
    role: "Real Estate Developer",
    image:
      "https://i.pravatar.cc/100?img=12",
  },
  {
    text: "From the first sketch to the final finish, every detail was impeccably planned. My home now feels like a warm, personal reflection of me.",
    name: "Emma Caldwell",
    role: "Homeowner",
    image:
      "https://i.pravatar.cc/100?img=47",
  },
  {
    text: "They transformed our space into an experience. The layout and textures work in harmony. Guests constantly compliment the design.",
    name: "Michael Tan",
    role: "Restaurant Owner",
    image:
      "https://i.pravatar.cc/100?img=11",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full overflow-hidden bg-white py-[3pc]">
      <div className="mx-auto max-w-[1536px] px-5 sm:px-8 lg:px-12">

        {/* ================= MAIN AREA ================= */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[48%_52%]">

          {/* ================= LEFT IMAGE ================= */}
          <div className="relative z-10">

            <div className="relative aspect-[1.34/1] w-full overflow-hidden rounded-[14px]">
              <img
                src="https://media.istockphoto.com/id/1206101478/photo/row-of-public-toilet-decorated-with-wooden-partition.jpg?s=612x612&w=0&k=20&c=dU8Q7gD4UC905t0YCB2WECR8PYRdjNzgH9f1IctjtEA="
                alt="Refined interior space"
                
                
                className="object-cover"
              />

              {/* Bottom white curved accent */}
              <div className="absolute bottom-0 right-0 h-[38px] w-[38px] rounded-tl-[30px] bg-white" />

              <div className="absolute bottom-0 right-0 h-[17px] w-[17px] rounded-full bg-white" />
            </div>

          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="relative z-20 pt-10 lg:pl-6 lg:pt-5 xl:pl-8">

            {/* Label */}
            <div className="mb-6 flex items-center gap-4">
              <span className="text-sm sm:text-base lg:text-lg font-bold uppercase tracking-[0.35em] text-[#0d2461]">
                Testimonials
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-[570px] text-[42px] font-semibold leading-[0.98] tracking-[-0.045em] text-black sm:text-[50px] lg:text-[52px] xl:text-[56px]">
              Reflections of
              <br />
              Refined Spaces.
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-[590px] text-sm leading-6 text-gray-500 sm:text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

          </div>

          {/* ================= TESTIMONIAL CARDS ================= */}
          <div
            className="
              relative
              z-30
              mt-[-1px]
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
              lg:absolute
              lg:left-[29%]
              lg:top-[310px]
              lg:mt-0
              lg:w-[71%]
              lg:grid-cols-3
              lg:gap-6
            "
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="
                  relative
                  flex
                  min-h-[250px]
                  flex-col
                  rounded-[14px]
                  border
                  border-[#ebe7e1]
                  bg-[#f9f7f3]
                  p-6
                  shadow-[0_4px_18px_rgba(0,0,0,0.04)]
                  sm:p-7
                  lg:min-h-[260px]
                "
              >

                {/* Stars */}
                <div className="mb-6 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      className="text-[#f5bd24] fill-[#f5bd24]"
                    />
                  ))}
                </div>

                {/* Testimonial */}
                <p className="max-w-[280px] text-[15px] font-medium italic leading-[1.32] tracking-[-0.02em] text-black">
                  {testimonial.text}
                </p>

                {/* User */}
                <div className="mt-auto flex items-center gap-3 pt-7">

                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={42}
                    height={42}
                    className="h-[42px] w-[42px] rounded-full object-cover"
                  />

                  <div>
                    <h4 className="text-[13px] font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>

                    <p className="mt-0.5 text-[11px] text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>

                </div>

                {/* Quote mark */}
                <span
                  className="
                    absolute
                    bottom-6
                    right-5
                    font-serif
                    text-[48px]
                    leading-none
                    text-gray-300
                  "
                >
                  ”
                </span>

              </div>
            ))}
          </div>

        </div>

        {/* ================= SLIDER DOTS ================= */}
        <div className="mt-8 flex items-center justify-center gap-2 lg:mt-[100px]">

          <span className="h-1.5 w-1.5 rounded-full bg-gray-200" />
          <span className="h-1.5 w-1.5 rounded-full bg-gray-200" />
          <span className="h-1.5 w-1.5 rounded-full bg-gray-200" />
          <span className="h-1.5 w-1.5 rounded-full bg-gray-500" />

        </div>

      </div>
    </section>
  );
}