import "./ToolBox.scss";

const ToolBox = (props: {
  name: string;
  action: string;
  handlePickTool: Function;
}) => {
    
  const { name, action, handlePickTool } = props;

  return (
    <section className="tool-box" onClick={() => handlePickTool(action)}>
      <h3>{name}</h3>
    </section>
  );
};

export default ToolBox;
