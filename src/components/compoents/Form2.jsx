"use client";

import React, { useState } from "react";
import axios from "axios";

const products = [
  "Public Restroom",
  "Kids Restrooms",
  "Urinal Partitions",
  "Luxe Partition System",
];

export default function Form2() {
  const [formData, setFormData] = useState({
    contactPerson: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Remove all non-digit characters
      let digits = value.replace(/\D/g, "");

      // Remove India's country code if already entered
      if (digits.startsWith("91") && digits.length > 10) {
        digits = digits.slice(2);
      }

      // Keep only 10 digits
      digits = digits.slice(0, 10);

      setFormData((prev) => ({
        ...prev,
        phone: digits,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (
      !formData.contactPerson ||
      !formData.phone ||
      !formData.email ||
      !formData.product
    ) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);

      const data = {
        supplierToken: "6a9fb2bdd936bdc2bb1d6df7",
        platform: "Megha System Contact Form",
        platformEmail: "contact@meghasystems.com",
        name: formData.contactPerson,
        email: formData.email,
        company: "NA",
        phone: formData.phone,
        product: formData.product,
        place: "N/A",
        message: "Product enquiry",
      };

      if (!/^[6-9]\d{9}$/.test(formData.phone)) {
        setError("Please enter a valid 10-digit Indian mobile number.");
        return;
      }

      const res = await axios.post(
        "https://brandbnalo.com/api/form/add",
        data
      );

      console.log("Form submitted:", res.data);

      setSuccess(true);

      setFormData({
        contactPerson: "",
        email: "",
        phone: "",
        product: "",
        message: "",
      });

      setTimeout(() => {
        setSuccess(false);
      }, 2500);
    } catch (err) {
      console.error("Form submission error:", err);

      setError("Unable to submit your enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-white py-2 md:py-5">
      <div className="mx-auto w-full max-w-7xl px-5">

        {/* HEADING */}
        <div className="mb-7 text-center md:mb-5">
          <h2
            className="
              text-3xl
              font-extrabold
              leading-tight
              tracking-tight
              text-[#042555]
              sm:text-4xl
              md:text-5xl
            "
          >
            Transform your commercial space now!
          </h2>

          <p className="mx-auto hidden md:block mt-3 max-w-2xl text-sm leading-6 text-slate-500 md:text-base">
            Tell us what you need and our team will help you find the
            perfect restroom partition solution.
          </p>
        </div>

        {/* FORM */}
      <form
  onSubmit={handleSubmit}
  className="
    relative w-full
    rounded-2xl
    border-2 border-[#042555]
    bg-white
    p-4 md:p-5
    shadow-[0_8px_35px_rgba(4,37,85,0.15)]
    transition-all duration-300
    hover:shadow-[0_12px_40px_rgba(4,37,85,0.22)]
  "
>
  {/* TOP HIGHLIGHT */}
  <div className="mb-4 flex items-center justify-between gap-3">
    <div>
      <h3 className="text-base font-bold text-[#042555] md:text-lg">
        Get a Quick Quote
      </h3>
      <p className="mt-1 text-xs text-slate-500">
        Share your requirements and our team will contact you.
      </p>
    </div>

    <div className="
      flex h-10 w-10 shrink-0 items-center justify-center
      rounded-xl bg-[#042555]
      text-white shadow-md
    ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        stroke="currentColor"
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5A2.25 2.25 0 0 1 19.5 19.5h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0-9.25 6.25a.9.9 0 0 1-1 0L2.25 6.75"
        />
      </svg>
    </div>
  </div>

  {/* FORM FIELDS */}
  <div className="
    flex w-full flex-col gap-3
    lg:flex-row lg:items-center
  ">
    <input
      type="text"
      name="contactPerson"
      value={formData.contactPerson}
      onChange={handleChange}
      placeholder="Your Name"
      autoComplete="name"
      className="
        h-14 w-full rounded-xl
        border border-slate-200
        bg-slate-50 px-4
        text-sm text-slate-900
        outline-none transition-all duration-200
        placeholder:text-slate-400
        hover:border-slate-300
        focus:border-[#042555]
        focus:bg-white
        focus:ring-4 focus:ring-[#042555]/10
        lg:flex-1
      "
    />

    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Email Address"
      autoComplete="email"
      className="
        h-14 w-full rounded-xl
        border border-slate-200
        bg-slate-50 px-4
        text-sm text-slate-900
        outline-none transition-all duration-200
        placeholder:text-slate-400
        hover:border-slate-300
        focus:border-[#042555]
        focus:bg-white
        focus:ring-4 focus:ring-[#042555]/10
        lg:flex-1
      "
    />

    <input
      name="phone"
      type="tel"
      value={formData.phone}
      onChange={handleChange}
      placeholder="+91 XXXXX XXXXX"
      autoComplete="tel"
      className="
        h-14 w-full rounded-xl
        border border-slate-200
        bg-slate-50 px-4
        text-sm text-slate-900
        outline-none transition-all duration-200
        placeholder:text-slate-400
        hover:border-slate-300
        focus:border-[#042555]
        focus:bg-white
        focus:ring-4 focus:ring-[#042555]/10
        lg:flex-1
      "
    />

    <select
      name="product"
      value={formData.product}
      onChange={handleChange}
      className="
        h-14 w-full rounded-xl
        border border-slate-200
        bg-slate-50 px-4
        text-sm text-slate-700
        outline-none transition-all duration-200
        hover:border-slate-300
        focus:border-[#042555]
        focus:bg-white
        focus:ring-4 focus:ring-[#042555]/10
        lg:flex-1
      "
    >
      <option value="">Select Product</option>

      {products.map((product) => (
        <option key={product} value={product}>
          {product}
        </option>
      ))}
    </select>

    <button
      type="submit"
      disabled={loading}
      className="
        group relative h-14 w-full shrink-0
        overflow-hidden rounded-xl
        bg-[#042555] px-7
        text-sm font-semibold text-white
        shadow-lg shadow-[#042555]/20
        transition-all duration-300
        hover:-translate-y-0.5
        hover:bg-[#0d3975]
        hover:shadow-xl
        disabled:cursor-not-allowed
        disabled:opacity-60
        lg:w-auto lg:min-w-[130px]
      "
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {loading ? "Sending..." : "Send Enquiry"}

        {!loading && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        )}
      </span>
    </button>
  </div>

  {/* ERROR */}
  {error && (
    <p className="mt-3 text-center text-sm font-medium text-red-500">
      {error}
    </p>
  )}

  {/* SUCCESS */}
  {success && (
    <p className="mt-3 text-center text-sm font-medium text-green-600">
      Thank you! Your enquiry has been submitted successfully.
    </p>
  )}

  {/* BOTTOM TRUST TEXT */}
  <div className="
    mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2
    border-t border-slate-100 pt-3
    text-xs text-slate-500
  ">
    <span className="flex items-center font-bold gap-1.5">
      <span className="text-green-600">✓</span>
      Quick Response
    </span>

    <span className="flex items-center font-bold gap-1.5">
      <span className="text-green-600 font-bold">✓</span>
      Expert Assistance
    </span>

    <span className="flex items-center font-bold gap-1.5">
      <span className="text-green-600">✓</span>
      Secure Enquiry
    </span>
  </div>
</form>
      </div>
    </section>
  );
}