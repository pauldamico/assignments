import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BountycontextProvider} from './bountyContext';
import {BrowserRouter} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
  <React.StrictMode>
     <BountycontextProvider>
    <App />
    </BountycontextProvider>
  </React.StrictMode>
  </BrowserRouter>
);

