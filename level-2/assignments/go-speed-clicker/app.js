const button = document.getElementById("but");
const countDown = document.getElementById("timer");
const clicks = document.getElementById("clicks");

let timeCountDown = 10;
let mouseClicks = JSON.parse(localStorage.getItem("mouseClicks"))
clicks.textContent =`Clicks `+ mouseClicks


button.addEventListener("click", startButtonClick );
function readdStartButton(){
    button.addEventListener("click", startButtonClick );
}
function clickFunc() {
    mouseClicks += 1
    localStorage.setItem("mouseClicks", mouseClicks)
  clicks.textContent =`Clicks ${mouseClicks}`
}
function removeClick() {
  document.body.removeEventListener("click", clickFunc);
 }

function timer() {
  timeCountDown += -1;
  
  if (timeCountDown > 0) {
    countDown.textContent = `Time Left: ${timeCountDown}`;
  } else countDown.textContent = "Time Ended";
 
}


function startButtonClick (){
    mouseClicks = 0
    button.removeEventListener("click", startButtonClick );
        document.body.addEventListener("click", clickFunc);
      
        const timeInt = setInterval(timer, 1000);
        setTimeout(stopTimeInt, 10000);
        function stopTimeInt() {
          clearInterval(timeInt);
          timeCountDown = 10;
        }
        setTimeout(removeClick, 10000);
        setTimeout(readdStartButton, 10000)
}