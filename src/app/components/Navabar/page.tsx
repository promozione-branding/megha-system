'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown, ArrowRight, Menu, X, Sparkles, Building, Layers, Palette, ArrowUpRight, Phone } from 'lucide-react';
import Link from 'next/link';
import { PRODUCTS_CATALOG } from '@/data';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
      {/* Top announcement bar */}
      <div className="w-full bg-[#0d2461] text-white text-[13px] sm:text-[13.5px] font-semibold tracking-wide text-center py-1.5 px-4 flex items-center justify-center gap-3">
        <span className="opacity-85">India&apos;s Trusted Restroom Cubicle Solutions</span>
        <span className="opacity-30">|</span>
        <span className="text-[#f5bd24]">✦</span>
        <span className="opacity-85 ml-1">Where Hygiene Meets Design</span>
        <span className="opacity-30">|</span>
        <a href="tel:+91" className="inline-flex items-center gap-1.5 text-[#f5bd24] hover:text-white transition-colors font-bold">
          <Phone className="w-3.5 h-3.5" />
          Get a Free Quote
        </a>
      </div>

      {/* Main Navbar */}
      <header
        className={`relative z-50 w-full transition-all duration-500 sticky top-0 font-sans ${scrolled
          ? 'bg-white/97 backdrop-blur-2xl shadow-[0_4px_30px_rgba(13,36,97,0.12)] border-b border-[#0d2461]/10'
          : 'bg-white border-b border-[#0d2461]/8'
          }`}
      >
        {/* Gold accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#f5bd24] to-transparent opacity-80" />

        <div className="mx-auto max-w-[1750px] px-4 sm:px-8 lg:px-12 xl:px-16 h-[72px] flex items-center justify-between gap-4">

          {/* Left: Logo Image */}
          <Link href="/" className="flex items-center shrink-0 group py-0.5">
            <div className="relative h-[66px] w-[320px] sm:w-[360px] overflow-hidden transition-all duration-300 group-hover:scale-[1.02]">
              <Image
                src="/assets/logo/clean_logo.png"
                alt="Megha Systems Logo"
                fill
                className="object-contain object-left scale-140 origin-left -translate-y-1.5"
                priority
              />
            </div>
          </Link>

          {/* Center: Navigation Links with Larger Font */}
          <nav className="hidden lg:flex items-center gap-1 text-[15px] sm:text-[15.5px] font-bold text-[#0d2461]">
            <a
              href="#"
              className="px-3 sm:px-3.5 py-1.5 rounded-lg hover:bg-[#0d2461]/6 transition-all duration-200 relative group"
            >
              Home
              <span className="absolute bottom-0.5 left-3 right-3 h-[2px] bg-[#f5bd24] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full" />
            </a>

            {/* About Dropdown */}
            <div className="relative group py-1.5 cursor-pointer">
              <div className="flex items-center gap-1 px-3 sm:px-3.5 py-1.5 rounded-lg hover:bg-[#0d2461]/6 transition-all duration-200 relative">
                <span>About Us</span>
                <ChevronDown className="w-4 h-4 opacity-60 group-hover:rotate-180 transition-transform duration-300" />
                <span className="absolute bottom-0.5 left-3 right-3 h-[2px] bg-[#f5bd24] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full" />
              </div>
              <div className="absolute top-[calc(100%+4px)] left-0 hidden group-hover:block w-64 bg-white border border-[#0d2461]/10 shadow-[0_20px_60px_rgba(13,36,97,0.15)] rounded-2xl p-2 z-50">
                <div className="absolute -top-1.5 left-6 w-3 h-3 bg-white border-l border-t border-[#0d2461]/10 rotate-45" />
                <a href="#about" className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#f8f8ff] transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-[#0d2461]/8 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4 text-[#0d2461]" />
                  </div>
                  <div>
                    <div className="text-[13.5px] font-bold text-[#0d2461]">Our Story</div>
                    <div className="text-[11.5px] text-gray-400 mt-0.5">Pioneering cubicle solutions</div>
                  </div>
                </a>
                <a href="#team" className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#f8f8ff] transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-[#0d2461]/8 flex items-center justify-center shrink-0 mt-0.5">
                    <Building className="w-4 h-4 text-[#0d2461]" />
                  </div>
                  <div>
                    <div className="text-[13.5px] font-bold text-[#0d2461]">Leadership</div>
                    <div className="text-[11.5px] text-gray-400 mt-0.5">Expert architects & planners</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="relative group py-1.5 cursor-pointer">
              <div className="flex items-center gap-1 px-3 sm:px-3.5 py-1.5 rounded-lg hover:bg-[#0d2461]/6 transition-all duration-200 relative">
                <span>Our Products</span>
                <ChevronDown className="w-4 h-4 opacity-60 group-hover:rotate-180 transition-transform duration-300" />
                <span className="absolute bottom-0.5 left-3 right-3 h-[2px] bg-[#f5bd24] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full" />
              </div>
              <div className="absolute top-[calc(100%+2px)] left-0 hidden group-hover:block w-74 bg-white border border-[#0d2461]/10 shadow-[0_20px_60px_rgba(13,36,97,0.15)] rounded-2xl p-2 z-50">
                <div className="absolute -top-1.5 left-6 w-5 h-3 bg-white border-l border-t border-[#0d2461]/10 rotate-45" />
                {PRODUCTS_CATALOG.map((i, idx) => (
                  <Link href={`/products/${i.slug}`} className='hover:text-[#f5bd24] block transition mt-2 text-nowrap'>
                    {i.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services Mega Dropdown */}
            <div className="relative group py-1.5 cursor-pointer">
              <div className="flex items-center gap-1 px-3 sm:px-3.5 py-1.5 rounded-lg hover:bg-[#0d2461]/6 transition-all duration-200 relative">
                <span>Services</span>
                <ChevronDown className="w-4 h-4 opacity-60 group-hover:rotate-180 transition-transform duration-300" />
                <span className="absolute bottom-0.5 left-3 right-3 h-[2px] bg-[#f5bd24] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full" />
              </div>
              <div className="absolute top-[calc(100%+4px)] left-1/2 -translate-x-1/2 hidden group-hover:block w-[440px] bg-white border border-[#0d2461]/10 shadow-[0_20px_60px_rgba(13,36,97,0.15)] rounded-2xl p-3 z-50">
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-[#0d2461]/10 rotate-45" />
                <p className="text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase px-2 pb-2">What We Offer</p>
                <div className="grid grid-cols-2 gap-1.5">
                  <a href="#services" className="p-3 rounded-xl hover:bg-[#f8f8ff] transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-7 h-7 rounded-lg bg-[#0d2461]/8 flex items-center justify-center">
                        <Layers className="w-3.5 h-3.5 text-[#0d2461]" />
                      </div>
                      <span className="text-[13px] font-bold text-[#0d2461]">Cubicle Systems</span>
                    </div>
                    <p className="text-[11.5px] text-gray-400 leading-relaxed pl-9">Engineered modular partitions</p>
                  </a>
                  <a href="#services" className="p-3 rounded-xl hover:bg-[#f8f8ff] transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-7 h-7 rounded-lg bg-[#0d2461]/8 flex items-center justify-center">
                        <Palette className="w-3.5 h-3.5 text-[#0d2461]" />
                      </div>
                      <span className="text-[13px] font-bold text-[#0d2461]">Marble Finishes</span>
                    </div>
                    <p className="text-[11.5px] text-gray-400 leading-relaxed pl-9">Luxury natural stone textures</p>
                  </a>
                  <a href="#services" className="p-3 rounded-xl hover:bg-[#f8f8ff] transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-7 h-7 rounded-lg bg-[#f5bd24]/15 flex items-center justify-center">
                        <Sparkles className="w-3.5 h-3.5 text-[#c9a227]" />
                      </div>
                      <span className="text-[13px] font-bold text-[#0d2461]">Smart Design</span>
                    </div>
                    <p className="text-[11.5px] text-gray-400 leading-relaxed pl-9">Hygienic intelligent spaces</p>
                  </a>
                  <a href="#services" className="p-3 rounded-xl hover:bg-[#f8f8ff] transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-7 h-7 rounded-lg bg-[#0d2461]/8 flex items-center justify-center">
                        <Building className="w-3.5 h-3.5 text-[#0d2461]" />
                      </div>
                      <span className="text-[13px] font-bold text-[#0d2461]">Installation</span>
                    </div>
                    <p className="text-[11.5px] text-gray-400 leading-relaxed pl-9">End-to-end setup & support</p>
                  </a>
                </div>
              </div>
            </div>

            {/* Projects Dropdown */}
            <div className="relative group py-1.5 cursor-pointer">
              <div className="flex items-center gap-1 px-3 sm:px-3.5 py-1.5 rounded-lg hover:bg-[#0d2461]/6 transition-all duration-200 relative">
                <span>Projects</span>
                <ChevronDown className="w-4 h-4 opacity-60 group-hover:rotate-180 transition-transform duration-300" />
                <span className="absolute bottom-0.5 left-3 right-3 h-[2px] bg-[#f5bd24] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full" />
              </div>
              <div className="absolute top-[calc(100%+4px)] left-0 hidden group-hover:block w-56 bg-white border border-[#0d2461]/10 shadow-[0_20px_60px_rgba(13,36,97,0.15)] rounded-2xl p-2 z-50">
                <div className="absolute -top-1.5 left-6 w-3 h-3 bg-white border-l border-t border-[#0d2461]/10 rotate-45" />
                <a href="#projects" className="flex items-center justify-between p-3 rounded-xl hover:bg-[#f8f8ff] text-[13px] font-bold text-[#0d2461] transition-colors">
                  <span>Commercial Icons</span>
                  <ArrowUpRight className="w-4 h-4 text-[#0d2461]/40" />
                </a>
                <a href="#projects" className="flex items-center justify-between p-3 rounded-xl hover:bg-[#f8f8ff] text-[13px] font-bold text-[#0d2461] transition-colors">
                  <span>Luxury Residential</span>
                  <ArrowUpRight className="w-4 h-4 text-[#0d2461]/40" />
                </a>
                <a href="#projects" className="flex items-center justify-between p-3 rounded-xl hover:bg-[#f8f8ff] text-[13px] font-bold text-[#0d2461] transition-colors">
                  <span>Corporate Spaces</span>
                  <ArrowUpRight className="w-4 h-4 text-[#0d2461]/40" />
                </a>
              </div>
            </div>

            <a href="#contact" className="px-3 sm:px-3.5 py-1.5 rounded-lg hover:bg-[#0d2461]/6 transition-all duration-200 relative group">
              Contact
              <span className="absolute bottom-0.5 left-3 right-3 h-[2px] bg-[#f5bd24] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full" />
            </a>
          </nav>

          {/* Right: CTA Buttons with Larger Font */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            {/* Ghost outline button */}
            <a
              href="#contact"
              className="px-4.5 sm:px-5 py-2.5 text-[14px] font-bold text-[#0d2461] border border-[#0d2461]/30 rounded-lg hover:border-[#0d2461] hover:bg-[#0d2461]/5 transition-all duration-200"
            >
              Get in Touch
            </a>

            {/* Primary shimmer CTA */}
            <a
              href="/products"
              className="group relative inline-flex items-center gap-2 bg-[#0d2461] text-white px-5 sm:px-6 py-2.5 text-[14px] font-bold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(13,36,97,0.35)] hover:-translate-y-0.5 active:translate-y-0"
            >
              {/* Gold shimmer sweep */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f5bd24]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              <span className="relative z-10">All Products</span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#0d2461] hover:bg-[#0d2461]/8 rounded-xl transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#0d2461]/10 px-6 py-6 space-y-1">
            <a href="/" className="block py-3 px-3 rounded-xl text-sm font-bold text-[#0d2461] bg-[#0d2461]/5">Home</a>
            <a href="#about" className="block py-3 px-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-[#0d2461]/5 hover:text-[#0d2461] transition-colors">About Us</a>
            <a href="#services" className="block py-3 px-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-[#0d2461]/5 hover:text-[#0d2461] transition-colors">Services</a>
            <a href="/products" className="block py-3 px-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-[#0d2461]/5 hover:text-[#0d2461] transition-colors">All Products</a>
            <a href="#testimonials" className="block py-3 px-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-[#0d2461]/5 hover:text-[#0d2461] transition-colors">Testimonials</a>
            <a href="#faq" className="block py-3 px-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-[#0d2461]/5 hover:text-[#0d2461] transition-colors">FAQ</a>
            <a href="#contact" className="block py-3 px-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-[#0d2461]/5 hover:text-[#0d2461] transition-colors">Contact</a>

            <div className="pt-4 border-t border-[#0d2461]/10 space-y-2">
              <a
                href="/products"
                className="w-full flex items-center justify-center gap-2 bg-[#0d2461] text-white py-3.5 text-sm font-semibold rounded-xl hover:bg-[#0a1b52] transition-colors"
              >
                <span>All Products</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="w-full flex items-center justify-center gap-2 border border-[#0d2461]/25 text-[#0d2461] py-3.5 text-sm font-semibold rounded-xl hover:bg-[#0d2461]/5 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
