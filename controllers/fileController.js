
const { mergePDFs,compressPDF, extractText,
  summarizeText } = require("../services/pdfService");

exports.uploadSingle = (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    res.status(200).json({
      message: "File uploaded successfully",
      file: req.file,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.uploadMultiple = (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "No files uploaded" });
    }

    res.status(200).json({
      message: "Files uploaded successfully",
      files: req.files,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



exports.mergeFiles = async (req, res) => {
  try {
    if (!req.files || req.files.length < 2) {
      return res.status(400).json({
        message: "Upload at least 2 PDF files",
      });
    }

    const outputFileName = await mergePDFs(req.files);

    res.status(200).json({
      message: "PDFs merged successfully",
      downloadUrl: `http://localhost:4000/outputs/${outputFileName}`,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


exports.compressFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded",
      });
    }

    const quality = req.body.quality || "screen";

    const outputFileName = await compressPDF(req.file.path, quality);

    res.status(200).json({
      message: "PDF compressed successfully",
      downloadUrl: `http://localhost:4000/outputs/${outputFileName}`,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};





exports.summarizePDF = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded",
      });
    }

    const text = await extractText(req.file.path);
    const summary = await summarizeText(text);

    res.status(200).json({
      message: "PDF summarized successfully",
      summary,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};