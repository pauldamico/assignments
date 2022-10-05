import React, {useState, useContext} from "react"
import { UglyContext } from "../uglyContext"
import axios from "axios"
export default function Edit (props){
  const {setUglyList, uglyList, deleteUglyItem} = useContext(UglyContext)
  const [editThing, setEditThing] = useState({
    title:"",
    description: "",
    imgUrl:
      ""
  })



  const editChangeHandler = ()=>{
    const {name, value} = event.target
    setEditThing(prev=>({...prev, [name]:value}))

    console.log(editThing)
  }

const toggleEditHandler = (id) => {

  setEditThing(prev=>({...prev, title:props.item.title, description:props.item.description, imgUrl:props.item.imgUrl}))
  setUglyList((prev) =>
    prev.map((item) =>
      id === item._id
        ? {
            ...item,
            title:editThing.title,
            description:editThing.description,   
            imgUrl:editThing.imgUrl,             
            value: !item.value
          }
        : { ...item }
    )
  );
  axios.put(`https://api.vschool.io/pauldamico/thing/${id}`, editThing)
  .then(res=>res.data)
  .catch(err=>console.log(err))
  console.log(uglyList)
};

    return(<div className="main-edit-input-div">  
      {props.item.value === true &&
      <div className="edit-main-div">
<div>
  <nav className="edit-nav"><h1>Change Info</h1></nav>
          <label className="enter-url">Enter URL</label>
          <input
            className="url-input"
            name="imgUrl"
         value={editThing.imgUrl}
            type="text"
            onChange={editChangeHandler}
        
          />
        </div>
        <div>
          <label>Enter Title</label>
          <input
            className="title-input"
            name="title"
            value={editThing.title}
            type="text"
            onChange={editChangeHandler}
          />
        </div>
        <div>      
          <label>Description</label>
          <input
            className="description-input"
            name="description"
            value={editThing.description}
            type="text"
            onChange={editChangeHandler}
          />
        </div></div>}
        <div className="edit-button-div">
        <button className="save-button"
        onClick={() => {
          toggleEditHandler(props.item._id);
        }}
      >
        {props.item.value ? "Save" : "Edit"}
      </button>
      <button
      className ="remove-button"
        onClick={() => {
          deleteUglyItem(props.item._id);
        }}
      >
        Remove
      </button>
      </div>
    </div>)


}