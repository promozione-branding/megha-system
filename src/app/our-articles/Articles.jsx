'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarDays, ArrowUpRight, X } from 'lucide-react';
import Link from 'next/link';

export default function Articles() {
    const [blogs, setBlogs] = useState([]);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // =========================================
    // FETCH BLOGS
    // =========================================

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch('/api/blog');

                const data = await res.json();

                if (!res.ok) {
                    throw new Error(
                        data.error || 'Failed to fetch articles'
                    );
                }

                setBlogs(data);
            } catch (error) {
                console.error('Articles:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    // =========================================
    // ESCAPE KEY
    // =========================================

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setSelectedBlog(null);
            }
        };

        window.addEventListener('keydown', handleEscape);

        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, []);

    // =========================================
    // PREVENT BODY SCROLL
    // =========================================

    useEffect(() => {
        if (selectedBlog) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [selectedBlog]);

    // =========================================
    // FORMAT DATE
    // =========================================

    const formatDate = (date) => {
        if (!date) return '';

        return new Date(date).toLocaleDateString('en-IN', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        });
    };

    // =========================================
    // REMOVE HTML FOR EXCERPT
    // =========================================

    const getExcerpt = (content) => {
        if (!content) return '';

        const text = content
            .replace(/<[^>]*>/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();

        return text.length > 140
            ? `${text.substring(0, 140)}...`
            : text;
    };

    return (<>
        <section className="relative min-h-screen w-full overflow-hidden bg-white py-8 font-sans text-[#0d2461] md:py-12">
            {/* Background Decorative Blobs */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -right-[10%] -top-[10%] h-[45%] w-[45%] rounded-full bg-gradient-to-br from-[#0d2461]/5 to-transparent blur-[100px]" />

                <div className="absolute -bottom-[15%] -left-[10%] h-[45%] w-[45%] rounded-full bg-gradient-to-tr from-[#f5bd24]/5 to-transparent blur-[100px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-[1750px] px-6 sm:px-10 lg:px-16 xl:px-24">
                <motion.div
                    className="mb-10 flex flex-col justify-between gap-6 sm:mb-14 lg:flex-row lg:items-end"
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                >
                    <div className="max-w-3xl">

                        {/* Label */}
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0d2461]/10 bg-[#0d2461]/5 px-3 py-1">

                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#f5bd24]" />

                            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#0d2461]">
                                OUR ARTICLES
                            </span>

                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[64px]">
                            Ideas{' '}
                            <span className="font-medium text-[#0d2461]/35">
                                Behind
                            </span>{' '}
                            <br className="hidden sm:block" />

                            The{' '}
                            <span className="font-medium text-[#0d2461]/35">
                                Craft.
                            </span>
                        </h1>
                    </div>

                    <motion.p
                        className="max-w-md text-sm leading-relaxed text-[#0d2461]/65 sm:text-base"
                        initial={{
                            opacity: 0,
                            x: 20,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.15,
                        }}
                    >
                        Discover insights, ideas, and expertise from our
                        experience in commercial spaces, craftsmanship,
                        materials, and design.
                    </motion.p>
                </motion.div>

                {loading && (
                    <div className="flex min-h-[300px] items-center justify-center">
                        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#0d2461]/10 border-t-[#f5bd24]" />
                    </div>
                )}

                {!loading && !error && blogs.length === 0 && (
                    <div className="rounded-[24px] border border-[#0d2461]/10 bg-[#0d2461]/[0.02] p-12 text-center">
                        <h2 className="text-2xl font-bold">
                            No articles yet
                        </h2>

                        <p className="mt-2 text-[#0d2461]/60">
                            Check back soon for our latest articles.
                        </p>
                    </div>
                )}

                {!loading && !error && blogs.length > 0 && (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {blogs.map((blog, index) => (
                            <Link key={blog._id} href={`/our-articles/${blog?.permalink}`}>
                                <motion.article
                                    className="group cursor-pointer overflow-hidden rounded-[24px] border border-[#0d2461]/10 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
                                    initial={{
                                        opacity: 0,
                                        y: 30,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.08,
                                    }}
                                    whileHover={{
                                        y: -6,
                                    }}
                                >

                                    {/* Image */}
                                    <div className="relative aspect-[16/10] overflow-hidden bg-[#0d2461]">
                                        {blog.image ? (
                                            <img
                                                src={blog.image}
                                                alt={blog.title}
                                                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="flex h-full items-center justify-center text-white/60">
                                                No Image
                                            </div>
                                        )}

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#07173f]/70 via-transparent to-transparent" />
                                        {/* Date */}
                                        {blog.date && (
                                            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#0d2461] shadow-md backdrop-blur">

                                                <CalendarDays className="h-3.5 w-3.5" />

                                                {formatDate(blog.date)}

                                            </div>
                                        )}

                                        {/* Arrow */}
                                        <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#f5bd24] group-hover:bg-[#f5bd24] group-hover:text-[#0d2461]">

                                            <ArrowUpRight className="h-5 w-5" />

                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="px-6 py-4">
                                        <h2 className="line-clamp-2 text-xl font-bold leading-tight tracking-tight text-[#0d2461] sm:text-2xl">
                                            {blog.title}
                                        </h2>

                                        <div className="mt-2 flex items-center justify-between border-t border-[#0d2461]/10 pt-2">

                                            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#f5bd24]">
                                                Read Article
                                            </span>

                                            <span className="text-sm font-semibold text-[#0d2461] transition-transform duration-300 group-hover:translate-x-1">
                                                →
                                            </span>

                                        </div>
                                    </div>
                                </motion.article>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </section>
    </>);
}