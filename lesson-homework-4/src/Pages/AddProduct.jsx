import axios from "axios";
import React, { useState } from "react";

function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    unitPrice: "",
    stock: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (checkNullSpace()) alert("Empty Space");
    else {
      var newProduct = {
        supplierId: 1,
        categoryId: 1,
        quantityPerUnit: "none",
        unitPrice: formData.unitPrice,
        unitsInStock: formData.stock,
        unitsOnOrder: 1,
        reorderLevel: 1,
        discontinued: false,
        name: formData.name,
      };

      axios
        .post("https://northwind.vercel.app/api/products", newProduct)
        .then((res) => {
          console.log(res.data);
          alert("Item Add Successly!");
        });
    }
  };

  const checkNullSpace = () => {
    return (
      !formData.name.trim().length ||
      !formData.unitPrice.trim().length ||
      !formData.stock.trim().length
    );
  };
  return (
    <>
      <div
        className="w3-card-4"
        style={{ width: "40%", margin: "auto", marginTop: "50px" }}
      >
        <div className="w3-container w3-green">
          <h2>Add Product</h2>
        </div>
        <form className="w3-container" onSubmit={handleSubmit}>
          <p>
            <label>Name</label>
            <input
              className="w3-input"
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => handleChange(e)}
            />
          </p>
          <p>
            <label>Unit Price</label>
            <input
              className="w3-input"
              type="text"
              name="unitPrice"
              value={formData.unitPrice}
              onChange={handleChange}
            />
          </p>
          <p>
            <label>Stock</label>
            <input
              className="w3-input"
              type="text"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
            />
          </p>
          <p>
            <button
              type="submit"
              className="w3-button w3-green"
              style={{
                float: "right",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              Add
            </button>
          </p>
        </form>
      </div>
    </>
  );
}

export default AddProduct;
