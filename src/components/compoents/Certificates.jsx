"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { X, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CERTIFICATES = [
  {
    id: 1,
    title: "Authorized OEM",
    image: "/assets/certificates/14.png",
    alt: "Authorized OEM certification",
  },
  {
    id: 2,
    title: "Authorized OEM",
    image: "/assets/certificates/15.png",
    alt: "Authorized OEM certification",
  },
  {
    id: 3,
    title: "Authorised Distributor",
    image: "/assets/certificates/16.png",
    alt: "Authorised Distributor certification",
  },
  {
    id: 4,
    title: "Authorised Dealer",
    image: "/assets/certificates/17.png",
    alt: "Authorised Dealer certification",
  },
  {
    id: 5,
    title: "Authorised Dealer",
    image: "/assets/certificates/18.png",
    alt: "Authorised Dealer certification",
  },
  {
    id: 6,
    title: "Quality Assurance",
    image: "/assets/certificates/19.png",
    alt: "Quality Assurance certification",
  },
];

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  const openCertificate = useCallback((certificate) => {
    setSelectedCertificate(certificate);
  }, []);

  const closeCertificate = useCallback(() => {
    setSelectedCertificate(null);
  }, []);

  // Handle Escape + prevent body scrolling when popup is open
  useEffect(() => {
    if (!selectedCertificate) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeCertificate();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedCertificate, closeCertificate]);

  return (
    <>
      <section
        aria-labelledby="certifications-heading"
        className="relative w-full overflow-hidden border-y border-gray-200 bg-white py-10 sm:py-12"
      >
        <div className="mx-auto max-w-[1750px] px-5 sm:px-8 lg:px-12 xl:px-20 2xl:px-24">
          {/* =========================
              HEADER
          ========================== */}
          <div className="mb-8 flex flex-col gap-5 sm:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              {/* Label */}
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#0d2461]/10 bg-[#0d2461]/5 px-3 py-1">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-[#f5bd24]"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0d2461] sm:text-[11px] sm:tracking-[0.25em]">
                  Our Certifications
                </span>
              </div>

              {/* Heading */}
              <h2
                id="certifications-heading"
                className="text-3xl font-extrabold leading-[1.05] tracking-tight text-[#0d2461] sm:text-4xl lg:text-5xl"
              >
                Certified Quality.
                <br />
                <span className="font-medium text-[#0d2461]/40">
                  Proven Excellence.
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="max-w-md text-sm leading-relaxed text-[#0d2461]/60 sm:text-base">
              Our certifications reflect our commitment to quality, safety,
              reliability, and excellence across every project we deliver.
            </p>
          </div>

          {/* =========================
              SLIDER
          ========================== */}
          <div className="relative">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              loop={CERTIFICATES.length > 4}
              speed={650}
              slidesPerView={1}
              spaceBetween={14}
              watchSlidesProgress
              observer
              observeParents
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                el: paginationRef.current,
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;

                swiper.params.pagination.el = paginationRef.current;
              }}
              breakpoints={{
                480: {
                  slidesPerView: 1.3,
                  spaceBetween: 16,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 18,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 22,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
              }}
              className="!pb-10"
            >
              {CERTIFICATES.map((certificate) => (
                <SwiperSlide key={certificate.id}>
                  <button
                    type="button"
                    onClick={() => openCertificate(certificate)}
                    aria-label={`View ${certificate.title}`}
                    className="group block w-full select-none overflow-hidden rounded-2xl border border-[#0d2461]/10 bg-[#f8f9fb] p-2.5 text-left transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-[#0d2461]/20 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0d2461]/30 sm:p-3"
                  >
                    {/* Certificate Image */}
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white">
                      <Image
                        src={certificate.image}
                        alt={certificate.alt}
                        fill
                        sizes="
                          (max-width: 479px) 88vw,
                          (max-width: 639px) 75vw,
                          (max-width: 1023px) 45vw,
                          (max-width: 1279px) 30vw,
                          24vw
                        "
                        loading="lazy"
                        className="object-contain p-3 transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                      />

                      {/* Hover Overlay */}
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 flex items-center justify-center bg-[#0d2461]/0 transition-colors duration-300 group-hover:bg-[#0d2461]/10"
                      >
                        <span className="flex h-10 w-10 scale-90 items-center justify-center rounded-full bg-white text-[#0d2461] opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                          <Maximize2 className="h-4 w-4" />
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="px-1.5 pb-1 pt-3 sm:px-2 sm:pt-4">
                      <h3 className="text-sm font-semibold leading-snug text-[#0d2461] sm:text-base">
                        {certificate.title}
                      </h3>

                      <div
                        aria-hidden="true"
                        className="mt-2 h-[2px] w-8 rounded-full bg-[#f5bd24] transition-[width] duration-300 group-hover:w-14"
                      />
                    </div>
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Previous Button */}
            <button
              ref={prevRef}
              type="button"
              aria-label="Previous certificate"
              className="absolute left-0 top-1/2 z-20 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#0d2461]/10 bg-white text-[#0d2461] shadow-md transition-all duration-300 hover:bg-[#0d2461] hover:text-white md:flex"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Next Button */}
            <button
              ref={nextRef}
              type="button"
              aria-label="Next certificate"
              className="absolute right-0 top-1/2 z-20 hidden h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#0d2461]/10 bg-white text-[#0d2461] shadow-md transition-all duration-300 hover:bg-[#0d2461] hover:text-white md:flex"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Pagination */}
            <div
              ref={paginationRef}
              className="certificate-pagination absolute bottom-0 left-0 z-10 flex w-full justify-center"
            />
          </div>
        </div>
      </section>

      {/* =========================
          LIGHTBOX
      ========================== */}
      {selectedCertificate && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-modal-title"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm sm:p-5"
          onClick={closeCertificate}
        >
          <div
            className="relative flex max-h-[95vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl sm:rounded-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex shrink-0 items-center justify-between border-b border-gray-200 bg-white px-4 py-3 sm:px-6 sm:py-4">
              <div className="min-w-0 pr-4">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#f5bd24] sm:text-[10px]">
                  Certificate
                </p>

                <h3
                  id="certificate-modal-title"
                  className="mt-0.5 truncate text-sm font-semibold text-[#0d2461] sm:text-base"
                >
                  {selectedCertificate.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={closeCertificate}
                aria-label="Close certificate"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0d2461]/5 text-[#0d2461] transition-colors hover:bg-[#0d2461] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0d2461]/30"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Certificate */}
            <div className="min-h-0 flex-1 overflow-auto bg-[#f5f5f5] p-3 sm:p-6 md:p-8">
              <div className="relative mx-auto h-[75vh] min-h-[300px] w-full max-w-4xl">
                <Image
                  src={selectedCertificate.image}
                  alt={selectedCertificate.alt}
                  fill
                  priority
                  sizes="95vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}