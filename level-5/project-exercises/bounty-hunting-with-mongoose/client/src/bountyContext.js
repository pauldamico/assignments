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

const postBounty = (fName, lName, alive, amount, bType) =>{   
    const newBounty = {
    firstName: fName,
    lastName: lName,
    living: alive,
    bountyAmount: amount,
    type: bType}

    axios.post('/bounties', newBounty)
    .then(res=>setBounties(prev=>([...prev, res.data])))
    .catch(err=>console.log(err.message))
}
const updateBounty = (fName, lName, alive, amount, bType, id) => {
    const updatedBounty = {
        firstName: fName,
        lastName: lName,
        living: alive,
        bountyAmount: amount,
        type: bType}
    axios.put(`/bounties/${id}`,  updatedBounty)
    .then(res=>setBounties(prev=>prev.map(bounty=>bounty._id === id && {...bounty, firstName: fName,
        lastName: lName,
        living: alive,
        bountyAmount: amount,
        type: bType}  )))
    console.log(id)
}

const deleteBounty =(id)=>{
    console.log(id)
    axios.delete(`./bounties/${id}`)
    .then(setBounties(prev=>prev.filter(bounty=>bounty._id !== id && {...bounty} )))
    .catch(err=>console.log(err))
}

    return(<BountyContext.Provider value ={{bounties, postBounty, deleteBounty, updateBounty}}>
        {props.children}
        </BountyContext.Provider>
    )
}


export  {BountyContext, BountyContextProvider}