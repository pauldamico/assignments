import React, { useState } from "react";
import Badge from "./components/Badge";
import Main from "./components/Main";
import Nav from "./components/Nav";

import "./App.css";

function App() {
  const [badge, setBadge] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birth: "",
    phone: "",
    food: "",
    info: "",
  });
  const [badgeList, setBadgeList] = useState([]);
  const [colorToggle, setColorToggle] = useState(false);

  function changeHandler(e) {
    const { name, value } = e.target;
    setBadge((prev) => ({ ...prev, [name]: value }));
  }

  function submitHandler(e) {
    e.preventDefault();
    setColorToggle((prev) => !prev);
    setBadgeList((prev) => [...prev, { ...badge, color: colorToggle }]);

    console.log(badgeList);
  }

  const badgeElements = badgeList.map((item) => (<div key={Math.random()} >
    <Nav style={{ backgroundColor: item.color ? "red" : "blue" }} />
    <Badge>
      <ul >
        <h5>
          <label>Name:</label> {item.firstName} {item.lastName}
        </h5>
        <h5>
          <label>Phone number:</label> {item.phone}
        </h5>
        <h5>
          <label>Place of Birth</label> {item.birth}
        </h5>
        <h5>
          <label>Favorite Food:</label> {item.food}
        </h5>
        <h5>
          <label>Email Address:</label> {item.email}
        </h5>
        <h5 className="info">
          {" "}
          <label>Info</label> {item.info}
        </h5>
      </ul>
    </Badge>
    </div>
  ));

  return (
    <div className="App">
      <Main {...badge} onSubmit={submitHandler} onChange={changeHandler} />
      {badgeElements}
    </div>
  );
}

export default App;
