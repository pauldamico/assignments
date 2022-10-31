import React, { useState } from "react";

export default function CarModal(props) {
  
  const [carForm, setCarForm] = useState({ type: "", color: "" });

  const carChangeHandler = (event) => {
    const { name, value } = event.target;
    setCarForm((prev) => ({ ...prev, [name]: value }));
    console.log (carForm)
  };


  const updateNewCar = (event) =>{
    event.preventDefault()
    props.submitNewCar(carForm.type, carForm.color)
    console.log(props.cars)
  }

  return (
    <div>
      <form
        onSubmit={updateNewCar}
      >
        <h1>Type</h1>
        <input
          onChange={carChangeHandler}
          type="text"
          name="type"
          value={carForm.type}
        ></input>
        <h1>Color</h1>
        <input
          onChange={carChangeHandler}
          type="text"
          name="color"
          value={carForm.color}
        ></input>
        <button>Save</button>
      </form>
    </div>
  );
}
