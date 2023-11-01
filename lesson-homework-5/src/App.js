import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import AddProduct from "./Pages/AddProduct";
import ProductGrid from "./Pages/ProductGrid";
import HomePage from "./Pages/HomePage";
import "./App.css";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";

function App() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/addproduct" key="/">
              Add Product
            </Button>
            <Button color="inherit" component={Link} to="/productgrid" key="/">
              Product Grid
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/productgrid" element={<ProductGrid />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
