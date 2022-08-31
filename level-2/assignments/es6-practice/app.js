
                                                       //task 0
var age = 101

function runForLoop(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name ="john")
    return petObjects
}

runForLoop(["cat", "dog"])

                                                            //task 1
const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map((carrot)=> {
        return { type: "carrot", name: carrot }
    })
}

console.log(mapVegetables(["test", "2"]))
                                                            //task 2
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter((person) =>{
        return person.friendly != false
    })
}

console.log(filterForFriendly(people))
                                                            //task 3
const doMathSum = (a, b) =>  a + b
console.log(doMathSum(1, 2))

const produceProduct = (a, b)=>  a * b
console.log(produceProduct(5, 3))
                                                            //task 4

const printString = (firstName="Jane", lastName="Doe", age=100)=>{
    return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`
}
console.log(printString("Kat", "Stark", 40))
console.log(printString())
                                                            //task 5
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 function filterForDogs(arr) {
     return arr.filter(animal => animal.type === "dog" ) }
     console.log(filterForDogs(animals))
 
                                                            //task 6
  const templeFunc = (name="Janice", location="Hawaii")=>{
    return `
    Hi ${name}!
    Welcome to ${location}.
    I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`
  }   

  console.log(templeFunc())