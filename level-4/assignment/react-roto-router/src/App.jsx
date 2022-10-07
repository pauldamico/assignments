import React from 'react'
import Nav from './components/Nav'
import About from './components/About'
import Home from './components/Home'
import Services from './components/Services'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

import './App.css'

function App() {


  return (
<div className="app">
<Nav/>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>} />
    <Route path="/services" element={<Services/>}/>
</Routes>
</div>
  )
}

export default App
