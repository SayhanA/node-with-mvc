const Products = require("../models/products");

const getProductForm = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product Form",
    path: "/admin/add-product",
  });
};

const getProducts = (req, res, next) => {
  const allProducts = Products.fetchAll((productData) => {
    res.render("admin/products", {
      pageTitle: "products page | admin",
      props: productData,
      path: "/admin/products",
    });
  });
};

const postProduct = (req, res, next) => {
  const product = new Products(
    req.body.title,
    req.body.description,
    req.body.imgUrl,
    req.body.price
  );
  product.save();

  res.redirect("/");
};

const getEditProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Edit product page | admin",
    path: "admin/edit-product",
  });
};

module.exports = { getProductForm, postProduct, getProducts, getEditProduct };
