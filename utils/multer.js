const multer = require("multer");

const storage = multer.diskStorage({});

const multerStorage = multer({ storage });

const upload = multerStorage.single("imgUrl");

module.exports = upload;
