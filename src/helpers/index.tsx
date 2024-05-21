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

export const groupBySentences = (text) => {
  const sentences = [];
  let sentence = "";
  let groupedWords = text?.split(" ");
  let exemptions = ["Dr.", "Mr.", "Mrs.", "Miss."];

  for (let i = 0; i < groupedWords?.length; i++) {
    let word = groupedWords[i];
    sentence += `${word} `;
    if (
      (word[word?.length - 1] === "." &&
        exemptions?.includes(word) === false) ||
      i === groupedWords?.length - 1
    ) {
      sentences.push(sentence);
      sentence = "";
    }
  }

  return sentences;
};
