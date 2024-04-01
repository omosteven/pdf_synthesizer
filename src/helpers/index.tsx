// @ts-nocheck
import pdfToText from "react-pdftotext";

export const convertFileToBase64 = (
  file: File,
  callbackFunc?: Function,
  callbackError?: Function
) => {
  var reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onload = function () {
    callbackFunc?.(reader.result, file);
  };

  reader.onerror = function (error) {
    callbackError?.(error);
  };
};

export const extractText = (file: any, callback: Function) => {
  try {
    pdfToText(file)
      .then((text) => {
        callback(text, true);
      })
      .catch((error) => callback(text, false, error));
  } catch (e) {
    callback(text, false, e);
  }
};
