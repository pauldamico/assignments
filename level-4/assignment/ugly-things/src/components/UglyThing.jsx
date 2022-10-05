import React, { useContext } from "react";
import Edit from "./Edit";
import { UglyContext} from "../uglyContext";

export default function UglyThing() {
  const {uglyList, deleteUglyItem, setUglyList } = useContext(UglyContext);
  const [editToggle, setEditToggle] = React.useState(false)
 
const toggleEditHandler =(id)=>{
    setUglyList(prev=>prev.map(item=>id === item._id ? {...item, value:!item.value} : {...item}))
console.log(uglyList)
}



  const test = uglyList.map((item) => (
    <div key={item._id}>
       { item.value === false &&<div>
      <h1 className="ugly-title">{item.title}</h1>
      <h1 className="ugly-description">{item.description}</h1>
      <img className="ugly-img" src={item.imgUrl} /></div> }
      { item.value === true &&<div>
      <Edit/></div> }

      <button onClick={()=>{toggleEditHandler(item._id)}}>{item.value ? "Save" : "Edit"}</button>
      <button onClick={()=>{deleteUglyItem(item._id)}}>Remove</button>
    </div>
  ));

  return <>{test}</>;
}
