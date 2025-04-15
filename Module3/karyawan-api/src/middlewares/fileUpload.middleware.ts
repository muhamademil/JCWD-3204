//sebelum melakukan fileUpload, install multer terlebih dahulu
import multer from "multer";

const storage = multer.memoryStorage(); // menyimpan file di ram sebelum diupload ke cloudinary

export const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // maks file 5 MB
  },
  fileFilter: (req, file, cb: any) => {
    if (!file.mimetype.startsWith("application/pdf")) {
      return cb(new Error("Only payslips files are allowed"), false);
    }
    cb(null, true);
  },
});
