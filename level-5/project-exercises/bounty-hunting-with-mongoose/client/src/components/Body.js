import React, {useContext} from "react"
import Bounty from "./Bounty"
import {BountyContext} from "../bountyContext"
export default function Body  () {

    const {bounties, postBounty} = useContext(BountyContext)

    const listBounties = bounties.map(bounty=>(<Bounty key={bounty._id} {...bounty}/>))

    
    return(
        <div>
            <button onClick={postBounty}>Add Bounty</button>
            {listBounties}
        </div>
    )
}