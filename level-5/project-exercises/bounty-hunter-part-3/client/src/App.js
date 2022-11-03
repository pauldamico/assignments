import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Nav from './components/Nav';
import Body from './components/Body';
import Footer from './components/Footer';
import './App.css';


function App() {





  return (
    <div className="app">
<Nav/>
<Routes>
      <Route path="/bounties" element={<Body/>}></Route>
    </Routes>
<Footer/>
    </div>


   
  );
}

export default App;
