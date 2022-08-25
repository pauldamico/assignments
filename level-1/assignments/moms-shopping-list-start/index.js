let ul = document.getElementById("ul");
let listArray = JSON.parse(localStorage.getItem("listArray")) || []; //fix this
//let itemValue = document.addItem.title.value;

//let updatedList = [] //not currently in use

clearLocalStore();
renderItems();


function renderItems() {
  document.addItem.addEventListener("submit", function (event) {  //submit button event
    event.preventDefault();                                       // prevents page from refreshing
    listArray.push(document.addItem.title.value);                 //pushes the main input values to the list array
    localStorage.setItem("listArray", JSON.stringify(listArray)); //saves list array to Local Storage
    document.addItem.title.value = "";                            //sets value back to a blank string
    listItems();                                                  //calls the listItems function
   });
}


//shows the list items from list Arrayafter submit is clicked
function listItems() {
  let li = document.createElement("li");         // creates list element and assigns it to li
  for (let x = 0; x < listArray.length; x++) {   //for loop for listArray items
    li.id = "li";                                //sets <li id="li">
    li.className = "list";                       //sets the class for all the li elements
    li.textContent = listArray[x];               //applies the strings from all the listArray indexs to seperate li.textcontents
    ul.append(li);                               //appends each li item and displays the list
    addEditButton(li);                           //adds edit button to each list item (calls addEditButton function)
    addRemoveButton(li);                         //adds removebutton (X) to each list item (calls addRemoveButton function)

  }
  console.log(localStorage)
}

// adds the edit function and allows you to change the text value
function addEditButton(li) {
  let editBut = document.createElement("button");                              //creates the edit button element
  editBut.className = "edit";                                                  //sets class to edit
  editBut.textContent = "Edit";                                                //names the button edit
  editBut.addEventListener("click", () => {                                    //adds eventlistener for when edit is clicked
    let editNewInputChild = document.createElement("input");                   //creates a new inputfield element
    editNewInputChild.value = li.firstChild.data;                              //prefills the inputfield to the orginal li value
    editNewInputChild.className = "editinput";                                 //sets class to editinput
    li.appendChild(editNewInputChild);                                         //adds/shows the new inputfield element
    editBut.textContent = "save";                                              //changes the edit textContent to "save"
    editBut.addEventListener("click", () => {                                  //adds a eventListener for when save is clicked
    editNewInputChild.parentElement.textContent = editNewInputChild.value;     //updates the orginal text value to the edited value
     editBut.textContent = "Edit";                                             //sets the button textContent back to "Edit"
     editBut.addEventListener("click", addEditButton(li));                     //eventListener to Loop the addEditButton function if clicked again
      addRemoveButton(li);                                                     //adds the RemoveButton back on
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

// adds the remove (X) button which removes the remove button's parent element thus also removing the child elements.
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