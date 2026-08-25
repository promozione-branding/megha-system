import { connect } from "./../../../lib/mongodb";
import Blog from "./../../../models/Blog";
import { uploadToR2 } from "./../../../utils/uploadToR2";
import { deleteFromR2 } from "./../../../utils/deleteFromR2";

// GET /api/blog
export async function GET() {
  try {
    await connect();

    const blogs = await Blog
      .find()
      .sort({ createdAt: -1 });

    return Response.json(blogs);
  } catch (error) {
    console.error("GET /api/blog:", error);

    return Response.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}


// POST /api/blog
export async function POST(req) {
  let uploadedImageKey = "";

  try {
    await connect();

    const formData = await req.formData();

    const title = formData.get("title");
    const date = formData.get("date");
    const permalink = formData.get("permalink");
    const content = formData.get("content");
    const metaTitle = formData.get("metaTitle");
    const metaDescription = formData.get("metaDescription");
    const file = formData.get("image");

    if (!title || !permalink || !date) {
      return Response.json(
        {
          error: "Title, permalink and date are required",
        },
        { status: 400 }
      );
    }

    let imageUrl = "";
    let imageFileId = "";

    // Upload image
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

      imageUrl = uploadedImage.url;
      imageFileId = uploadedImage.key;

      uploadedImageKey = uploadedImage.key;
    }

    // Save MongoDB
    const blog = await Blog.create({
      title,
      date,
      permalink,
      content,
      metaTitle,
      metaDescription,
      image: imageUrl,
      imageFileId,
    });

    return Response.json(blog, {
      status: 201,
    });

  } catch (error) {
    console.error("POST /api/blog error:", error);

    // MongoDB failed after R2 upload
    // Remove orphaned R2 image
    if (uploadedImageKey) {
      await deleteFromR2(uploadedImageKey);
    }

    return Response.json(
      {
        error: error.message || "Failed to create blog",
      },
      {
        status: 500,
      }
    );
  }
}