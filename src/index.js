import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
//import { CalculateCalories } from './components/CalculateCalories';
//import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


//import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* <CalculateCalories /> */}
   <App/>
  {/* <BrowserRouter>
  <App/>
  </BrowserRouter> */}

  </React.StrictMode>

    
);


