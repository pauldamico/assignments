import {Link,Routes,Route} from "react-router-dom"
import logo from "../images/pipe-logo.png"
export default function Nav (props) {
    return(
    <div className="nav-div">
        <nav className="nav-top">
<img className ="img-logo" src={logo}/><h3 className="nav-title">The Plumber's</h3><h3 className="nav-contact">Contact Now!</h3>
        </nav>
    <nav className ="nav-links">        
<Link className="nav-page-link" to="/">Home</Link>
<Link className="nav-page-link"  to="/about">About</Link>
<Link className="nav-page-link"  to="/services">Services</Link>

    </nav>
    </div>)
}