import { useState } from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import List from "./components/List";
import { nanoid } from "nanoid";

import "./App.css";

function App() {
  const [todo, setTodo] = useState({ id: "", item1: "", date: "" });
  const [listTodo, setListTodo] = useState([]);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setTodo((prev) => ({ ...prev, [name]: value }));
   
  }

  function handleSubmit(e) {
    e.preventDefault();   
    setListTodo((prev) => [
      ...prev,
      { item1: todo.item1, date: todo.date, id: nanoid() },
    ]);
   setTodo(prev=>({item1:"", date:""}))
  }

  function remove(id) {
    setListTodo((prev) => prev.filter((item) => item.id != id));
  }

  const listElement = listTodo.map((item) => (
    <List key={item.id}>
      <li className="item1">{item.item1}</li>
      <li className="date">{item.date}</li>
      <button className="remove"
        onClick={() => {
          remove(item.id);
        }}
      >
        Remove
      </button>
    </List>
  ));

  return (
    <div className="App">
      <Header />
      <Main onSubmit={handleSubmit} onChange={handleChange} {...todo} />
      {listElement}
    </div>
  );
}

export default App;
