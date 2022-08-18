var form = document.getElementById("arline-form");
var submit = document.getElementById("submit");
var query = document.querySelector;
console.dir(elements["vegan"].checked);
function formAlert() {
  var firstName = elements["first-name"].value;
  var lastName = elements["last-name"].value;
  var age = elements["age"].value;
  var gender = elements["gender"].value;
  var location = elements["travel-location"].value;
  var diet = [];
  if (elements["vegan"].checked) {
    diet.push(document.getElementById("vegan").value);
  }
  if (elements["gluten"].checked) {
    diet.push(document.getElementById("gluten").value);
  }
  if (elements["paleo"].checked) {
    diet.push(document.getElementById("paleo").value);
  }

  alert(
    "First Name: " +
      firstName +
      "\nLast Name: " +
      lastName +
      "\nAge: " +
      age +
      "\nGender: " +
      gender +
      "\nTravel Location: " +
      location +
      "\nDiet: " +
      diet +
      "\nAwesome, now if you die, it won't be an accident.."
  );


}

submit.addEventListener("click", formAlert);
