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
  const [filterData, setFilterData] = useState({shooterFilter:false, rpgFilter:false, mmoarpgFilter:false})
  const [query, setQuery] = useState("")

  
  

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
          ...res.data.map((item) => ({ ...item, addedToProfile: false })),
        ])
      )
      .catch((err) => console.log(err));
  }, []);

  const searchHandler =()=>{
    setQuery(event.target.value)  
    console.log(query)
 }

  function checkState() {  
    console.log(mmo);
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

  const listProfileData = mmoData.map(
    (item) =>
      item.addedToProfile === true && (
        <div key={item.id}>
          <div>
            <li>{item.title}</li>
            <img
              onClick={() => {
                removeFromProfile(item.id);
              }}
              className="profile-list-img"
              src={item.thumbnail}
            />
          </div>
        </div>
      )
  );

  // if(filterData.shooterFilter===false && filterData.rpgFilter===false && filterData.mmoarpgFilter===False){


  let listMmoData =   
  mmoData.filter(item=>item.title.toLowerCase().includes(query)).map(
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
  )

if(filterData.shooterFilter === true){listMmoData =   
  mmoData.filter(item=>item.genre.toLowerCase().includes("shooter")).map(
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
  )}

  else if(filterData.rpgFilter === true){listMmoData =   
    mmoData.filter(item=>item.genre.toLowerCase().includes("mmorpg")).map(
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
    )}
    else if(filterData.mmoarpgFilter === true){listMmoData =   
      mmoData.filter(item=>item.genre.toLowerCase().includes("mmoarpg")).map(
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
      )}


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
    setFilterData(prev=>prev.every=false)
    setFilterData((prev) =>({...prev, shooterFilter:true}))}
  const filterRPG = () => {
    setFilterData(prev=>prev.every=false)
    setFilterData((prev) =>({...prev, rpgFilter:true}))}
  const filterARPG = () => {
    setFilterData(prev=>prev.every=false)
    setFilterData((prev) =>({...prev, mmoarpgFilter:true}))}



  
  return (
    <div>
      <button onClick={checkState}>Click</button>
      <Nav mmoData={mmoData} />
      <Routes>
        <Route path="/" element={<Home listProfileData={listProfileData} />} />
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
