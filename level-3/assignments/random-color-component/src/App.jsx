import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Colors from './components/colors'
import Nav from './components/nav'

import './App.css'

function App() {

const [color, setColor] = useState("green")
const [colorList, setColorList]=useState([])


useEffect(()=>{
axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
.then(res=> setColor(res.data.colors[0].hex))
.catch(error=>console.log(error))
}, [colorList])


function colorChanger(){
setColorList(prev=>([...prev, {currentColor:`#${color}`}]))

console.log(colorList)
}

const colorElements = colorList.map(item=><Colors key={Math.random()} style={{backgroundColor:`${item.currentColor}`}}><div className="square"></div></Colors>)
  return (
    <div className="App">
      <Nav/>
      <button className="button" onClick={colorChanger}>Add Colors</button>
      {/* <section style={{backgroundColor:`#${color}`}}>Test</section> */}
      
      <div className = "main-colors-div">
{colorElements}
</div>
    </div>
  )
}

export default App
