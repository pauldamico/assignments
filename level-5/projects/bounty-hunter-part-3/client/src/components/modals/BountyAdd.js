import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { BountyContext } from "../../bountyContext";
export default function BountyAdd(props) {
  const { addBounty } = useContext(BountyContext);

  const [newBounty, setNewBounty] = useState({
    fName: "",
    lName: "",
    isAlive: false,
    bAmount: "",
    bType: "Sith",
    bId: nanoid(),
  });
  const { fName, lName, isAlive, bAmount, bType, bId } = newBounty;

  const bountyChangeHandler = (event) => {
    const { checked, type, name, value } = event.target;
    setNewBounty((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    })); 
  };

  const updateAddBounty = (event) => {
    event.preventDefault();
    addBounty(fName, lName, isAlive, bAmount, bType, bId);
    props.addAnotherBounty();
  };

  return (
    <div className="bounty-modal-div">
      <form onSubmit={updateAddBounty}>
        <div>
          <label>First Name: </label>
          <input
            name="fName"
            type="text"
            value={fName}
            onChange={bountyChangeHandler}
            required
          />
        </div>
        <div>
          <label>Last Name: </label>
          <input
            name="lName"
            type="text"
            value={lName}
            onChange={bountyChangeHandler}
            required
          />
        </div>

        <div>
          <label>Alive? </label>
          <input
            name="isAlive"
            type="checkbox"
            checked={isAlive}
            onChange={bountyChangeHandler}
         
          />
        </div>
        <div>
          <label>Bounty Amount: </label>
          <input
            name="bAmount"
            type="number"
            value={bAmount}
            onChange={bountyChangeHandler}
            required
          />
        </div>
        <div>
          <label>Type: </label>
          <select className="select-add"
            name="bType"
            id="bType"
            value={bType}
            onChange={bountyChangeHandler}
            required
          >
           
          <option value="Sith">Sith</option>
          <option value="Jedi">Jedi</option>
          </select>
          {/* <div><label>Type: </label><input name="bType" type="text" value={bType} onChange={bountyChangeHandler}/> */}
        </div>
        <button>Submit New Bounty</button>
      </form>
    </div>
  );
}
