import React, { useState, setState } from "react";

import "./App.css";

function App() {
  //   const [color, setColor] = useState("pink")                                    1.
  // function changeColor (){
  //   setColor("green")
  // }
  const [people, setPeople] = useState([
                                                                                         //   2.
    {
      firstName: "John",
      lastName: "Smith",
    },
  ]);

  function addPerson() {
    setPeople((prev) => {
      return [...prev, { firstName: "Paul", lastName: "Damico" }];
    });
  }                                                                                     //  3.

  const [color, setColor] = useState(false);
  function changeColor() {
    setColor(!color);
  }
                                                                                          // 4.
  //a.
  const [otherColors, setOtherColors] = useState(["pink", "blue"]);

  // setColors(prevColors => {
  // 	return [...prevColors, "green"]
  // })
  function implicitOtherColors() {
    setOtherColors((prev) => [...prev, "green"]);
  }

  //b.
  const [countObject, setCountObject] = useState({ count: 0 });
  function implicitCountObject() {
    setCountObject((prevState) => ( {   count: prevState.count + 1}));
  }

  const peopleList = people.map((person) => (
    <li key={person.lastName}>
      {person.firstName}, {person.lastName}
    </li>
  ));
                                                                                                  // 5.
  // const [colors, setColors] = useState(["pink", "blue"])

  // setColors("green")   State is a array and this is changing the entire state into the string "green"
  // it should be the following
  // setColors(prev=>([...prev, "green"]))





  return (
    <div>
      {/* <div style={{backgroundColor:color}} className="App"> */}
      <div
        style={{ backgroundColor: color ? "pink" : "green" }}
        className="App"
      >
        <button onClick={changeColor}>Change Color</button>
        <button onClick={addPerson}>Add Person</button>
      </div>
      {peopleList}
    </div>
  );
}

export default App;
