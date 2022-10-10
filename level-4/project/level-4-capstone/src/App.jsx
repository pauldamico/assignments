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

  function checkState() {
    const itemCounter = mmoData.filter((item) => item.addedToProfile === true);
    console.log(itemCounter.length);
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
              className="game-list-img"
              src={item.thumbnail}
            />
          </div>
        </div>
      )
  );
  const listMmoData = mmoData.map(
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

  return (
    <div>
      <button onClick={checkState}>Click</button>
      <Nav mmoData={mmoData} />
      <Routes>
        <Route path="/" element={<Home listProfileData={listProfileData} />} />
        <Route path="/games" element={<Games listMmoData={listMmoData} />} />
        <Route path="/news" element={<News />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
