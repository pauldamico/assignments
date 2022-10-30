import axios from "axios";
import Car from "./components/Car";
import React, { useEffect, useState } from "react";
import CarMemo from "./components/CarMemo";
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

  const carElement = cars.map((car) => (
    <Car key={car._id}>
      <h1>{car.make}</h1>
      <section>{car.color}</section>
    </Car>
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
          <CarMemo cars={cars} submitNewCar={submitNewCar} />
        </div>
      )}
    </div>
  );
}

export default App;
