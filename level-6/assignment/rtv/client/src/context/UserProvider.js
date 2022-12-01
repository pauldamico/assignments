import React, { useState, createContext, useContext } from "react";
import {IssueContext} from './IssueProvider'
import axios from "axios";

export const UserContext = createContext();
export default function UserProvider(props) {
    const {getUserIssues} = useContext(IssueContext)
  const initValue = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || ""
  };
  const [userInfo, setUserInfo] = useState(initValue);

  function signUp(UserInfo) {
    axios
      .post("/auth/signup", UserInfo)
      .then((res) => {
        const { user, token } = res.data;
        user && localStorage.setItem("user", JSON.stringify(user));
        token && localStorage.setItem("token", token);
        setUserInfo((prev) => ({ ...prev, user, token }));
      })
      .catch((err) => console.log(err));
      getUserIssues()

  }

  function login(UserInfo) {
  
        axios
          .post("/auth/login", UserInfo)
          .then((res) => {
            const { user, token } = res.data;
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("token", token);
            setUserInfo((prev) => ({ ...prev, user, token }));
          })
          .catch((err) => console.log(err));
          getUserIssues()       

  }

  

  return (
    <UserContext.Provider value={{ ...userInfo, signUp, login }}>
      {props.children}
    </UserContext.Provider>
  );
}
