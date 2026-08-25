"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Award,
    Building2,
    CheckCircle2,
    Clock3,
    Factory,
    HardHat,
    Hospital,
    Landmark,
    MapPin,
    Palette,
    Plane,
    Quote,
    ShieldCheck,
    Store,
    Users,
    Wrench,
    GraduationCap,
    BriefcaseBusiness,
    Utensils,
} from "lucide-react";
import Link from "next/link";
import PopupForm from "@/components/PopupForm";

const industries = [
    {
        title: "Restaurants",
        icon: Utensils,
    },
    {
        title: "Airports",
        icon: Plane,
    },
    {
        title: "Hospitals",
        icon: Hospital,
    },
    {
        title: "Malls",
        icon: Store,
    },
    {
        title: "Government Organizations",
        icon: Landmark,
    },
    {
        title: "Corporate Offices",
        icon: BriefcaseBusiness,
    },
    {
        title: "Educational Institutions",
        icon: GraduationCap,
    },
    {
        title: "Commercial Establishments",
        icon: Building2,
    },
];

const reasons = [
    {
        title: "Experienced Toilet Cubicle Manufacturer",
        description:
            "With years of industry experience, we understand the practical and design requirements of modern commercial and institutional washrooms.",
        icon: Award,
    },
    {
        title: "Customized Solutions",
        description:
            "We provide toilet cubicles and washroom partitions tailored to your space, layout, design, and project requirements.",
        icon: Palette,
    },
    {
        title: "Quality & Durability",
        description:
            "We focus on quality materials, precise manufacturing, and good finishing to deliver reliable solutions built for regular use.",
        icon: ShieldCheck,
    },
    {
        title: "Professional Installation",
        description:
            "Our experienced team ensures proper installation and coordination according to the approved design and project requirements.",
        icon: Wrench,
    },
    {
        title: "Timely Delivery",
        description:
            "We understand the importance of project timelines and work to ensure efficient manufacturing and timely delivery.",
        icon: Clock3,
    },
    {
        title: "Complete Project Support",
        description:
            "From consultation and design to manufacturing, installation, and after-sales support, our team provides assistance throughout the project.",
        icon: HardHat,
    },
];

const products = [
    "Toilet Cubicles",
    "Washroom Partitions",
    "Urinal Partitions",
    "Locker Solutions",
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 25,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.21, 0.47, 0.32, 0.98],
        },
    },
};

