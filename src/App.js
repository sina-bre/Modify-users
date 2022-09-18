import "./App.css";
import { createContext } from "react";
import { useReducer } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Users from "./Users";
import NewUser from "./NewUser";
import Setting from "./Setting";
import ModifyUser from "./ModifyUser";
import Layout from "./Layout";
export const MainContext = createContext();
const initial = {
  firstName: "",
  lastName: "",
  name: "",
  id: "",
  color: "",
  seen: false,
  unseenCount: 0,
  activeModify: false,
  isFirstNameValid: true,
  isLastNameValid: true,
  isModifyFirstNameValid: true,
  isModifyLastNameValid: true,
  data: [],
  dataIndex: 0,
  isDark: false,
  customThemes: [],
  themeIndex: 0,
  footerText: "Made by SINA 2022",
  headerText: "Wellcome to my app",
  footerColor: "",
  headerColor: "",
  searchField: "",
  modifyIndex: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "setFirstName":
      return { ...state, firstName: action.payload };
    case "setLastName":
      return { ...state, lastName: action.payload };
    case "setId":
      return {
        ...state,
        id: Math.floor(Math.random() * 999999) + 1000000,
      };
    case "setColor":
      return {
        ...state,
        color: Math.floor(Math.random() * 16777215).toString(16),
      };
    case "setData":
      const obj = {
        firstName: state.firstName,
        lastName: state.lastName,
        name: state.firstName + state.lastName,
        id: state.id,
        color: state.color,
        seen: false,
      };
      return { ...state, activeModify: true, data: [...state.data, obj] };
    case "clearAddUser":
      return {
        ...state,
        firstName: "",
        lastName: "",
      };
    case "setUnseenCount":
      let count = 0;
      state.data.forEach((element) => {
        if (!element.seen) {
          count++;
        }
      });
      return {
        ...state,
        unseenCount: count,
      };
    case "setSearchField":
      return {
        ...state,
        searchField: action.payload,
      };
    case "beforeModify":
      return {
        ...state,
        firstName: state.data[action.index].firstName,
        lastName: state.data[action.index].lastName,
        modifyIndex: action.index,
      };
    case "modify":
      const obj2 = {
        ...state.data[state.modifyIndex],
        firstName: state.firstName,
        lastName: state.lastName,
        name: state.firstName + state.lastName,
      };
      state.data.splice(state.modifyIndex, 1, obj2);
      return {
        ...state,
        data: state.data,
      };
    case "setIsFirstNameValid":
      return {
        ...state,
        isFirstNameValid: action.payload,
      };
    case "setIsLastNameValid":
      return {
        ...state,
        isLastNameValid: action.payload,
      };
    case "setIsModifyFisrtNameValid":
      return {
        ...state,
        isModifyFirstNameValid: action.payload,
      };
    case "setIsModifyLastNameValid":
      return {
        ...state,
        isModifyLastNameValid: action.payload,
      };
    case "setTheme":
      return {
        ...state,
        isDark: !state.isDark,
      };
    case "setHeaderText":
      return {
        ...state,
        headerText: action.payload,
      };
    case "setFooterText":
      return {
        ...state,
        footerText: action.payload,
      };
    case "setHeaderColor":
      return {
        ...state,
        headerColor: action.payload,
      };
    case "setFooterColor":
      return {
        ...state,
        footerColor: action.payload,
      };
  }
};
const App = () => {
  const [state, dispatch] = useReducer(reducer, initial);
  return (
    <div className={`body ${state.isDark && ["dark"]}`}>
      <MainContext.Provider value={{ state: state, dispatch: dispatch }}>
        <Layout>
          <div className={`navbar-div ${state.isDark && ["dark"]}`}>
            <ul className={`navbar ${state.isDark && ["dark"]}`}>
              <li>
                <Link
                  to="users"
                  className={`nav-items ${state.isDark && ["dark"]}`}
                >
                  Users
                </Link>
              </li>
              <li>
                <Link
                  to="newUser"
                  className={`nav-items ${state.isDark && ["dark"]}`}
                >
                  Add user
                </Link>
              </li>
              <li>
                <Link
                  to="modifyUser"
                  className={`nav-items ${state.isDark && ["dark"]}`}
                >
                  Modify user
                </Link>
              </li>
              <li>
                <Link
                  to="setting"
                  className={`nav-items ${state.isDark && ["dark"]}`}
                >
                  Setting
                </Link>
              </li>
            </ul>
          </div>
          <Routes>
            <Route path="/users" element={<Users />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/modifyUser" element={<ModifyUser />} />
          </Routes>
        </Layout>
      </MainContext.Provider>
    </div>
  );
};

export default App;
