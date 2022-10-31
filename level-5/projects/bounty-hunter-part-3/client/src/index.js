import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BountycontextProvider} from './bountyContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <React.StrictMode>
     <BountycontextProvider>
    <App />
    </BountycontextProvider>
  </React.StrictMode>
 
);

