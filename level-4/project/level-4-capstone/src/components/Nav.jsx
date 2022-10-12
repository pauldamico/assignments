import { Link } from "react-router-dom";
export default function Nav(props) {
  return (
    <div>
      <nav className="nav">
        <div className="title-div">
       
          <h1 className="main-title">Gamer Profile</h1>
         
        </div>
        <div className="nav-link-div">
            <div className="nav-link-title-div">
          <Link className="link" to="/">
            Home
          </Link>
          </div>
     <div className="nav-link-title-div">
          <Link className="link" to="/games">
            Games
          </Link>
          </div>
          <div className="nav-link-title-div">
          <Link className="link" to="/news">
            MMO News
          </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
