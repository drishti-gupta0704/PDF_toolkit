
const express = require("express");
const router = express.Router();

const upload = require("../middleware/uploadMiddleware");
const {
  uploadSingle,
  uploadMultiple, 
  mergeFiles,
  compressFile, 
} = require("../controllers/fileController");

// single file
router.post("/upload", upload.single("file"), uploadSingle);

// multiple files
router.post("/upload-multiple", upload.array("files", 5), uploadMultiple);
router.post("/compress", upload.single("file"), compressFile);
router.post("/merge", upload.array("files", 10), mergeFiles);

module.exports = router;

