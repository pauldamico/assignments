import React, {useState} from "react";
export default function EditCarModal (props){

const [updateValue, setUpdateValue] = useState({make:"", color:""})


const editChangeHandler = (event)=>{
const {value, name} = event.target
setUpdateValue(prev=>({...prev, [name]:value}))
console.log(updateValue)
}

const carsMainState = (event)=>{
    event.preventDefault()
    props.updateCar(props._id, updateValue.make, updateValue.color )
    props.editSwitch()
}
    return(
        <div>
          <form
            onSubmit={carsMainState}
          >
            <h1>Type</h1>
            <input
          name = "make"
          value = {updateValue.make}
          type = "text"
          onChange = {editChangeHandler}

            ></input>
            <h1>Color</h1>
            <input
           name = "color"
           value = {updateValue.color}
           type = "text"
           onChange = {editChangeHandler}
            ></input>
            <button>Save</button>
          </form>
        </div>
      );
}