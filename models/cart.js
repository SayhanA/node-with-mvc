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
  };

  static deleteProduct(id, productPrice){
    fs.readFile(filePath, (err, fileContent) => {
      
    })
  }
}

module.exports = Cart;
