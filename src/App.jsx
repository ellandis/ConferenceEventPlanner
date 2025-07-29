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
      <ProductPage id="venue" />
      
    </>
  );
}
// Tan #b68d40 Cream #f4ebd0 Charcoal #122620 Gold #d6ad60




export default App;
