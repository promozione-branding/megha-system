import React from "react";
import Link from "next/link";

const policies = [
    {
        number: "01",
        title: "Order Cancellation",
        description:
            "Customers are requested to review their order details, product specifications, dimensions, finishes, and quantities before confirming an order. Cancellation requests must be submitted in writing as soon as possible. Orders that have already entered production, have been customized, or have been dispatched may not be eligible for cancellation.",
    },
    {
        number: "02",
        title: "Customized Products",
        description:
            "Toilet cubicles, restroom partitions, and related products may be manufactured according to specific project requirements, measurements, colors, materials, and designs. Customized or made-to-order products are generally not eligible for return or refund unless they are defective, damaged in transit, incorrectly supplied, or otherwise covered by an applicable agreement or law.",
    },
    {
        number: "03",
        title: "Damaged or Defective Products",
        description:
            "If your order arrives damaged, defective, or different from the confirmed specifications, please notify us promptly after delivery. Include your order or invoice details, a description of the issue, and clear photographs of the affected products and packaging. We will review the claim and determine an appropriate resolution in accordance with the agreed order terms and applicable law.",
    },
    {
        number: "04",
        title: "Return Eligibility",
        description:
            "A return must be approved by our team before the goods are sent back. Products should remain unused and in their original condition unless the return relates to damage or a manufacturing defect. Installed, altered, mishandled, or incorrectly stored products may require additional inspection before a claim can be accepted.",
    },
    {
        number: "05",
        title: "Refund Process",
        description:
            "Once an eligible refund is approved, we will communicate the refund amount and the applicable processing procedure. Refunds will generally be issued through the original payment method where feasible, or through another mutually agreed method. Processing times may depend on the payment provider, bank, and the circumstances of the transaction.",
    },
    {
        number: "06",
        title: "Replacement or Rectification",
        description:
            "Where a verified product issue is covered by the order agreement or applicable law, we may arrange a replacement, repair, rectification, or refund as appropriate. The available resolution will depend on the nature of the issue, product availability, contractual terms, and applicable legal requirements.",
    },
    {
        number: "07",
        title: "Shipping and Return Costs",
        description:
            "Responsibility for transportation, collection, and return shipping costs will be assessed based on the reason for the return, the agreed order terms, and applicable law. Customers should obtain written authorization and shipping instructions before returning any products.",
    },
    {
        number: "08",
        title: "Non-Returnable Situations",
        description:
            "Returns may not be accepted for products manufactured correctly according to approved customer specifications, products damaged through improper handling or installation, or products altered after delivery, subject always to applicable consumer protection laws and any written warranty or order agreement.",
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
                        Refund & Return Policy
                    </h1>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                        Our approach to cancellations, returns,
                        replacements, and refunds for toilet cubicles
                        and related products.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-white/60">
                        <Link
                            href="/"
                            className="transition hover:text-white"
                        >
                            Home
                        </Link>
                        <span>/</span>
                        <span>Refund & Return Policy</span>
                    </div>
                </div>
            </section>

            {/* Policy Content */}
            <section className="px-5 py-14 sm:px-8 sm:py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-10 lg:grid-cols-[0.8fr_2fr] lg:gap-16">
                        {/* Sidebar */}
                        <aside className="h-fit rounded-2xl border border-black/5 bg-white p-7 lg:sticky lg:top-24">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a18a54]">
                                Customer Information
                            </p>

                            <h2 className="mt-4 text-2xl font-semibold leading-snug text-[#18333b]">
                                Clear terms.
                                <br />
                                Reliable service.
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-gray-500">
                                Please review this policy before
                                placing an order or requesting
                                a return.
                            </p>

                            <div className="my-7 h-px bg-gray-100" />

                            <p className="text-sm font-semibold text-[#18333b]">
                                Need assistance?
                            </p>

                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                Contact our team with your order
                                details so we can help you with
                                your request.
                            </p>

                            <a
                                href="/contact-us"
                                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#102b35] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#1a414d]"
                            >
                                Contact Us
                                <span aria-hidden="true">↗</span>
                            </a>
                        </aside>

                        {/* Main Content */}
                        <div>
                            <div className="mb-8 rounded-2xl border border-[#e8dfca] bg-[#f1ecdf] p-6 sm:p-8">
                                <h2 className="text-xl font-semibold text-[#18333b]">
                                    Our Commitment
                                </h2>

                                <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                                    At Megha Systems, we aim to supply
                                    products that meet the specifications
                                    agreed upon with our customers.
                                    If an order-related issue arises,
                                    please contact us promptly so we
                                    can review the matter and work
                                    toward an appropriate resolution.
                                </p>
                            </div>

                            <div className="space-y-5">
                                {policies.map((policy) => (
                                    <section
                                        key={policy.number}
                                        className="group rounded-2xl border border-black/5 bg-white p-6 transition duration-300 hover:border-[#d5c6a1] hover:shadow-md sm:p-8"
                                    >
                                        <div className="flex items-start gap-5 sm:gap-7">
                                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f1ecdf] text-sm font-semibold text-[#8c784b]">
                                                {policy.number}
                                            </span>

                                            <div>
                                                <h2 className="text-lg font-semibold text-[#18333b] sm:text-xl">
                                                    {policy.title}
                                                </h2>

                                                <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                                                    {policy.description}
                                                </p>
                                            </div>
                                        </div>
                                    </section>
                                ))}
                            </div>

                            {/* Contact Section */}
                            <section className="mt-8 rounded-2xl bg-[#102b35] p-7 text-white sm:p-10">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d5c6a1]">
                                    We Are Here to Help
                                </p>

                                <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
                                    Have a question about your order?
                                </h2>

                                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                                    Contact Megha Systems with your
                                    invoice number, delivery details,
                                    and a description of the issue.
                                    Our team will review your request
                                    and explain the next steps.
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
                                This policy should be read together
                                with any quotation, purchase order,
                                warranty, or written agreement
                                applicable to your transaction.
                                Nothing in this policy limits rights
                                that cannot legally be excluded
                                under applicable law.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}