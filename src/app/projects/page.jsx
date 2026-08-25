import React from 'react'
import Projects from './Projects'
import Navbar from '@/app/components/Navabar/page';
import FooterSection from '@/app/components/Footer/page';

export default function page() {
    return (
        <>
            <Navbar />
            <Projects />
            <FooterSection />
        </>
    )
}
