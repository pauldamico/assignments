getData();
deleteAll();

function clearList() {
  // document.getElementById("todo-list-container").innerHTML = "";
  while (document.getElementById("todo-list-container").firstChild) {
    document
      .getElementById("todo-list-container")
      .removeChild(document.getElementById("todo-list-container").firstChild);
  }
}
function getData() {
  clearList(); //clears everything locally so it doesn't show duplicates
  axios
    .get("https://api.vschool.io/pauldamico/todo")
    .then((response) => listData(response.data))
    .catch((error) => console.log(error));
}

function listData(data) {                                            //this lists all of the data from the DB
  for (let x = 0; x < data.length; x++) {
    const div = document.createElement("div");
    div.className = "list-div";
    let titleEl = document.createElement("h3");
    let priceEl = document.createElement("h3");
    let descriptionEl = document.createElement("h3");
    descriptionEl.className = "description";
    let imageurlEL = document.createElement("img");
    const editButtonEl = document.createElement("button");
    let completeCheckBox = document.createElement("input");
    let checkBoxLabel = document.createElement("label");
    let checkBoxLabelDiv = document.createElement("span");
    checkBoxLabel.textContent = "Finished?";
    completeCheckBox.type = "checkbox";
    completeCheckBox.name = "checkbox";
    editButtonEl.textContent = "Edit";
    const deleteButtonEl = document.createElement("button");
    deleteButtonEl.textContent = "Delete";
    titleEl.textContent = `${data[x].title}`;
    priceEl.textContent = `${data[x].price}`;
    descriptionEl.textContent = `${data[x].description}`;
    imageurlEL.src = `${data[x].imgUrl}`;
    completeCheckBox.checked = data[x].completed;
    document.getElementById("todo-list-container").appendChild(div);
    div.appendChild(titleEl);
    div.appendChild(priceEl);
    div.appendChild(descriptionEl);
    div.appendChild(imageurlEL);
    div.appendChild(deleteButtonEl);
    div.appendChild(editButtonEl);
    div.appendChild(checkBoxLabelDiv);
    checkBoxLabelDiv.appendChild(checkBoxLabel);
    checkBoxLabelDiv.appendChild(completeCheckBox);
    div.className = completeCheckBox.checked ? "list-complete" : "list-div";
    completeCheckBox.addEventListener("click", function () {                          // Checkbox eventListener
      checkboxColor(completeCheckBox, data[x]._id, div);
    });
    deleteButtonEl.addEventListener("click", function () {
      //deleteButton eventListener
      removeItem(data[x]._id, titleEl, data[x].title);
      console.log("removed");
    });
    editButtonEl.addEventListener("click", function () {                              //editButton eventListener
      let titleElInput = document.createElement("input");
      let priceElInput = document.createElement("input");
      let descriptionElInput = document.createElement("textarea");
      let imageurlELInput = document.createElement("input");
      let saveButton = document.createElement("button");
      titleElInput.value = titleEl.textContent;
      imageurlELInput.value = imageurlEL.currentSrc;
      priceElInput.value = priceEl.textContent;
      descriptionElInput.className = "description";
      descriptionElInput.value = descriptionEl.textContent;
      div.replaceChild(titleElInput, titleEl);                                         //Replace all Child Elements In Edit
      div.replaceChild(priceElInput, priceEl);
      priceElInput.type = "number";
      div.replaceChild(descriptionElInput, descriptionEl);
      div.replaceChild(imageurlELInput, imageurlEL);     
      saveButton.textContent = "Save";  
      div.replaceChild(saveButton, editButtonEl);
      // div.replaceChild(imageurlELInput, imageurlEL);           //previously I removed all of the children elements instead of replacing which caused issues with the page refreshing
      // div.removeChild(deleteButtonEl);
      // div.removeChild(checkBoxLabelDiv);
      // titleElInput.value = data[x].title;
      // priceElInput.value = data[x].price;
      // descriptionElInput.className = "description";
      // descriptionElInput.value = data[x].description;
      // imageurlELInput.value = data[x].imgUrl;
      // div.appendChild(titleElInput);
      // div.appendChild(priceElInput);
      // div.appendChild(descriptionElInput);
      // div.appendChild(imageurlELInput);
      // div.appendChild(deleteButtonEl);
      // div.appendChild(saveButton);
      // div.appendChild(checkBoxLabelDiv);
      // checkBoxLabelDiv.appendChild(checkBoxLabel);
      // checkBoxLabelDiv.appendChild(completeCheckBox);
      // editButtonEl.textContent = "Save";
      saveButton.addEventListener("click", function () {
        div.replaceChild(titleEl, titleElInput);                        //Sets child elements back to default
        titleEl.textContent = titleElInput.value;
        div.replaceChild(priceEl, priceElInput);
        priceEl.textContent = priceElInput.value;
        div.replaceChild(descriptionEl, descriptionElInput);
        descriptionEl.textContent = descriptionElInput.value;
        div.replaceChild(imageurlEL, imageurlELInput);
        imageurlEL.src = imageurlELInput.value;
        div.replaceChild(editButtonEl, saveButton);
        editButtonEl.textContent = "Edit";
        // Save eventListener

        saveEdited(                                                      //updates all edited data to database
          data[x]._id,
          titleEl,
          priceEl,
          descriptionEl,
          imageurlEL,
          completeCheckBox
        );
      });
    });
  }
}

