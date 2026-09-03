import React from 'react'
import Articles from './Articles'
import Navbar from '@/app/components/Navabar/page';
import FooterSection from '@/app/components/Footer/page';

export const metadata = {
    title: "Toilet Cubicle & Washroom Design Articles | Megha Systems",
    description: "Explore expert insights on toilet cubicles, washroom partitions, compact laminate, commercial washrooms, design, materials, and maintenance.",
};

export default function page() {
    return (<>
        <Navbar />
        <Articles />
        <FooterSection />
    </>
    )
}
