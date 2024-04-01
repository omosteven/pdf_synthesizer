import { extractText } from "../../../../helpers";
import AudioProcessor from "./AudioProcessor/AudioProcessor";
import PDFViewer from "../../commonUI/PDFViewer/PDFViewer";
import "./ViewUploadedPDF.scss";
import { useEffect, useState } from "react";
import { STATUSES } from "../../enum";
import { ErrorView } from "../../../ui";

const { SUCCESS, ERROR } = STATUSES;

const ViewUploadedPDF = (props: { fileData?: any; actualFile?: File }) => {
  const { fileData, actualFile } = props;
  const [status, setStatus] = useState("");
  const [pdfText, setPdfText] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState("");

  const renderBasedOnStatus = () => {
    switch (status) {
      case SUCCESS:
        return (
          <>
            <PDFViewer fileData={fileData} />
            <AudioProcessor audioText={pdfText} />
          </>
        );
      case ERROR:
        return <ErrorView message={errorMessage} />;
      default:
        return "";
    }
  };

  const resolvePDFTextExtraction = (text: string, isSuccess: boolean) => {
    setStatus(isSuccess ? SUCCESS : ERROR);
    setErrorMessage(isSuccess ? "" : "An error occurred");
    setPdfText(text);
  };

  useEffect(() => {
    extractText(actualFile, resolvePDFTextExtraction);
  }, [actualFile]);

  return <div className="view-uploaded-pdf">{renderBasedOnStatus()}</div>;
};

export default ViewUploadedPDF;
