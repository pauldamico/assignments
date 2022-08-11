const header = document.getElementById("header");
const title = document.createElement("h1");
const subTitle = document.createElement("h2");
const messageLeft = document.getElementsByClassName("message left");
const messageRight = document.getElementsByClassName("message right");
const dropDown = document.querySelector("#theme-drop-down");
const form = document.getElementsByName("message");
const messages = document.getElementById("messages");
const input = document.getElementById("input");
const userText = document.createElement("div");
input.value = "";
messageLeft[0].textContent = "How was the game last night";
messageLeft[1].textContent = "Nicee!!! Next time I will have to come";
messageRight[0].textContent = "It was Awesome!";
messageRight[1].textContent = "I Agree!";

dropDown.addEventListener("click", function () {
  for (let x = 0; x < messageLeft.length; x++)
    if (dropDown.value === "theme-one") {
      messageLeft[x].style.backgroundColor = "blue";
      messageLeft[x].style.color = "white";
    } else if (dropDown.value === "theme-two") {
      messageLeft[x].style.backgroundColor = "red";
    }
  for (let x = 0; x < messageRight.length; x++) {
    if (dropDown.value === "theme-one") {
      messageRight[x].style.backgroundColor = "brown";
    } else if (dropDown.value === "theme-two") {
      messageRight[x].style.backgroundColor = "black";
      messageRight[x].style.color = "white";
    }
  }
});

form[0].addEventListener("submit", test);

function test(e) {
  e.preventDefault();

userText.classList.add("message")
userText.classList.add("left")
  userText.innerHTML += `<div>${input.value}</div>`

  messages.append(userText);
  input.value = "";
}

title.textContent = "JavaScript Made This!!";
title.classList.add("header");
subTitle.innerHTML = `<span class="name">Paul</span><span> wrote this JavaScript</span>`;
subTitle.style.textAlign = "center";

header.append(title, subTitle);
