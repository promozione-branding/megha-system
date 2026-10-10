"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
    X,
    Minus,
    Plus,
    Trash2,
    ShoppingBag,
    ArrowRight,
} from "lucide-react";
import CheckoutPopup from "./CheckoutPopup";

type CartItem = {
    id: string | number;
    name: string;
    price: number;
    quantity: number;
    image?: string;
};

type CartSidebarProps = {
    isOpen: boolean;
    onClose: () => void;
    cartItems: CartItem[];
    updateQuantity: (id: CartItem["id"], quantity: number) => void;
    removeItem: (id: CartItem["id"]) => void;
    clearCart: () => void;
};

export default function CartSidebar({
    isOpen,
    onClose,
    cartItems,
    updateQuantity,
    removeItem,
    clearCart,
}: CartSidebarProps) {
    const [checkoutOpen, setCheckoutOpen] = useState(false);

    const subtotal = cartItems.reduce(
        (total, item) =>
            total + Number(item.price || 0) * Number(item.quantity || 0),
        0
    );

    const totalItems = cartItems.reduce(
        (total, item) => total + Number(item.quantity || 0),
        0
    );

    useEffect(() => {
        if (!isOpen && !checkoutOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                if (checkoutOpen) {
                    setCheckoutOpen(false);
                } else {
                    onClose();
                }
            }
        };

        window.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, checkoutOpen, onClose]);

    const formatPrice = (price: number) =>
        new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0,
        }).format(Number(price || 0));

    const handleCheckout = () => {
        if (!cartItems.length) return;

        onClose();
        setCheckoutOpen(true);
    };

    const handleOrderSuccess = () => {
        // Remove each item using the parent's cart handler.
        cartItems.forEach((item) => {
            removeItem(item.id);
        });

        localStorage.removeItem("megha-cart");
        window.dispatchEvent(new Event("megha-cart-updated"));

        setCheckoutOpen(false);
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Background overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={onClose}
                            className="fixed inset-0 z-[200] bg-[#071329]/55 backdrop-blur-[2px]"
                        />

                        {/* Cart drawer */}
                        <motion.aside
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                type: "spring",
                                damping: 28,
                                stiffness: 260,
                            }}
                            role="dialog"
                            aria-modal="true"
                            aria-label="Shopping cart"
                            className="fixed right-0 top-0 z-[201] flex h-[100dvh] w-full max-w-[460px] flex-col bg-white shadow-2xl"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
                                <div>
                                    <h2 className="text-xl font-extrabold text-[#0d2461]">
                                        Your Cart
                                    </h2>

                                    <p className="mt-1 text-sm text-gray-500">
                                        {totalItems} items in your bag
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={onClose}
                                    aria-label="Close cart"
                                    className="rounded-full border border-gray-200 p-2 text-gray-600 transition hover:bg-gray-100"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Products */}
                            <div className="flex-1 overflow-y-auto px-6 py-5">
                                {cartItems.length === 0 ? (
                                    <div className="flex h-full min-h-[300px] flex-col items-center justify-center text-center">
                                        <div className="mb-5 rounded-full bg-[#0d2461]/5 p-6">
                                            <ShoppingBag
                                                size={38}
                                                className="text-[#0d2461]"
                                            />
                                        </div>

                                        <h3 className="text-lg font-bold text-[#0d2461]">
                                            Your cart is empty
                                        </h3>

                                        <p className="mt-2 max-w-[260px] text-sm leading-6 text-gray-500">
                                            Explore our products and add your favourites
                                            to your cart.
                                        </p>

                                        <button
                                            type="button"
                                            onClick={onClose}
                                            className="mt-6 rounded-lg bg-[#0d2461] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#17377f]"
                                        >
                                            Continue Shopping
                                        </button>
                                    </div>
                                ) : (
                                    <div className="space-y-5">
                                        {cartItems.map((item) => (
                                            <div
                                                key={item.id}
                                                className="flex gap-4 border-b border-gray-100 pb-5"
                                            >
                                                {/* Product image */}
                                                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-xl bg-[#f5f5f2]">
                                                    {item.image ? (
                                                        <Image
                                                            src={item.image}
                                                            alt={item.name}
                                                            fill
                                                            sizes="112px"
                                                            className="object-contain p-2"
                                                        />
                                                    ) : (
                                                        <div className="flex h-full items-center justify-center">
                                                            <ShoppingBag
                                                                size={28}
                                                                className="text-gray-400"
                                                            />
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Product details */}
                                                <div className="flex min-w-0 flex-1 flex-col">
                                                    <div className="flex items-start justify-between gap-2">
                                                        <h3 className="line-clamp-2 text-sm font-bold leading-5 text-[#0d2461]">
                                                            {item.name}
                                                        </h3>

                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                removeItem(item.id)
                                                            }
                                                            aria-label={`Remove ${item.name}`}
                                                            className="shrink-0 text-gray-400 transition hover:text-red-500"
                                                        >
                                                            <Trash2 size={17} />
                                                        </button>
                                                    </div>

                                                    <p className="mt-2 text-base font-extrabold text-[#0d2461]">
                                                        {formatPrice(
                                                            item.price * item.quantity
                                                        )}
                                                    </p>

                                                    <p className="mt-1 text-xs text-gray-500">
                                                        {formatPrice(item.price)} each
                                                    </p>

                                                    {/* Quantity controls */}
                                                    <div className="mt-auto flex items-center pt-3">
                                                        <div className="flex items-center rounded-lg border border-gray-200">
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    updateQuantity(
                                                                        item.id,
                                                                        Math.max(
                                                                            1,
                                                                            item.quantity - 1
                                                                        )
                                                                    )
                                                                }
                                                                aria-label="Decrease quantity"
                                                                className="p-2 text-[#0d2461] hover:bg-gray-50"
                                                            >
                                                                <Minus size={14} />
                                                            </button>

                                                            <span className="min-w-8 text-center text-sm font-bold text-[#0d2461]">
                                                                {item.quantity}
                                                            </span>

                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    updateQuantity(
                                                                        item.id,
                                                                        item.quantity + 1
                                                                    )
                                                                }
                                                                aria-label="Increase quantity"
                                                                className="p-2 text-[#0d2461] hover:bg-gray-50"
                                                            >
                                                                <Plus size={14} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Footer */}
                            {cartItems.length > 0 && (
                                <div className="border-t border-gray-100 bg-white px-6 py-5">
                                    <div className="mb-3 flex items-center justify-between text-sm text-gray-500">
                                        <span>Subtotal</span>

                                        <span className="font-semibold text-[#0d2461]">
                                            {formatPrice(subtotal)}
                                        </span>
                                    </div>

                                    <p className="mb-5 text-xs leading-5 text-gray-500">
                                        Shipping, taxes and any applicable charges
                                        are calculated at checkout.
                                    </p>

                                    <button
                                        type="button"
                                        onClick={handleCheckout}
                                        className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#0d2461] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#17377f]"
                                    >
                                        Proceed to Checkout

                                        <ArrowRight
                                            size={18}
                                            className="transition-transform group-hover:translate-x-1"
                                        />
                                    </button>

                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="mt-3 w-full py-2 text-sm font-semibold text-[#0d2461] transition hover:text-[#c99618]"
                                    >
                                        Continue Shopping
                                    </button>
                                </div>
                            )}
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            {/* Checkout popup */}
            <CheckoutPopup
                isOpen={checkoutOpen}
                onClose={() => setCheckoutOpen(false)}
                cartItems={cartItems}
                onOrderSuccess={handleOrderSuccess}
            />
        </>
    );
}