import { useState } from "react";
import "./AudioToPdf.scss";
import AudioToPdfActions from "./AudioToPdfActions/AudioToPdfActions";
import AudioToPdfReader from "./AudioToPdfReader/AudioToPdfReader";

const AudioToPdf = () => {
  const [textData, setTextData] = useState("");

  return (
    <div className="audio-to-pdf">
      <AudioToPdfReader textData={textData} />
      <AudioToPdfActions setTextData={setTextData} />
    </div>
  );
};

export default AudioToPdf;
