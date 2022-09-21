import React from "react";
import DiceBox from "./components/DiceBox";
import Die from "./components/Die";
import "./App.css";

function App() {
  const [die, setDie] = React.useState([
    {
      id:1,
      number: randomNumber(),
      isHeld: false,
    },
    {
      id:2,
      number: randomNumber(),
      isHeld: false,
    },
    {
      id:3,
      number: randomNumber(),
      isHeld: false,
    },
    {
      id:4,
      number: randomNumber(),
      isHeld: false,
    },
    {
      id:5,
      number: randomNumber(),
      isHeld: false,
    },
  ]);

  const holdDice = (id) => {
setDie(prev=>prev.map(item=>id===item.id ? {...item, isHeld:!item.isHeld} : {...item}))

  }

  function randomNumber() {
    return Math.ceil(Math.random() * 6);
  }
  const rollDie = () => {
    setDie(prev=>prev.map(item=>item.isHeld ? {...item}: {...item, number:randomNumber()}))
 
  }
   

  const allDice =  die.map(item=><Die key={item.id} onClick={()=>{holdDice(item.id)}} {...item}></Die>)
  return (
    <div>
      <div className="App">
        <DiceBox />
      </div>
      <div className="die-div">
       {allDice}
       
      </div>
      <button style={{ margin: "40px" }} onClick={rollDie}>
        Roll Dice
      </button>
    </div>
  );
}

export default App;
