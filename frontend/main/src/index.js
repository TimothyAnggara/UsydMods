import React from 'react';
import ReactDOM from 'react-dom/client';
import Calender from './calender/main';
import "../src/index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <div id="mainBody">
      <Calender />
    </div>
    
  </React.StrictMode>
);

