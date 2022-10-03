import React, { useState } from "react";

export default function Color(props) {
  const [gradientColor, setGradientColor] = useState({ id:Math.random(), color: "" });

  const [listColor, setListColor] = useState([]);

  const colorChangeHandler = (event) => {
    const {name, value} = event.target
    setGradientColor(prev=>({...prev, [name]:value}));

  };

  const addColorHandler = (e) => {
    e.preventDefault();
  setListColor(prev=>([...prev, {...gradientColor}]))
    console.log(listColor);
  };



      const listElements = listColor.map(item=><h1 key={Math.random()}>{item.color}<input name="color" value={gradientColor.color} onChange = {colorChangeHandler} type="color" /></h1>  )

  return (
    <div>
      {listElements}
      <button onClick={addColorHandler}>Add Color</button>
    </div>
  );
}