export default function About() {
    const [open, setOpen] = useState(false);
    return (
        <main className="w-full overflow-hidden bg-white text-[#0d2461]">
            <section className="relative min-h-[520px] overflow-hidden bg-[#0d2461]">

                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://media.istockphoto.com/id/880805138/photo/public-toilet.jpg?s=612x612&w=0&k=20&c=QcIBgwcsBDnfJTRsggKHSlu2-H5G8c1s2RN8qLGujNE=')",
                    }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#07183f]/75" />

                {/* Decorative elements */}
                <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-white/10" />
                <div className="absolute -right-20 -top-20 h-[280px] w-[280px] rounded-full border border-white/10" />

                <div className="absolute bottom-0 left-0 h-[280px] w-[280px] rounded-full bg-[#f5bd24]/10 blur-[100px]" />

                <div className="relative z-10 mx-auto flex min-h-[520px] max-w-[1536px] items-center px-5 py-20 sm:px-8 lg:px-12 xl:px-16">

                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        {/* Label */}
                        <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-[#f5bd24]" />

                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-white">
                                About Megha Systems
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-5xl font-extrabold leading-[0.80] tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl">
                            Built on
                            <br />
                            <span className="text-[#f5bd24]">Experience.</span>
                        </h1>

                        <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                            Trusted toilet cubicle manufacturer and supplier delivering
                            durable, functional, and modern washroom partition solutions
                            across India.
                        </p>

                        {/* Hero Stats */}
                        <div className="mt-5 flex flex-wrap gap-8 border-t border-white/15 pt-5">
                            <div>
                                <div className="text-3xl font-extrabold text-white">
                                    25<span className="text-[#f5bd24]">+</span>
                                </div>
                                <div className="mt-1 text-xs uppercase tracking-wider text-white/50">
                                    Years Experience
                                </div>
                            </div>

                            <div>
                                <div className="text-3xl font-extrabold text-white">
                                    5,000<span className="text-[#f5bd24]">+</span>
                                </div>
                                <div className="mt-1 text-xs uppercase tracking-wider text-white/50">
                                    Projects
                                </div>
                            </div>

                            <div>
                                <div className="text-3xl font-extrabold text-white">
                                    Pan<span className="text-[#f5bd24]"> India</span>
                                </div>
                                <div className="mt-1 text-xs uppercase tracking-wider text-white/50">
                                    Service Coverage
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Shape */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-white [clip-path:polygon(0_100%,100%_100%,100%_0,70%_65%,35%_20%,0_70%)]" />
            </section>

            <section className="relative overflow-hidden bg-white py-10 md:py-15">
                <div className="mx-auto max-w-[1536px] px-5 sm:px-8 lg:px-12 xl:px-16">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[48%_52%] lg:gap-16 xl:gap-24">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{
                                duration: 0.8,
                                ease: [0.21, 0.47, 0.32, 0.98],
                            }}
                            className="relative"
                        >
                            {/* Main Image */}
                            <div className="relative aspect-[1/1.05] overflow-hidden rounded-[28px] bg-gray-100">
                                <img
                                    src="https://media.istockphoto.com/id/988218244/photo/row-of-public-toilet-design.jpg?s=612x612&w=0&k=20&c=MGYKtjkr6YCK5JpU5Ty7etj0eCfehR9lDTUXMOemik4="
                                    alt="Megha Systems toilet cubicle and washroom partition solutions"
                                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                                />

                                {/* Image Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#07183f]/45 via-transparent to-transparent" />
                            </div>

                            {/* Decorative Border */}
                            <div className="pointer-events-none absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-[28px] border border-[#0d2461]/10" />

                            {/* Experience Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="
            absolute
            bottom-6
            left-6
            rounded-2xl
            border
            border-white/20
            bg-[#0d2461]/95
            px-5
            py-4
            shadow-2xl
            backdrop-blur-xl
            sm:bottom-8
            sm:left-8
          "
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f5bd24] text-[#0d2461]">
                                        <Award className="h-5 w-5" />
                                    </div>

                                    <div>
                                        <div className="text-2xl font-extrabold leading-none text-white">
                                            25<span className="text-[#f5bd24]">+</span>
                                        </div>

                                        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/55">
                                            Years of Experience
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Small Decorative Circle */}
                            <div className="absolute -right-5 top-10 h-10 w-10 rounded-full border-[6px] border-white bg-[#f5bd24]" />
                        </motion.div>

                        {/* ================= RIGHT CONTENT ================= */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{
                                duration: 0.8,
                                delay: 0.1,
                                ease: [0.21, 0.47, 0.32, 0.98],
                            }}
                        >
                            {/* Heading */}
                            <h2 className="max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-[#0d2461] sm:text-5xl lg:text-[56px]">
                                Trusted expertise.
                                <span className="block font-medium text-[#0d2461]/35">
                                    Built for lasting performance.
                                </span>
                            </h2>

                            {/* Content */}
                            <div className="mt-8 max-w-2xl space-y-2">
                                <p className="text-base leading-8 text-gray-600 sm:text-[17px]">
                                    <strong className="font-semibold text-[#0d2461]">
                                        Megha Systems is a trusted toilet cubicle manufacturer and
                                        supplier in India
                                    </strong>
                                    , specializing in the design, manufacturing, and installation of
                                    high-quality toilet cubicles and modern washroom partition
                                    solutions.
                                </p>

                                <p className="text-base leading-8 text-gray-600 sm:text-[17px]">
                                    With years of industry experience, we serve clients across major
                                    cities in India, delivering solutions that combine{" "}
                                    <span className="font-semibold text-[#0d2461]">
                                        durability, functionality, aesthetics, and value.
                                    </span>
                                </p>

                                <p className="text-base leading-8 text-gray-600 sm:text-[17px]">
                                    We work closely with{" "}
                                    <strong className="font-semibold text-[#0d2461]">
                                        architects, interior designers, builders, contractors, and
                                        construction companies
                                    </strong>{" "}
                                    to understand the specific requirements of every project.
                                </p>

                                <p className="text-base leading-8 text-gray-600 sm:text-[17px]">
                                    From selecting the right materials and finishes to planning layouts
                                    and installation, our team focuses on delivering washroom solutions
                                    that meet both practical and design expectations.
                                </p>
                            </div>

                            {/* Highlights */}
                            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                                <div className="rounded-2xl border border-[#0d2461]/10 bg-[#0d2461]/[0.025] p-4">
                                    <Factory className="h-5 w-5 text-[#0d2461]" />

                                    <p className="mt-3 text-xs font-bold uppercase tracking-wide text-[#0d2461]">
                                        Manufacturing
                                    </p>

                                    <p className="mt-1 text-xs leading-5 text-gray-500">
                                        Precision-built solutions
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-[#0d2461]/10 bg-[#0d2461]/[0.025] p-4">
                                    <Palette className="h-5 w-5 text-[#0d2461]" />

                                    <p className="mt-3 text-xs font-bold uppercase tracking-wide text-[#0d2461]">
                                        Custom Design
                                    </p>

                                    <p className="mt-1 text-xs leading-5 text-gray-500">
                                        Designed around your space
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-[#0d2461]/10 bg-[#0d2461]/[0.025] p-4">
                                    <ShieldCheck className="h-5 w-5 text-[#0d2461]" />

                                    <p className="mt-3 text-xs font-bold uppercase tracking-wide text-[#0d2461]">
                                        Built to Last
                                    </p>

                                    <p className="mt-1 text-xs leading-5 text-gray-500">
                                        Quality & durability
                                    </p>
                                </div>
                            </div>

                            {/* Bottom CTA */}
                            <div className="mt-4 flex items-center gap-3">
                                <div className="h-px w-10 bg-[#f5bd24]" />

                                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0d2461]/60">
                                    Complete Washroom Solutions
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="relative bg-[#f7f8fa] py-10 md:py-15">
                <div className="mx-auto max-w-[1536px] px-5 sm:px-8 lg:px-12 xl:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mx-auto max-w-3xl text-center"
                    >
                        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#0d2461]/10 bg-white px-3 py-1.5">
                            <MapPin className="h-3.5 w-3.5 text-[#f5bd24]" />
                            <span className="text-xs font-bold uppercase tracking-[0.25em]">
                                Industries We Serve
                            </span>
                        </div>

                        <h2 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
                            Experience Across
                            <span className="block mt-1 font-medium text-[#0d2461]/35">
                                Diverse Industries
                            </span>
                        </h2>

                        <p className="mt-2 text-sm leading-7 text-gray-500 sm:text-base">
                            Our toilet cubicle solutions are designed to meet the
                            requirements of a wide range of commercial, institutional, and
                            public spaces.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4"
                    >
                        {industries.map((industry) => {
                            const Icon = industry.icon;

                            return (
                                <motion.div
                                    key={industry.title}
                                    variants={itemVariants}
                                    className="group rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0d2461]/20 hover:shadow-xl"
                                >
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0d2461]/5 text-[#0d2461] transition-all duration-300 group-hover:bg-[#0d2461] group-hover:text-white">
                                        <Icon className="h-5 w-5" />
                                    </div>

                                    <h3 className="mt-5 text-sm font-bold leading-5 text-[#0d2461]">
                                        {industry.title}
                                    </h3>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-7 text-gray-500">
                        Every project has its own requirements, which is why we focus on
                        providing flexible and customized solutions rather than a
                        one-size-fits-all approach.
                    </p> */}
                </div>
            </section>

            <section className="bg-white py-10 md:py-15">
                <div className="mx-auto max-w-[1536px] px-5 sm:px-8 lg:px-12 xl:px-16">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0d2461]/10 bg-[#0d2461]/5 px-3 py-1.5">
                                <Factory className="h-3.5 w-3.5 text-[#f5bd24]" />
                                <span className="text-[11px] font-bold uppercase tracking-[0.25em]">
                                    What We Provide
                                </span>
                            </div>

                            <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
                                Toilet Cubicle &
                                <span className="block font-medium text-[#0d2461]/35">
                                    Washroom Partition Solutions
                                </span>
                            </h2>

                            <p className="mt-6 max-w-xl text-base leading-7 text-gray-500">
                                From practical commercial washrooms to high-end institutional
                                spaces, we provide complete solutions designed around your
                                project requirements.
                            </p>

                            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                {products.map((product, index) => (
                                    <div
                                        key={product}
                                        className="group flex items-center justify-between rounded-xl border border-gray-200 p-4 transition-all hover:border-[#0d2461]/20 hover:bg-[#0d2461]/[0.02]"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f5bd24]/15 text-xs font-bold text-[#0d2461]">
                                                0{index + 1}
                                            </span>

                                            <span className="text-sm font-bold text-[#0d2461]">
                                                {product}
                                            </span>
                                        </div>

                                        <ArrowRight className="h-4 w-4 text-gray-300 transition-transform group-hover:translate-x-1 group-hover:text-[#0d2461]" />
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="relative"
                        >
                            <div
                                className="relative min-h-[450px] overflow-hidden rounded-[24px] bg-cover bg-center"
                                style={{
                                    backgroundImage:
                                        "url('https://media.istockphoto.com/id/2290136516/photo/public-restroom-urinals-with-privacy-partitions-in-modern-clean-commercial-washroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=2c9mYvoYx8PvHVuU6TEgQgJtdhjwtSpbEH8P40GVG6M=')",
                                }}
                            >
                                <div className="absolute inset-0 bg-[#0d2461]/30" />

                                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/90 p-5 backdrop-blur-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0d2461] text-white">
                                            <Building2 className="h-5 w-5" />
                                        </div>

                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-wider text-[#0d2461]/50">
                                                Our Expertise
                                            </p>
                                            <p className="text-sm font-bold text-[#0d2461]">
                                                Complete Washroom Solutions
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-[#0d2461] py-10 md:py-15">
                {/* Background Decoration */}
                <div className="pointer-events-none absolute -right-[10%] -top-[20%] h-[500px] w-[500px] rounded-full border border-white/5" />
                <div className="pointer-events-none absolute -right-[5%] top-[10%] h-[300px] w-[300px] rounded-full border border-white/[0.03]" />

                <div className="pointer-events-none absolute -bottom-[20%] -left-[10%] h-[400px] w-[400px] rounded-full bg-[#f5bd24]/10 blur-[100px]" />

                <div className="relative z-10 mx-auto max-w-[1536px] px-5 sm:px-8 lg:px-12 xl:px-16">
                    {/* ================= HEADING ================= */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{
                            duration: 0.7,
                            ease: [0.21, 0.47, 0.32, 0.98],
                        }}
                        className="max-w-7xl mx-auto text-center"
                    >
                        {/* Label */}
                        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5">
                            <ShieldCheck className="h-3.5 w-3.5 text-[#f5bd24]" />

                            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-white">
                                Why Megha Systems
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-4xl font-extrabold leading-[1.02] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                            Why choose
                            <span className="block mt-1 font-medium text-white/35">
                                Megha Systems?
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="mt-4 max-w-2xl mx-auto text-sm leading-7 text-white/55 sm:text-base text-center">
                            At Megha Systems, we combine quality, experience, and
                            professional service to deliver reliable toilet cubicle and
                            washroom partition solutions built for lasting performance.
                        </p>
                    </motion.div>

                    {/* ================= FEATURE CARDS ================= */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5"
                    >
                        {reasons.map((reason, index) => {
                            const Icon = reason.icon;

                            return (
                                <motion.div
                                    key={reason.title}
                                    variants={itemVariants}
                                    className="
                            group
                            relative
                            overflow-hidden
                            rounded-2xl
                            border
                            border-white/10
                            bg-white/[0.06]
                            p-4
                            backdrop-blur-sm
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-white/20
                            hover:bg-white/[0.1]
                            hover:shadow-2xl
                            sm:p-6
                            lg:p-7
                        "
                                >
                                    {/* Number */}
                                    <span className="absolute right-4 top-4 text-[11px] font-bold tracking-wider text-white/15 sm:right-6 sm:top-6">
                                        0{index + 1}
                                    </span>

                                    {/* Icon */}
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f5bd24] text-[#0d2461] transition-transform duration-300 group-hover:scale-110 sm:h-11 sm:w-11">
                                        <Icon className="h-5 w-5" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="mt-5 pr-5 text-sm font-bold leading-5 text-white sm:mt-6 sm:text-base sm:leading-6">
                                        {reason.title}
                                    </h3>

                                    <p className="mt-2 text-[11px] leading-5 text-white/45 sm:mt-3 sm:text-sm sm:leading-6">
                                        {reason.description}
                                    </p>

                                    {/* Bottom Accent */}
                                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#f5bd24] transition-all duration-500 group-hover:w-full" />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-white py-10 md:py-15">
                <div className="mx-auto max-w-[1536px] px-5 sm:px-8 lg:px-12 xl:px-16">

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{
                            duration: 0.7,
                            ease: [0.21, 0.47, 0.32, 0.98],
                        }}
                        className="
                relative
                grid
                grid-cols-1
                items-center
                gap-10
                border-t
                border-b
                border-[#0d2461]/10
                py-10
                md:py-12
                lg:grid-cols-[1.1fr_0.9fr]
                lg:gap-20
            "
                    >

                        {/* Decorative Accent */}
                        <div className="absolute left-0 top-0 h-[2px] w-16 bg-[#f5bd24]" />

                        {/* ================= LEFT ================= */}
                        <div>

                            {/* Label */}
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#f5bd24]" />

                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0d2461]/55 sm:text-xs">
                                    Let&apos;s Build Better Washrooms
                                </span>
                            </div>

                            {/* Heading */}
                            <h2 className="max-w-3xl text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] text-[#0d2461] sm:text-5xl lg:text-[58px]">
                                Looking for a reliable
                                <span className="block font-medium text-[#0d2461]/30">
                                    toilet cubicle manufacturer?
                                </span>
                            </h2>

                        </div>

                        {/* ================= RIGHT ================= */}
                        <div className="lg:pl-6">

                            <p className="max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
                                Get quality{" "}
                                <strong className="font-semibold text-[#0d2461]">
                                    toilet cubicles and washroom partition solutions
                                </strong>{" "}
                                tailored to your project requirements.
                            </p>

                            <p className="mt-4 max-w-lg text-sm font-semibold leading-6 text-[#0d2461]">
                                Talk to Megha Systems today and get a quote.
                            </p>

                            {/* Buttons */}
                            <div className="mt-7 flex flex-wrap gap-3">

                                <button onClick={() => setOpen(true)}
                                    className="
                            group
                            inline-flex
                            items-center
                            justify-center
                            gap-3
                            rounded-full
                            bg-[#0d2461]
                            px-6
                            py-3.5
                            text-sm
                            font-bold
                            text-white
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:bg-[#102d7a]
                            hover:shadow-lg
                        "
                                >
                                    Get a Quote

                                    <ArrowRight
                                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </button>

                                <Link
                                    href="/contact-us"
                                    className="
                            inline-flex
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[#0d2461]/15
                            bg-white
                            px-6
                            py-3.5
                            text-sm
                            font-bold
                            text-[#0d2461]
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-[#0d2461]
                            hover:shadow-lg
                        "
                                >
                                    Contact Us
                                </Link>

                            </div>

                            {/* Bottom details */}
                            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2">
                                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#0d2461]/40">
                                    Quality Materials
                                </span>

                                <span className="h-1 w-1 rounded-full bg-[#f5bd24]" />

                                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#0d2461]/40">
                                    Custom Solutions
                                </span>

                                <span className="h-1 w-1 rounded-full bg-[#f5bd24]" />

                                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#0d2461]/40">
                                    Professional Installation
                                </span>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </section>

            <PopupForm
                isOpen={open}
                onClose={() => setOpen(false)}
            />
        </main>
    );
}