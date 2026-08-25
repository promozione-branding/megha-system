import { connect } from "./../../../../lib/mongodb";
import Blog from "./../../../../models/Blog";
import { deleteFromR2 } from "./../../../../utils/deleteFromR2";
import { uploadToR2 } from "./../../../../utils/uploadToR2";

export async function GET(req, { params }) {
    try {
        await connect();

        const { id } = await params;

        const blog = await Blog.findById(id);

        if (!blog) {
            return Response.json(
                {
                    error: "Blog not found",
                },
                {
                    status: 404,
                }
            );
        }

        return Response.json(blog);

    } catch (error) {
        console.error("GET /api/blog/[id]:", error);

        return Response.json(
            {
                error: error.message || "Failed to fetch blog",
            },
            {
                status: 500,
            }
        );
    }
}

// UPDATE BLOG
export async function PUT(req, { params }) {
    let newImageKey = "";

    try {
        await connect();

        const { id } = await params;

        const blog = await Blog.findById(id);

        if (!blog) {
            return Response.json(
                {
                    error: "Blog not found",
                },
                {
                    status: 404,
                }
            );
        }

        // IMPORTANT: save old image key before replacing it
        const oldImageKey = blog.imageFileId;

        const formData = await req.formData();

        const title = formData.get("title");
        const date = formData.get("date");
        const permalink = formData.get("permalink");
        const content = formData.get("content");
        const metaTitle = formData.get("metaTitle");
        const metaDescription = formData.get("metaDescription");
        const file = formData.get("image");

        let imageUrl = blog.image;
        let imageFileId = blog.imageFileId;

        // ==========================================
        // UPLOAD NEW IMAGE
        // ==========================================

        if (file && file.name) {
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);

            const safeFileName = file.name
                .replace(/\s+/g, "-")
                .replace(/[^a-zA-Z0-9.-]/g, "");

            const fileName = `${Date.now()}-${safeFileName}`;

            const uploadedImage = await uploadToR2({
                file: buffer,
                folder: "blogs",
                fileName,
                contentType: file.type,
            });

            newImageKey = uploadedImage.key;

            imageUrl = uploadedImage.url;
            imageFileId = uploadedImage.key;
        }

        // ==========================================
        // UPDATE BLOG
        // ==========================================

        blog.title = title;
        blog.date = date;
        blog.permalink = permalink;
        blog.content = content;
        blog.metaTitle = metaTitle;
        blog.metaDescription = metaDescription;
        blog.image = imageUrl;
        blog.imageFileId = imageFileId;

        await blog.save();

        // ==========================================
        // DELETE OLD IMAGE
        // ==========================================

        if (newImageKey && oldImageKey) {
            const deleted = await deleteFromR2(oldImageKey);

            console.log("Old image deleted:", deleted);
        }

        return Response.json(blog);

    } catch (error) {
        console.error("PUT /api/blog/[id]:", error);

        // If MongoDB failed after uploading new image,
        // delete the new image.
        if (newImageKey) {
            await deleteFromR2(newImageKey);
        }

        return Response.json(
            {
                error: error.message || "Failed to update blog",
            },
            {
                status: 500,
            }
        );
    }
}

// DELETE BLOG
export async function DELETE(req, { params }) {
    try {
        await connect();

        const { id } = await params;

        const blog = await Blog.findById(id);

        if (!blog) {
            return Response.json(
                {
                    error: "Blog not found",
                },
                {
                    status: 404,
                }
            );
        }

        // Delete image from R2
        if (blog.imageFileId) {
            await deleteFromR2(blog.imageFileId);
        }

        // Delete blog from MongoDB
        await Blog.findByIdAndDelete(id);

        return Response.json({
            success: true,
            message: "Blog deleted successfully",
        });

    } catch (error) {
        console.error("DELETE /api/blog/[id]:", error);

        return Response.json(
            {
                error: error.message || "Failed to delete blog",
            },
            {
                status: 500,
            }
        );
    }
}