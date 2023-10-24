import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProductList() {
  const [suppliers, setSupliers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    loadSuppliers();
  }, []);
  const loadSuppliers = () => {
    axios.get("https://northwind.vercel.app/api/products").then((res) => {
      setSupliers(res.data);
      setLoading(false);
    });
  };
  const deleteSupplier = (id) => {
    var result = window.confirm("Are you sure?");

    if (result) {
      setLoading(true);
      axios
        .delete(`https://northwind.vercel.app/api/products/${id}`)
        .then((res) => {
          loadSuppliers();
        })
        .catch((err) => {
          alert("Error happened: " + err);
        });
    }
  };

  return (
    <>
      {isLoading ? (
        <h1>Loading... Please Wait</h1>
      ) : (
        <table className="w3-table w3-striped">
          <thead className="w3-green">
            <tr>
              <td>Product Name</td>
              <td>Unit Price</td>
              <td>Unit in Stock</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {suppliers &&
              suppliers.map((item) => {
                return (
                  <tr className="w3-hover-text-green">
                    <td>{item.name}</td>
                    <td>{item.unitPrice}</td>
                    <td>{item.unitsInStock}</td>
                    <td>
                      <button
                        className="w3-button w3-red"
                        onClick={() => deleteSupplier(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </>
  );
}

export default ProductList;
