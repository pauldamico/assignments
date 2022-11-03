import React, { useState, useContext } from "react";
import { BountyContext } from "../bountyContext";
import BountyEdit from "./modals/BountyEdit";
import {CgCloseO} from 'react-icons/cg'
import {AiOutlineEdit} from 'react-icons/ai'



export default function Bounty(props) {
  const { deleteBounty } = useContext(BountyContext);
  const { living, amount, firstName, id, lastName, type } = props;
const [toggleEdit, setToggleEdit] = useState(false)

const editBounty = ()=>{
  setToggleEdit(!toggleEdit)
}


  const typeStyle =
    type === "Sith"
      ? "individual-bounty-div-sith"
      : "individual-bounty-div-jedi";
  const imgType = type === "Sith" ? "img-div-sith" : "img-div-jedi";
  return (<div>

    {toggleEdit === false &&
    <div className="ind-bounty-main-div">
      <div className={typeStyle}>
        <h4 className="full-name">
          <span>Name: </span> <span className="name">
          {firstName} {lastName} </span>
        </h4>
        <section className="text">
          Bounty Amount: <span>${amount}</span>
        </section>
        <section className="text">
          Type: <span>{type}</span>{" "}
        </section>
        <div className="living-div">
          <section className="text">
            Living:{" "}
            {living === true && <span className="alive"> Currently Alive</span>}
            {living === false && <span className="dead"> Dead</span>}
          </section>
        </div>
        <div className="icon-div">   
        <AiOutlineEdit onClick={editBounty} className="edit-button"/>   
        <CgCloseO className="close-button"
          onClick={() => {
            deleteBounty(id);
          }}
        />
        
       </div>
          
      </div>
      <div className={imgType}></div>
    </div>}
    {toggleEdit === true &&<BountyEdit {...props} editBounty={editBounty}/>}
  

    </div>
  );
}
