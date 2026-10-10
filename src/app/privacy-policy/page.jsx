import React from "react";
import Link from "next/link";

const sections = [
    {
        title: "1. Introduction",
        content: (
            <p>
                Welcome to Megha Systems ("we", "our", or "us").
                We are committed to protecting your privacy and
                handling your personal information responsibly.
                This Privacy Policy explains how we collect, use,
                store, and protect information when you visit
                toiletcubiclemanufacturer.com or contact us regarding
                our toilet cubicles, restroom partitions, and related
                products and services.
            </p>
        ),
    },
    {
        title: "2. Information We Collect",
        content: (
            <>
                <p>
                    We may collect the following types of information
                    when you interact with our website:
                </p>
                <ul>
                    <li>
                        <strong>Personal information:</strong> Name,
                        email address, phone number, company name,
                        and other details you provide through enquiry
                        forms or contact requests.
                    </li>
                    <li>
                        <strong>Project information:</strong> Product
                        preferences, installation requirements,
                        project specifications, and details submitted
                        when requesting a quotation.
                    </li>
                    <li>
                        <strong>Technical information:</strong> IP
                        address, browser type, device information,
                        pages visited, and general website usage data,
                        where collected.
                    </li>
                    <li>
                        <strong>Communication information:</strong>{" "}
                        Messages, feedback, and other information you
                        share when contacting our team.
                    </li>
                </ul>
            </>
        ),
    },
    {
        title: "3. How We Use Your Information",
        content: (
            <>
                <p>We may use the information collected to:</p>
                <ul>
                    <li>Respond to enquiries and quotation requests.</li>
                    <li>
                        Provide product details, specifications,
                        pricing, and project-related assistance.
                    </li>
                    <li>
                        Communicate with you about our products
                        and services.
                    </li>
                    <li>
                        Improve our website, user experience,
                        and customer support.
                    </li>
                    <li>
                        Maintain website security and prevent
                        fraudulent or unauthorized activity.
                    </li>
                    <li>
                        Comply with applicable legal obligations
                        and protect our legitimate interests.
                    </li>
                </ul>
            </>
        ),
    },
    {
        title: "4. Cookies and Similar Technologies",
        content: (
            <p>
                Our website may use cookies and similar technologies
                to support essential website functions, understand
                visitor interactions, and improve performance.
                Third-party analytics or advertising tools may also
                use cookies where enabled. You can manage cookies
                through your browser settings. Disabling certain
                cookies may affect some website functionality.
            </p>
        ),
    },
    {
        title: "5. Sharing of Information",
        content: (
            <p>
                We do not sell your personal information. We may
                share information with authorized service providers
                who help us operate our website, manage enquiries,
                provide communication services, or analyze website
                performance. Information may also be disclosed when
                required by law, to protect our rights, or in
                connection with a legitimate business reorganization.
                We expect recipients to handle information
                appropriately and in accordance with applicable
                requirements.
            </p>
        ),
    },
    {
        title: "6. Data Security",
        content: (
            <p>
                We take reasonable technical and organizational
                measures to protect the information submitted to us
                against unauthorized access, misuse, alteration,
                and disclosure. However, no method of transmitting
                information over the internet or storing data
                electronically can be guaranteed to be completely
                secure.
            </p>
        ),
    },
    {
        title: "7. Data Retention",
        content: (
            <p>
                We retain personal information only for as long as
                reasonably necessary to respond to enquiries, manage
                business relationships, fulfill the purposes described
                in this policy, and meet applicable legal or
                regulatory requirements. Retention periods may vary
                depending on the nature of the information and the
                circumstances in which it was collected.
            </p>
        ),
    },
    {
        title: "8. Your Privacy Rights",
        content: (
            <p>
                Subject to applicable law, you may have the right
                to request access to your personal information,
                correction of inaccurate details, deletion of
                information, withdrawal of consent where processing
                is based on consent, or information about how your
                data is handled. To submit a privacy-related request,
                please contact us using the details below. We may
                need to verify your identity before processing
                certain requests.
            </p>
        ),
    },
    {
        title: "9. Third-Party Websites",
        content: (
            <p>
                Our website may contain links to external websites
                or third-party services. We do not control their
                privacy practices or content. We recommend reviewing
                the relevant privacy policies before sharing personal
                information with those services.
            </p>
        ),
    },
    {
        title: "10. Children's Privacy",
        content: (
            <p>
                Our website and services are intended for general
                business and commercial enquiries, not for children
                to submit personal information independently. If
                you believe a child has provided personal information
                to us inappropriately, please contact us so that
                we can review the matter.
            </p>
        ),
    },
    {
        title: "11. Changes to This Privacy Policy",
        content: (
            <p>
                We may update this Privacy Policy from time to time
                to reflect changes in our business practices,
                website functionality, or applicable legal
                requirements. Updates will be published on this
                page, together with the revised effective date.
            </p>
        ),
    },
];

