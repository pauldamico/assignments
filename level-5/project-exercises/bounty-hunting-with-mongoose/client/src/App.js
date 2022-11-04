import React from 'react'

import Nav from './components/Nav';
import Body from './components/Body'
import Home from './components/Home';
import {Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="app">
   
      <Nav/>
      <Routes>
      <Route path="/bounties" element ={<Body/>}></Route>
      <Route path="/" element ={<Home/>}></Route>
      </Routes>
  
    </div>
  );
}

export default App;
