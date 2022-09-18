import { useContext } from "react";
import { MainContext } from "./App";
import "./Layout.css";
const Layout = (props) => {
  const layoutContext = useContext(MainContext);
  return (
    <>
      <div
        className="header"
        style={{ backgroundColor: `${layoutContext.state.headerColor}` }}
      >
        <p>{layoutContext.state.headerText}</p>
      </div>
      {props.children}
      <div
        className="footer"
        style={{ backgroundColor: `${layoutContext.state.footerColor}` }}
      >
        <p>{layoutContext.state.footerText}</p>
      </div>
    </>
  );
};

export default Layout;
