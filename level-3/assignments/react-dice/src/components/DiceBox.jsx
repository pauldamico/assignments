import React from "react";

export default function DiceBox() {
 
  const [dieNumber, setDieNumber] = React.useState([1, 2, 3, 4, 5]);

  const listNumbers = dieNumber.map((die) => <h1 key={Math.random()}>{die}</h1>);

  const rollDice = () => {
    setDieNumber((prev) =>
      prev.map(
        (die) =>
          (die =<div key={Math.random()}>{Math.ceil(Math.random() * 6)}</div>)
      )
    );
  };

  return (
    <div>
    <div>
      {listNumbers}    
    </div>
      <button onClick={rollDice}>Roll Dice</button>
      </div>
  );
}
