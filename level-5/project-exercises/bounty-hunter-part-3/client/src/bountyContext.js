import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
const BountyContext = createContext();

const BountycontextProvider = (props) => {
  const [bounties, setBounties] = useState([]);

  useEffect(() => {
    axios
      .get("/bounties")
      .then((res) => setBounties(res.data))
      .catch((err) => console.log(err));
  }, []);



  const deleteBounty = (id) => {
    axios
      .delete(`/bounties/${id}`)
      .then((res) =>
        setBounties((prev) =>
          prev.filter((bounty) => bounty.id !== id && { ...bounty })
        )
      )
      .catch((err) => console.log(err));
  };

  const addBounty = (fName, lName, isAlive, bAmount, bType, bId) => {
  
    const updatedBounty = {
      firstName: fName,
      lastName: lName,
      living: isAlive,
      amount: bAmount,
      type: bType,
      id: bId,
    };
    axios
      .post("/bounties", updatedBounty)
      .then((res) =>
        setBounties((prev) => [
          ...prev,
          {
            firstName: fName,
            lastName: lName,
            living: isAlive,
            amount: bAmount,
            type: bType,
            id: bId,
          },
        ])
      )
      .catch((err) => console.log(err));
  };

const updateBounty = (fName, lName, isAlive, bAmount, bType, bId)=>{
  const updatedInfo = {
    firstName: fName,
    lastName: lName,
    living: isAlive,
    amount: bAmount,
    type: bType  
  }

    axios.put(`/bounties/${bId}`, updatedInfo)
   .then(setBounties(prev=>prev.map(bounty=>bounty.id === bId ? {...bounty,  firstName: fName,
    lastName: lName,
    living: isAlive,
    amount: bAmount,
    type: bType,
    id: bId} : {...bounty})))
    .catch(err=>console.log(err))
}

  
  return (
    <BountyContext.Provider
      value={{ bounties, addBounty, deleteBounty, updateBounty }}
    >
      {props.children}
    </BountyContext.Provider>
  );
};

export { BountyContext, BountycontextProvider };
