// @ts-nocheck

import { useSpeechRecognition } from "react-speech-kit";

import { Button } from "../../../ui";

const AudioToPdfActions = (props: { setTextData: Function }) => {
  // const { setTextData } = props;

  const { listen, listening, stop, } = useSpeechRecognition({
    onResult: (result) => {
      console.log(result)
     setTimeout(()=>{

     })
    },
    onEnd:(result)=>{
      console.log('ended', result)
    }
  });



  const handleListener = () => {
    listening ? stop() : listen();
  };

  return (
    <section className="audio-to-pdf__actions">
      <span onClick={handleListener}>{listening ? "Stop" : "Listen"}</span>
      <span>Copy</span>
      <Button text="Download PDF" invertStyle />
    </section>
  );
};

export default AudioToPdfActions;
