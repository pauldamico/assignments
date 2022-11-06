import React, {useState, useContext} from "react"
import { BountyContext } from "../bountyContext"
export default function BountyEditModal (props) {

    const {updateBounty} = useContext(BountyContext)

    const [updatedBounty, setUpdatedBounty] = useState({ firstName: props.firstName,
    lastName: props.lastName,
    living: props.living,
    bountyAmount: props.bountyAmount,
    type: props.type})

    const bountyChangeHandler = (event) =>{
        const {name, value, type, checked} = event.target
        setUpdatedBounty(prev=>({...prev, [name]:type === "checkbox" ? checked :value}))
        console.log(updateBounty)
    }

    const updateBountyState = (event) => {
        event.preventDefault()
        updateBounty(updatedBounty.firstName, updatedBounty.lastName, updatedBounty.living, updatedBounty.bountyAmount, updatedBounty.type, props._id)
        props.editToggler()
    }
    

    return(
        <div>
              <form onSubmit={updateBountyState}>
            <label>First Name: </label><input name="firstName" value={updatedBounty.firstName} type="text" onChange={bountyChangeHandler}/>
             <label>Last Name: </label><input name="lastName" value={updatedBounty.lastName} type="text" onChange={bountyChangeHandler}/>
             <label>Bounty Living: </label><input name="living" value={updatedBounty.living} type="text" onChange={bountyChangeHandler}/>
             <label>Bounty Amount: </label><input name="bountyAmount" value={updatedBounty.bountyAmount} type="number" onChange={bountyChangeHandler}/>
             <label>Type </label><input name="type" value={updatedBounty.type} type="text" onChange={bountyChangeHandler}/>
            <button onClick={updateBountyState}>Save</button>
            </form>
        </div>
    )
}