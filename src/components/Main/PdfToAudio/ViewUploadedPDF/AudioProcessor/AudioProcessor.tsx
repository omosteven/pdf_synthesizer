import { useCallback, useEffect, useMemo, useState } from "react";

import Select from "../../../../ui/Select";
import { LANGUAGES, SPEECH_STATUSES } from "../../../enum";

const { SPEAKING, PAUSED, IDLE } = SPEECH_STATUSES;

const AudioProcessor = (props: { audioText: string }) => {
  const { audioText } = props;

  const utterance = useMemo(() => new SpeechSynthesisUtterance(), []);

  const [voiceSpeed, setVoiceSpeed] = useState(1);
  const [voiceName, setVoiceName] = useState<SpeechSynthesisVoice>();

  const [speechStatus, setSpeechStatus] = useState(IDLE);
  const [selectedLangNo, selectLangNo] = useState(0);

  const initializeVoice = useCallback(() => {
    utterance.text = audioText;
    utterance.rate = voiceSpeed;
    if (voiceName) {
      utterance.voice = voiceName;
    }
  }, [audioText, voiceSpeed, voiceName, utterance]);

  const playAudio = () => {
    initializeVoice();
    speechSynthesis.speak(utterance);
    setSpeechStatus(SPEAKING);
  };

  const pauseAudio = () => {
    initializeVoice();
    speechSynthesis.pause();
    setSpeechStatus(PAUSED);
  };

  const resumeAudio = () => {
    initializeVoice();
    speechSynthesis.resume();
    setSpeechStatus(SPEAKING);
  };

  const startOver = () => {
    speechSynthesis.cancel();
    initializeVoice();
    speechSynthesis.speak(utterance);
    setSpeechStatus(SPEAKING);
  };

  const cancelAudio = () => {
    speechSynthesis.cancel();
    setSpeechStatus(IDLE);
  };

  const handleAudio = () => {
    if (speechStatus === PAUSED) {
      resumeAudio();
    } else if (speechStatus === SPEAKING) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  const handleAudAction = () => {
    if (speechStatus === SPEAKING) {
      cancelAudio();
    } else {
      startOver();
    }
  };

  useEffect(() => {
    utterance.onend = (event) => {
      setSpeechStatus(IDLE);
    };
    // eslint-disable-next-line
  }, [utterance]);

  useEffect(() => {
    speechSynthesis.cancel();
    setSpeechStatus(IDLE);
    // eslint-disable-next-line
  }, [voiceName, voiceSpeed]);

  useEffect(() => {
    speechSynthesis.cancel();
    // eslint-disable-next-line
  }, [audioText]);

  const getSpeechVoice = (speechVoice: String) => {
    return speechSynthesis
      .getVoices()
      ?.find?.(({ name, lang }) => `${name}(${lang})` === speechVoice);
  };

  const handleSelectLang = (voiceNo: number) => {
    selectLangNo(voiceNo);
    const { speaker, lang }: any = LANGUAGES[voiceNo]?.variances[0];
    setVoiceName(getSpeechVoice(`${speaker}(${lang})`));
  };

  return (
    <section className="view-uploaded-pdf__actions">
      <div className="view-uploaded-pdf__actions__speak-actions">
        <b onClick={handleAudio}>
          {speechStatus === SPEAKING ? "Pause Audio" : "Play Audio"}
        </b>
        <p
          onClick={handleAudAction}
          className={`${speechStatus === SPEAKING ? "cancel" : ""}`}
        >
          {speechStatus === SPEAKING ? "Cancel" : "Start Over"}
        </p>
      </div>

      <Select
        options={LANGUAGES?.map(({ name }, index) => ({
          value: String(index),
          label: name,
        }))}
        onChange={(index: String) => handleSelectLang(Number(index))}
      />
      <Select
        options={LANGUAGES[selectedLangNo].variances?.map(
          ({ name, lang, speaker }: any) => ({
            value: `${speaker}(${lang})`,
            label: name,
          })
        )}
        onChange={(voice: String) => setVoiceName(getSpeechVoice(voice))}
      />
      <div className="view-uploaded-pdf__actions__volume">
        <input
          type="range"
          min={"0"}
          max={"3"}
          step={"0.3"}
          value={voiceSpeed}
          onChange={(e) => setVoiceSpeed(Number(e?.target?.value))}
        />
        <label>{voiceSpeed}x</label>
      </div>

      {/* <Button text="Download Audio" invertStyle /> */}
    </section>
  );
};

export default AudioProcessor;
