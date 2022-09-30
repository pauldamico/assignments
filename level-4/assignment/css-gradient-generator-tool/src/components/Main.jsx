import { useState } from "react";
import Card from "./reusuable/Card";
import Color from "./Color";

export default function Main() {
  const [gradient, setGradient] = useState({
    id:Math.random(),
    topColor: "#000000",
    botColor: "#000000",
    deg:90
  });

 



  const colorChangeHandler =(event)=>{
const {name, value} = event.target
setGradient(prev=>({...prev, [name]:value}))

  }

// const listElements = listColor.map(item=>   <h3 key ={Math.random()}>
//     Color 2 <span>colorstate </span> <input  onChange ={colorChangeHandler} name ={item.color} value= {item.color} type="color"/>
//   </h3>)

  return (
    <div className="main-div">
      <Card>
        <div
          className="linear-gradient-color-div"
          style={{
            background: `linear-gradient(${gradient.deg}deg, ${gradient.topColor},${gradient.botColor})`,
          }}
        ></div>
        <div className="linear-gradient-color-text-div">
          <p>background: linear-gradient({gradient.deg}deg, {gradient.topColor} , {gradient.botColor}); </p>
          <p>-moz-background: linear-gradient({gradient.deg}deg, {gradient.topColor} , {gradient.botColor});</p>
          <p>-webkit: linear-gradient({gradient.deg}deg, {gradient.topColor} , {gradient.botColor})</p>
        </div>
      </Card>
      <Card>
        <h1>Options</h1>
        <h3>
          Color 1 <span>{gradient.topColor} </span> <input  onChange ={colorChangeHandler} name ="topColor" value= {gradient.topColor} type="color"/>
        </h3>
        <h3>
          Color 2 <span>{gradient.botColor} </span> <input  onChange ={colorChangeHandler} name ="topColor" value= {gradient.botColor} type="color"/>
        </h3>
    
     
        <h3>
          Angle <input style={{width:"40px"}} onChange ={colorChangeHandler} name ="deg" value= {gradient.deg} type="number"/>
        </h3>
    
      
      </Card>
    </div>
  );
}
