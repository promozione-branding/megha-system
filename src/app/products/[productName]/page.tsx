'use client';

import React, { useState, use, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, Plus, Minus, Quote } from 'lucide-react';
import Navbar from '@/app/components/Navabar/page';
import FooterSection from '@/app/components/Footer/page';
import Image from 'next/image';
import { motion, useScroll, useTransform } from "framer-motion";




const PROJECTS_DATA: Record<string, {
  title: string;
  category: string;
  description: string;
  location: string;
  type: string;
  style: string;
  size: string;
  heroImage: string;
  concept: string;
  palette: { label: string; value: string }[];
  quote: string;
  quoteAuthor: string;
  quoteRole: string;
  features: { title: string; content: string }[];
}> = {
  'coastal-calm-retreat': {
    title: 'Coastal Calm Retreat',
    category: 'Private Beach Villa',
    description: 'This private beachfront villa was designed to evoke a serene connection between indoor living and the surrounding natural beauty. Our goal was to create a tranquil retreat—calm, airy, and grounded in organic simplicity.',
    location: 'Bali, Indonesia',
    type: 'Private Beach Villa',
    style: 'Coastal Minimalism',
    size: '320 m²',
    heroImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09be1587?auto=format&fit=crop&q=80&w=2000',
    concept: 'We embraced coastal minimalism: a clean aesthetic inspired by sea, sand, and sky. Neutral palettes were layered with warm woods, textured linen, and handmade ceramics. Arched doorways and light-filled spaces encouraged movement and calm.',
    palette: [
      { label: 'Walls', value: 'White lime-washed plaster' },
      { label: 'Floors', value: 'Microcement in soft sand tone' },
      { label: 'Wood', value: 'Reclaimed teak & light oak' },
      { label: 'Textiles', value: 'Linen, cotton, and jute' },
      { label: 'Accent Metals', value: 'Aged brass & brushed bronze' },
      { label: 'Tiles', value: 'Handmade ceramic & honed limestone' },
      { label: 'Decor', value: 'Woven seagrass, artisanal pottery, driftwood sculpture' },
    ],
    quote: 'It feels like the ocean moved inside. Peaceful, effortless, and personal. Every space feels like a breath.',
    quoteAuthor: 'Lisa Amara',
    quoteRole: 'Villa Owner',
    features: [
      { title: 'Panoramic Sea-Facing Living Room', content: 'Seamless transition between indoors and ocean views with floor-to-ceiling sliding glass panels.' },
      { title: 'Custom Teakwood & Rattan Furniture', content: 'Handcrafted pieces designed specifically for the space, blending modern comfort with traditional techniques.' },
      { title: 'Indoor-Outdoor Spa Bathroom', content: 'A luxurious bathing experience featuring natural stone elements and direct access to a private garden.' },
      { title: 'Textured Linen & Soft Drapery', content: 'Bespoke textiles that soften the architectural lines and flutter beautifully in the coastal breeze.' },
      { title: 'Concealed Storage Solutions', content: 'Minimalist cabinetry integrated into the walls to maintain a clean, uncluttered visual aesthetic.' },
      { title: 'Natural Light Optimization', content: 'Strategically placed skylights and reflective surfaces to maximize daylight throughout the day.' },
      { title: 'Ocean-Inspired Color Harmony', content: 'A curated palette of crisp whites, deep blues, and sandy tones reflecting the natural surroundings.' }
    ]
  },
  'hpl-cubicle-system': {
    title: 'Compact Laminate HPL Cubicles',
    category: 'Restroom Systems',
    description: 'High-traffic commercial restroom partition system engineered for 100% moisture resistance, antibacterial hygiene, and long-lasting structural rigidity.',
    location: 'Mumbai, India',
    type: 'Commercial Restroom',
    style: 'Modular Architecture',
    size: '450 m²',
    heroImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000',
    concept: 'Designed for airport lounges and modern corporate headquarters, this cubicle system combines sleek satin-finish compact laminates with concealed SS 316 heavy-duty hardware.',
    palette: [
      { label: 'Panels', value: '12mm Compact Laminate HPL' },
      { label: 'Hardware', value: 'SS 316 Stainless Steel Satin Finish' },
      { label: 'Flooring', value: 'Anti-skid Vitrified Stoneware' },
      { label: 'Lighting', value: 'Concealed LED Strip Accent Channels' },
    ],
    quote: 'Unmatched durability and sophisticated modern aesthetics. Our corporate facility has never looked better.',
    quoteAuthor: 'Vikram Mehta',
    quoteRole: 'Chief Infrastructure Officer',
    features: [
      { title: '100% Water & Humidity Proof', content: 'Solid phenolic core ensures zero delamination even under continuous high-moisture conditions.' },
      { title: 'Anti-Vandal Heavy-Duty Fittings', content: 'SS 316 indicator locks, self-closing hinges, and adjustable pedestal support legs.' },
      { title: 'Class A Fire Safety Rating', content: 'Complies with stringent commercial fire and smoke safety regulations.' }
    ]
  },
  'modern-serenity-apartment': {
    title: 'Modern Serenity Apartment',
    category: 'Luxury Residential',
    description: 'A contemporary luxury apartment featuring Italian marble wall claddings, hidden ambient lighting, and bespoke minimalist furniture.',
    location: 'Jakarta, Indonesia',
    type: 'Luxury Apartment',
    style: 'Modern Minimalist',
    size: '240 m²',
    heroImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000',
    concept: 'Focusing on clean geometry and rich tactile materials, we created a calming urban sanctuary elevated by natural light and serene spatial proportions.',
    palette: [
      { label: 'Walls', value: 'Italian Statuario Marble & Veneer' },
      { label: 'Furniture', value: 'Custom Walnut & Velvet Upholstery' },
      { label: 'Fixtures', value: 'Brushed Gold & Matte Black Accents' },
    ],
    quote: 'The craftsmanship and attention to detail transformed our home into a serene architectural masterwork.',
    quoteAuthor: 'David & Sarah',
    quoteRole: 'Homeowners',
    features: [
      { title: 'Open-Plan Living & Dining Space', content: 'Fluid spatial layout ideal for hosting and relaxed family living.' },
      { title: 'Integrated Smart Home Automation', content: 'Touch-panel scene lighting, climate control, and motorized drapery.' }
    ]
  }
};

