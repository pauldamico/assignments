import React, { useContext, useState } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import MyProfile from "./components/MyProfile";
import Games from "./components/Games";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MMOContext } from "./mmoContext";
import "./App.css";

function App() {
  const { mmoData, setMmoData, searchResetFilters, editStatsHandler } =
    useContext(MMOContext);
  const [query, setQuery] = useState("");
  const [filterData, setFilterData] = useState({
    shooterFilter: false,
    rpgFilter: false,
    mmoarpgFilter: false,
    pcFilter: false,
    webFilter: false,
  });
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

  const test1 = () => {
    console.log(mmoData);
  };

  return (
    <div>
      <button
        onClick={() => {
          localStorage.clear();
        }}
      >
        Clear Local Storage
      </button>
      <Nav mmoData={mmoData} />
      <Routes>
        <Route
          path="/"
          element={
            <MyProfile mmoData={mmoData} editStatsHandler={editStatsHandler} />
          }
        />
        <Route
          path="/games"
          element={
            <Games
              query={query}
              mmoData={mmoData}
              searchHandler={searchHandler}
              listMmoData={listMmoData}
              filterShooter={filterShooter}
              filterRPG={filterRPG}
              filterARPG={filterARPG}
              sortByTitle={sortByTitle}
              sortByDate={sortByDate}
              sortByCompany={sortByCompany}
              filterPC={filterPC}
              filterWeb={filterWeb}
              searchResetFilters={searchResetFilters}
            />
          }
        />
        <Route path="/news" element={<News />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
