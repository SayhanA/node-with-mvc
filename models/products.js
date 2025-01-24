const { ObjectId } = require("mongodb");

const getDb = require("../utils/database").getDb;

class Products {
  constructor(title, description, imageUrl, price) {
    // (this.id = id),
    (this.title = title),
      (this.price = price),
      (this.imageUrl = imageUrl),
      (this.description = description);
  }
  save() {
    const db = getDb("new");
    return db
      .collection("products")
      .insertOne(this)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection("products")
      .find()
      .toArray()
      .then((products) => {
        return products;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static findById(productId) {
    const db = getDb();
    return db
      .collection("products")
      .findOne({ _id: new ObjectId(productId) })
      .then((product) => {
        console.log(product);
        return product;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = Products;
