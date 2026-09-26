import React from "react";
import AuthorisedPartners from "@/components/AuthorisedPartners";
import FAQ from "@/components/RestroomCity/FAQ";
import Afforable from "@/components/RestroomCity/Afforable";
import Hero from "@/components/RestroomCity/Hero";
import WhyChooseMegha from "@/components/RestroomCity/WhyChooseMegha";
import WorkingSector from "@/components/RestroomCity/WorkingSector";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import ContactSection from "../components/contactUs/page";
import Link from "next/link";
import ClientMarquee from "../components/ClientMarquee/page";

export default function RestRoom({ city }) {

  console.log(city);

  const products = [
    {
      name: "Black Maxi ",
      href: "/products/black-maxi",
      image: "/citypg/Blackmaxi.webp",
    },
    {
      name: "Premia",
      href: "/products/premia",
      image: "/citypg/Premia.webp",
    },
    {
      name: "Nylon Kiddiez",
      image: "/citypg/kids2.webp",
      href: "/products/nylon-kiddiez",
    },
    {
      name: "Full SS Restroom Cubicle Systems",
      image: "/citypg/uni.webp",
      href: "/products/urinal-modesty-panels",
    },
  ];

  const features = [
    "Durable construction",
    "Moisture-proof finish",
    "Scratch and stain resistant finish",
    "Maintenance free construction",
    "Professional finish",
    "Variety of layouts to choose from",
  ];

  return (
    <>
     <Hero city={city}/>

      <section className="w-full  bg-white py-6 sm:py-13 ">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          {/* TOP CONTENT */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end">
            {/* LEFT */}
            <div>
              <span className="mb-4 block text-sm font-semibold text-[#0d2461]">
                Our Products
              </span>

              <h2 className="text-3xl  font-bold leading-tight tracking-tight text-black sm:text-[35px]">
                Toilet Cubicles & Partitions Series
              </h2>
            </div>

            {/* RIGHT */}
            <div className="lg:pl-16">
              <p className="max-w-[480px] text-sm md:leading-6 text-[#555] sm:text-[15px]">
                Each restroom setup is different, so we can adjust the cubicle
                partition to fit. We consider the room size, the layout, and
                what the site needs. We use solid materials and simple,
                work-ready designs.
              </p>
            </div>
          </div>

          {/* PRODUCTS */}
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <Link
                href={product.href}
                key={index}
                className="group relative h-50 overflow-hidden bg-gray-200"
              >
                {/* IMAGE */}
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* DARK GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                {/* ARROW */}
                <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#0d2461] text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={18} strokeWidth={2.5} />
                </div>

                {/* PRODUCT NAME */}
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="max-w-[220px] text-[15px] font-semibold leading-5 text-white">
                    {product.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-6 sm:py-13">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:gap-20">
            {/* LEFT CONTENT */}
            <div>
              <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.15em] text-[#0d2461]">
                Restroom Solutions
              </span>

              <h2 className="text-3xl  font-bold leading-tight tracking-tight text-[#111] sm:text-4xl lg:text-5xl">
                Restroom Cubicle Partition in {city}
              </h2>

              <p className="mt-6 text-base leading-8 text-[#555] sm:text-lg">
                Megha Systems offers{" "}
                <strong className="font-semibold text-[#222]">
                  Restroom Cubicle Partition in {city}
                </strong>{" "}
                for commercial & institutional restrooms where durability and
                maintenance are key requirements.
              </p>

              <p className="mt-6  text-base font-semibold leading-7 text-[#222]">
                Our partitions include:
              </p>

              {/* FEATURES */}
              <ul className="mt-5 space-y-3">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-base text-[#555]"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0d2461] text-xs font-bold text-white">
                      ✓
                    </span>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT CONTENT */}
            <div className="rounded-[24px] bg-[#f7f7f7] p-7 sm:p-9 lg:p-10">
              <div className="mb-6 h-1 w-14 bg-[#0d2461]" />

              <h3 className="text-2xl  font-bold leading-tight text-[#111] sm:text-3xl">
                Built for High-Traffic Spaces
              </h3>

              <p className="mt-5 text-base leading-8 text-[#555]">
                Our <a href="/" className="font-bold">restroom cubicle</a> partitions are perfect{" "}
                <strong className="font-semibold text-[#222]">
                  for offices, schools, hospitals, hotels, shopping malls and
                  other high traffic buildings
                </strong>
                .
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  "Offices",
                  "Schools",
                  "Hospitals",
                  "Hotels",
                  "Shopping Malls",
                  "Commercial Buildings",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-xl bg-white px-4 py-4 text-sm font-medium text-[#333] shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AuthorisedPartners />

     <Afforable city={city}/>

     <WorkingSector city={city}/>
     <ClientMarquee />

      <WhyChooseMegha city={city}/>


      <FAQ city={city} />

      <ContactSection />

     
    </>
  );
}
