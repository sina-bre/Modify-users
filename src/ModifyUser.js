import { useContext } from "react";
import { MainContext } from "./App";
import { Icon } from "@iconify/react";
import "./ModifyUser.css";
import { useEffect } from "react";

const ModifyUser = () => {
  const modifyUserContext = useContext(MainContext);
  useEffect(() => {
    console.log(modifyUserContext.state.data);
  }, [modifyUserContext.state.data]);

  return (
    <>
      {modifyUserContext.state.activeModify ? (
        <div
          className={`modify-user-container ${
            modifyUserContext.state.isDark && ["dark"]
          }`}
        >
          <div>
            <h2 className="modify-user-head">Modify User</h2>
            <h5
              className={`modify-user-haed-details ${
                modifyUserContext.state.isDark && ["dark"]
              }`}
            >
              Please modify your selected user
            </h5>
          </div>
          <form className="modify-user-input">
            <select
              className={`modify-user-selsct ${
                modifyUserContext.state.isDark && ["dark"]
              }`}
              onChange={(e) => {
                const output = e.target.value.split(",");
                modifyUserContext.dispatch({
                  type: "setFirstName",
                  payload: output[0],
                });
                modifyUserContext.dispatch({
                  type: "setLastName",
                  payload: output[1],
                });
                // modifyUserContext.dispatch({
                //   type: "beforeModify",
                //   index: output[2],
                // });
              }}
            >
              {modifyUserContext.state.data.map((user, index) => (
                <option
                  key={index - 1000}
                  className={`modify-user-options ${
                    modifyUserContext.state.isDark && ["dark"]
                  }`}
                  value={[user.firstName, user.lastName, index]}
                >
                  {user.firstName} {user.lastName}
                </option>
              ))}
            </select>
          </form>
          <div className="modify-user-input">
            <Icon
              icon="fluent:person-edit-20-filled"
              width="25"
              className="modify-user-input-icon"
            />
            <input
              type="text"
              className={`modify-first-name-input ${
                !modifyUserContext.state.isModifyFirstNameValid && ["invalid"]
              } ${modifyUserContext.state.isDark && ["dark"]}`}
              placeholder="Modify first name"
              value={modifyUserContext.state.firstName}
              onChange={(e) => {
                if (e.target.value.trim().length > 0) {
                  modifyUserContext.dispatch({
                    type: "setIsModifyFisrtNameValid",
                    payload: true,
                  });
                }
                modifyUserContext.dispatch({
                  type: "setFirstName",
                  payload: e.target.value,
                });
              }}
            />
          </div>
          <div className="modify-user-input">
            <Icon
              icon="fluent:people-edit-20-filled"
              width="25"
              className="modify-user-input-icon"
            />
            <input
              type="text"
              className={`modify-last-name-input ${
                !modifyUserContext.state.isModifyLastNameValid && ["invalid"]
              } ${modifyUserContext.state.isDark && ["dark"]}`}
              placeholder="Modify first name"
              value={modifyUserContext.state.lastName}
              onChange={(e) => {
                if (e.target.value.trim().length > 0) {
                  modifyUserContext.dispatch({
                    type: "setIsModifyLastNameValid",
                    payload: true,
                  });
                }
                modifyUserContext.dispatch({
                  type: "setLastName",
                  payload: e.target.value,
                });
              }}
            />
          </div>
          <div className="modify-user-input">
            <button
              className="modify-user-btn"
              onClick={() => {
                if (modifyUserContext.state.firstName.trim().length == 0) {
                  modifyUserContext.dispatch({
                    type: "setIsModifyFisrtNameValid",
                    payload: false,
                  });
                }
                if (modifyUserContext.state.lastName.trim().length == 0) {
                  modifyUserContext.dispatch({
                    type: "setIsModifyLastNameValid",
                    payload: false,
                  });
                }
                if (
                  modifyUserContext.state.firstName.trim().length == 0 ||
                  modifyUserContext.state.lastName.trim().length == 0
                ) {
                  return;
                }
                modifyUserContext.dispatch({ type: "modify" });
                modifyUserContext.dispatch({ type: "clearAddUser" });
              }}
            >
              Modify user
            </button>
          </div>
        </div>
      ) : (
        <div
          className={`modify-user-container ${
            modifyUserContext.state.isDark && ["dark"]
          }`}
        >
          <div>
            <h2 className="modify-user-head">Modify User</h2>
            <h5
              className={`modify-user-haed-details ${
                modifyUserContext.state.isDark && ["dark"]
              }`}
            >
              Please modify your selected user
            </h5>
          </div>
        </div>
      )}
    </>
  );
};
export default ModifyUser;
