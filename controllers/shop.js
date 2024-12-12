const Products = require("../models/products");
const Cart = require("../models/cart");

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

const getProductById = (req, res, next) => {
  const id = req?.params?.productId;
  const productById = Products.findById(id, (data) => {
    res.render("shop/product-detail", {
      props: data,
      pageTitle: data.name,
      path: "/products",
    });
  });
};

const getCart = (req, res, next) => {
  Cart.getProductsFromCart((cartPros) => {
    const productList = [];
    Products.fetchAll((products) => {
      for (product of cartPros.products) {
        const matchProduct = products.find((prod) => prod.id === product.id);
        productList.push({ ...matchProduct, qty: product.qty });
      }
      res.render("shop/cart", {
        props: { products: productList, totalPrice: cartPros.totalPrice },
        pageTitle: "cart page | shop",
        path: "/cart",
      });
    });
  });
};

const postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Products.findById(prodId, (product) => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect("/cart");
};

const postDeleteCart = (req, res, next) => {
  const id = req.body.id;
  Products.findById(id, (pro) => {
    Cart.deleteProduct(id, pro.price);
    res.redirect("/cart");
  });
};

const getOrder = (req, res, next) => {
  res.render("shop/orders", {
    pageTitle: "Your Orders | shop",
    path: "/orders",
  });
};

const getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    pageTitle: "shop page | shop",
    path: "/checkout",
  });
};

module.exports = {
  getProductList,
  getIndex,
  getCart,
  getOrder,
  getCheckout,
  getProductById,
  postCart,
  postDeleteCart,
};
