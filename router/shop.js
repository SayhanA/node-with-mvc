const { getProductList } = require("../controllers/product");

const route = require("express").Router();

route.get("/", getProductList);

module.exports = route;
