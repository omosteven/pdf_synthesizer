import ToolBox from "./ToolBox/ToolBox";
import "./ToolsList.scss";
import { TOOLSLIST } from "../enum";

const ToolsList = (props: { handlePickTool: Function }) => {
  const { handlePickTool } = props;
  return (
    <div className="tools-list">
      <h1>Pick A Tool To Use</h1>
      <section className="tools-list__boxes">
        {TOOLSLIST?.map((item, i) => (
          <ToolBox key={i} {...item} handlePickTool={handlePickTool} />
        ))}
      </section>
      <p>
        <strong>Sign Up</strong> or <strong>Login</strong> to save progress
      </p>
    </div>
  );
};

export default ToolsList;
