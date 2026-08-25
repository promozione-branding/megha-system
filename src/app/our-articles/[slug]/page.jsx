import React from 'react'
import Article from './Article'
import Navbar from '@/app/components/Navabar/page';
import FooterSection from '@/app/components/Footer/page';
import { connect } from "./../../../lib/mongodb";
import Blog from "./../../../models/Blog";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    await connect();
    const blog = await Blog.findOne({ permalink: slug });

    if (!blog) {
        return {
            title: "Blog Not Found",
            description: "This blog does not exist.",
        };
    }

    return {
        title: blog.metaTitle || blog.title,
        description: blog.metaDescription || "",
        openGraph: {
            title: blog.metaTitle || blog.title,
            description: blog.metaDescription || "",
            images: blog.image ? [{ url: blog.image }] : [],
        },
        twitter: {
            card: "summary_large_image",
            title: blog.metaTitle || blog.title,
            description: blog.metaDescription || "",
            images: blog.image ? [blog.image] : [],
        },
    };
}

export default async function page({ params }) {
    const { slug } = await params;
    await connect();
    const blog = await Blog.findOne({ permalink: slug });

    return (<>
        <Navbar />
        <Article blog={blog} />
        <FooterSection />
    </>
    )
}
