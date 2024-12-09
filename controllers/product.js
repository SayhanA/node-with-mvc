const path = require("path");

const products = [];

const getProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product Form",
    link: "/admin/add-product",
  });
};

const postProduct = (req, res, next) => {
  console.log({ ...req.body });

  res.redirect("/shop");
};

const getProductList = (req, res, next) => {
  res.render("shop", { pageTitle: "shop page", props: products });
};

module.exports = { getProduct, postProduct, getProductList };
