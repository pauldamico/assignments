import React, { useState, useEffect } from "react";

import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Games from "./components/Games";
import News from "./components/News";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [mmoData, setMmoData] = useState([]);

  const [filterData, setFilterData] = useState({
    shooterFilter: false,
    rpgFilter: false,
    mmoarpgFilter: false,
    pcFilter: false,
    webFilter: false,
  });
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://www.mmobomb.com/api1/games",
        {
          headers: {
            "X-Requested-With": "origin",
          },
        }
      )
      .then((res) =>
        setMmoData((prev) => [
          ...res.data.map((item) => ({
            ...item,
            edit: false,
            addedToProfile: false,
            showStats: false,
          })),
        ])
      )
      .catch((err) => console.log(err));
  }, []);

  // console.log(mmoData.map(item=>item.platform))///////////////////////////////

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

  const saveInfo = (id, progress, characters, rank, usernames, other) => {
    // setMmoData(prev=>prev.map(item=>item.id === id ? {...item, edit:false }: item))
    setMmoData((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              edit: false,
              progress: progress,
              characters: characters,
              rank: rank,
              usernames: usernames,
              other: other,
            }
          : item
      )
    );
  };

  const cancel = ()=>{
    setMmoData(prev=>prev.map(item=>({ ...item,
      edit: false,})))
  }

  function editStatsHandler(id) {
    setMmoData((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, edit: !item.edit }
          : { ...item, edit: false }
      )
    );
  }

  function addToProfile(id) {
    let itemCounter = mmoData.filter((item) => item.addedToProfile === true);    
      setMmoData((prev) =>
        prev.map((item) =>
          item.id === id
            ? { ...item, addedToProfile: !item.addedToProfile }
            : item
        )
      );

  }

  function removeFromProfile(id) {
    setMmoData((prev) => prev.map((item) => ({ ...item, showStats: false })));
    setMmoData((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, addedToProfile: !item.addedToProfile }
          : item
      )
    );
    console.log(mmoData);
  }
  function showStats(id) {
    setMmoData((prev) => prev.map((item) => ({ ...item, showStats: false })));
    setMmoData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, showStats: true } : item))
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

    function genreFilter (gametype){
      listMmoData = mmoData.filter((item) => item.genre.toLowerCase().includes(gametype))
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

    function platformFilter (platformType){
      listMmoData = mmoData.filter((item) => item.platform.toLowerCase().includes(platformType))
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
    genreFilter ("shooter")
  } else if (filterData.rpgFilter === true) {
    genreFilter ("mmorpg")
  } else if (filterData.mmoarpgFilter === true) {
    genreFilter ("mmoarpg") 

  } else if (filterData.pcFilter === true) {
    platformFilter ("pc") 

  } else if (filterData.webFilter === true) {
    platformFilter ("web browser") 
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
     
      <Nav mmoData={mmoData} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
            cancel={cancel}
              showStats={showStats}
              saveInfo={saveInfo}
              mmoData={mmoData}
              editStatsHandler={editStatsHandler}
              removeFromProfile={removeFromProfile}
            />
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
