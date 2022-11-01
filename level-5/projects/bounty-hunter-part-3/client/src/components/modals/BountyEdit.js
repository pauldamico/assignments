import React, { useState, useContext } from "react";
import { BountyContext } from "../../bountyContext";

export default function BountyEdit(props) {
  const { updateBounty } = useContext(BountyContext);

  const [edit, setEdit] = useState({
    fName: props.firstName,
    lName: props.lastName,
    isAlive: props.living,
    bAmount: props.amount,
    bType:props.type
  });


  const { fName, isAlive, bAmount, lName, bType } = edit;

  const updateSubmitUpdates = (event) => {
    event.preventDefault();
    updateBounty(fName, lName, isAlive, bAmount, bType, props.id);
    props.editBounty();
  };

  const editOnChange = (event) => {
    const {name, type, value, checked} = event.target
    setEdit(prev=>({...prev, [name]:type === "checkbox" ? checked : value}))
 
  }

  return (
    <div className="edit-main-div">
      <div className="edit-center-div">
        <form onSubmit={updateSubmitUpdates}>
          <div>
            <label>First Name: </label>
            <input className="edit-input" name="fName" type="text" value={fName} onChange={editOnChange}
            required />
          </div>
          <div>
            <label>Last Name: </label>
            <input className="edit-input" name="lName" type="text" value={lName} onChange={editOnChange}
            required />
          </div>
          <div className="edit-check-div">
            <label>Alive? </label>
            <input
              className="edit-check-input"
              name="isAlive"
              type="checkbox"
              checked={isAlive}
              onChange={editOnChange}
              
            />
          </div>
          <div>
            <label>Bounty Amount: </label>
            <input className="edit-input" name="bAmount" type="number" value={bAmount} onChange={editOnChange}
            required />
          </div>
          <div>
            <label>Type: </label>
            <select className="select-edit"
            name="bType"
            id="bType"
            value={bType}
            onChange={editOnChange}
            required
          >
          
          <option value="sith">Sith</option>
          <option value="jedi">Jedi</option>
          </select>
          
          </div>
          <button className="save-button">Save</button>
        </form>
      </div>
    </div>
  );
}
