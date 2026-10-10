"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, MessageCircle, ShoppingBag } from "lucide-react";

type CartItem = {
    id: string | number;
    name: string;
    price: number;
    quantity: number;
    image?: string;
};

type CustomerDetails = {
    name: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    pincode: string;
    notes: string;
};

const CART_KEY = "megha-cart";
const WHATSAPP_NUMBER = "919990779915";

const emptyCustomer: CustomerDetails = {
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
    notes: "",
};

function formatPrice(price: number): string {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2,
    }).format(price);
}

function isCartItem(value: unknown): value is CartItem {
    if (!value || typeof value !== "object") return false;

    const item = value as Record<string, unknown>;

    return (
        (typeof item.id === "string" || typeof item.id === "number") &&
        typeof item.name === "string" &&
        item.name.trim().length > 0 &&
        typeof item.price === "number" &&
        Number.isFinite(item.price) &&
        item.price >= 0 &&
        typeof item.quantity === "number" &&
        Number.isInteger(item.quantity) &&
        item.quantity > 0 &&
        (item.image === undefined || typeof item.image === "string")
    );
}

export default function CheckoutPage() {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [cartLoaded, setCartLoaded] = useState(false);
    const [customer, setCustomer] =
        useState<CustomerDetails>(emptyCustomer);


    useEffect(() => {
        const loadCart = () => {
            try {
                const savedCart = localStorage.getItem(CART_KEY);

                if (!savedCart) {
                    setCartItems([]);
                    return;
                }

                const parsed: unknown = JSON.parse(savedCart);

                if (Array.isArray(parsed)) {
                    setCartItems(parsed.filter(isCartItem));
                } else {
                    setCartItems([]);
                }
            } catch (error) {
                console.error("Failed to read cart:", error);
                setCartItems([]);
            } finally {
                setCartLoaded(true);
            }
        };

        // Load the cart immediately.
        loadCart();

        // Update when another tab changes localStorage.
        window.addEventListener("storage", loadCart);

        // Update immediately when Add to Cart is clicked in this tab.
        window.addEventListener("megha-cart-updated", loadCart);

        return () => {
            window.removeEventListener("storage", loadCart);
            window.removeEventListener("megha-cart-updated", loadCart);
        };
    }, []);

    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const handleChange = (
        event: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value } = event.target;

        setCustomer((previous) => ({
            ...previous,
            [name]: value,
        }));

    };

    const handleWhatsAppOrder = (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        if (!cartLoaded || cartItems.length === 0) {
            alert("Your cart is empty. Please add products first.");
            return;
        }

        const productDetails = cartItems
            .map(
                (item, index) =>
                    `${index + 1}. ${item.name}\n` +
                    `Quantity: ${item.quantity}\n` +
                    `Unit Price: ${formatPrice(item.price)}\n` +
                    `Line Total: ${formatPrice(item.price * item.quantity)}`
            )
            .join("\n\n");

        const message = [
            "Hello Megha Systems! I would like to enquire about placing this order.",
            "",
            "CUSTOMER DETAILS",
            `Name: ${customer.name}`,
            `Phone: ${customer.phone}`,
            `Email: ${customer.email || "Not provided"}`,
            `Address: ${customer.address}`,
            `City: ${customer.city}`,
            `PIN Code: ${customer.pincode}`,
            customer.notes ? `Notes: ${customer.notes}` : "",
            "",
            "ORDER DETAILS",
            productDetails,
            "",
            `Subtotal: ${formatPrice(subtotal)}`,
            "",
            "Please confirm availability, shipping charges, and the final amount.",
        ]
            .filter((line) => line !== "")
            .join("\n");

        const whatsappUrl =
            `https://wa.me/${WHATSAPP_NUMBER}?text=` +
            encodeURIComponent(message);

        window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    };

    const inputClass =
        "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#0d2461] focus:ring-2 focus:ring-[#0d2461]/10";

    return (
        <>
            <main className="min-h-screen bg-[#f7f8fb] py-10 sm:py-14">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/products"
                        className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0d2461] hover:text-[#c99618]"
                    >
                        <ArrowLeft size={17} />
                        Continue Shopping
                    </Link>

                    <div className="mb-9">
                        <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#c99618]">
                            Megha Systems
                        </p>

                        <h1 className="text-3xl font-extrabold text-[#0d2461] sm:text-4xl">
                            Checkout
                        </h1>

                        <p className="mt-3 text-sm leading-6 text-gray-500">
                            Enter your details and send your order directly to our team on WhatsApp.
                        </p>
                    </div>

                    {!cartLoaded ? (
                        <div className="rounded-2xl bg-white p-10 text-center text-gray-500">
                            Loading your cart...
                        </div>
                    ) : cartItems.length === 0 ? (
                        <div className="rounded-2xl border border-gray-100 bg-white px-5 py-16 text-center shadow-sm">
                            <ShoppingBag
                                size={42}
                                className="mx-auto text-[#0d2461]"
                            />

                            <h2 className="mt-5 text-xl font-bold text-[#0d2461]">
                                Your cart is empty
                            </h2>

                            <p className="mt-2 text-sm text-gray-500">
                                Add some products before proceeding to checkout.
                            </p>

                            <Link
                                href="/products"
                                className="mt-6 inline-flex rounded-xl bg-[#0d2461] px-6 py-3 text-sm font-bold text-white hover:bg-[#17377f]"
                            >
                                Browse Products
                            </Link>
                        </div>
                    ) : (
                        <form
                            onSubmit={handleWhatsAppOrder}
                            className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_420px]"
                        >
                            <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-8">
                                <h2 className="text-xl font-bold text-[#0d2461]">
                                    Customer Information
                                </h2>

                                <p className="mt-1 text-sm text-gray-500">
                                    Please provide your contact and delivery details.
                                </p>

                                <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                                            Full Name *
                                        </label>
                                        <input
                                            required
                                            name="name"
                                            value={customer.name}
                                            onChange={handleChange}
                                            autoComplete="name"
                                            placeholder="Enter your full name"
                                            className={inputClass}
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                                            Phone Number *
                                        </label>
                                        <input
                                            required
                                            type="tel"
                                            name="phone"
                                            value={customer.phone}
                                            onChange={handleChange}
                                            autoComplete="tel"
                                            pattern="[0-9+\s()-]{10,18}"
                                            placeholder="Enter your phone number"
                                            className={inputClass}
                                        />
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={customer.email}
                                            onChange={handleChange}
                                            autoComplete="email"
                                            placeholder="you@example.com"
                                            className={inputClass}
                                        />
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                                            Delivery Address *
                                        </label>
                                        <textarea
                                            required
                                            name="address"
                                            value={customer.address}
                                            onChange={handleChange}
                                            autoComplete="street-address"
                                            rows={3}
                                            placeholder="House number, street, area..."
                                            className={`${inputClass} resize-y`}
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                                            City *
                                        </label>
                                        <input
                                            required
                                            name="city"
                                            value={customer.city}
                                            onChange={handleChange}
                                            autoComplete="address-level2"
                                            placeholder="Enter city"
                                            className={inputClass}
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                                            PIN Code *
                                        </label>
                                        <input
                                            required
                                            name="pincode"
                                            value={customer.pincode}
                                            onChange={handleChange}
                                            autoComplete="postal-code"
                                            inputMode="numeric"
                                            pattern="[0-9]{6}"
                                            maxLength={6}
                                            placeholder="6-digit PIN code"
                                            className={inputClass}
                                        />
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                                            Additional Notes
                                        </label>
                                        <textarea
                                            name="notes"
                                            value={customer.notes}
                                            onChange={handleChange}
                                            rows={3}
                                            placeholder="Product specifications or other requirements..."
                                            className={`${inputClass} resize-y`}
                                        />
                                    </div>
                                </div>
                            </section>

                            <aside className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7 lg:sticky lg:top-24">
                                <h2 className="text-xl font-bold text-[#0d2461]">
                                    Your Order ({cartItems.length})
                                </h2>

                                <div className="mt-6 space-y-5">
                                    {cartItems.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex gap-4 border-b border-gray-100 pb-5"
                                        >
                                            {item.image ? (
                                                <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#f5f5f2]">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="h-full w-full object-contain p-2"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-[#f5f5f2]">
                                                    <ShoppingBag className="text-gray-400" />
                                                </div>
                                            )}

                                            <div className="min-w-0 flex-1">
                                                <h3 className="text-sm font-bold leading-5 text-[#0d2461]">
                                                    {item.name}
                                                </h3>

                                                <p className="mt-2 text-xs text-gray-500">
                                                    Quantity: {item.quantity}
                                                </p>

                                                <p className="mt-1 font-bold text-[#0d2461]">
                                                    {formatPrice(item.price * item.quantity)}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
                                    <span>Subtotal</span>
                                    <span className="font-semibold text-gray-800">
                                        {formatPrice(subtotal)}
                                    </span>
                                </div>

                                <div className="mt-4 flex items-start justify-between gap-4 border-t border-gray-200 pt-5">
                                    <span className="font-bold text-[#0d2461]">
                                        Total before shipping
                                    </span>
                                    <span className="text-xl font-extrabold text-[#0d2461]">
                                        {formatPrice(subtotal)}
                                    </span>
                                </div>

                                <button
                                    type="submit"
                                    className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] px-5 py-4 text-sm font-extrabold text-white transition hover:bg-[#1fb956] active:scale-[0.98]"
                                >
                                    <MessageCircle size={21} />
                                    Send Order on WhatsApp
                                </button>

                                <p className="mt-4 text-center text-xs leading-5 text-gray-500">
                                    Your order will be sent to our WhatsApp for confirmation.
                                    Shipping charges and final pricing will be confirmed by our team.
                                </p>
                            </aside>
                        </form>
                    )}
                </div>
            </main>
        </>
    );
}
