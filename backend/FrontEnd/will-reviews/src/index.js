import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Wrapper from './wrapper/Wrapper'
import Header from "./HeaderTime/Header"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Wrapper />
  </React.StrictMode>
);


