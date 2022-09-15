import BlogList from './components/BlogList'
import Navbar from './components/Navbar'
import Header from './components/Header'
import data from './data'

import './App.css'

function App() {

const blogs = data.map((blog)=>{return(
<BlogList {...blog}/>)
})

  return (
    <div className="App">
      <div className ="top-div">
      <Navbar/>
      <Header/>
      </div>
      <div className ="clean-blog-div">
      {blogs}
      </div>
    </div>
  )
}

export default App
