'use client';

import React, { useState, use, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, Plus, Minus, Quote } from 'lucide-react';
import Navbar from '@/app/components/Navabar/page';
import FooterSection from '@/app/components/Footer/page';
import Image from 'next/image';
import { motion, useScroll, useTransform } from "framer-motion";




export const PROJECTS_DATA: Record<
  string,
  {
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
  }
> = {
  'toilet-cubicle-neo-model': {
    title: 'TOILET CUBICLE NEO MODEL',
    category: 'Private Beach Villa',
    description:
      'A tranquil beachfront villa designed to evoke a serene connection between indoor living and organic simplicity.',
    location: 'Bali, Indonesia',
    type: 'Private Beach Villa',
    style: 'Coastal Minimalism',
    size: '320 m²',
    heroImage:
      'https://media.istockphoto.com/id/1206101413/photo/row-of-public-toilet-decorated-with-wooden-partition.jpg?s=612x612&w=0&k=20&c=RPzZ0KfkG6DsxrFjPfYEyWa30BJCkS43ycS-Cfp1LUc=',
    concept:
      'A clean and calming restroom environment inspired by coastal architecture, using soft neutral tones, natural textures, and moisture-resistant materials to create a refined yet functional space.',
    palette: [
      { label: 'Panels', value: 'Moisture-resistant decorative laminate' },
      { label: 'Partitions', value: 'Compact laminate toilet cubicles' },
      { label: 'Hardware', value: 'Brushed stainless steel fittings' },
      { label: 'Flooring', value: 'Anti-skid stone finish' },
      { label: 'Accents', value: 'Natural wood and warm neutral tones' },
    ],
    quote:
      'A beautifully balanced combination of privacy, durability, and understated elegance.',
    quoteAuthor: 'Project Client',
    quoteRole: 'Villa Owner',
    features: [
      {
        title: 'Moisture-Resistant Construction',
        content:
          'Materials are selected to withstand humid coastal environments while maintaining their appearance and structural performance.',
      },
      {
        title: 'Minimalist Cubicle Design',
        content:
          'Clean lines and carefully proportioned partitions create a spacious and contemporary restroom environment.',
      },
      {
        title: 'Premium Stainless Steel Hardware',
        content:
          'Durable stainless steel fittings provide reliable everyday performance with a refined architectural finish.',
      },
      {
        title: 'Coastal Material Palette',
        content:
          'Soft neutral surfaces and natural textures complement the surrounding beachfront architecture.',
      },
    ],
  },

  'toilet-cubicle-maxi-model': {
    title: 'TOILET CUBICLE MAXI MODEL',
    category: 'Restroom Systems',
    description:
      '100% moisture-resistant high-pressure laminate partition system with SS 316 anti-vandal hardware, designed for demanding commercial environments.',
    location: 'Mumbai, India',
    type: 'Commercial Restroom',
    style: 'High-Performance Modular',
    size: 'Commercial High-Traffic',
    heroImage:
      'https://media.istockphoto.com/id/2268278029/photo/modern-public-restroom-interior-with-gray-toilet-stalls-and-wall-mounted-urinals.jpg?s=612x612&w=0&k=20&c=3pNdcCeVknZKzVpUA-z81emj13l4dh-yT4upONjjgQ8=',
    concept:
      'Designed for high-traffic commercial facilities, the MAXI MODEL combines compact HPL panels with heavy-duty stainless steel hardware to deliver long-term durability, hygiene, and ease of maintenance.',
    palette: [
      { label: 'Panels', value: 'High-Pressure Compact Laminate HPL' },
      { label: 'Hardware', value: 'SS 316 Stainless Steel' },
      { label: 'Finish', value: 'Satin / Matte Architectural Finish' },
      { label: 'Flooring', value: 'Anti-skid commercial-grade flooring' },
      { label: 'Accessories', value: 'Heavy-duty cubicle accessories' },
    ],
    quote:
      'Built for demanding environments without compromising on the visual quality of the restroom.',
    quoteAuthor: 'Facility Manager',
    quoteRole: 'Commercial Project Client',
    features: [
      {
        title: '100% Moisture Resistant',
        content:
          'Compact HPL construction provides excellent resistance to water, humidity, and everyday restroom conditions.',
      },
      {
        title: 'SS 316 Anti-Vandal Hardware',
        content:
          'Heavy-duty stainless steel components are engineered for frequent use and demanding commercial environments.',
      },
      {
        title: 'High-Traffic Durability',
        content:
          'Robust panels and structural components provide long-lasting performance in busy public and commercial facilities.',
      },
      {
        title: 'Easy Maintenance',
        content:
          'Non-porous surfaces and practical modular construction make cleaning and routine maintenance straightforward.',
      },
      {
        title: 'Modern Commercial Appearance',
        content:
          'A clean architectural finish creates a professional restroom environment suitable for offices, malls, airports, and institutions.',
      },
    ],
  },

  'toilet-cubicle-maxi-pro-model': {
    title: 'TOILET CUBICLE MAXI PRO MODEL',
    category: 'Luxury Residential',
    description:
      'A premium restroom cubicle system combining refined finishes, warm textures, and minimalist spatial planning for modern luxury interiors.',
    location: 'Jakarta, Indonesia',
    type: 'Luxury Residential Restroom',
    style: 'Modern Luxury Minimalism',
    size: '240 m²',
    heroImage:
      'https://media.istockphoto.com/id/1965427683/photo/public-toilet-in-shopping-mall-city-toilet-separate-cubicles-wooden-door.jpg?s=612x612&w=0&k=20&c=gWC9bc7U4WIErLNWdRPA2QC7Yk6Y83FeRGW4DAwRGxU=',
    concept:
      'The MAXI PRO MODEL focuses on premium material expression, combining elegant surfaces, warm wood-inspired textures, and precise detailing to create a sophisticated restroom environment.',
    palette: [
      { label: 'Panels', value: 'Premium Compact Laminate' },
      { label: 'Textures', value: 'Warm Teakwood-inspired Finish' },
      { label: 'Hardware', value: 'Premium Stainless Steel Hardware' },
      { label: 'Accents', value: 'Brushed Metal Details' },
      { label: 'Flooring', value: 'Premium Stone / Marble Finish' },
    ],
    quote:
      'Every detail feels intentional—from the finish of the panels to the precision of the hardware.',
    quoteAuthor: 'Project Client',
    quoteRole: 'Homeowner',
    features: [
      {
        title: 'Premium Surface Finishes',
        content:
          'High-quality decorative surfaces provide a sophisticated appearance while retaining the practical benefits of compact laminate.',
      },
      {
        title: 'Warm Teakwood Texture',
        content:
          'Wood-inspired finishes introduce warmth and visual depth into the contemporary restroom environment.',
      },
      {
        title: 'Precision Hardware',
        content:
          'Premium stainless steel fittings provide a refined finish with reliable everyday functionality.',
      },
      {
        title: 'Minimalist Spatial Planning',
        content:
          'Carefully planned cubicle layouts maximize usability while maintaining an open and elegant visual character.',
      },
    ],
  },

  'toilet-cubicle-duro-model': {
    title: 'TOILET CUBICLE DURO MODEL',
    category: 'Corporate Spaces',
    description:
      'Acoustically insulated modular glass and laminate partitions engineered for high-performance workplaces and corporate environments.',
    location: 'Singapore',
    type: 'Corporate Restroom',
    style: 'Contemporary Corporate',
    size: '500 m²',
    heroImage:
      'https://media.istockphoto.com/id/1206101405/photo/row-of-public-toilet-decorated-with-wooden-partition.jpg?s=612x612&w=0&k=20&c=tAVFpifhILw3L0JdNId443byUS-GXp8n-X6IdSpjg1M=',
    concept:
      'The DURO MODEL is designed around durability, privacy, acoustics, and clean corporate aesthetics. Modular components allow efficient installation while maintaining a premium architectural appearance.',
    palette: [
      { label: 'Partitions', value: 'Compact Laminate & Glass' },
      { label: 'Hardware', value: 'Heavy-Duty Stainless Steel' },
      { label: 'Finish', value: 'Contemporary Matte Finish' },
      { label: 'Flooring', value: 'Commercial Anti-Skid Flooring' },
      { label: 'Lighting', value: 'Integrated Architectural Lighting' },
    ],
    quote:
      'The system gives our workplace restroom a premium finish while delivering the durability our facility requires.',
    quoteAuthor: 'Corporate Client',
    quoteRole: 'Facilities Director',
    features: [
      {
        title: 'Acoustic Privacy',
        content:
          'Partition construction is designed to improve acoustic privacy and create a more comfortable restroom experience.',
      },
      {
        title: 'Modular Installation',
        content:
          'Modular components enable efficient installation, replacement, and future configuration changes.',
      },
      {
        title: 'Corporate Aesthetic',
        content:
          'Minimal architectural detailing creates a polished restroom environment suited to modern offices and workplaces.',
      },
      {
        title: 'Durable Construction',
        content:
          'High-performance materials and robust fittings are selected for frequent commercial use.',
      },
    ],
  },

  'toilet-cubicle-duro-pro-model': {
    title: 'TOILET CUBICLE DURO PRO MODEL',
    category: 'Boutique Restoration',
    description:
      'A premium restroom system combining architectural character with modern humidity-resistant materials and custom fittings.',
    location: 'Medan, Indonesia',
    type: 'Boutique / Heritage Restroom',
    style: 'Contemporary Heritage',
    size: '410 m²',
    heroImage:
      'https://media.istockphoto.com/id/1952619672/photo/changing-booth-at-the-swimming-pool.jpg?s=612x612&w=0&k=20&c=F59Dvvlh7mEo4W_nNuKsL03uQnZHgH6cIN3T40DlapI=',
    concept:
      'The DURO PRO MODEL combines the character of boutique architectural spaces with modern restroom engineering, using refined surfaces, humidity-resistant panels, and custom detailing.',
    palette: [
      { label: 'Panels', value: 'Humidity-resistant architectural panels' },
      { label: 'Hardware', value: 'Custom Stainless Steel Fittings' },
      { label: 'Stone', value: 'Natural / Engineered Stone Finish' },
      { label: 'Accents', value: 'Warm Metallic Details' },
      { label: 'Textures', value: 'Premium Architectural Surfaces' },
    ],
    quote:
      'The result preserves the character of the space while introducing modern performance and functionality.',
    quoteAuthor: 'Restoration Client',
    quoteRole: 'Project Owner',
    features: [
      {
        title: 'Heritage-Inspired Detailing',
        content:
          'Architectural finishes and proportions are selected to complement boutique and restored environments.',
      },
      {
        title: 'Humidity-Resistant Materials',
        content:
          'Specialized materials provide long-term performance in moisture-intensive restroom conditions.',
      },
      {
        title: 'Custom Fittings',
        content:
          'Custom hardware and accessories allow the cubicle system to integrate seamlessly with the surrounding architecture.',
      },
      {
        title: 'Premium Stone Finishes',
        content:
          'Stone-inspired surfaces add a sophisticated architectural character to the restroom interior.',
      },
    ],
  },

  'toilet-cubicle-luron-model': {
    title: 'TOILET CUBICLE LURON MODEL',
    category: 'Wellness & Spa',
    description:
      'Antibacterial, scratch-resistant wall paneling paired with concealed ceiling-hung cubicle structures for premium wellness and spa environments.',
    location: 'Bangalore, India',
    type: 'Wellness & Spa Restroom',
    style: 'Minimal Wellness',
    size: '180 m²',
    heroImage:
      'https://media.istockphoto.com/id/1061147274/photo/luxury-brown-public-toilet-with-rows-ceramic-urinal.jpg?s=612x612&w=0&k=20&c=T2DM-xQUBvgOLsxFZQwYVlvG4LnhDTCgcK35aFt0Vn0=',
    concept:
      'The LURON MODEL brings a calm, hygienic, and refined aesthetic to wellness environments through antibacterial surfaces, concealed structural elements, and carefully integrated finishes.',
    palette: [
      { label: 'Wall Panels', value: 'Antibacterial Scratch-Resistant Panels' },
      { label: 'Cubicles', value: 'Concealed Ceiling-Hung System' },
      { label: 'Hardware', value: 'Premium Stainless Steel' },
      { label: 'Flooring', value: 'Slip-Resistant Stone Finish' },
      { label: 'Accents', value: 'Warm Earth-Tone Finishes' },
    ],
    quote:
      'The restroom feels like a natural extension of the spa—clean, calm, and beautifully finished.',
    quoteAuthor: 'Spa Client',
    quoteRole: 'Wellness Centre Director',
    features: [
      {
        title: 'Antibacterial Surfaces',
        content:
          'Specialized surface finishes help support hygienic restroom environments and simplify everyday cleaning.',
      },
      {
        title: 'Scratch-Resistant Panels',
        content:
          'Durable surfaces are designed to retain their appearance despite frequent use.',
      },
      {
        title: 'Ceiling-Hung Cubicles',
        content:
          'Concealed support structures create a visually clean appearance and make floor cleaning easier.',
      },
      {
        title: 'Wellness-Focused Design',
        content:
          'Warm neutral finishes and uncluttered detailing create a calm environment aligned with spa and wellness interiors.',
      },
    ],
  },
};

const SIDEBAR_PROJECTS = [
  {
    slug: 'toilet-cubicle-neo-model',
    name: 'TOILET CUBICLE NEO MODEL',
  },
  {
    slug: 'toilet-cubicle-maxi-model',
    name: 'TOILET CUBICLE MAXI MODEL',
  },
  {
    slug: 'toilet-cubicle-maxi-pro-model',
    name: 'TOILET CUBICLE MAXI PRO MODEL',
  },
  {
    slug: 'toilet-cubicle-duro-model',
    name: 'TOILET CUBICLE DURO MODEL',
  },
  {
    slug: 'toilet-cubicle-duro-pro-model',
    name: 'TOILET CUBICLE DURO PRO MODEL',
  },
  {
    slug: 'toilet-cubicle-luron-model',
    name: 'TOILET CUBICLE LURON MODEL',
  },
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