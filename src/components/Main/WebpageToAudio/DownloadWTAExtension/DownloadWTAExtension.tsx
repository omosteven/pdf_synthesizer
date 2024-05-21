import { Button } from "../../../ui";

const DownloadWTAExtension = () => {
  return (
    <div
      className="file-upload-view"
      style={{
        height: "90vh",
        width: "90%",
        marginTop: "5vh",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h1>You can only use this feature as a browser extension</h1>
      <Button text="Download Extension" />
    </div>
  );
};

export default DownloadWTAExtension;
