const Products = require("../models/products");

const getProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product Form",
    path: "/admin/add-product",
  });
};

const postProduct = (req, res, next) => {
  const product = new Products(req.body.title, req.body.description);
  product.save();

  res.redirect("/");
};

const getProductList = (req, res, next) => {
  const allProducts = Products.fetchAll((productData) => {
    res.render("shop/product-list", { pageTitle: "shop page", props: productData, path: "/" });
  });
};

module.exports = { getProduct, postProduct, getProductList };
