import LandingPage from "./components/LandingPage.jsx";
import "./App.css";
import ProductPage from "./components/ProductPage.jsx";
import Nav  from "./components/Nav.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="" element={<LandingPage/>} />
          <Route path="" element={<ProductPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
