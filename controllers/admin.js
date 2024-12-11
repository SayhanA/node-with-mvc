const Products = require("../models/products");

const getProductForm = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product Form",
    path: "/admin/add-product",
    edit: false,
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
    (id = null),
    req.body.title,
    req.body.description,
    req.body.imgUrl,
    req.body.price
  );
  product.save();

  res.redirect("/");
};

const getEditProduct = (req, res, next) => {
  const productId = req.params.productId;
  const editMode = req.query.edit;
  if (!editMode) return res.redirect("/");
  Products.findById(productId, (product) => {
    // console.log({ product });
    res.render("admin/edit-product", {
      pageTitle: "Edit product page | admin",
      path: "admin/edit-product",
      props: product,
      edit: editMode,
    });
  });
};

const postEditProduct = (req, res, next) => {
  const name = req.body.
  res.redirect("/admin/products");
};

module.exports = {
  getProductForm,
  postProduct,
  getProducts,
  getEditProduct,
  postEditProduct,
};
