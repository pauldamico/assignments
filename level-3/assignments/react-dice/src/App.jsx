import React from "react";
import DiceBox from "./components/DiceBox";
import Die from "./components/Die";
import "./App.css";

function App() {

  const [count, setCount] = React.useState(0)

  const [die, setDie] = React.useState(diceLoop()
  //   [
  //   {
  //     id:1,
  //     number: randomNumber(),
  //     isHeld: false,
  //   },
  //   {
  //     id:2,
  //     number: randomNumber(),
  //     isHeld: false,
  //   },
  //   {
  //     id:3,
  //     number: randomNumber(),
  //     isHeld: false,
  //   },
  //   {
  //     id:4,
  //     number: randomNumber(),
  //     isHeld: false,
  //   },
  //   {
  //     id:5,
  //     number: randomNumber(),
  //     isHeld: false,
  //   },
  // ]
  );
function diceLoop(){
  let newArray = []
for(let x=0; x<6; x++){
  newArray.push({id:Math.random(), number:randomNumber(), isHeld:false})
  }
  return newArray
}

function counter (){
  setCount(count +1)
}

  const holdDice = (id) => {
setDie(prev=>prev.map(item=>id===item.id ? {...item, isHeld:!item.isHeld} : {...item}))

  }

  function randomNumber() {
    return Math.ceil(Math.random() * 6);
  }
  const rollDie = () => {
    count <= 2 ? setDie(prev=>prev.map(item=>item.isHeld ? {...item}: {...item, number:randomNumber()}))
    : setDie(prev=>prev.map(item=>({...item, number:0, isHeld:false})))
count <= 2 ? counter() : setCount(prev=>prev=0)
    
  }
   
  const diceBackground = die.map ? "green" : "white"

  const allDice =  die.map(item=><Die key={item.id} onClick={()=>{holdDice(item.id)}} {...item}></Die>)
  return (
    <div>
      <div className="App">
        <DiceBox />
      </div>
      <div style={{diceBackground}} className="die-div">
       {allDice}
     
      </div>
      <button style={{ margin: "40px" }} onClick={rollDie}>
        Roll Dice
      </button>
    </div>
  );
}

export default App;
