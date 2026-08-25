import React from 'react'
import Contact from './Contact'
import Navbar from '@/app/components/Navabar/page';
import FooterSection from '@/app/components/Footer/page';

export default function page() {
    return (
        <>
            <Navbar />
            <Contact />
            <FooterSection />
        </>
    )
}