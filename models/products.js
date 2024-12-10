const fs = require("fs");
const path = require("path");
const rootPath = require("../utils/path");
const filePath = path.join(rootPath, "data", "products.json");

const getProductFromFile = (cb) => {
  fs.readFile(filePath, (err, data) => {
    err ? cb([]) : cb(JSON.parse(data));
  });
};

class Products {
  constructor(name, description, imgUrl, price) {
    (this.name = name),
      (this.description = description),
      (this.imgUrl = imgUrl),
      (this.price = price);
  }

  save() {
    getProductFromFile((product) => {
      product.push(this);

      fs.writeFile(filePath, JSON.stringify(product), (error) => {
        if (error) console.log(error);
      });
    });
  }

  static fetchAll(cb) {
    getProductFromFile(cb);
  }
}

module.exports = Products;
