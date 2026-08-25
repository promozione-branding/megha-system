import { connect } from "./../../../../lib/mongodb";
import Project from "./../../../../models/Project";
import { deleteFromR2 } from "./../../../../utils/deleteFromR2";

export async function DELETE(req, { params }) {
    try {
        await connect();

        const { id } = await params;

        const project = await Project.findById(id);

        if (!project) {
            return Response.json(
                {
                    error: "Project not found",
                },
                {
                    status: 404,
                }
            );
        }

        // Delete R2 image
        if (project.imageFileId) {
            await deleteFromR2(project.imageFileId);
        }

        // Delete MongoDB record
        await Project.findByIdAndDelete(id);

        return Response.json({
            success: true,
            message: "Project deleted successfully",
        });

    } catch (error) {
        console.error("DELETE /api/projects/[id]:", error);

        return Response.json(
            {
                error: error.message || "Failed to delete project",
            },
            {
                status: 500,
            }
        );
    }
}