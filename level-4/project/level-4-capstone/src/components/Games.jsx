export default function Games(props) {
  return (
    <div className="games-main-div">
        <div className="games-left-div">
      <div>
        <h2>Sort By</h2>
      </div>
      <div>
        <ul className="sort-by-ul">
          <button className="sort-by-button">Title</button>
          <button className="sort-by-button">Date</button>
          <button className="sort-by-button">Company</button>
          <button className="sort-by-button">Platform</button>
        </ul>
      </div>
      <div>
        <h2>Genre</h2>
        <div>
          <ul className="genre-ul">
            <button className="genre-button">FPS</button>
            <button className="genre-button">RPG</button>
            <button className="genre-button">BR</button>
          </ul>
        </div>
      </div>
      </div>
      <div className="games-right-div" >
        <nav className="games-list-right-nav"><label htmlFor="search">Search Title</label> <input id="search" /></nav>
        <div className="games-list-right-div">
        {props.listMmoData}</div>
        </div>
    </div>
  );
}
