"use client";

import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    text: "We were looking for a reliable toilet cubicle manufacturer who could understand our requirements and deliver quality work. Megha Systems handled the project smoothly from start to finish.",
    name: "Jonathan Pierce",
    role: "Project Manager",
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    text: "The cubicles are well-finished, sturdy, and easy to maintain. The team was professional throughout the process and made sure everything was installed properly.",
    name: "Emma Caldwell",
    role: "Facility Manager",
    image: "https://i.pravatar.cc/100?img=47",
  },
  {
    text: "What impressed us most was the quality of the materials and attention to detail. The finished washroom looks modern, clean, and built to handle regular use.",
    name: "Michael Tan",
    role: "Architect",
    image: "https://i.pravatar.cc/100?img=11",
  },
  {
    text: "Megha Systems offered exactly the kind of customized toilet cubicle solution our project required. Their team was responsive, technically sound, and easy to work with.",
    name: "David Wilson",
    role: "Project Consultant",
    image: "https://i.pravatar.cc/100?img=13",
  },
  {
    text: "From choosing the right material to the final installation, the entire process was well managed. We received a practical washroom solution without compromising on the overall design.",
    name: "Sarah Mitchell",
    role: "Commercial Client",
    image: "https://i.pravatar.cc/100?img=32",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full overflow-hidden bg-white pt-10 pb-20">
      <div className="mx-auto max-w-[1536px] px-5 sm:px-8 lg:px-12">

        {/* ================= MAIN AREA ================= */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[48%_52%]">

          {/* ================= LEFT IMAGE ================= */}
          <div className="relative z-10">
            <div className="relative aspect-[1.34/1] w-full overflow-hidden rounded-[14px]">
              <img
                src="/4.jpeg"
                alt="Refined toilet cubicle interior"
                className="h-full w-full object-cover"
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
              <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#0d2461] sm:text-base lg:text-lg">
                Testimonials
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-[570px] text-[42px] font-semibold leading-[0.98] tracking-[-0.045em] text-black sm:text-[50px] lg:text-[52px] xl:text-[56px]">
              Trust, Built
              <br />
              into Every Project.
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-[590px] text-sm leading-6 text-gray-500 sm:text-[15px]">
              It fits the visual style much better and connects naturally
              with Megha Systems&apos; 5,000+ projects / 50,000+
              installations story.
            </p>
          </div>

          {/* ================= TESTIMONIAL SLIDER ================= */}
          <div
            className="
              relative
              z-30
              mt-8
              lg:absolute
              lg:left-[29%]
              lg:top-[310px]
              lg:mt-0
              lg:w-[71%]
            "
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              spaceBetween={20}
              speed={600}
              loop={true}
              navigation={{
                prevEl: ".testimonial-prev",
                nextEl: ".testimonial-next",
              }}
              pagination={{
                el: ".testimonial-pagination",
                clickable: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
              className="testimonials-swiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div
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
                          className="fill-[#f5bd24] text-[#f5bd24]"
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

                    {/* Quote */}
                    <span className="absolute bottom-6 right-5 font-serif text-[48px] leading-none text-gray-300">
                      ”
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* ================= SLIDER CONTROLS ================= */}
            <div className="mt-6 flex items-center justify-center gap-5">

              {/* Previous */}
              <button
                type="button"
                aria-label="Previous testimonial"
                className="
                  testimonial-prev
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-200
                  bg-white
                  text-[#0d2461]
                  transition-all
                  duration-300
                  hover:border-[#0d2461]
                  hover:bg-[#0d2461]
                  hover:text-white
                "
              >
                <ChevronLeft size={17} />
              </button>

              {/* Pagination */}
              <div className="testimonial-pagination flex items-center justify-center gap-2" />

              {/* Next */}
              <button
                type="button"
                aria-label="Next testimonial"
                className="
                  testimonial-next
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-200
                  bg-white
                  text-[#0d2461]
                  transition-all
                  duration-300
                  hover:border-[#0d2461]
                  hover:bg-[#0d2461]
                  hover:text-white
                "
              >
                <ChevronRight size={17} />
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}