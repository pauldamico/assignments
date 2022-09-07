getData()
deleteAll();
console.log(document.todoForm.description.value)


function clearList(){
   
    while(document.getElementById("todo-list-container").firstChild){
        document.getElementById("todo-list-container").removeChild(document.getElementById("todo-list-container").firstChild);
        //getData()
      }

}
function getData() {    
    
  axios
    .get("https://api.vschool.io/pauldamico/todo")
    .then((response) =>listData(response.data))
    .catch((error) => console.log(error));  
    clearList()
}

function listData(data){
    
    //   let todoData = data;
      for(let x =0; x < data.length; x++){
    //   return todoData.map((item) => {
        const div = document.createElement("div");
        div.className = "list-div"
        const titleEl = document.createElement("h3");
        const priceEl = document.createElement("h3");
        const descriptionEl = document.createElement("h3");
        const imageurlEL = document.createElement("h3");
        const deleteButtonEl = document.createElement("button");
        deleteButtonEl.addEventListener("click", function(){
            removeItem (data[x]._id)
            getData()
        })
        const editButtonEl = document.createElement("button");
        editButtonEl.addEventListener("click", function(){
            editItem (data[x]._id)
            getData()
        })

       console.log(data[x])
       editButtonEl.textContent="Edit"
       deleteButtonEl.textContent="Delete"
        titleEl.textContent = `Title: ${data[x].title}`
        priceEl.textContent = `Price: ${data[x].price}`
        descriptionEl.textContent = `Description: ${data[x].description}`
        imageurlEL.textContent = `Image: ${data[x].imageurl}`
        document.getElementById("todo-list-container").appendChild(div);
        div.appendChild(titleEl)
        div.appendChild(priceEl)
        div.appendChild(descriptionEl)
        div.appendChild(imageurlEL)
        div.appendChild(deleteButtonEl)
        div.appendChild(editButtonEl)
      };
      
}

function editItem (){
    
}

function removeItem (id){
    console.log(id)

    axios.delete(`https://api.vschool.io/pauldamico/todo/${id}`)
    .then(response=>console.log(response))
    .catch(error=>console.log(error))
}


  const todoForm = document.todoForm;
  todoForm.addEventListener("submit", function(event){
event.preventDefault()
    const newTodoData = {
      title: document.todoForm.title.value,
      price: document.todoForm.price.value,
      description: document.todoForm.description.value,
      imgUrl: document.todoForm.imgurl.value,
      completed: false,
    };

    axios
      .post("https://api.vschool.io/pauldamico/todo", newTodoData)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    document.todoForm.title.value = "";
    document.todoForm.price.value = "";
    document.todoForm.description.value = "";
    document.todoForm.imgurl.value = "";
    
    getData()
console.log("show data")
  });


























function deleteAll() {
  const removeButton = document.getElementById("remove-all");
  removeButton.addEventListener("click", () => {
    getData()
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
      clearList()
  });
}
