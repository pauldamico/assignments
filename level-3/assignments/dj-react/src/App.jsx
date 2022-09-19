import React from "react";
import soundEffect from "./audio/sound.wav"
import Square from "./components/Square";
import "./App.css";

function App() {

 

  const [colors, setColors] = React.useState(["white","white","white","white"]);
  const [sound, setSound] = React.useState(new Audio(soundEffect))

  const smallTimeDJ = () => {
  setColors(prev=>prev.map(color=>color === "white" ? color="black" : color="white"))
   
  };

  const partyDJ = () => {
    setColors(prev=>{return [...prev, prev[0]="purple", prev[1]="purple"]})
  };

  const leftDJ =()=>{
    setColors(prev=>([...prev, prev[2]="blue"]))
  }
  const rightDJ =()=>{
    setColors(prev=>{return (
      [...prev, prev[3]="blue"]
    )})
  }
  const bigDJOne =()=>{
    setColors(prev=>{return (
      [...prev, prev[0]="big-dj-one"]
    )})
  }
  const bigDJTwo =()=>{
    setColors(prev=>{return (
      [...prev, prev[1]="big-dj-two"]
    )})
  }  
  const bigDJThree =()=>{
    setColors(prev=>{return (
      [...prev, prev[2]="big-dj-three"]
    )})
  } 
  
  const bigDJFour =()=>{
    
    setColors(prev=>{return (
      [...prev, prev[3]="big-dj-four"]
    )})
    
  }


  const audio =()=>{
    sound.volume=.02
    sound.play()
  }

console.log(sound)

  return (
    <div className="App">
      <Square color={colors[0]} />
      <Square color={colors[1]} />
      <Square color={colors[2]} />
      <Square color={colors[3]} />
      <section className="button-div">
      <button onClick = {smallTimeDJ}>DJ Small</button>
      <button onClick = {partyDJ}>Party DJ</button>
      <button onClick = {leftDJ}>Left DJ</button>
      <button onClick = {rightDJ}>Right DJ</button>
      <button onClick = {bigDJOne}>Big DJ one</button>
      <button onClick = {bigDJTwo}>Big DJ two</button>
      <button onClick = {bigDJThree}>Big DJ three</button>
      <button onClick = {bigDJFour}>Big DJ four</button>
      <button  onClick = {audio}> Audio</button>
      </section>
    </div>
  );
}

export default App;
