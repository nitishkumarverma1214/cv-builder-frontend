import html2pdf from "html2pdf.js";
export function generatePDF() {
  const element = document.getElementById("export-pdf");
  const opt = {
    margin: 0.5,
    filename: "cv.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  // html2pdf().set(opt).from(element).save();
  return html2pdf().set(opt).from(element).outputPdf("datauristring");
}
