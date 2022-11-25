const express = require("express");
const dogRouter = express.Router();

const dogs = [
  { type: "pug", size: "small", speed: "slow", id: Math.random(123123) * 123 },
  {
    type: "goldendoodle",
    size: "large",
    speed: "fast",
    id: Math.random(123123) * 123,
  },
];

dogRouter.get("/", (req, res) => {
  res.send(dogs);
});

dogRouter.post("/", (req, res) => {
  req.body.id = Math.random(123123) * 123;
  if (!req.body.type) {
    return res.status(500).send("Missing Type");
  }
  if (!req.body.size) {
    return res.status(500).send("Missing Size");
  }
  if (!req.body.spped) {
    return res.status(500).send("Missing Speed");
  }
  console.log(req.body.speed);
  dogs.push(req.body);
  res.send(`${req.body.type} has been added to the database`);
});

dogRouter.put("/:type", (req, res) => {
  console.log(req.params.type);
  console.log(dogs.findIndex((dog) => dog.type === req.params.type));

  const udpatedItem = Object.assign(
    dogs[dogs.findIndex((dog) => dog.type === req.params.type)],
    req.body
  );
  res.send(udpatedItem);
});

dogRouter.delete("/:type", (req, res) => {
  console.log(req.params);

  const index = dogs.findIndex((dog) => dog.type === req.params.type);
  dogs.splice(index, 1);
  res.send(`${req.params.type} has been removed`);

});

module.exports = dogRouter;
