import Navbar from "./components/Navbar";
import FriendList from "./components/FriendList";
import "./App.css";

function App() {
  return (
    <div className="main-div">
      <Navbar />
<div className ="main-friendlist-div">
      <FriendList />
      </div>
    </div>
  );
}

export default App;
