import React from 'react'
import Contact from './Contact'
import Navbar from '@/app/components/Navabar/page';
import FooterSection from '@/app/components/Footer/page';

export const metadata = {
    title: "Contact Megha Systems | Toilet Cubicle",
    description: "Get in touch with Megha Systems for toilet cubicles, washroom partitions, customized solutions, project enquiries, and professional installation services.",
};

export default function page() {
    return (
        <>
            <Navbar />
            <Contact />
            <FooterSection />
        </>
    )
}