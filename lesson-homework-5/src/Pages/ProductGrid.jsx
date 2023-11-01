import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function ProductGrid() {
  const [products, setProducts] = useState([]);
  const url = "https://northwind.vercel.app/api/products";

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res);
      setProducts(res.data);
    });
  }, []);

  const deleteProductById = (id) => {
    console.log(id);
  };

  const columns = [
    { field: "id", headerName: "Number", width: 70 },
    { field: "name", headerName: "Name", width: 450 },
    { field: "unitPrice", headerName: "Unit Price", width: 150 },
    {
      field: "unitsInStock",
      headerName: "Unit in Stock",
      width: 150,
    },
    {
      field: "deleteById",
      headerName: "Delete",
      width: 150,
      renderCell: (params) => {
        return (
          <Button
            onClick={() => deleteProductById(params.row.id)}
            variant="contained"
          >
            Delete
          </Button>
        );
      },
    },
  ];
  return (
    <>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          "& .nostock": {
            backgroundColor: "#FF0000",
          },
          "& .hasstock": {
            backgroundColor: "#FFFFFF",
          },
        }}
      >
        <DataGrid
          columns={columns}
          rows={products}
          getCellClassName={(params) => {
            return params.value <= 0 ? "nostock" : "hasstock";
          }}
        />
      </Box>
    </>
  );
}

export default ProductGrid;
