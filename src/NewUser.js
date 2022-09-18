import { useContext, useEffect } from "react";
import "./NewUser.css";
import { MainContext } from "./App";
import { Icon } from "@iconify/react";
const NewUser = () => {
  const newUserContext = useContext(MainContext);
  useEffect(() => {
    console.log(newUserContext.state.data);
    console.log(newUserContext.state.unseenCount);
  }, [newUserContext.state.data]);
  return (
    <>
      <div
        className={`add-user-countainer ${
          newUserContext.state.isDark && ["dark"]
        }`}
      >
        <div>
          <h2 className="new-user-head">New User</h2>
          <h5
            className={`new-user-haed-details ${
              newUserContext.state.isDark && ["dark"]
            }`}
          >
            Please Add your new user
          </h5>
        </div>

        <div className="new-user-input">
          <Icon icon="fa6-solid:user-large" className="new-user-input-icon" />
          <input
            className={`first-name-input ${
              !newUserContext.state.isFirstNameValid && ["invalid"]
            } ${newUserContext.state.isDark && ["dark"]}`}
            type="text"
            placeholder="First name"
            value={newUserContext.state.firstName}
            onChange={(e) => {
              if (e.target.value.trim().length > 0) {
                newUserContext.dispatch({
                  type: "setIsFirstNameValid",
                  payload: true,
                });
              }
              newUserContext.dispatch({
                type: "setFirstName",
                payload: e.target.value,
              });
            }}
          />
        </div>
        <div className="new-user-input">
          <Icon icon="fa6-solid:user-group" className="new-user-input-icon" />
          <input
            className={`last-name-input ${
              !newUserContext.state.isLastNameValid && ["invalid"]
            } ${newUserContext.state.isDark && ["dark"]}`}
            type="text"
            placeholder="Last name"
            value={newUserContext.state.lastName}
            onChange={(e) => {
              if (e.target.value.trim().length > 0) {
                newUserContext.dispatch({
                  type: "setIsLastNameValid",
                  payload: true,
                });
              }
              newUserContext.dispatch({
                type: "setLastName",
                payload: e.target.value,
              });
            }}
          />
        </div>
        <div className="new-user-input">
          <button
            className="add-user-btn"
            onClick={() => {
              if (newUserContext.state.firstName.trim().length == 0) {
                newUserContext.dispatch({
                  type: "setIsFirstNameValid",
                  payload: false,
                });
              }
              if (newUserContext.state.lastName.trim().length == 0) {
                newUserContext.dispatch({
                  type: "setIsLastNameValid",
                  payload: false,
                });
              }
              if (
                newUserContext.state.firstName.trim().length == 0 ||
                newUserContext.state.lastName.trim().length == 0
              ) {
                return;
              }

              newUserContext.dispatch({ type: "setId" });
              newUserContext.dispatch({ type: "setColor" });
              newUserContext.dispatch({ type: "setData" });
              newUserContext.dispatch({ type: "clearAddUser" });
              newUserContext.dispatch({ type: "setUnseenCount" });
            }}
          >
            Add user
          </button>
        </div>
      </div>
    </>
  );
};

export default NewUser;
