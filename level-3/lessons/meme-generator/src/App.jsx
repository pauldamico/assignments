import Navbar from './components/Navbar'
import Main from './components/Main'
import './App.css'
import memeData from './memeData'

function App() {


  return (
    <div className="app">
<Navbar/>
<Main data ={memeData} />
    </div>
  )
}

export default App
