import React, { useState, useContext } from "react";
import { MMOContext } from "../mmoContext";
export default function Games(props) {

  const { mmoData, setMmoData} = useContext(MMOContext);
  const [filterData, setFilterData] = useState({
    shooterFilter: false,
    rpgFilter: false,
    mmoarpgFilter: false,
    pcFilter: false,
    webFilter: false,
  });
  const [query, setQuery] = useState("");
  let listMmoData = mmoData
    .filter((item) => item.title.toLowerCase().includes(query))
    .map(
      (item) =>
        item.addedToProfile === false && (
          <div key={item.id}>
            <div>
              <li>{item.title}</li>
              <img
                onClick={() => {
                  addToProfile(item.id);
                }}
                className="game-list-img"
                src={item.thumbnail}
              />
            </div>
          </div>
        )
    );
    const searchResetFilters = () => {
      setFilterData((prev) => ({
        ...prev,
        shooterFilter: false,
        rpgFilter: false,
        mmoarpgFilter: false,
        pcFilter: false,
        webFilter: false,
      }));
    };
    const searchHandler = () => {
      setQuery(event.target.value);
      console.log(query);
    };

  function addToProfile(id) {
    // let itemCounter = mmoData.filter((item) => item.addedToProfile === true);
    setMmoData((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, addedToProfile: !item.addedToProfile }
          : item
      )
    );
  }

  function genreFilter(gametype) {
    listMmoData = mmoData
      .filter((item) => item.genre.toLowerCase().includes(gametype))
      .map(
        (item) =>
          item.addedToProfile === false && (
            <div key={item.id}>
              <div>
                <li>{item.title}</li>
                <img
                  onClick={() => {
                    addToProfile(item.id);
                  }}
                  className="game-list-img"
                  src={item.thumbnail}
                />
              </div>
            </div>
          )
      );
  }
  function platformFilter(platformType) {
    listMmoData = mmoData
      .filter((item) => item.platform.toLowerCase().includes(platformType))
      .map(
        (item) =>
          item.addedToProfile === false && (
            <div key={item.id}>
              <div>
                <li>{item.title}</li>
                <img
                  onClick={() => {
                    addToProfile(item.id);
                  }}
                  className="game-list-img"
                  src={item.thumbnail}
                />
              </div>
            </div>
          )
      );
  }
  if (filterData.shooterFilter === true) {
    genreFilter("shooter");
  } else if (filterData.rpgFilter === true) {
    genreFilter("mmorpg");
  } else if (filterData.mmoarpgFilter === true) {
    genreFilter("mmoarpg");
  } else if (filterData.pcFilter === true) {
    platformFilter("pc");
  } else if (filterData.webFilter === true) {
    platformFilter("web browser");
  }
  let sortByTitle = () => {
    mmoData.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return;
      }
    });
    setMmoData((prev) => prev.map((item) => item));
  };
  const sortByDate = () => {
    mmoData.sort((b, a) => {
      if (a.release_date < b.release_date) {
        return -1;
      } else if (a.release_date > b.release_date) {
        return;
      }
    });
    setMmoData((prev) => prev.map((item) => item));
  };
  const sortByCompany = () => {
    mmoData.sort((a, b) => {
      if (a.developer < b.developer) {
        return -1;
      } else if (a.developer > b.developer) {
        return;
      }
    });
    setMmoData((prev) => prev.map((item) => item));
  };
  const filterShooter = () => {
    setFilterData((prev) => (prev.every = false));
    setFilterData((prev) => ({ ...prev, shooterFilter: true }));
  };
  const filterRPG = () => {
    setFilterData((prev) => (prev.every = false));
    setFilterData((prev) => ({ ...prev, rpgFilter: true }));
  };
  const filterARPG = () => {
    setFilterData((prev) => (prev.every = false));
    setFilterData((prev) => ({ ...prev, mmoarpgFilter: true }));
  };
  const filterPC = () => {
    setFilterData((prev) => (prev.every = false));
    setFilterData((prev) => ({ ...prev, pcFilter: true }));
  };
  const filterWeb = () => {
    setFilterData((prev) => (prev.every = false));
    setFilterData((prev) => ({ ...prev, webFilter: true }));
  };

  return (
    <div className="games-main-div">
      <div className="games-left-div">
        <div>
          <h2>Sort By</h2>
        </div>
        <div>
          <ul className="sort-by-ul">
            <button onClick={sortByDate} className="sort-by-button">
              Date
            </button>
            <button onClick={sortByTitle} className="sort-by-button">
              Title
            </button>
            <button onClick={sortByCompany} className="sort-by-button">
              Company
            </button>
          </ul>
        </div>
        <div>
          <h2>Genre</h2>
          <div>
            <ul className="genre-ul">
              <button onClick={filterShooter} className="genre-button">
                FPS
              </button>
              <button onClick={filterRPG} className="genre-button">
                RPG
              </button>
              <button onClick={filterARPG} className="genre-button">
                ARPG
              </button>
            </ul>
          </div>
        </div>
        <div>
          <h2>Platform</h2>
          <div>
            <ul className="genre-ul">
              <button onClick={filterPC} className="genre-button">
                PC (Windows)
              </button>
              <button onClick={filterWeb} className="genre-button">
                Web Browser
              </button>
            </ul>
          </div>
        </div>
      </div>
      <div className="games-right-div">
        <nav className="games-list-right-nav">
          <label htmlFor="search">Search Title</label>{" "}
          <input
            onClick={searchResetFilters}
            onChange={searchHandler}
            id="search"
          />
        </nav>
        <div className="games-list-right-div">{listMmoData}</div>
      </div>
    </div>
  );
}
