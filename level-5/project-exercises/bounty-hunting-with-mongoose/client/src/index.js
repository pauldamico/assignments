import React from 'react';
import ReactDOM from 'react-dom/client';
import {BountyContextProvider}  from './bountyContext'
import App from './App';
import {BrowserRouter} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <BountyContextProvider>
    <App />
    </BountyContextProvider>
  </React.StrictMode>
  </BrowserRouter>
);


