import { FileInput } from "../../ui";
import "./FileUploadView.scss";

const FileUploadView = (props: { handlePreviewPDF: Function }) => {
  const { handlePreviewPDF } = props;

  const handleUpload = (files: any) => {
    const file = files?.[0];
    // const getBase64 = convertFileToBase64(file);
    // handlePreviewPDF(getBase64)
    // console.log("ee", getBase64);
    // const reader = new FileReader();

    // reader.onload = (e: any) => {
    //   const data = e.target.result;
    //   handlePreviewPDF(data);
    // };

    var reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = function () {
      console.log(reader.result);
      handlePreviewPDF(reader.result, file);
    };

    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  return (
    <div className="file-upload-view">
      <h1>Read Your PDF Into Audio & Download It</h1>
      <FileInput
        labelText="Upload PDF"
        onChange={handleUpload}
        accept="application/pdf"
      />
    </div>
  );
};

export default FileUploadView;