export default function Page() {
    return (
        <main className="min-h-screen bg-[#f7f7f5] text-[#202020]">
            {/* Hero */}
            <section className="relative overflow-hidden bg-[#102b35] px-5 py-20 text-white sm:px-8 sm:py-28">
                <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full border border-white/10" />
                <div className="absolute -right-8 -top-16 h-56 w-56 rounded-full border border-white/10" />

                <div className="relative mx-auto max-w-7xl">
                    <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#d5c6a1]">
                        <span className="h-px w-8 bg-[#d5c6a1]" />
                        Megha Systems
                    </div>

                    <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
                        Privacy Policy
                    </h1>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                        Your privacy matters to us. Learn how we
                        collect, use, and protect your information
                        when you connect with Megha Systems.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-white/60">
                        <span>Effective date: October 10, 2026</span>
                        <span className="h-1 w-1 rounded-full bg-white/40" />
                        <span>
                            <Link
                                href="/"
                                className="transition hover:text-white"
                            >
                                Home
                            </Link>
                            {" / Privacy Policy"}
                        </span>
                    </div>
                </div>
            </section>

            {/* Policy content */}
            <section className="px-5 py-14 sm:px-8 sm:py-20">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16">
                    <aside className="h-fit rounded-2xl border border-black/5 bg-white p-6 lg:sticky lg:top-24">
                        <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#8b8066]">
                            On this page
                        </p>

                        <nav aria-label="Privacy policy sections">
                            <ul className="space-y-3">
                                {sections.map((section, index) => (
                                    <li key={section.title}>
                                        <a
                                            href={`#section-${index + 1}`}
                                            className="text-sm leading-6 text-gray-600 transition hover:text-[#a18a54]"
                                        >
                                            {section.title}
                                        </a>
                                    </li>
                                ))}
                                <li>
                                    <a
                                        href="#contact"
                                        className="text-sm text-gray-600 transition hover:text-[#a18a54]"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </aside>

                    <article className="min-w-0 rounded-2xl border border-black/5 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-12">
                        <p className="mb-10 border-l-2 border-[#b9a574] pl-5 text-base leading-8 text-gray-600">
                            This policy applies to information collected
                            through our website and communications
                            relating to our products and services.
                        </p>

                        <div className="space-y-10">
                            {sections.map((section, index) => (
                                <section
                                    id={`section-${index + 1}`}
                                    key={section.title}
                                    className="scroll-mt-10"
                                >
                                    <h2 className="mb-4 text-xl font-semibold tracking-tight text-[#18333b] sm:text-2xl">
                                        {section.title}
                                    </h2>

                                    <div className="space-y-4 text-[15px] leading-8 text-gray-600 [&_li]:pl-1 [&_li]:marker:text-[#b9a574] [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_p]:mb-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_strong]:font-semibold [&_strong]:text-gray-800">
                                        {section.content}
                                    </div>
                                </section>
                            ))}
                        </div>

                        {/* Contact */}
                        <section
                            id="contact"
                            className="mt-12 scroll-mt-10 rounded-2xl bg-[#102b35] p-6 text-white sm:p-8"
                        >
                            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#d5c6a1]">
                                Get in touch
                            </p>

                            <h2 className="text-2xl font-semibold">
                                12. Contact Us
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-white/70">
                                If you have any questions, concerns,
                                or requests regarding this Privacy
                                Policy or your personal information,
                                please contact Megha Systems.
                            </p>

                            <div className="mt-6 space-y-4 text-sm">
                                <a
                                    href="tel:+919873735716"
                                    className="flex items-center gap-3 transition hover:text-[#d5c6a1]"
                                >
                                    <span className="text-[#d5c6a1]">
                                        Phone
                                    </span>
                                    +91 98737 35716
                                </a>

                                <a
                                    href="tel:+919873735713"
                                    className="flex items-center gap-3 transition hover:text-[#d5c6a1]"
                                >
                                    <span className="text-[#d5c6a1]">
                                        Phone
                                    </span>
                                    +91 98737 35713
                                </a>

                                <a
                                    href="/contact-us"
                                    className="inline-flex items-center gap-2 border-b border-[#d5c6a1]/60 pb-1 text-white transition hover:text-[#d5c6a1]"
                                >
                                    Visit our contact page
                                    <span aria-hidden="true">↗</span>
                                </a>
                            </div>
                        </section>

                        <p className="mt-8 text-xs leading-6 text-gray-400">
                            We encourage you to review this policy
                            periodically to stay informed about
                            our privacy practices.
                        </p>
                    </article>
                </div>
            </section>
        </main>
    );
}
