import axios from "axios";
import Car from "./components/Car";
import React, { useEffect, useState } from "react";
import CarModal from "./components/CarModal";
import { nanoid } from "nanoid";
import "./App.css";

function App() {
  const [cars, setCars] = useState([]);
  const [addCar, setAddCar] = useState(false);

  useEffect(() => {
    axios
      .get("/cars")
      .then((res) => setCars(res.data))
      .catch((err) => console.log(err));
  }, []);

  const submitNewCar = (newMake, newColor) => {
    const newCar = { make: newMake, color: newColor, _id: nanoid() };
    axios
      .post("/cars", newCar)
      .then(
        setCars((prev) => [
          ...prev,
          { make: newCar.make, color: newCar.color, _id: newCar._id },
        ])
      )
      .catch((err) => err);
    setAddCar(false);
  };

  const deleteCar =(id) =>{
    axios.delete(`/cars/${id}`)
    .then(res=>(setCars(prev=>prev.filter(car=>car._id !== id))))
  }

  const updateCar =(id, updatedMake, updatedColor)=>{
    
    const updatedCar = {make:updatedMake, color:updatedColor}
axios.put(`/cars/${id}`, updatedCar)
.then(res=>setCars(prev=>prev.map(car=>car._id === id ? {...car, make: updatedMake, color: updatedColor}: {...car} )))

console.log(id)
  }
  const carElement = cars.map((car) => (
    <Car updateCar={updateCar} key={car._id} deleteCar={deleteCar} {...car}/>

 
  ));

  return (
    <div className="App">
      <h1>Welcome</h1>
      {addCar === false && (
        <button
          onClick={() => {
            setAddCar(!addCar);
          }}
        >
          Add Car
        </button>
      )}
      {addCar === false && <div className="main-car-div">{carElement}</div>}
      {addCar === true && (
        <div>
          <CarModal  cars={cars} submitNewCar={submitNewCar} />
        </div>
      )}
    </div>
  );
}

export default App;
