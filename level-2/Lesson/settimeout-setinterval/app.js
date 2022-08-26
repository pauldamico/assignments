const clock = document.getElementById("clock");


function getTime() {
  var now = new Date();
  var hour = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();

  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (sec < 10) {
    sec = `0${sec}`;
  }
  if (min < 10) {
    min = `0${min}`;
  } 
    clock.innerText = `${hour}:${min}  ${sec}`;
  
}

//setInterval(getTime, 1000);
