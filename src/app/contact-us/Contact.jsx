"use client";

import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";

const offices = [
  {
    title: "Faridabad",
    address:
      "Plot Number-P10/J-3, Adore Business City, Sector 72-73, Faridabad, Haryana, 121004",
  },
  {
    title: "Hyderabad",
    address:
      "Plot No.341/1,2,3 & 4, Safdar Nagar, Borabanda, Hyderabad - 500018",
  },
  {
    title: "New Delhi",
    address:
      "12/1 Ground Floor, Khirki Extension, Malviya Nagar, New Delhi, Delhi - 110017",
  },
  {
    title: "Gurgaon",
    address: "1344/31, Near Bal Bharti School, Laxman Vihar, Gurgaon",
  },
  {
    title: "Noida",
    address: "C-36, Sector 135, Noida",
  },
  {
    title: "Ghaziabad",
    address: "HPL 12 MM Board in Ghaziabad",
  },
];

const products = [
   "Black Maxi",
  "Maxi PRO",
  "Duro",
  "Duro Pro",
  "Cubic Doorz",
  "Kiddiez",
  "Kiddiez Pro",
  "Cielo",
  "Premia",
  "Rove",
  "NEO",
  "Maxi",
  "Luron",
  "Other",
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    contactPerson: "",
    phone: "",
    email: "",
    product: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // ==========================================
  // HANDLE INPUT CHANGE
  // ==========================================
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Phone validation
    if (name === "phone") {
      // Remove everything except numbers
      const onlyNumbers = value.replace(/\D/g, "");

      // Do not allow more than 10 digits
      if (onlyNumbers.length > 10) {
        return;
      }

      setFormData((prev) => ({
        ...prev,
        phone: onlyNumbers,
      }));

      setError("");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  // ==========================================
  // HANDLE FORM SUBMIT
  // ==========================================
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess(false);

    const contactPerson = formData.contactPerson.trim();
    const phone = formData.phone.trim();
    const email = formData.email.trim();
    const product = formData.product.trim();
    const message = formData.message.trim();

    // ==========================================
    // REQUIRED FIELD VALIDATION
    // ==========================================
    if (!contactPerson || !phone || !email || !product || !message) {
      setError("Please fill in all fields.");
      return;
    }

    // ==========================================
    // PHONE VALIDATION
    // Exactly 10 digits
    // ==========================================
    if (!/^\d{10}$/.test(phone)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    // ==========================================
    // INDIAN MOBILE NUMBER VALIDATION
    // Must start with 6, 7, 8 or 9
    // ==========================================
    

    // ==========================================
    // EMAIL VALIDATION
    // ==========================================
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);

      // ==========================================
      // API DATA
      // ==========================================
      const data = {
        platform: "Megha System Contact Form",
        supplierToken: "6a9fb2bdd936bdc2bb1d6df7",
        platformEmail: "contact@meghasystems.com",
        name: contactPerson,
        email: email,
        company: "NA",
        phone: phone,
        product: product,
        place: "N/A",
        message: message,
      };

      // ==========================================
      // API REQUEST
      // ==========================================
      const res = await axios.post(
        "https://brandbnalo.com/api/form/add",
        data
      );

      console.log("Form submitted successfully:", res.data);

      // ==========================================
      // SUCCESS
      // ==========================================
      setSuccess(true);

      // Clear form
      setFormData({
        contactPerson: "",
        phone: "",
        email: "",
        product: "",
        message: "",
      });
    } catch (err) {
      console.error("Form submission error:", err);

      setError(
        err?.response?.data?.message ||
          "Unable to submit your enquiry. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full overflow-hidden bg-white text-[#0d2461]">
      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-[#0d2461]">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full border border-white/[0.07]" />

        <div className="pointer-events-none absolute -right-10 -top-10 h-[280px] w-[280px] rounded-full border border-white/[0.05]" />

        <div className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-[#f5bd24]/10 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-[1536px] px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14 xl:px-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-4xl"
          >
            {/* Label */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f5bd24]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white sm:text-xs">
                Contact Megha Systems
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl">
              Let&apos;s talk
              <span className="block font-medium text-white/35">
                about your project.
              </span>
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              Looking for reliable toilet cubicles, washroom partitions, or HPL
              solutions? Tell us about your requirements and our team will get
              in touch with you.
            </p>
          </motion.div>

          {/* Small Stats */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.15 }}
            className="mt-5 flex flex-wrap gap-6 border-t border-white/10 pt-5 sm:gap-10"
          >
            <div className="flex items-center gap-3">
              <Building2 className="h-5 w-5 text-[#f5bd24]" />

              <div>
                <p className="text-sm font-bold text-white">
                  Multiple Locations
                </p>

                <p className="text-xs text-white/40">
                  Serving clients across India
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock3 className="h-5 w-5 text-[#f5bd24]" />

              <div>
                <p className="text-sm font-bold text-white">
                  Quick Response
                </p>

                <p className="text-xs text-white/40">
                  Our team is ready to assist
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CONTACT + FORM */}
      {/* ========================================================= */}
      <section className="relative bg-[#f7f8fa] py-10 md:py-12">
        <div className="mx-auto max-w-[1536px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[42%_58%] lg:gap-7">
            {/* ===================================================== */}
            {/* LEFT SIDE */}
            {/* ===================================================== */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              {/* Label */}
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#0d2461]/10 bg-white px-3 py-1.5">
                <MessageSquare className="h-3.5 w-3.5 text-[#f5bd24]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#0d2461]">
                  Get In Touch
                </span>
              </div>

              <h2 className="text-4xl font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-5xl">
                Have a project
                <span className="block font-medium text-[#0d2461]/30">
                  in mind?
                </span>
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
                Share your requirements with us. Whether you are an architect,
                contractor, builder, interior designer, or business owner,
                we&apos;re here to help you find the right washroom solution.
              </p>

              {/* ===================================================== */}
              {/* CONTACT CARDS */}
              {/* ===================================================== */}
              <div className="mt-5 space-y-3">
                {/* Email */}
                <div className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0d2461]/20 hover:shadow-lg">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0d2461]/5 text-[#0d2461] transition-colors group-hover:bg-[#0d2461] group-hover:text-white">
                    <Mail className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
                      Email Us
                    </p>

                    <a
                      href="mailto:contact@meghasystems.com"
                      className="mt-1 block text-sm font-semibold text-[#0d2461] hover:underline"
                    >
                      contact@meghasystems.com
                    </a>

                    <a
                      href="mailto:meghainteriorsfbd@gmail.com"
                      className="block text-sm font-semibold text-[#0d2461] hover:underline"
                    >
                      meghainteriorsfbd@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="rounded-2xl border border-gray-200 bg-white p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f5bd24]/15 text-[#0d2461]">
                      <Phone className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
                        Call Us
                      </p>

                      <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
                        <a
                          href="tel:+919873735716"
                          className="text-sm font-bold text-[#0d2461] hover:text-[#f0ad00]"
                        >
                          +91 9873735716
                        </a>

                        <a
                          href="tel:+919873735713"
                          className="text-sm font-bold text-[#0d2461] hover:text-[#f0ad00]"
                        >
                          +91 9873735713
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ===================================================== */}
              {/* LOCATIONS */}
              {/* ===================================================== */}
              <div className="mt-8">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#f5bd24]" />

                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0d2461]">
                    Our Locations
                  </h3>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {offices.map((office) => (
                    <div
                      key={office.title}
                      className="rounded-xl border border-gray-200 bg-white p-4"
                    >
                      <div className="flex items-start gap-3">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#f5bd24]" />

                        <div>
                          <h4 className="text-xs font-bold text-[#0d2461]">
                            {office.title}
                          </h4>

                          <p className="mt-1 text-[11px] leading-5 text-gray-500">
                            {office.address}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ===================================================== */}
            {/* RIGHT SIDE FORM */}
            {/* ===================================================== */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="rounded-[24px] border border-gray-200 bg-white p-6 shadow-[0_15px_50px_rgba(13,36,97,0.06)] sm:p-8 lg:p-10">
                {/* Form Header */}
                <div className="flex items-start justify-between gap-5 border-b border-gray-100 pb-6">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#f0ad00]">
                      Project Inquiry
                    </p>

                    <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0d2461] sm:text-3xl">
                      Tell us what you need.
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-400">
                      Fill in the details below and our team will contact you.
                    </p>
                  </div>

                  <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0d2461]/5 text-[#0d2461] sm:flex">
                    <Send className="h-5 w-5" />
                  </div>
                </div>

                {/* ===================================================== */}
                {/* FORM */}
                {/* ===================================================== */}
                <form
                  onSubmit={handleSubmit}
                  className="mt-7 space-y-5"
                >
                  {/* Name + Phone */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-xs font-bold text-[#0d2461]"
                      >
                        Name
                      </label>

                      <input
                        id="name"
                        name="contactPerson"
                        type="text"
                        value={formData.contactPerson}
                        onChange={handleChange}
                        placeholder="Your name"
                        disabled={loading}
                        className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-[#0d2461] outline-none transition-all placeholder:text-gray-400 focus:border-[#0d2461] focus:bg-white focus:ring-4 focus:ring-[#0d2461]/5 disabled:cursor-not-allowed disabled:opacity-60"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-xs font-bold text-[#0d2461]"
                      >
                        Phone
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        inputMode="numeric"
                        autoComplete="tel"
                        maxLength={10}
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10 digit mobile number"
                        disabled={loading}
                        className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-[#0d2461] outline-none transition-all placeholder:text-gray-400 focus:border-[#0d2461] focus:bg-white focus:ring-4 focus:ring-[#0d2461]/5 disabled:cursor-not-allowed disabled:opacity-60"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-bold text-[#0d2461]"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      disabled={loading}
                      className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-[#0d2461] outline-none transition-all placeholder:text-gray-400 focus:border-[#0d2461] focus:bg-white focus:ring-4 focus:ring-[#0d2461]/5 disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  </div>

                  {/* Product */}
                  <div>
                    <label
                      htmlFor="product"
                      className="mb-2 block text-xs font-bold text-[#0d2461]"
                    >
                      Product / Requirement
                    </label>

                    <select
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      disabled={loading}
                      className="h-12 w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-[#0d2461] outline-none transition-all focus:border-[#0d2461] focus:bg-white focus:ring-4 focus:ring-[#0d2461]/5 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <option value="" disabled>
                        Select a product
                      </option>

                      {products.map((product) => (
                        <option key={product} value={product}>
                          {product}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-bold text-[#0d2461]"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, quantity, location or requirements..."
                      disabled={loading}
                      className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm leading-6 text-[#0d2461] outline-none transition-all placeholder:text-gray-400 focus:border-[#0d2461] focus:bg-white focus:ring-4 focus:ring-[#0d2461]/5 disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3">
                      <p className="text-sm font-medium text-red-600">
                        {error}
                      </p>
                    </div>
                  )}

                  {/* Success Message */}
                  {success && (
                    <div className="rounded-xl border border-green-100 bg-green-50 px-4 py-3">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />

                        <p className="text-sm font-semibold text-green-600">
                          Your enquiry has been submitted successfully!
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="group flex h-13 w-full items-center justify-center gap-3 rounded-xl bg-[#0d2461] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#102d7a] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="h-4 w-4 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />

                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          />
                        </svg>

                        Submitting...
                      </>
                    ) : (
                      <>
                        Send Inquiry

                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>

                  {/* Privacy / reassurance */}
                  <div className="flex items-center justify-center gap-2 pt-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#f5bd24]" />

                    <p className="text-[10px] text-gray-400">
                      Your project details will be handled confidentially.
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* MAP */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-white py-10 md:py-15">
        <div className="mx-auto max-w-[1536px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-1 overflow-hidden rounded-[24px] border border-gray-200 bg-white shadow-[0_15px_50px_rgba(13,36,97,0.06)] lg:grid-cols-[1fr_360px]"
          >
            {/* Map */}
            <div className="relative h-[380px] overflow-hidden sm:h-[450px] lg:h-[520px]">
              <iframe
                title="Megha Systems Faridabad Location"
                src="https://www.google.com/maps?q=Adore%20Business%20City%20Sector%2072-73%20Faridabad%20Haryana%20121004&output=embed"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map Label */}
              <div className="absolute left-5 top-5 rounded-xl border border-white/20 bg-[#0d2461]/95 px-4 py-3 shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f5bd24] text-[#0d2461]">
                    <MapPin className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-white/50">
                      Megha Systems
                    </p>

                    <p className="text-xs font-bold text-white">
                      Faridabad, Haryana
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Details */}
            <div className="flex flex-col justify-between bg-[#0d2461] p-7 sm:p-9">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5bd24] text-[#0d2461]">
                  <Building2 className="h-5 w-5" />
                </div>

                <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.25em] text-[#f5bd24]">
                  Head Office
                </p>

                <h3 className="mt-2 text-2xl font-extrabold text-white">
                  Faridabad
                </h3>

                <div className="mt-5 flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#f5bd24]" />

                  <p className="text-sm leading-6 text-white/55">
                    Plot Number-P10/J-3,
                    <br />
                    Adore Business City,
                    <br />
                    Sector 72-73,
                    <br />
                    Faridabad, Haryana,
                    <br />
                    121004
                  </p>
                </div>
              </div>

              {/* Bottom */}
              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="text-xs leading-6 text-white/40">
                  Looking to visit us or discuss your project in person? Get
                  in touch with our team before your visit.
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Adore+Business+City+Sector+72-73+Faridabad+Haryana+121004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-[#f5bd24]"
                >
                  Get Directions

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}