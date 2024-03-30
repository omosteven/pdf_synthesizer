// @ts-nocheck
import pdfToText from "react-pdftotext";

export const convertFileToBase64 = (file: File) => {
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    return reader.result;
    // console.log(reader.result);
  };
  reader.onerror = function (error) {
    console.log("Error: ", error);
  };
  return reader;
};

export const extractText = (file: any, setPdfText: Function) => {
  pdfToText(file)
    .then((text) => setPdfText(text))
    .catch((error) => console.error("Failed to extract text from pdf"));
};
