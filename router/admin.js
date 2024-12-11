const {
  getProduct,
  postProduct,
  getProducts,
  getProductForm,
  getEditProduct,
  postEditProduct,
} = require("../controllers/admin");

const route = require("express").Router();

route.get("/add-product", getProductForm);

route.get("/products", getProducts);

route.post("/add-product", postProduct);

route.get("/edit-product/:productId", getEditProduct);

route.post("/edit-procuct", postEditProduct);

module.exports = route;
