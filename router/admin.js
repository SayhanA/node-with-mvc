const { getProduct, postProduct } = require("../controllers/product");

const route = require("express").Router();

route.get("/add-product", getProduct);

route.post("/add-product", postProduct);

module.exports = route;
