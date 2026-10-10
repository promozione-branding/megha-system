import React from "react";
import Link from "next/link";

const shippingSections = [
    {
        number: "01",
        title: "Order Processing",
        description:
            "Orders are processed after confirmation of the purchase order, product specifications, quantities, payment terms, and other applicable requirements. Processing time may vary depending on product availability, customization, manufacturing schedules, and project requirements. Our team will communicate the expected dispatch timeline wherever applicable.",
    },
    {
        number: "02",
        title: "Shipping Coverage",
        description:
            "Megha Systems supplies toilet cubicles, restroom partitions, and related products to customers at serviceable locations in India. Shipping availability depends on the delivery address, product dimensions, order quantity, transportation arrangements, and site accessibility. Please contact our team to confirm delivery feasibility for your location.",
    },
    {
        number: "03",
        title: "Estimated Delivery Time",
        description:
            "Delivery timelines depend on manufacturing requirements, order volume, destination, transport availability, and site conditions. Customized or bulk orders may require additional production and transportation time. Any delivery estimate shared during ordering is indicative unless a specific timeline has been confirmed in writing.",
    },
    {
        number: "04",
        title: "Shipping Charges",
        description:
            "Shipping, freight, handling, unloading, and other transportation-related charges will be communicated during the quotation or order confirmation process, wherever applicable. The charges may vary depending on shipment size, weight, destination, delivery method, and special handling requirements. Customers should review the agreed quotation or purchase order for the applicable terms.",
    },
    {
        number: "05",
        title: "Order Tracking and Updates",
        description:
            "Where shipment tracking or transport details are available, our team may share the relevant information with the customer. For project-based or bulk deliveries, customers may contact us to obtain an update on manufacturing progress, dispatch status, and estimated arrival.",
    },
    {
        number: "06",
        title: "Delivery and Site Readiness",
        description:
            "Customers should ensure that the delivery site is accessible and ready to receive the shipment. Adequate arrangements should be made for unloading, safe storage, and movement of the products to the intended installation area. Any special access restrictions, delivery time windows, or unloading requirements should be communicated before dispatch.",
    },
    {
        number: "07",
        title: "Inspection Upon Delivery",
        description:
            "Customers are encouraged to inspect the shipment upon delivery and verify the quantities and visible condition of the products against the relevant delivery documents. Any visible damage, shortage, or incorrect item should be documented, preferably with photographs, and reported to our team promptly. Please retain the packaging and delivery records where possible to help us review the issue.",
    },
    {
        number: "08",
        title: "Delivery Delays",
        description:
            "Delivery may be affected by manufacturing delays, transportation disruptions, weather conditions, site access restrictions, public holidays, or other circumstances beyond our reasonable control. If a significant delay occurs, we will make reasonable efforts to communicate relevant updates. The applicable order agreement will govern any remedies or revised delivery commitments.",
    },
    {
        number: "09",
        title: "Incorrect Address or Failed Delivery",
        description:
            "Customers are responsible for providing an accurate delivery address, contact number, and any necessary site instructions. If delivery cannot be completed because of incorrect details, unavailable recipients, restricted site access, or other customer-related circumstances, additional transportation or redelivery charges may apply where permitted by the agreed order terms and applicable law.",
    },
    {
        number: "10",
        title: "Changes to Shipping Arrangements",
        description:
            "Requests to change the delivery address, delivery schedule, quantities, or transportation arrangements should be submitted as early as possible. Changes requested after manufacturing, packing, or dispatch may affect delivery timelines and costs. Such requests will be subject to feasibility and written confirmation by our team.",
    },
];

