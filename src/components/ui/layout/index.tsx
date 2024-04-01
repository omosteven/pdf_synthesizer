import "./Layout.scss";
import { ReactNode } from "react";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Layout = (props: { children?: ReactNode }) => {
  const { children } = props;

  return (
    <>
      <main>{children}</main>
      {/* <ToastContainer /> */}
    </>
  );
};

export default Layout;
