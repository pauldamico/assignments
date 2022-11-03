import React, {useState, useContext} from "react"
import Bounty from "./Bounty"
import BountyAdd from "./modals/BountyAdd"
import { BountyContext } from "../bountyContext"


export default function Body () {
    const {bounties} = useContext(BountyContext)

    const [bountyAdd, setBountyAdd] = useState(false)
    const addAnotherBounty = () => {
        setBountyAdd(!bountyAdd)
    }

    const bountyList = bounties.map(bounty=><Bounty key={bounty.id} {...bounty}/>).reverse()
const bodyClassName = bountyAdd === false ? "body2" : "body"
    return(
        <div className={bodyClassName}>
        
            {bountyAdd === false && <div className="bounty-main-div"><button onClick = {addAnotherBounty}>Add Bounty</button>
            <h3>Current Bounties</h3>
            {bountyList}</div>}
            {bountyAdd === true && 
            <div className="bounty-add-first-div">
                {/* <button onClick = {addBounty}>Submit New Bounty</button> */}
            <BountyAdd addAnotherBounty={addAnotherBounty} /></div>}
            </div>
        
    )
}