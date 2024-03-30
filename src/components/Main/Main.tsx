import { useState } from "react";
import FileUploadView from "./FileUploadView/FileUploadView";
import "./Main.scss";
import ViewPDF from "./ViewPDF/ViewPDF";
import { PDF_PROCESSING_STAGES } from "./enum";

const { PREVIEW_PDF, UPLOAD_PDF } = PDF_PROCESSING_STAGES;

const Main = () => {
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
        return <ViewPDF fileData={fileData} actualFile={actualFile} />;
      default:
        return "";
    }
  };

  return <div className="main-view">{renderBasedOnStage()}</div>;
};

export default Main;
