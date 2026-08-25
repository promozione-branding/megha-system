'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  CalendarDays,
  ArrowLeft,
  Loader2,
} from 'lucide-react';
import Link from 'next/link';

export default function Article({ blog }) {
  const formatDate = (date) => {
    if (!date) return '';

    return new Date(date).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-white font-sans text-[#0d2461]">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-[10%] -top-[10%] h-[45%] w-[45%] rounded-full bg-gradient-to-br from-[#0d2461]/5 to-transparent blur-[100px]" />

        <div className="absolute -bottom-[10%] -left-[10%] h-[45%] w-[45%] rounded-full bg-gradient-to-tr from-[#f5bd24]/5 to-transparent blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-5 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-16">

        {/* Back */}
        <Link href={"/our-articles"}>
          <motion.button
            onClick={() => router.push('/our-articles')}
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-[#0d2461]/70 transition hover:text-[#f5bd24]"
            initial={{
              opacity: 0,
              x: -15,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Articles
          </motion.button>
        </Link>

        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          {/* Label */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0d2461]/10 bg-[#0d2461]/5 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f5bd24]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.25em]">
              ARTICLE
            </span>
          </div>

          {/* Title */}
          <h1 className="max-w-5xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[64px]">
            {blog.title}
          </h1>

          {/* Date */}
          {blog.date && (
            <div className="mt-5 flex items-center gap-2 text-sm font-medium text-[#0d2461]/55">
              <CalendarDays className="h-4 w-4 text-[#f5bd24]" />

              {formatDate(blog.date)}
            </div>
          )}
        </motion.div>

        {/* Image */}
        {blog.image && (
          <motion.div
            className="mt-8 overflow-hidden rounded-[24px] bg-[#0d2461] shadow-xl sm:mt-10 sm:rounded-[32px]"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="max-h-[650px] w-full object-cover"
            />
          </motion.div>
        )}

        {/* Content */}
        <motion.article
          className="mx-auto mt-10 max-w-4xl sm:mt-14"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
        >
          <div
            className="
                            prose
                            prose-lg
                            max-w-none
                            text-[#0d2461]/80

                            prose-headings:font-extrabold
                            prose-headings:text-[#0d2461]

                            prose-h1:text-4xl
                            prose-h2:text-3xl
                            prose-h3:text-2xl

                            prose-p:leading-[1.9]

                            prose-a:font-semibold
                            prose-a:text-[#0d2461]

                            prose-strong:text-[#0d2461]

                            prose-blockquote:border-[#f5bd24]
                            prose-blockquote:text-[#0d2461]/70

                            prose-img:rounded-2xl
                        "
            dangerouslySetInnerHTML={{
              __html:
                blog.content ||
                '<p>No content available.</p>',
            }}
          />
        </motion.article>

      </div>
    </main>
  );
}