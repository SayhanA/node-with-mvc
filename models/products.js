const fs = require("fs");
const path = require("path");
const { v4: uuid } = require("uuid");
const rootPath = require("../utils/path");
const filePath = path.join(rootPath, "data", "products.json");

const getProductFromFile = (cb) => {
  fs.readFile(filePath, (err, data) => {
    err ? cb([]) : cb(JSON.parse(data));
  });
};

class Products {
  constructor(id, title, description, imgUrl, price) {
    (this.id = id),
      (this.title = title),
      (this.description = description),
      (this.imgUrl = imgUrl),
      (this.price = price);
  }

  save() {
    getProductFromFile((product) => {
      if (this.id) {
        const existingProductIndex = product.findIndex(
          (prod) => prod.id === this.id
        );
        const updatedProducts = [...product];
        updatedProducts[existingProductIndex] = this;

        fs.writeFile(filePath, JSON.stringify(updatedProducts), (err) => {
          console.log(err);
        });
      } else {
        this.id = uuid();
        product.push(this);

        fs.writeFile(filePath, JSON.stringify(product), (error) => {
          if (error) console.log(error);
        });
      }
    });
  }

  static fetchAll(cb) {
    getProductFromFile(cb);
  }

  static findById(id, cb) {
    getProductFromFile((products) => {
      const product = products.find((prod) => prod.id === id);
      cb(product);
    });
  }
}

module.exports = Products;
