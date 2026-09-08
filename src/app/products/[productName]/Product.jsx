"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Phone, Plus, Minus, Quote, FileText } from "lucide-react";
import Navbar from "@/app/components/Navabar/page";
import FooterSection from "@/app/components/Footer/page";
import { motion, useScroll, useTransform } from "framer-motion";
import { allProducts } from "@/data";
import { useParams } from "next/navigation";
import StickyContactButtons from "@/components/StickyContactButtons";
import CTA2 from "@/components/CTA2";

export default function ProjectDetail() {
  const { productName } = useParams();
  const [openAccordion, setOpenAccordion] = useState(0);
  const imageScrollRef = useRef(null);

  // Get slug from /products/[slug]
  const slug = productName;

  // Find product from allProducts
  const project = allProducts
    .flatMap((category) => category.products)
    .find((product) => product.slug === slug);

  const { scrollYProgress } = useScroll({
    target: imageScrollRef,
    offset: ["start start", "end end"],
  });

  const secondImageY = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    ["100%", "70%", "15%", "0%"],
  );

  const secondImageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.96, 0.99, 1],
  );
  const [dimensionType, setDimensionType] = useState("regular");
  // Prevent rendering if product doesn't exist
  if (!project) {
    return (
      <div className="min-h-screen bg-[#faf9f6] text-blue-900 font-sans flex flex-col">
        <Navbar />

        <main className="flex-1 flex items-center justify-center px-6 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-blue-950 mb-4">
              Product Not Found
            </h1>

            <p className="text-blue-900/70 mb-6">
              The product you are looking for does not exist.
            </p>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[#0d2461] text-white px-6 py-3 rounded-xl font-semibold"
            >
              Back to Products
              <ArrowRight size={18} />
            </Link>
          </div>
        </main>

        <FooterSection />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf9f6] text-blue-900 font-sans flex flex-col">
      {/* Global Navbar */}
      <Navbar />

      {/* Top Banner Header matching the requested design */}
      <section className="relative w-full bg-[#f6f3ee] py-14 sm:py-18 lg:py-20 px-6 overflow-hidden border-b border-[#e8e4dc]">
        {/* Architectural Washroom Cubicle System Line Art Illustration on Right */}
        <div className="absolute right-4 sm:right-12 lg:right-24 bottom-0 w-64 sm:w-80 lg:w-96 h-full opacity-20 pointer-events-none flex items-end justify-end select-none">
          <svg
            viewBox="0 0 300 260"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            className="w-full h-auto text-stone-900"
          >
            {/* Top Overhead Bracing Beam */}
            <path d="M40 50 h220 M40 54 h220" />

            {/* Left Cubicle Panel */}
            <rect x="50" y="54" width="60" height="150" rx="2" />
            <circle cx="100" cy="130" r="3" />
            <line x1="65" y1="204" x2="65" y2="230" />
            <line x1="95" y1="204" x2="95" y2="230" />

            {/* Center Main Cubicle Door */}
            <rect x="115" y="54" width="75" height="155" rx="3" />

            {/* Indicator Lock & Handle */}
            <circle cx="127" cy="132" r="5" />
            <line x1="127" y1="132" x2="137" y2="132" />
            <rect x="123" y="125" width="14" height="14" rx="2" />

            {/* Door pedestal feet */}
            <rect x="128" y="209" width="8" height="21" rx="1" />
            <rect x="168" y="209" width="8" height="21" rx="1" />

            {/* Right Cubicle Panel */}
            <rect x="195" y="54" width="60" height="150" rx="2" />
            <circle cx="205" cy="130" r="3" />
            <line x1="210" y1="204" x2="210" y2="230" />
            <line x1="240" y1="204" x2="240" y2="230" />

            {/* Floor Line */}
            <line x1="30" y1="230" x2="270" y2="230" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-3.5">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-stone-900 tracking-tight">
            {project.name}
          </h1>

          <p className="text-xs sm:text-sm text-stone-500 leading-relaxed max-w-3xl mx-auto font-normal">
            {project.shortDescription}
          </p>

          <div className="pt-2 text-xs sm:text-sm font-medium text-stone-600 tracking-wide flex items-center justify-center gap-2">
            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>

            <span className="text-stone-400">—</span>

            <Link href="/products" className="text-stone-900 font-semibold">
              All Products
            </Link>
          </div>
        </div>
      </section>

      <main className="flex-1 py-6 sm:py-8 lg:py-10 px-3 sm:px-6 lg:px-6 xl:px-8">
        <div className="max-w-[1850px] mx-auto flex flex-col-reverse lg:flex-row gap-6 lg:gap-10">
          {/* LEFT SIDEBAR */}
          <div className="w-full lg:w-1/3 xl:w-[350px] flex flex-col gap-6 flex-shrink-0">
            <div className="bg-white border border-blue-900/10 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-blue-950">
                Our Categories
              </h3>

              <p className="text-sm text-blue-800/80 mb-6 leading-relaxed">
                Explore our portfolio of bespoke commercial cubicle systems and
                interior architecture.
              </p>

              <div className="flex flex-col gap-3">
                {allProducts.map((category) => {
                  const isActiveCategory = category.products?.some(
                    (product) => product.slug === project.slug,
                  );

                  return (
                    <Link
                      key={category.slug}
                      href={`/products#${category.slug}`}
                      className={`px-5 py-4 text-sm font-semibold flex justify-between items-center rounded-xl transition-all ${
                        isActiveCategory
                          ? "bg-[#0d2461] text-white shadow-md"
                          : "bg-white border border-blue-100 text-blue-950 hover:bg-blue-50/60"
                      }`}
                    >
                      <span>{category.categoryName}</span>

                      <ArrowRight
                        size={16}
                        className={
                          isActiveCategory ? "text-white" : "text-blue-400"
                        }
                      />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-lg h-[450px] flex flex-col justify-end p-8 text-white">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${project.image || "/product/image.png"}')`,
                }}
              />

              <div className="absolute inset-0 bg-blue-950/85" />

              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4 leading-tight">
                  Let's Reimagine
                  <br />
                  Your Space.
                </h2>

                <p className="text-sm text-blue-100 mb-8 leading-relaxed opacity-90">
                  Ready to engineer moisture-proof restroom cubicles or luxury
                  interior spaces? Contact our architectural team.
                </p>

                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-white p-3 rounded-xl text-blue-900 shadow-md">
                    <Phone size={22} />
                  </div>

                  <div>
                    <div className="text-xs text-blue-200 font-medium tracking-wider uppercase mb-0.5">
                      Hotline Inquiry
                    </div>

                    <a
                      href="tel:+919873735716"
                      className="hover:text-white transition-colors font-medium text-white"
                    >
                      +91 9873735716
                    </a>
                  </div>
                </div>

                <Link
                  href="/projects"
                  className="w-full bg-white text-blue-950 py-3.5 font-bold flex justify-center items-center gap-2 rounded-xl hover:bg-blue-50 transition-colors shadow-md"
                >
                  <span>Our Projects</span>
                  <ArrowRight size={18} />
                </Link>

                <a
                  href="/catalog.pdf"
                  download
                  className="w-full bg-white text-blue-950 mt-3 py-3.5 font-bold flex justify-center items-center gap-2 rounded-xl hover:bg-blue-50 transition-colors shadow-md"
                >
                  <span>Download Catalog</span>
                  <FileText size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3 flex-1 flex flex-col">
            <div className="mb-6">
              <div className="text-xs font-bold tracking-[0.35em] text-[#0d2461] uppercase mb-3">
                P r o j e c t &nbsp; D e t a i l
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-950 mb-5 tracking-tight">
                {project.name}
              </h1>

              <p className="text-base sm:text-lg text-blue-900/80 leading-relaxed max-w-4xl">
                {project.shortDescription}
              </p>
            </div>

            {/* HERO IMAGE */}
            <div className="relative mb-16 overflow-hidden rounded-3xl shadow-md">
              <img
                src={project.image || "/product/image.png"}
                alt={project.name}
                className="w-full h-[450px] sm:h-[500px] lg:h-[600px] object-cover"
              />

              {/* Floating Info Bar */}
              <div className="absolute lg:flex hidden bottom-0 right-0 bg-white rounded-tl-[2.5rem] p-6 sm:p-8 lg:px-12 lg:py-8 flex flex-wrap md:flex-nowrap gap-6 sm:gap-10 lg:gap-16">
                <div>
                  <div className="text-sm text-stone-400 mb-1">Product:</div>

                  <div className="text-lg font-semibold text-stone-900">
                    {project.name}
                  </div>
                </div>

                <div>
                  <div className="text-sm text-stone-400 mb-1">Category:</div>

                  <div className="text-lg font-semibold text-stone-900">
                    {allProducts.find((category) =>
                      category.products?.some(
                        (product) => product.slug === project.slug,
                      ),
                    )?.categoryName || "-"}
                  </div>
                </div>

                {project?.imgSpecs && (
                  <div>
                    <div className="text-sm text-stone-400 mb-1">
                      Dimensions:
                    </div>

                    <div className="text-lg font-semibold text-stone-900">
                      {project?.imgSpecs.dimensions}
                    </div>
                  </div>
                )}

                {project?.imgSpecs && (
                  <div>
                    <div className="text-sm text-stone-400 mb-1">
                      Clearance:
                    </div>

                    <div className="text-lg font-semibold text-stone-900">
                      {project?.imgSpecs.clearance}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* DESIGN CONCEPT */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-blue-950 mb-4">
                Design Concept
              </h2>

              <p className="text-blue-900/80 leading-relaxed text-base sm:text-lg">
                {project.shortDescription}
              </p>
            </div>

            {/* Split Content: Materials & Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              {/* LEFT */}
              <div>
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="text-2xl font-bold text-blue-950">
                      Dimensions
                    </h3>

                    <div className="flex rounded-lg border border-blue-100 bg-white p-1">
                      <button
                        type="button"
                        onClick={() => setDimensionType("regular")}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                          dimensionType === "regular"
                            ? "bg-[#0d2461] text-white"
                            : "text-blue-900 hover:bg-blue-50"
                        }`}
                      >
                        Regular
                      </button>

                      <button
                        type="button"
                        onClick={() => setDimensionType("speciallyAbled")}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                          dimensionType === "speciallyAbled"
                            ? "bg-[#0d2461] text-white"
                            : "text-blue-900 hover:bg-blue-50"
                        }`}
                      >
                        Specially Abled
                      </button>
                    </div>
                  </div>

                  <ul className="space-y-3.5 text-blue-900 mb-8">
                    {project.dimensions?.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm sm:text-base"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#0d2461] mt-2 flex-shrink-0" />

                        <span>
                          <strong className="font-bold text-blue-950">
                            {item.name}:
                          </strong>{" "}
                          {item[dimensionType]} mm
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* KEY FEATURES */}
                <h3 className="text-2xl font-bold text-blue-950 mb-2">
                  Key Features
                </h3>

                <div className="flex flex-col gap-3 mb-8">
                  {project.keyFeatures?.map((feature, index) => (
                    <div
                      key={index}
                      className={`rounded-xl transition-all duration-300 overflow-hidden ${
                        openAccordion === index
                          ? "bg-blue-50/90 border border-blue-200 shadow-sm"
                          : "bg-white border border-blue-100 hover:border-blue-300"
                      }`}
                    >
                      <button
                        onClick={() =>
                          setOpenAccordion(openAccordion === index ? -1 : index)
                        }
                        className="w-full px-5 py-4 flex justify-between items-center text-left"
                      >
                        <span
                          className={`font-semibold text-sm sm:text-[15px] ${
                            openAccordion === index
                              ? "text-[#0d2461] font-bold"
                              : "text-blue-950"
                          }`}
                        >
                          {feature.name}
                        </span>

                        {openAccordion === index ? (
                          <Minus
                            size={18}
                            className="text-[#0d2461] flex-shrink-0"
                          />
                        ) : (
                          <Plus
                            size={18}
                            className="text-blue-400 flex-shrink-0"
                          />
                        )}
                      </button>

                      <div
                        className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${
                          openAccordion === index
                            ? "max-h-40 pb-4 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-blue-900/80 text-xs sm:text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quote Block */}
                <div className="bg-white border border-blue-100 rounded-2xl p-7 relative shadow-sm">
                  <Quote
                    size={36}
                    className="text-[#0d2461]/20 mb-3 transform rotate-180"
                  />

                  <p className="text-base font-medium text-blue-950 italic leading-relaxed mb-5">
                    "{project.shortDescription}"
                  </p>

                  <div>
                    <div className="font-bold text-blue-950 text-sm">
                      {project.name}
                    </div>

                    <div className="text-xs text-blue-800/60">
                      Product Series
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT IMAGE STACK */}
             {project.rightImg ? ( <div
                ref={imageScrollRef}
                className="relative h-[1000px] md:h-[1000px]"
              >
                <div className="sticky top-25 h-[440px]">
                  <div className="relative h-full w-full">
                    {/* BACK CARD */}
                    <div className="absolute inset-0 translate-y-[-18px] scale-[0.96] rounded-[28px] bg-white p-1">
                      <div className="h-full w-full overflow-hidden rounded-[20px]">
                        <img
                          src={project.rightImg}
                          alt={project.name}
                          className="h-full w-full object-"
                        />
                      </div>
                    </div>

                  
                  </div>
                </div>
              </div>):( <div
                ref={imageScrollRef}
                className="relative h-[1000px] md:h-[1000px]"
              >
                <div className="sticky top-25 h-[440px]">
                  <div className="relative h-full w-full">
                    {/* BACK CARD */}
                    <div className="absolute inset-0 translate-y-[-18px] scale-[0.96] rounded-[28px] bg-white p-1">
                      <div className="h-full w-full overflow-hidden rounded-[20px]">
                        <img
                          src={"/product/image.png"}
                          alt={project.name}
                          className="h-full w-full object-"
                        />
                      </div>
                    </div>

                    {/* FRONT CARD */}
                    <motion.div
                      style={{
                        y: secondImageY,
                        scale: secondImageScale,
                      }}
                      className="absolute inset-0 rounded-[28px] bg-white p-1"
                    >
                      <div className="h-full w-full overflow-hidden rounded-[20px]">
                        <img
                          src={"/product/image.png"}
                          alt={project.name}
                          className="h-full w-full object-"
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>)}
            </div>
          </div>
        </div>

        {project.hardwareImg && (
          <div className="">
            <h2 className="font-bold text-blue-950 mt-3 text-4xl mb-4">
              Hardware
            </h2>
            <img
              src={project.hardwareImg}
              alt="hardware"
              className="w-full h-auto md:h-140 mt-4"
            />
          </div>
        )}
        {project?.shapes && (
          <div className="">
            <h2 className="font-bold text-blue-950 text-4xl mt-5 mb-4">
              Differnt Types Of Shape
            </h2>
            <img
              src={project.shapes}
              alt="shape"
              className="w-full h-auto mt-4"
            />
          </div>
        )}
      </main>

      <CTA2 />

      <StickyContactButtons />
      <FooterSection />
    </div>
  );
}
