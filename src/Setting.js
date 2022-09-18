import "./Setting.css";
import { MainContext } from "./App";
import { useContext } from "react";
const Setting = () => {
  const settingContext = useContext(MainContext);
  const themeChange = (e) => {
    console.log(e.target.value);
    settingContext.dispatch({ type: "setTheme" });
  };
  return (
    <>
      <div
        className={`setting-container ${
          settingContext.state.isDark && ["dark"]
        }`}
      >
        <div>
          <h2 className="setting-head">Setting</h2>
          <h5
            className={`setting-head-details ${
              settingContext.state.isDark && ["dark"]
            }`}
          >
            You can change your setting
          </h5>
        </div>

        <div className="theme-setting">
          <div className="theme-title-div">
            <h3
              className={`themes-title ${
                settingContext.state.isDark && ["dark"]
              }`}
            >
              Theme:
            </h3>
          </div>
          <div className="theme-label-div" onChange={themeChange}>
            <input
              type="radio"
              value={false}
              name="theme"
              checked={settingContext.state.isDark === false}
            />
            <label
              className={`themes-label ${
                settingContext.state.isDark && ["dark"]
              }`}
              htmlFor="light"
            >
              Light
            </label>
            <input
              type="radio"
              value={true}
              name="theme"
              checked={settingContext.state.isDark === true}
            />
            <label
              className={`themes-label ${
                settingContext.state.isDark && ["dark"]
              }`}
              htmlFor="dark"
            >
              Dark
            </label>
          </div>
        </div>
        <div className="change-header-text-div">
          <h3
            className={`change-header-text-label ${
              settingContext.state.isDark && ["dark"]
            }`}
          >
            Header text:
          </h3>
          <input
            type="text"
            className={`change-header-text-input ${
              settingContext.state.isDark && ["dark"]
            }`}
            value={settingContext.state.headerText}
            onChange={(e) => {
              settingContext.dispatch({
                type: "setHeaderText",
                payload: e.target.value,
              });
            }}
          />
        </div>
        <div className="change-footer-text-div">
          <h3
            className={`change-footer-text-label ${
              settingContext.state.isDark && ["dark"]
            }`}
          >
            Footer text:
          </h3>
          <input
            type="text"
            className={`change-footer-text-input ${
              settingContext.state.isDark && ["dark"]
            }`}
            value={settingContext.state.footerText}
            onChange={(e) => {
              settingContext.dispatch({
                type: "setFooterText",
                payload: e.target.value,
              });
            }}
          />
        </div>
        <div className="change-header-color-div">
          <h3
            className={`change-header-color-label ${
              settingContext.state.isDark && ["dark"]
            }`}
          >
            Header color:
          </h3>
          <input
            type="color"
            className="change-header-color-input"
            onChange={(e) => {
              settingContext.dispatch({
                type: "setHeaderColor",
                payload: e.target.value,
              });
            }}
          />
        </div>
        <div className="change-footer-color-div">
          <h3
            className={`change-footer-color-label ${
              settingContext.state.isDark && ["dark"]
            }`}
          >
            Footer color:
          </h3>
          <input
            type="color"
            className="change-footer-color-input"
            onChange={(e) => {
              settingContext.dispatch({
                type: "setFooterColor",
                payload: e.target.value,
              });
            }}
          />
        </div>
      </div>
    </>
  );
};
export default Setting;
