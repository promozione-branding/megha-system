import React from 'react'
import About from './About'
import Navbar from '@/app/components/Navabar/page';
import FooterSection from '@/app/components/Footer/page';

export const metadata = {
    title: "About Megha Systems | Toilet Cubicle in India",
    description: "Learn about Megha Systems, a trusted toilet cubicle manufacturer offering premium washroom partitions, customized solutions, and professional installation across India.",
};

export default function page() {
    return (
        <>
            <Navbar />
            <About />
            <FooterSection />
        </>
    )
}
