// @ts-nocheck

import { useSpeechSynthesis } from "react-speech-kit";

import { Button } from "../../../ui";

const AudioProcessor = (props: { audioText: string }) => {
  const { audioText } = props;

  const { speak } = useSpeechSynthesis();

  const playAudio = () => {
    speak({
      text: audioText,
    });
  };
  
  return (
    <section className="view-pdf__actions">
      <b onClick={playAudio}>Play Audio</b>
      <Button text="Download Audio" invertStyle />
    </section>
  );
};

export default AudioProcessor;
