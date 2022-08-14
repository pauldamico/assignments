let ul = document.getElementById("ul");
let itemValue = document.addItem.title.value;

clearLocalStore()
saveItems();

//submit and save to local storage (local storage does not work right now)
function saveItems() {
  document.addItem.addEventListener("submit", function (event) {
    event.preventDefault();
    let newValue = JSON.parse(localStorage.getItem("newValue"));
    if (!newValue) {
      newValue = [];
    }
    newValue.push(document.addItem.title.value);
    localStorage.setItem("newValue", JSON.stringify(newValue));
    console.log(newValue);
    document.addItem.title.value = "";
    showList(newValue);
  });
}

//shows the list items after submit is clicked
function showList(newValue) {
  let li = document.createElement("li");
  for (let x = 0; x < newValue.length; x++) {
    li.id = "li";
    document.getElementById("li");
    document.getElementById("removeBut");
    li.textContent = newValue[x];
  }
  removeItem(li);
  editItemName(li);
  ul.append(li);
}

// adds the edit function and allows you to change the text value
function editItemName(li) {
  let editBut = document.createElement("button");
  editBut.textContent = "Edit";
  editBut.addEventListener("click", () => {
    let newInput = document.createElement("input");
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