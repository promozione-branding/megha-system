"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  ArrowUpRight,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { allProducts } from "@/data";
import PopupForm from "@/components/PopupForm";

export default function Navbar2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleGetInTouch = () => {
    closeMobileMenu();
    setOpen(true);
  };

  return (
    <>
      {/* =====================================================
          STICKY HEADER WRAPPER
      ===================================================== */}
      <div className="sticky top-0 z-[100] w-full">

        {/* =====================================================
            TOP ANNOUNCEMENT BAR
        ===================================================== */}
        <div className="hidden md:flex w-full bg-[#0d2461] text-white text-[13px] sm:text-[13.5px] font-semibold tracking-wide text-center py-1.5 px-4 items-center justify-center gap-3">
          <span className="opacity-85">
            India&apos;s Trusted Restroom Cubicle Solutions
          </span>

          <span className="opacity-30">|</span>

          <span className="text-[#f5bd24]">✦</span>

          <span className="opacity-85 ml-1">
            Where Hygiene Meets Design
          </span>

          <span className="opacity-30">|</span>

          <a
            href="tel:+919873735716"
            className="inline-flex items-center gap-1.5 text-[#f5bd24] hover:text-white transition-colors font-bold"
          >
            <Phone className="w-3.5 h-3.5" />
            98737 35713
          </a>
        </div>

        {/* =====================================================
            MAIN NAVBAR
        ===================================================== */}
        <header className="relative w-full bg-white border-b border-[#0d2461]/10 font-sans">

          {/* Gold accent line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#f5bd24] to-transparent opacity-80" />

          <div
            className="
              mx-auto
              max-w-[1750px]
              px-4
              sm:px-8
              lg:px-12
              xl:px-16
              h-[80px]
              flex
              items-center
              justify-between
              gap-4

              max-lg:h-[68px]
              max-lg:px-4
              sm:max-lg:px-6
            "
          >
            {/* =================================================
                LOGO
            ================================================= */}
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="flex items-center shrink-0 group"
            >
              <div
                className="
                  relative
                  h-18
                  w-60
                  transition-all
                  duration-300

                  max-lg:h-12
                  max-lg:w-[165px]
                  sm:max-lg:h-14
                  sm:max-lg:w-[190px]
                "
              >
                <img
                  src="/assets/logo/1.png"
                  alt="Megha Systems Logo"
                  className="object-contain h-full w-full"
                />
              </div>
            </Link>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}
            <nav className="hidden xl:flex items-center gap-1 text-[15px] sm:text-[15.5px] font-bold text-[#0d2461]">

              {/* Home */}
              <Link
                href="/"
                className="px-3 sm:px-3.5 py-1.5 rounded-lg hover:bg-[#0d2461]/6 transition-all duration-200 relative group"
              >
                Home

                <span className="absolute bottom-0.5 left-3 right-3 h-[2px] bg-[#f5bd24] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full" />
              </Link>

              {/* =================================================
                  PRODUCTS DROPDOWN
              ================================================= */}
              <div className="relative group py-1.5 cursor-pointer">

                <Link
                  href="/products"
                  className="flex items-center gap-1.5 px-3 text-nowrap sm:px-3.5 py-1.5 rounded-lg hover:bg-[#0d2461]/6 transition-all duration-200 relative"
                >
                  <span>Our Products</span>

                  <ChevronDown className="w-4 h-4 opacity-60 transition-transform duration-300 group-hover:rotate-180" />

                  <span className="absolute bottom-0.5 left-3 right-3 h-[2px] bg-[#f5bd24] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full" />
                </Link>

                {/* Dropdown */}
                <div
                  className="
                    absolute
                    top-[calc(100%+8px)]
                    left-0
                    invisible
                    opacity-0
                    translate-y-2
                    group-hover:visible
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition-all
                    duration-200
                    ease-out
                    w-80
                    bg-white
                    border
                    border-[#0d2461]/10
                    shadow-[0_20px_60px_rgba(13,36,97,0.15)]
                    rounded-2xl
                    p-2
                    z-50
                  "
                >
                  <div className="absolute -top-1.5 left-7 w-3 h-3 bg-white border-l border-t border-[#0d2461]/10 rotate-45" />

                  {allProducts.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/products#${item.slug}`}
                      className="group/item flex items-center gap-3 text-nowrap px-3 py-3 rounded-xl hover:bg-[#0d2461]/5 transition-all duration-200"
                    >
                      <div className="flex-1 min-w-0">
                        <span className="block text-sm font-semibold text-[#0d2461]">
                          {item.categoryName}
                        </span>
                      </div>

                      <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover/item:text-[#f5bd24] group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all duration-200" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* About */}
              <Link
                href="/about-us"
                className="px-3 sm:px-3.5 py-1.5 rounded-lg hover:bg-[#0d2461]/6 transition-all duration-200 relative group"
              >
                About Us

                <span className="absolute bottom-0.5 left-3 right-3 h-[2px] bg-[#f5bd24] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full" />
              </Link>

              {/* Contact */}
              <Link
                href="/contact-us"
                className="px-3 sm:px-3.5 py-1.5 rounded-lg text-nowrap hover:bg-[#0d2461]/6 transition-all duration-200 relative group"
              >
                Contact Us

                <span className="absolute bottom-0.5 left-3 right-3 h-[2px] bg-[#f5bd24] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full" />
              </Link>

              {/* Articles */}
              <Link
                href="/our-articles"
                className="px-3 sm:px-3.5 py-1.5 rounded-lg hover:bg-[#0d2461]/6 transition-all duration-200 relative group"
              >
                Articles

                <span className="absolute bottom-0.5 left-3 right-3 h-[2px] bg-[#f5bd24] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full" />
              </Link>

              {/* Projects */}
              <Link
                href="/projects"
                className="px-3 sm:px-3.5 py-1.5 rounded-lg hover:bg-[#0d2461]/6 transition-all duration-200 relative group"
              >
                Projects

                <span className="absolute bottom-0.5 left-3 right-3 h-[2px] bg-[#f5bd24] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full" />
              </Link>
            </nav>

            {/* =================================================
                DESKTOP CTA
            ================================================= */}
            <div className="hidden xl:flex items-center gap-2.5 shrink-0">

              <button
                onClick={() => setOpen(true)}
                className="px-4.5 sm:px-5 py-2.5 text-[14px] font-bold text-[#0d2461] border border-[#0d2461]/30 rounded-lg hover:border-[#0d2461] hover:bg-[#0d2461]/5 transition-all duration-200"
              >
                Get in Touch
              </button>

              {/* <Link
                href="/products"
                className="group relative inline-flex items-center gap-2 bg-[#0d2461] text-white px-5 sm:px-6 py-2.5 text-[14px] font-bold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(13,36,97,0.35)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f5bd24]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />

                <span className="relative z-10">
                  All Products
                </span>

                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link> */}

            </div>

            {/* =================================================
                MOBILE TOGGLE
            ================================================= */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="
                xl:hidden
                shrink-0
                p-2.5
                text-[#0d2461]
                hover:bg-[#0d2461]/8
                active:bg-[#0d2461]/10
                rounded-xl
                transition-colors
              "
              aria-label={
                mobileMenuOpen
                  ? "Close menu"
                  : "Open menu"
              }
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* =====================================================
              MOBILE DRAWER
          ===================================================== */}
          <div
            className={`
              xl:hidden
              absolute
              top-full
              left-0
              right-0
              bg-white
              border-t
              border-[#0d2461]/10
              shadow-[0_20px_40px_rgba(13,36,97,0.12)]
              overflow-y-auto
              max-h-[calc(100vh-68px)]
              transition-all
              duration-300
              ease-out

              ${
                mobileMenuOpen
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 -translate-y-3 invisible pointer-events-none"
              }
            `}
          >
            <div className="px-4 sm:px-6 py-5 space-y-1">

              {/* Home */}
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="
                  block
                  py-3.5
                  px-4
                  rounded-xl
                  text-sm
                  font-bold
                  text-[#0d2461]
                  bg-[#0d2461]/5
                "
              >
                Home
              </Link>

              {/* Products */}
              <Link
                href="/products"
                onClick={closeMobileMenu}
                className="
                  flex
                  items-center
                  justify-between
                  py-3.5
                  px-4
                  rounded-xl
                  text-sm
                  font-semibold
                  text-gray-700
                  hover:bg-[#0d2461]/5
                  hover:text-[#0d2461]
                  transition-colors
                "
              >
                <span>Our Products</span>

                <ArrowUpRight className="w-4 h-4 text-gray-400" />
              </Link>

              {/* About */}
              <Link
                href="/about-us"
                onClick={closeMobileMenu}
                className="
                  block
                  py-3.5
                  px-4
                  rounded-xl
                  text-sm
                  font-semibold
                  text-gray-700
                  hover:bg-[#0d2461]/5
                  hover:text-[#0d2461]
                  transition-colors
                "
              >
                About Us
              </Link>

              {/* Articles */}
              <Link
                href="/our-articles"
                onClick={closeMobileMenu}
                className="
                  block
                  py-3.5
                  px-4
                  rounded-xl
                  text-sm
                  font-semibold
                  text-gray-700
                  hover:bg-[#0d2461]/5
                  hover:text-[#0d2461]
                  transition-colors
                "
              >
                Articles
              </Link>

              {/* Projects */}
              <Link
                href="/projects"
                onClick={closeMobileMenu}
                className="
                  block
                  py-3.5
                  px-4
                  rounded-xl
                  text-sm
                  font-semibold
                  text-gray-700
                  hover:bg-[#0d2461]/5
                  hover:text-[#0d2461]
                  transition-colors
                "
              >
                Projects
              </Link>

              {/* Contact */}
              <Link
                href="/contact-us"
                onClick={closeMobileMenu}
                className="
                  block
                  py-3.5
                  px-4
                  rounded-xl
                  text-sm
                  font-semibold
                  text-gray-700
                  hover:bg-[#0d2461]/5
                  hover:text-[#0d2461]
                  transition-colors
                "
              >
                Contact Us
              </Link>

              {/* =================================================
                  MOBILE CTA
              ================================================= */}
              <div className="pt-4 mt-3 border-t border-[#0d2461]/10 space-y-2.5">

                {/* <Link
                  href="/products"
                  onClick={closeMobileMenu}
                  className="
                    w-full
                    flex
                    items-center
                    justify-center
                    gap-2
                    bg-[#0d2461]
                    text-white
                    py-3.5
                    text-sm
                    font-semibold
                    rounded-xl
                    hover:bg-[#0a1b52]
                    transition-colors
                  "
                >
                  <span>All Products</span>

                  <ArrowRight className="w-4 h-4" />
                </Link> */}

                <button
                  type="button"
                  onClick={handleGetInTouch}
                  className="
                    w-full
                    flex
                    items-center
                    justify-center
                    gap-2
                    border
                    border-[#0d2461]/25
                    text-[#0d2461]
                    py-3.5
                    text-sm
                    font-semibold
                    rounded-xl
                    hover:bg-[#0d2461]/5
                    transition-colors
                  "
                >
                  Get in Touch
                </button>

              </div>

              {/* Mobile phone */}
              <a
                href="tel:+919873735716"
                onClick={closeMobileMenu}
                className="
                  mt-3
                  flex
                  items-center
                  justify-center
                  gap-2
                  py-3
                  text-xs
                  font-semibold
                  text-[#0d2461]
                "
              >
                <Phone className="w-4 h-4 text-[#f5bd24]" />
                +91 98737 35716
              </a>

            </div>
          </div>
        </header>
      </div>

      {/* =====================================================
          POPUP
      ===================================================== */}
      <PopupForm
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}