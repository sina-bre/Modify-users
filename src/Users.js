import { useContext } from "react";
import { MainContext } from "./App";
import { Icon } from "@iconify/react";
import "./Users.css";
import { useNavigate } from "react-router-dom";
const Users = () => {
  const usersContext = useContext(MainContext);
  const toPascalCase = (str) =>
    (str.match(/[a-zA-Z0-9]+/g) || [])
      .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
      .join("");
  const filteredUsers = usersContext.state.data.filter((user) => {
    return user.name
      .toLocaleLowerCase()
      .includes(usersContext.state.searchField);
  });
  const navigate = useNavigate();
  return (
    <>
      <div
        className={`users-container ${usersContext.state.isDark && ["dark"]}`}
      >
        <div>
          <h2 className="users-head">Users</h2>
          <div className="search-user-div">
            <Icon
              icon="eva:search-fill"
              width="30"
              className={`search-user-icon ${
                usersContext.state.isDark && ["dark"]
              }`}
            />
            <input
              type="text"
              placeholder="Search your user"
              className={`search-user-input ${
                usersContext.state.isDark && ["dark"]
              }`}
              onChange={(e) => {
                usersContext.dispatch({
                  type: "setSearchField",
                  payload: e.target.value.toLocaleLowerCase(),
                });
              }}
            />
          </div>
        </div>
        <div
          className={`user-details-container ${
            usersContext.state.isDark && ["dark"]
          }`}
        >
          {filteredUsers.map((user, index) => (
            <>
              <div
                key={Math.floor(Math.random() * 999999) + 1000000}
                className="user-details-item-container"
              >
                <div className="user-details-item">
                  <div className="user-details-icon-div">
                    <Icon
                      icon="mingcute:user-4-fill"
                      width="45"
                      className="user-details-icon"
                      style={{
                        color: user.color,
                      }}
                    />
                  </div>
                  <div
                    className={`user-details-div ${
                      usersContext.state.isDark && ["dark"]
                    }`}
                  >
                    <p>
                      {toPascalCase(user.firstName)}{" "}
                      {toPascalCase(user.lastName)}
                    </p>
                  </div>
                </div>
                <div className="delete-user-div">
                  <Icon
                    icon="fa6-solid:trash"
                    width="12"
                    className="delete-user-icon"
                  />
                  <Icon
                    icon="fluent:notepad-edit-20-regular"
                    width="22"
                    className="edit-user-icon"
                    onClick={() => {
                      usersContext.dispatch({
                        type: "beforeModify",
                        index: index,
                      });
                      navigate("/modifyUser");
                    }}
                  />
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
export default Users;
