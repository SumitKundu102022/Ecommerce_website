require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const Cloud_Name = process.env.CLOUDINARY_CLOUD_NAME;
const API_Key = process.env.CLOUDINARY_API_KEY;
const API_Secret = process.env.CLOUDINARY_API_SECRET;


cloudinary.config({
  // cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  // api_key: process.env.CLOUDINARY_API_KEY,
  // api_secret: process.env.CLOUDINARY_API_SECRET
  cloud_name: Cloud_Name,
  api_key: API_Key,
  api_secret: API_Secret,
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
