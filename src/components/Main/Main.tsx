import { useState } from "react";
import ToolsList from "./ToolsList/ToolsList";
import PdfToAudio from "./PdfToAudio/PdfToAudio";

import { PROCESSING_STAGES } from "./enum";

import "./Main.scss";
// import WebpageToAudio from "./WebpageToAudio/WebpageToAudio";
import AudioToPdf from "./AudioToPdf/AudioToPdf";
import DownloadWTAExtension from "./WebpageToAudio/DownloadWTAExtension/DownloadWTAExtension";
// import {Helmet} from "react-helmet";

const { CHOOSE_TOOL, WEB_TO_AUDIO, WEB_TO_PDF, PDF_TO_AUDIO, AUDIO_TO_PDF } =
  PROCESSING_STAGES;

const Main = () => {
  const [stage, setStage] = useState<any>(CHOOSE_TOOL);

  const handlePickTool = (pickedTool: string) => {
    setStage(pickedTool);
  };

  const isAppAnExtension = stage === WEB_TO_AUDIO || stage === WEB_TO_PDF;

  const renderBasedOnStage = () => {
    switch (stage) {
      case CHOOSE_TOOL:
        return <ToolsList handlePickTool={handlePickTool} />;
      case PDF_TO_AUDIO:
        return <PdfToAudio />;
      case WEB_TO_AUDIO:
      case WEB_TO_PDF:
        // return <WebpageToAudio />;
      return <DownloadWTAExtension />;
      case AUDIO_TO_PDF:
        return <AudioToPdf />;
      default:
        return <ToolsList handlePickTool={handlePickTool} />;
    }
  };

  return (
    <div className={isAppAnExtension ? "" : `main-view`}>
      {renderBasedOnStage()}
    </div>
  );
};

export default Main;
