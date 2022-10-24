import React, { useContext, useState } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import MyProfile from "./components/MyProfile";
import Games from "./components/Games";
import News from "./components/News";
import {Routes, Route } from "react-router-dom";
import { MMOContext } from "./mmoContext";
import "./App.css";

function App() {
  const { mmoData, editStatsHandler} = useContext(MMOContext);

  const test1 = () => {
    console.log(mmoData);
  };

  return (
    <div>
      {/* <button
        onClick={() => {
          localStorage.clear();
        }}
      >
        Clear Local Storage
      </button> */}
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
              mmoData={mmoData}     
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
