import {Link} from 'react-router-dom'

export default function Nav () {

    return(
        <div className = "nav-div">
            <Link to = "/"> Home</Link>
            <Link to = "/bounties"> Bounties</Link>
        </div>
    )
}