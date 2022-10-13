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
          ...res.data.map((item) => ({ ...item, edit:false, addedToProfile: false })),
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

  const saveInfo = (id, progress, characters, rank, usernames, other)=>{
        // setMmoData(prev=>prev.map(item=>item.id === id ? {...item, edit:false }: item))  
        setMmoData(prev=>prev.map(item=>(item.id === id ? {...item, edit:false, progress: progress ,
          characters: characters ,
          rank:rank ,
          usernames: usernames,
          other:other} : item )
        ))
        
     
  }


  function editStatsHandler(id, progress, characters, rank, usernames, other) {
setMmoData(prev=>prev.map(item=>(item.id === id ? {...item, edit:!item.edit, progress: progress ,
  characters: characters ,
  rank:rank ,
  usernames: usernames,
  other:other} : {...item, edit:false} )
))
console.log(mmoData)

  }
   

  function addToProfile(id) {
    let itemCounter = mmoData.filter((item) => item.addedToProfile === true);
    if (itemCounter.length < 5) {
      setMmoData((prev) =>
        prev.map((item) =>
          item.id === id
            ? { ...item, addedToProfile: !item.addedToProfile }
            : item
        )
      );
    } else {
      alert("You have 5 games added to your profile");
    }
  }

  function removeFromProfile(id) {
    setMmoData((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, addedToProfile: !item.addedToProfile }
          : item
      )
    );
  }

  // const listProfileData = mmoData.map(
  //   (item) =>item.addedToProfile === true &&
  //     (
  //       <Home mmoData={mmoData} editStatsHandler={editStatsHandler} removeFromProfile={removeFromProfile} key={item.id} item={item} />
  //     )
  // );


  // if(filterData.shooterFilter===false && filterData.rpgFilter===false && filterData.mmoarpgFilter===False){

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

  if (filterData.shooterFilter === true) {
    listMmoData = mmoData
      .filter((item) => item.genre.toLowerCase().includes("shooter"))
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
  } else if (filterData.rpgFilter === true) {
    listMmoData = mmoData
      .filter((item) => item.genre.toLowerCase().includes("mmorpg"))
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
  } else if (filterData.mmoarpgFilter === true) {
    listMmoData = mmoData
      .filter((item) => item.genre.toLowerCase().includes("mmoarpg"))
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
  } else if (filterData.pcFilter === true) {
    listMmoData = mmoData
      .filter((item) => item.platform.toLowerCase().includes("pc"))
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
  } else if (filterData.webFilter === true) {
    listMmoData = mmoData
      .filter((item) => item.platform.toLowerCase().includes("web browser"))
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

  const filterByPlatform = () => {
    mmoData.sort((b, a) => {
      if (a.release_date < b.release_date) {
        return -1;
      } else if (a.release_date > b.release_date) {
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
    <div>
      <Nav mmoData={mmoData} />
      <Routes>
        <Route path="/" element={ <Home saveInfo={saveInfo} mmoData={mmoData}  editStatsHandler={editStatsHandler} removeFromProfile={removeFromProfile}/>} />
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
