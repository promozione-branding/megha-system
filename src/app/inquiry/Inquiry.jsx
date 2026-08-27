import React from "react";
import Navbar2 from "../../components/Inquiry/Navbar2";
import Hero2 from "../../components/Inquiry/Hero2";
import Hero4 from "../../components/Inquiry/Hero4";
import AuthorisedPartners2 from "../../components/Inquiry/AuthorisedPartners2";
import OurProjectsSection2 from "../../components/Inquiry/OurProjectsSection2";
import Certificates from "@/components/Certificates";
import AboutUs from "@/app/components/Aboutus/page";
import TextMaskScroll from "@/components/TextMaskScroll";
import FooterSection from "../components/Footer/page";
import BuyNowBanner from "../components/BuyNowBanner/page";
import ContactSection from "../components/contactUs/page";
import WashroomCubiclesFAQ from "../components/Faq/page";
import Testimonials from "../components/Testimonials/page";
import CertificatesMarquee from "../components/CertificatesMarquee/page";
import WhatsApp from "../../components/Inquiry/WhatsApp";

export default function Inquiry() {
  return (
    <>
      <WhatsApp/>
      <Navbar2 />
      <Hero2 />
      <AuthorisedPartners2 />
      <OurProjectsSection2 />
      <AboutUs />
      <Certificates />
      <Hero4 />
      <TextMaskScroll />
      <CertificatesMarquee />
      <Testimonials />
      <WashroomCubiclesFAQ />
      <ContactSection />
      <BuyNowBanner />
      <FooterSection />
    </>
  );
}
