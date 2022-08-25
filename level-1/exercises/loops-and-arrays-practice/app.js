var officeItems = [
  "stapler",
  "monitor",
  "computer",
  "desk",
  "lamp",
  "computer",
  "lamp",
  "stapler",
  "computer",
  "computer",
];
let computerCount = [];

for (let x = 0; x < officeItems.length; x++) {
  if (officeItems[x] == "computer") {
    computerCount.push(officeItems[x]);
  }
}
console.log(computerCount.length);

var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male",
  },
  {
    name: "Madeline",
    age: 80,
    gender: "female",
  },
  {
    name: "Cheryl",
    age: 22,
    gender: "female",
  },
  {
    name: "Sam",
    age: 30,
    gender: "male",
  },
  {
    name: "Suzy",
    age: 4,
    gender: "female",
  },
];

for (let x = 0; x < peopleWhoWantToSeeMadMaxFuryRoad.length; x++) {
  if (
    peopleWhoWantToSeeMadMaxFuryRoad[x].age < 18 &&
    peopleWhoWantToSeeMadMaxFuryRoad[x].gender == "male"
  ) {
    console.log(
      `${peopleWhoWantToSeeMadMaxFuryRoad[x].name} is not old enough don't let him in`
    );
  } else if (
    peopleWhoWantToSeeMadMaxFuryRoad[x].age > 18 &&
    peopleWhoWantToSeeMadMaxFuryRoad[x].gender == "male"
  ) {
    console.log(
      `${peopleWhoWantToSeeMadMaxFuryRoad[x].name} is old enough let him in`
    );
  }
  if (
    peopleWhoWantToSeeMadMaxFuryRoad[x].age < 18 &&
    peopleWhoWantToSeeMadMaxFuryRoad[x].gender == "female"
  ) {
    console.log(
      `${peopleWhoWantToSeeMadMaxFuryRoad[x].name} is not old enough don't let her in`
    );
  } else if (
    peopleWhoWantToSeeMadMaxFuryRoad[x].age > 18 &&
    peopleWhoWantToSeeMadMaxFuryRoad[x].gender == "female"
  ) {
    console.log(
      `${peopleWhoWantToSeeMadMaxFuryRoad[x].name} is old enough let her in`
    );
  }
}


function toggleLight(arr){
    let count = 0
    for(let x = 0; x < arr.length; x++){
       count += arr[x]
    }
  count % 2 === 0 ? console.log("light is off") :console.log("light is on")
}

toggleLight([2,2])