export const savePdf = () => {
  console.log("save pdf");
  const element = document.getElementById("preview-container");
  console.log(element);
  const options = {
    jsPDF: {
      format: "a4",
    },
    html2canvas: { dpi, letterRendering: true, useCORS: true, logging: true },
    margin: 1,
    image: { type: "jpeg", quality: 1 },
    filename: "CV.pdf",
  };
  html2PDF().set(options).from(element).toPdf().save("myfile.pdf");
};
