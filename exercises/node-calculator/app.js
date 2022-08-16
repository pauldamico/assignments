const readline = require("readline-sync");

function add(num1, num2) {
  return num1 + num2;
}
function mul(num1, num2) {
  return num1 * num2;
}
function div(num1, num2) {
  return num1 / num2;
}
function sub(num1, num2) {
  return num1 - num2;
}

fistNumber = readline.question("Please enter your first number:");
secondNumber = readline.question("Please enter your second number:");

operation = readline.question(
  "Please enter the operation to perform: add, sub, mul, div:"
);

if (operation === "add") console.log(add(fistNumber, secondNumber));
else if (operation === "mul") console.log(mul(fistNumber, secondNumber));
else if (operation === "div") console.log(div(fistNumber, secondNumber));
else if (operation === "sub") console.log(sub(fistNumber, secondNumber));
