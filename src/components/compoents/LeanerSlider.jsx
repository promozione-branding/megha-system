import Link from 'next/link';
import React from 'react';

const barLocations = [
    { label: 'Delhi', slug: '/delhi' },
    { label: 'Noida', slug: '/noida' },
    { label: 'Gurgaon', slug: '/gurgaon' },
];

const ITEMS_PER_GROUP = 6;

const MarqueeGroup = ({ text, hidden = false }) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden}>
        {Array.from({ length: ITEMS_PER_GROUP }).map((_, i) => (
            <span
                key={i}
                className="flex items-center gap-8 pr-8 text-base font-extrabold uppercase tracking-wide text-[#304B99] md:text-xl"
            >
                {text}
                <span className="text-amber-500">✦</span>
            </span>
        ))}
    </div>
);

const LocationWarrantyBar = ({ text = '25 Years Warranty' }) => {
    return (
        <>
            <style>{`
                @keyframes marquee-ltr {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
            `}</style>

            <div className="sticky top-[69px] z-[90] flex w-full items-center gap-2 bg-[#304B99] px-4 py-1 text-[8px] font-semibold uppercase tracking-[0.25em] text-white md:top-[101px] md:px-20 md:text-[9px] xl:top-[113px]">
                {barLocations.map((item, idx) => (
                    <React.Fragment key={idx}>
                        {idx > 0 && <span className="text-white/40">|</span>}
                        <Link
                            href={item.slug}
                            className="hover:text-amber-400 hover:underline hover:duration-300 font-extrabold"
                        >
                            {item.label}
                        </Link>
                    </React.Fragment>
                ))}
            </div>

            <div
                className="group relative w-full overflow-hidden bg-blue-200 py-2"
                aria-label={text}
            >
                <div
                    className="flex w-max animate-[marquee-ltr_25s_linear_infinite] will-change-transform group-hover:[animation-play-state:paused] motion-reduce:animate-none"
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    <MarqueeGroup text={text} />
                    <MarqueeGroup text={text} hidden />
                </div>
            </div>
        </>
    );
};

export default LocationWarrantyBar;