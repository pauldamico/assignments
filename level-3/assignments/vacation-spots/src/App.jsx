import Card from './components/Card'
import vacationSpots from "./vacationSpots"
import Navbar from './components/Navbar'
import './App.css'

function App() {
console.log(vacationSpots)

const spots = vacationSpots.map((spot)=>{return(
<Card {...spot}/>
)
})




  return (
    <div className="App">
      <Navbar/>
      <div className="spots-div">
{spots}
</div>
    </div>
  )
}

export default App
