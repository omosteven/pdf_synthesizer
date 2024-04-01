const PDFViewer = (props: { fileData: string }) => {
  const { fileData } = props;
  return (
    <section className="view-uploaded-pdf__reader">
      <embed src={`${fileData}`} />
    </section>
  );
};

export default PDFViewer;