function checkboxColor(completeCheckBox, id, div) {                     //updates the checkbox value to the database when clicked
  const checkBoxUpdate = { completed: completeCheckBox.checked };
  axios
    .put(`https://api.vschool.io/pauldamico/todo/${id}`, checkBoxUpdate)
    .then((response) => {
      div.className = completeCheckBox.checked ? "list-complete" : "list-div";
    })
    .catch((err) => console.log(err));
}
function saveEdited(                                                     //updates everything that was edited to the database
  id,
  titleEl,
  priceEl,
  descriptionEl,
  imageurlEL,
  completeCheckBox
) {
  const updates = {
    title: titleEl.textContent,
    price: priceEl.textContent,
    description: descriptionEl.textContent,
    imgUrl: imageurlEL.src,
    completed: completeCheckBox.checked,
  };
  axios
    .put(`https://api.vschool.io/pauldamico/todo/${id}`, updates)
    .then((response) => alert(`ID ${id} has been updated`))
    .catch((error) => console.log(error));
}
function removeItem(id, titleEl, title) {                             //Deletes entire object out of database and deletes parent element of a random child(titleEl)                 
  alert(`${title} has been deleted`);
  axios
    .delete(`https://api.vschool.io/pauldamico/todo/${id}`)
    .then((response) => {
      titleEl.parentElement.remove();
    })
    .catch((error) => console.log(error));
}
function deleteAll() {                                               //deletes all IDs at once from database (most likely refreshes the page after)  
  const removeButton = document.getElementById("remove-all");
  removeButton.addEventListener("click", () => {
    axios
      .get("https://api.vschool.io/pauldamico/todo")
      .then((response) => {
        const apiData = response.data;
        console.log(apiData);
        let idList;
        let titleList;
        for (let x = 0; x < apiData.length; x++) {
          idList = apiData[x]._id;
          titleList = apiData[x].title;
          console.log(`Removed: ${titleList}`);
          axios.delete(`https://api.vschool.io/pauldamico/todo/${idList}`);
        }
      })
      .catch((error) => console.log(error));
    clearList();
  });
}
const todoForm = document.todoForm;                                 //pulls all data from database when page first loads and lists all elements
todoForm.addEventListener("submit", function (event) {              //submit event listener is located here
  event.preventDefault();
  const newTodoData = {
    title: document.todoForm.title.value,
    price: document.todoForm.price.value,
    description: document.todoForm.description.value,
    imgUrl: document.todoForm.imgurl.value,
    completed: false,
  };
  axios
    .post("https://api.vschool.io/pauldamico/todo", newTodoData)
    .then((response) => getData())
    .catch((error) => console.log(error));

  document.todoForm.title.value = "";
  document.todoForm.price.value = "";
  document.todoForm.description.value = "";
  document.todoForm.imgurl.value = "";
});
