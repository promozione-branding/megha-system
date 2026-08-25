import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { r2 } from "./../lib/r2";

export const deleteFromR2 = async (key) => {
    if (!key) return false;

    try {
        const command = new DeleteObjectCommand({
            Bucket: process.env.CLOUD_FLARE_R2_BUCKET,
            Key: key,
        });

        await r2.send(command);

        return true;
    } catch (error) {
        console.error("R2 Delete Error:", error);

        return false;
    }
};