const title = document.createElement("h1");
const squareUL = document.createElement("ul");
const square = document.createElement("li");

title.textContent = "DJ JS";
title.style.color = "black";
squareUL.textContent = "Interact with the square";
squareUL.style.listStyle = "none";
//First Square
square.style.marginTop = "20px";
square.style.width = "100px";
square.style.height = "100px";
square.style.border = "solid 2px none";
square.style.backgroundColor = "black";
//mouse event listeners
square.addEventListener("mouseover", function () {
  square.style.backgroundColor = "blue";
});
square.addEventListener("mousedown", function () {
  square.style.backgroundColor = "red";
});
square.addEventListener("mouseup", function () {
  square.style.backgroundColor = "yellow";
});
square.addEventListener("dblclick", function () {
  square.style.backgroundColor = "green";
});
document.addEventListener("wheel", function () {
  square.style.backgroundColor = "orange";
});
// keyboard event conditional statements
document.body.addEventListener("keyup", function (event) {
  if (event.key === "b") {
    square.style.backgroundColor = "blue";
  } else if (event.key === "r") {
    square.style.backgroundColor = "red";
  } else if (event.key === "y") {
    square.style.backgroundColor = "yellow";
  } else if (event.key === "g") {
    square.style.backgroundColor = "green";
  } else if (event.key === "o") {
    square.style.backgroundColor = "orange";
  }
});
//appends
document.body.append(title);
title.append(squareUL);
squareUL.append(square);
