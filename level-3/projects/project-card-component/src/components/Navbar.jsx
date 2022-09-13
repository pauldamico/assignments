import airbnb from "../images/airbnb.png"

export default function Navbar (){
    return(
        <nav>
        <img src={airbnb} className="nav--logo" />
    </nav>
    )
}