const SIDEBAR_PROJECTS = [
  { slug: 'coastal-calm-retreat', name: 'Coastal Calm Retreat' },
  { slug: 'hpl-cubicle-system', name: 'Compact Laminate HPL Cubicles' },
  { slug: 'modern-serenity-apartment', name: 'Modern Serenity Apartment' },
  { slug: 'urban-executive-loft', name: 'Urban Executive Loft' },
  { slug: 'heritage-house-revival', name: 'Heritage House Revival' },
];

interface PageProps {
  params: Promise<{ productName: string }>;
}

export default function ProjectDetail({ params }: PageProps) {
  const resolvedParams = use(params);
  const currentSlug = resolvedParams?.productName || 'coastal-calm-retreat';
  const project = PROJECTS_DATA[currentSlug] || PROJECTS_DATA['coastal-calm-retreat'];
  const [openAccordion, setOpenAccordion] = useState(0);
  const imageScrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: imageScrollRef,
    offset: ["start start", "end end"],
  });

  const secondImageY = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    ["100%", "70%", "15%", "0%"]
  );

  const secondImageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.96, 0.99, 1]
  );

  return (
    <div className="min-h-screen bg-[#faf9f6] text-blue-900 font-sans flex flex-col">
      {/* Global Navbar */}
      <Navbar />

      {/* Top Banner Header matching the requested design */}
      <section className="relative w-full bg-[#f6f3ee] py-14 sm:py-18 lg:py-20 px-6 overflow-hidden border-b border-[#e8e4dc]">
        {/* Architectural Washroom Cubicle System Line Art Illustration on Right */}
        <div className="absolute right-4 sm:right-12 lg:right-24 bottom-0 w-64 sm:w-80 lg:w-96 h-full opacity-20 pointer-events-none flex items-end justify-end select-none">
          <svg viewBox="0 0 300 260" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-full h-auto text-stone-900">
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
            Project Detail
          </h1>

          <p className="text-xs sm:text-sm text-stone-500 leading-relaxed max-w-xl mx-auto font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <div className="pt-2 text-xs sm:text-sm font-medium text-stone-600 tracking-wide flex items-center justify-center gap-2">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span className="text-stone-400">—</span>
            <span className="text-stone-900 font-semibold">Project Detail</span>
          </div>
        </div>
      </section>

      <main className="flex-1 py-6 sm:py-8 lg:py-10 px-3 sm:px-6 lg:px-6 xl:px-8">
        <div className="max-w-[1850px] mx-auto flex flex-col lg:flex-row gap-6 lg:gap-10">
          <div className="w-full lg:w-1/3 xl:w-[350px] flex flex-col gap-6 flex-shrink-0">
            <div className="bg-white border border-blue-900/10 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-blue-950">More Projects</h3>
              <p className="text-sm text-blue-800/80 mb-6 leading-relaxed">
                Explore our portfolio of bespoke commercial cubicle systems and interior architecture.
              </p>
              <div className="flex flex-col gap-3">
                {SIDEBAR_PROJECTS.map((item) => {
                  const isActive = item.slug === currentSlug;
                  return (
                    <Link
                      key={item.slug}
                      href={`/products/${item.slug}`}
                      className={`px-5 py-4 text-sm font-semibold flex justify-between items-center rounded-xl transition-all ${isActive
                        ? 'bg-[#0d2461] text-white shadow-md'
                        : 'bg-white border border-blue-100 text-blue-950 hover:bg-blue-50/60'
                        }`}
                    >
                      <span>{item.name}</span>
                      <ArrowRight size={16} className={isActive ? 'text-white' : 'text-blue-400'} />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-lg h-[450px] flex flex-col justify-end p-8 text-white">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${project.heroImage}')` }}
              />
              <div className="absolute inset-0 bg-blue-950/85" />

              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4 leading-tight">Let's Reimagine<br />Your Space.</h2>
                <p className="text-sm text-blue-100 mb-8 leading-relaxed opacity-90">
                  Ready to engineer moisture-proof restroom cubicles or luxury interior spaces? Contact our architectural team.
                </p>

                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-white p-3 rounded-xl text-blue-900 shadow-md">
                    <Phone size={22} />
                  </div>
                  <div>
                    <div className="text-xs text-blue-200 font-medium tracking-wider uppercase mb-0.5">Hotline Inquiry</div>
                    <div className="text-lg font-bold">+800-3374-4676</div>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="w-full bg-white text-blue-950 py-3.5 font-bold flex justify-center items-center gap-2 rounded-xl hover:bg-blue-50 transition-colors shadow-md"
                >
                  <span>Our Services</span>
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3 flex-1 flex flex-col">
            <div className="mb-6">
              <div className="text-xs font-bold tracking-[0.35em] text-[#0d2461] uppercase mb-3">P r o j e c t &nbsp; D e t a i l</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-950 mb-5 tracking-tight">{project.title}</h1>
              <p className="text-base sm:text-lg text-blue-900/80 leading-relaxed max-w-4xl">
                {project.description}
              </p>
            </div>

            <div className="relative mb-16 overflow-hidden rounded-3xl shadow-md">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-[450px] sm:h-[500px] lg:h-[600px] object-cover"
              />

              {/* Floating Info Bar */}
              <div className="absolute bottom-0 right-0 bg-white rounded-tl-[2.5rem] p-6 sm:p-8 lg:px-12 lg:py-8 flex flex-wrap md:flex-nowrap gap-6 sm:gap-10 lg:gap-16">
                <div>
                  <div className="text-sm text-stone-400 mb-1">Location:</div>
                  <div className="text-lg font-semibold text-stone-900">{project.location}</div>
                </div>
                <div>
                  <div className="text-sm text-stone-400 mb-1">Project Type:</div>
                  <div className="text-lg font-semibold text-stone-900">{project.type}</div>
                </div>
                <div>
                  <div className="text-sm text-stone-400 mb-1">Style:</div>
                  <div className="text-lg font-semibold text-stone-900">{project.style}</div>
                </div>
                <div>
                  <div className="text-sm text-stone-400 mb-1">Size:</div>
                  <div className="text-lg font-semibold text-stone-900">{project.size}</div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-blue-950 mb-4">Design Concept</h2>
              <p className="text-blue-900/80 leading-relaxed text-base sm:text-lg">
                {project.concept}
              </p>
            </div>

            {/* Split Content: Materials & Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <div>
                <h3 className="text-2xl font-bold text-blue-950 mb-2">Material Palette</h3>
                <ul className="space-y-3.5 text-blue-900 mb-8">
                  {project.palette.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base">
                      <span className="w-2 h-2 rounded-full bg-[#0d2461] mt-2 flex-shrink-0" />
                      <span><strong className="font-bold text-blue-950">{item.label}:</strong> {item.value}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-bold text-blue-950 mb-2">Key Features</h3>
                <div className="flex flex-col gap-3 mb-8">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className={`rounded-xl transition-all duration-300 overflow-hidden ${openAccordion === index
                        ? 'bg-blue-50/90 border border-blue-200 shadow-sm'
                        : 'bg-white border border-blue-100 hover:border-blue-300'
                        }`}
                    >
                      <button
                        onClick={() => setOpenAccordion(openAccordion === index ? -1 : index)}
                        className="w-full px-5 py-4 flex justify-between items-center text-left"
                      >
                        <span className={`font-semibold text-sm sm:text-[15px] ${openAccordion === index ? 'text-[#0d2461] font-bold' : 'text-blue-950'}`}>
                          {feature.title}
                        </span>
                        {openAccordion === index ? (
                          <Minus size={18} className="text-[#0d2461] flex-shrink-0" />
                        ) : (
                          <Plus size={18} className="text-blue-400 flex-shrink-0" />
                        )}
                      </button>

                      <div
                        className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${openAccordion === index ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                      >
                        <p className="text-blue-900/80 text-xs sm:text-sm leading-relaxed">
                          {feature.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quote Block */}
                <div className="bg-white border border-blue-100 rounded-2xl p-7 relative shadow-sm">
                  <Quote size={36} className="text-[#0d2461]/20 mb-3 transform rotate-180" />
                  <p className="text-base font-medium text-blue-950 italic leading-relaxed mb-5">
                    "{project.quote}"
                  </p>
                  <div>
                    <div className="font-bold text-blue-950 text-sm">{project.quoteAuthor}</div>
                    <div className="text-xs text-blue-800/60">{project.quoteRole}</div>
                  </div>
                </div>
              </div>

              <div
                ref={imageScrollRef}
                className="relative h-[1000px] md:h-[1000px]"
              >
                <div className="sticky top-3 h-[440px]">

                  <div className="relative h-full w-full">

                    {/* BACK CARD */}
                    <div className="absolute inset-0 translate-y-[-18px] scale-[0.96] rounded-[28px] bg-white p-1">
                      <div className="h-full w-full overflow-hidden rounded-[20px]">
                        <img
                          src="/product/image.png"
                          alt="Product"
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
                          src="/product/nexus-canvas-2.jpg"
                          alt="Nexus Canvas"
                          className="h-full w-full object-"
                        />
                      </div>
                    </motion.div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Global Footer */}
      <FooterSection />
    </div>
  );
}