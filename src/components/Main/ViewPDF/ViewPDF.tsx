import { extractText } from "../../../helpers";
import AudioProcessor from "./AudioProcessor/AudioProcessor";
import "./ViewPDF.scss";
import { useState } from "react";

const ViewPDF = (props: { fileData?: any; actualFile?: File }) => {
  const { fileData, actualFile } = props;

  const [pdfText, setPdfText] = useState<string>("");

  extractText(actualFile, setPdfText);

  return (
    <div className="view-pdf">
      <section className="view-pdf__reader">
        <embed src={`${fileData}`} />
      </section>
      <AudioProcessor audioText={pdfText} />
    </div>
  );
};

export default ViewPDF;
