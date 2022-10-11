import React, {useState} from "react";
export default function Games(props) {



  return (
    <div className="games-main-div">
        <div className="games-left-div">
      <div>
        <h2>Sort By</h2>
      </div>
      <div>
        <ul className="sort-by-ul">
          <button onClick={props.sortByTitle} className="sort-by-button">Title</button>
          <button onClick={props.sortByDate} className="sort-by-button">Date</button>
          <button onClick={props.sortByCompany} className="sort-by-button">Company</button>
          <button onClick={props.filterByPlatform} className="sort-by-button">Platform</button>
   
        </ul>
      </div>
      <div>
        <h2>Genre</h2>
        <div>
          <ul className="genre-ul">
            <button onClick={props.filterShooter} className="genre-button">FPS</button>
            <button onClick={props.filterRPG} className="genre-button">RPG</button>
            <button onClick={props.filterARPG}className="genre-button">BR</button>
          </ul>
        </div>
      </div>
      </div>
      <div className="games-right-div" >
        <nav className="games-list-right-nav"><label htmlFor="search">Search Title</label> <input onChange={props.searchHandler} id="search" /></nav>
        <div className="games-list-right-div">
        {props.listMmoData}
       
        
        </div>
        </div>
    </div>
  );
}
