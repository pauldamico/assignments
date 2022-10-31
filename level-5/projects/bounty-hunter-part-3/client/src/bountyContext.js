import React, {useState, createContext, useEffect} from "react";
import axios from "axios"
const BountyContext = createContext()

const BountycontextProvider = (props) => {
const [bountys, setBountys] = useState([])

useEffect(()=>{
axios.get('/bountys')
.then(res=>setBountys(res.data))
.catch(err=>console.log(err))
}, [])

    return(      
<BountyContext.Provider value = {{bountys}}>
{props.children}

</BountyContext.Provider>

    )
}

export {BountyContext, BountycontextProvider}