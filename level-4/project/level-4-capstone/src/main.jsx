import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from "react-router-dom"
import {MMOContextProvider} from "./mmoContext"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MMOContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </MMOContextProvider>
  </React.StrictMode>
)
