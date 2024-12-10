const {
  getProduct,
  postProduct,
  getProducts,
  getProductForm,
  getEditProduct,
} = require("../controllers/admin");

const route = require("express").Router();

route.get("/add-product", getProductForm);

route.get("/products", getProducts);

route.post("/add-product", postProduct);

route.get("/edit-product", getEditProduct);

module.exports = route;
