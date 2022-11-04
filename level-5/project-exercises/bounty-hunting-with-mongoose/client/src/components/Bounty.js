import { BountyContext } from "../bountyContext"
import React, {useContext} from "react"
export default function Bounty  (props) {

    const{deleteBounty} = useContext(BountyContext)

const {firstName, lastName, bountyAmount, living, type, _id} = props
    return(
        <div>
           <section>Bounty Name: <span>{firstName}  </span><span>{lastName} </span></section> 
           <section>Type: {type}</section>
           <section>Bounty Amount: {bountyAmount}</section>
           <section>Living: {living ? "Alive" : "Dead"}</section>
           <button onClick={()=>{deleteBounty(_id)}}>Edit</button>
           <button onClick={()=>{deleteBounty(_id)}}>Delete</button>
        </div>
    )
}