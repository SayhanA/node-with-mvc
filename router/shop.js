const { getIndex, getProductList, getCart, getCheckout } = require("../controllers/shop");

const route = require("express").Router();

route.get("/", getIndex);

route.get("/products", getProductList);

route.get("/cart", getCart);

route.get("/checkout", getCheckout);

module.exports = route;
