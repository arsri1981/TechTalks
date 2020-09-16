import { BrowserRouter } from 'react-router-dom';
import React from 'react';

import PrimaryRoutes from "./router/primary.routes";
import './App.scss';
import './shared/styles/style.css'
import './shared/styles/responsive.css'
//import './shared/styles/sbadmin.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PrimaryRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
