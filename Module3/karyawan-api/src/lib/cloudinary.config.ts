import { v2 as cloudinary } from "cloudinary";
import { UploadApiResponse } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export class CloudinaryService {
  public async uploadFile(file: Express.Multer.File): Promise<string> {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: "karyaone/payslips",
          resource_type: "raw", // karna file pdf
          public_id: file.originalname,
        },
        (error, result: UploadApiResponse | undefined) => {
          if (error) {
            return reject(error);
          }
          resolve(result?.secure_url || "");
        }
      );
      stream.end(file.buffer); // mengakhiri stream
    });
  }

  public async deleteFile(publicId: string) {
    const result = await cloudinary.uploader.destroy(publicId);
    return result;
  }
}
