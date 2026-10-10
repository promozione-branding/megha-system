"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    Loader2,
    User,
    Phone,
    Mail,
    MapPin,
    ShoppingBag,
    PackageCheck,
    X,
    AlertCircle,
    Truck,
} from "lucide-react";

type CartItem = {
    id: string | number;
    name: string;
    price: number;
    quantity: number;
    image?: string;
};

type Customer = {
    name: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    pincode: string;
    notes: string;
};

type CheckoutPopupProps = {
    isOpen: boolean;
    onClose: () => void;
    cartItems: CartItem[];
    onOrderSuccess: () => void;
};

const emptyCustomer: Customer = {
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
    notes: "",
};

const API_URL = "https://brandbnalo.com/api/form/add";

const inputClass =
    "w-full rounded-xl border border-gray-200 bg-[#fafafa] px-4 py-3 text-sm text-[#0d2461] outline-none transition placeholder:text-gray-400 focus:border-[#0d2461] focus:bg-white focus:ring-4 focus:ring-[#0d2461]/5";

const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2,
    }).format(price);

export default function CheckoutPopup({
    isOpen,
    onClose,
    cartItems,
    onOrderSuccess,
}: CheckoutPopupProps) {
    const [customer, setCustomer] = useState<Customer>(emptyCustomer);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const totalQuantity = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    useEffect(() => {
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape" && !loading) {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, loading, onClose]);

    useEffect(() => {
        if (!isOpen) {
            setSuccess(false);
            setError("");
            setCustomer(emptyCustomer);
        }
    }, [isOpen]);

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

        setError("");
    };

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();
        setError("");

        if (loading) return;

        if (!cartItems.length) {
            setError("Your cart is empty. Please add products first.");
            return;
        }

        if (
            !customer.name.trim() ||
            !customer.phone.trim() ||
            !customer.email.trim() ||
            !customer.address.trim() ||
            !customer.city.trim() ||
            !customer.pincode.trim()
        ) {
            setError("Please fill in all required fields.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customer.email)) {
            setError("Please enter a valid email address.");
            return;
        }

        if (!/^[0-9]{6}$/.test(customer.pincode)) {
            setError("Please enter a valid 6-digit PIN code.");
            return;
        }

        if (!/^[0-9+\s()-]{10,18}$/.test(customer.phone)) {
            setError("Please enter a valid phone number.");
            return;
        }

        try {
            setLoading(true);

            const productDetails = cartItems
                .map(
                    (item, index) =>
                        `${index + 1}. ${item.name}\n` +
                        `Product ID: ${item.id}\n` +
                        `Quantity: ${item.quantity}\n` +
                        `Unit Price: ${formatPrice(item.price)}\n` +
                        `Line Total: ${formatPrice(item.price * item.quantity)}`
                )
                .join("\n\n");

            const message = [
                "NEW CHECKOUT ORDER - MEGHA SYSTEMS",
                "",
                "CUSTOMER DETAILS",
                `Name: ${customer.name.trim()}`,
                `Phone: ${customer.phone.trim()}`,
                `Email: ${customer.email.trim()}`,
                `Address: ${customer.address.trim()}`,
                `City: ${customer.city.trim()}`,
                `PIN Code: ${customer.pincode.trim()}`,
                "",
                "ORDER ITEMS",
                productDetails,
                "",
                `Total Quantity: ${totalQuantity}`,
                `Subtotal: ${formatPrice(subtotal)}`,
                "Shipping Charges: To be confirmed",
                `Total Before Shipping: ${formatPrice(subtotal)}`,
                "",
                `Additional Notes: ${customer.notes.trim() || "None"}`,
                "",
                "Please contact the customer to confirm availability and final pricing.",
            ].join("\n");

            const payload = {
                platform: "Megha System Checkout",
                supplierToken: "6a9fb2bdd936bdc2bb1d6df7",
                platformEmail: "contact@meghasystems.com",
                name: customer.name.trim(),
                email: customer.email.trim(),
                company: "NA",
                phone: customer.phone.trim(),
                product: cartItems
                    .map((item) => `${item.name} x ${item.quantity}`)
                    .join(", "),
                place: `${customer.city.trim()}, ${customer.pincode.trim()}`,
                message,
            };

            await axios.post(API_URL, payload);

            setSuccess(true);
            onOrderSuccess();
        } catch (err) {
            console.error("Checkout submission failed:", err);

            setError(
                axios.isAxiosError(err) &&
                    typeof err.response?.data?.message === "string"
                    ? err.response.data.message
                    : "Unable to submit your order. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#061638]/75 px-3 py-4 backdrop-blur-sm sm:px-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onMouseDown={(event) => {
                        if (
                            event.target === event.currentTarget &&
                            !loading
                        ) {
                            onClose();
                        }
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 25, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.97 }}
                        transition={{
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative flex max-h-[94vh] w-full max-w-[1000px] overflow-hidden rounded-2xl bg-white shadow-2xl sm:rounded-[26px]"
                    >
                        <div className="flex min-w-0 flex-1 flex-col">
                            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4 sm:px-8">
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c99618]">
                                        Megha Systems
                                    </p>
                                    <h3 className="mt-1 text-xl font-extrabold text-[#0d2461] sm:text-2xl">
                                        {success ? "Order Received" : "Checkout"}
                                    </h3>
                                </div>

                                <button
                                    type="button"
                                    onClick={onClose}
                                    disabled={loading}
                                    aria-label="Close checkout"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:bg-[#0d2461] hover:text-white disabled:opacity-40"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            <div className="overflow-y-auto p-5 sm:p-8">
                                {success ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex min-h-[420px] flex-col items-center justify-center text-center"
                                    >
                                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
                                            <CheckCircle2
                                                size={42}
                                                className="text-green-600"
                                            />
                                        </div>

                                        <h3 className="mt-6 text-3xl font-extrabold text-[#0d2461]">
                                            Thank You!
                                        </h3>

                                        <p className="mt-3 max-w-sm text-sm leading-7 text-gray-500">
                                            Your order enquiry has been
                                            submitted successfully.
                                            Our team will contact you
                                            to confirm product availability,
                                            shipping charges, and final pricing.
                                        </p>

                                        <button
                                            type="button"
                                            onClick={onClose}
                                            className="mt-8 rounded-xl bg-[#0d2461] px-8 py-3.5 text-sm font-bold text-white transition hover:bg-[#17377f]"
                                        >
                                            Continue
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form
                                        onSubmit={handleSubmit}
                                        className="grid grid-cols-1 gap-7 xl:grid-cols-[minmax(0,1fr)_280px]"
                                    >
                                        {/* Form fields */}
                                        <div className="min-w-0">
                                            <p className="mb-5 text-sm leading-6 text-gray-500">
                                                Enter your contact and delivery
                                                information to submit your order.
                                            </p>

                                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                                <Field
                                                    label="Full Name *"
                                                    name="name"
                                                    value={customer.name}
                                                    onChange={handleChange}
                                                    placeholder="Your full name"
                                                    icon={User}
                                                />

                                                <Field
                                                    label="Phone Number *"
                                                    name="phone"
                                                    value={customer.phone}
                                                    onChange={handleChange}
                                                    placeholder="+91 phone number"
                                                    icon={Phone}
                                                    type="tel"
                                                />

                                                <div className="sm:col-span-2">
                                                    <Field
                                                        label="Email Address *"
                                                        name="email"
                                                        value={customer.email}
                                                        onChange={handleChange}
                                                        placeholder="you@example.com"
                                                        icon={Mail}
                                                        type="email"
                                                    />
                                                </div>

                                                <div className="sm:col-span-2">
                                                    <label
                                                        htmlFor="checkout-address"
                                                        className="mb-2 block text-[10px] font-bold uppercase tracking-[0.12em] text-[#0d2461]/60"
                                                    >
                                                        Delivery Address *
                                                    </label>
                                                    <div className="relative">
                                                        <MapPin
                                                            size={16}
                                                            className="absolute left-4 top-4 text-gray-400"
                                                        />
                                                        <textarea
                                                            id="checkout-address"
                                                            name="address"
                                                            required
                                                            rows={2}
                                                            value={customer.address}
                                                            onChange={handleChange}
                                                            placeholder="House number, street, area..."
                                                            className={`${inputClass} resize-y pl-11`}
                                                        />
                                                    </div>
                                                </div>

                                                <Field
                                                    label="City *"
                                                    name="city"
                                                    value={customer.city}
                                                    onChange={handleChange}
                                                    placeholder="Your city"
                                                />

                                                <Field
                                                    label="PIN Code *"
                                                    name="pincode"
                                                    value={customer.pincode}
                                                    onChange={handleChange}
                                                    placeholder="6-digit PIN"
                                                    maxLength={6}
                                                    inputMode="numeric"
                                                    pattern="[0-9]{6}"
                                                />

                                                <div className="sm:col-span-2">
                                                    <label
                                                        htmlFor="checkout-notes"
                                                        className="mb-2 block text-[10px] font-bold uppercase tracking-[0.12em] text-[#0d2461]/60"
                                                    >
                                                        Additional Notes
                                                    </label>
                                                    <textarea
                                                        id="checkout-notes"
                                                        name="notes"
                                                        rows={2}
                                                        value={customer.notes}
                                                        onChange={handleChange}
                                                        placeholder="Product specifications or other requirements..."
                                                        className={`${inputClass} resize-y`}
                                                    />
                                                </div>
                                            </div>

                                            {error && (
                                                <div
                                                    role="alert"
                                                    className="mt-5 flex items-start gap-2 rounded-xl border border-red-100 bg-red-50 p-3 text-sm text-red-600"
                                                >
                                                    <AlertCircle
                                                        size={18}
                                                        className="mt-0.5 shrink-0"
                                                    />
                                                    {error}
                                                </div>
                                            )}
                                        </div>

                                        {/* Order summary */}
                                        <aside className="h-fit rounded-2xl border border-gray-100 bg-[#f8f9fc] p-4 sm:p-5">
                                            <div className="flex items-center justify-between gap-2">
                                                <h4 className="font-extrabold text-[#0d2461]">
                                                    Your Order
                                                </h4>
                                                <span className="rounded-full bg-white px-2.5 py-1 text-xs font-bold text-gray-500">
                                                    {totalQuantity} items
                                                </span>
                                            </div>

                                            <div className="mt-5 max-h-56 space-y-4 overflow-y-auto">
                                                {cartItems.map((item, index) => (
                                                    <div
                                                        key={`${item.id}-${index}`}
                                                        className="flex gap-3"
                                                    >
                                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white">
                                                            {item.image ? (
                                                                <img
                                                                    src={item.image}
                                                                    alt={item.name}
                                                                    className="h-full w-full object-contain p-1"
                                                                />
                                                            ) : (
                                                                <ShoppingBag
                                                                    size={20}
                                                                    className="text-gray-400"
                                                                />
                                                            )}
                                                        </div>

                                                        <div className="min-w-0 flex-1">
                                                            <p className="line-clamp-2 text-xs font-bold leading-5 text-gray-700">
                                                                {item.name}
                                                            </p>
                                                            <p className="mt-1 text-xs text-gray-500">
                                                                Qty: {item.quantity}
                                                            </p>
                                                            <p className="mt-1 text-sm font-extrabold text-[#0d2461]">
                                                                {formatPrice(
                                                                    item.price * item.quantity
                                                                )}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="mt-5 space-y-3 border-t border-gray-200 pt-4">
                                                <div className="flex justify-between gap-3 text-sm text-gray-500">
                                                    <span>Subtotal</span>
                                                    <span className="font-semibold text-gray-800">
                                                        {formatPrice(subtotal)}
                                                    </span>
                                                </div>

                                                <div className="flex justify-between gap-3 text-xs text-gray-500">
                                                    <span>Shipping</span>
                                                    <span className="text-right">
                                                        To be confirmed
                                                    </span>
                                                </div>

                                                <div className="border-t border-dashed border-gray-200 pt-3">
                                                    <div className="flex items-start justify-between gap-3">
                                                        <span className="text-sm font-extrabold text-[#0d2461]">
                                                            Total
                                                        </span>
                                                        <span className="text-lg font-black text-[#0d2461]">
                                                            {formatPrice(subtotal)}
                                                        </span>
                                                    </div>
                                                    <p className="mt-1 text-[10px] leading-4 text-gray-400">
                                                        Excluding shipping charges
                                                    </p>
                                                </div>
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={loading || !cartItems.length}
                                                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0d2461] px-4 py-3.5 text-sm font-bold text-white transition hover:bg-[#17377f] disabled:cursor-not-allowed disabled:opacity-60"
                                            >
                                                {loading ? (
                                                    <>
                                                        <Loader2
                                                            size={17}
                                                            className="animate-spin"
                                                        />
                                                        Submitting...
                                                    </>
                                                ) : (
                                                    <>
                                                        Place Order
                                                        <ArrowRight size={17} />
                                                    </>
                                                )}
                                            </button>

                                            <p className="mt-3 text-center text-[10px] leading-5 text-gray-400">
                                                Payment and shipping details
                                                will be confirmed by our team.
                                            </p>
                                        </aside>
                                    </form>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

type FieldProps = {
    label: string;
    name: string;
    value: string;
    onChange: (
        event: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement
        >
    ) => void;
    placeholder: string;
    icon?: React.ComponentType<{ size?: number; className?: string }>;
    type?: string;
    maxLength?: number;
    inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
    pattern?: string;
};

function Field({
    label,
    name,
    value,
    onChange,
    placeholder,
    icon: Icon,
    type = "text",
    maxLength,
    inputMode,
    pattern,
}: FieldProps) {
    return (
        <div>
            <label
                htmlFor={`checkout-${name}`}
                className="mb-2 block text-[10px] font-bold uppercase tracking-[0.12em] text-[#0d2461]/60"
            >
                {label}
            </label>

            <div className="relative">
                {Icon && (
                    <Icon
                        size={16}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                )}
                <input
                    id={`checkout-${name}`}
                    name={name}
                    type={type}
                    required
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    inputMode={inputMode}
                    pattern={pattern}
                    className={`${inputClass} ${Icon ? "pl-11" : ""}`}
                />
            </div>
        </div>
    );
}
