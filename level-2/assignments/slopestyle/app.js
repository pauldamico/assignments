function collectAnimals(...car) {
    return [...car]
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// ["dog", "cat", "mouse", "jackolope", "platypus"]
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))


function combineFruit(fruit, sweets, vegetables, ...otherFruit){
    return {fruit:[...fruit], sweets:[...sweets], vegetables:[...vegetables], otherFruit:[...otherFruit]}
}

combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"])

             console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"], "berry", "banana"))


function parseSentence({location, duration}){
  return `We're going to have a good time in ${location} for ${duration}`
}

const trip = {location:"Burly Idaho", duration:"2 weeks"}

console.log(parseSentence(trip))

function returnFirst(items){
    const [firstItem] = items; /*change this line to be es6*/
    return firstItem
}



const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [firstFav, secondFav, thirdFav] = arr
    return `My top three favorite activities are,  ${firstFav},  ${secondFav}, and  ${thirdFav}`
}

console.log(returnFavorites(favoriteActivities))

function combineAnimals(one, two, three, ...more) {
return [...one, ...two, ...three]
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))

// ["dog", "cat", "mouse", "jackolope", "platypus"]

function product(...numbers) {
   
  console.log(numbers)
    return numbers.reduce(function(acc, number) {
      return acc * number;
    }, 1)
  }
  
  console.log (product(1,2,3,4,5))


  function unshift(array, ...array2) {
    return [...array2, ...array];
  }
  
console.log(unshift([1,2,3,4,5], "a", "b", "c", "d", "e"))


function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
       firstName = name[0]
       lastName = name[1]
        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}
const allNames =["Frank Peterson", "Suzy Degual", "Liza Jones"] 
console.log(populatePeople(allNames))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]



