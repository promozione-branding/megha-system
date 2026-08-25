"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
    Menu,
    X,
    Edit,
    Trash2,
    MapPin,
    Plus,
} from "lucide-react";

import Sidebar from "./../../components/admin/Sidebar";

export default function Page() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [blogs, setBlogs] = useState([]);
    const [projects, setProjects] = useState([]);
    const [loadingBlogs, setLoadingBlogs] = useState(true);
    const [loadingProjects, setLoadingProjects] = useState(true);

    // Fetch Blogs
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch("/api/blog");

                if (!res.ok) {
                    throw new Error("Failed to fetch blogs");
                }

                const data = await res.json();

                setBlogs(data);
            } catch (error) {
                console.error("Blog fetch error:", error);
            } finally {
                setLoadingBlogs(false);
            }
        };

        fetchBlogs();
    }, []);

    // Fetch Projects
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch("/api/project");

                if (!res.ok) {
                    throw new Error("Failed to fetch projects");
                }

                const data = await res.json();

                setProjects(data);
            } catch (error) {
                console.error("Project fetch error:", error);
            } finally {
                setLoadingProjects(false);
            }
        };

        fetchProjects();
    }, []);

    // Delete Blog
    const handleDeleteBlog = async (id) => {
        if (!confirm("Delete this blog?")) return;

        try {
            const res = await fetch(`/api/blog/${id}`, {
                method: "DELETE",
            });

            if (!res.ok) {
                throw new Error("Failed to delete blog");
            }

            setBlogs((prev) =>
                prev.filter((blog) => blog._id !== id)
            );
        } catch (error) {
            console.error(error);
            alert("Failed to delete blog");
        }
    };

    // Delete Project
    const handleDeleteProject = async (id) => {
        if (!confirm("Delete this project?")) return;

        try {
            const res = await fetch(`/api/project/${id}`, {
                method: "DELETE",
            });

            if (!res.ok) {
                throw new Error("Failed to delete project");
            }

            setProjects((prev) =>
                prev.filter((project) => project._id !== id)
            );
        } catch (error) {
            console.error(error);
            alert("Failed to delete project");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex text-black">
            <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="bg-white shadow-sm p-4 flex items-center justify-between md:justify-end">
                    <button
                        className="md:hidden"
                        onClick={() =>
                            setSidebarOpen(!sidebarOpen)
                        }
                    >
                        {sidebarOpen ? (
                            <X size={26} />
                        ) : (
                            <Menu size={26} />
                        )}
                    </button>

                    <h1 className="text-2xl font-bold text-yellow-400">
                        Admin Dashboard
                    </h1>
                </header>

                <main className="p-4 md:p-6">
                    {/* PROJECTS */}
                    <div className="mb-12">
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-xl font-bold md:text-3xl">
                                Manage Projects
                            </h2>

                            <Link
                                href="/admin/projects"
                                className="flex items-center gap-2 rounded-lg bg-[#0d2461] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0d2461]/90"
                            >
                                <Plus size={17} />
                                Add Project
                            </Link>
                        </div>

                        {loadingProjects ? (
                            <p className="py-10 text-center text-gray-500">
                                Loading projects...
                            </p>
                        ) : projects.length === 0 ? (
                            <div className="rounded-xl bg-white p-10 text-center shadow">
                                <p className="text-xl text-gray-500">
                                    No Projects Found
                                </p>

                                <Link
                                    href="/admin/projects"
                                    className="mt-4 inline-block rounded-lg bg-[#0d2461] px-5 py-2 text-white"
                                >
                                    Add Your First Project
                                </Link>
                            </div>
                        ) : (
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {projects.map((item) => (
                                    <div
                                        key={item._id}
                                        className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl"
                                    >
                                        {/* Image */}
                                        <div className="relative">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                                            />

                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#07173f]/70 to-transparent" />

                                            {/* Location */}
                                            <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white">
                                                <MapPin
                                                    size={15}
                                                    className="text-[#f5bd24]"
                                                />

                                                <span className="text-xs font-medium">
                                                    {item.place}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-4">
                                            <h3 className="line-clamp-2 text-xl font-bold text-gray-900">
                                                {item.name}
                                            </h3>

                                            <div className="mt-4 flex justify-end gap-2">
                                                <button
                                                    onClick={() =>
                                                        handleDeleteProject(
                                                            item._id
                                                        )
                                                    }
                                                    className="rounded-full bg-red-500 p-3 text-white transition hover:bg-red-600"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* BLOGS */}
                    <div>
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-xl font-bold md:text-3xl">
                                Manage Blogs
                            </h2>

                            <Link
                                href="/admin/new"
                                className="flex items-center gap-2 rounded-lg bg-yellow-400 px-4 py-2 text-sm font-semibold text-[#0d2461] transition hover:bg-yellow-500"
                            >
                                <Plus size={17} />
                                Add Blog
                            </Link>
                        </div>

                        {loadingBlogs ? (
                            <p className="py-10 text-center text-gray-500">
                                Loading blogs...
                            </p>
                        ) : blogs.length === 0 ? (
                            <div className="rounded-xl bg-white p-10 text-center shadow">
                                <p className="text-xl text-gray-500">
                                    No Blogs Found
                                </p>

                                <Link
                                    href="/admin/new"
                                    className="mt-4 inline-block rounded-lg bg-yellow-400 px-5 py-2 font-semibold text-[#0d2461]"
                                >
                                    Add Your First Blog
                                </Link>
                            </div>
                        ) : (
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {blogs.map((item) => (
                                    <div
                                        key={item._id}
                                        className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl"
                                    >
                                        {/* Blog Image */}
                                        <div className="relative overflow-hidden">
                                            <img
                                                src={
                                                    item.image ||
                                                    item.thumbnail
                                                }
                                                alt={item.title}
                                                className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                                            />
                                        </div>

                                        {/* Blog Content */}
                                        <div className="flex flex-1 flex-col p-4">
                                            <h3 className="line-clamp-2 text-xl font-bold text-gray-900">
                                                {item.title}
                                            </h3>

                                            <div className="mt-auto flex items-center justify-between pt-4">
                                                <Link
                                                    href={`/our-articles/${item.permalink}`}
                                                    className="text-sm font-medium text-yellow-500 hover:underline"
                                                >
                                                    Read More →
                                                </Link>

                                                <div className="flex gap-2">
                                                    <Link
                                                        href={`/admin/edit-blog/${item._id}`}
                                                        className="rounded-full bg-green-500 p-3 text-white transition hover:bg-green-600"
                                                    >
                                                        <Edit size={16} />
                                                    </Link>

                                                    <button
                                                        onClick={() =>
                                                            handleDeleteBlog(
                                                                item._id
                                                            )
                                                        }
                                                        className="rounded-full bg-red-500 p-3 text-white transition hover:bg-red-600"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}