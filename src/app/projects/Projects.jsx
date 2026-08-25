'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Eye, X } from 'lucide-react';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch("/api/project");

                const data = await res.json();

                if (!res.ok) {
                    throw new Error(
                        data.error || "Failed to fetch projects"
                    );
                }

                setProjects(data);

            } catch (error) {
                console.error(error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    // Escape
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setSelectedProject(null);
            }
        };

        window.addEventListener("keydown", handleEscape);

        return () => {
            window.removeEventListener("keydown", handleEscape);
        };
    }, []);

    // Prevent scrolling
    useEffect(() => {
        document.body.style.overflow = selectedProject
            ? "hidden"
            : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedProject]);

    return (
        <>
            <section className="relative w-full overflow-hidden bg-white py-8 font-sans text-[#0d2461] md:py-10">
                {/* Background Decorative Blobs */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute -right-[10%] -top-[10%] h-[45%] w-[45%] rounded-full bg-gradient-to-br from-[#0d2461]/5 to-transparent blur-[100px]" />

                    <div className="absolute -bottom-[15%] -left-[10%] h-[45%] w-[45%] rounded-full bg-gradient-to-tr from-[#f5bd24]/5 to-transparent blur-[100px]" />
                </div>

                <div className="relative z-10 mx-auto max-w-[1750px] px-6 sm:px-10 lg:px-16 xl:px-24">

                    {/* Header */}
                    <motion.div
                        className="mb-10 flex flex-col justify-between gap-6 sm:mb-14 lg:flex-row lg:items-end"
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="max-w-3xl">
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0d2461]/10 bg-[#0d2461]/5 px-3 py-1">
                                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#f5bd24]" />

                                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#0d2461]">
                                    OUR PROJECTS
                                </span>
                            </div>

                            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[64px]">
                                Spaces{' '}
                                <span className="font-medium text-[#0d2461]/35">
                                    We've
                                </span>{' '}
                                <br className="hidden sm:block" />
                                Beautifully{' '}
                                <span className="font-medium text-[#0d2461]/35">
                                    Realized.
                                </span>
                            </h1>
                        </div>

                        <motion.p
                            className="max-w-md text-sm leading-relaxed text-[#0d2461]/65 sm:text-base"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                        >
                            Explore some of the commercial spaces where our
                            craftsmanship, precision, and attention to detail
                            come together.
                        </motion.p>
                    </motion.div>

                    {loading && (
                        <div className="flex min-h-[300px] items-center justify-center">
                            <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#0d2461]/10 border-t-[#f5bd24]" />
                        </div>
                    )}

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project, index) => (
                            <motion.article
                                key={project.name}
                                className="group relative cursor-pointer overflow-hidden rounded-[24px] bg-[#0d2461]"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.08,
                                }}
                                whileHover={{ y: -6 }}
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#07173f] via-[#0d2461]/10 to-transparent opacity-90" />

                                    {/* Eye Button */}
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedProject(project);
                                        }}
                                        aria-label={`View ${project.name}`}
                                        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:border-[#f5bd24] hover:bg-[#f5bd24] hover:text-[#0d2461]"
                                    >
                                        <Eye className="h-5 w-5" />
                                    </button>

                                    {/* Project Details */}
                                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                                        <div className="mb-2 flex items-center gap-2 text-[#f5bd24]">
                                            <MapPin className="h-4 w-4" />

                                            <span className="text-xs font-semibold uppercase tracking-[0.15em]">
                                                {project.place}
                                            </span>
                                        </div>

                                        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                                            {project.name}
                                        </h2>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= POPUP ================= */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 z-[999] flex items-center justify-center bg-[#07173f]/20 p-4 backdrop-blur-md sm:p-6 lg:p-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        {/* Popup */}
                        <motion.div
                            className="relative w-full max-w-5xl overflow-hidden rounded-[24px] bg-white shadow-2xl"
                            initial={{
                                opacity: 0,
                                scale: 0.92,
                                y: 30,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.92,
                                y: 20,
                            }}
                            transition={{
                                duration: 0.35,
                                ease: [0.21, 0.47, 0.32, 0.98],
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                type="button"
                                onClick={() => setSelectedProject(null)}
                                aria-label="Close popup"
                                className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#0d2461]/80 text-white backdrop-blur-md transition-all duration-300 hover:bg-[#f5bd24] hover:text-[#0d2461]"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            {/* Image */}
                            <div className="relative bg-[#07173f]">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.name}
                                    className="max-h-[70vh] w-full object-contain"
                                />
                            </div>

                            {/* Popup Information */}
                            <div className="flex flex-col gap-4 bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
                                <div>
                                    <div className="mb-2 flex items-center gap-2 text-[#f5bd24]">
                                        <MapPin className="h-4 w-4" />

                                        <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#0d2461]/60">
                                            {selectedProject.place}
                                        </span>
                                    </div>

                                    <h2 className="text-2xl font-extrabold tracking-tight text-[#0d2461] sm:text-3xl">
                                        {selectedProject.name}
                                    </h2>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}