export default function Page() {
    return (
        <main className="min-h-screen bg-[#f7f7f5] text-[#202020]">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-[#102b35] px-5 py-20 text-white sm:px-8 sm:py-28">
                <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border border-white/10" />
                <div className="absolute -right-5 -top-5 h-48 w-48 rounded-full border border-white/10" />

                <div className="relative mx-auto max-w-7xl">
                    <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#d5c6a1]">
                        <span className="h-px w-8 bg-[#d5c6a1]" />
                        Megha Systems
                    </div>

                    <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
                        Shipping Policy
                    </h1>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                        Information about order processing,
                        manufacturing timelines, transportation,
                        delivery, and receiving your products.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-white/60">
                        <Link
                            href="/"
                            className="transition hover:text-white"
                        >
                            Home
                        </Link>
                        <span>/</span>
                        <span>Shipping Policy</span>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="px-5 py-14 sm:px-8 sm:py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-10 lg:grid-cols-[0.8fr_2fr] lg:gap-16">
                        {/* Sidebar */}
                        <aside className="h-fit rounded-2xl border border-black/5 bg-white p-7 lg:sticky lg:top-24">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a18a54]">
                                Delivery Information
                            </p>

                            <h2 className="mt-4 text-2xl font-semibold leading-snug text-[#18333b]">
                                From our facility
                                <br />
                                to your project.
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-gray-500">
                                Every order is coordinated according
                                to its product specifications,
                                manufacturing requirements, and
                                delivery destination.
                            </p>

                            <div className="my-7 h-px bg-gray-100" />

                            <p className="text-sm font-semibold text-[#18333b]">
                                Need a delivery update?
                            </p>

                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                Contact our team with your order
                                or quotation reference.
                            </p>

                            <a
                                href="/contact-us"
                                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#102b35] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#1a414d]"
                            >
                                Contact Us
                                <span aria-hidden="true">↗</span>
                            </a>
                        </aside>

                        {/* Policy Sections */}
                        <div>
                            <div className="mb-8 rounded-2xl border border-[#e8dfca] bg-[#f1ecdf] p-6 sm:p-8">
                                <h2 className="text-xl font-semibold text-[#18333b]">
                                    Our Shipping Commitment
                                </h2>

                                <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                                    At Megha Systems, we understand
                                    that reliable delivery is an
                                    important part of every project.
                                    We coordinate order processing
                                    and transportation based on the
                                    confirmed requirements and keep
                                    customers informed of relevant
                                    delivery arrangements.
                                </p>
                            </div>

                            <div className="space-y-5">
                                {shippingSections.map((section) => (
                                    <section
                                        key={section.number}
                                        className="group rounded-2xl border border-black/5 bg-white p-6 transition duration-300 hover:border-[#d5c6a1] hover:shadow-md sm:p-8"
                                    >
                                        <div className="flex items-start gap-5 sm:gap-7">
                                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f1ecdf] text-sm font-semibold text-[#8c784b]">
                                                {section.number}
                                            </span>

                                            <div>
                                                <h2 className="text-lg font-semibold text-[#18333b] sm:text-xl">
                                                    {section.title}
                                                </h2>

                                                <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                                                    {section.description}
                                                </p>
                                            </div>
                                        </div>
                                    </section>
                                ))}
                            </div>

                            {/* Contact CTA */}
                            <section className="mt-8 rounded-2xl bg-[#102b35] p-7 text-white sm:p-10">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d5c6a1]">
                                    We Are Here to Help
                                </p>

                                <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
                                    Planning your next project?
                                </h2>

                                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                                    Contact Megha Systems to discuss
                                    product availability, project
                                    requirements, transportation
                                    arrangements, and estimated
                                    delivery timelines.
                                </p>

                                <div className="mt-7 flex flex-wrap gap-4">
                                    <a
                                        href="tel:+919873735716"
                                        className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#102b35] transition hover:bg-[#f1ecdf]"
                                    >
                                        Call Us
                                    </a>

                                    <Link
                                        href="/contact-us"
                                        className="rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                                    >
                                        Send an Enquiry
                                    </Link>
                                </div>
                            </section>

                            <p className="mt-8 text-xs leading-6 text-gray-400">
                                This Shipping Policy should be read
                                together with the applicable quotation,
                                purchase order, delivery terms, and
                                other written agreements. In the event
                                of a conflict, the applicable agreed
                                terms and mandatory legal requirements
                                will govern.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}