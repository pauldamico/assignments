import { useState } from 'react'
import Body from './components/Body'
import Nav from './components/Nav'
import Footer from './components/Footer'
import UglyThing from './components/UglyThing'

import './App.css'

function App() {


  return (
    <div className="app">
 <Nav/>
 <Body/>
 <UglyThing/>
 <Footer/>
    </div>
  )
}

export default App
