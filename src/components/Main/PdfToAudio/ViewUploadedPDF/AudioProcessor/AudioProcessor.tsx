// @ts-nocheck

import { useSpeechSynthesis } from "react-speech-kit";

import { Button } from "../../../../ui";

const AudioProcessor = (props: { audioText: string }) => {
  const { audioText } = props;

  const { speak, cancel, speaking, voices } = useSpeechSynthesis();

  // supported,

  const playAudio = () => {
    speak({
      text: audioText,
      //   voice: {
      //     default: false,
      //     lang: "en-GB",
      //     localService: true,
      //     name: "Daniel",
      //     voiceURI: "Daniel",
      //   },
    });
  };

  console.log({ voices });

  const handleAudioAction = () => {
    speaking ? cancel() : playAudio();
  };

  return (
    <section className="view-uploaded-pdf__actions">
      <b onClick={handleAudioAction}>
        {speaking ? "Pause Audio" : "Play Audio"}
      </b>
      <Button text="Download Audio" invertStyle />
    </section>
  );
};

export default AudioProcessor;
