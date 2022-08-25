for (let x = 0; x < 10; x++) {
  console.log(x);
}

for (let x = 9; x >= 0; x--) {
  console.log(x);
}

const fruit1 = ["banana", "orange", "apple", "kiwi"];

for (let x = 0; x < fruit1.length; x++) {
  console.log(fruit1[x]);
}
// Bronze Medal
let numArray = [];
for (let x = 0; x <= 9; x++) {
  numArray.push(x);
}
console.log(numArray);

for (let x = 0; x <= 100; x++) {
  if (x % 2 === 0) {
    console.log(x);
  }
}

const fruit2 = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
for (let x = 0; x < fruit2.length; x++) {
  if (x % 2 !== 0) {
    console.log(fruit2[x]);
  }
}

//Silver Medal
const peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor",
  },
  {
    name: "Justin Bieber",
    occupation: "Singer",
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician",
  },
  {
    name: "Oprah",
    occupation: "Entertainer",
  },
];

// ["Harrison Ford", "Vladimir Putin"] // names
// ["Singer", "Entertainer"] // occupations

for (let x = 0; x < peopleArray.length; x++) {
  console.log(peopleArray[x].name);
}
let namesArray = [];
let occupationsArray = [];

for (let x = 0; x < peopleArray.length; x++) {
  namesArray.push(peopleArray[x].name);
  occupationsArray.push(peopleArray[x].occupation);
}
console.log(namesArray);
console.log(occupationsArray);

let evenNameArray = [];
let oddOccupationArray = [];
for (let x = 0; x < peopleArray.length; x++) {
  if (x % 2 === 0) {
    evenNameArray.push(peopleArray[x].name);
  }
  if (x % 2 !== 0) {
    oddOccupationArray.push(peopleArray[x].occupation);
  }
}
console.log(evenNameArray);
console.log(oddOccupationArray);
// Gold Medal

let array1 =[]
for (let x = 0; x <= 2; x++) {
array1[x] =[]
    for(let i =0; i <= 2; i++){
        array1[x][i] = 0
    }

}
console.log(array1)

let array2 =[]
for(let x= 0; x<= 2; x++){
    array2[x] =[]
    for(let i= 0; i<= 2; i++){
array2[x][i] = x

    }
}
console.log(array2)

let array3 =[]
for(let x= 0; x<= 2; x++){
    array3[x] =[]
    for(let i= 0; i<= 2; i++){
array3[x][i] = i

    }
}
console.log(array3)
let array4 =[]
for(let x= 0; x<= 2; x++){
    array4[x] =[]
    for(let i= 0; i<= 2; i++){
array4[x][i] = "x"

    }
}
console.log(array4)