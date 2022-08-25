
// i wrote all of it out for practice.  I would just put the forms in HTML otherwise
const addDiv = document.createElement("div");
const addList = document.createElement("h3");
const addForm = document.createElement("form");
const addInputOne = document.createElement("input");
const addInputTwo = document.createElement("input");
const addBut = document.createElement("button");
addForm.name = "add-form";
addInputOne.type="number"
addInputTwo.type="number"
addInputOne.name = "add-input-one";
addInputTwo.name = "add-input-two";
addList.className = "list"


const subDiv = document.createElement("div");
const subList = document.createElement("h3");
const subForm = document.createElement("form");
const subInputOne = document.createElement("input");
const subInputTwo = document.createElement("input");
const subBut = document.createElement("button");
subForm.name = "sub-form";
subInputOne.type="number"
subInputTwo.type="number"
subInputOne.name = "sub-input-one";
subInputTwo.name = "sub-input-two";
subList.className = "list"

const multDiv = document.createElement("div");
const multList = document.createElement("h3");
const multForm = document.createElement("form");
const multInputOne = document.createElement("input");
const multInputTwo = document.createElement("input");
const multBut = document.createElement("button");
multForm.name = "mult-form";
multInputOne.type="number"
multInputTwo.type="number"
multInputOne.name = "mult-input-one";
multInputTwo.name = "mult-input-two";
multList.className = "list"

document.body.append(addDiv);
addDiv.className = "adddiv";
addBut.textContent = "Add";
addDiv.append(addForm);
addForm.appendChild(addInputOne);
addForm.appendChild(addInputTwo);
addForm.appendChild(addBut);

document.body.append(subDiv);
subDiv.className = "subdiv";
subBut.textContent = "Subtract";
subDiv.append(subForm);
subDiv.append(subList);
subForm.appendChild(subInputOne);
subForm.appendChild(subInputTwo);
subForm.appendChild(subBut);

document.body.append(multDiv);
multDiv.className = "multdiv";
multBut.textContent = "Multiply";
multDiv.append(multForm);
multForm.appendChild(multInputOne);
multForm.appendChild(multInputTwo);
multForm.appendChild(multBut);
                                                             // event listeners
addForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const addOne = addForm["add-input-one"].value;
  const addTwo = addForm["add-input-two"].value;
  addDiv.append(addList);                                          //change NaN to 0
  if  (parseInt(addOne) + parseInt(addTwo) > 0 ){addList.textContent = parseInt(addOne) + parseInt(addTwo)}
  else if (parseInt(addOne) + parseInt(addTwo) < 0 ){addList.textContent = parseInt(addOne) + parseInt(addTwo)}
  else{addList.textContent = 0}
  console.log(addList.textContent)
  addInputOne.value = "";
  addInputTwo.value = "";
  
});
subForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("sub");
  const subOne = subForm["sub-input-one"].value;
  const subTwo = subForm["sub-input-two"].value;
  subDiv.append(subList);
  console.log(subForm);                                                   //change NaN to 0
  if  (parseInt(subOne) - parseInt(subTwo) > 0 ){subList.textContent = parseInt(subOne) - parseInt(subTwo)}
  else if (parseInt(subOne) - parseInt(subTwo) < 0 ){subList.textContent = parseInt(subOne) - parseInt(subTwo)}
  else{subList.textContent = 0}

  subInputOne.value = "";
  subInputTwo.value = "";
});

multForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("mult");
  const multOne = multForm["mult-input-one"].value;
  const multTwo = multForm["mult-input-two"].value;
  multDiv.append(multList);
  console.log(multForm);
  multList.textContent = multOne * multTwo;
  multInputOne.value = "";
  multInputTwo.value = "";
});

addDiv.append(addList);
subDiv.append(subList);
multDiv.append(multList);
