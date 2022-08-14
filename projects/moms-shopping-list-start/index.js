let ul = document.getElementById("ul");
let itemValue = document.addItem.title.value;
let newValue = JSON.parse(localStorage.getItem("newValue")) || []
clearLocalStore()
renderItems();

//submit and save to local storage (local storage does not work right now)
function renderItems() {
  document.addItem.addEventListener("submit", function (event) {
    event.preventDefault();        
    newValue.push(document.addItem.title.value);
    localStorage.setItem("newValue", JSON.stringify(newValue));
  
    document.addItem.title.value = "";
    listItems(newValue);
    console.log(localStorage);

  });

}


//shows the list items after submit is clicked
function listItems(userInputArray) {
  let li = document.createElement("li");
  for (let x = 0; x < userInputArray.length; x++) {
    li.id = "li";
    li.className="list"
    document.getElementById("li");
    document.getElementById("removeBut");
    li.textContent = userInputArray[x];
    ul.append(li);
  }
  editItemName(li);
  removeItem(li);
  }





// adds the edit function and allows you to change the text value
function editItemName(li) {
  let editBut = document.createElement("button");
  editBut.className="edit"
  editBut.textContent = "Edit";
  editBut.addEventListener("click", () => {
    let newInput = document.createElement("input");
    newInput.className="editinput"
    editBut.parentElement.append(newInput);
    editBut.textContent = "Save";
    editBut.addEventListener("click", () => {
      editBut.parentElement.textContent = newInput.value;
      editBut.textContent = "Edit";
      editBut.addEventListener("click", editItemName(li));
      removeItem(li);
    });
  });

  li.appendChild(editBut);
 
}

// adds the remove (X) button which removes the item from the list
function removeItem(li) {
  let removeButton = document.createElement("button");
  removeButton.className = "removebutton";
  removeButton.textContent = "X";
  removeButton.addEventListener("click", () =>
    removeButton.parentElement.remove()
  );
  li.appendChild(removeButton);
}

//Button to clear Local storage
function clearLocalStore(){
  let clearButton = document.createElement("button");
  clearButton.addEventListener("click", () => localStorage.clear());
  clearButton.textContent = "Clear Local Storage";
  document.body.append(clearButton);
}