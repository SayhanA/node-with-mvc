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
  constructor(name, description) {
    (this.name = name), (this.description = description);
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
