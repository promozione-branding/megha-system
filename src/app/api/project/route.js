import { connect } from "./../../../lib/mongodb";
import Project from "./../../../models/Project";
import { uploadToR2 } from "./../../../utils/uploadToR2";
import { deleteFromR2 } from "./../../../utils/deleteFromR2";

export async function GET() {
    try {
        await connect();

        const projects = await Project
            .find()
            .sort({ createdAt: -1 });

        return Response.json(projects);

    } catch (error) {
        console.error("GET /api/projects:", error);

        return Response.json(
            {
                error: error.message || "Failed to fetch projects",
            },
            {
                status: 500,
            }
        );
    }
}


export async function POST(req) {
    let uploadedImageKey = "";

    try {
        await connect();

        const formData = await req.formData();

        const name = formData.get("name");
        const place = formData.get("place");
        const file = formData.get("image");

        if (!name || !place) {
            return Response.json(
                {
                    error: "Name and place are required",
                },
                {
                    status: 400,
                }
            );
        }

        if (!file || typeof file.arrayBuffer !== "function") {
            return Response.json(
                {
                    error: "Project image is required",
                },
                {
                    status: 400,
                }
            );
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const safeFileName = file.name
            .replace(/\s+/g, "-")
            .replace(/[^a-zA-Z0-9.-]/g, "");

        const fileName = `${Date.now()}-${safeFileName}`;

        // Upload to R2
        const uploadedImage = await uploadToR2({
            file: buffer,
            folder: "projects",
            fileName,
            contentType: file.type,
        });

        uploadedImageKey = uploadedImage.key;

        // Save to MongoDB
        const project = await Project.create({
            name,
            place,
            image: uploadedImage.url,
            imageFileId: uploadedImage.key,
        });

        return Response.json(project, {
            status: 201,
        });

    } catch (error) {
        console.error("POST /api/projects:", error);

        // If MongoDB fails after R2 upload,
        // remove the uploaded image.
        if (uploadedImageKey) {
            await deleteFromR2(uploadedImageKey);
        }

        return Response.json(
            {
                error: error.message || "Failed to create project",
            },
            {
                status: 500,
            }
        );
    }
}