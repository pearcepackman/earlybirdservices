import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Landscaping from './pages/landscaping'
import Contact from './pages/contact'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<App/>} />
        <Route path = "/landscaping" element = {<Landscaping/>} />
        <Route path = "/contact" element = {<Contact/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
