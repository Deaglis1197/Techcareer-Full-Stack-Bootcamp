import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Pages/HomePage";
import AddProduct from "./Pages/AddProduct";
import ProductList from "./Pages/ProductList";

function App() {
  return (
    <>
      <div className="w3-bar w3-light-grey">
        <div className="w3-bar w3-light-grey">
          <Link className="w3-bar-item w3-button" to="/">
            Home
          </Link>
          <Link className="w3-bar-item w3-button" to="/productlist">
            Product List
          </Link>
          <Link className="w3-bar-item w3-button" to="/addproduct">
            Add Product
          </Link>
        </div>
      </div>
      <div className="w3-container" style={{ marginTop: "10px" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
