import LandingPage from "./components/LandingPage.jsx";
import "./App.css";
import ProductPage from "./components/ProductPage.jsx";
import React from "react";
import Nav from "./components/Nav.jsx"

function App() {
  return (
    <>
      <Nav/>
      <LandingPage />
      <ProductPage />
    </>
  );
}

export default App;
