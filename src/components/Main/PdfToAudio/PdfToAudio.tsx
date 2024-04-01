import { useState } from "react";
import { PDF_TO_AUDIO_STAGES } from "../enum";
import ViewUploadedPDF from "./ViewUploadedPDF/ViewUploadedPDF";
import FileUploadView from "./FileUploadView/FileUploadView";

const { PREVIEW_PDF, UPLOAD_PDF } = PDF_TO_AUDIO_STAGES;

const PdfToAudio = () => {
  const [stage, setStage] = useState<any>(UPLOAD_PDF);

  const [fileData, setFileData] = useState<any>();
  const [actualFile, setActualFile] = useState<File>();

  const handlePreviewPDF = (fileBase64: any, file: File) => {
    setActualFile(file);
    setFileData(fileBase64);
    setStage(PREVIEW_PDF);
  };

  const renderBasedOnStage = () => {
    switch (stage) {
      case UPLOAD_PDF:
        return <FileUploadView handlePreviewPDF={handlePreviewPDF} />;
      case PREVIEW_PDF:
        return <ViewUploadedPDF fileData={fileData} actualFile={actualFile} />;
      default:
        return "";
    }
  };

  return <>{renderBasedOnStage()}</>;
};

export default PdfToAudio;
