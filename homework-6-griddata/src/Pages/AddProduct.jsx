import React from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { object, string, number } from "yup";

const requiredFieldError = "This field is required !";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#CECECE",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const addProductSchema = object().shape({
  name: string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required(requiredFieldError),
  stock: number().required(requiredFieldError),
  unitPrice: number().min(1, "Price not be Zero").required(requiredFieldError),
  quantityPerUnit: number().required(requiredFieldError),
});

function AddProduct() {
  const formik = useFormik({
    initialValues: {
      name: "",
      stock: "",
      unitPrice: "",
      quantityPerUnit: "",
    },
    validationSchema: addProductSchema,
    onSubmit: (values) => {
      addProduct(values);
    },
  });
  const addProduct = (data) => {
    axios
      .post("https://northwind.vercel.app/api/products", data)
      .then((res) => {
        console.log(res);
        alert("Success");
      });
  };
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ width: "100%" }}>
          <Grid container padding={5}>
            <Grid xs={10} sm={5} padding={2}>
              <TextField
                type="text"
                name="name"
                id="outlined-basic"
                label="Name"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.errors.name ? (
                <span style={{ color: "red" }}>{formik.errors.name}</span>
              ) : (
                <></>
              )}
            </Grid>
            <Grid xs={10} sm={5} padding={2}>
              <TextField
                name="stock"
                type="number"
                id="outlined-basic"
                label="Stock"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.stock}
              />
              {formik.errors.stock ? (
                <span style={{ color: "red" }}>{formik.errors.stock}</span>
              ) : (
                <></>
              )}
            </Grid>
            <Grid xs={10} sm={5} padding={2}>
              <TextField
                name="unitPrice"
                type="number"
                id="outlined-basic"
                label="Unit Price"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.unitPrice}
              />
              {formik.errors.unitPrice ? (
                <span style={{ color: "red" }}>{formik.errors.unitPrice}</span>
              ) : (
                <></>
              )}
            </Grid>
            <Grid xs={10} sm={5} padding={2}>
              <TextField
                name="quantityPerUnit"
                type="number"
                id="outlined-basic"
                label="Quantity Per Unit"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.quantityPerUnit}
              />
              {formik.errors.quantityPerUnit ? (
                <span style={{ color: "red" }}>
                  {formik.errors.quantityPerUnit}
                </span>
              ) : (
                <></>
              )}
            </Grid>
            <Grid xs={10} sm={5} padding={2}>
              <Button type="submit" variant="contained">
                Add Product
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
    </>
  );
}

export default AddProduct;
