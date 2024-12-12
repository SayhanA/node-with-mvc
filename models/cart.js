const fs = require("fs");
const path = require("path");
const rootPath = require("../utils/path.js");

const filePath = path.join(rootPath, "data", "cart.json");

class Cart {
  static addProduct(id, productPrice) {
    fs.readFile(filePath, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }

      const isExistIndex = cart.products.findIndex((pro) => pro.id === id);
      const isExist = cart.products[isExistIndex];
      let updatedProduct;
      if (isExist) {
        updatedProduct = { ...isExist };
        updatedProduct.qty = updatedProduct.qty + 1;
        cart.products = [...cart.products];
        cart.products[isExistIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      cart.totalPrice = cart.totalPrice + +productPrice;

      fs.writeFile(filePath, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }

  static deleteProduct(id, productPrice) {
    fs.readFile(filePath, (err, fileContent) => {
      if (err) {
        console.log(err);
      }
      const cart = JSON.parse(fileContent);
      const deletedProduct = cart.products.find((prod) => prod.id === id);
      if (!deletedProduct) return;
      const remainingProducts = cart.products.filter((prod) => prod.id != id);

      console.log(cart.totalPrice, deletedProduct.qty, productPrice);

      const remainingCost = cart.totalPrice - deletedProduct.qty * productPrice;
      console.log(remainingCost);

      const newCart = {
        products: remainingProducts,
        totalPrice: remainingCost,
      };
      fs.writeFile(filePath, JSON.stringify(newCart), (err) => {
        console.log(err);
      });
    });
  }

  static getProductsFromCart(cb) {
    fs.readFile(filePath, (err, fileContent) => {
      if (err) return cb(null);
      else {
        const cart = JSON.parse(fileContent);
        cb(cart);
      }
    });
  }
}

module.exports = Cart;
