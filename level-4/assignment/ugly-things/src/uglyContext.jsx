import React, { useState, useEffect } from "react";
import axios from "axios";

const UglyContext = React.createContext();

const UglyContextProvider = (props) => {
  const [uglyData, setUglyData] = useState({
    title: "",
    description: "",
    imgUrl:
      ""
  })

const [uglyList, setUglyList] = useState([])

const uglySubmitHandler = (event)=>{
event.preventDefault()
setUglyList(prev=>([...prev, {...uglyData}]))
setUglyData(prev=>({...prev, title:"", description:"", imgUrl:""}))
}

const uglyChangeHandler = (e)=>{
  const {name, value} = e.target
  setUglyData(prev=>({...prev, [name]:value}))

}

  useEffect(() => {
    axios
      .get("https://api.vschool.io/pauldamico/thing")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <UglyContext.Provider value={{uglyData:uglyData,  uglyList:uglyList, uglyChangeHandler:uglyChangeHandler, uglySubmitHandler:uglySubmitHandler}}>{props.children}</UglyContext.Provider>
  );
};

export { UglyContext, UglyContextProvider };
