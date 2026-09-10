
"use client";

import React, { useState } from "react";
import axios from "axios";
import {
  Phone,
  Mail,
  MapPin,
  Share2,
  Globe,
  Video,
  Loader2,
  CheckCircle2,
} from "lucide-react";

export default function ContactSection() {
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

  // ================================
  // HANDLE INPUT CHANGE
  // ================================
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    // Phone: allow only numbers and maximum 10 digits
    if (name === "phone") {
      const onlyNumbers = value.replace(/\D/g, "");

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

  // ================================
  // HANDLE FORM SUBMIT
  // ================================
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setSuccess(false);

    const phone = formData.phone.trim();

    // Required fields validation
    if (
      !formData.contactPerson.trim() ||
      !phone ||
      !formData.email.trim() ||
      !formData.product ||
      !formData.message.trim()
    ) {
      setError("Please fill in all fields.");
      return;
    }

    // Exactly 10 digits validation
    if (!/^\d{10}$/.test(phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

   

    try {
      setLoading(true);

      const data = {
        platform: "Megha System Contact Form",
        supplierToken: "6a9fb2bdd936bdc2bb1d6df7",
        platformEmail: "contact@meghasystems.com",

        name: formData.contactPerson.trim(),
        email: formData.email.trim(),
        company: "NA",
        phone: phone,
        product: formData.product,
        place: "N/A",
        message: formData.message.trim(),
      };

      const res = await axios.post(
        "https://brandbnalo.com/api/form/add",
        data
      );

      console.log("Form submitted:", res.data);

      // Success
      setSuccess(true);

      // Reset form
      setFormData({
        contactPerson: "",
        phone: "",
        email: "",
        product: "",
        message: "",
      });

      // Hide success message after 2.5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 2500);
    } catch (err: any) {
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
    <section className="py-12 bg-slate-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans antialiased text-slate-900">
      <div className="relative w-full max-w-[1400px] bg-white rounded-[16px] border border-slate-100 p-2 sm:p-8 lg:p-12 overflow-hidden">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">

          {/* =========================================
              LEFT INFORMATION PANEL
          ========================================== */}
          <aside className="lg:col-span-4 bg-[#E5E2E0] rounded-[16px] p-6 sm:p-8 flex flex-col justify-between space-y-6">

            <div className="space-y-6">

              <h2 className="text-4xl font-bold tracking-tight leading-[1.2] text-black">
                Let's Talk Beautiful Spaces.
              </h2>

              {/* INFO CARDS */}
              <div className="space-y-4 pt-1">

                {/* PHONE */}
                <div className="bg-[#F0EDED] rounded-[12px] p-2 lg:p-3 xl:p-4  flex items-center xl:gap-3.5">

                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-slate-800 shrink-0">
                    <Phone className="w-5 h-5 stroke-[1.5]" />
                  </div>

                  <div>
                    <p className="text-[12px] text-slate-600 leading-tight">
                      Call Us
                    </p>

                    <a
                      href="tel:+919873735713"
                      className="text-base font-semibold text-black tracking-tight mt-0.5 block hover:underline"
                    >
                      +91 9873735713
                    </a>

                    <a
                      href="tel:+919873735716"
                      className="text-base font-semibold text-black tracking-tight mt-0.5 block hover:underline"
                    >
                      +91 9873735716
                    </a>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="bg-[#F0EDED] rounded-[12px] p-2 lg:p-3 xl:p-4 flex items-center xl:gap-3.5">

                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-slate-800 shrink-0">
                    <Mail className="w-5 h-5 stroke-[1.5]" />
                  </div>

                  <div>
                    <p className="text-[12px] text-slate-600 leading-tight">
                      Mail Us
                    </p>

                    <a
                      href="mailto:contact@meghasystems.com"
                      className="text-base font-semibold text-black tracking-tight mt-0.5 break-all hover:underline"
                    >
                      contact@meghasystems.com
                    </a>
                  </div>
                </div>

                {/* ADDRESS */}
                <div className="bg-[#F0EDED] rounded-[12px] p-2 lg:p-3 xl:p-4 flex items-start xl:gap-3.5">

                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-slate-800 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 stroke-[1.5]" />
                  </div>

                  <div>

                    <p className="text-[12px] text-slate-600 leading-tight">
                      Head Office
                    </p>

                    <p className="text-base font-semibold text-black tracking-tight leading-snug mt-0.5">
                      Plot Number-P10/J-3, Adore Business City, Sector 72-73,
                      Faridabad, Haryana, 121004
                    </p>

                    <p className="text-[12px] mt-3 text-slate-600 leading-tight">
                      Branch Office
                    </p>

                    <p className="text-base font-semibold text-black tracking-tight leading-snug mt-0.5">
                      Plot No.341/1,2,3 &amp; 4, Safdar Nagar, Borabanda,
                      Hyderabad-500018
                    </p>

                  </div>
                </div>

              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="pt-4 border-t border-black/10 space-y-2.5">

              <p className="text-xs font-semibold text-slate-800">
                Connect with us:
              </p>

              <div className="flex items-center gap-3">

                <a
                  href="#facebook"
                  className="text-slate-800 hover:text-black transition-all"
                  aria-label="Facebook"
                >
                  <Share2 className="w-4 h-4" />
                </a>

                <a
                  href="#twitter"
                  className="text-slate-800 hover:text-black transition-all"
                  aria-label="Twitter"
                >
                  <Globe className="w-4 h-4" />
                </a>

                <a
                  href="#youtube"
                  className="text-slate-800 hover:text-black transition-all"
                  aria-label="YouTube"
                >
                  <Video className="w-4 h-4" />
                </a>

              </div>
            </div>

          </aside>

          {/* =========================================
              RIGHT FORM PANEL
          ========================================== */}
          <main className="lg:col-span-8 flex flex-col gap-3 py-2 sm:pr-2">

            <header>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black leading-tight">
                Send Us a Message
              </h2>
            </header>

            <form
              onSubmit={handleSubmit}
              className="space-y-5 relative z-10"
            >

              {/* NAME + EMAIL */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                {/* NAME */}
                <div className="space-y-2">

                  <label className="text-sm font-medium text-slate-850">
                    Name <span className="text-rose-500">*</span>
                  </label>

                  <input
                    type="text"
                    name="contactPerson"
                    required
                    placeholder="Your Name"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 bg-[#F8F7F7] border border-slate-100 rounded-[8px] text-base placeholder:text-slate-450 text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-300 transition-all"
                  />

                </div>

                {/* EMAIL */}
                <div className="space-y-2">

                  <label className="text-sm font-medium text-slate-850">
                    Email <span className="text-rose-500">*</span>
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 bg-[#F8F7F7] border border-slate-100 rounded-[8px] text-base placeholder:text-slate-450 text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-300 transition-all"
                  />

                </div>

              </div>

              {/* PHONE + PRODUCT */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                {/* PHONE */}
                <div className="space-y-2">

                  <label className="text-sm font-medium text-slate-850">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    required
                    inputMode="numeric"
                    maxLength={10}
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 bg-[#F8F7F7] border border-slate-100 rounded-[8px] text-base placeholder:text-slate-450 text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-300 transition-all"
                  />

                </div>

                {/* PRODUCT */}
                <div className="space-y-2">

                  <label className="text-sm font-medium text-slate-850">
                    Product <span className="text-rose-500">*</span>
                  </label>

                  <select
                    name="product"
                    required
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 bg-[#F8F7F7] border border-slate-100 rounded-[8px] text-base text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-300 transition-all"
                  >
                    <option value="">
                      Select Product
                    </option>

                    <option value="Toilet Cubicles">
                      Toilet Cubicles
                    </option>

                    <option value="Washroom Partitions">
                      Washroom Partitions
                    </option>

                    <option value="Urinal Cubicles">
                      Urinal Cubicles
                    </option>

                    <option value="Kids Toilet Cubicles">
                      Kids Toilet Cubicles
                    </option>

                    <option value="Public Restroom">
                      Public Restroom
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>

                </div>

              </div>

              {/* MESSAGE */}
              <div className="space-y-2">

                <label className="text-sm font-medium text-slate-850">
                  Message <span className="text-rose-500">*</span>
                </label>

                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 bg-[#F8F7F7] border border-slate-100 rounded-[8px] text-base placeholder:text-slate-450 text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-300 transition-all resize-none"
                />

              </div>

              {/* ERROR MESSAGE */}
              {error && (
                <div className="rounded-[8px] bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              {/* SUCCESS MESSAGE */}
              {success && (
                <div className="flex items-center gap-2 rounded-[8px] bg-green-50 border border-green-100 px-4 py-3 text-sm text-green-700">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>
                    Your enquiry has been submitted successfully!
                  </span>
                </div>
              )}

              {/* BUTTON */}
              <div className="pt-2">

                <button
                  type="submit"
                  disabled={loading}
                  className={`inline-flex items-center justify-center gap-2 px-8 py-4 bg-black hover:bg-neutral-900 text-white text-sm font-medium tracking-wide rounded-[4px] transition-all active:scale-[0.98] ${
                    loading
                      ? "opacity-70 cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                >

                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}

                </button>

              </div>

            </form>

          </main>
        </div>

        {/* =========================================
            BACKGROUND SVG
        ========================================== */}
        <div className="absolute -bottom-8 -right-8 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] pointer-events-none opacity-[0.14] z-0">

          <svg
            viewBox="0 0 500 500"
            fill="none"
            stroke="#0F172A"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full"
          >

            <path
              d="M250 100 L450 200 L250 300 L50 200 Z"
              strokeDasharray="4 4"
              strokeWidth="1"
            />

            <path
              d="M250 200 L450 300 L250 400 L50 300 Z"
              strokeDasharray="4 4"
              strokeWidth="1"
            />

            <path d="M250 160 L330 200 L330 290 L250 250 Z" />
            <path d="M250 160 L170 200 L170 290 L250 250 Z" />
            <path d="M250 160 L330 120 L250 80 L170 120 Z" />

            <path d="M250 80 L250 160" strokeWidth="2.5" />
            <path d="M170 120 L170 200" strokeWidth="2" />
            <path d="M330 120 L330 200" strokeWidth="2" />

            <path
              d="M210 200 L290 160 L320 175 L240 215 Z"
              fill="#0F172A"
              fillOpacity="0.04"
            />

            <path d="M240 215 L240 255" />
            <path d="M320 175 L320 215" />

            <path d="M270 170 L285 162 L285 178 L270 186 Z" />
            <path d="M277 183 L277 190" />

            <path d="M330 200 L410 240 L410 330 L330 290 Z" />
            <path d="M330 200 L410 160 L330 120" />
            <path d="M410 160 L410 240" strokeWidth="2" />

            <path d="M170 200 L90 240 L90 330 L170 290 Z" />
            <path d="M170 200 L90 160 L170 120" />
            <path d="M90 160 L90 240" strokeWidth="2" />

            <ellipse cx="260" cy="275" rx="14" ry="8" />

            <path d="M260 275 L260 300" />
            <path d="M260 300 L248 310" />
            <path d="M260 300 L272 310" />
            <path d="M260 300 L260 312" />

            <path d="M248 260 C248 245, 272 245, 272 260 L272 272 C272 272, 248 272, 248 272 Z" />

          </svg>

        </div>

      </div>
    </section>
  );
}

