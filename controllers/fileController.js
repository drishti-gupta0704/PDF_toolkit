
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