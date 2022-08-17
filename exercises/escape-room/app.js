var readlineSync = require("readline-sync");

let questions = readlineSync.question(
  "There are 2 items located somewhere in the room. " +
  "One object is located in a small hole in the wall, the other is located under the bed. " +
  "Put hand in hole or under the bed?:  "  + "please choose `bed` or `hole`:  "
);
if (questions == "bed") {
  questions = readlineSync.question("You have located the Key!!!.  Use it on the door?:  " +"`yes` or `no`:   ");
questions == "yes" ? console.log("you win!!!") : console.log ("you reach into hole instead of using key on door and die")


} else if(questions == "hole") {console.log("you reach into the hole and die instantly");}


