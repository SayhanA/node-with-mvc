const fs = require("fs");
const path = require("path");
const rootPath = require("../utils/path");
const filePath = path.join(rootPath, "data", "products.json");

class Products {
  constructor(name, description) {
    (this.name = name), (this.description = description);
  }

  save() {
    fs.readFile(filePath, (err, data) => {
      let product = [];
      if (!err) {
        product = JSON.parse(data);
      }
      product.push(this);

      fs.writeFile(filePath, JSON.stringify(product), (error) => {
        if (error) console.log(error);
      });
    });
  }

  static fetchAll(cb) {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        cb([]);
      } else {
        cb(JSON.parse(data));
      }
    });
  }
}

module.exports = Products;
