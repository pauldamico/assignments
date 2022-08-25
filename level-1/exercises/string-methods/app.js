function capilizeAndLowercase(str) {
  return str.toUpperCase() + str.toLowerCase();
}
console.log(capilizeAndLowercase("HelLo"));

function returnFirstHalf(str) {
  return str.slice(0, Math.floor(str.length / 2)).length;
}

console.log(returnFirstHalf("Hello"));
console.log(returnFirstHalf("Hello World"));

function returnFirstHalf2(str) {
  return str.slice(0, Math.floor(str.length / 2));
}

console.log(returnFirstHalf2("Hello"));
console.log(returnFirstHalf2("Hello World"));

function capilizeAndLowercase2(str) {
  let firstHalf = str.slice(0, Math.floor(str.length / 2));
  let secondHalf = str.slice(Math.floor(str.length / 2));
  return firstHalf.toUpperCase() + secondHalf.toLowerCase();
}

console.log(capilizeAndLowercase2("Hello"));
console.log(capilizeAndLowercase2("Hello World"));


function spaceToUppercase (str){
str = str.split(" ")
let convertedArray = []
for(let x = 0; x < str.length; x++){
let firstLetter = str[x].split("").slice(0,1)
let secondHalf =str[x].split("").slice(1).join("")
let firstUpperCase = firstLetter.join("").toUpperCase().split("")
let upperCaseWords = firstUpperCase  + secondHalf
convertedArray.push(upperCaseWords)
}
return convertedArray.join(" ")
}

console.log(spaceToUppercase("hey friends! practice practice practice!"))


