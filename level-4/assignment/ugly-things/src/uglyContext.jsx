import React, { useState, useEffect } from "react";
import axios from "axios";

const UglyContext = React.createContext();

const UglyContextProvider = (props) => {
  
  const [uglyData, setUglyData] = useState({
    title:"",
    description: "",
    imgUrl:
      ""
  })
const [uglyList, setUglyList] = useState([])

useEffect(() => {
  axios
    .get("https://api.vschool.io/pauldamico/thing")
    .then(res=>setUglyList(prev=>([...res.data.map(newItems=>({...newItems, value:false}))])))
    .catch((err) => console.log("hi"));
}, []);


const uglySubmitHandler = (event)=>{
event.preventDefault()
postAPIData(uglyData)
setTimeout(getAPIData, 100)
setUglyData(prev=>({...prev, title:"", description:"", imgUrl:""}))
console.log(uglyList)
}

const uglyChangeHandler = (e)=>{
  const {name, value} = e.target
  setUglyData(prev=>({...prev, [name]:value}))
}

const deleteUglyItem=(id)=>{
  setUglyList(prev=>prev.filter(item=>item._id != id && {...item}))
  axios.delete(`https://api.vschool.io/pauldamico/thing/${id}`)
  .then(res=>console.log(res))
  .catch(err=>console.log(err))
  
}
function postAPIData (postItem){
  axios.post("https://api.vschool.io/pauldamico/thing/", postItem)
  .then(res=>res)
  .catch(err=>console.log(err))
}
function getAPIData (){
  axios.get("https://api.vschool.io/pauldamico/thing/")
  .then(res=>setUglyList(prev=>([...res.data.map(newItems=>({...newItems, value:false}))])))
  .catch(err=>console.log(err))
// console.log(uglyList.map(newItems=>({...newItems, value:false})))

}

  return (
    <UglyContext.Provider value={{uglyData:uglyData,  uglyList:uglyList, setUglyList:setUglyList, deleteUglyItem:deleteUglyItem, uglyChangeHandler:uglyChangeHandler, uglySubmitHandler:uglySubmitHandler}}>{props.children}</UglyContext.Provider>
  );
};

export { UglyContext, UglyContextProvider };
