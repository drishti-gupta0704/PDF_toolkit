
const express = require("express");
const router = express.Router();

const upload = require("../middleware/uploadMiddleware");
const {
  uploadSingle,
  uploadMultiple, 
  mergeFiles,
  compressFile, 
  summarizePDF,  
} = require("../controllers/fileController");


router.post("/upload", upload.single("file"), uploadSingle);

router.post("/upload-multiple", upload.array("files", 5), uploadMultiple);
router.post("/compress", upload.single("file"), compressFile);
router.post("/merge", upload.array("files", 10), mergeFiles);
router.post("/summarize", upload.single("file"), summarizePDF);

module.exports = router;

