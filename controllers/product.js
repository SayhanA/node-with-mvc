const path = require("path");
const Product = require("../models/products");

const getProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product Form",
    link: "/admin/add-product",
  });
};

const postProduct = (req, res, next) => {
  const product = new Product(req.body.name, req.body.description);
  product.save();

  res.redirect("/shop");
};

const getProductList = (req, res, next) => {
  const allProducts = Product.fetchAllProduct();
  res.render("shop", { pageTitle: "shop page", props: allProducts });
};

module.exports = { getProduct, postProduct, getProductList };
