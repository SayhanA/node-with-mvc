const {
  getIndex,
  getProductList,
  getCart,
  getCheckout,
  getOrder,
  getProductById,
} = require("../controllers/shop");

const route = require("express").Router();

route.get("/", getIndex);

route.get("/products", getProductList);

route.get("/product/:productId", getProductById);

route.get("/cart", getCart);

route.get("/orders", getOrder);

route.get("/checkout", getCheckout);

module.exports = route;
