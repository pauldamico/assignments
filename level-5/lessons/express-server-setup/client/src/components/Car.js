import React, {useState} from "react";
import EditCarModal from "./EditCarModal";


export default function Car (props){
    const [edit, setEdit] = useState(false)
    const {deleteCar,_id, updateCar, make, color} = props


    const editSwitch = () =>{
        setEdit(!edit)
    }

    return<div>
        {edit === false &&
        <div>
<h1>{make}</h1>
<section>{color}</section>
<button onClick = {()=>{deleteCar(_id)}}>Delete</button>
<button onClick = {editSwitch}>Edit</button>
</div>
}
{edit === true &&
<div><EditCarModal editSwitch={editSwitch} _id={_id} updateCar={updateCar} /></div>}
    </div>
}