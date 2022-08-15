let ul = document.getElementById("ul");
let itemValue = document.addItem.title.value;
let listArray = JSON.parse(localStorage.getItem("listArray")) || [];
let updatedList = []

clearLocalStore();
renderItems();

//submit and save to local storage (local storage does not work right now)
function renderItems() {
  document.addItem.addEventListener("submit", function (event) {
    event.preventDefault();
    listArray.push(document.addItem.title.value);
    localStorage.setItem("listArray", JSON.stringify(listArray));
    document.addItem.title.value = "";
    listItems();
   });
}


//shows the list items after submit is clicked
function listItems() {
  let li = document.createElement("li");
  for (let x = 0; x < listArray.length; x++) {
    li.id = "li";
    li.className = "list";
    document.getElementById("li");
    document.getElementById("removeBut");
    li.textContent = listArray[x];
    ul.append(li);
    addEditButton(li);
    addRemoveButton(li);
  }
}

// adds the edit function and allows you to change the text value
function addEditButton(li) {
  let editBut = document.createElement("button");
  editBut.className = "edit";
  editBut.textContent = "Edit";
  editBut.addEventListener("click", () => {
    let editNewInputChild = document.createElement("input");
    editNewInputChild.value = li.firstChild.data;
    editNewInputChild.className = "editinput";
    li.appendChild(editNewInputChild);
    editBut.textContent = "save";
    editBut.addEventListener("click", () => {
    editNewInputChild.parentElement.textContent = editNewInputChild.value;
 
     editBut.textContent = "Edit";
     editBut.addEventListener("click", addEditButton(li));
      addRemoveButton(li);
      //for(let i =0; i< ul.children.length; i++){
      //  updatedList.push(ul.children[i].textContent);   
    //}  
      //localStorage.clear()
    //listArray.push(updatedList)
    //JSON.parse(localStorage.getItem("listArray"))
     //console.log(listArray)
    });
  });
  //listArray = []
  li.appendChild(editBut);
}

// adds the remove (X) button which removes the item from the list
function addRemoveButton(li) {
  let removeButton = document.createElement("button");
  removeButton.className = "removebutton";
  removeButton.textContent = "X";
  removeButton.addEventListener("click", () =>
    removeButton.parentElement.remove()
  );
  li.appendChild(removeButton);
}

//Button to clear Local storage
function clearLocalStore() {
  let clearButton = document.createElement("button");
  clearButton.addEventListener("click", () => localStorage.clear());
  clearButton.textContent = "Clear Local Storage";
  document.body.append(clearButton);
}


/*function gatherALLData() {
  let gatherAllArray = [];
  if (gatherAllArray != []) {
    localStorage.setItem("gatherAllArray", JSON.stringify(gatherAllArray));
  }
  for (let i = 0; i < ul.children.length; i++) {
    gatherAllArray.push(ul.children[i].textContent.replace("EditX", ""));
  }
  console.log(gatherAllArray); 
}*/