let title = document.querySelectorAll("h1")
let list = document.querySelectorAll("li#list")

for(let x =0; x < title.length; x++){
title[x].textContent = "New Title " + x}

list[0].textContent = "New List 1"

//test