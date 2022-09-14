import data from "./data.js";
import "./App.css";
import Card from "./components/Card";
import Nav from "./components/Nav";

function App() {
  const allData = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div className="app">
      <Nav />
      {allData}
    </div>
  );
}

export default App;
