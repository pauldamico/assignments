import { Link } from "react-router-dom";
export default function Nav(props) {
  return (
    <div>
      <nav className="nav">
        <div className="title-div">
          {/* <img className="title-img" src={props.mmoData[0].thumbnail} />
          <h1>Gamer Profile</h1>
          <img className="title-img" src={props.mmoData[0].thumbnail} /> */}
        </div>
        <div className="nav-link-div">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/games">
            Games
          </Link>
          <Link className="link" to="/news">
            MMO News
          </Link>
        </div>
      </nav>
    </div>
  );
}
