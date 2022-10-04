import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {UglyContextProvider, UglyContext} from "./uglyContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UglyContextProvider>
    <App />
    </UglyContextProvider>
  </React.StrictMode>
)
