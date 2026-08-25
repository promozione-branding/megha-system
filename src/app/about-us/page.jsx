import React from 'react'
import About from './About'
import Navbar from '@/app/components/Navabar/page';
import FooterSection from '@/app/components/Footer/page';

export default function page() {
    return (
        <>
            <Navbar />
            <About />
            <FooterSection />
        </>
    )
}
