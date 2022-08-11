const header = document.getElementById("header")
const title = document.createElement("h1")
const subtitle1 = document.createElement("span")
const subtitle2 = document.createElement("span")

title.textContent = "JavaScript Made This!!"
title.classList.add("header")
subtitle1.textContent = "Paul"
subtitle1.classList.add("name")
subtitle2.textContent = " wrote the JavaScript"
header.append(title, subtitle1, subtitle2)

console.log(header)