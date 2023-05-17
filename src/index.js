import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Home from './Screens/home';
import Series from './Screens/series';
import Films from './Screens/films';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> <Router>
  <Routes>
    <Route path="/" exact element={<Home />} />
    <Route path="/series" element={<Series />} />
    <Route path="/films" element={<Films />} />
  </Routes>
</Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
