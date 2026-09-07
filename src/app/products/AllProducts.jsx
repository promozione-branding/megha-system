'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navabar/page';
import FooterSection from '../components/Footer/page';
import {
  ArrowRight,
  Sparkles,
  Layers,
  ShieldCheck,
  Award,
} from 'lucide-react';

import { allProducts } from './../../data.js';
import StickyContactButtons from '@/components/StickyContactButtons';

export default function AllProductsPage() {
  const totalProducts = allProducts.reduce(
    (total, category) => total + category.products.length,
    0
  );

  return (
    <div className="min-h-screen bg-[#faf9f6] text-blue-950 font-sans flex flex-col">
      <Navbar />

      {/* Hero */}
      <header className="relative bg-gradient-to-b from-[#0d2461] to-[#08173d] text-white py-16 sm:py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="max-w-7xl mx-auto text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest text-[#f5bd24] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Product Catalog & Architectural Systems</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            All Products
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-blue-100/80 leading-relaxed">
            Explore our complete range of premium restroom partitions,
            washroom cubicles, kids restroom systems, urinal partitions,
            and luxury partition systems.
          </p>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-12 sm:py-16">

        {/* Header */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-blue-900/10 pb-6">
          <div>
            <h2 className="text-2xl font-bold text-blue-950">
              Product Collections
            </h2>

            <p className="text-sm text-blue-900/60 mt-1">
              Showing {allProducts.length} categories and {totalProducts} products
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs font-semibold text-blue-900/70">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#0d2461]" />
              10-Yr Warranty
            </span>

            <span className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#0d2461]" />
              ISO Certified
            </span>

            <span className="flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#0d2461]" />
              100% Moisture Proof
            </span>
          </div>
        </div>

        {/* Categories + Products */}
        <div className="space-y-16">
          {allProducts.map((category) => (
            <section id={category.slug} key={category.slug} className="scroll-mt-28">

              {/* Category Name */}
              <div className="mb-7">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0d2461]/60">
                  Category
                </span>

                <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-blue-950">
                  {category.categoryName}
                </h2>
                <h2 className="mt-1 text-lg bg-white w-fit py-2 px-3 rounded-2xl sm:text-xl font-bold text-blue-950">
                  {category.excerpt}
                </h2>
                <h2 className="mt-1 text-sm sm:text-base  text-blue-950">
                  {category.description}
                </h2>

                <p className="mt-1 text-sm text-blue-900/60">
                  {category.products.length}{' '}
                  {category.products.length === 1 ? 'product' : 'products'}
                </p>
              </div>

              {/* Products */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {category.products.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    className="group relative bg-white border border-blue-900/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col hover:-translate-y-1"
                  >
                    {/* Product Image */}
                    <div className="relative h-56 w-full overflow-hidden bg-blue-950/5">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-950/10 to-blue-950/5">
                          <div className="text-center px-6">
                            <Layers className="w-10 h-10 mx-auto mb-2 text-[#0d2461]/30" />

                            <span className="text-xs font-semibold uppercase tracking-wider text-blue-900/40">
                              Product Image
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 bg-[#0d2461] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                        {category.categoryName}
                      </div>
                    </div>

                    {/* Product Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-blue-950 group-hover:text-[#0d2461] transition-colors leading-snug">
                          {product.name}
                        </h3>

                        {product.shortDescription && (
                          <p className="mt-3 text-sm text-blue-900/60 leading-relaxed line-clamp-3">
                            {product.shortDescription}
                          </p>
                        )}
                      </div>

                      {/* View Details */}
                      <div className="mt-5 pt-4 border-t border-blue-900/10 flex items-center justify-between text-sm font-bold text-[#0d2461]">
                        <span>View Details</span>

                        <div className="w-8 h-8 rounded-full bg-[#0d2461]/8 group-hover:bg-[#0d2461] group-hover:text-white flex items-center justify-center transition-all">
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <StickyContactButtons />
      <FooterSection />
    </div>
  );
}