import React, {useContext} from "react"
import Footer from './components/Footer';
import Main from './components/Main';
import Nav from './components/Nav';
import './App.css';
import {ThemeContext} from "./themeContext"

function App() {
const {theme} = useContext(ThemeContext)


  return (
    <div className={`app-${theme}`}>
<div>
<Nav/>
<Main/>
<Footer/>
</div>
    </div>
  );
}

export default App;
