import React from 'react'
import Articles from './Articles'
import Navbar from '@/app/components/Navabar/page';
import FooterSection from '@/app/components/Footer/page';

export default function page() {
    return (<>
        <Navbar />
        <Articles />
        <FooterSection />
    </>
    )
}
