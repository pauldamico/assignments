
import {Link} from 'react-router-dom'
export default function Nav () {
    return(
        <div className="nav-div">
            <nav className="nav">
                <Link to="/bounties" className = "title">Bounty List</Link>
            </nav>
        </div>
    )
}