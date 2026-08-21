'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navabar/page';
import FooterSection from '../components/Footer/page';
import { ArrowRight, Sparkles, Layers, ShieldCheck, Award } from 'lucide-react';

const PRODUCTS_CATALOG = [
  {
    slug: 'coastal-calm-retreat',
    name: 'Coastal Calm Retreat',
    category: 'Private Beach Villa',
    location: 'Bali, Indonesia',
    size: '320 m²',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09be1587?auto=format&fit=crop&q=80&w=1200',
    description: 'A tranquil beachfront villa designed to evoke a serene connection between indoor living and organic simplicity.',
    badge: 'Featured Project',
  },
  {
    slug: 'hpl-cubicle-system',
    name: 'Compact Laminate HPL Cubicles',
    category: 'Restroom Systems',
    location: 'Mumbai, India',
    size: 'Commercial High-Traffic',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200',
    description: '100% moisture-resistant high-pressure laminate partition system with SS 316 anti-vandal hardware.',
    badge: 'Best Seller',
  },
  {
    slug: 'modern-serenity-apartment',
    name: 'Modern Serenity Apartment',
    category: 'Luxury Residential',
    location: 'Jakarta, Indonesia',
    size: '240 m²',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200',
    description: 'Bespoke marble finishes, warm teakwood textures, and minimalist spatial planning for modern urban living.',
    badge: 'Premium Finish',
  },
  {
    slug: 'executive-loft-partition',
    name: 'Urban Executive Loft',
    category: 'Corporate Spaces',
    location: 'Singapore',
    size: '500 m²',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    description: 'Acoustically insulated modular glass and laminate partitions engineered for high-performance workplaces.',
    badge: 'Acoustic Rated',
  },
  {
    slug: 'heritage-house-revival',
    name: 'Heritage House Revival',
    category: 'Boutique Restoration',
    location: 'Medan, Indonesia',
    size: '410 m²',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1200',
    description: 'Restoring historic architectural grace with modern humidity-resistant stone paneling and custom fittings.',
    badge: 'Architectural Icon',
  },
  {
    slug: 'botanical-spa-restroom',
    name: 'Botanical Spa Restroom System',
    category: 'Wellness & Spa',
    location: 'Bangalore, India',
    size: '180 m²',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=1200',
    description: 'Antibacterial, scratch-resistant wall paneling paired with concealed ceiling-hung cubicle structures.',
    badge: 'Eco Friendly',
  },
];

export default function AllProductsPage() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-blue-950 font-sans flex flex-col">
      {/* Global Navigation Bar */}
      <Navbar />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-b from-[#0d2461] to-[#08173d] text-white py-16 sm:py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest text-[#f5bd24] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Product Catalog & Architectural Systems</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            All Systems & Projects
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-blue-100/80 leading-relaxed">
            Explore our complete range of premium compact laminate cubicles, wall panelings, and iconic architectural space designs.
          </p>
        </div>
      </header>

      {/* Main Catalog Grid */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 sm:px-8 py-12 sm:py-16">
        
        {/* Category Stats bar */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-blue-900/10 pb-6">
          <div>
            <h2 className="text-2xl font-bold text-blue-950">Featured Collections</h2>
            <p className="text-sm text-blue-900/60 mt-0.5">Showing {PRODUCTS_CATALOG.length} premium solutions</p>
          </div>

          <div className="flex items-center gap-6 text-xs font-semibold text-blue-900/70">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#0d2461]" /> 10-Yr Warranty</span>
            <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-[#0d2461]" /> ISO Certified</span>
            <span className="flex items-center gap-1.5"><Layers className="w-4 h-4 text-[#0d2461]" /> 100% Moisture Proof</span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS_CATALOG.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group relative bg-white border border-blue-900/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between hover:-translate-y-1 cursor-pointer"
            >
              {/* Product Image Showcase */}
              <div className="relative h-64 w-full overflow-hidden bg-blue-950/5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-[#0d2461] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  {product.badge}
                </div>
              </div>

              {/* Product Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs text-blue-900/60 font-semibold mb-1">
                    <span>{product.category}</span>
                    <span>{product.location}</span>
                  </div>

                  <h3 className="text-xl font-bold text-blue-950 group-hover:text-[#0d2461] transition-colors leading-snug">
                    {product.name}
                  </h3>

                  <p className="text-sm text-blue-900/75 mt-2 leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                </div>

                {/* View Details Action */}
                <div className="pt-4 border-t border-blue-900/10 flex items-center justify-between text-sm font-bold text-[#0d2461]">
                  <span>View Project Details</span>
                  <div className="w-8 h-8 rounded-full bg-[#0d2461]/8 group-hover:bg-[#0d2461] group-hover:text-white flex items-center justify-center transition-all">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Global Footer */}
      <FooterSection />
    </div>
  );
}
