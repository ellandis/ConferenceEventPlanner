import LandingPage from "./components/LandingPage.jsx";
import "./App.css";
import ProductPage from "./components/ProductPage.jsx";
import React from "react";
import Nav from "./components/Nav.jsx";
import Addon from "./components/Addon.jsx";
import Meals  from "./components/Meals.jsx";
import ShoppingCart from "./components/shoppingCart.jsx";

function App() {
  return (
    <>
      <Nav/>
      <LandingPage />
      <ProductPage />
      <Addon/>
      <Meals/>
      <ShoppingCart/>
    </>
  );
}
// Tan#b68d40Cream#f4ebd0Charcoal#122620Gold#d6ad60




export default App;
