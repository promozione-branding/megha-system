'use client';

import SmoothScroll from '@/app/components/smoothScroll';
import LightWallSectionScroll from './components/structure/page';
import TextMaskScroll from '@/components/TextMaskScroll';
import Hero3 from '@/app/components/hero3/page';
import FeaturesGrid from '@/app/components/featuresGrid/page';
import OurProjectsSection from '@/app/components/ourprojects/page';
import ContactSection from '@/app/components/contactUs/page';
import WashroomCubiclesFAQ from '@/app/components/Faq/page';
import Testimonials from '@/app/components/Testimonials/page';
import FooterSection from '@/app/components/Footer/page';
import SplitVantage from '@/app/components/split_vanatge/page';
import Navbar from '@/app/components/Navabar/page';
import HeroSection from '@/app/components/HeroBanner/page';
import ServicesSection from '@/app/components/Service-section/page';
import AboutUs from '@/app/components/Aboutus/page';
import ClientMarquee from '@/app/components/ClientMarquee/page';
import CertificatesMarquee from '@/app/components/CertificatesMarquee/page';
import BuyNowBanner from '@/app/components/BuyNowBanner/page';

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-[#0f0f11] text-white">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Hero Banner Section */}
        <HeroSection />
        {/* <FeaturesGrid /> */}

        {/* Client Logos Marquee */}
        <ClientMarquee />

        {/* Hero Section with 4 Repositioning Stacked Cards */}
        <Hero3 />

        {/* About Us Section */}
        <AboutUs />

        {/* Services Section */}
        <ServicesSection />

        {/* Structural Architectural Section */}
        <LightWallSectionScroll />

        {/* Our Projects Section */}
        <OurProjectsSection />

        {/* Split Vantage Showcase Section */}
        <SplitVantage />

        {/* Scroll Video Text Mask */}
        <TextMaskScroll />

        {/* Accreditations & Quality Certificates Marquee */}
        <CertificatesMarquee />

        {/* Testimonials Section */}
        <Testimonials />

        {/* FAQ Section */}
        <WashroomCubiclesFAQ />

        {/* Buy Now / CTA Banner Section */}


        {/* Contact Us Section */}
        <ContactSection />
        <BuyNowBanner />

        {/* Footer Section */}
        <FooterSection />
      </main>
    </SmoothScroll>
  );
}

