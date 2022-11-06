import { BountyContext } from "../bountyContext"
import BountyEditModal from "./BountyEditModal"
import React, {useContext, useState} from "react"
export default function Bounty  (props) {

    const{deleteBounty, updateBounty} = useContext(BountyContext)
const {firstName, lastName, bountyAmount, living, type, _id} = props

const[editToggle, setEditToggle] = useState(false)


const editToggler = () =>{
    setEditToggle(!editToggle)
}


    return(
        <div>
        {!editToggle ?<div>
           <section>Bounty Name: <span>{firstName}  </span><span>{lastName} </span></section> 
           <section>Type: {type}</section>
           <section>Bounty Amount: {bountyAmount}</section>
           <section>Living: {living ? "Alive" : "Dead"}</section>
           <button onClick={editToggler}>Edit</button>
           <button onClick={()=>{deleteBounty(_id)}}>Delete</button>
        </div>
        :
        <div>
            <BountyEditModal {...props} editToggler={editToggler} />
        </div>}
        </div>
    )
}