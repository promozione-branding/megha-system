'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { X, Maximize2 } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CERTIFICATES = [
    {
        id: 1,
        title: 'ISO Certification',
        image: '/assets/certificates/14.png',
        alt: 'ISO Certification',
    },
    {
        id: 2,
        title: 'Quality Certification',
        image: '/assets/certificates/15.png',
        alt: 'Quality Certification',
    },
    {
        id: 3,
        title: 'Industry Certification',
        image: '/assets/certificates/16.png',
        alt: 'Industry Certification',
    },
    {
        id: 4,
        title: 'Safety Certification',
        image: '/assets/certificates/17.png',
        alt: 'Safety Certification',
    },
    {
        id: 5,
        title: 'Excellence Award',
        image: '/assets/certificates/18.png',
        alt: 'Excellence Award',
    },
    {
        id: 6,
        title: 'Excellence Award',
        image: '/assets/certificates/19.png',
        alt: 'Excellence Award',
    },
];

export default function Certificates() {
    const [selectedCertificate, setSelectedCertificate] = useState <
        (typeof CERTIFICATES)[number] | null
        > (null);

    // Close popup with Escape
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setSelectedCertificate(null);
            }
        };

        if (selectedCertificate) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [selectedCertificate]);

    return (
        <>
            <section className="relative w-full overflow-hidden border-b border-t border-gray-200 bg-white pb-5 pt-10">
                <div className="mx-auto max-w-[1750px] px-6 sm:px-10 lg:px-16 xl:px-24">

                    {/* Heading */}
                    <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:mb-10 md:flex-row md:items-end">
                        <div>
                            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#0d2461]/10 bg-[#0d2461]/5 px-3 py-1">
                                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#f5bd24]" />

                                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#0d2461] sm:text-[11px]">
                                    OUR CERTIFICATIONS
                                </span>
                            </div>

                            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#0d2461] sm:text-4xl lg:text-5xl">
                                Certified Quality.
                                <br />
                                <span className="font-medium text-[#0d2461]/40">
                                    Proven Excellence.
                                </span>
                            </h2>
                        </div>

                        <p className="max-w-md text-sm leading-relaxed text-[#0d2461]/60 sm:text-base">
                            Our certifications reflect our commitment to quality,
                            safety, reliability, and excellence across every
                            project we deliver.
                        </p>
                    </div>

                    {/* Certificate Slider */}
                    <div className="relative">
                        <Swiper
                            modules={[Autoplay, Navigation, Pagination]}
                            spaceBetween={20}
                            slidesPerView={1}
                            loop={true}
                            speed={700}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            navigation={{
                                nextEl: '.certificate-next',
                                prevEl: '.certificate-prev',
                            }}
                            pagination={{
                                el: '.certificate-pagination',
                                clickable: true,
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
                                1280: {
                                    slidesPerView: 4,
                                    spaceBetween: 24,
                                },
                            }}
                            className="certificate-swiper !pb-10"
                        >
                            {CERTIFICATES.map((certificate) => (
                                <SwiperSlide key={certificate.id}>

                                    {/* Clickable Card */}
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setSelectedCertificate(certificate)
                                        }
                                        className="group block w-full cursor-pointer overflow-hidden rounded-2xl border border-[#0d2461]/10 bg-[#f8f9fb] p-3 text-left transition-all duration-500 hover:-translate-y-1 hover:border-[#0d2461]/20 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#0d2461]/30"
                                        aria-label={`View ${certificate.title}`}
                                    >
                                        {/* Certificate Image */}
                                        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white">

                                            <Image
                                                src={certificate.image}
                                                alt={certificate.alt}
                                                fill
                                                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
                                                className="object-contain p-3 transition-transform duration-700 group-hover:scale-[1.03]"
                                            />

                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 flex items-center justify-center bg-[#0d2461]/0 transition-all duration-300 group-hover:bg-[#0d2461]/10">
                                                <div className="flex h-11 w-11 scale-75 items-center justify-center rounded-full bg-white text-[#0d2461] opacity-0 shadow-xl transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                                                    <Maximize2 className="h-5 w-5" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <div className="px-2 pb-2 pt-4">
                                            <h3 className="text-sm font-semibold text-[#0d2461] sm:text-base">
                                                {certificate.title}
                                            </h3>

                                            <div className="mt-2 h-[2px] w-8 rounded-full bg-[#f5bd24] transition-all duration-300 group-hover:w-14" />
                                        </div>
                                    </button>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Previous */}
                        <button
                            type="button"
                            className="certificate-prev absolute left-0 top-1/2 z-20 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#0d2461]/10 bg-white text-[#0d2461] shadow-lg transition-all hover:bg-[#0d2461] hover:text-white md:flex"
                            aria-label="Previous certificate"
                        >
                            ←
                        </button>

                        {/* Next */}
                        <button
                            type="button"
                            className="certificate-next absolute right-0 top-1/2 z-20 hidden h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#0d2461]/10 bg-white text-[#0d2461] shadow-lg transition-all hover:bg-[#0d2461] hover:text-white md:flex"
                            aria-label="Next certificate"
                        >
                            →
                        </button>

                        {/* Pagination */}
                        <div className="certificate-pagination absolute bottom-0 left-0 z-10 flex w-full justify-center gap-1" />
                    </div>
                </div>
            </section>

            {/* =====================================================
                CERTIFICATE POPUP / LIGHTBOX
            ===================================================== */}
            {selectedCertificate && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-6"
                    onClick={() => setSelectedCertificate(null)}
                >
                    {/* Popup */}
                    <div
                        className="relative flex max-h-[95vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex shrink-0 items-center justify-between border-b border-gray-200 bg-white px-4 py-3 sm:px-6">
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5bd24]">
                                    CERTIFICATE
                                </p>

                                <h3 className="mt-0.5 text-sm font-semibold text-[#0d2461] sm:text-base">
                                    {selectedCertificate.title}
                                </h3>
                            </div>

                            <button
                                type="button"
                                onClick={() => setSelectedCertificate(null)}
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0d2461]/5 text-[#0d2461] transition-colors hover:bg-[#0d2461] hover:text-white"
                                aria-label="Close certificate"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Large Certificate */}
                        <div className="relative min-h-0 flex-1 overflow-auto bg-[#f5f5f5] p-4 sm:p-8">
                            <div className="relative mx-auto h-[70vh] w-full max-w-4xl">
                                <Image
                                    src={selectedCertificate.image}
                                    alt={selectedCertificate.alt}
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 95vw, 80vw"
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