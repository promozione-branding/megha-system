import React from 'react'
import Projects from './Projects'
import Navbar from '@/app/components/Navabar/page';
import FooterSection from '@/app/components/Footer/page';

export const metadata = {
    title: "Toilet Cubicle Projects Across India | Megha Systems",
    description: "Explore completed toilet cubicle projects by Megha Systems across commercial, corporate, retail, hospitality, automotive, and institutional spaces.",
};

export default function page() {
    return (
        <>
            <Navbar />
            <Projects />
            <FooterSection />
        </>
    )
}
