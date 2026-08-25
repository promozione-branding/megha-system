'use client';

import SmoothScroll from '@/app/components/smoothScroll';
import LightWallSectionScroll from './components/structure/page';
import TextMaskScroll from '@/components/TextMaskScroll';
import Hero3 from '@/app/components/hero3/page';
import Certificates from '@/components/Certificates';
import AuthorisedPartners from '@/components/AuthorisedPartners';
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
        <Navbar />
        <HeroSection />
        <AuthorisedPartners />
        <OurProjectsSection />
        <AboutUs />
        <Certificates />
        <ServicesSection />
        <ClientMarquee />
        <Hero3 />
        <LightWallSectionScroll />
        <TextMaskScroll />
        <SplitVantage />
        <CertificatesMarquee />
        <Testimonials />
        <WashroomCubiclesFAQ />
        <ContactSection />
        <BuyNowBanner />
        <FooterSection />
      </main>
    </SmoothScroll>
  );
}

