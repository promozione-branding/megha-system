import React from 'react'
import Hero from "@/components/ToiletCity/Hero";
import DurableRestroomSolutions from "@/components/ToiletCity/DurableRestroomSolutions";
import ProjectSection from "@/components/ToiletCity/ProjectSection";
import WhyChooseToiletCubicles from "@/components/ToiletCity/WhyChooseToiletCubicles";
import HPLToiletCubicles from "@/components/ToiletCity/HPLToiletCubicles";
import ContactSection from "../components/contactUs/page";

import FAQ from "@/components/ToiletCity/FAQ";
import ClientMarquee from '../components/ClientMarquee/page';
import BuyNowBanner from '../components/BuyNowBanner/page';
import AuthorisedPartners from '@/components/AuthorisedPartners';


export default function ToiletCubicle({city}) {
  return (
    <>
    <Hero city={city}/>
    <DurableRestroomSolutions city={city}/>
    <ProjectSection/>
     <ClientMarquee />

            <HPLToiletCubicles city={city} />
             <AuthorisedPartners />

    <WhyChooseToiletCubicles city={city}/>
            <FAQ city={city}/>
            <ContactSection/>
            <BuyNowBanner />
    
    </>
  )
}
