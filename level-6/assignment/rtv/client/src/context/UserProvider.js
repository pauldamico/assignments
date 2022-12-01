import React, { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {IssueContext} from './IssueProvider'
import axios from "axios";

export const UserContext = createContext();
export default function UserProvider(props) {
    const navigate = useNavigate()
    const {getUserIssues, getAllIssues, setAllIssues} = useContext(IssueContext)
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
      .then(res=>getUserIssues())
      .then(res=>  getAllIssues())
      .then(res=>  navigate('/'))
      .catch((err) => console.log(err));
   
    //   getUserIssues()
    //   getAllIssues()

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
          .then(res=>getUserIssues())
          .then(res=>  getAllIssues())
          .then(res=>  navigate('/'))
          .catch((err) => console.log(err));
      
        //   getUserIssues()
        //   getAllIssues()

  }
function logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUserInfo(initValue)   
    navigate('/auth')
}
  

  return (
    <UserContext.Provider value={{ ...userInfo, signUp, login, logout }}>
      {props.children}
    </UserContext.Provider>
  );
}
