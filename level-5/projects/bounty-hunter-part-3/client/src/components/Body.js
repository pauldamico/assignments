import React, {useContext} from "react"
import Bounty from "./Bounty"
import { BountyContext } from "../bountyContext"


export default function Body () {
    const {bountys} = useContext(BountyContext)

    const bountyList = bountys.map(bounty=><Bounty key={bounty.id} {...bounty}/>)

    return(
        <div>
            <button>Add Bounty</button>
            <h3>Current Bounties</h3>
            {bountyList}
        </div>
    )
}