import About from './components/About'
import Footer from './components/Footer'
import Info from './components/Info'
import Interests from './components/Interests'
import TopImage from './components/TopImage'

import './App.css'

function App() {
  return(
    <div className="app-main">
    <div className="app-div">
      <TopImage/>
      <div className="body">
      <Info/>
      <About/>
      <Interests/>
      </div>
      <Footer/>
    </div>
    </div>
  )
}

export default App
