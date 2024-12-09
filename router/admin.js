const { getProduct, postProduct } = require("../controllers/product");

const route = require("express").Router();

route.get("/", getProduct);

route.post("/", postProduct);

module.exports = route;
