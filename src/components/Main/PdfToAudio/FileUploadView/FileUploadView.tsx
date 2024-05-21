import { useState } from "react";
import { FileInput } from "../../../ui";
import "./FileUploadView.scss";
import { convertFileToBase64 } from "../../../../helpers";

const FileUploadView = (props: { handlePreviewPDF: Function }) => {
  const { handlePreviewPDF } = props;
  const [errorMessage, setErrorMessage] = useState("");

  const handleUpload = (files: any) => {
    const file = files?.[0];

    convertFileToBase64(file, handlePreviewPDF, setErrorMessage);
  };

  return (
    <div className="file-upload-view">
      <h1>Read Your PDF Into Audio In Multiple Languages</h1>
      {errorMessage && <span>An Error occurred</span>}
      <FileInput
        labelText="Upload PDF"
        onChange={handleUpload}
        accept="application/pdf"
      />
    </div>
  );
};

export default FileUploadView;
