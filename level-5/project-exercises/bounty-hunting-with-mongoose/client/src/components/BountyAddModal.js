import React, {useState} from "react"
export default function BountyAddModal (props) {

    const [updatedBounty, setUpdatedBounty] = useState({ firstName: "",
lastName: "",
living: false,
bountyAmount: "",
type: ""})


const bountyChangeHandler = (event) =>{
    const {name, value, type, checked} = event.target
    setUpdatedBounty(prev=>({...prev, [name]:type === "checkbox" ? checked :value}))
    console.log(updatedBounty)
}

const updateBountyState = (event) => {
    event.preventDefault()
    props.postBounty(updatedBounty.firstName, updatedBounty.lastName, updatedBounty.living, updatedBounty.bountyAmount, updatedBounty.type)
    props.toggleAddBounty()
}


    return(
        <div>
            <form onSubmit={updateBountyState}>
            <label>First Name: </label><input name="firstName" value={updatedBounty.firstName} type="text" onChange={bountyChangeHandler}/>
             <label>Last Name: </label><input name="lastName" value={updatedBounty.lastName} type="text" onChange={bountyChangeHandler}/>
             <label>Bounty Living: </label><input name="living" value={updatedBounty.living} type="text" onChange={bountyChangeHandler}/>
             <label>Bounty Amount: </label><input name="bountyAmount" value={updatedBounty.bountyAmount} type="number" onChange={bountyChangeHandler}/>
             <label>Type </label><input name="type" value={updatedBounty.type} type="text" onChange={bountyChangeHandler}/>
            <button onClick={updateBountyState}>ADD</button>
            </form>
        </div>
    )
}