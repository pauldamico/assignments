import React, {createContext, useEffect, useState} from "react";
import axios from 'axios'

const BountyContext = createContext()
 function BountyContextProvider (props){

   
const [bounties, setBounties] = useState([])

useEffect(()=>{
    console.log("render")
    axios.get('/bounties')
    .then(res=>setBounties(res.data))
    .catch(err=>{console.log(err)})
}, [])

const postBounty = () =>{
    const newBounty = {
    firstName: "111",
    lastName: "testlastName",
    living: false,
    bountyAmount: 3000,
    type: "Jedi",}


    axios.post('/bounties', newBounty)
    .then(res=>setBounties(prev=>([...prev, res.data])))
    .catch(err=>console.log(err))
}

const deleteBounty =(id)=>{
    console.log(id)
    axios.delete(`./bounties/${id}`)
    .then(setBounties(prev=>prev.filter(bounty=>bounty._id !== id && {...bounty} )))
    .catch(err=>console.log(err))
}

    return(<BountyContext.Provider value ={{bounties, postBounty, deleteBounty}}>
        {props.children}
        </BountyContext.Provider>
    )
}


export  {BountyContext, BountyContextProvider}