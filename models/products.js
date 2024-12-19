const db = require("../utils/database");
const { deleteProduct } = require("./cart");

class Products {
  constructor(id, title, description, imgUrl, price) {
    (this.id = id),
      (this.title = title),
      (this.description = description),
      (this.imgUrl = imgUrl),
      (this.price = price);
  }

  save() {}

  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }

  static findById(id, cb) {}

  static deleteById(id, productPrice) {}
}

module.exports = Products;
