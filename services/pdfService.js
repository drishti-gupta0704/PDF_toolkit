
const { PDFDocument } = require("pdf-lib");
const fs = require("fs");
const path = require("path");

async function mergePDFs(files) {
  const mergedPdf = await PDFDocument.create();

  for (let file of files) {
    const filePath = file.path;
    const pdfBytes = fs.readFileSync(filePath);

    const pdf = await PDFDocument.load(pdfBytes);

    const pages = await mergedPdf.copyPages(
      pdf,
      pdf.getPageIndices()
    );

    pages.forEach((page) => mergedPdf.addPage(page));
  }

  // output file name
  const outputFileName = `merged-${Date.now()}.pdf`;
  const outputPath = path.join("outputs", outputFileName);

  const mergedPdfBytes = await mergedPdf.save();

  fs.writeFileSync(outputPath, mergedPdfBytes);

  return outputFileName;
}

module.exports = {
  mergePDFs,
};