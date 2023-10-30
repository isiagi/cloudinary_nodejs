const cloudinary = require("./cloudinary");

const uploader = async (req, res) => {
  console.log("===r===", req.file);
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded." });
  }

  const imageUrl = await cloudinary.uploader.upload(req.file.path);

  return imageUrl.secure_url;
};

module.exports = uploader;
