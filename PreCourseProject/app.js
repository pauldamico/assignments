let answer = document.getElementById("answer-id");
let yesList = document.getElementById("yes-count-id");
let ofCourseList = document.getElementById("ofcourse-count-id");
let noList = document.getElementById("no-count-id");
let notLikelyList = document.getElementById("notlikely-count-id");
let maybeList = document.getElementById("maybe-count-id");
let countElement = document.getElementById("count-id");
let countContainer = document.getElementById("count-container-id");
let revealClick = document.getElementById("clicker-id")

let answerCounts = { maybe: 0, yes: 0, ofCourse: 0, no: 0, notLikely: 0 };
newgame = false
let totalCount = 0;
let answerText = [maybe ="Maybe",  yes ="Yes", ofCourse ="Of Course", no ="No", notLikely = "Not Likely"];

// Adds a onClick to my Reveal Answer Button from javascript
revealClick.addEventListener("click", reveal);

//Reveals a answer which randomly chooses a string in the answerText array by randomizing the index with Math.random
function reveal() {
  let randomIndex = Math.floor(Math.random() * answerText.length);
  answer.innerText = answerText[randomIndex];
  seperateAnswerCounter();
  newgame=false
 }

// Starts a new game and resets everything to it's starting value
function reset() {
  countElement.innerText = 0;
  answer.innerText = [];
  maybeList.innerText = 0;
  yesList.innerText = 0;
  ofCourseList.innerText = 0;
  notLikelyList.innerText = 0;
  noList.innerText = 0;
  totalCount = 0;
  answerCounts.maybe = 0;
  answerCounts.yes = 0;
  answerCounts.ofCourse = 0;
  answerCounts.no = 0;
  answerCounts.notLikely = 0;
  newgame = true
  //if newgame is truely alert Stats have been Reset
 newgame && alert("Stats have been Reset")

}

// for loop to display alert box
function listAnswers() {
  for (let x = 0; x < answerText.length; x++) {
    alert(answerText[x]);
  }
}

//Conditional statements that adds 1 to each element when its string (the strings are in the answerText array) shows up as the answer
function seperateAnswerCounter() {
  totalCount += +1;
  countElement.innerText = totalCount;
  if (answer.innerText === answerText[0]) {
    answerCounts.maybe += +1;
  } else if (answer.innerText === answerText[1]) {
    answerCounts.yes += 1;
  } else if (answer.innerText === answerText[2]) {
    answerCounts.ofCourse += 1;
  } else if (answer.innerText === answerText[3]) {
    answerCounts.no += 1;
  } else if (answer.innerText === answerText[4]) {
    answerCounts.notLikely += 1;
  }



  //bracket notation
  maybeList.innerText = answerCounts["maybe"];
  yesList.innerText = answerCounts["yes"];
  //dot notation
  ofCourseList.innerText = answerCounts.ofCourse;
  noList.innerText = answerCounts.no;
  notLikelyList.innerText = answerCounts.notLikely;
}
