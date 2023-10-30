const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/cloudinary");
    console.log("Connection successful");
  } catch (error) {
    console.log("DB connection failed", error);
  }

  const db = mongoose.connect;

  return db;
};

module.exports = dbConnect;
