
const express = require("express");
const router = express.Router();

const upload = require("../middleware/uploadMiddleware");
const {
  uploadSingle,
  uploadMultiple,
} = require("../controllers/fileController");

// single file
router.post("/upload", upload.single("file"), uploadSingle);

// multiple files
router.post("/upload-multiple", upload.array("files", 5), uploadMultiple);

module.exports = router;
