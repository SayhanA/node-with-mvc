const Products = require("../models/products");

const getProductForm = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product Form",
    path: "/admin/add-product",
    edit: false,
  });
};

const getProducts = (req, res, next) => {
  Products.fetchAll()
    .then(([rows, fieldData]) => {
      res.render("admin/products", {
        pageTitle: "products page | admin",
        props: rows,
        path: "/admin/products",
      });
    })
    .catch((err) => console.error(err));
};

const postProduct = (req, res, next) => {
  const product = new Products(
    // (id = null),
    req.body.title,
    req.body.description,
    req.body.imageUrl,
    req.body.price
  );
  product
    .save()
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
    });

  res.redirect("/");
};

const getEditProduct = (req, res, next) => {
  const productId = req.params.productId;
  const editMode = req.query.edit;
  if (!editMode) return res.redirect("/");
  Products.findById(productId, (product) => {
    res.render("admin/edit-product", {
      pageTitle: "Edit product page | admin",
      path: "admin/edit-product",
      props: product,
      edit: editMode,
    });
  });
};

const postEditProduct = (req, res, next) => {
  const updatedProduct = new Products(
    req.body.id,
    req.body.title,
    req.body.description,
    req.body.imageUrl,
    req.body.price
  );
  updatedProduct
    .save()
    .then(() => {
      res.redirect("/admin/products");
    })
    .catch((err) => console.error(err));
};

const deleteProduct = (req, res, next) => {
  const { id, price } = req.body;
  Products.deleteById(id, price);
  res.redirect("/admin/products");
};

module.exports = {
  getProductForm,
  postProduct,
  getProducts,
  getEditProduct,
  postEditProduct,
  deleteProduct,
};
