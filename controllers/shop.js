const Products = require("../models/products");

const getIndex = (req, res, next) => {
  const allProducts = Products.fetchAll((productData) => {
    res.render("shop/index", {
      pageTitle: "Index page | shop",
      props: productData,
      path: "/",
    });
  });
};

const getProductList = (req, res, next) => {
  const allProducts = Products.fetchAll((productData) => {
    res.render("shop/product-list", {
      pageTitle: "products-list page | shop",
      props: productData,
      path: "/products",
    });
  });
};

const getCart = (req, res, next) => {
  res.render("shop/cart", {
    pageTitle: "cart page | shop",
    path: "/cart",
  });
};

const getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    pageTitle: "shop page | shop",
    path: "/checkout",
  });
};

module.exports = { getProductList, getIndex, getCart, getCheckout };
