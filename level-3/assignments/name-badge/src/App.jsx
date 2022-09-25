import React, { useState } from 'react'
import Badge from './components/Badge'
import Main from './components/Main'
import Nav from './components/Nav'

import './App.css'

function App() {

  const [badge, setBadge] = useState({firstName:"", lastName:"", email:"", birth:"", phone:"", food:"", info:""})
  const [badgeList, setBadgeList] = useState([])

function changeHandler (e){
  const {name, value} = e.target
setBadge(prev=>({...prev, [name]:value}))}


function submitHandler (e){
  e.preventDefault()
setBadgeList(prev=>([...prev, {...badge}]))
console.log(badgeList)
}

  const badgeElements = badgeList.map(item=>(
    <Badge key={Math.random()}>
      <ul>
  <li>{item.firstName}</li>,
  <li>{item.lastName}</li>,
  <li>{item.email}</li>,
  <li>{item.birth}</li>,
  <li>{item.phone}</li>,
  <li>{item.food}</li>
  </ul>
  </Badge>
  ))

  return (
    <div className="App">
      <Nav/>
      <Main {...badge} onSubmit={submitHandler} onChange={changeHandler}/>
     {badgeElements}

    </div>
  )
}

export default App
