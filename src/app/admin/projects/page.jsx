'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../../../components/admin/Sidebar";
import { Menu, X } from "lucide-react";

export default function CreateProject() {
    const router = useRouter();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [preview, setPreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];

        if (file) {
            setPreview(URL.createObjectURL(file));
        } else {
            setPreview(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const formData = new FormData(e.currentTarget);

            const response = await fetch("/api/project", {
                method: "POST",
                body: formData,
            });

            const contentType = response.headers.get("content-type");

            let data;

            if (contentType?.includes("application/json")) {
                data = await response.json();
            } else {
                const text = await response.text();

                console.error("Server response:", text);

                throw new Error(
                    `Server returned ${response.status}: ${text}`
                );
            }

            if (!response.ok) {
                throw new Error(
                    data?.error || "Failed to create project"
                );
            }

            router.push("/admin");

        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <div className="flex-1 flex flex-col">
                <header className="bg-white shadow-sm p-4 flex items-center justify-between md:justify-end">
                    <button className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
                        {sidebarOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>

                    <h1 className="hidden md:block text-2xl font-extrabold text-yellow-400">
                        Create Blog
                    </h1>
                </header>
                <main className="min-h-screen bg-gray-100 p-6 text-black">
                    <form
                        onSubmit={handleSubmit}
                        className="mx-auto max-w-2xl space-y-6 rounded-2xl bg-white p-6 shadow"
                    >

                        <div>
                            <label className="mb-2 block font-semibold">
                                Project Name
                            </label>

                            <input
                                name="name"
                                required
                                placeholder="TCS Campus"
                                className="w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-200"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block font-semibold">
                                Place
                            </label>

                            <input
                                name="place"
                                required
                                placeholder="Bangalore, India"
                                className="w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-200"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block font-semibold">
                                Project Image
                            </label>

                            <input
                                type="file"
                                name="image"
                                accept="image/*"
                                required
                                onChange={handleImageChange}
                                className="w-full rounded-lg border p-3"
                            />
                        </div>

                        {preview && (
                            <img
                                src={preview}
                                alt="Preview"
                                className="h-64 w-full rounded-xl object-cover"
                            />
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="rounded-lg bg-[#0d2461] px-6 py-3 font-semibold text-white transition hover:bg-[#0d2461]/90 disabled:opacity-50"
                        >
                            {loading ? "Uploading..." : "Add Project"}
                        </button>
                    </form>
                </main>
            </div>
        </div>
    );
}