
var readline = require('readline-sync');
 input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));


// console.log(String.fromCharCode(65,90))
// ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function cypher (str, num) {

let answer = ""
for(let x = 0; x < str.length; x++)
{
let asciiNum = str[x].charCodeAt()
answer+= String.fromCharCode(asciiNum + num) 
  
}
return answer
}

console.log(cypher(input, shift))