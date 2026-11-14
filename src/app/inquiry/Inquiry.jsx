import React from 'react'
import WhatsApp from '@/components/compoents/WhatsApp'
import Header from '@/components/compoents/Header'
import LocationWarrantyBar from '@/components/compoents/LeanerSlider'
import Hero2 from '@/components/compoents/Hero2'
import Form2 from '@/components/compoents/Form2'
import AuthorisedPartners2 from '@/components/compoents/AuthorisedPartners2'
import OurProjectsSection2 from '@/components/compoents/OurProjectsSection2'
import AboutUs from '@/components/compoents/AboutUs'
import Certificates from '@/components/compoents/Certificates'
import Hero4 from '@/components/compoents/Hero4'
import BuyNowBanner from '@/components/compoents/BuyNowBanner'
import ClientMarquee from '@/components/compoents/Clients'
import CertificatesMarquee from '@/components/compoents/CertificatesMarquee'
import Testimonials from '@/components/compoents/Testimonials'
import ContactSection from '@/components/compoents/ContactSection'
import FooterSection from '@/components/compoents/Footer'


export default function Inquiry() {
  return (
    <>
     <WhatsApp />
      <Header />
      <LocationWarrantyBar/>
      <Hero2 />
      <Form2 />
      <AuthorisedPartners2 />
      <OurProjectsSection2 />
      <AboutUs />
      <Certificates />
      <Hero4 />
      <BuyNowBanner />
      <ClientMarquee />
      {/* <TextMaskScroll /> */}
      <CertificatesMarquee />
      <Testimonials />
      {/* <WashroomCubiclesFAQ/> */}
      <ContactSection />
      <FooterSection />
    </>
  )
}
