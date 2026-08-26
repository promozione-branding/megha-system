"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  Mail,
  Phone,
  User,
  X,
} from "lucide-react";

const products = [
  "Toilet Cubicles",
  "Washroom Partitions",
  "Urinal Cubicles",
  "Kids Toilet Cubicles",
  "HPL 12 MM Boards",
  "Other",
];

export default function PopupForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    contactPerson: "",
    phone: "",
    email: "",
    product: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (
      !formData.contactPerson ||
      !formData.phone ||
      !formData.email ||
      !formData.product ||
      !formData.message
    ) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);

      const data = {
        platform: "Megha System Contact Form",
        platformEmail: "contact@meghasystems.com",
        name: formData.contactPerson,
        email: formData.email,
        company: "NA",
        phone: formData.phone,
        product: formData.product,
        place: "N/A",
        message: formData.message,
      };

      const res = await axios.post(
        "https://brandbnalo.com/api/form/add",
        data
      );

      console.log("Form submitted:", res.data);

      setSuccess(true);

      setFormData({
        contactPerson: "",
        phone: "",
        email: "",
        product: "",
        message: "",
      });

      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2500);
    } catch (err) {
      console.error("Form submission error:", err);

      setError("Unable to submit your enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#061638]/75 px-4 py-5 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex max-h-[92vh] w-full max-w-[900px] overflow-hidden rounded-[26px] bg-white shadow-[0_35px_100px_rgba(0,0,0,0.3)]"
          >
            {/* LEFT PANEL */}
            <div className="relative hidden w-[38%] flex-col justify-between overflow-hidden bg-[#0d2461] p-8 lg:flex xl:p-10">
              {/* Decorative circles */}
              <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full border border-white/[0.07]" />
              <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full border border-white/[0.06]" />
              <div className="absolute bottom-10 right-[-80px] h-48 w-48 rounded-full bg-[#f5bd24]/10 blur-[70px]" />

              <div className="relative z-10">
                {/* Brand */}
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/logo/1.png"
                    alt="logo"
                    className="rounded-lg"
                  />
                </div>

                {/* Heading */}
                <div className="mt-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#f5bd24]">
                    Get In Touch
                  </p>

                  <h2 className="mt-4 text-4xl font-extrabold leading-[1.02] tracking-tight text-white xl:text-5xl">
                    Let&apos;s build
                    <span className="block font-medium text-white/35">
                      something better.
                    </span>
                  </h2>

                  <p className="mt-4 max-w-xs text-sm leading-6 text-white/50">
                    Tell us about your washroom project and our team will help
                    you find the right solution.
                  </p>
                </div>
              </div>

              {/* Bottom contact */}
              <div className="relative z-10">
                <div className="mb-5 h-px w-full bg-white/10" />

                <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.25em] text-white/35">
                  Speak With Our Team
                </p>

                {/* Phone */}
                <a
                  href="tel:+919873735713"
                  className="group flex items-center gap-3"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-[#f5bd24] transition-colors group-hover:bg-[#f5bd24] group-hover:text-[#0d2461]">
                    <Phone className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-white">
                      +91 9873735713
                    </p>

                    <p className="text-[10px] text-white/50">
                      Call us directly
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:contact@meghasystems.com"
                  className="group mt-4 flex items-center gap-3"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-[#f5bd24] transition-colors group-hover:bg-[#f5bd24] group-hover:text-[#0d2461]">
                    <Mail className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-white">
                      contact@meghasystems.com
                    </p>

                    <p className="text-[10px] text-white/50">
                      Email our team
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="relative flex min-w-0 flex-1 flex-col bg-white">
              {/* Close button */}
              <button
                type="button"
                onClick={onClose}
                className="absolute right-5 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 transition-all hover:border-[#0d2461]/20 hover:bg-[#0d2461] hover:text-white"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="overflow-y-auto p-6 sm:p-8 lg:p-10">
                {success ? (
                  /* SUCCESS */
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex min-h-[500px] flex-col items-center justify-center text-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
                      <CheckCircle2 className="h-8 w-8 text-green-600" />
                    </div>

                    <h3 className="mt-6 text-3xl font-extrabold tracking-tight text-[#0d2461]">
                      Enquiry Received
                    </h3>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-gray-500">
                      Thank you for contacting Megha Systems. Our team will get
                      back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    {/* Form heading */}
                    <div className="mb-4 pr-10 md:mb-8">
                      <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#0d2461]/40">
                        Project Enquiry
                      </p>

                      <h3 className="mt-2 text-xl font-extrabold tracking-tight text-[#0d2461] md:text-3xl">
                        Tell us what you need.
                      </h3>

                      <p className="mt-2 hidden text-sm leading-6 text-gray-400 md:flex">
                        Fill in your details and we&apos;ll get back to you.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name + Phone */}
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <FormInput
                          label="Your Name"
                          name="contactPerson"
                          value={formData.contactPerson}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          icon={User}
                        />

                        <FormInput
                          label="Phone Number"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          icon={Phone}
                        />
                      </div>

                      {/* Email + Product */}
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <FormInput
                          label="Email Address"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          icon={Mail}
                        />

                        {/* Product */}
                        <div>
                          <label
                            htmlFor="product"
                            className="mb-2 block text-[11px] font-bold uppercase tracking-[0.12em] text-[#0d2461]/60"
                          >
                            Product / Requirement
                          </label>

                          <select
                            id="product"
                            name="product"
                            value={formData.product}
                            onChange={handleChange}
                            className="h-12 w-full rounded-xl border border-gray-200 bg-[#fafafa] px-4 text-sm text-[#0d2461] outline-none transition-all focus:border-[#0d2461] focus:bg-white focus:ring-4 focus:ring-[#0d2461]/5"
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
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="mb-2 block text-[11px] font-bold uppercase tracking-[0.12em] text-[#0d2461]/60"
                        >
                          Message
                        </label>

                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project..."
                          className="w-full resize-none rounded-xl border border-gray-200 bg-[#fafafa] px-4 py-3 text-sm leading-6 text-[#0d2461] outline-none transition-all placeholder:text-gray-400 focus:border-[#0d2461] focus:bg-white focus:ring-4 focus:ring-[#0d2461]/5"
                        />
                      </div>

                      {/* Error */}
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="rounded-xl bg-red-50 px-4 py-3 text-xs font-medium text-red-600"
                        >
                          {error}
                        </motion.div>
                      )}

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="group flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-[#0d2461] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#102d7a] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Sending Enquiry...
                          </>
                        ) : (
                          <>
                            Send Enquiry
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </button>

                      <p className="text-center text-[10px] text-gray-400">
                        Our team typically responds within one business day.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ========================================================= */
/* INPUT COMPONENT */
/* ========================================================= */

function FormInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  icon: Icon,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-[11px] font-bold uppercase tracking-[0.12em] text-[#0d2461]/60"
      >
        {label}
      </label>

      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <Icon className="h-4 w-4" />
        </span>

        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="h-12 w-full rounded-xl border border-gray-200 bg-[#fafafa] pl-11 pr-4 text-sm text-[#0d2461] outline-none transition-all placeholder:text-gray-400 focus:border-[#0d2461] focus:bg-white focus:ring-4 focus:ring-[#0d2461]/5"
        />
      </div>
    </div>
  );
}