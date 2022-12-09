import React, { useState, createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IssueContext } from "./IssueProvider";
import axios from "axios";

export const UserContext = createContext();
export default function UserProvider(props) {
  const navigate = useNavigate();
  const { getUserIssues, getAllIssues, setAllIssues, clearIssues } =
    useContext(IssueContext);
  const initValue = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "",
  };
  const [userInfo, setUserInfo] = useState(initValue);
  const [error, setError] = useState("")
 const { _id:userId} = userInfo.user

  function signUp(UserInfo) {
    axios
      .post("/auth/signup", UserInfo)
      .then((res) => {
        const { user, token } = res.data;
        user && localStorage.setItem("user", JSON.stringify(user));
        userInfo.token && localStorage.setItem("token", token);
       token && setUserInfo((prev) => ({ ...prev, user, token }));
      })
      .then((res) => userInfo.token && getUserIssues())
      .then((res) => userInfo.token && getAllIssues())
      .then((res) => navigate("/"))
      .catch((err) => console.log(err.response.data));
  }

  function login(UserInfo) {
    axios
      .post("/auth/login", UserInfo)
      .then((res) => {
        const { user, token } = res.data;
        user && localStorage.setItem("user", JSON.stringify(user));
        token && localStorage.setItem("token", token);
        setUserInfo((prev) => ({ ...prev, user, token }));
      })
      .then((res) => getUserIssues())
      .then((res) => getAllIssues())
      .then((res) => navigate("/"))
      .catch((err) => console.log(err.response.data));
  }

  function handleError (error){
setError(prev=>error)
  }

  useEffect(() => {
    {
      userInfo.token && getUserIssues();
      getAllIssues();
    }
  }, []);

  function clearUserInfo() {
    setUserInfo((prev) => ({ ...prev, user: {}, token: "" }));
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    clearUserInfo();
    clearIssues();
    navigate("/auth");
  }

  return (
    <UserContext.Provider
      value={{ ...userInfo, signUp, login, logout, userId }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
