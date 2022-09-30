import React, {useState} from "react"

export default function Color (props){
    const [gradientList, setGradientList] = useState({color: "#000000"})
    
    const[listColor, setListColor] = useState([])
    
    const changeHandler = (e)=>{
       
        setGradientList(e.target.value)
        console.log(gradientList)
    }
    
    const addColorList =()=>{
    
        setListColor(prev=>([...prev, {...gradientList, id:Math.random(), name:`Color ${listColor.length + 3}`}]))

    }


//     const listElements = gradientList.map(item=>  <h3 key = {Math.random()}>
//     Color {gradientList.length} <span>colorstate </span> <input  onChange ={colorChangeHandler} name ="topColor" value= {gradient.botColor} type="color"/>
//   </h3>)

    return(<div>
        {listElements}
         <button onClick={addColorList}>Add Color</button>
    </div>)
}