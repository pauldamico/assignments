var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop()
fruit.shift()
console.log("Index of Orange is", fruit.indexOf("orange") )
fruit.push(fruit.indexOf("orange"))
console.log("Length of vegetables array", vegetables.length)
vegetables.push(vegetables.length)
let food = fruit.concat(vegetables)
console.log ("New food array", food)
food.splice(4, 2)
console.log ("Spliced food array", food)
food.reverse()
console.log ('reversed', food)
console.log( food.toString(""))










