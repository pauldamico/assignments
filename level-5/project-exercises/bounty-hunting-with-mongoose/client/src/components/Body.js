import React, {useState, useContext} from "react"
import BountyAddModal from './BountyAddModal.js'
import Bounty from "./Bounty"
import {BountyContext} from "../bountyContext"
export default function Body  () {
const {bounties, postBounty} = useContext(BountyContext)
const [toggleAdd, setToggleAdd] = useState(false)


const toggleAddBounty = () => {
    setToggleAdd(!toggleAdd)
}



    const listBounties = bounties.map(bounty=>(<Bounty key={bounty._id} {...bounty}/>))
        return(
        <div>
            <button onClick={toggleAddBounty}>Add Bounty</button>
            {!toggleAdd ? <div>{listBounties}</div> : <div> <BountyAddModal toggleAddBounty={toggleAddBounty} postBounty={postBounty} /></div>}
        </div>
    )
}