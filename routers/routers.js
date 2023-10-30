const express = require("express");
const upload = require("../utils/multer");
const itemModel = require("../models/itemModel");
const uploader = require("../utils/uploader");

const router = express.Router();

router.get("/hello", async function (req, res) {
  res.send("Hello World");
});

router.post("/create_url", upload, async function (req, res) {
  const { title } = req.body;

  try {
    const imgUrl = await uploader(req, res);
    const newItem = await itemModel.create({ title, imgUrl });

    res.status(200).json(newItem);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
});

module.exports = router;
