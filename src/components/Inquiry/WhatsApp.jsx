import React from 'react'
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsApp() {
  return (
    <>
    {/* =====================================================
    STICKY CALL + WHATSAPP BUTTONS
===================================================== */}

<div className="fixed bottom-5 right-5 z-[9999] flex flex-col gap-3 sm:bottom-6 sm:right-6">

  {/* WhatsApp */}
 

  {/* Call */}
  <a
    href="tel:+919873735713"
    aria-label="Call 98737 35713"
    className="
      group
      flex
      h-12
      w-12
      items-center
      justify-center
      rounded-full
      bg-[#0d2461]
      text-white
      shadow-[0_8px_30px_rgba(13,36,97,0.3)]
      transition-all
      duration-300
      hover:-translate-y-1
      hover:scale-105
      sm:h-14
      sm:w-14
    "
  >
    <Phone className="h-5 w-5 sm:h-10 sm:w-10" />

    {/* Tooltip */}
    <span
      className="
        pointer-events-none
        absolute
        right-full
        mr-3
        whitespace-nowrap
        rounded-lg
        bg-neutral-900
        px-3
        py-2
        text-xs
        font-medium
        text-white
        opacity-0
        shadow-lg
        transition-all
        duration-200
        group-hover:opacity-100
      "
    >
      Call 98737 35713
    </span>
  </a>
   <a
    href="https://wa.me/919873735713"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="
      group
      flex
      h-12
      w-12
      items-center
      justify-center
      rounded-full
      bg-[#25D366]
      text-white
      shadow-[0_8px_30px_rgba(37,211,102,0.35)]
      transition-all
      duration-300
      hover:-translate-y-1
      hover:scale-105
      sm:h-14
      sm:w-14
    "
  >
    <FaWhatsapp className="h-6 w-6 sm:h-10 sm:w-10" />

    {/* Tooltip */}
    <span
      className="
        pointer-events-none
        absolute
        right-full
        mr-3
        whitespace-nowrap
        rounded-lg
        bg-neutral-900
        px-3
        py-2
        text-xs
        font-medium
        text-white
        opacity-0
        shadow-lg
        transition-all
        duration-200
        group-hover:opacity-100
      "
    >
      WhatsApp Us
    </span>
  </a>

</div>
    </>
  )
}
