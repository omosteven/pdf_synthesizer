const AudioToPdfReader = (props: { textData: String }) => {
  const { textData } = props;
  return (
    <section className="audio-to-pdf__reader">
      <div>
        <article>{textData}</article>
      </div>
    </section>
  );
};

export default AudioToPdfReader;
